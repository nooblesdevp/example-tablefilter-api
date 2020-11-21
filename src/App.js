import { useEffect, useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import "./App.css";
import DataTable from "./pages/DataTable";

require("es6-promise");
require("isomorphic-fetch");

const API = "https://devmentor.live/api/examples/contacts?api_key=289e8f6f";

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchForm, setSearchForm] = useState(["firstName", "lastName"]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      searchForm.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }
  const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="app ">
      <Form>
        <FormControl
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="text"
          placeholder="Search data"
        />
        {columns &&
          columns.map((column) => (
            <FormLabel>
              <FormControl
                type="checkbox"
                checked={searchForm.includes(column)}
                onChange={(e) => {
                  const checked = searchForm.inlcudes(column);
                  setSearchForm((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
            </FormLabel>
          ))}
      </Form>
      <DataTable data={search(data)} />
    </div>
  );
}

export default App;
