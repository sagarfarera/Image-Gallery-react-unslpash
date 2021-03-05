import { Component } from "react";

class Searchbar extends Component {

    constructor(){
        super()
        this.state = {text: ""};
    }

    handleChange(e){
      console.log("handleChange called")
        this.setState({text: e.target.value})
    }
    handleSubmit(){
        this.setState({text: ""});
        this.props.search_query(this.state.text);
    }

    render() {
      console.log("Render search bar called ")
      return (
        <div className="input-group">
        <div className="form-outline">
          <input  onChange={(event)=> {this.handleChange(event)} } value= {this.state.text}/>
          <button type="button" className="btn btn-dark" onClick={()=>this.handleSubmit()}>Submit</button>
        </div>
{/* 
        <div>{this.state.text}</div> */}
        </div>
      );
    }
}

export default Searchbar;
