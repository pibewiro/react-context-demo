import "./App.css";
import Navbar from "./Components/Navbar";
import Cars from "./Components/Cars";
import { CarProvider } from "./Contexts/CarsContext";
import { AuthProvider } from "./Contexts/AuthContext";
import AddCar from "./Components/AddCar";

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <div className="App">
          <Navbar />
          <Cars />
          <AddCar />
        </div>
      </CarProvider>
    </AuthProvider>
  );
}

export default App;
