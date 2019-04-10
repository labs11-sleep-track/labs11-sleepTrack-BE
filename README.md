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
|  GET   |          `/`          |                  `email`                     | Used to log a user in. Returns a token to be used to authenticate the user.      |
|  GET   |    `/redirect`        |                  `email`                     | Redirects to hand control to passport to use code to grab profile information.   |
|  POST  |    `/tokenSignIn`     |                  `email`                     | Verifies idToken from IOS app.                                                   |
|  POST  |   `/api/login/`       |            `email`, `password`               | Used to log a user in. Returns a token and the user's name in its body.          |
|  GET   |    `/api/users/`      |              Successful Login                | Used to show all users in the database.                                          |
|  GET   |   `/api/users/:id/`   |              Successful Login                | Used to show a specific user in the database.                                    |
|  GET   |   `/api/users/me/`    |              Successful Login                | Used to get current user by ID.                                                  |
|  GET   |    `/api/daily/`      |              Successful Login                | Used to get list of all daily data in database.                                  |
|  POST  |    `/api/daily/`      |              Successful Login                | Adds new daily data to the database.                                             |
|  PUT   |  `/api/daily/:id/`    |              Successful Login                | Updates daily data in database by ID.                                            |
| DELETE |  `/api/daily/:id/`    |              Successful Login                | Deletes daily data in database by ID.                                            |
|  GET   |  `/api/articles/`     |              Successful Login                | Used to show all artices in database.                                            |
|  GET   | `/api/articles/:id`   |              Successful Login                | Used to show article in database by ID.                                          |
|  GET   |     `/api/stripe`     |              Successful Login                | Used to show amount due and payment option.                                      |
|  POST  | `/api/stripe/charge`  |              Successful Login                | Used to charge user's card for premium account.                                  |
---


### Initiate Google Auth


Method used: **[GET]** `/`

On Success: 
Returns a token to be used to authenticate the user.


Parameters:

|  Name  | Type | Required |
|--------|------|----------|
|  email |string|    yes   |

Example of what to use: 
```
{
    email: "testemail@gmail.com",
}
```

---

### Callback route for Google 


Method used: **[GET]** `/redirect`

On Success: 
Redirects to hand control to passport to use code to grab profile information.


Parameters:

|  Name  | Type | Required |
|--------|------|----------|
|  email |string|    yes   |

Example of what to use: 
```
{
    email: "testemail@gmail.com",
}
```

---

### Verify idToken from IOS app


Method used: **[POST]** `/tokenSignIn`

On Success: 
Verifies idToken from IOS app. 


Parameters:

|   Name    | Type  | Required |
|-----------|-------|----------|
| google_id |integer|    yes   |
|  f_name   |string |    yes   |
|  l_name   |string |    yes   |
|   email   |string |    yes   |


Example of what to use: 
```
{
    google_id: "userid",
    f_name: "testname",
    l_name: "testname",
    email: "testemail@gmail.com",
}
```

---


### GET Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users. For back-end testing purposes only.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### GET Current User by ID

Method used: **[GET]** `/api/users/me`

On Success: Returns the current user by id.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### GET List of all Daily Data

Method used: **[GET]** `/api/daily/`

On Success: Returns an array of all daily data in database.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### POST Daily Data

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

### UPDATE Daily Data

Method used: **[PUT]** `api/daily/:id/`

On Success: Returns the updated array. 


Parameters:

|        Name      |   Type   | Required |                   Notes                     |
|------------------|----------|----------|---------------------------------------------|
|   Authorization  |**Header**|    yes   | Acquired from a successful login.           |
|       user_id    |  integer |    yes   |The id of the user the data is being saved to|
|      sleeptime   |  integer |    yes   |The time the user went to sleep.             |
|      waketime    |  integer |    yes   |The time the user woke up from sleeping.     |
|      qos_score   |  integer |    yes   |                                             |

---

### Delete Daily Data

Method used: **[DELETE]** `/api/daily/:id`

On Success: Deletes data from database.


Parameters:

|      Name     |   Type   | Required |                   Notes                     |
|---------------|----------|----------|---------------------------------------------|
| Authorization |**Header**|    yes   | Acquired from a successful login.           |

---

---

### GET List of all Articles

Method used: **[GET]** `/api/articles/`

On Success: Returns an array of all articles in database.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### GET Article by ID

Method used: **[GET]** `/api/articles/:id`

On Success: Returns an array of article in database for specific id.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### GET Stripe

Method used: **[GET]** `/api/stripe/`

On Success: Returns amount due and payment option to upgrade user to a premuim account.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### POST Stripe

Method used: **[POST]** `/api/stripe/charge`

On Success: Charges payment successfully to user's card to upgrade to a premuim account.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |
|     email     |   string |   yes    | The email used for user's account.|
|  card number  |  integer |   yes    | Card number user wishes to use.   |
|     mm//yy    |  integer |   yes    | Expiration date on user's card.   |
|      cvc      |  integer |   yes    | CVC code on user's card.          |

---