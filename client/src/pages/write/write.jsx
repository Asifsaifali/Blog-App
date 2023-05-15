import "./write.css";

import Picture from "../../images/nat.jpg";

export default function write() {
  return (
    <div className="write">
        <img src={Picture}     alt="" 
        className="writePicture"/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story..."
            type="text"
            className="writeInput writeText"
          />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
