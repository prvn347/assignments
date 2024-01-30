const z = require('zod');


// const titleSchema = z.Schema(z.string())
// const descriptionSchema = z.Schema(z.string())
const createTodo = z.object({
    title: z.string(),
description : z.string()

})

const updateTodo = z.object({
    id : z.string()
})


module.exports ={
    createTodo :createTodo,
    updateTodo: updateTodo 
}