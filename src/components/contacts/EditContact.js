import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
import axios from "axios";


class EditContact extends Component {
    state = {
        id: '',
        name : '',
        email: '',
        phone: '',
        errors:{}
    }


    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        console.log(res.data);
        this.setState({
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        })
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

        const updateContact={
            name,
            email,
            phone,
        }

        const {id} = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
        dispatch({type:"UPDATE_CONTACT", payload: res.data})
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
                               Edit Contact
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
                                    type= "text"
                                    value = {phone}
                                    onChange={this.onChange}
                                    error ={errors.phone}

                                   />
                                        {/* For Email */}
                                        <TextInputGroup
                                    label ="email"
                                    name ="email"
                                    placeholder="Enter Email"
                                    type= "email"
                                    value = {email}
                                    onChange={this.onChange}
                                    error ={errors.email}

                                   />
                                  
                                    <input type="submit" value="Update Contact" name="submit" className="btn btn-danger btn-block"/>
                                </form>
                            </div>
                            
            
                            
                        </div>
                    )
                }}
            </Consumer>
        )
       
    }
}

export default EditContact
