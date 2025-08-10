import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

// Caso der erro de importação, colocar p type como module no package.json
export default defineConfig({
    plugins: [tsConfigPaths()],
    test: {
        globals: true,
    },
})
