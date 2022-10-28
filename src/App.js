import "./App.css";
import Footer from "./components/footer/Footer";
import Links from "./components/links/Links";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
