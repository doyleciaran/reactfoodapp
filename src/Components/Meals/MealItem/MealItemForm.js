import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
// import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5 ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input input={{
                id: 'amount_' + props.id, 
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
                }}
                ref={amountInputRef} 
                label="Amount" />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a value between 1-5</p>}
        </form>
    )
}

export default MealItemForm
