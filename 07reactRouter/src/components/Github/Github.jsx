import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/nil2022')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="avatar-image" width={200} /> 
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/nil2022')
  return res.json()
}