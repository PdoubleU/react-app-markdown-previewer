import React from 'react';
import {placeHolder} from './placeholder.js';
import ReactMarkdown from 'react-markdown/with-html';


class TextInput extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                inputContent: placeHolder
            };
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e){
            this.setState({
                inputContent: e.target.value
            });
        }
    render(){
        return (
            <span className='container'>
                <label id='textarea' className='wrapper in'>
                    <textarea id='editor' className='inputBox' onChange={this.handleChange}
                    value={this.state.inputContent}
                   type='text'/>
                </label>
                <label id='preview' className='wrapper out'>
                    <ReactMarkdown source={this.state.inputContent}/>
                </label>
            </span>
        )
    }

};

export default TextInput;