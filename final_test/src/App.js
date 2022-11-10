import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import Members from "./pages/Members";
import AddMemberForm from "./pages/AddMemberForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Members />} exect />
      <Route path="/add" element={<AddMemberForm />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default App;
