const RootPath = "/content/dam/megamenu/entities";
const LinkManager = ({_path}) => {
    return _path?_path.replace(RootPath, ""):"";
}

const ConstructURL = (props) => {
    if(!props)
        console.log("error....");

    if(!props.parent && (props.folder && props.screen)) 
        return `${RootPath}/${props.folder}/${props.screen}`

    if(props.parent && props.folder && props.screen)
        return `${RootPath}/${props.parent}/${props.folder}/${props.screen}`
}

export {RootPath, LinkManager, ConstructURL};