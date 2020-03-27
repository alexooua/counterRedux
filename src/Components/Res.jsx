import React from 'react';
import s from "./Counter.module.css"


class Res extends React.Component {

    render = () => {

        return (
            <div className={s.group}>

                <button className={s.button} onClick={this.props.resButton}
                        disabled={this.props.nameNum===0?"disabled":''}
                        name="name"
                        href="#name">
                    Res</button>

            </div>
        );
    }
}


export default Res;
