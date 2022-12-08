import React, {Component} from "react";
import MoviesAlbum from "./moviesAlbum";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import _ from 'lodash';


class Movies extends Component {

   constructor(props) {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           items: [],
           pageSize: 18,
           currentPage: 1,
           sortColumn: {path: 'title', order: 'asc'}
       };
    }

    componentDidMount() {
        /*fetch("https://taw-posts.herokuapp.com/api/posts",
        {method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': ' application/json',
            'x-auth-token': localStorage.getItem('token')
        }})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )*/
        let result = []
        for(let i = 0; i < 40; i++){
                result.push({"id":i, "text": "Mandalorian", "image":"process.env.PUBLIC_URL + '/logo.png'"});
        }
        

        this.setState({
            isLoaded: true,
            items: result
        })
    }

    handleDelete = (post) => {
        const movies = this.state.items.filter(p => p.id !== post.id);
        this.setState({items: movies});
     };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    handleSort = (path) => {
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
     };
 
    render() {
        const { items, pageSize, currentPage, sortColumn } = this.state;
        
        if (!items.length) {
            return <p>Brak wpisów</p>
        }
        
        const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);
 
        return (
            <React.Fragment>
                <MoviesAlbum
                    items={movies}
                    sortIcon={this.renderSortIcon}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
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
 