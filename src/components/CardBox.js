import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, AspectRatio, Flex } from '@chakra-ui/react'
import Link from 'next/link'

function CardBox({title,excerpt,desc,id,thumbnail,hreflink}) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Flex justify='center'>
                    <Image src={thumbnail} maxW='100%' ratio={4 / 3} maxH='250px' borderRadius='15px' alt='img-CardBox'/>
                </Flex>
                <Text marginTop='10px' textAlign='justify'>{desc}</Text>
            </CardBody>
            <CardFooter  justify='center'>
                <Link href={`${hreflink}`}>
                    <Button mr={1}>View Here</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default CardBox