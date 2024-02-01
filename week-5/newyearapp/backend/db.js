const mongoose = require("mongoose")
const { string, boolean } = require("zod")


mongoose.connect("mongodb+srv://admin:bTv7yByzrdkmmpBy@cluster0.iykygz9.mongodb.net/")

const todoSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean
          
    }
)

const todo= mongoose.model("todos",todoSchema);

module.exports ={
    todo
}