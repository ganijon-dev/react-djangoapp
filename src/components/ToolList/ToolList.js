import React, { Component } from 'react';

import SearchIcon from "../../iconComponents/SearchIcon"
import Tool from '../Tool/Tool';
import ToolListHeader from './ToolListHeader/ToolListHeader';

import classes from './ToolList.module.scss';
import Container from '../commonFiles/Container/Container';
import NoResults from '../commonFiles/NoResults/NoResults';
import Loader from '../commonFiles/Loader/Loader';

//import data from '../data/data.json';
class ToolList extends Component {

    state = {
        tools:[],
        sortedBy:'name',
        toolHeaders: [{name:'Tool name'}, {sites:'Used On'}, {type:'Type'}, {status:'Status'}],
        loading:true,
        search:'',
        asc: false,
    };

    compareBy = (key) => { 
            const that = this;
            return function(a, b) { 
                let compA, compB ;
                if (typeof a[key]==='number' && typeof b[key] ==='number') {
                    compA = a[key];
                    compB = b[key];
                }
                else {
                    compA = a[key].toLowerCase();
                    compB = b[key].toLowerCase();
                }  
                if (that.state.asc) {
                    if (compA > compB) return -1;
                    if (compA < compB) return 1;
                    return 0;
                }
                else {
                    if (compA < compB) return -1;
                    if (compA > compB) return 1;
                    return 0;
                }
               
              };
        
      };
      
    sortList = (event) => {
        let arrayCopy = [...this.state.tools];
        arrayCopy.sort(this.compareBy(event.target.id));
        
        this.setState({ tools: arrayCopy, asc: !this.state.asc, sortedBy: event.target.id});
      };

    updateSeach(event) {
        this.setState({
            ...this.state,
            search:event.target.value
        });
    }

    handleChange =(event) => {
        
        const updatedState = [...this.state.tools];
        
        const newArray = updatedState.filter((tool => tool.name.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1));
        
        this.setState({searchedTools:newArray});
    }


    componentDidMount() {
        
        fetch("/api/tools")
      .then(res => res.json())
      .then(
        (data) => {
          
            
        this.setState({
              ...this.state,
              tools:data,
              loading:false
        })

        const event = {
            target : {
                id:'name'
            }
        }
        this.sortList(event);
        })
        
    }

    render() {
        const {tools, asc,search, sortedBy, toolHeaders, loading} = this.state;

        let result ;
     
        if (loading){
            result = <Loader/>
        }
        else {
            result =  <NoResults/>
        }
        
        const searchedTools = tools.filter(tool => {
            return tool.name.toLowerCase().indexOf(search.toLowerCase())!==-1

        });

        
        return (
            
            <Container>
                <h3 className={classes['title']}>Integrations</h3>
                <div className={classes['search-wrapper']}>
                <input type="search" className={classes.search} onChange={this.updateSeach.bind(this)} value={search} autoFocus={true} />
                <span className={classes['search-icon']}><SearchIcon/></span>
                </div>
                <div className ={classes['wrapper']}> 
                <div className={classes['headers']}>

                    
                    {toolHeaders  ? toolHeaders.map((header,index) => <ToolListHeader btnId={Object.keys(header)[0]} sortList={this.sortList} sortedBy={sortedBy}  asc={asc} btnText = {Object.values(header)[0]} key={index}/> ):null}
                </div>
                
                {searchedTools.length  ? searchedTools.map( searchedTool => {
                    return <Tool tool={searchedTool} key={searchedTool.id}/>
                }   
                ):result}
               
                </div>
                
                </Container>
        )
    }
}

export default ToolList;