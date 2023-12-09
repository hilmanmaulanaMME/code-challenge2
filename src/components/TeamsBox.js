import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Image, Text, Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'


function TeamsBox({firstName, lastName ,excerpt,email,id,thumbnail,hreflink}) {


    return (
        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'>{firstName} {lastName}</Heading>
            </CardHeader>
            <CardBody>
                <Flex justify='center'>
                    <Image borderRadius='full' boxSize='125px'src={thumbnail} alt='img-TeamsBox'/>
                </Flex>
            </CardBody>
            <CardFooter>
                <Box width='100%' >
                    <Flex justify='center'>
                        <Text size='md' textAlign='center'>{email}</Text>
                    </Flex>
                </Box>
            </CardFooter>
        </Card>
    )
}

export default TeamsBox