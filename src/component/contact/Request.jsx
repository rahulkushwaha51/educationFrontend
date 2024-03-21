import React, { useEffect, useState } from 'react';
import './Request.css';
import { useDispatch, useSelector } from 'react-redux';
import {courseRequest } from '../../redux/actions/otherAction';
import toast from 'react-hot-toast';
const Request = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const dispatch = useDispatch()

    const { message, error } = useSelector(state => state.other)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(courseRequest(name, email, course))
    }

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }

    }, [dispatch,message, error]);

    return (
        <div id='request' className='request'>
            <h1>Request a Course</h1>
            <div className="request-form">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        id='name'
                        name="user_name"
                        value={name}
                        placeholder="Your Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type='text'
                        name="course"
                        placeholder="Course"
                        value={course}
                        onChange={e => setCourse(e.target.value)}
                    />
                    <button className='btn-primary' type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
}

export default Request;
