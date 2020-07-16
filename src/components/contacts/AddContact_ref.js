import React, { Component } from 'react'

class AddContact extends Component {


    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.emailInput  = React.createRef();
    }
    
    onSubmit = (e) => {
        e.preventDefault();
     

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }

        console.log(contact)
    }


    static defaultProps ={
        name : '',
        email: '',
        phone: ''
    }

   

    
    render() {
        const {name, email, phone} = this.props;
        return (
            <div className="card mg-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="htmlFor">Name:</label>
                           <input type="text" name="name" className="form-control form-control-lg name" id="name" placeholder="Enter Name:" defaultValue ={name}
                           ref = {this.nameInput}
                           />
                            
                        </div>
                              {/* For Phone */}
                              <div className="form-group">
                            <label htmlFor="phone" className="htmlFor">Phone:</label>
                           <input type="number" name="phone" className="form-control form-control-lg phone" id="phone" placeholder="Enter Phone:" defaultValue ={phone}
                           ref = {this.phoneInput}
                           
                           />
                            
                        </div>
                            {/* For Email */}
                        <div className="form-group">
                            <label htmlFor="name" className="htmlFor">Email:</label>
                           <input type="email" name="email" className="form-control form-control-lg email" id="email" placeholder="Enter Email:" defaultValue ={email}
                          ref = {this.emailInput}
                          />
                        </div>

                        <input type="submit" value="Add Contact" name="submit" className="btn btn-danger btn-block"/>
                    </form>
                </div>
                

                
            </div>
        )
    }
}

export default AddContact
