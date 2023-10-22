import AlbumHeader from "./Components/album_header";
import AlbumList from "./Components/album_list.";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  // State to manage album list
  const [albums,setAlbums] = useState([]);
  // Base url for network calls
  const baseUrl = "https://jsonplaceholder.typicode.com/albums";

  // Function to add album
  const addAlbum = async (newtitle) => {
    // Create temporary user
    const user = new Date().toString().slice(0, 24)
    // Sending Post request to add album
    let response = await axios.post(
      baseUrl,
      {
        title: newtitle,
        userId: user,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    // Getting new album 
    const album = response.data;
    // Adding new album to state (albums)
    setAlbums([album, ...albums]);
  };

  // Function to delete album
  const deleteAlbum = async (albumId) => {
    // Sending Delete request to delete album
    await axios.delete(`${baseUrl}/${albumId}`);
    // Updating the albums state
    setAlbums(albums.filter(album => album.id!== albumId));
  }

  // Function to update album
  const updateAlbum =async (albumId,newtitle,userId) => {
     // Sending request to update album
    const response = await axios.put(`${baseUrl}/${albumId}`,{
      title:newtitle,
      userId:userId,
      id:albumId
    },{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newAlbum = response.data;
    // Updating the album in the albums state
    setAlbums(albums.map(album => album.id === albumId? newAlbum : album));
  }

    useEffect(()=>{
        async function getAlbums() {
            let data = await axios.get(baseUrl);
            setAlbums(data.data);
        }

        getAlbums();
        
    },[]);

  return (
    <div className="App">
      <main>
         <AlbumHeader addAlbum={addAlbum}/>
          <AlbumList albums={albums} deleteAlbum={deleteAlbum} 
          updateAlbum={updateAlbum} />
      </main>
    </div>
  );
}

export default App;
