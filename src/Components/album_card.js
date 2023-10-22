import { useState } from "react";
import UpdateAlbumForm from "./update_album_form";

// Album Card to display
export default function AlbumCard({album,deleteAlbum,updateAlbum}) {
  // Getting title and id
  const { title,id} = album;
  // State to show/hide update album form 
  const [showAlbumUpdate,setShowAlbumUpdate] = useState(false);
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {!showAlbumUpdate ? <>
            <p className="card-text">
            {title}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-primary" onClick={()=>{setShowAlbumUpdate(true)}}>
                Update
              </button>
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>{deleteAlbum(id)}}>
                Delete
              </button>
              </div>
            </div> 
            </>
          :  <UpdateAlbumForm album={album} setShowAlbumUpdate={setShowAlbumUpdate} 
          updateAlbum={updateAlbum}
          />}  
      </div>
    </div>
  );
}
