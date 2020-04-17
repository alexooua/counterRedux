import React from 'react';
import s from "./Counter.module.css"


class Num extends React.Component {

    render = () => {

        return (

            <div className={
                         s.num + ' ' + ((this.props.nameNum === Number(this.props.maxVal)
                         || this.props.vals) && s.red)
                     }>
                {
                    (this.props.vals && "Incorrect value") ||
                    (this.props.onSet === false && "Enter values and press 'Set'") ||
                    this.props.nameNum
                }

            </div>

        );
    }
}


export default Num;
