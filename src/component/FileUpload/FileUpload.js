import React from 'react'
import './FileUpload.css'
function FileUpload(props) {
    return (
        <div>
           
                <input type='file' className='fileupload' multiple />
                <button className='upload'>upload</button>
         
        </div>
    )
}

export default FileUpload
