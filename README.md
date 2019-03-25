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
    f_name: "testfirstname"
    l_name: "testlastname",
    "account_type": "test"

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

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### Get List of all Daily Data

Method used: **[GET]** `/api/daily/`

On Success: Returns an array of all daily data in database.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### Post Daily Data

Method used: **[POST]** `/api/daily/`

On Success: Adds new daily data to the database.


Parameters:

|        Name      |   Type   | Required |                   Notes                     |
|------------------|----------|----------|---------------------------------------------|
|   Authorization  |**Header**|    yes   | Acquired from a successful login.           |
|       user_id    |  integer |    yes   |The id of the user the data is being saved to|
|      sleeptime   |  integer |    yes   |The time the user went to sleep.             |
|      waketime    |  integer |    yes   |The time the user woke up from sleeping.     |
|      qos_score   |  integer |    yes   |                                             |

---
