const CSVToJSON = require("csvtojson");
const https = require("https");
const json = require('format-json');
const { links, category, packCategories } = require("./utils");

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

function loadCategory() {

  let data = [];

  return CSVToJSON()
    .fromFile("./category.csv")
    .then((cfs) => {
      let _i = 0;
      cfs.forEach((cf) => {
        
        cf.name = cf.title.toLowerCase().replace(" ", "-").replace(/[^a-zA-Z0-9]/g,'_');
        cf.path = `${cf.path}${cf.name}.json`;
        cf.values = [
          "/content/dam/megamenu/navigation/position-1/falcon-complete-managed-endpoint-security.json",
          "/content/dam/megamenu/navigation/position-1/falcon-enterprise-breach-prevention.json"
      ];
        console.log((category(cf)));
        /*data.push({
          payload: JSON.parse(links({name: name, model: process.env.LINKS_MODEL, cf:cf})),
          path: path
        });*/
      });

      return (data);

    })
}

loadData().then((d) => {
  console.log(d);
  console.log(category());
});

//let l = loadLinks();
//l.then((d) => console.log(JSON.stringify(d[0])));


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