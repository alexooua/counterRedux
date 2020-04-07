import React from 'react';
import s from "./Counter.module.css"



class Num extends React.Component {

    render = () => {

        return (

                    <div className={s.num+' '+(this.props.nameNum===5 && s.numRed)}>
                         {(this.props.nameNum===null)&&"Choose value and press 'Set'"} {this.props.nameNum}
                    </div>

        );
    }
}


export default Num;
