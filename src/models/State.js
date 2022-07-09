const mongoose = require('mongoose')
const { messageEnum } = require('../consts')

mongoose.set('useFindAndModify', false)

const schema = {
  state: { type: messageEnum, default: messageEnum.WARNING },
}

const StateSchema = new mongoose.Schema(schema, {
  timestamps: { createdAt: true }, upsert: true,
})

const State = mongoose.model('State', StateSchema)
module.exports = State
