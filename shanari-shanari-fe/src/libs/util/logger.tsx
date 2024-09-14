import pino from "pino";

const logLevel = process.env.PINO_LOG_LEVEL ?? "info";

const logger = pino({
  level: logLevel,
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (label: string) => {
      return {
        level: label,
      };
    },
  },
  browser: {
    asObject: true,
    serialize: true,
  },
});

export default logger;
