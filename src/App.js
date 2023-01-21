import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Bio from './components/BioPage';
import Gallery from './components/Grid';

function App() {
  return (
    <>
      <Nav />
      <div classsName="container">
      <Bio/>
      <Gallery/>
      </div>
    </>
  );
}

export default App;
