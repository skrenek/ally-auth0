import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class Auth0Provider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { Auth0Driver } = await import('../src/Auth0')

    Ally.extend('auth0', (_, __, config, ctx) => {
      return new Auth0Driver(ctx, config)
    })
  }
}
