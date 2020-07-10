# Rokket Books API

This API exposes a Book resource to CREATE, READ, UPDATE and DELETE

### Requirements

- node
- yarn
- docker
- docker-compose

### Setup

To run in a development environment:

1. `yarn install`
2. `yarn start`

To run in a production environment:

1. `yarn compose`

### Environment variables

The application sets some configuration parameters using the environment variables using a `.env` file. An example of this file is included in the repository.
This file is needed for running `yarn compose` as Docker copies it for configuring the application as well.

### API Spec

- `GET` Books: `/api/books`.
- `POST` Book: `/api/books` Payload example: `{"title": "Title", "author": "Author", "state": "reading"}`.
- `GET` Book: `/api/books/:bookId`.
- `PATCH` Book: `/api/books/:bookId`.
- `DELETE` Book: `/api/books/:bookId`.
