import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, AspectRatio, Stack, Flex, SimpleGrid, Avatar, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

function LongServicesBox({title,excerpt,desc,id,thumbnail,hreflink}) {
    return (
        <Card  direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image objectFit='cover' maxW={{ base: '100%', sm: '300px' }} src={thumbnail} alt="img-LongServicesBox"/>
            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>
                    <Text textAlign='justify'>{desc}</Text>
                </CardBody>
                <CardFooter  justifyContent="flex-end">
                    <Button>
                        Get Started
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default LongServicesBox