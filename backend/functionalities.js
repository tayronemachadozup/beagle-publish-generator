const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FunctionalitySchema = new Schema({
  name: { type: String, required: true, max: 256 },
});
let Functionality = mongoose.model('Functionality', FunctionalitySchema);

router.get('/', (req, res) => {
  Functionality.find({}, (err, functionalities) => {
    if (err) next(err)
    res.send(functionalities)
  })
})

router.post('/', (req, res) => {
  console.log(req.body)
  let schema = new Functionality({ name: req.body.name })
  schema.save()
    .then(() => {
      res.status(201)
      res.send("")
    })
    .catch(e => res.send(e))
})

router.delete('/:id', (req, res) => {
  Functionality.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err)
    res.status(204)
    res.send("")
  })
})

module.exports = router