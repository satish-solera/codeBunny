const {ComponetsSchema} = require('../models/componetsModel')

// gettinh code componets from dataBase

var data = {
    nameOfComponets : "btnn",
    codeOfComponets : "abc hbddd",
    imgUrl : 'abc.png'
}
const code = (req , res) =>{
     
    res.status(200).send(data.nameOfComponets)
}

const codeByName = (req , res ) => {
    res.send('data is collectes')
}

const imgUrl = (req , res ) =>{
    res.send('urls is abcpmng')
}
module.exports = {code , codeByName , imgUrl}