# Setting up WKND Graphql Demo

1. Download the Zip file [WKND GQL Template](/wknd-gql-template-0.0.7.zip) and install as a quick site creating template.  Documentation for installing the template can be found [here](https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/site-template/create-site.html?lang=en) under the "Create a new site" section.

> **_NOTE:_** This template will create models with predifined names, so they have the potential of colliding with other model names in your environment.  This means that this template can only be used onces.  This issue will be addressed in future builds.

2. Open the env.template file and fill in the information for your environment.  You will need to supply a developer token.  This can be found in the developer console.  Documentation for how to find the token can be found [here](https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-with-aem-headless/authentication/local-development-access-token.html?lang=en#:~:text=The%20Local%20Development%20Access%20Token,or%20store%20in%20source%20control).  Scroll down to "Generate a Local Development Access Token". and .env file using the env.template file.  

> **_NOTE:_** This is reliant on the reference demo, however can work with a build of WKND by updating the ```REACT_APP_REFERENCE_DEMO``` environment variable to reference the appropriate environment.

3. Clone this environment if you haven't already.  To install, execute from the command line.

```npm i```

4. After the script finishes, execute from the command line.

```npm start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits to the code.\


