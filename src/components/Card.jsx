import React, {Component} from 'react';
import './Card.css';


class Card extends React.Component {
    render(){
      return (
        <div className="card">
            <img className="card-img-top" src={this.props.imageLink} title={this.props.imageTitle}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.CardsTitle}</h5>
                <p className="card-text">
                {this.props.CardsText}</p>
                <a href={this.props.btnLink} className="btn btn-primary">Go somewhere </a>
            </div>
        </div>
      )
    }
  }
  
  
  export default Card;