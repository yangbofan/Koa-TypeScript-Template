import * as log4js from 'log4js'
import * as path from 'path'
import * as fs from 'fs'

const logDirectory = path.join(__dirname, 'logFile')
fs.mkdirSync(logDirectory, { recursive: true })

log4js.configure({
  appenders: {
    fileAppender: {
      type: 'dateFile',
      filename: path.join(logDirectory, '~'),
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      maxLogSize: 3 * 1024 * 1024,
      backups: 7
    },
    consoleAppender: {
      type: 'stdout'
    }
  },
  categories: {
    default: { appenders: ['fileAppender', 'consoleAppender'], level: 'info' }
  }
})

const logger = log4js.getLogger()

export default logger
