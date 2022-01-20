var headerContentType = "Content-Type";
var resDataType = "application/json";
const Items = require('../models/itemModel')

exports.fetchInventory = ( req, res, next ) => {

  res.setHeader(headerContentType, resDataType);
  
  Items.find({ isDeleted: false })
  .then( items => {
    res.statusCode = 200
    res.json({
      success : true,
      message: ``,
      length: items.length,
      data: items
    })
  })
  .catch( err => {
    res.statusCode = 500
    res.json({
      success : false,
      errorMessage : err,
      message: `Sorry, Inventory could not be fetched! Please try again in some time.`,
    })
  })

}

exports.fetchDeletedItems = ( req, res, next ) => {

    res.setHeader(headerContentType, resDataType);
    
    Items.find({ isDeleted: true })
    .then( items => {
      res.statusCode = 200
      res.json({
        success : true,
        message: ``,
        length: items.length,
        data: items
      })
    })
    .catch( err => {
      res.statusCode = 500
      res.json({
        success : false,
        errorMessage : err,
        message: `Sorry, items could not be fetched! Please try again in some time.`,
      })
    })
  
  }
  