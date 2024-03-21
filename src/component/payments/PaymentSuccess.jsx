
import React, { useEffect } from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link, useSearchParams } from 'react-router-dom'
import './OrderPayment.css'


const PaymentSuccess = () => {

    const reference = useSearchParams()[0].get('reference')



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

export default PaymentSuccess
