import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

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
    <div>
      <form onSubmit={(event) => formHandler(event)}>
        <label>Title</label>
        <input type="text" ref={title} id="name" />

        <label>Topic</label>
        <input type="text" ref={topic} id="Topic" />

        <label>Description</label>
        <input type="text" ref={description} id="description" />

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
        <button type="submit">Upload File</button>
      </form>
    </div>
  );
};

export default UploadNotes;
