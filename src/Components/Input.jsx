import React from 'react';
import s from "./Counter.module.css"


class Input extends React.Component {


    render = () => {


        return (
            <div className={s.setScreen }>
                <span > <em>{this.props.title} value</em></span>
                <input className= {this.props.err}
                       type="number"
                       onChange={this.props.setVal}
                       value={this.props.value}
                       onFocus={this.props.setVal}
                />
            </div>
        );
    }
}


export default Input;
