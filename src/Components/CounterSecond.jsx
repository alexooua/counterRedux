import React from 'react';
import s from "./CounterSecond.module.css"
import Button from "./Button";
import Num from "./Num";
import Input from "./Input";


class CounterSecond extends React.Component {
    componentDidMount() {
        this.restoreState()
    }

    state = {
        maxVal: 0,
        minVal: 0,
        num: null,
        onSet: false,
        onShow: false
    }

    //сохраняем в базу в браузере
    saveState = () => {
        localStorage.setItem('Counter-state-two', JSON.stringify(this.state))
    }
    //востановлениве стейта
    restoreState = () => {
        let state = this.state
        let stateAsString = localStorage.getItem("Counter-state-two")
        if (stateAsString) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    }

    //установка maxVal
    setMaxVal = (e) => {
        this.setState(
            {
                maxVal: e.currentTarget.value,
                onSet: false
            },
            this.saveState
        )
    }
    //установка minVal
    setMinVal = (e) => {
        this.setState(
            {
                minVal: e.currentTarget.value,
                onSet: false
            },
            this.saveState
        )
    }
    //кнопка установки
    setVal = () => {
        this.setState(
            {
                num: this.state.minVal,
                onSet: true,
                onShow: false
            },
            this.saveState
        )
    }
    //кнопка инкремента
    incButton = () => {
        let num = this.state.num
        num < this.state.maxVal && num++
        this.setState({
                num: num
            },
            this.saveState
        )
    }
    //сброс настроек
    resButton = () => {
        this.setState({
                num: this.state.minVal
            },
            this.saveState
        )
    }
    //переключатель
    onShow = () => {
        this.setState({
                onShow: true
            },
            this.saveState
        )

    }

    render = () => {
        let forMax = (Number(this.state.maxVal) < 0 || Number(this.state.maxVal) <= Number(this.state.minVal))
        let forMin = (Number(this.state.minVal) < 0 || Number(this.state.minVal) >= Number(this.state.maxVal))

        return (
            <div className={s.task}>
                <div><h3>Counter</h3></div>
                <div className={s.row}>
                    {/*Max Min input*/}
                    {this.state.onShow&&<div className={s.block}>
                        <Input
                            err={forMax && s.red}
                            setVal={this.setMaxVal}
                            title='Max'
                            value={this.state.maxVal}
                        />
                        <Input
                            err={forMin && s.red}
                            setVal={this.setMinVal}
                            title='Mix'
                            value={this.state.minVal}
                        />

                        {/*Button set*/}
                        <div className={s.group}>
                            <Button onClickFn={this.setVal}
                                    thisNum={this.state.num}
                                    title={'Set'}
                                    disabled={(forMax || forMin || this.state.onSet === true) && 'disabled'}
                            />
                        </div>

                    </div>}

                    {!this.state.onShow&&<div className={s.block}>
                        {/*Span*/}
                        <Num nameNum={this.state.num}
                             maxVal={this.state.maxVal}
                             minVal={this.state.minVal}
                             onSet={this.state.onSet}
                             vals={forMax || forMin}
                        />

                        {/*2 button*/}
                        <div className={s.group}>
                            <Button onClickFn={this.incButton}
                                    thisNum={this.state.num}
                                    title={'Inc'}
                                    disabled={
                                        this.state.onSet === false || this.state.num === Number(this.state.maxVal)
                                        && 'disabled'
                                    }
                            />
                            <Button onClickFn={this.resButton}
                                    thisNum={this.state.num}
                                    title={'Res'}
                                    disabled={(this.state.onSet === false) && 'disabled'}
                            />
                            <Button onClickFn={this.onShow}
                                    title={'Set'}
                            />
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}


export default CounterSecond;
