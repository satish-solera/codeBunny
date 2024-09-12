const {Schema , model} = require ('mongoose')

const userSchema = new Schema (
 
    {
        userName : {

        type : String ,
        required : true ,
        length : 20 

    } ,
    
    password1 : {
      
        type : String ,
        required : true,
        lenght : 10
    },

    password2 : {
        type : String ,
        required : true ,
        length : 10
    }

}

)

module.exports = model('users' , userSchema) 