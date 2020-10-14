import React from "react";
import './Contact.css';
import PropTypes from "prop-types";

/*props*/

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <h3 className="name">{props.name}</h3>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default Contact;
