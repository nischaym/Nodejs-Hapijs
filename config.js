const Joi = require('joi');

const handlers = require('./handlers');

// validation schema
const speedSchema = Joi.object({
    ping: Joi.string().required(),
    upload: Joi.string().required(),
    download: Joi.string().required(),
});

const speedConfig = {
    handler: handlers.speedHandler,
    tags: ['api', 'speed'],
    response: {
        schema: speedSchema
    },
    description: 'Speed Test data!',
    notes: 'Provides speed test data inline with speedtest.net',

};

module.exports = {
    speedConfig
};
