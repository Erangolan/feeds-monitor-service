const router = require('express').Router()
const { Robot } = require('../../models')

router.get('/', (async (req, res) => {
  try {
    const robots = await Robot.find({}, 'robotId updatedAt').lean()

    const pretierRobots = robots.map(({ robotId, updatedAt }) => ({
      robotId,
      updatedAt: updatedAt.toString(),
    }))

    return res.json({ pretierRobots })
  } catch (e) {
    console.log({ stack: e.stack }, 'error with info route', { message: e.toString() })

    return res.status(503).json({
      error: e,
    })
  }
}))

module.exports = router
