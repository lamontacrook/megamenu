const CSVToJSON = require("csvtojson");
const https = require("https");
const json = require('format-json');
const { links, getCategories, packCategories, folder } = require("./utils");
const logger = require('node-color-log');

const create = require('./libs');

function loadData() {

  let data = [];

  return CSVToJSON()
    .fromFile("./data.csv")
    .then((cfs) => {
      let _i = 0;
      cfs.forEach((cf) => {
        let pkey = "";
        for (var key in cf) {
          if (key.includes("field")) {
            cf[pkey] = {
              ":type": cf[pkey],
              value: cf[key],
            };
            delete cf[key];
          }
          pkey = key;
        }

        packCategories(cf);
        data.push(links(cf));
        
      });

      return (data);

    })
}



function createCf(payload, path) {
  const options = {
    hostname: process.env.HOSTNAME,
    port: 443,
    path: path,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": payload.length,
      "Authorization": "Basic  " + btoa('api:mitty20')
    },
  };

  //console.log(options);

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.write(payload)
  req.end()
}

loadData().then((links) => {
  
  links.forEach((link) => {

    //logger.info(`Preparing payload for ${link.properties.title}`)
    logger.info(`Preparing payload for ${link.properties.title}\n${json.plain(link)}`);
  
  })

  getCategories().forEach((category) => {
    folder(category);
    logger.info(`Preparing payload for ${category.properties.title}\n${json.plain(category)}`);
  })

  let c = new create('hello');
  //console.log(create);
  
});
