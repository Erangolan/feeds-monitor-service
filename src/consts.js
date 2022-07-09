require('dotenv').config()

const packagejson = require('../package.json')

const messageEnum = Object.freeze({
  WARNING: 'Warning',
  NORMAL: 'Back to normal',
})

const OLD_DATE = '2022-03-14T09:25:30.820'

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  PORT,
} = process.env

module.exports = {
  DB_HOST,
  DB_USER,
  DB_PASS,
  PORT,
  messageEnum,
  OLD_DATE,
  SERVICE_NAME: `${packagejson.name}:${packagejson.version}`,
}
