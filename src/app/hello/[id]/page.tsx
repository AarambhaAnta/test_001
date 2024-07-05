import React from 'react'

const Hello = ({ params }: { params: any }) => {
    return (
        <div>Hello:  {params.id}</div>
    )
}

export default Hello