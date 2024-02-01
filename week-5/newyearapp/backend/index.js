const express = require("express")
const { todo } = require("../backend/db")
const app = express();
const mongoose = require("mongoose")
const { createTodo, updateTodo } = require("../backend/types")
const cors = require("cors")


app.use(cors());

app.use(express.json());


app.post("/todos", async function (req, res) {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send the worong inputs"
        })

        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created on db"
    })
})
app.get("/todos", async function (req, res) {

    // const todos = await todo.find({})
    // res.json({
    //     todos
    // })
})

app.put("/completed", async function (req, res) {

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send the worong inputs"
        })

        return;
    }

    await todo.updateOne({// you can use update payload here
        _id: req.body.id// this is informative

    }, {
        completed: true
    })
    res.json({
        msg: "tod marked as completed"
    })
})
app.delete("/todos", async function (req, res) {
    const deletePayload = req.body;
    const parsedPayload = updateTodo.safeParse(deletePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send the worong inputs"


        })
        return;

    }

    await todo.deleteOne({
        _id: req.body.id
    })
    res.status(200).json({ message: 'Document deleted successfully' })


})

app.put("/update",async function(req,res){

const updatePayload = req.body;
const parsedPayload = updateTodo.safeParse(updatePayload)

if (!parsedPayload.success) {
    res.status(411).json({
        msg: "you send the worong inputs"


    })
    return;

}
await todo.updateOne({
    _id: req.body.id
},
{
title:updatePayload.title,
description: updatePayload.description,
completed:false
})


res.status(511).json({
    msg: "you to do had been updated."
})


})
app.listen(3000);



