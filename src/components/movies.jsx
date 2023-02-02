import React, {Component} from "react";
import MoviesAlbum from "./moviesAlbum";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import eventBus from "./eventBus";
//import _ from 'lodash';
const axios = require('axios');

class Movies extends Component {

   constructor(props) {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           items: [],
           pageSize: 18,
           currentPage: 1,
           searchItems: [],
           searching:false
           //sortColumn: {path: 'title', order: 'asc'}
       };
    }

    componentDidMount() {

        axios({method:'get',url:'https://at.usermd.net/api/movies'})
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
            eventBus.dispatch("mounted",{fun:this.handleSearch})
        },
        
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
            console.error('Something went wrong during fetching movies')
        })
        
    }

    handleSearch = (query) => {
        const movies = this.state.items.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
        
        query!==""?this.setState({searchItems: movies, searching:true}):this.setState({searchItems: this.state.items, searching:false});
     };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    /*handleSort = (path) => {
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({sortColumn});
     };

     renderSortIcon = (column) => {
   
        if (column !== this.state.sortColumn.path) {
            return null;
        }
        if (this.state.sortColumn.order === 'asc') {
            return <i className="fa fa-sort-asc"></i>
        }
     
        if (this.state.sortColumn.order === 'desc') {
            return <i className="fa fa-sort-desc"></i>
        }
     };*/
 
    render() {
        const { items, pageSize, currentPage, searchItems/*, sortColumn*/ } = this.state;
        

        //const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);
        let movies = paginate(searchItems, currentPage, pageSize);
        if(this.state.searching===true){
            return (
                <React.Fragment>
                    <MoviesAlbum
                        items={movies}
                        />
                    <Pagination
                        itemsCount={items.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                    />
                    </React.Fragment>
            )
        }

        movies = paginate(items, currentPage, pageSize);

        return (
            <React.Fragment>
                <MoviesAlbum
                    items={movies}
                    />
                <Pagination
                    itemsCount={items.length}
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange}
                />
                </React.Fragment>
        )
    }
 }

export default Movies;

 