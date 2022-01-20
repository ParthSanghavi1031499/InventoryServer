var headerContentType = "Content-Type";
var resDataType = "application/json";
const Items = require('../models/itemModel')

exports.editInventory = ( req, res, next ) => {

    res.setHeader(headerContentType, resDataType);
    let requestBody = req.body;
    let itemId = req.params.itemId
    Items.findByIdAndUpdate( itemId,
    {
        $set: requestBody
    },
    {
        new: true
    })
    .then( item => {
        res.statusCode = 200
        res.json({
            success : true,
            message: `${item.itemName} details updated successfully!`,
            item : item
        })
    })
    .catch( err => {
        res.statusCode = 500
        res.json({
            success : false,
            errorMessage : err,
            message: `Sorry, the item could not be updated! Please try again in some time.`,
        })
    })
}