import { updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../ContextApi/ContextApi'
import { useNavigate } from 'react-router-dom'

const Updateprofilephoto = () => {
  let navigate=useNavigate()
  let {Authuser}=useContext(AuthContext)
  let[photofile,setPhotofile]=useState()
  let[preview,setPreview]=useState()
  let handleChange=(e)=>{
      console.log(e);
      let file=e.target.files[0]
      console.log (file);
      setPhotofile(file);
      setPreview(URL.createObjectURL(file))

  }
  console.log(photofile);
  console.log(preview)
 let handleSubmit =async(e)=>{
  e.preventDefault()
  try{
    if(!photofile)
      {
      toast.error("Please select a file")
      return;
    }
    const data= new FormData()
    data.append("file",photofile)
    data.append("upload_present","Isai_2025")    
    data.append("cloud_name","dycp2ypu3")
    const response= await fetch(
      "https://api.cloudinary.com/v1_1/dycp2ypu3/image/upload",
      {
        method:"POST",
        body:data
      }
    )
  const result=await response.json()
  console.log(result);
  const imageURL=result.url
  await updateProfile(Authuser,{photoURL:imageURL})
  toast.success("profilephoto has been successfully updated")
  navigate("/profile")
  }catch (error){
        toast.error(error.message)
        console.log(error);
  }
 }
  return (
   <main className='flex flex-col gap-4 justify-center items-center h-[80vh]'>
    <h1 className='font-bold p-3 text-2xl'>UPDATE PROFILE PHOTO</h1>
    <section className='h-[50vh] w-[33vw] bg-slate-500 flex rounded-2xl  items-center p-4'>
        <article className='flex flex-col'>
          {preview &&(
            <div className='h-[130px] w-[390px] flex justify-center'>
              <img src={preview} alt='' className='h-[70px] w-[70px] rounded-[50%]'/>
            </div>
          )}
            <form className='flex flex-col gap-8 justify-center'onSubmit={handleSubmit}>
             <input type='file' className='border-2 p-3 border-gray-50 file:mr-5 file:bg-white file:p-1 file:rounded'onChange={handleChange}/>
                <div className='flex gap-10'>
                  <button className='px-15 py-2 bg-white text-black font-semibold rounded'>Upload</button>
                   <h1 className='px-15 py-2 bg-white text-black font-semibold rounded'>Cancel</h1>
                </div>
            </form>
        </article>
    </section>
    </main>

  )
}

export default Updateprofilephoto;