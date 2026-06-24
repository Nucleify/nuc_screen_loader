import type { App } from 'vue'

import { NucScreenLoader } from 'nucleify'

export function registerNucScreenLoader(app: App<Element>): void {
  app.component('nuc-screen-loader', NucScreenLoader)
}
