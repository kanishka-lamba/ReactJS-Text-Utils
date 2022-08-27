import React, { useState } from "react";

export default function TextForm(props) {
  const handleUCclick = () => {
    if (text === "") {
      alert("Please Enter Text");
      props.showAlert("No Text is Present", "info");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted to UPPERCASE", "info");
    }
  };

  const handleLCclick = () => {
    if (text === "") {
      alert("Please Enter Text");
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "info");
  };

  const handleClearclick = () => {
    setText("");
    props.showAlert("Text is cleared", "danger");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleTCclick = () => {
    if (text === "") {
      alert("Please Enter Text");
    } else {
      let newText = text.split(" ");
      let result = "";
      newText.forEach((element) => {
        result += element.charAt(0).toUpperCase() + element.slice(1) + " ";
      });
      setText(result);
      props.showAlert("Text converted to TitileCase", "info");
    }
  };

  const handleColorclick = () => {
    let color = prompt("Enter the color you want", "Black");
    document.getElementById("mybox").style.color = color;
    if (color === "" || color === null) {
      props.showAlert(`Text color is black`, "info");
    } else {
      props.showAlert(`Text changed to ${color} color`, "info");
    }
  };
  const handleListclick = () => {
    let newText = text.split(/\s+/).filter((ele) => {
      return ele.length !== 0;
    });
    let index = 1;
    let result = "";
    newText.forEach((element) => {
      result += index + ". " + element + "\n";
      index += 1;
    });
    setText(result);
    props.showAlert("Text converted to List", "info");
  };

  const handleCopyclick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        style={{
          color: props.mode === "light" ? "#272c33" : "white",
        }}
      >
        <div className="container my-4">
          <h2>{props.heading}</h2>
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            rows="8"
            placeholder="Enter Text Here"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#272c33" : "white",
              color: props.mode === "light" ? "#272c33" : "white",
            }}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 my-1`}
            onClick={handleUCclick}
          >
            Convert to UPPERCASE
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 my-1`}
            onClick={handleLCclick}
          >
            Convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 my-1`}
            onClick={handleTCclick}
          >
            Convert to TitleCase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 my-1`}
            onClick={handleColorclick}
          >
            Change Color
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 my-1`}
            onClick={handleListclick}
          >
            Make a List
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 mt-3`}
            onClick={handleCopyclick}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            } mx-4 mt-3`}
            onClick={handleClearclick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container mt-2"
        style={{
          color: props.mode === "light" ? "#272c33" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length !== 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
