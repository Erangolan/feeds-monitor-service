const router = require('express').Router()
const multipart = require('connect-multiparty')
const { Robot } = require('../../models')

const multipartMiddleware = multipart()

router.post('/', multipartMiddleware, (async (req, res) => {
  const {
    files: {
      file: {
        originalFilename,
      },
    },
  } = req
  try {
    await Robot.updateOne(
      { robotId: originalFilename },
      { $set: { robotId: originalFilename } },
      { upsert: true },
    )

    return res.send('file accepted!')
  } catch (e) {
    console.log({ stack: e.stack }, 'error with uploadind-files route', { message: e.toString() })

    return res.status(503).json({
      error: e,
    })
  }
}))

module.exports = router
