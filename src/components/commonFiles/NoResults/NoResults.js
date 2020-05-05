import React from 'react'
import classes from './NoResults.module.scss'
import noResult from '../../../icons/no-results.svg'
const NoResults = () => {
    return (
        <div className={classes['no-result']}>
            <img src={noResult} alt='No Results'/>
            <p className={classes['no-result-text']}>Sorry, no results found</p>
        </div>
    )
}

export default NoResults
