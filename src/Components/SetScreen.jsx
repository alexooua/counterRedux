import React from 'react';
import s from "./Counter.module.css"


class SetScreen extends React.Component {

    render = () => {


        return (

            <div className={s.setScreen}>
                <span className= {s.maxVal}> <em> max value: </em></span>
                <input className=""
                       type="number"
                       onChange={this.props.changedSet}
                />
                <span className={s.startVal} > <em> min value: </em></span>
                <input className=""
                       type="number"
                       onChange={this.props.changedSet}
                />
            </div>


        );
    }
}


export default SetScreen;
