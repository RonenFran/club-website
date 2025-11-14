import Navbar from './components/navbar.jsx';
import ClubDropdown from './components/clubDropdown.jsx';
import ClubOptionSelector from './components/clubOptionSelector.jsx';

function Browse() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <ClubDropdown />
        <ClubOptionSelector />
      </div>
      
    </>
  );
};

export default Browse
