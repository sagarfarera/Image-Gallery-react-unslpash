import { Component } from "react";
import Searchbar from "./Searchbar";
import Gallary from "./Gallary";

class Card extends Component{
    constructor(){
        console.log("constructor called")
        super()
        this.state = {
            items: [],
            pageno: 1,
            term: "",
            isLoaded: false,
            error: null
        }
    }

    
    handleClick(text){
      console.log("handle click")  
    }

    fetch_images(text){
      console.log("fetch-called")
      fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${text}&orientation=landscape&&page=1`)
      .then(data => data.json())
      .then(
        (data) => {
         
         this.setState({
           items: data.results,
           isLoaded: true,
           term: text,
           pageno: this.state.pageno+1
         })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            term:text,
            pageno: 1,
            error: error
          });
        }
      )
    }

    loadMore(){
      fetch(`https://api.unsplash.com/search/photos?client_id=3IvfH2FWSe4PZws1QOxsLtBRpdAlVeGWvuvH3CF2sHc&query=${this.state.term}&orientation=landscape&&page=${this.state.pageno}`)
      .then(data=> data.json())
      .then(
        (data)=>{
          this.setState({
            items: this.state.items.concat(data.results),
            isLoaded: true,
            pageno: this.state.pageno+1
          })
        },
        (error) =>{
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
    }

    render() {
      console.log("render called")
        return (
          <div className="Main-Card">
            <Searchbar search_query={(text)=>{this.fetch_images(text)}}/>
            <div>{this.state.search_term}</div>
            <Gallary data={this.state.items}/>
            {
              this.state.items.length >0? <button className="btn btn-secondary" onClick={()=>{this.loadMore() } }>load more </button> : <></>
            }
            
          </div>
        );
      }
    
}

export default Card;

