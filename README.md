# Email Sender
This Project sends an email to the specified mail address when requested on the provided REST-API
The entire application is contained within `app.py`

## Installation
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install components.

Set Virtual Environment
```bash
virtualenv venv
```

For OSX/Linux:
```bash
source venv/bin/activate
```
For Windows:
```bash
venv\scripts\activate
```
Install Flask
```bash
pip install Flask
```

## Execution
To run the project
```bash
python app.py
```

## REST-API
API details to receive an email

## Hello World
Used to Print Hello World on Screen

**URL** : `/`

**Method** : `GET`

### Response
`Hello World`

## Email
Used to receive an email

**URL** : `/emails`

**Method** : `POST`

**DATA**

```json
{
    "to": "valid email address",
    "subject": "subject of email",
    "body": "body of the email"
}
```
**Data Example**

```json
{
    "to": "abcd@email.com",
    "subject": "test",
    "body": "hello bot"
}
```

### Success Response

**Content** : `Please Check your Inbox`

### Error Response

**Condition** : If any of the field is not specified in the request data

**Content** : `Please Check the Json Object`

**Condition** : If recepient mail address is not specified

**Content** : `Please check receiver mail address`