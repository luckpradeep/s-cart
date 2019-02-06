import React, { Component } from "react";
import './shopping-cart.scss';
import { PRODUCT_DATA } from './product-data';
import Card from '../card/card';
import CartList from '../cart-list/cart-list';

const getProductData = () => {
    return Promise.resolve(PRODUCT_DATA);
}

interface IProps { }
interface IState {
    products: any[],
    selectedItems: any[],
}


export default class ShoppingCart extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            products: [],
            selectedItems: [],
        };
        this.handleOnAddCart = this.handleOnAddCart.bind(this);
        this.disableCart = this.disableCart.bind(this);
        this.updatedCart = this.updatedCart.bind(this);
    }
    componentDidMount() {
        this.getProductData();
    };
    private getProductData() {
        getProductData().then((products: any[]) => {
            this.setState({
                products: PRODUCT_DATA,
            });
        });
    };
    private handleOnAddCart(item: any) {
        this.setState({
            selectedItems: [...this.state.selectedItems, item]
        });
    }
    private disableCart(item: any) {
        return this.state.selectedItems.findIndex((product: any) => product.productName === item.productName) > -1;
    }
    private updatedCart(selectedItems: any) {
        this.setState({
            selectedItems: selectedItems
        })
    }
    render() {
        const products = this.state.products.map((product, i: number) => {
            return (
                <div key={i} className="col-sm-4 col-xs-6">
                    <Card data={product} addCart={this.handleOnAddCart} disableCart={this.disableCart(product)} />
                </div>
            );
        });
        return (
            <div className="shopping-cart container-fluid">
                <div className="cards-container row">
                    <div className="col-8">
                        <div className="row">
                            {products}
                        </div>
                    </div>
                    <div className="col-4">
                        <CartList items={this.state.selectedItems} updatedCart={this.updatedCart} />
                    </div>
                </div>
            </div>
        );
    }
}