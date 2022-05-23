const RootPaths = [
  "/content/dam/aem-demo-assets/en",
  "/content/dam/megamenu/entities",
];
const LinkManager = (props) => {
  let path = "";
  RootPaths.map((RootPath) => {
    if (props && props._path && props._path.includes(RootPath)) {
      console.log(props._path.replace(RootPath, ""));
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
