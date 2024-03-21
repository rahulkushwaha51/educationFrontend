import { Button, Center, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../redux/actions/adminAction';
import toast from 'react-hot-toast';

const CreateCourse = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [CreatedBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const categories = [
        "Web development",
        "Artificial",
        "English",
        "Mathmatics",
        "Engineering"];
    const levels = [
        "beginner",
        "intermediate",
        "advanced"
    ]

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const dispatch = useDispatch()
    const { error, message } = useSelector(state => state.admin)

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append('file', image);
        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('category', category);
        myForm.append('level', level);
        myForm.append('price', price);
        myForm.append('duration', duration);
        myForm.append('CreatedBy', CreatedBy);


        dispatch(createCourse(myForm))
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


    }, [dispatch, error, message]);
    return (
        <Grid
            minH={'100vh'}
            templateColumns={['1fr', '5fr 1fr']}
        >
            <Container py={'16'}>
                <form onSubmit={formSubmitHandler}>
                    <Heading
                        textTransform={'uppercase'}
                        children='Create Course'
                        my={'16'}
                        textAlign={['center', 'left']}
                    />

                    <VStack m={'auto'} spacing={'8'}>
                        <Input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' focusBorderColor='purple.300' />

                        <Input type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' focusBorderColor='purple.300' />

                        <Input type='text' value={CreatedBy} onChange={e => setCreatedBy(e.target.value)} placeholder='Creator Name' focusBorderColor='purple.300' />
                        <Input type='number' value={price} onChange={e => setPrice(e.target.value)} placeholder='Price' focusBorderColor='purple.300' />
                        <Input type='number' value={duration} onChange={e => setDuration(e.target.value)} placeholder='Duration' focusBorderColor='purple.300' />

                        <Select focusBorderColor='purple.300'
                            value={category}
                            onChange={e => setCategory(e.target.value)}>
                            <option value="">Category</option>

                            {categories.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </Select>
                        <Select focusBorderColor='purple.300'
                            value={level}
                            onChange={e => setLevel(e.target.value)}>
                            <option value="">Level</option>

                            {levels.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </Select>
                        <Input
                            type="file"
                            name="chooseAvatar"
                            onChange={changeImageHandler}
                            focusBorderColor='purple.300'

                        />

                        {imagePrev && (<Image src={imagePrev} boxSize={"64"} objectFit={'contain'} />)}

                        <Button w={'full'} backgroundColor={"blueviolet"} colorScheme='purple.300' type='submit'>Create</Button>
                    </VStack>
                </form>
            </Container>

            <Sidebar />
        </Grid>
    )
}

export default CreateCourse
