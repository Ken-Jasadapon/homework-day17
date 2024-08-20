# Contact Management API
This is a simple Contact Management API built with Node.js and Express.js. The API allows you to create, read, update, and delete (CRUD) contact information. It's designed for learning and basic usage in managing contact data.

# Features
● GET /contacts: Retrieve a list of all contacts.

● GET /contacts/: Retrieve a single contact by its ID.

● POST /contacts/: Add a new contact. If an ID is not provided, it will auto-generate one.

● PUT /contacts/: Update an existing contact by its ID.

● DELETE /contacts/: Delete a contact by its ID.

# API Endpoints
● Get All Contacts

1.URL: /contacts

2.Method: GET

3.Response:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "123-456-7890"
  },
  ...
]
```

● Get Contact by ID

1.URL: /contacts/:id

2.Method: GET

3.Response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```

● Create New Contact

1.URL: /contacts

2.Method: POST

3.Request Body:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```

4.Response:

```json
{
  "id": 2,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```

● Update Contact by ID

1.URL: /contacts/:id

2.Method: PUT

3.Request Body:

```json
{
  "email": "newemail@example.com"
}
```

4.Response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "newemail@example.com",
  "phone": "123-456-7890"
}
```

● Delete Contact by ID

1.URL: /contacts/:id

2.Method: DELETE

3.Response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```
