const {code , codeByName , imgUrl} = require ('../controllers/componetsController')

const {Router} = require('express');

const router = Router();

router.get( '/codecomponets' , code)
router.get( '/nameofcode' , codeByName)
router.get( '/imgurl' , imgUrl)

module.exports = router 