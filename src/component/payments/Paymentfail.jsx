import React from 'react'

const Paymentfail = () => {
    return (
        <Container h={'90vh'}>
            <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
                <RiErrorWarningFill size={'5rem'} />
                <Heading  >
                    Payment Fail
                </Heading>
                <Link to={'/subscribe'}>
                    <Button variant={'ghost'} bg={'yellow.400'}>
                        Try Again
                    </Button>
                </Link>
            </VStack>
        </Container>
    )
}

export default Paymentfail
