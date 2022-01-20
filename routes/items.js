var express = require('express');
var itemsRouter = express.Router();

let fetch = require('../controllers/fetch')
let create = require("../controllers/create")
let edit = require('../controllers/edit')
let remove = require('../controllers/remove')

itemsRouter.route('/')
.get(fetch.fetchInventory)
.post(create.createInventory)

itemsRouter.route('/:itemId')
.put(edit.editInventory)
.delete(remove.removeItem)

itemsRouter.get('/deletedItems',fetch.fetchDeletedItems)

module.exports = itemsRouter;
