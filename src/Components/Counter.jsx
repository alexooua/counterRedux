import React from 'react';
import s from "./Counter.module.css"
import Res from "./Res";
import Inc from "./Inc";
import Num from "./Num";


class Counter extends React.Component {
    state = {
        num: 0
    }
    incButton = () => {
        let num = this.state.num
        num < 5 && num++
        this.setState({
            num: num
        })
    }
    resButton = () => {
        this.setState({
            num: 0
        })
    }

    render = () => {

        return (
            <div className={s.task}>
                <div className="title"><h3>Counter</h3></div>
                <div className={s.block}>
                    <Num nameNum={this.state.num}/>
                    <div className={s.group}>
                        <Inc incButton={this.incButton} nameNum={this.state.num}/>
                        <Res resButton={this.resButton} nameNum={this.state.num}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default Counter;
