"use client"
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import CardBox from "./CardBox"
import { useState, useEffect } from "react"
import axios from "axios"
import LongServicesBox from "./LongServicesBox"


function LongServices() {
    const [LongServices, setLongServices] = useState([])

    useEffect(() => {
        getLongServices()
    },[])

    useEffect(() => {
    },[LongServices])



    async function getLongServices() {
        let config = {
            url:'/api/contentful-services/',
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            let getLongServices = await axios(config)
            setLongServices(getLongServices.data.items)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box bg='black' color='white'>
            <Box>
                <Box textAlign='center' paddingTop="10px">
                    <Text fontSize='3xl' as='b'>Our Services</Text>
                </Box>
            </Box>
            <Flex justify="center">
                <Box maxW="65%">
                    <SimpleGrid spacing='30px' margin='30px' row={[1,2,3]}>
                        {
                        LongServices?.map((data,i) => {
                            console.log(data)
                                return (
                                <LongServicesBox
                                    key={i}
                                    title={data.fields.services}
                                    desc={data.fields.longDescription}
                                    thumbnail={data.fields.image.fields.file.url}
                                />
                                )
                            })
                        }
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}

export default LongServices