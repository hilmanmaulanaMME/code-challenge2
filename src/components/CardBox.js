import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button} from '@chakra-ui/react'
import Link from 'next/link'

function CardBox({title,excerpt,desc,id,thumbnail,hreflink}) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{desc}</Text>
            </CardBody>
            <CardFooter>
                <Link href={`${hreflink}`}>
                    <Button mr={1}>View Here</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default CardBox