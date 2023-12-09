import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, AspectRatio } from '@chakra-ui/react'
import Link from 'next/link'

function TestiBox({title,excerpt,desc,id,thumbnail,hreflink}) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text >{desc}</Text>
            </CardBody>
        </Card>
    )
}

export default TestiBox