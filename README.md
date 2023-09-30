# Library Management System

## Technology Stack

- Node.js
- Express.js
- Sequelize (ORM for interacting with the database)
- SQLite (Database)
- JSON Web Tokens (JWT) for authentication
- Rate limiting for API endpoints
- Jest for unit testing

## Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.
- A code editor (e.g., Visual Studio Code).
- Postman or a similar tool for API testing.

## Getting Started

1. **Clone the repository:**
   ```bash
   https://github.com/Mazensayed91/Library-Management-System.git
   
2. **Navigate to the project directory:**

   ```bash
   cd Library-Management-System

3. **Install dependencies:**

   ```bash
   npm install

4. **Start the server:**

   ```bash
   npm start

The server should now be running on http://localhost:3000.


## API Reference

### Base URL

- Base URL: `http://localhost:3000/api`

### Error Handling

- The API follows standard HTTP status codes for error handling.
- In case of an error, you will receive a JSON response with an error message.

### Endpoints

#### Books

### GET /books

**Description:** Retrieve a list of all books.

**Input:** None

**Output:**

```list
[
    {
        "id": 1,
        "title": "Mazen's Book 2",
        "author": "Mazon",
        "isbn": "444-233242",
        "quantity": 10,
        "shelfLocation": "A1",
        "createdAt": "2023-09-28T15:52:25.336Z",
        "updatedAt": "2023-09-28T15:52:25.336Z"
    },
    {
        "id": 2,
        "title": "Mazen's Book 2",
        "author": "Mazon",
        "isbn": "444-233242",
        "quantity": 10,
        "shelfLocation": "A1",
        "createdAt": "2023-09-28T15:52:25.944Z",
        "updatedAt": "2023-09-28T15:52:25.944Z"
    },
    {
        "id": 3,
        "title": "Mazen's Book 2",
        "author": "Mazon",
        "isbn": "444-233242",
        "quantity": 10,
        "shelfLocation": "A1",
        "createdAt": "2023-09-28T15:52:26.532Z",
        "updatedAt": "2023-09-28T15:52:26.532Z"
    },
    {
        "id": 4,
        "title": "Mazen's Book 2",
        "author": "Mazon",
        "isbn": "444-233242",
        "quantity": 10,
        "shelfLocation": "A1",
        "createdAt": "2023-09-29T11:59:23.375Z",
        "updatedAt": "2023-09-29T11:59:23.375Z"
    },
    {
        "id": 5,
        "title": "Mazen's Book 2",
        "author": "Mazon",
        "isbn": "444-233242",
        "quantity": 10,
        "shelfLocation": "A1",
        "createdAt": "2023-09-29T11:59:24.329Z",
        "updatedAt": "2023-09-29T11:59:24.329Z"
    }
]

```
### GET /books/:id

**Description:** Retrieve information about a specific book.

**Input:** Book ID (e.g., /books/1)

**Output:**

```json
{
    "id": 1,
    "title": "Mazen's Book 2",
    "author": "Mazon",
    "isbn": "444-233242",
    "quantity": 10,
    "shelfLocation": "A1",
    "createdAt": "2023-09-28T15:52:25.336Z",
    "updatedAt": "2023-09-28T15:52:25.336Z"
}
```

### POST /books

**Description:** Create a new book.

**Input:**

```json
{
  "title": "Mazen's Book 2",
  "author": "Mazon",
  "isbn": "444-233242",
  "quantity": 10,
  "shelfLocation": "A1"
}

```

#### PUT /books/:id

**Description:** Update information for a specific book.

**Input:**

```json
{
  "title": "Updated Book Title",
  "quantity": 5
}
```

#### DELETE /books/:id

**Description:** Delete a specific book.

**Input:** Book ID (e.g., /books/3)


#### Borrowers

- **GET /borrowers**: Retrieve a list of all borrowers.
  
