import { pbkdf2 } from '@noble/hashes/pbkdf2'
import { sha256 } from '@noble/hashes/sha2'

const VERSION = 'pbkdf2-sha256-v1'
const ITERATIONS = 10_000
const SALT_BYTES = 16
const KEY_BYTES = 32

const encoder = new TextEncoder()

function toBase64(bytes: Uint8Array) {
  let binary = ''

  for (const byte of bytes)
    binary += String.fromCharCode(byte)

  return btoa(binary)
}

function fromBase64(value: string) {
  const binary = atob(value)
  const bytes = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i++)
    bytes[i] = binary.charCodeAt(i)

  return bytes
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length)
    return false

  let diff = 0

  for (let i = 0; i < a.length; i++)
    diff |= a[i]! ^ b[i]!

  return diff === 0
}

function derivePassword(password: string, salt: Uint8Array, iterations: number) {
  return pbkdf2(sha256, encoder.encode(password.normalize('NFKC')), salt, {
    c: iterations,
    dkLen: KEY_BYTES,
  })
}

export async function hashPassword(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES))
  const hash = derivePassword(password, salt, ITERATIONS)

  return [
    VERSION,
    ITERATIONS,
    toBase64(salt),
    toBase64(hash),
  ].join(':')
}

export async function verifyPassword(data: { password: string, hash: string }) {
  const [version, iterationsValue, saltValue, hashValue] = data.hash.split(':')

  if (version !== VERSION || !iterationsValue || !saltValue || !hashValue)
    return false

  const iterations = Number(iterationsValue)

  if (!Number.isSafeInteger(iterations) || iterations < 1)
    return false

  const salt = fromBase64(saltValue)
  const expected = fromBase64(hashValue)
  const actual = derivePassword(data.password, salt, iterations)

  return timingSafeEqual(actual, expected)
}
