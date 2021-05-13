# ECommerceSite
an E-commerce back end with sequelize

Author: Tomasz Siemion
VIDEO DEMO LINK: https://vimeo.com/548847705

## Installation

This back end application uses NodeJs, Express, MySQL2, and Sequelize for functionality.  In order to install type in the following command to install the dependencies from the package.json.

```bash
npm install
```

## Usage
To invoke the application, one must create a mySQL database, using the schema.sql schema in the db folder.  Once the database has been created, you can seed with the provided seeds by running the following command in the CLI.

```bash
node seeds/index.js
```

Once the database has been seeded, make sure to create a .env file in the root directory following the format:

```
DB_NAME=ecommerce_db
DB_USER=[your user name for mySQL]
DB_PW=[your password for mySQL]
```

To invoke the server to start listening, type the following command in the CLI:

```bash
node server.js
```

## Functionality

This is a simple backend for an e-commerce site which handles mostly data storage.  To test the functionality, one can use POSTMAN or INSOMNIA CORE.