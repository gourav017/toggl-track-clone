const express = require("express");

const mind = require("../schema/mind.schema");

const mindSchema = express.Router();

//get
mindSchema.get("/", async (req, res) => {
  const minds = await mind.find();
  res.send(minds);
});
//get by id
mindSchema.get("/:id", async (req, res) => {
  const minds = await mind.findById(req.params.id);
  res.send(minds);
});

//post
mindSchema.post("/", async (req, res) => {
  try {
    const minds = await mind.create(req.body);
    res.send(minds);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

//delete
mindSchema.delete("/:id",async(req,res)=>{
  try{
    await mind.findByIdAndDelete(req.params.id)
    res.send("deleted sucessfully")
  }catch(e){
    res.status(401).send(e.message)
  }
})




//updated data



module.exports = mindSchema;