"use client"
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import TestiBox from "./TestiBox"
import { useState, useEffect } from "react"
import axios from "axios"

function Testimonials() {
    const [Testimonials, setTestimonials] = useState([])

    useEffect(() => {
        getTestimonials()
    },[])

    useEffect(() => {
    },[Testimonials])



    async function getTestimonials() {
        let config = {
            url:'http://localhost:3000/api/contentful-testimonials/',
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            let getTestimonials = await axios(config)
            setTestimonials(getTestimonials.data.items)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box bg='black' color='white'>
            <Box>
                <Box textAlign='center' paddingTop='30px'>
                    <Text fontSize='3xl' as='b'>Testimonials</Text>
                </Box>
            </Box>
            <Flex justify='center'>
                <SimpleGrid spacing='30px' margin='30px' columns={[1,2,3,4]}>
                    {
                        Testimonials?.map((data,i) => {
                            console.log(data)
                            return (
                                <TestiBox
                                    key={i}
                                    title={data.fields.name}
                                    desc={data?.fields?.descriptions}
                                />
                            )
                        })
                    }
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Testimonials