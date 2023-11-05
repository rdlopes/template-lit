import {playwrightLauncher} from '@web/test-runner-playwright';
import {esbuildPlugin} from "@web/dev-server-esbuild";

export default {
  plugins: [esbuildPlugin({
    ts: true,
    tsconfig: './tsconfig.json'
  })],
  files: 'src/**/*.test.ts',
  nodeResolve: {
    exportConditions: ['production']
  },
  coverage: true,
  concurrentBrowsers: 3,
  browsers: [
    playwrightLauncher({product: 'chromium'}),
    playwrightLauncher({product: 'firefox'}),
    playwrightLauncher({product: 'webkit'}),
  ],
};
