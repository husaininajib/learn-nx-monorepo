import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run quacker-web:start' },
      ciWebServerCommand: 'nx run quacker-web:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
