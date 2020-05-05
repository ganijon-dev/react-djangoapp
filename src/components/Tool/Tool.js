import React from 'react';
import { StatusOn, StatusOff, StatusLock} from './ToolStatus/ToolStatus';
import classes from "./Tool.module.scss";

const Tool = (props) => {
    const {tool} = props
    const checkStatus = status => {
        switch (status){
            case 'enabled':
                return <StatusOn/>
            case 'disabled':
                return <StatusOff/>
            case 'blocked':
                return <StatusLock/>
            default:
                return null
        }
           
    }
    return (
        <div className={classes.item}>
            <div className={classes.name}>{tool.name}</div>
            <div >{tool.sites===0 ? tool.sites: `${tool.sites} sites` }</div>
            <div className={classes.type}>{tool.type}</div>
            <div > {checkStatus(tool.status)}</div>
        </div>
    )
}

export default Tool
