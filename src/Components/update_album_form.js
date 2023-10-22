
import { useState } from "react";

export default function UpdateAlbumForm ({setShowAlbumUpdate,album,updateAlbum}) {
    
    // state to handle title
    const [newTitle, setnewTitle] = useState(album.title);

    const submitHandler = (e) => {
        // Preventing any default behavior
        e.preventDefault();
        // Upating the album
        updateAlbum(album.id, newTitle,album.userId);
        // Hiding the form
        setShowAlbumUpdate(false);
    }
    return (
        <form className="form-inline" onSubmit={submitHandler}>
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" value={newTitle} onChange={
                    (e) => setnewTitle(e.target.value)
                } id="title" placeholder="Enter title of album" required />
            </div>
            <button type="button" className="btn btn-secondary m-2" onClick={()=>{setShowAlbumUpdate(false)}}>Back</button>
            <button type="submit" className="btn btn-primary m-2">Update</button>
        </form>
    )
 }