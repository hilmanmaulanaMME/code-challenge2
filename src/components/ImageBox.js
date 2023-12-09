import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'


function ImageBox({firstName, lastName ,excerpt,desc,id,thumbnail,hreflink}) {


    return (
        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'>{firstName} {lastName}</Heading>
            </CardHeader>
            <CardBody  justifyContent='center'>
                <Image borderRadius='full' boxSize='150px'
                    src={thumbnail} alt='img-ImageBox'/>
            </CardBody>
        </Card>
    )
}

export default ImageBox