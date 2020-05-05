import React from 'react'
import classes from './WebsiteCard.module.scss'

const WebsiteCard = (props) => {
    const {website,tests,persos, hasScript} =props;
    return (
            <div className={classes['card']}>
                <div className={classes['aside-bar']}></div>
                <div className={classes['card-content']}>
                    <p className={classes['card__url']}>{website}</p>
                    <ul className={classes['settings']}>
                        <li className="setting-item">Setup</li>
                        <li className="setting-item">Configuration</li>
                        <li className="setting-item">Indicators</li>
                    </ul>
                    <div className={classes["site-status"]}>
                        <p className={classes["site-status__title"]}>Kameleoon enabled</p>
                        <p className={classes["site-status__divider"]}> |</p>
                        {hasScript ? <p className={classes["site-status__info"] + " " + classes["site-status__installed"]}> Script  Installed</p>: <p className={classes["site-status__info"] + " " + classes['site-status__not-installed']}> Script Not installed</p>}
                        
                    </div>
                    <div className={classes["card-footer"]}>
                        <p className={classes['footer__text']}>A/B Tests<span>{tests}</span></p>
                        <p className={classes['footer__text']}>Personalizations<span>{persos}</span></p>
                    </div>
                </div>
               
            
            </div>
    
       
    )
}


export default WebsiteCard
