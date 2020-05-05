import React, { Fragment } from 'react'

import classes from './SortIcons.module.scss';
const SortIcons = (props) => {
    
    const {asc,sortId, appear } = props;
    
    return (
        <Fragment>
            <svg className={(asc && appear) ? classes['sort-active']: '' } viewBox="0 0 20 20" width="14px" id={sortId}><path d="M0.042,15.719l9.959-11.438l9.958,11.438H0.042z"  id={sortId}></path></svg>
            
            <svg className={(!asc && appear) ? classes['sort-active']: '' } width="14px" viewBox="0 0 20 20"  id={sortId}><path d="M19.958,4.281L9.999,15.719L0.042,4.281H19.958z"  id={sortId}></path></svg>
            
        </Fragment>
    )
}

export default SortIcons;