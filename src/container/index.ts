/**
 * Simple Service Container for Node.js written in TypeScript.
 * Copyright (C) 2021 Filip "Mia" Vottus
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * The Container class representing the Service Container.
 */
class Container {
  _services: Record<string, unknown> = {}

  constructor(services?: Record<string, unknown>) {
    if (services) this.register(services)
  }

  /**
   * Register services in the container.
   *
   * @param {Record<string, unknown>} services
   * @returns {Container} Instance of this container
   */
  public register(services: Record<string, unknown>): Container {
    for (const serviceName in services) {
      this._services[serviceName] = services[serviceName]
    }

    return this
  }

  /**
   * Get a service from this container.
   *
   * @param {string} serviceName Name of this service.
   * @returns {T} The service
   */
  public service<T>(serviceName: string): T {
    return this._services[serviceName] as T
  }

  /**
   * Unregister services from the container.
   * @param serviceNames Names of services to unregister
   */
  public unregister(serviceNames: string[]) {
    serviceNames.forEach((name) => (this._services[name] = undefined))
  }
}

export default Container
