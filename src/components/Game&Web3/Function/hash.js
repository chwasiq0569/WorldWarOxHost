const md5 = require("md5");
const get_secret_hash = (name) =>
    md5(name + process.env.REACT_APP_SECRET_KEY).toString();

const get_ssid = () => crypto.randomUUID();

module.exports = {get_secret_hash, get_ssid};