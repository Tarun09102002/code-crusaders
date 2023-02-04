import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import "./UploadNotes.css";

const UploadNotes = () => {
  const [fileUpload, setFileUploader] = useState(null);
  const topic = useRef("");
  const title = useRef("");
  const description = useRef("");

  const formHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileData", fileUpload);
    formData.append("owner", "657583453");
    formData.append("title", title.current.value);
    formData.append("topic", topic.current.value);
    formData.append("description", description.current.value);

    if (fileUpload) {
      axios
        .post("http://localhost:8080/addNotes", formData, {})
        .then((res) => {
          // console.log("Hello");
          alert("Your Document is Uploaded!");
          console.log(res);
        })
        .catch((err) => {
          alert("Something went wrong!");
          console.log(err);
        });
    } else {
      alert("Please Select a File");
    }
  };

  return (
    <div className="bodyContainer">
      <div className="uploadContainer">
        <h1 className="title">Upload Notes</h1>
        <form
          onSubmit={(event) => formHandler(event)}
          className="formClass flex"
        >
          <div className="input-container">
            <label>Title</label>
            <input type="text" ref={title} id="name" placeholder="Title" />
          </div>

          <div className="input-container">
            <label>Topic</label>
            <input type="text" ref={topic} id="Topic" placeholder="Topic" />
          </div>

          <div className="input-container">
            <label>Description</label>
            <input
              type="text"
              ref={description}
              id="description"
              placeholder="Description"
            />
          </div>

          <label>File</label>
          <input
            type="file"
            onChange={(event) => {
              setFileUploader(event.target.files[0]);
            }}
            className="file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 
            hover:file:bg-violet-100"
          ></input>
          <div className="buttonClass">
            <button
              type="submit"
              class="bg-transparent w-48 hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mt-4"
            >
              Upload File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadNotes;
