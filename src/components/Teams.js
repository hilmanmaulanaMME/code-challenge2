"use client"
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import TeamsBox from "./TeamsBox"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function Teams() {
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

    const [dataOk, setDataOk] = useState([])

    useEffect(() => {
        getUser()
    },[])

    useEffect(() => {
        console.log(dataOk)
        console.log(typeof dataOk)
    },[dataOk])


    async function getUser() {
        let config = {
            url:'https://randomuser.me/api/?results=8',
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            let getData = await axios(config)
            setDataOk(getData.data.results)
        } catch (error) {
            console.log(error)
        }  
    }

    return (
        <Box bg='black' color='white'>
            <Box>
                <Box textAlign='center'>
                    <Text fontSize='3xl' as='b'>Our Teams</Text>
                </Box>
            </Box>
            <Flex justify='center'>
                <SimpleGrid spacing='30px' margin='30px' columns={[1,2,3,4]}>
                    {
                        dataOk?.map((data, i) => {
                            return (
                                <TeamsBox
                                    key={i}
                                    firstName={data.name.first}
                                    lastName={data.name.last}
                                    email={data.email}
                                    thumbnail={data.picture.large}
                                />
                            )
                        })
                    }
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Teams