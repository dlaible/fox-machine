import * as child_process from 'child_process'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const getGitCommitShort = () => {
  const CMD_GIT_COMMIT_SHORT = 'git rev-parse --short HEAD'
  return child_process.execSync(CMD_GIT_COMMIT_SHORT).toString().trim()
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    GIT_COMMIT: JSON.stringify(getGitCommitShort())
  },
  plugins: [
    reactRefresh(),
  ],
})
