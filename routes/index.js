const express = require('express');
const router  = express.Router();
const place = require('../models/place')

/* GET home page */

router.get('/new',(req,res)=>{
  res.render('new');
})
router.post('/new',(req,res,next)=>{
    place.create(req.body)
    .then(place=>{
      res.redirect('/list');
    }).catch(e=>{
      console.log(e);
    })
});

router.get('/list', (req, res)=>{
  place.find()
    .then(rests=>{
      res.render('list', {rests})
    }).catch(e=>{
      console.log(e)
    })
})
router.get('/list/:id', (req, res)=>{
  place.findById(req.params.id)
    .then(place=>{
      res.render('place-detail', place)
    }).catch(e=>{
      console.log(e)
    })
})


router.get('/', (req, res, next) => {
  res.render('index');
});












module.exports = router;
