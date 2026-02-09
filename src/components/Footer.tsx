
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='h-12 text-center w-full bg-blue-950 text-white font-bold italics fixed bottom-0 grid place-items-center'>This is the footer. copyright {year}</div>
    )
}

export default Footer