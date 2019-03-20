# SLEEPSTA

Sleepsta is a mobile application that uses motion tracking to measure sleep. It also has a web application that allows the user to visualize their sleep habits online.

## Getting Started

The API can be found at the following url:
```
https://sleepsta.herokuapp.com/
```

### Prerequisites (for local use)

- run `yarn` in order to install all dependencies
- use the command `yarn server` to run a live server!

## Endpoints

| Method |     Endpoint          |                   Requires                   |                                Description                                       |
|--------|-----------------------|----------------------------------------------|----------------------------------------------------------------------------------|
|  POST  |   `/api/register/`    |            `email`, `password`               | Used for adding a new user to database.                                          |
|  POST  |   `/api/login/`       |            `email`, `password`               | Used to log a user in. Returns a token and the user's name in its body.          |
|  GET   |   `/api/users/:id/`   |              Successful Login                | Used to show a specific user in the database.                                    |
---

### User Registration


Method used: **[POST]** `/api/register/`

On Success: 
Returns the Id of the new user.


Parameters:

|   Name    | Type | Required |                      Notes                       |
|-----------|------|----------|--------------------------------------------------|
|   email   |string|    yes   |The email the user wishes to use. Must be unique. |
| password  |string|    yes   |Can be up to 64 characters in length.             | 
| first_name|string|    yes   |Can be up to 64 characters in length.             | 
| last_name |string|    yes   |Can be up to 64 characters in length.             | 

Example of what to use: 
```
{
    email: "lambda@testemail.com",
    password: "testpassword",
    first_name: "testfirstname"
    last_name: "testlastname"
}
```
---

### User Login


Method used: **[POST]** `/api/login/`

On Success: 
Returns a token to be used to authenticate the user.


Parameters:

|  Name  | Type | Required |
|--------|------|----------|
|  email |string|    yes   |
|password|string|    yes   |

Example of what to use: 
```
{
    email: "lambda@testemail.com",
    password: "testpassword"
}
```

---

