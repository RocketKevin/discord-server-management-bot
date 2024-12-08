const SERVER_IP = '10.0.0.56';
const PORT = 25565;
const TIMEOUT = 60000;
const RETRY_INTERVAL = 10000;
const MAX_RETRIES = Math.floor(TIMEOUT / RETRY_INTERVAL);
const TMUX_SESSION = 'minecraft';
const START_SERVER_SCRIPT_PATH = '~/Servers/ATM10/startserver.sh';

const constants = {
  SERVER_IP, PORT, TIMEOUT, RETRY_INTERVAL,
  MAX_RETRIES, TMUX_SESSION, START_SERVER_SCRIPT_PATH,
};

module.exports = constants;