const router = require('express').Router();
const UserServices=require("../services/service")
const service=new UserServices()
const Joi=require('@hapi/joi')


router.post('/create', async (req, res, next) => {
  // console.log(req.body)
  const{name,email,product}=req.body

  const schema=Joi.object({
    name:Joi.string().max(20).min(3).required(),
    email:Joi.string().min(3).max(30).required(),
    product:Joi.string().min(4).max(20).required()
  })
  let result =schema.validate(req.body)
  if(result.error){
      res.status(400).send(result.error.details[0].message)
      return;
  }
  try{

    await service.createUser(req.body)
    res.send('done')
  }catch(err){
    res.send(err)
  }
});


router.get('/read/:id',(req,res)=>{
  service.readUser(Number(req.params.id),req.body)
  .then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})


router.put('/update/:id',(req,res)=>{ 
  console.log(req.body)
  service.updateUserById(Number(req.params.id),req.body)
  .then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})


router.delete('/delete/:id',(req,res)=>{ 
  service.deleteUserById(Number(req.params.id)).then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})






module.exports = router;
