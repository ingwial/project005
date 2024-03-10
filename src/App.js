import "./App.css";
import { useState } from "react";

function App() {
  function deleteLastRow() {
    if (articles.length > 0) {
      const temp = Array.from(articles);
      temp.pop();
      setArticles(temp);
    }
  }

  const [articles, setArticles] = useState([
    { code: 1, description: "patatas", price: 12.42 },
    { code: 2, description: "oranges", price: 21 },
    { code: 3, description: "apples", price: 18.2 },
  ]);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art) => {
            return (
              <tr key={art.code}>
                <td>{art.code}</td>
                <td>{art.description}</td>
                <td>{art.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={deleteLastRow}> Delete Last Row</button>
    </div>
  );
}

export default App;
