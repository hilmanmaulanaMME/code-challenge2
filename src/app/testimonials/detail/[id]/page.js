'use client'

import { useParams } from 'next/navigation'

function page() {
    const params = useParams()

    console.log(params)
    return (
        <h1> detail </h1>
    )
}

export default page 