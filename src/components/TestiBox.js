import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, AspectRatio, Stack, Flex, SimpleGrid, Avatar, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

function TestiBox({title,excerpt,desc,id,thumbnail,hreflink}) {
    return (
        <Card>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={title} src={thumbnail}/>
                        <Box>
                            <Heading size='sm'  textAlign='center'>{title}</Heading>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text as='em' textAlign='justify'>{desc}</Text>
            </CardBody>
        </Card>
    )
}

export default TestiBox