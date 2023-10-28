import { useEffect, useState } from "react";
import AlbumCard from "./album_card";
import Skeleton from "react-loading-skeleton";  
import "react-loading-skeleton/dist/skeleton.css";


// Album List Component
export default function AlbumList({albums,deleteAlbum,updateAlbum}) {


  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {albums.length > 0 ? albums.map((album) => {
            return (
              <div className="col" key={album.id}>
                <AlbumCard album={album} deleteAlbum={deleteAlbum} updateAlbum={updateAlbum} />
              </div>
            );
          }) :
          <Skeleton variant="rectangular" width={210} height={600} />
        }
        </div>
      </div>
    </div>
  );
}


