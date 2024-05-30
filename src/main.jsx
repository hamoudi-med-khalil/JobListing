import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom';
import NavBar from './component/NavBar.jsx';
import JobsPage from './pages/JobsPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, {jobLoader} from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import EditJobPage from './pages/EditJobPage.jsx';

const addJob = async(newJob) => {
  const res = await fetch('api/jobs', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newJob)
  });
  return;
}

const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method : 'DELETE'

  });
  return;
};

const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage  />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
      <Route path='/editjobs/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
      <Route path='/addjobs' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='*' element={<NotFoundPage />} />
         
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider  router={router}>
    <App />
  </RouterProvider>,
)
