import { Link } from 'react-router-dom';
import {FaExclamationTriangle } from 'react-icons/fa'


const NotFoundPage = () => {
    return (
        <section className=" text-center flex flex-col justify-center items-center h-96 text-yellow-400 ">

            <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
            <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
            <p className='text-xl mb-5'>This page does not exist</p>

            <Link 
            to='/'
            className="bg-yellow-300 rounded-lg px-6 py-2 text-xl text-black"
            >
            Go Back
            </Link>


        </section>

    )
}

export default NotFoundPage