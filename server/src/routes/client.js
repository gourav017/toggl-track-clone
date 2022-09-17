const express = require("express");

const client = require("../schema/client.schema");

const clientSchema = express.Router();

//get
clientSchema.get("/", async (req, res) => {
  const clients = await client.find();
  res.send(clients);
});
//get by id
clientSchema.get("/:id", async (req, res) => {
  const clients = await client.findById(req.params.id);
  res.send(clients);
});

//post
clientSchema.post("/", async (req, res) => {
  try {
    const clients = await client.create(req.body);
    res.send(clients);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

//delete
clientSchema.delete("/:id",async(req,res)=>{
  try{
    await client.findByIdAndDelete(req.params.id)
    res.send("deleted sucessfully")
  }catch(e){
    res.status(401).send(e.message)
  }
})




//updated data



module.exports = clientSchema;