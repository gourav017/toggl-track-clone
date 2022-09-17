const express = require("express");

const User = require("../schema/users.schema");

const userRoute = express.Router();

//get
userRoute.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});
//get by id
userRoute.get("/:id", async (req, res) => {
  const users = await User.findById(req.params.id);
  res.send(users);
});

//post
userRoute.post("/", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.send(users);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

//delete
userRoute.delete("/:id",async(req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id)
    res.send("deleted sucessfully")
  }catch(e){
    res.status(401).send(e.message)
  }
})




//updated data



module.exports = userRoute;