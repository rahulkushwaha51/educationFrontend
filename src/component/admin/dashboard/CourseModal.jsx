import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'


const CourseModal = ({ isOpen, onClose, id, courseTitle, lectures, deleteLectureHandler, addLectureHandler }) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [video, setVideo] = useState();
    const [videoPrev, setVideoPrev] = useState();

    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const CloseHandler = () => {
        setTitle('');
        setVideo('')
        setDescription('')
        setVideoPrev('')
        onClose();
    }
    return (
        <Modal isOpen={isOpen} size={'full'} onClose={CloseHandler} scrollBehavior='outside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {courseTitle}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={'16'}>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box px={['0', '16']} >
                            <Box my='5'>
                                <Heading children={courseTitle} />
                                <Heading children={`#${id}`} size={'sm'} opacity={'4'} />
                            </Box>

                            <Heading children={"Lectures"} size={'lg'} />
                            {lectures.map((item, index) => (
                                <VideoCard key={index}
                                    title={item.title}
                                    description={item.description}
                                    num={index + 1}
                                    courseId={id}
                                    lectureId={item._id}
                                    deleteLectureHandler={deleteLectureHandler} />
                            ))}

                        </Box>
                        <Box>
                            <form onSubmit={e => addLectureHandler(e, id, title, description, video)}>
                                <VStack spacing={'4'}>
                                    <Heading children={'Add Lecture'} size={'md'} textTransform={'uppercase'} />

                                    <Input focusBorderColor='purple.300' placeholder='Title' value={title}
                                        onChange={e => setTitle(e.target.value)} />

                                    <Input focusBorderColor='purple.300' placeholder='Descripton' value={description}
                                        onChange={e => setDescription(e.target.value)} />

                                    <Input
                                        accept='video/mp4'
                                        type="file"
                                        name="chooseAvatar"
                                        onChange={changeVideoHandler}
                                        focusBorderColor='purple.300'

                                    />

                                    {
                                        videoPrev && (
                                            <video controlsList='nodownload' controls src={videoPrev}>
                                            </video>
                                        )
                                    }
                                    <Button w={'full'} colorScheme='purple' type='submit'>Upload</Button>
                                </VStack>
                            </form>
                        </Box>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={CloseHandler}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CourseModal

function VideoCard({ title, description, num, courseId, lectureId, deleteLectureHandler }) {
    return (
        <Stack direction={['column', 'row']}
            my={'8'}
            borderRadius={'lg'}
            boxShadow={'0 0 10px blue'}
            justifyContent={['flex-start', 'space-between']}
            p={['4', '8']}>
            <Box>
                <Heading size={'sm'}
                    children={`#${num} ${title}`} />
                <Text children={description} />
            </Box>
            <Button color={'purple.600'} onClick={() => deleteLectureHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    )
}