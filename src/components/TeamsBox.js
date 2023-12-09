import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'


function TeamsBox({firstName, lastName ,excerpt,email,id,thumbnail,hreflink}) {


    return (
        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'>{firstName} {lastName}</Heading>
            </CardHeader>
            <CardBody>
                <Image borderRadius='full' boxSize='150px'src={thumbnail}/>
            </CardBody>
            <CardFooter>
                <Text  size='md' textAlign='center'>{email}</Text>
            </CardFooter>
        </Card>
    )
}

export default TeamsBox