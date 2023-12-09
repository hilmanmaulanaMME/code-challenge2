import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Image } from '@chakra-ui/react'
import Link from 'next/link'


function ImageBox({firstName, lastName ,excerpt,desc,id,thumbnail,hreflink}) {


    return (
        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'>{firstName} {lastName}</Heading>
            </CardHeader>
            <CardBody>
                <Image borderRadius='full' boxSize='150px'
                    src={thumbnail}
                />
            </CardBody>
            <CardFooter justify='center'>
                <Link href={`${hreflink}`}>
                    <Button mr={1}>View Here</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default ImageBox