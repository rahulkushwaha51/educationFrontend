import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, getallusers, updateuserRole } from '../../redux/actions/adminAction';
import toast from 'react-hot-toast';



const Users = () => {

    const { users, message, error } = useSelector(state => state.admin)

    const dispatch = useDispatch()
    const updateHandler = (userId) => {
        dispatch(updateuserRole(userId))
    }

    const deleteuserHandler = (userId) => {
        dispatch(deleteuser(userId))
    }

    useEffect(() => {
        dispatch(getallusers())

        // if (error) {
        //     toast.error(error);
        //     dispatch({ type: 'clearError' })
        // }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }

    }, [dispatch, message, error]);
    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '16']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'}
                    children='All Users'
                    my={'16'}
                    textAlign={['center', 'left']} />

                <TableContainer w={['100vw', 'full']} >
                    <Table variant={"simple"} size={["sm","lg"]}>
                        <TableCaption>
                            All Available users in the database
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric  textAlign='center'>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users && users.map(item => (
                                    <Row key={item._id} item={item} updateHandler={updateHandler} deleteuserHandler={deleteuserHandler} />
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <Sidebar />
        </Grid>
    )
}

export default Users;

function Row({ item, updateHandler, deleteuserHandler }) {
    return (
        <Tr>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription && item.subscription.status === 'active' ? "Active" : 'Not Active'}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <button className='btn btn-primary' onClick={() => updateHandler(item._id)}>
                        Change Role
                    </button>
                    <Button color={'purple.600'} onClick={() => deleteuserHandler(item._id)}>
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}