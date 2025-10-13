import { Routes, Route } from "react-router-dom";
import HOME from "./pages/home";
import LOGIN from "./pages/login";
import SIGNUP from "./pages/signup";
import BLOGPAGE from "./pages/blogPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="/signup" element={<SIGNUP />} />
        <Route path="/blogPage" element={<BLOGPAGE />} />
      </Routes>
    </div>
  );
};

export default App;
