const router = require('express').Router()
const axios = require('axios')
const yup = require('yup')
// const { Example } = require('../../models')
const {
  API_KEY1,
  API_URL,
} = require('../../consts')
const withSchema = require('../../middleware/with-schema')

const schema = yup.object({
  body: yup.object({
    locationName: yup.string().matches(/^[a-zA-Z\s/g]/g).required(),
  }),
})

router.get('/', withSchema(schema), (async (req, res) => {
  const {
    body: {
      locationName,
    },
  } = req

  try {
    const { data } = await axios(`${API_URL}/search?apikey=${API_KEY1}&q=${locationName}`)

    return res.json({
      data,
    })
  } catch (e) {
    console.log({ stack: e.stack }, 'error with autocomplete route', { message: e.toString() })

    return res.status(503).json({
      error: e,
    })
  }
}))

module.exports = router
