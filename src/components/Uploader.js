import { useState, useRef } from "react"

const Uploader = ({ loadedHandler, removeHandler }) => {
  const [file, setFile] = useState(null)
  const input_ref = useRef()

  const handle_upload = (e) => {
    let file = e.target.files[0]
    setFile(file)
    loadedHandler && loadedHandler(file)
  }

  const handle_remove = () => {
    setFile(null)
    input_ref.current.value = null
    removeHandler && removeHandler()
  }

  return (
    <div className="file has-name is-fullwidth is-small">
      <label className="file-label ">
        <input
          className="file-input"
          type="file"
          name="resume"
          ref={input_ref}
          onChange={(e) => handle_upload(e)}
        />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
          </span>
          <span className="file-label">Upload</span>
        </span>
        <span className="file-name">
          {file ? file.name : "No file uploaded"}
        </span>
      </label>
      <span
        className="button is-inverted is-danger is-small"
        onClick={() => handle_remove()}
      >
        <i className="fas fa-times-circle"></i>
      </span>
    </div>
  )
}

export default Uploader
