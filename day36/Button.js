import React from "react";

const Button = ({name,link}) => {     //(props)
    return <a href = {link} target = "_blank"><button className="button">{name}</button></a>   // {props.namename}
}

export default Button;