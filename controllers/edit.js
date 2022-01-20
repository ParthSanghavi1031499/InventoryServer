var headerContentType = "Content-Type";
var resDataType = "application/json";
const Items = require('../models/itemModel')

exports.editInventory = ( req, res, next ) => {

    res.setHeader(headerContentType, resDataType);
    let requestBody = req.body;
    let itemCode = req.params.itemCode

    if (requestBody.itemCode || requestBody.isDeleted || requestBody.deletedComment){
        res.statusCode = 400
        res.json({
            success : false,
            message: `Only item name, item quantity and item description are allowed to be edited. Your request body contains other fields its seems.`,
        })
    } else {

        Items.findOneAndUpdate( {itemCode, isDeleted: false},
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
                message: `Item details updated successfully!`,
                item : item
            })
        })
        .catch( err => {
            res.statusCode = 500
            res.json({
                success : false,
                message: err!={}? `Sorry, the item not be found in the inventory.`:err,
            })
        })
    } 
}
