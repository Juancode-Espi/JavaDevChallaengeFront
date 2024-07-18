import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
import "./App.css";
import { consumeService } from "./service/Http";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSearch = async (query) => {
    let url = "http://localhost:8080/challenge/employee";
    if (query.trim() !== "") {
      url += `?id=${query}`;
    }
    await consumeService(null, url, "GET")
      .then((response) => {
        if (response.status === 200) {
          setError(false);
          console.log(response);
          setData(response.data);
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-danger">Búsqueda no válida</p>}
      <DataTable data={data} />
    </div>
  );
}

export default App;
