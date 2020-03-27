import React from 'react';
import s from "./Counter.module.css"


class Inc extends React.Component {

    render = () => {

        return (

                    <div className={s.group}>

                        <button className={s.button} onClick={this.props.incButton} name="name" href="#name">Inc</button>

                    </div>

        );
    }
}


export default Inc;
