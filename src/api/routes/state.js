const router = require('express').Router()
const { State } = require('../../models')

router.get('/', (async (req, res) => {
  try {
    const { state, updatedAt } = await State.findOne({}).lean()

    return res.json({
      state,
      timeStamp: updatedAt,
    })
  } catch (e) {
    console.log({ stack: e.stack }, 'error with state route', { message: e.toString() })

    return res.status(503).json({
      error: e,
    })
  }
}))

module.exports = router
