const cron = require('node-cron')
const {
  messageEnum,
  OLD_DATE,
} = require('../consts')

const {
  Robot,
  State,
} = require('../models')

module.exports = async () => {
  const { WARNING, NORMAL } = messageEnum
  const demoOldDate = new Date(OLD_DATE)

  try {
    cron.schedule('* * * * * *', async () => {
      const doc = await Robot.findOne({}, {}, { sort: { _id: -1 } }).lean()
      const { updatedAt = demoOldDate } = doc || {}

      const diffMs = Date.now() - updatedAt.getTime()
      const diffMins = Math.floor((diffMs / 1000) / 60)
      const message = diffMins ? WARNING : NORMAL

      console.log(message)
      await State.updateOne({}, { $set: { state: message } }, { upsert: true })
    })
  } catch (e) {
    console.log({ stack: e.stack }, 'error in cron-job', { message: e.toString() })
  }
}
