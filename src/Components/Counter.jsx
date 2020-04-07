import React from 'react';
import s from "./Counter.module.css"
import Button from "./Button";
import Num from "./Num";
import SetScreen from "./SetScreen";


class Counter extends React.Component {
    state = {
        maxVal:0,
        minVal:0,
        num: null
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
    changedSet=(e)=>{
        console.log(e.currentTarget.value)
    }

    render = () => {

        return (
            <div className={s.task}>
                <div  ><h3>Counter</h3></div>
                <div className={s.row}>
                    <div className={s.block}>
                        <SetScreen nameNum={this.state.num}
                                   changedSet={this.changedSet}/>
                        <div className={s.group}>
                            <Button onClickFn={this.incButton}
                                    nameNum={this.state.num}
                                    title={'Set'}

                            />
                        </div>
                    </div>
                    <div className={s.block}>
                        <Num nameNum={this.state.num}/>
                        <div className={s.group}>
                            <Button onClickFn={this.incButton}
                                    nameNum={this.state.num}
                                    title={'Inc'}
                            />
                            <Button onClickFn={this.resButton}
                                    nameNum={this.state.num}
                                    title={'Res'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Counter;
