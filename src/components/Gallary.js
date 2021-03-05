import { Component } from "react";
import Photo_card from "./Photo_card"

class Gallary extends Component {

    render() {
      return (
        <div className="gallery">
        {
          this.props.data.map((item)=>{
            return <Photo_card key={item.id} src={item.urls.regular} />
          })
        }
      </div>
      );
    }
}

export default Gallary;
