import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email : '', password: ''});
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]:value })
    }

    render(){
        return (
            <div className='sign-in'>
                <h2 className='title'>Eu já tenho uma conta</h2>
                <span>Acesse com seu email e senha</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        label='email'
                        handleChange={this.handleChange}
                        required/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required />

                    <CustomButton type='submit'> Entrar </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;