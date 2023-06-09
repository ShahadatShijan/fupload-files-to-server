const path = require("path")
//home page
const homePage = (req,res)=>{
    res.sendFile(path.join(__dirname+"./../views/index.html"))
}


const createUser = (req,res)=>{
    res.send("successed")
}

module.exports = {createUser,homePage};