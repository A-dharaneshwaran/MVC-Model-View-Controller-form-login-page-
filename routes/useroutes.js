const express=require('express');
const router=express.Router();
const controller = require('../controllerss/usercontrol');




router.get('/', controller.home);
router.post('/next', controller.next);

module.exports=router;