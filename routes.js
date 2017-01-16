const config = require('./config.js');

const speedRoute = {
    method: 'GET',
    path: '/api/speed-test',
    config: config.speedConfig
};

module.exports = [
    speedRoute
];

