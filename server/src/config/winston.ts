import { createLogger, transports, format } from 'winston'

const logger = createLogger({
	level: 'debug',
	transports: [
		new transports.File({
			filename: 'logs/debug.log',
			level: 'debug',
		}),
		new transports.File({
			filename: 'logs/error.log',
			level: 'error',
		}),
	],
})

// TODO: only load this when NODE_ENV is development
logger.add(new transports.Console({ format: format.simple() }))

export default logger
