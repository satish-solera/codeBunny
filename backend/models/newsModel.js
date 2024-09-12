const {Schema , model} = require('mongoose');

const newsSchema = new Schema(

    {
        name : {
            type : String,
            required : true,
        },


        email : {
            type : String,
            required : true
        }
    }
)

module.exports = model( 'news' , newsSchema)