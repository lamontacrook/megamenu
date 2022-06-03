const { REACT_APP_SITE, REACT_APP_REFERENCE_DEMO } = process.env;

const RootPaths = [
  `/content/dam/${REACT_APP_REFERENCE_DEMO}/en`,
  `/content/dam/${REACT_APP_SITE}/entities`,
];
const LinkManager = (props) => {
  let path = "";
  RootPaths.forEach((RootPath) => {
    if (props && props._path && props._path.includes(RootPath)) {
      path = props._path.replace(RootPath, "");
    }
  });
  return path;
};

const ConstructURL = (props) => {
  if (!props) console.log("error....");

  if (!props.parent && props.folder && props.screen)
    return `${RootPaths[1]}/${props.folder}/${props.screen}`;

  if (props.parent && props.folder && props.screen)
    return `${RootPaths[1]}/${props.parent}/${props.folder}/${props.screen}`;
};

export { RootPaths, LinkManager, ConstructURL };
