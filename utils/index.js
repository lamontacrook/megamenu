function links(params) {
  let name = params.name;
  let path = params.path;
  delete params.name;
  delete params["category title"];
  delete params.path;

  return {
    properties: {
      title: name,
      path: path,
      "cq:model": process.env.LINKS_MODEL,
      elements: params,
    },
  };
}

function getCategories() {
  let _categories = [];

  categories.forEach((category) => {
    let name = category.name;
    _categories.push({
      properties: {
        title: category.title,
        path: category.path,
        elements: {
          category: {
            value: category.values,
          },
          categoryName: {
            value: category.title,
          },
        },
        name: name,
        "cq:model": {
          path: process.env.CATEGORY_MODEL,
        },
      },
    });
  });

  return _categories;
}

const categories = [];

function packCategories(params) {
  let spot = params.path.split("/");
  spot.pop();
  spot.pop();

  let name = params["category title"]
    .toLowerCase()
    .replace(" ", "-")
    .replace(/[^a-zA-Z0-9]/g, "_");
  let path = `${spot.join("/")}/${name}.json`;

  var i = categories.length - 1;
  do {
    if (
      categories[i] != undefined &&
      categories[i].hasOwnProperty("title") &&
      categories[i].title === params["category title"]
    )
      categories[i].values.push(params.path);
    else
      categories.push({
        title: params["category title"],
        name: name,
        path: path,
        values: [params.path],
      });
  } while (i-- > 0);
}

function folder(params) { 
  return `{
    path:${params.properties.path},
    class:'assetFolder',
    properties: {
      'jcr:title':${params.properties.title}
    }
  }`
}

module.exports = { folder, links, getCategories, packCategories };
