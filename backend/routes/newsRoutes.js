const {getNews, maangData , jobData} = require('../controllers/newsController')

const {Router} = require('express');


const router = Router()

// api ka route pahle 'app.use' main define kar chuke , -
// ab bas hame uske through uske jitne bhi child api hai use handle karna hai

// fhir issi api ke through , respected controoller invoked honge
router.get('/news' , getNews);
router.get('/maangdata' , maangData);
router.post('/jobdata' , jobData)




module.exports = router