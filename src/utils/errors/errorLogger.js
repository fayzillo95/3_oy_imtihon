import winston from "winston";
import path from 'path'

const customFormat = winston.format.printf(({ level, message, timestamp, stack }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}${stack ? `\nStack: ${stack}` : ''}`;
});

const userlog = path.join(process.cwd(), "src", "utils", "logs", "userlog", "looger.log")
const serverlog = path.join(process.cwd(), "src", "utils", "logs", "serverlog", "looger.log")

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }), 
    customFormat
  ),
  transports: [
    new winston.transports.File({ filename: serverlog, level: 'error' }),
    new winston.transports.File({ filename: userlog, level : 'info'})
  ]
});

export default logger;
