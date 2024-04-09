class Logger {
  static info(message) {
    console.log(`[INFO]: ${message}`);
  }

  static debug(message) {
    console.debug(`[DEBUG]: ${message}`);
  }

  static error(message) {
    console.error(`[ERROR]: ${message}`);
  }
}

export default Logger;
