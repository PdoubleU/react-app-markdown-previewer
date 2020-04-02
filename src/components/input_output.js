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
                    <toolbar className='toolbar'>Editor</toolbar>
                    <span className="editor">
                        <textarea id='editor' className='inputBox' onChange={this.handleChange}
                            value={this.state.inputContent}
                            type='text'/>
                   </span>
                </label>
                <div id='output' className='wrapper out'>
                    <toolbar className='toolbar'>Preview</toolbar>
                    <span className='markdown' id='preview'>
                        <ReactMarkdown source={this.state.inputContent}/>
                    </span>
                </div>
            </span>
        )
    }

};

export default TextInput;