import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

      case "UPDATE_CONTACT":
        return {
          ...state,
          contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact),
        };
      

    default:
      return state;
  }
};

export class Provider extends Component {
  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => this.setState({ contacts: res.data }));
  // }
 async componentDidMount() {
     const res = await axios
      .get("https://jsonplaceholder.typicode.com/users");

      this.setState({contacts: res.data})
  }
  state = {
    contacts: [
      // {
      //   id: "1",
      //   name: "Bishworaj Poudel",
      //   email: "iambrp.tech@gmail.com",
      //   phone: "283383",
      // },
      // {
      //   id: "2",
      //   name: "Menuka Poudel",
      //   email: "iambrp.tech@gmail.com",
      //   phone: "283383",
      // },
      // {
      //   id: "3",
      //   name: "Rahul Poudel",
      //   email: "iambrp.tech@gmail.com",
      //   phone: "283383",
      // },
      // {
      //   id: "4",
      //   name: "Bimal Poudel",
      //   email: "iambrp.tech@gmail.com",
      //   phone: "283383",
      // },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
