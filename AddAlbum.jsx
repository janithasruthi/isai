import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../ContextApi/ContextApi";


const AddAlbum = () => {
  let { UploadOnCloudinary, albumSongs, setAlbumSongs } = useContext(AuthContext);

  let initialAlbumData = {
    title: "",
    language: "",
    albumType: "",
    description: "",
    dateCreated: "",
    releaseYear: "",
    numberOfSongs: "",
    starCast: "",
    director: "",
    albumThumbnail: "",
  };

  let [album, setAlbum] = useState(initialAlbumData);
  let { title, language, albumType, description, dateCreated, releaseYear, numberOfSongs, starCast, director, albumThumbnail } = album;

  let handleChange = async (e) => {
    e.preventDefault();
    let { name, value, type } = e.target;
    if (type === "file") {
      setAlbum({ ...album, [name]: await UploadOnCloudinary(e) });
    } else {
      setAlbum({ ...album, [name]: value });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setAlbumSongs([...albumSongs, album]);
    toast.success("Album added successfully!");
  };

  return (
    <div className="text-black font-medium rounded-md bg-slate-300 w-[90%] mt-[50px] ml-[80px]">
      <h1 className="flex font-extrabold p-7 text-3xl overline justify-center items-center">
        ADD ALBUM
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex p-3 flex-wrap">
          
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Title:</h1>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Album Title"
              className="h-[35px] p-3 border-2 border-black"
              value={title}
              onChange={handleChange}
            />
          </div>

         
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Language:</h1>
            <input
              type="text"
              name="language"
              id="language"
              placeholder="Language"
              className="h-[35px] p-3 border-2 border-black"
              value={language}
              onChange={handleChange}
            />
          </div>

          {/* Album Type */}
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Album Type:</h1>
            <input
              type="text"
              name="albumType"
              id="albumType"
              placeholder="Album Type"
              className="h-[35px] p-3 border-2 border-black"
              value={albumType}
              onChange={handleChange}
            />
          </div>

          
          <div className="w-[90%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Description:</h1>
            <textarea
              name="description"
              id="description"
              placeholder="Album Description"
              className="h-[70px] p-3 border-2 border-black"
              value={description}
              onChange={handleChange}
            />
          </div>

          
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Date Created:</h1>
            <input
              type="date"
              name="dateCreated"
              id="dateCreated"
              className="h-[35px] p-3 border-2 border-black"
              value={dateCreated}
              onChange={handleChange}
            />
          </div>

          
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Release Year:</h1>
            <input
              type="number"name="releaseYear"id="releaseYear"placeholder="Release Year"className="h-[35px] p-3 border-2 border-black"value={releaseYear}onChange={handleChange}/>
          </div>
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Number of Songs:</h1>
            <input type="number"name="numberOfSongs"id="numberOfSongs"placeholder="Number of Songs"className="h-[35px] p-3 border-2 border-black" value={numberOfSongs} onChange={handleChange}/>
          </div>
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Star Cast:</h1>
            <input type="text"name="starCast"id="starCast"placeholder="Star Cast"className="h-[35px] p-3 border-2 border-black"value={starCast}onChange={handleChange}/>
          </div>
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Director:</h1>
            <input type="text"name="director"id="director"placeholder="Director"className="h-[35px] p-3 border-2 border-black"value={director}onChange={handleChange}
            />
          </div>
          <div className="w-[30%] flex-col flex gap-2 p-2">
            <h1 className="font-bold text-2xl">Album Thumbnail:</h1>
            <input type="file"name="albumThumbnail"id="albumThumbnail" className="h-[50px] p-3 border-2 border-black file:bg-slate-700 file:px-4 file:text-white file:rounded-md"
              onChange={handleChange}
            />
          </div>
          <div>
                <button className='bg-sky-950 text-white py-4 px-3 ml-12 mt-10 rounded-md  hover:bg-slate-600'>
                ADD ALBUM
                </button>
             </div>
          
        </div>
      </form>
    </div>
  );
};

export default AddAlbum;