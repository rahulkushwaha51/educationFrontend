import React, {useEffect } from 'react'
import "./OrderPayment.css"
import { useDispatch } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { placeOrder } from '../../redux/actions/cartAction'

const OrderPayment = () => {
    const reference = useSearchParams()[0].get('reference')
    const dispatch = useDispatch()
    useEffect(() => {
        if (reference) {
            dispatch(placeOrder())
        }
    }, [dispatch]);

    return (
        <div className='payment-card'>
            <h1>Your Payment is successfull</h1>
            <p>Thank you for your Payment</p>
            <p>Now You Have access to this Course</p>
            <h2><RiCheckboxCircleFill /></h2>
            <Link to={'/profile'}>
                <button className='btn btn-primary'>Go To Profile</button>
            </Link>

            <h3>Payment Id: <b>{reference}</b></h3>
        </div>
    )
}

export default OrderPayment