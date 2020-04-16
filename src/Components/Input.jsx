import React from 'react';
import s from "./Counter.module.css"


class Input extends React.Component {


    render = () => {


        return (
            <div classname={s.setScreen }>
                <span > <em>{this.props.title} value</em></span>
                <input classname= {this.props.err}
                       type="number"
                       onChange={this.props.setVal}
                       value={this.props.value}
                />
            </div>
        );
    }
}


export default Input;
