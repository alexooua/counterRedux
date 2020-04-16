import React from 'react';
import s from "./Counter.module.css"
import Button from "./Button";
import Num from "./Num";
import Input from "./Input";


class Counter extends React.Component {
    state = {
        maxVal: 0,
        minVal: 0,
        num: null,
        onSet: false
    }
    //установка maxVal
    setMaxVal = (e) => {
        this.setState(
            {maxVal: e.currentTarget.value,
                onSet:false
            }
        )
    }
    //установка minVal
    setMinVal = (e) => {
        this.setState(
            {minVal: e.currentTarget.value}
        )
    }
    //кнопка установки
    setVal = () => {
        this.setState(
            {num: this.state.minVal,
                   onSet:true
            }
        )
    }
    //кнопка инкремента
    incButton = () => {
        let num = this.state.num
        num < this.state.maxVal && num++
        this.setState({
            num: num
        })
    }
    //сброс настроек
    resButton = () => {
        this.setState({
            num: this.state.minVal
        })
    }


    render = () => {

        return (
            <div className={s.task}>
                <div  ><h3>Counter</h3></div>
                <div className={s.row}>
                    {/*Max Min input*/}
                    <div className={s.block}>
                        <Input
                            err={(Number(this.state.maxVal)<0||Number(this.state.maxVal)<=Number(this.state.minVal)) && s.red}
                            setVal={this.setMaxVal}
                            title='Max'
                            value={this.state.maxVal}
                        />
                        <Input
                            err={(Number(this.state.minVal)<0 ||Number(this.state.minVal)>=Number(this.state.maxVal ))&& s.red}
                            setVal={this.setMinVal}
                            title='Mix'
                            value={this.state.minVal}
                        />

                        {/*Button set*/}
                        <div className={s.group}>
                            <Button onClickFn={this.setVal}
                                    thisNum={this.state.num}
                                    title={'Set'}
                                //disabled={'disabled'}
                            />
                        </div>

                    </div>

                    <div className={s.block}>
                        {/*Span*/}
                        <Num nameNum={this.state.num}
                             maxVal={this.state.maxVal}
                             minVal={this.state.minVal}
                             onSet={this.state.onSet}
                        />

                        {/*2 button*/}
                        <div className={s.group}>
                            <Button onClickFn={this.incButton}
                                    thisNum={this.state.num}
                                    title={'Inc'}
                                    disabled={this.state.num === Number(this.state.maxVal) && 'disabled'}
                            />
                            <Button onClickFn={this.resButton}
                                    thisNum={this.state.num}
                                    title={'Res'}
                                //disabled={'disabled'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Counter;
