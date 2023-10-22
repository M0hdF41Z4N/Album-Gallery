
// Form to add album : As Component
export default function AddAlbumForm({setactiveAddAlbum,addAlbum}) {

    const submitHandler = (e) => {
        // Preventing any default behavior
        e.preventDefault();
        // Adding a new album
        addAlbum(e.target.title.value);
        // Reseting the value of title
        e.target.title.value = "";    
    }

    return (
        <form className="form-inline" onSubmit={submitHandler}>
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" id="title" placeholder="Enter title of album" required />
            </div>
            <button type="button" className="btn btn-secondary m-2" onClick={()=>{setactiveAddAlbum(false)}}>Back</button>
            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
    )
}