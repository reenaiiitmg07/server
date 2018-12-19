const User=require('../models/user');

exports.signup=function(req,res,next){
//console.log(req.body);
const email=req.body.email;
const password=req.body.password;
  //see if a user with given email exist
User.findOne({email:email},function(err,existingUser){
  if(err){return nex(err);
  console.log(err);}
  //if a user with email does exist,return Error
  if(existingUser){
    return res.status(422).send({email:'email is in use'});
  }
  //if a user not exist create and save
const user=new User({
  email:email,
  password:password
});
user.save(function(err){
  if(err){return next(err);}
  res.json(user);
});

  //respond to requested indicating the user was created

});


}
