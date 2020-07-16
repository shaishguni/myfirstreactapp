import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
import axios from "axios";


class AddContact extends Component {
    state = {
        id: '',
        name : '',
        email: '',
        phone: '',
        errors:{}
    }

    onSubmits = async(dispatch, e) => {
        e.preventDefault();
        const{name, email, phone } = this.state;

        // Check For Error
        if(name === ""){
            this.setState({errors: {name: "Name is required"}})
            return;
        }else  if(phone === ""){
            this.setState({errors: {phone: "Phone is required"}})
            return;
        }else  if(email === ""){
            this.setState({errors: {email: "Email is required"}})
            return;
        }
        const newContact = {
            email,
            name,
            phone,
        }

        // axios.post('https://jsonplaceholder.typicode.com/users', newContact).then(
        //     res=> dispatch({type: 'ADD_CONTACT', payload:newContact})

        // )

       const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
       dispatch({type: 'ADD_CONTACT', payload:res.data})

        

        // Clear State
        this.setState({
            name: '',
            email: '',
            phone:'',
            errors: {}
        });

        this.props.history.push('/');
        console.log(this.state)
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    
    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return (
                        <div className="card mg-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit = {this.onSubmits.bind(this, dispatch)}>
                                   <TextInputGroup
                                    label ="Name"
                                    name ="name"
                                    placeholder="Enter Name"
                                    value = {name}
                                    type = "text"
                                    onChange={this.onChange}
                                    error ={errors.name}
                                   />
                                          {/* For Phone */}
                                          <TextInputGroup
                                    label ="Phone"
                                    name ="phone"
                                    placeholder="Enter Phone"
                                    type= "number"
                                    value = {phone}
                                    onChange={this.onChange}
                                    error ={errors.phone}

                                   />
                                        {/* For Email */}
                                        <TextInputGroup
                                    label ="Email"
                                    name ="email"
                                    placeholder="Enter Email"
                                    type= "email"
                                    value = {email}
                                    onChange={this.onChange}
                                    error ={errors.email}

                                   />
                                  
                                    <input type="submit" value="Add Contact" name="submit" className="btn btn-danger btn-block"/>
                                </form>
                            </div>
                            
            
                            
                        </div>
                    )
                }}
            </Consumer>
        )
       
    }
}

export default AddContact
