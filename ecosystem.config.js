const os = require('os')
const path = require('path')
const { name } = require('./package.json')

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/index.js'),
      instances: os.cpus().length,
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  ]
}
