
const Card = ({ children, bg, title, subtitle }) => {
    return (
        <>
                <div className={`${bg} p-6 rounded-lg shadow-md min-w-[22rem] m-4`}>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p className='mt-2 mb-4'> {subtitle} </p>
                {children}  


            </div>
        </>
    )
}

export default Card
