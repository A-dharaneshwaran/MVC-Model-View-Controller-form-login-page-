const moodel=require('../model/usermodel');``





const home=(req, res) => {
  res.render('home');
}



const next= (req, res) => {
const name=moodel.getuser(req.body.name);
//render la object than kudukanum
if(name!=null){
res.render('next',{name})}
else{
  res.redirect('/');
} 
}




module.exports = {
  home,next}