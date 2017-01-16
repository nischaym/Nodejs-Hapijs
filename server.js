const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const routes = require('./routes');
const config = require('./config.json');


// Create a server with a host and port
const server = new Hapi.Server();
server.connection(config.serverConfig);
server.route(routes);

// Swagger config
const swagger = {
    register: HapiSwagger,
    options: {
        info: config.swaggerConfig
    }
};

server.register([Inert, Vision, swagger], (err) => {

    if (err) {
        console.error(err);
        throw Error(error);
    } else {
        server.start((err) => {
            if (err) {
                console.error(err);
                throw Error(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    }
});