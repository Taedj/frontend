// utils/clientLogger.ts
const LOG_LEVEL = process.env.NEXT_PUBLIC_LOG_LEVEL || 'info';

// Define log levels hierarchy
const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};

const shouldLog = (level: keyof typeof LOG_LEVELS) => {
  return LOG_LEVELS[level] <= LOG_LEVELS[LOG_LEVEL as keyof typeof LOG_LEVELS];
};

export const clientLogger = {
  info: (message: string, data?: unknown, context?: string) => {
    if (!shouldLog('info')) return;
    
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    const prefix = `[${timestamp}] ℹ️ ${context ? `[${context}]` : ''}`;
    
    if (data) {
      console.info(`${prefix} ${message}`, data);
    } else {
      console.info(`${prefix} ${message}`);
    }
  },
  
  warn: (message: string, data?: unknown, context?: string) => {
    if (!shouldLog('warn')) return;
    
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    const prefix = `[${timestamp}] ⚠️ ${context ? `[${context}]` : ''}`;
    
    if (data) {
      console.warn(`${prefix} ${message}`, data);
    } else {
      console.warn(`${prefix} ${message}`);
    }
  },
  
  error: (message: string, error?: unknown, context?: string) => {
    if (!shouldLog('error')) return;
    
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    const prefix = `[${timestamp}] ❌ ${context ? `[${context}]` : ''}`;
    
    if (error) {
      console.error(`${prefix} ${message}`, error);
    } else {
      console.error(`${prefix} ${message}`);
    }
  },
  
  debug: (message: string, data?: unknown, context?: string) => {
    if (!shouldLog('debug')) return;
    
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    const prefix = `[${timestamp}] 🐛 ${context ? `[${context}]` : ''}`;
    
    if (data) {
      console.debug(`${prefix} ${message}`, data);
    } else {
      console.debug(`${prefix} ${message}`);
    }
  }
};

export default clientLogger;