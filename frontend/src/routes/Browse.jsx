import ClubBrowserList from "../components/clubBrowserList.jsx";
import ClubBrowserOptions from "../components/clubBrowserOptions.jsx";
import SearchBar from "../components/searchBar.jsx";
import { useEffect, useState } from "react";
import axios from "../api";

export default function Browse() {
  const [clubs, setClubs] = useState([]);
  const [tags, setTags] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = {};
    if (tags) params.tags = tags;
    if (search) params.search = search;

    const fetchClubs = async () => {
      const res = await axios.get(`/api/clubs`, { params });
      setClubs(res.data);
    };

    fetchClubs();
  }, [tags, search]);

  return (
    <>
      <div className="bg-secondary flex">
        <ClubBrowserOptions tagSetter={setTags} />
        <div className="flex-1">
          <SearchBar searchSetter={setSearch} />
          <ClubBrowserList clubs={clubs} />
        </div>
      </div>
    </>
  );
}
