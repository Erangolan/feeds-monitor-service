const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const schema = {
  Bank_Code: { type: Number, required: true },
  Bank_Name: { type: String },
}

const ExampleSchema = new mongoose.Schema(schema, {
  timestamps: { createdAt: true }, upsert: true,
})

const Example = mongoose.model('Example', ExampleSchema)
module.exports = Example
