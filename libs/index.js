const https = require("https");
const logger = require('node-color-log');


module.exports = class create {
  constructor(msg) {
    //console.log(process.env.HOSTNAME);

    this.options = {
      hostname: process.env.AEM_HOSTNAME,
      port: 443,
      path: "",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "",
        Authorization: "Basic  " + btoa("api:mitty20"),
      },
    };
  }

  createCF(payload) {
    this.options.path = payload.properties.path;
    delete payload.path;
      
    payload = JSON.stringify(payload);
    this.options.headers["Content-Length"] = payload.length;
    this.request(payload);
  }

  createCategory(payload) {
    payload.properties.path = `${payload.properties.path}-style.json`;
    this.options.path = payload.properties.path;

    payload = JSON.stringify(payload);
    this.options.headers["Content-Length"] = payload.length;
    this.request(payload);
  }

  createFolder(payload) {
      this.options.path = payload.path;
      
      delete payload.path;
      
      payload = JSON.stringify(payload);

      this.options.headers["Content-Length"] = payload.length;
      this.request(payload);
  }

  request(payload) {

    const req = https.request(this.options, (res) => {
      logger.info(`statusCode: ${res.statusCode}`);

      res.on("data", (d) => {
        process.stdout.write(d);
      });
    });

    req.on("error", (error) => {
      console.error(error);
    });

    req.write(payload);
    req.end();
  }
};
