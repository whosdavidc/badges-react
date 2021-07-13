import React from 'react';

class BadgeForm extends React.Component {
    state = {
        // firstName: '',
        // lastName: '',
        // email: '',
        // jobTitle: '' //With this definition we avoid that the ReacDOM detect the inputs as uncontrolled at the beginning.
    };

    // handleChange = (e) => {
    //     // console.log({ 
    //     //     name: e.target.name,
    //     //     value: e.target.value 
    //     // });

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // };

    handleClick = (e) => {
        console.log(true);
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form was submitted.')
        console.log(this.state)
    };

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.state.firstName}/>

                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>

                        <label>Job title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>

                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.state.email}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                </form>
            </div>
            )
    }
}

export default BadgeForm;