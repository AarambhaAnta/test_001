import React from 'react'
export const runtime = 'edge';

const Hello = ({ params }: { params: any }) => {
    return (
        <div>Hello:  {params.id}</div>
    )
}

export default Hello