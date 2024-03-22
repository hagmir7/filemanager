"use client"
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import FilesTable from './FilesTable';

export default function Upload() {
  const [progress, setProgress] = useState(false);
  const [data, setData ] = useState([]);
  const formFile = useRef();
  const [files, setFiles] = useState([])
  const [token, setToken] = useState();
  useEffect(()=>{
    saveToken()
  },[])


  const saveToken = async () =>{
    let getTokne = localStorage.getItem('token');
    
    
    if (!getTokne) {
      const response = await fetch('https://api.senderfile.com/api/storage/token',
        {
          method: 'POST',
          headers: {
            'SENDERFILE-API-KEY': '3ecd0ed6-e093-4b76-adc4-e574b199c900',
          },
        }
      )

      console.log(response.status)
      const responseData = await response.json()
      console.log(responseData.token.token);
      localStorage.setItem('token', responseData.token.token)
      setToken(responseData.token.token)
    }else{
      setToken(getTokne)
    }
  }

  const upload = async (e) => {
    e.preventDefault();
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelectorAll('.progress');
    progressBar.style.width = '0%';
    progressContainer.forEach((element) => {
        element.style.display = 'block';
    })
    

    const formData = new FormData(formFile.current);
    try {
      const response = await axios.post(
        `https://api.senderfile.com/api/upload/?token=${token}`,
        formData,
        {
          headers: {
            'SENDERFILE-API-KEY': '3ecd0ed6-e093-4b76-adc4-e574b199c900',
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )
            progressBar.style.width = `${progress}%`
            progressBar.setAttribute('aria-valuenow', progress)
            setProgress(progress)
          },
        }
      )

      // setData(response.data.file);
      
      formFile.current.reset();
    } catch (error) {
      console.log(error);
      console.log('Error');
    }
    progressContainer.forEach((element) => {
        element.style.display = 'none';
    })
    
  };

  return (
    <div className="w-full my-3">
      <form method="POST" ref={formFile} encType="multipart/form-data">
        {/* <div className="progress" >
          <div className="progress-bar" role="progressbar" style={{ width: "0% " }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
         */}
        <div className='progress' style={{ display: "none" }}>
            <div className="flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
            </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 progress mb-2" style={{ display: "none" }}>
            <div className="bg-blue-600 h-2.5 rounded-full progress-bar"></div>
        </div>

        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input name='file' onChange={upload} id="dropzone-file" type="file" className="hidden" />
        </label>
      </form>
      {/* <FilesTable data={data} /> */}
    </div>
  );
}
