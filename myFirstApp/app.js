'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
  /*
    IMPORTANT:
    Place here your custom code!
    Do not touch the following lines
  **/

  // This loads and sets @fastify/swagger
  fastify.register(require('@fastify/swagger'), {})
  fastify.register(require('@fastify/swagger-ui'), {
    // TODO:  set your settings
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'My FirstAPP Documentation',
            description: 'My FirstApp Backend Documentation description',
            version: '0.1.0',
            termsOfService: 'https://mywebsite.io/tos',
            contact: {
                name: 'John Doe',
                url: 'https://www.johndoe.com',
                email: 'john.doe@email.com'
            }
        },
        externalDocs: {
            url: 'https://www.johndoe.com/api/',
            description: 'Find more info here'
        },
        host: '127.0.0.1:3000',
        basePath: '',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [{
            name: 'User',
            description: 'User\'s API'
        }, ],
        definitions: {
            User: {
                type: 'object',
                required: ['id', 'email'],
                properties: {
                    id: {
                        type: 'number',
                        format: 'uuid'
                    },
                    firstName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    }
                }
            },
        }
    },
    uiConfig: {
        docExpansion: 'none', // expand/not all the documentations none|list|full
        deepLinking: true
    },
    uiHooks: {
        onRequest: function(request, reply, next) {
            next()
        },
        preHandler: function(request, reply, next) {
            next()
        }
    },
    staticCSP: false,
    transformStaticCSP: (header) => header,
    exposeRoute: true
  })

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  // This loads and sets fastify/cors
  fastify.register(require('@fastify/cors'), {
    // TODO:  enable CORS as as your needs
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:3000'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
  })

  // Executes Swagger
  fastify.ready(err => {
    if (err) throw err
    fastify.swagger()
  })
}
