const express = require("express");

const timer = require("../schema/timer.schema");

const timerRoute = express.Router();

//get
timerRoute.get("/", async (req, res) => {
  const minds = await timer.find();
  res.send(minds);
});
//get by id
timerRoute.get("/:id", async (req, res) => {
  const minds = await timer.findById(req.params.id);
  res.send(minds);
});

//post
timerRoute.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const minds = await timer.create(req.body);
    res.send(minds);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

//delete
timerRoute.delete("/:id",async(req,res)=>{
  try{
    await timer.findByIdAndDelete(req.params.id)
    res.send("deleted sucessfully")
  }catch(e){
    res.status(401).send(e.message)
  }
})


//updated data
timerRoute.patch("/:id", async (req, res) => {
  try {
    await timer.findByIdAndUpdate(req.params.id,{...req.body});
    res.send("updated sucessfully");
  } catch (e) {
    res.status(401).send(e.message);
  }
});


module.exports = timerRoute;