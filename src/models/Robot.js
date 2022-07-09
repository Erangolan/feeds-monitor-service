const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const schema = {
  robotId: { type: String },
}

const RobotSchema = new mongoose.Schema(schema, {
  timestamps: { createdAt: true }, upsert: true,
})

const Robot = mongoose.model('Robot', RobotSchema)
module.exports = Robot
