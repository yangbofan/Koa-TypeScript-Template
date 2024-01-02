import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config()

export const { PORT } = process.env

export const SESSION_CONFIG = {
  key: 'base_session_key',
  maxAge: 4 * 60 * 60 * 1000,
  httpOnly: true,
  signed: true,
  rolling: true,
  renew: false
}

export const appApath = path.join(__dirname, './common/static/appA')
export const appBpath = path.join(__dirname, './common/static/appB')
