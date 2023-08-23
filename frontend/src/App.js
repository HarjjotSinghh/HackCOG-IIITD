import './App.css';
import Navbar from './components/Navbar.jsx';
export const webAppName = "GoodName";
export const themeColors = {
  "text": "#FAFFFF",
  "background": "#010A0C",
  "primary": "#C42015",
  "secondary": "#001013",
  "accent": "#E13C1F"
}

function App() {
  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;
