import React from 'react';
import s from "./Counter.module.css"



class Num extends React.Component {

    render = () => {

        return (

                    <div className={s.num+' '+(this.props.nameNum===Number(this.props.maxVal) && s.red)}>
                        {((Number(this.props.maxVal) < 0 || Number(this.props.maxVal) <= Number(this.props.minVal)||Number(this.props.minVal)<0 ||Number(this.props.minVal)>=Number(this.props.maxVal ))&& "Incorrect value")||((this.props.onSet===false)&&"Enter values and press 'Set'")||(this.props.nameNum)}
                        {/*{((this.props.nameNum===null)&&"Enter values and press 'Set'")}*/}
                        {/* {this.props.nameNum}*/}
                    </div>

        );
    }
}


export default Num;
