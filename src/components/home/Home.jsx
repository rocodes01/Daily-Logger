import firebase from "firebase";
import { useState } from "react";
const Home = () => {
  const [logTitle, setLogTitle] = useState("");
  const [logDesc, setLogogDesc] = useState("");
  const [tags, setTags] = useState("");
  const submit = () => {
    const db = firebase.firestore();
    const payload = {
      name: "Shadab",
      email: "sidshaab97@gmail.com",
    };
    // console.log(db.collection("users"));
    db.collection("users")
      .add(payload)
      .then((res) => {
        alert("added");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, ":", errorMessage);
      });
  };
  const ShowTags = () => {
    return tags ? (
      tags?.split(",").map((e) => {
        return e.length > 0 ? (
          <button className="tag-pills mr-1">{e}</button>
        ) : (
          ""
        );
      })
    ) : (
      <></>
    );
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-6 mt-4">
          <div className="card">
            <div className="card-header text-center">
              <h3>Enter Log Entry</h3>
            </div>
            <div className="card-body">
              <div className="form">
                <label htmlFor="title">Enter Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Log Title"
                  name="title"
                  value={logTitle}
                  onChange={(event) => {
                    const { value } = event.target;
                    setLogTitle(value);
                  }}
                />
                <label htmlFor="desc">Enter Log Description</label>
                <textarea
                  className="form-control"
                  name="desc"
                  id=""
                  rows="5"
                  style={{ resize: "none" }}
                  value={logDesc}
                  onChange={(event) => {
                    const { value } = event.target;
                    setLogogDesc(value);
                  }}
                ></textarea>
                <label htmlFor="tags">Enter Tags (Seperated by ,) If Any</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Tags"
                  name="tags"
                  value={tags}
                  onChange={(event) => {
                    const { value } = event.target;
                    setTags(value);
                  }}
                />
                Tags: <ShowTags />
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-warning mr-2 mt-2 btn-lg"
                    style={{ border: "none", borderRadius: "22px" }}
                    onClick={() => {
                      submit();
                      setLogTitle("");
                      setLogogDesc("");
                      setTags("");
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className="btn btn-success mt-2 btn-lg"
                    style={{ border: "none", borderRadius: "22px" }}
                    disabled={!logTitle || !logDesc}
                  >
                    Create Log
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 mt-4">
          <div className="card">
            <div className="card-body ">
              <h4 className="text-center">{logTitle}</h4>
              <p>{logDesc}</p>
               {logDesc && logTitle && (
              <div className="d-flex justify-content-end">
                <button className="btn btn-warning mr-1 rounded-left ">
                  Cancel
                </button>
                <button className="btn btn-success rounded-right" onClick={s}>
                  Submit Log
                </button>
              </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
