function links(params) {
    let name = params.name;
    let path = params.path;
    delete params.name;
    delete params['category title'];
    delete params.path;

    return { 
        "properties": {
            "title": name,
            "path": path,
            "cq:model": process.env.LINKS_MODEL,
            "elements": params
        }
    };
};

function category() {
    let params = categories;
    let name = params.title.toLowerCase().replace(" ", "-").replace(/[^a-zA-Z0-9]/g,'_');
    return {
        properties: {
            title: params.title,
            path: `${name}.json`,
            elements: {
                category: {
                    value: params.values
                },
                categoryName: {
                    value: params.title
                }
            },
            name: name,
            'cq:model': {
                path: process.env.CATEGORY_MODEL
            }
        }
    }
}

const categories = {
    'title':'',
    'values':[]
};

function packCategories(params) {
    if(categories.hasOwnProperty('title') != params['category title'])
        categories.title = params['category title'];

    categories.values.push(params.path);

    return categories
}

module.exports = { links, category, packCategories };