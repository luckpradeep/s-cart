import React, { Component } from "react";
import CartItem from '../cart-item/cart-item';

interface IProps {
    items: any[],
    updatedCart?: Function,
}

export default class CartList extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.removeCart = this.removeCart.bind(this);
    }
    private removeCart(removedItem: any) {
        const filteredItems = this.props.items.filter((item: any) => item.productName !== removedItem.productName);
        this.props.updatedCart && this.props.updatedCart(filteredItems);
    }
    render() {
        const items = this.props.items.map((item, i: number) => {
            return (
                <div key={i} className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <CartItem item={item} removeCart={this.removeCart} />
                        </li>
                    </ul>
                </div>
            );
        });
        return (
            <div>
                {items.length ?
                    <div className="border p-3">
                        <div className="text-left mb-2">Shopping Cart</div>
                        {items}

                    </div> :
                    <div>Cart is empty</div>
                }
            </div>
        );
    }
}