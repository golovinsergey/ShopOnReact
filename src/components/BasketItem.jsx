function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            {name} x {quantity} = {price * quantity} $
            <span className='basket-rem-add'>
                <i
                    className='material-icons basket-quantity'
                    onClick={() => decQuantity(id)}
                >
                    remove
                </i>{' '}
                <i
                    className='material-icons basket-quantity'
                    onClick={() => incQuantity(id)}
                >
                    add
                </i>{' '}
            </span>
            <span
                class='secondary-ctenton'
                onClick={() => removeFromBasket(id)}
            >
                <i class='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}

export { BasketItem };
