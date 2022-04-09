const router = require('express').Router()

const getHome = async (req, res) => {
  return res.render('home');
}

router.route('/')
  .get(getHome)


module.exports = router