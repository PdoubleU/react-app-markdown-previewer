import React from 'react';

class textInput extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                inputContent: ' '
            };
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e){
            this.setState({
                inputContent: this.target.value
            });
        }
    render(){
        return (
            <div>
                <p>To jest okno wprowadzania tekstu</p>
            </div>
        )
    }
};


export default textInput;