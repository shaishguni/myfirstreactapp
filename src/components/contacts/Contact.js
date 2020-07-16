import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import Contacts from "./Contacts";
import { Consumer } from "../../context";
import axios from "axios";

export class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  // onDeleteClick = (id, dispatch) => {

  //   console.log("Clicked");
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));
  // };

  onDeleteClick = async (id, dispatch) => {

 try {
  await axios
     .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
     
     dispatch({ type: "DELETE_CONTACT", payload: id });

 } catch (error) {
  dispatch({ type: "DELETE_CONTACT", payload: id });
 }
  };
  render() {
    const { contact } = this.props;

    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb3" style={{ cursor: "pointer" }}>
              <h4>
                {contact.name}{" "}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    });
                  }}
                  className="fa fa-sort-down fa-lg"
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                ></i>

                <Link to ={`contact/edit/${contact.id}`}>
                  <i className="fa fa-pencil" style={{
                    cursor : 'pointer',
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem'
                  }}>
                    
                  </i>
                </Link>
                
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{contact.email}</li>
                  <li className="list-group-item">{contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  //   deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
