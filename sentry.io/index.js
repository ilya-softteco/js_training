const winston = require('winston');
const SentryTransport = require('@synapsestudios/winston-sentry');
const Sentry = require('@sentry/node');
require('dotenv').config()

Sentry.init({
    dsn: process.env.SENTRY_DNS
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
        new SentryTransport({ Sentry }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

logger.error('Error')
