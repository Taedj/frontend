
import pino from "pino";
import pretty from 'pino-pretty';

const logger = pino(
    {
        level:process.env.LOG_LEVEL || 'info',
    },
    process.env.NODE_ENV === 'development' 
        ? pretty({colorize:true})
        :process.stdout
)

export default logger;