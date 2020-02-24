import React, {Component, Fragment} from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummer] will update!')
    }


    render () {    
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
            <span style={{textTransform: "capitalize"}}>{igKey}</span>: 
            {this.props.ingredients[igKey]}</li>
    });
        return (    
        <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <strong><p>Total Price: {this.props.price.toFixed(2)}</p></strong>
        <p>Continue to checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Fragment>
        )
    }
}

export default OrderSummary;