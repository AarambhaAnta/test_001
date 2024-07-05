// export const runtime = 'edge';
export const runtime='experimental-edge'

const Hello = ({ params }: { params: any }) => {
    return (
        <div>Hello:  {params.id}</div>
    )
}

export default Hello