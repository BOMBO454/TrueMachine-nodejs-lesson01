const express = require('express')
const router = express.Router()
const chalk = require('chalk')
const productController = require('../controllers/productController')

router.post('/', function(req, res, next) {
  const { name,userId } = req.body
  productController.create({name,userId}).then(data=>{
    res.json({data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});
router.get('/', function(req, res, next) {
  productController.get().then(data=>{
    res.json({data:data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});
router.put('/', function(req, res, next) {
  const { id,name,userId } = req.body
  productController.edit(id,{name,userId}).then(data=>{
    res.json({data:data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});
router.delete('/', function(req, res, next) {
  const { id } = req.body
  productController.delete(id).then(data=>{
    res.json({data:data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});

module.exports = router;
