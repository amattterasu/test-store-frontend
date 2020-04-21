import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {AppStateType} from "../../redux/reducers/rootReducer";
import * as basketActions from "../../redux/actions/basket";

import './OrderContainer.scss'

import BasketCard from "../../components/ProductCard/BasketCard";
import Input from "../../components/UI/Input";
import {ItemsType} from "../../types/types";

type PropsType = {
    totalPrice: number,
    count: Array<number>
    products: Array<ItemsType>
}

class OrderContainer extends React.Component<PropsType> {

    state: any = {
        formControls: {
            name: {
                value: '',
                label: 'ФИО'
            },
            phoneNumber: {
                value: '',
                label: 'Номер телефона'
            },
            email: {
                value: '',
                type: 'email',
                label: 'Адрес электронной почты'
            },
            deliveryAddress: {
                value: '',
                label: 'Адрес доставки'
            },
            deliveryDate: {
                value: '',
                label: 'Дата доставки'
            },
            deliveryTime: {
                value: '',
                label: 'Время доставки'
            }
        },
        success: false
    }

    onHandleChange = ((e: React.ChangeEvent<HTMLInputElement>, controlName: any) => {

        const formControls = {...this.state.formControls}

        const control = {...formControls[controlName]}

        control.value = e.target.value

        formControls[controlName] = control

        this.setState({
            formControls
        })
    })

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName: any, index: number) => {

            const control = this.state.formControls[controlName]
            return (
                <Input
                    value={control.value}
                    key={controlName + index}
                    type={control.type}
                    label={control.label}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onHandleChange(e, controlName)}/>
            )
        })
    }

    handleSubmit = (e: any) => {
        e.preventDefault()
        this.setState({success: true})
        console.log(this.state.formControls)
    }

    render() {

        const {totalPrice, count, products} = this.props

        let temp: Array<{ id: number, count: number }> = []

        count.forEach((item: any) =>
            item.count !== 0 ? temp.push({id: item.id, count: item.count}) : null
        )
        const ids = temp.filter((item: { id: number, count: number }) => item.id !== undefined)

        return (
            <div>
                {
                    !this.state.success ? (
                            <div>
                                <div>
                                    {
                                        products.map((product: any) =>
                                            ids.map((item: any, index: number) => (
                                                item.id === product.id
                                                    ?
                                                    <BasketCard key={index}
                                                                {...product}
                                                                count={item.count}
                                                                isOrder/>
                                                    : null
                                            ))
                                        )
                                    }
                                </div>

                                <div>
                                    {
                                        totalPrice
                                    }
                                </div>

                                <div className='orderForm'>

                                    <form onSubmit={this.handleSubmit}>
                                        {
                                            this.renderInputs()
                                        }
                                        <button type='submit'>Отправить</button>
                                    </form>
                                </div>

                            </div>
                        ) :
                        <div>
                            <h1>Заказ отправлен!</h1>
                            <div>
                                <ul>
                                    <li>ФИО - {this.state.formControls.name.value}</li>
                                    <li>Номер телефона - {this.state.formControls.phoneNumber.value}</li>
                                    <li>email - {this.state.formControls.email.value}</li>
                                    <li>Адрес доставки - {this.state.formControls.deliveryAddress.value}</li>
                                    <li>Дата доставки - {this.state.formControls.deliveryDate.value}</li>
                                    <li>Время доставки - {this.state.formControls.deliveryTime.value}</li>
                                </ul>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    totalPrice: state.basket.totalPrice,
    count: state.basket.quantity,
    products: state.products.items
})

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(basketActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);