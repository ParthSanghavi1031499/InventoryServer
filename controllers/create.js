var headerContentType = "Content-Type";
var resDataType = "application/json";
const Items = require('../models/itemModel')

exports.createInventory = ( req, res, next ) => {

  res.setHeader(headerContentType, resDataType);
  let requestBody = req.body;
  if (Number(requestBody.quantity)<=0){
    res.statusCode = 400
    res.json({
      success : false,
      message: `Item quantity should be atleast 1.`,
    })
  }else{
    
    Items.findOne( { itemCode: requestBody.itemCode} ).then((item)=>{
      if(!item){
        Items.create( requestBody )
        .then( item => {
          res.statusCode = 201
          res.json({
            success : true,
            message: `${item.itemName} added to the inventory!`,
            item : item
          })
        })
        .catch( err => {
          res.statusCode = 400
          res.json({
            success : false,
            errorMessage : err,
            message: `Sorry, the item could not be added to the inventory! Please try again in some time.`,
          })
        })
      } else{
        res.statusCode = 400
        if (!item.isDeleted){
          // if item is already present in the inventory
          res.json({
          success : false,
          message: `Sorry, the item already exists in the inventory!`,
          })
        } else {
          // if item is present in the deleted list
            res.json({
            success : false,
            message: `Sorry, the item already exists in the deleted items list of the inventory!`,
          })
          /*
          In future, rather than giving the error, we can add the deleted item back to the 
          inventory and update it wiith the latest details specified by the user.
          */
        }
      }
    })
  }

}