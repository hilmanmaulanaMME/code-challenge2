"use client"
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import CardBox from "./CardBox"
import { useState, useEffect } from "react"
import axios from "axios"


function Services() {
    const [Services, setServices] = useState([])

    useEffect(() => {
        getServices()
    },[])

    useEffect(() => {
    },[Services])



    async function getServices() {
        let config = {
            url:'http://localhost:3000/api/contentful-services/',
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            let getServices = await axios(config)
            setServices(getServices.data.items)
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <Box bg='black' color='white'>
                <Box>
                    <Box textAlign='center' paddingTop='30px'>
                        <Text fontSize='3xl' as='b'>Services</Text>
                    </Box>
                </Box>
                <Flex justify='center'>
                    <SimpleGrid spacing='30px' margin='30px' columns={[1,2,3]}>
                        {
                        Services?.map((data,i) => {
                            console.log(data)
                                return (
                                <CardBox
                                    key={i}
                                    title={data.fields.services}
                                    desc={data?.fields?.descriptions}
                                    thumbnail={data.fields.image.fields.file.url}
                                    hreflink='./services'
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