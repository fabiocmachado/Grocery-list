import express from "express";
import List from "../models/list"
import mongoose from "mongoose";

const router = express.Router();

router.post('/list', async (req, res) => {
    const { product, section } = req.body;
  
    try {
    const list = new List({ product, section });
    await list.save();
    res.send(list);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get('/list', async (req, res) => {
  try {
    const list = await List.find({});
    res.send(list);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get('/list/:id', async (req, res) => {
  const { id } = req.params;
  var valid = mongoose.Types.ObjectId.isValid(req.params.id);
  
  try {
    if(valid) {
      const list = await List.findById(id);
      res.send(list);
      
      if (!list){
        res.status(404).json({msg: "Product wasn't found."});
        return;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.put('/list/:id', async (req, res) => {
  const { id } = req.params;
  const { product, section } = req.body;

  try {
    const list = await List.findByIdAndUpdate(id, { product, section }, { new: true });
    res.send(list);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete('/list/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const list = await List.findByIdAndDelete(id);
    res.send(list);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;