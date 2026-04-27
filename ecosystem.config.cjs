module.exports = {
  apps: [{
    name: 'kovil-dev',
    script: 'node_modules/next/dist/bin/next',
    args: 'dev -p 3001',
    cwd: 'C:/Users/davis/Projects/Kovil-AI-V2-Website',
    watch: false,
    autorestart: true,
    max_restarts: 10,
    restart_delay: 2000,
    pre_stop: 'node -e "require(\'fs\').rmSync(\'.next/cache\', {recursive:true, force:true})"',
    env: {
      NODE_ENV: 'development'
    }
  }]
}
