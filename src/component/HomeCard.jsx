import { Link } from "react-router-dom"
import Card from "./Card"


const HomeCard = () => {
    return (
        <>
            <div className='container-xl md:container mx-auto'>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-4 p-4 '>
                    <Card bg='bg-gray-100' title='For Developers' subtitle='Browse our React jobs and start your career today'>
                       <Link
                            to='/jobs'
                            className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
                        >
                            Browse Jobs
                        </Link>
                    </Card>
                        

                    <Card bg='bg-indigo-100' title='For Developers' subtitle='Browse our React jobs and start your career today'>
                        <Link
                            to='/add-job'
                            className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
                        >
                            Add Job
                        </Link>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default HomeCard