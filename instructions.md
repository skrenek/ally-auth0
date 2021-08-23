The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { Auth0Driver, Auth0Config } from 'ally-auth0/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    auth0: {
      config: Auth0Config
      implementation: Auth0Driver
    }
  }
}
```

----

Don't forget to complete the environment variables in your .env file:
* AUTH0_CLIENT_ID
* AUTH0_CLIENT_SECRET
