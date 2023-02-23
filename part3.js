import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  let [data, setData] = useState([]);

  const getDate = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let response = await res.json();
    setData(response);
  };

  console.log(data, "dddddddddddddd");
  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className="App">
      <table>
        <th>
          <tr>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </th>
        <tbody>
          {data
            ? data.map((task) => {
                return (
                  <React.Fragment>
                    <tr>
                      <td>{task.Title}</td>
                      <td>{task.body}</td>
                    </tr>
                  </React.Fragment>
                );
              })
            : "Loading"}
        </tbody>
      </table>
    </div>
  );
}
