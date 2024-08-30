# QuiverPay

QuiverPay is a NestJS-based backend application designed for managing episodes, comments, and characters within a system. The application uses PostgreSQL for data storage and TypeORM for database interaction.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Character Management**: Create, update, and retrieve characters.
- **Episode Management**: Manage episodes with titles, descriptions, and air dates.
- **Comment Management**: Add, update, and delete comments on episodes.
- **TypeScript and NestJS**: Structured and type-safe development with modern frameworks.

## Technologies

- **NestJS**: Framework for building efficient and scalable Node.js server-side applications.
- **TypeORM**: ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **PostgreSQL**: Relational database management system.
- **Class-Validator**: Validation library for TypeScript and JavaScript.
- **Docker**: Containerization platform (if applicable).

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. If not, install it from [nodejs.org](https://nodejs.org/).
- **PostgreSQL**: Ensure you have PostgreSQL installed and running. You can download it from [postgresql.org](https://www.postgresql.org/download/).

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/joemickie/quiverpay.git
    cd quiverpay
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory with the following content:

    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=yourusername
    DATABASE_PASS=yourpassword
    DATABASE_NAME=yourdatabase
    ```

4. **Run Migrations**

    Ensure your database schema is up to date:

    ```bash
    npm run migration:run
    ```

5. **Start the Application**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

### API Endpoints

- **Characters**
  - `GET /characters` - Retrieve all characters.
  - `POST /characters` - Create a new character.
  - `PATCH /characters/:id` - Update an existing character.
  - `DELETE /characters/:id` - Delete a character.

- **Episodes**
  - `GET /episodes` - Retrieve all episodes.
  - `POST /episodes` - Create a new episode.
  - `PATCH /episodes/:id` - Update an existing episode.
  - `DELETE /episodes/:id` - Delete an episode.

- **Comments**
  - `GET /comments` - Retrieve all comments.
  - `POST /comments/episode/:episodeId` - Create a new comment for an episode.
  - `PATCH /comments/:id` - Update an existing comment.
  - `DELETE /comments/:id` - Delete a comment.

### Example Request

To create a new character, send a `POST` request to `http://localhost:3000/characters` with the following body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "status": "ACTIVE",
  "stateOfOrigin": "NY",
  "gender": "MALE",
  "locationId": 1
}
```

## Testing

### Running Tests

1. **Unit Tests**

    ```bash
    npm run test
    ```

2. **End-to-End Tests**

    ```bash
    npm run test:e2e
    ```

## Contributing

We welcome contributions to improve QuiverPay. To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.