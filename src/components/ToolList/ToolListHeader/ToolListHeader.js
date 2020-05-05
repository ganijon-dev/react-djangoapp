import React from 'react';
import SortIcons from '../../SortIcons/SortIcons';
import classes from './ToolListHeader.module.scss'

const ToolListHeader = (props) => {
    const {sortedBy, asc, sortList, btnId,btnText} = props;
    return (
        <button className={classes['header-btn']} onClick={sortList} id={btnId} > 
            <span  id={btnId} >{btnText}</span>
            <div className={`${classes['sort-icon']} ${sortedBy===btnId ? classes['show']:""}`}  id={btnId}> 
            <SortIcons appear={sortedBy===btnId ? true:false} onClick={sortList} id={btnId} asc={asc} sortId={btnId}/>
            </div>
        </button>
    )
}

export default ToolListHeader ;