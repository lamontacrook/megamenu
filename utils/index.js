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
    let name = categories.name;
    return {
        properties: {
            title: categories.title,
            path: categories.path,
            elements: {
                category: {
                    value: categories.values
                },
                categoryName: {
                    value: categories.title
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
    'name':'',
    'path':'',
    'values':[]
};

function packCategories(params) {
    if(categories.hasOwnProperty('title') != params['category title']) {
        categories.title = params['category title'];
        categories.name = categories.title.toLowerCase().replace(" ", "-").replace(/[^a-zA-Z0-9]/g,'_');
        let spot = params.path.split('/');
        spot.pop();
        spot.pop();
        categories.path = `${spot.join('/')}/${categories.name}.json`;
        
    }

    categories.values.push(params.path);

    return categories
}

module.exports = { links, category, packCategories };