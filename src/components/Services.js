"use client"
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import CardBox from "./CardBox"
import { useState } from "react"


function Services() {
    const [items, setitems] = useState([
        {
            title:'title',
            desc:'desc',
            excerpt:'excerpt',
            id:1,
            thumbnail:''
        },
        {
            title:'title',
            desc:'desc',
            excerpt:'excerpt',
            id:2,
            thumbnail:''
        },
        {
            title:'title',
            desc:'desc',
            excerpt:'excerpt',
            id:3,
            thumbnail:''
        }
    ])


    return (
        <Box bg='black'>
            <Box color='white'>
                <Box textAlign='center' paddingTop='30px'>
                    <Text fontSize='3xl' as='b'>Services</Text>
                </Box>
            </Box>
            <Flex justify='center'>
                <SimpleGrid spacing='30px' margin='30px' columns={[1, 2, 3]}>
                    {
                        items.map((data,i) => {
                            // console.log(data)
                            return (
                                <CardBox
                                    key={i}
                                    title={data.title}
                                    desc={data.desc}
                                    excerpt={data.excerpt}
                                    id={data.id}
                                    thumbnail={data.thumbnail}
                                    hreflink={`/services/${data.id}`}
                                />
                            )
                        })
                    }
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Services