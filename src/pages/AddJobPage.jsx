

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AddJobPage = ({ addJobSubmit }) => {
  const navigate =useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    }
    addJobSubmit(newJob);
    toast.success('Job added succefully')
    return navigate('/jobs');
  }

     const [title, setTitle] = useState('');
     const [type, setType] = useState('Full-Time');
     const [location, setLoction] = useState('');
     const [description, setDescription] = useState('');
     const [salary, setSalary] = useState('Under $50K');
     const [companyName, setCompanyName] = useState('');
     const [companyDescription, setCompanyDescription] = useState('');
     const [contactEmail, setContactEmail] = useState('');
     const [contactPhone, setContactPhone] = useState('');

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 shadow-md rounded-md border m-4 md:m-0'>
          
          <form onSubmit={submitForm}>
            <h2 className='text-center text-3xl font-bold mb-6 ml-2'>Add Job</h2>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2 ml-2'>
                Job type
              </label>
              <select
                className='border rounded w-full py-2 px-3'
                id="type"
                name="type"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2 ml-2'>
                Job Listing Name
              </label>
              <input
                className='w-full border rounded py-2 px-3 mb-2'
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="eg. Beautiful Apartment In Miami"
              >
              </input>
            </div>

            <div className='mb-4'>
              <label
                htmlFor="description"
                className='block text-gray-700 font-bold mb-2 ml-2'>
                Description
              </label>
              <textarea
                className="border rounded w-full py-2  px-3"
                id="description"
                name="description"
                value={description}
                rows='4'
                placeholder='Add any job duties, expectations, requirements, etc'
                onChange={(e) => setDescription(e.target.value)}
              >
              </textarea>
            </div>

            <div className='mb-2'>
              <label className='block text-gray-700 font-bold mb-2 ml-2'>
                Salary
              </label>
              <select
                className='w-full border rounded py-2 px-3'
                id="salary"
                name="salary"
                value={salary}
                required
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2 ml-2'>
                Location
              </label>
              <input
                className='w-full border rounded py-2 px-3 mb-2'
                id="location"
                name="location"
                type="text"
                value={location}
                onChange={(e) => setLoction(e.target.value)}
                placeholder="Company Location"
                required
              >
              </input>
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2 ml-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
             <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2 ml-2'
              >
                Company Description
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2 ml-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2 ml-2'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <button
            type="submit"
             className=' bg-indigo-500 w-full border rounded-xl p-2 mt-3 font-bold'>
              Add Job
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default AddJobPage