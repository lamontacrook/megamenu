const https = require("https");

module.exports = class create {
  constructor(msg) {
    console.log(msg);

    this.options = {
      hostname: process.env.HOSTNAME,
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
    this.options.headers["Content-Length"] = payload.length;
    this.request(payload);
  }

  createFolder(payload) {
      console.log(payload)
  }

  request() {
    const req = https.request(this.options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);

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
