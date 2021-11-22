const CSVToJSON = require("csvtojson");
const https = require("https");
const { exit } = require("process");
const json = require('format-json');

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

        let name = cf.name;
        let model = cf.model;
        let path = cf.path;

        delete cf.name;
        delete cf.model;
        delete cf.path;

        let payload = `{ 
            "properties": {
                "title":"${name}",
                "cq:model": "${model}",
                "elements": ${JSON.stringify(cf)}
            }
        }`;

        data.push({
          payload: JSON.parse(payload),
          path: path
        });
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

let l = loadData();
l.then((d) => console.log(d));


/****
 * 
 * {
    "properties": {
        "title": "Milk Makeup",
        "cq:model": "/conf/sephora/settings/dam/cfm/models/items",
        "elements": {
            "linkUrl": {
                ":type":"string",
                "value":"/new"
            },
            "linkName" : {
                ":type":"string",
                "value":"New"
            },
            "isBold": {
                ":type":"boolean",
                "value": false
            } 
        }
    }
}
 */

var t = {
  "properties": {
    "title": "All New",
    "cq:model": "/conf/megamenu/settings/dam/cfm/models/items",
    "elements": {
      "linkURL": {
        ":type": "string",
        "value": "/all-new"
      },
      "linkName": {
        ":type": "string",
        "value": "Test"
      },
      "isBold": {
        ":type": "boolean",
        "value": "TRUE"
      }
    }
  }
}