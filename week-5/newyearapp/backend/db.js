const mongoose = require("mongoose")
const { string, boolean } = require("zod")


mongoose.connect("your db url")

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