import React from 'react'

import classes from './ToolStatus.module.scss';

export const StatusOn = () => {
    return (
        <div className={classes['status-on']+ " " + classes['btn']}>
            on
        </div>
    )
}

export const StatusLock = () => {
    return (
        <svg className={classes['status-lock']} width="15px" height="15px"viewBox="0 0 20 20"><path d="M14.7,7.3V4.7C14.7,2.1,12.6,0,10,0S5.3,2.1,5.3,4.7v2.6H2.8V20h14.3V7.3H14.7zM10.7,14v2.4H9.3V14c-0.5-0.3-0.9-0.8-0.9-1.4c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6C11.6,13.2,11.2,13.7,10.7,14zM6.7,7.3V4.7c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3v2.6H6.7z"></path>
        </svg>
    )
}

export const StatusOff = () => {
    return (
        <div className={classes['status-off']+ " " + classes['btn']}>
            Off
        </div>
    )
}