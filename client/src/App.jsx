import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Dashboard from "./pages/Dashboard";

import Media from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="pages" element={<Pages />} /> */}
          <Route path="media" element={<Media />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
