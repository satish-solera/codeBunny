const {signUp , logIn} = require ('../controllers/userController')
const {Router} = require ('express')


const router = Router()

router.post('/signup' , signUp);
router.get('/login' , logIn)

module.exports = router 