const {Schema , model} = require ('mongoose')

const ComponetsSchema = new Schema (

    {
        nameOfComponets : {
            type : String ,
            required : true,
            length : 38 
        } ,
        codeOfComponets : {
            type : String ,
            required : true ,
            
        },
        imgUrl : {
            type : String,
            required : true
        }
        
    }
)

module.exports = model( 'componets' , ComponetsSchema)