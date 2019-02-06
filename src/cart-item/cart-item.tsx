import React, { Component } from "react";

interface IProps {
    item: {
        productName?: string,
        productImage?: string,
        price?: string,
    },
    removeCart?: Function,
}

export default class CartItem extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    private handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.props.removeCart && this.props.removeCart(this.props.item);
    }
    render() {        
        return (
            <div className="clearfix">
                <span className="mr-3 float-left">{this.props.item.productName}</span>
                <button onClick={this.handleClick} className="btn btn-danger btn-sm float-right">Remove</button>
            </div>
        );
    }
}