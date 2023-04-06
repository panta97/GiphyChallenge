import { Routes, Route, Outlet, Link } from "react-router-dom";
import GiphForm from "./components/GiphForm";
import History from "./components/History";
import { useState } from "react";

function App() {
  const [userHistory, setUserHistory] = useState([]);
  return (
    <div className="text-purple-600">
      <nav>
        <ul className="flex gap-4 mx-8">
          <li>Giphy</li>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </nav>
      <hr className="mb-4" />
      <Outlet />
      <Routes>
        <Route path="/">
          <Route
            index
            element={<GiphForm setUserHistory={setUserHistory} />}
          ></Route>
          <Route
            path="history"
            element={<History userHistory={userHistory} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
