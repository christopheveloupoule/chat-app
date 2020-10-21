import React from "react";
import './Contact.css';



class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  
  
  render() {
  return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div>
        <h3 className="name">{this.props.name}</h3>
        <div className="status">
          <div className={this.props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{this.props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}



export default Contact;
