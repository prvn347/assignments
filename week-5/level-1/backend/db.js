const mongoose = require("mongoose")
const { object } = require("zod")


mongoose.connect("mongodb+srv://admin:bTv7yByzrdkmmpBy@cluster0.iykygz9.mongodb.net/")

const cardSchema = new mongoose.Schema({
    name: String,
    description:String,
    interests:[String],// rightnow I am going with string  but it should be arrya of string toh i'll cover it later 
socials:[String]
})
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});
const Admin = mongoose.model('Admin', AdminSchema);
const card = mongoose.model("Cards",cardSchema)

module.exports ={
    card:card,
    Admin:Admin
}