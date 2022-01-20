var headerContentType = "Content-Type";
var resDataType = "application/json";
const Items = require('../models/itemModel')

exports.removeItem = ( req, res, next ) => {

    res.setHeader(headerContentType, resDataType);
    let requestBody = req.body;
    
    if (requestBody==={}){
        res.statusCode = 404
        res.json({
            success : false,
            errorMessage : "No body found in HTTP request!",
            message: `Sorry, the item could not be processed! Please try again in some time.`,
        })
    }

    let itemCode = req.params.itemCode
    let {shouldDeleted, deletedComment} = requestBody
    let updateDetails = {
        isDeleted: shouldDeleted,
        deletedComment: shouldDeleted?deletedComment:""
    }

    Items.findOneAndUpdate( {itemCode},
    {
        $set: updateDetails,
    },
    {
        new: true
    })
    .then( item => {
        res.statusCode = 200
        res.json({
            success : true,
            message: `${item.itemName} processed successfully!`,
            item : item
        })
    })
    .catch( err => {
        res.statusCode = 500
        res.json({
            success : false,
            message: err!={}?`Sorry, item not found in the database.`:err,
        })
    })
}