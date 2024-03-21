import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription } from '../../redux/actions/subscriptionAction';
import toast from 'react-hot-toast';
import img from '../assets/currency.jpg'

import { server } from '../../redux/store'

const Subscribe = ({ user }) => {
    const dispatch = useDispatch();
    const [key, setKey] = useState();
    const SubscribeHandler = async () => {
        const { data } = await axios.get(`${server}/razorpaykey`);
        setKey(data.key)
        dispatch(buySubscription())
    }

    const { error, subscriptionId } = useSelector(state => state.subscription)
    const { error: courseError } = useSelector(state => state.course)
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }
        if (courseError) {
            toast.error(courseError);
            dispatch({ type: 'clearError' })
        }
        if (subscriptionId) {
            const openPopUp = () => {
                const options = {
                    key,
                    name: "educaton51",
                    description: "Get all courses access",
                    image: { img },
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: ""
                    },
                    notes: {
                        address: "rahul kushwaha"
                    },
                    theme: {
                        color: '#FFC800'
                    }

                }
                const razor = new window.Razorpay(options)
                razor.open()
            }
            openPopUp()
        }


    }, [dispatch, error, user.name, user.email, key, subscriptionId], courseError);
    return (
        <Container h={'90vh'} p={'16'}>
            <Heading children='Welcome' my={'8'} textAlign={'center'} />
            <VStack
                boxShadow={'lg'}
                alignItems={'stretch'}
                spacing={'0'}>
                <Box bg={'yellow.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
                    <Text color='black' children={`Pro Pack -₹299.00 `} />
                </Box>
                <Box p={'4'}>
                    <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
                        <Text color='black' children={`Buy Subscription and Get access to all courses`} />
                        <Heading children='₹299.00 Only' size={'md'} />
                    </VStack>

                    <Button my={'8'} color={'black'} colorScheme='yellow.500' w={'full'} onClick={SubscribeHandler}>
                        Buy Now
                    </Button>

                    <Box bg={'blackAlpha.600'} p='4' css={{ borderRadius: '0 0 8px 8px' }}>
                        <Heading children='100% refund at cancellattion' size={'sm'} color={'white'} textTransform={'uppercase'} />

                        <Text fontSize={'xs'} color={'white'} children='* Terms &  Condition Apply' />
                    </Box>

                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe
