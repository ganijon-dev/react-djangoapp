import React, { Component } from 'react'
import WebsiteCard from '../WebSiteCard/WebsiteCard'
import Container from '../commonFiles/Container/Container'
import SearchIcon from '../../iconComponents/SearchIcon'
import classes from './WebSiteList.module.scss'
import NoResults from '../commonFiles/NoResults/NoResults'
import Loader from '../commonFiles/Loader/Loader'

class WebSiteList extends Component {

    state= {
        search:'',
        sites:[],
        loading:true,
    };

    updateSeach(event) {
        this.setState({
            ...this.state,
            search:event.target.value
        });
    }


    componentDidMount(){
        fetch("/api/sites", {
            method: 'GET'
        })
        .then(res => res.json())
        .then(
          (data) => {  
          this.setState({
                ...this.state,
                sites:data,
                loading:false,
          })
          
          
    })}

    render() {
        const {search, sites, loading} = this.state;
        
        const searchedSites= sites.filter(site => {
            return site.website.toLowerCase().indexOf(search.toLowerCase())!==-1;
        })

        let result ;
     
        if (loading){
            result = <Loader />
        }
        else {
            result =  <NoResults/>
        }
        
        return (
            <Container>
                <div className={classes['site-header']}>
                <h3 className={classes['title']}>Web Sites</h3>
                <button className={classes['btn-add__site']}> + New Site</button>
                </div>
                <div className={classes['search-wrapper']}>
                    <input type="search" className={classes.search}  onChange={this.updateSeach.bind(this)} value={search} autoFocus={true}/> 
                    <span className={classes['search-icon']}><SearchIcon/></span>
                </div>
                <div className={classes['site-wrapper']}>
                {searchedSites.length  ? searchedSites.map( searchedSite => {
                    return <WebsiteCard key = {searchedSite.id}website={searchedSite.website} tests={searchedSite.tests} persos= {searchedSite.personalizations} hasScript={searchedSite.hasScript}/>
                }   
                ): result}
               
                </div>
                
            </Container>
               
           
        )
    }
}

export default WebSiteList
