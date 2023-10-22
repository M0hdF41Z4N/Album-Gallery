import AddAlbumForm from "./add_album_form";
import { useState } from "react";


// Main Page Header
export default function AlbumHeader({addAlbum}) {

  // State to show/hide add album form
  const [activeAddAlbum, setactiveAddAlbum] = useState(false);

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Album Gallery</h1>
          <p className="lead text-body-secondary">
            Music washes away from the soul the dust of everyday life.
          </p>
          {!activeAddAlbum ?
          <p>
             <button type="button" className="btn btn-primary my-2" onClick={() => setactiveAddAlbum(true)}>Add Album</button>
          </p>
          : <AddAlbumForm setactiveAddAlbum={setactiveAddAlbum} addAlbum={addAlbum} />
        }
        </div>
      </div>
    </section>
  );
}
