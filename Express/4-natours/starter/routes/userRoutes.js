express=require('express');
const router=express.Router();
router
 .route('/')
 .get(getAllUsers)
 .post(addNewUser);

 router
 .route('/:id')
 .get(getUser)
 .patch(updateUser)
 .delete(deleteUser);

module.exports=router;