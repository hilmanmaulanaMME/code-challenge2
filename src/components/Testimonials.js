"use client"
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import CardBox from "./CardBox"
import { useState, useEffect } from "react"
import axios from "axios"

function Testimonials() {
    const [Testi, setTesti] = useState(null)

    useEffect(() => {
        getTesti()
    },)



    async function getTesti() {
        let config = {
            url:'http://localhost:3000/api/contentful/',
            method:'get',
            headers:{
                'Content-Type':'application/json'
                
            }
        }

        try {
            getTesti = await axios(config)
            setTesti(getTesti.data.fields.topSection[0].fields.quote.content[0].content[0].content[0].value)
            console.log(getTesti)
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
                <SimpleGrid spacing='30px' margin='30px' columns={[1, 2, 3]}>
                
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Testimonials