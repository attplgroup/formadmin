// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalLoanForm from "./components/personelLoan/PersonalLoanForm";
import BusinessLoanForm from "./components/bussinessLoan/BussinessLoanForm";
import "./App.css";
import "./styles/form.css";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/personal-loan" element={<PersonalLoanForm />} />
          <Route path="/business-loan" element={<BusinessLoanForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
