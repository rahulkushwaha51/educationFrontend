import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import Chart from './Chart'
import { useDispatch, useSelector } from 'react-redux'
import { getadminstats } from '../../../redux/actions/adminAction'
// import { LineChart } from './Chart'

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'4'}
    borderRadius={'lg'}>

    <Text children={title} />
    <HStack spacing={'4'}>
      <Text fontSize={'2xl'}
        fontWeight={'bold'}
        children={qty} />

      <HStack>
        <Text
          children={`${qtyPercentage}%`} />
        {profit ? <RiArrowUpLine color='green' /> : (
          <RiArrowDownLine color='red' />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={'Since Last Month '} />
  </Box>
)

const Bar = ({ title, value, profit }) => (
  <Box p={'4'} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb="2" />
    <HStack w={'full'} alignItems={'center'}>
      <Text children={profit ? "0%" : `-${value}%`} />
      <Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
)
const Dashboard = () => {

  const dispatch = useDispatch();

  const { stats,
    usersCount,
    subscriptionCount,
    viewsCount,
    usersPercent,
    subscriptionPercent,
    viewsPercent,
    userProfit,
    subscriptionProfit,
    viewsProfit, } = useSelector(state => state.admin)

    console.log(stats.CreatedAt)

  useEffect(() => {
    dispatch(getadminstats())
  }, [dispatch]);
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

      {stats ? (<Box
        py={"16"}
        px={['4', '0']}>
        <Text
          textAlign={"center"}
          opacity={0.5}
          children={`Last Change was on ${String(new Date(stats[11].CreatedAt)).split("G")[0]}`}
        />

        <Heading children="Dashboard"
          ml={['0', '16']}
          mb={'8'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox
            title='Views'
            qty={viewsCount}
            qtyPercentage={viewsPercent}
            profit={viewsProfit} />

          <Databox
            title='Users'
            qty={usersCount}
            qtyPercentage={usersPercent}
            profit={userProfit} />

          <Databox
            title='Subscription'
            qty={subscriptionCount}
            qtyPercentage={subscriptionPercent}
            profit={subscriptionProfit} />

        </Stack>
        {/* <Box m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          mt={['4', '16']} >

          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children={'Views Graph'}
            pt={['8', '0']}
            ml={['0', 16]}
          /> 
          <Chart/>
        </Box> */}
        <Grid templateColumns={["1fr", "2fr 1fr"]}>
          <Box p={4}>
            <Heading textAlign={['center', 'left']}
              size={'md'}
              children={"Progress Bar"}
              my={'8'}
              ml={['0', '16']} />
            <Box >
              <Bar profit={viewsProfit} title='Views' value={viewsPercent} />
              <Bar profit={userProfit} title='Users' value={usersPercent} />
              <Bar profit={subscriptionProfit} title='Subscription' value={subscriptionPercent} />
            </Box>
          </Box>
          <Box p={['0', '16']} py={'16'}>
            <Heading textAlign={'center'} size={'md'} mb={'4'} children="Users" />
          </Box>
        </Grid>
      </Box>) :
        (<h1>stats not found</h1>)}
      <Sidebar />

    </Grid>
  )
}

export default Dashboard
