import React from 'react'
import classes from './Loader.module.scss';
const Loader = (props) => {
    const {param} = props
    const extraClass =param ? param : '';
    return (
        <div className={classes["lds-ellipsis"] + " " + extraClass}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Loader;