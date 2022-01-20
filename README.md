# Shopify Toy Inventory Server
This assignment is a part of the Summer internship 2022 application for Backend developer at Shopify.
As the name suggests, this is the backend server created with node.js and express to manage an inventory of a company.

## Features
1.  Basic CRUD Functionality:
    - CREATE items for the inventory
    - EDIT items of the inventory
    - DELETE items from the inventory
    - VIEW a list of the items in the inventory.

2.  Required additional feature:
    - When deleting, adding deletion comments and undo deletion of an item is possible.


## Installation
Installation of [node.js](https://nodejs.org/en/) is required to run the server. 
Additionally, use the node package manager "npm" to install libraries and required components.

After cloning the repository, in the directory path on the command line, perform
```bash
npm install
```

## Execution
To run the server locally
```bash
npm run start
```
Now the server should be ready to listen on port 3000.

## REST-API
API options for the features listed above with example requests and responses.

### Fetch all the items in the inventory
Used to fetch all the items in the inventory.

**URL** : `/`

**Method** : `GET`

### Response
```json
{
    "success": true,
    "message": "",
    "length": 1,
    "data": [
        {
            "_id": "61e78309d0cdfd3bc182bd53",
            "itemCode": "ACZ123",
            "itemName": "Item1",
            "description": "Item1 is to be sold in bulk",
            "quantity": 50,
            "isDeleted": false,
            "deletedComment": ""
        }   
    ]
}
```

### Create a new item for the inventory
Used to create item for the inventory.

**URL** : `/`

**Method** : `POST`

**DATA**

```json
{
	"itemCode" : "Valid Item Code",
	"itemName": "Item name",
	"description": "description for the item",
	"quantity": "quantity of items"
}
```
**Data Example**

```json
{
	"itemCode" : "ACZ123",
	"itemName": "Item1",
	"description": "This is the first item of the inventory",
	"quantity": 20
}
```

### Success Response

```json
{
    "success": true,
    "message": "Item2 added to the inventory!",
    "item": {
        "itemCode": "ACZ152",
        "itemName": "Item2",
        "description": "This is item2 of the inventory.",
        "quantity": 50,
        "isDeleted": false,
        "deletedComment": "",
        "_id": "61e8ef1d577407d63d4dead2"
    }
}
```

### Error Response

**Condition** : If item already present in the inventory.

**Response**

```json
{
    "success": false,
    "message": "Sorry, the item already exists in the inventory!"
}
```

**Condition** : If item is present in the deleted items list of the inventory.

**Response**

```json
{
    "success": false,
    "message": "Sorry, the item already exists in the deleted items list of the inventory!"
}
```

### Edit an item in the inventory
Used to edit the details of an item in the inventory.

**URL** : `/:itemCode`

**Method** : `PUT`

**DATA**

```json
{
	"itemName": "Item name",
	"description": "description for the item",
	"quantity": "quantity of items"
}
```

**URL Example** : `/ACZ152`

**Data Example**

```json
{
	"itemName": "Second Item",
}
```

### Success Response

```json
{
    "success": true,
    "message": "Item details updated successfully!",
    "item": {
        "_id": "61e8ef1d577407d63d4dead2",
        "itemCode": "ACZ152",
        "itemName": "Second Item",
        "description": "This is item2 of the inventory.",
        "quantity": 50,
        "isDeleted": false,
        "deletedComment": ""
    }
}
```

### Error Response

**Condition** : If change requested for itemCode or isDeleted or deletedComment field.

**Response**

```json
{
    "success": false,
    "message": "Only item name, item quantity and item description are allowed to be edited. Your request body contains other fields its seems."
}
```

### Delete an item from the inventory
Used to remove an item from inventory and add it to the deleted items list.

**URL** : `/:itemCode`

**Method** : `DELETE`

**DATA**

```json
{
	"shouldDeleted": true,
	"deletedComment": "Comment for deletion"
}
```

**URL Example** : `/ACZ152`

**Data Example**

```json
{
	"shouldDeleted": true,
	"deletedComment":"Item not needed anymore"
}
```

### Response

```json
{
    "success": true,
    "message": "Second Item processed successfully!",
    "item": {
        "_id": "61e8ef1d577407d63d4dead2",
        "itemCode": "ACZ152",
        "itemName": "Second Item",
        "description": "This is item2 of the inventory.",
        "quantity": 50,
        "isDeleted": true,
        "deletedComment": "Item not needed anymore"
    }
}
```

### Undelete an item from the deleted items list
Used to undelete a deleted item.

**URL** : `/:itemCode`

**Method** : `DELETE`

**DATA**

```json
{
	"shouldDeleted": false,
}
```

**URL Example** : `/ACZ152`

**Data Example**

```json
{
	"shouldDeleted": false,
}
```

### Response

```json
{
    "success": true,
    "message": "Second Item processed successfully!",
    "item": {
        "_id": "61e8ef1d577407d63d4dead2",
        "itemCode": "ACZ152",
        "itemName": "Second Item",
        "description": "This is item2 of the inventory.",
        "quantity": 50,
        "isDeleted": false,
        "deletedComment": ""
    }
}
```