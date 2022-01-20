var headerContentType = "Content-Type";
var resDataType = "application/json";
const Items = require('../models/itemModel')

exports.createInventory = ( req, res, next ) => {

  res.setHeader(headerContentType, resDataType);
  let requestBody = req.body;
  Items.create( requestBody )
  .then( item => {
    res.statusCode = 200
    res.json({
      success : true,
      message: `${item.itemName} added to the inventory!`,
      item : item
    })
  })
  .catch( err => {
    res.statusCode = 500
    res.json({
      success : false,
      errorMessage : err,
      message: `Sorry, the item could not be added to the inventory! Please try again in some time.`,
    })
  })

}