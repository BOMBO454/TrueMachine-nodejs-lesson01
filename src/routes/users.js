var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.post('/', function(req, res, next) {
  const { firstName } = req.body
  userController.create({firstName}).then(data=>{
    res.json({data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});
router.get('/', function(req, res, next) {
  userController.get().then(data=>{
    res.json({data:data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});
router.put('/', function(req, res, next) {
  const { id,firstName } = req.body
  userController.edit(id,{firstName}).then(data=>{
    res.json({data:data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});
router.delete('/', function(req, res, next) {
  const { id } = req.body
  userController.delete(id).then(data=>{
    res.json({data:data});
  }).catch(err=>{
    res.status(400).json(err)
  })
});

module.exports = router;
