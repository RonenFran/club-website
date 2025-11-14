import Navbar from './components/navbar.jsx';
import ClubDropdown from './components/clubDropdown.jsx';
import ClubOptionSelector from './components/clubOptionSelector.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <ClubDropdown />
        <ClubOptionSelector />
      </div>
      
    </>
  );
}

export default App