**Output:**
  ```json
  [
    {
        "id": 1,
        "name": "Mazen Sayed 2",
        "email": "mazensayed@example.com",
        "registeredDate": "2023-09-28T00:00:00.000Z",
        "createdAt": "2023-09-29T11:59:41.480Z",
        "updatedAt": "2023-09-29T11:59:41.480Z"
    },
    {
        "id": 2,
        "name": "Mazen Sayed 2",
        "email": "mazensay3ed@example.com",
        "registeredDate": "2023-09-28T00:00:00.000Z",
        "createdAt": "2023-09-29T11:59:58.399Z",
        "updatedAt": "2023-09-29T11:59:58.399Z"
    },
    {
        "id": 3,
        "name": "Mazen Sayed 2",
        "email": "mazensay3hd@example.com",
        "registeredDate": "2023-09-28T00:00:00.000Z",
        "createdAt": "2023-09-29T12:22:50.173Z",
        "updatedAt": "2023-09-29T12:22:50.173Z"
    }
]
```
- **GET /borrowers/:id**: Retrieve information about a specific borrower.
  
- **POST /borrowers**: Create a new borrower.
**Input**
```json
{
  "name": "Mazen Sayed 2",
  "email": "mazensayed@example.com",
  "registeredDate": "2023-09-28" 
}
```
**Output**
```json
{
    "id": 3,
    "name": "Mazen Sayed 2",
    "email": "mazensay3hd@example.com",
    "registeredDate": "2023-09-28T00:00:00.000Z",
    "updatedAt": "2023-09-29T12:22:50.173Z",
    "createdAt": "2023-09-29T12:22:50.173Z"
}
```

#### DELETE /borrowers/:id: Delete a specific borrower.
**Input:** Borrower ID (e.g., /borrowers/1)

#### PUT /borrowers/:id: Update information for a specific borrower.


#### Checkout

- **GET /checkout/overdue-books**: Retrieve a list of overdue books.
**Output**
  ``` json
  [
    {
        "id": 2,
        "bookId": 1,
        "borrowerId": 2,
        "checkoutDate": "2023-09-29T12:07:32.963Z",
        "dueDate": "2023-09-29T12:07:32.963Z",
        "returned": false,
        "createdAt": "2023-09-29T12:07:32.966Z",
        "updatedAt": "2023-09-29T12:07:32.966Z",
        "Book": {
            "id": 1,
            "title": "Mazen's Book 2",
            "author": "Mazon",
            "isbn": "444-233242",
            "quantity": 10,
            "shelfLocation": "A1",
            "createdAt": "2023-09-28T15:52:25.336Z",
            "updatedAt": "2023-09-28T15:52:25.336Z"
          }
      }
  ]

- **POST /checkout**: Create a new checkout record.
**Input**
```json
{
  "bookId": 1,
  "borrowerId": 2
}
```
**Output**
```json
{
    "message": "Book checked out successfully"
}
```

#### Reports

- **GET /report/generate-periodic-borrowing-report**: Generate a CSV report for the borrowing process in a specific period.
- **GET /report/generate-overdue-borrows-csv-report**: Generate a CSV report for overdue borrows.
- **GET /report/generate-last-month-borrowing-csv-report**: Generate a CSV report for borrowing processes in the last month.

### Database Schema

- The application uses an SQLite database with the following schema assuming user in a seprate diagram:

  ![image](https://github.com/Mazensayed91/Library-Management-System/assets/54520113/276693ea-0605-4fd9-b1cd-f0e2505a2e72)


  - **Books**: Contains information about books.
  - **Borrowers**: Contains information about borrowers.
  - **Checkout**: Contains records of book checkouts.
  - **User**: Contains the user's data used for auth.

### Application Unit Testing

| UnitTest                                  |                  Description                     |         Expected Return           |
| ------------------------------------------| -------------------------------------------------|-----------------------------------|
|book.test.js                               | Create Book                                      |             201                   |
|book.test.js                               | Create Book without title                        |     SequelizeValidationError      |

- Unit tests for the application can be run using the following command:

  ```bash
  npm test
