import React from 'react';
import s from "./Counter.module.css"


class Button extends React.Component {

    render = () => {

        return (

                    <div className={s.group}>

                        <button className={s.button}
                                disabled={this.props.disabled}
                                onClick={this.props.onClickFn}
                        >{this.props.title}
                        </button>

                    </div>

        );
    }
}


export default Button;
