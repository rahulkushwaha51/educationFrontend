import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { RiDeleteBin7Fill, RiH2 } from "react-icons/ri";
import CourseModal from "./dashboard/CourseModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, getLecture } from "../../redux/actions/courseAction";
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from "../../redux/actions/adminAction";
import toast from "react-hot-toast";

const AdminCourses = () => {
  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const { courses, lectures } = useSelector((state) => state.course);
  const { error, message } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const courseDetailsHandler = (courseId, title) => {
    dispatch(getLecture(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const deleteButtonHandler = async (courseId) => {
    await dispatch(deleteCourse(courseId));
    dispatch(getLecture(courseId));
  };
  const deleteLectureHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getLecture(courseId));
  };
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);
    await dispatch(addLecture(courseId, myForm));
    dispatch(getLecture(courseId));
  };

  useEffect(() => {
    dispatch(getAllCourses());

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      {courses ? (
        <Box p={["0", "8"]} overflowX={"auto"}>
          <Heading
            textTransform={"uppercase"}
            children="All Courses"
            my={"16"}
            textAlign={["center", "left"]}
          />

          <TableContainer w={["100vw", "full"]}>
            <Table variant={"simple"} size={"lg"}>
              <TableCaption>All Available Courses in the database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Poster</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map((item) => (
                  <Row
                    key={item._id}
                    item={item}
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModal
            lectures={lectures}
            id={courseId}
            courseTitle={courseTitle}
            isOpen={isOpen}
            onClose={onClose}
            deleteLectureHandler={deleteLectureHandler}
            addLectureHandler={addLectureHandler}
          />
        </Box>
      ) : (
        <Heading
          textTransform={"uppercase"}
          children="No course Available"
          my={"16"}
          textAlign={"center"}
        />
      )}
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>{item.title}</Td>
      <Td>
        <Image src={item.poster.url} alt={item.title} />
      </Td>
      <Td textTransform={"uppercase"}>{item.category}</Td>
      <Td>{item.CreatedBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numofVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            variant={"outline"}
            color={"purple.500"}
            onClick={() => courseDetailsHandler(item._id, item.title)}
          >
            View Lectures
          </Button>
          <Button
            color={"purple.600"}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
