import LoginScreen from "./Pages/LoginScreen/LoginScreen";
import HomeResident from "./Pages/Resident/Home/HomeResident";
import HomeAdmin from "./Pages/Admin/Home/HomeAdmin";
import Manage from "./Pages/Admin/Appart Management/Manage";
import Billing from "./Pages/Admin/Billing/Billing";
function App() {
  return (
    <div>
      {/* <Manage /> */}
      <Billing />
    </div>
  );
}

export default App;
