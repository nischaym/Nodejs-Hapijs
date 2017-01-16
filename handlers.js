const speedTest = require('speedtest-net');
const Boom = require('boom');

const config = require('./config.json');

function speedHandler(request, reply) {

    const test = speedTest({ maxTime: config.speedTestMaxTime });

    test.on('data', data => {

        const output = {
            download: `${data.speeds.download} Mbps`,
            upload: `${data.speeds.upload} Mbps`,
            ping: `${data.server.ping} ms`
        };
        return reply(output);

    });

    test.on('error', err => {
        console.error(err);
        return reply(Boom.badGateway(err));
    });
}

// list of all the handlers
module.exports = {
    speedHandler
};





