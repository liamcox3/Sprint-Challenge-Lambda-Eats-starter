import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";

function Form() {
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        sauce: "",
        topping: "",
        topping2: "",
        topping3: "",
        topping4: "",
        special: "",
    });

    const [errors, setErrors] = useState({
        name: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "Must has 2 characters")
            .required("Name is a required field."),
    });

    const inputChange = (e) => {
        e.persist();
        const newFormData = {
            ...formState,
        };

        // validateChange(e);
        setFormState(newFormData);
    };

    const inputChange2 = (e) => {
        e.persist();
        const newFormData = {
            ...formState,
        };

        validateChange(e);
        setFormState(newFormData);
    };

    const validateChange = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [e.target.name]: "",
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0],
                });
            });
    };

    return (
        <div className='App'>
            <form>
                <h2>Name for the Order</h2>
                <label htmlFor='name'></label>
                <input
                    id='name'
                    type='text'
                    value={formState.name}
                    onChange={inputChange2}
                ></input>
                {errors.name.length > 1 ? (
                    <p className='error'>{errors.name}</p>
                ) : null}
                <div>
                    <label htmlFor='size'>Choice of Size</label>
                    <select name='size' id='size' onChange={inputChange}>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </div>
                <div>
                    <h2>Choice of Sauce</h2>
                    <label htmlFor='sauce'>Origanal Red</label>
                    <input
                        id='sauce'
                        type='radio'
                        value={formState.sauce}
                        onChange={inputChange}
                    ></input>
                    <label htmlFor='sauce'>Garlic Ranch</label>
                    <input id='sauce' type='radio'></input>
                    <label htmlFor='sauce'>BBQ Sauce</label>
                    <input id='sauce' type='radio'></input>
                    <label htmlFor='sauce'>Spinach Alfredo</label>
                    <input id='sauce' type='radio'></input>
                </div>
                <div>
                    <h2>Add Toppings</h2>
                    <p>Choose up to 10</p>
                    <label htmlFor='topping'>Pepperoni</label>
                    <input
                        id='topping'
                        type='checkbox'
                        value={formState.topping}
                        onChange={inputChange}
                    ></input>
                    <label htmlFor='topping2'>Sausage</label>
                    <input
                        id='topping2'
                        type='checkbox'
                        value={formState.topping2}
                        onChange={inputChange}
                    ></input>
                    <label htmlFor='topping3'>Canadian Bacon</label>
                    <input
                        id='topping3'
                        type='checkbox'
                        value={formState.topping3}
                        onChange={inputChange}
                    ></input>
                    <label htmlFor='topping4'>Spicy Italian Sausage</label>
                    <input
                        id='topping4'
                        type='checkbox'
                        value={formState.topping4}
                        onChange={inputChange}
                    ></input>
                </div>
                <div>
                    <h2>Special Instructions</h2>
                    <label htmlFor='instructions'></label>
                    <input
                        id='instructions'
                        type='text'
                        placeholder="Anything else you'd like to add?"
                        // value={formState.special}
                        onChange={inputChange}
                    ></input>
                </div>

                <button type='submit' disabled={buttonDisabled}>
                    Add to Order
                </button>
            </form>
        </div>
    );
}

export default Form;
