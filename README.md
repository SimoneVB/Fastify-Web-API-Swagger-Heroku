# Fastify-Web-API-Swagger-Heroku
![cover](https://cdn-images-1.medium.com/max/800/1*SEaHrou3ctfEvfPzUnoHag.png)

## What is Fastify
Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture, inspired by Hapi and Express. As far as we know, it is one of the fastest web frameworks in town.

## What is Swagger
Swagger allows you to describe the structure of your APIs so that machines can read them. The ability of APIs to describe their own structure is the root of all awesomeness in Swagger. Why is it so great? Well, by reading your API’s structure, we can automatically build beautiful and interactive API documentation. We can also automatically generate client libraries for your API in many languages and explore other possibilities like automated testing.

## What is Heroku
Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we’re the fastest way to go from idea to URL, bypassing all those infrastructure headaches.

## About this repository
This project is a basic Fastify + Swagger application: 5 routes and methods for users CRUD: readAll, readOne, Create, Update, Delete.
For more information, for Heroku integrations, please take a look at my post
"Create a Complete Web API set from scratch, with Fastify, Swagger, and Heroku"
https://medium.com/@simonescigliuzzi/x-c6eb1c293215

## Getting Started
### Install
```
cd myFirstApp
npm i
```

### Compile with hot-reloads for development
```
npm run serve
```

### Start Swagger
Once your backend is running, open http://127.0.0.1:3000/docs/ with your Web Browser, to access the API Documentation and testing environment

### Postman
Once your backend is running, you can import the ./Postman/Fastify-Web-API.postman_collection.json file, to invoke API using Postman