// export const runtime = 'edge';
export const runtime='experimental-edge'

const Hello = ({ params }: { params: any }) => {
    return (
        <div className="text-center text-red-400 text-4xl">Hello:  {params.id}</div>
    )
}

export default Hello