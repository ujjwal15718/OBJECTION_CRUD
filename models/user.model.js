const db=require("../ config/db.config")
const{Model}=require("objection")
Model.knex(db)

class Customer extends Model{
    static get tableName(){
        return "customer"
    }
    static get jsonSchema(){
        return {
            type:'object',
            required:['name','email','product'],
            properties:{
                id:'integer',
                name:{
                    type:'string',
                },
                email:{
                    type:'string',
                },
                product:{
                    type:'string'
                }
            }
        }
    }
}
module.exports = Customer