import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../ContextApi/ContextApi';

const AddSongs = () => {
    let {UploadOnCloudinary,albumSongs,setAlbumSongs}=useContext(AuthContext)
    let initialiSongData={
        songtitle:"",
        songsingers:"",
        musicdirector:"",
        songthumbnail:"",
        songurl:"",
    };
    let [song,setSong]=useState(initialiSongData);
    let {songtitle,songsingser,musicdirector,songthumbnail,songurl}=song;
    let handleChange=async(e)=>{ 
        let {name,value,type}=e.target;
        if(type == "file"){
          setSong({...song,[name]:await UploadOnCloudinary(e)})
        }
        else{
            setSong({...song,[name]:value})
        }
    }
    let handleSubmit=()=>{
        e.preventDefault();
        setAlbumSongs([...albumSongs,song])
        toast.success("song added to album successfully")
    }
  return (
    <div className='p-1 text-black text-2xl bg-slate-300 font-medium w-[95%] ml-[35px] mt-[130px]'>
          <h1 className='p-7 text-2xl overline'>ADD SONGS</h1>
          <form onSubmit={handleSubmit} >
            <div className='flex p-3 flex-wrap'>
                <div className='w-[33%] flex flex-col gap-3 p-2'>
               <h1 className='font-bold text-2xl'>Song Title</h1>
               <input type="text" 
               name='songtitle' 
               id='songtitle' 
               placeholder='Song Title'
               onChange={handleChange}
               className='border-2 p-3 border-black'
               value={songtitle}/>     
               </div>
               <div className='w-[33%] flex flex-col gap-3 p-2'>
               <h1 className='font-bold text-2xl'>Song Singers</h1>
               <input type="text" 
               name='songsingers' 
               id='songsingers' 
               placeholder='Song Name'
               onChange={handleChange}
               className='border-2 p-3 border-black'
               value={songsingser}
               />     
               </div>
               <div className='w-[33%] flex flex-col gap-3 p-2'>
               <h1 className='font-bold text-2xl'>Music Director </h1>
               <input type="text" 
               name='musicdirector' 
               id='musicdirector' 
               onChange={handleChange}
               placeholder='Music Director Name'
               className='border-2 p-3 border-black'
               value={musicdirector}/>     
               </div>
               <div className='w-[33%] flex flex-col gap-3 p-2'>
               <h1 className='font-bold text-2xl'>Upload Song Thumbnail </h1>
               <input type="file" 
               name='songthumbnail' 
               id='songthumbnail' 
               onChange={handleChange}
               className='border-2 ml-30 rounded h-[45px] py-1.5 px-3 text-white bg-sky-950 border-black'
               value={songthumbnail}/>     
               </div>
               <div className='w-[33%] flex flex-col gap-3 p-2'>
               <h1 className='font-bold text-2xl'>Upload Song URL</h1>
               <input type="file" 
               name='songurl' 
               id='songurl' 
               onChange={handleChange}
               className='border-2 ml-30 rounded h-[45px] py-1.5 px-3 bg-sky-950 text-white border-black'
               value={songurl}/>     
               </div>
               <div className='flex items-center text-2xl'>
                  <button className='bg-sky-950 text-white rounded-e-xl px-3 py-4 ml-12'>ADD SONG</button>
               </div>
            </div>
          </form>
    </div>
  )
}

export default AddSongs