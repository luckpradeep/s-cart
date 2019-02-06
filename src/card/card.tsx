import React, { Component } from "react";
import './card.scss';

interface IProps {
    data: {
        productName: string,
        productImage: string,
        price: string,
    },
    addCart?: Function,
    disableCart?: boolean,
}

export default class Card extends Component<IProps> {
    private vm = this;
    constructor(props: IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.props.addCart && this.props.addCart(this.props.data);
    }
    render() {
        return (
            <div className="card product">
                <div className="card-body">
                    <div className="card-title">{this.props.data.productName}</div>
                    <div className="product__image">
                        <img src={this.props.data.productImage} alt={this.props.data.productName} /></div>
                    <div className="product__buttons">
                        <button onClick={this.handleClick} className="btn btn-primary btn-sm" disabled={this.props.disableCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}