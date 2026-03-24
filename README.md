# Nuxt Minimal Starter

1. Create DB on neon
2. Create HyperDrive on CF and pass direct connection string
3. Ensure following env vars in CF build:

```
NUXT_BETTER_AUTH_SECRET=<random 32 character string>
DATABASE_URL=<direct connection string from neon so that migration applies>
```
