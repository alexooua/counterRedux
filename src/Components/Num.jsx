import React from 'react';
import s from "./Counter.module.css"
import Res from "./Res";
import Inc from "./Inc";


class Num extends React.Component {

    render = () => {

        return (

                    <div className={s.nums}>
                        <span className={this.props.nameNum===5?s.numred:s.num}>Число {this.props.nameNum} </span>
                    </div>

        );
    }
}


export default Num;
