class Logging {
  constructor() {}

  logInfo(message) {
    console.log(`[INFO] ${message}`);
  }

  logWarning(message) {
    console.warn(`[WARNING] ${message}`);
  }

  logError(message) {
    console.error(`[ERROR] ${message}`);
  }
}
module.exports = Logging;
