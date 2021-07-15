import React from "react";
import "./Post.css";
import pic from "../../assets/pic.jpg"; // Tell webpack this JS file uses this image
import { Router, Switch, Route ,useHistory} from "react-router-dom";


export default function Post(props) {

  let history = useHistory();
  const redirect =() => {
    history.push('/Payment')
  }

    const recipeItem = {
      title: props.title,
      date: props.date,
      author:props.author,
     image: props.imageurl,
      description: props.des,
    };
    
  return (
    <div className='col-xl-3 grow' onClick={redirect} >
    <div className="card">
      <div className="card-header">
        <div className="profile" style={{'alignContent':'baseline'}}>
          <span className="letter" style={{'justifyContent':'center', 'alignItems':'center', 'marginBottom':'6rem'}}>{recipeItem.author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{recipeItem.title}</h5>
          <div className="card-date">{recipeItem.date}</div>
        </div>
      </div>
      <img className="card-image img-fluid"  src={recipeItem.image} alt="Logo" ></img>
      <div style={{"overflow":'hidden'}}> <div className="card-text f6">{recipeItem.description}</div></div>
      
    </div>
    </div>
  );
}