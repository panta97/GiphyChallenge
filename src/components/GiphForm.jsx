import React, { useEffect, useState } from "react";
import { searchGiphy } from "../endpoints";
import ThumbnailList from "./ThumbnailList";
import GiphDetail from "./GiphDetail";

export default function GiphForm({ setUserHistory }) {
  const [query, setQuery] = useState("");
  const [giphList, setGiphList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGiph, setSelectedGiph] = useState({
    currIdx: -1,
    giph: null,
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const giphs = await searchGiphy(query);
    setUserHistory((prev) => {
      const newList = prev.splice(0);
      newList.push(query);
      return newList;
    });
    setGiphList(giphs.data);
  };

  const handleShowModal = async (giphItem) => {
    setShowModal(true);
    setSelectedGiph(giphItem);
  };

  const handleReplaceGiph = (currGiph, dir) => {
    let newIdx = currGiph.currIdx;
    if (dir === "LEFT") {
      newIdx--;
    } else if (dir === "RIGHT") {
      newIdx++;
    }

    if (newIdx < 0) newIdx = giphList.length - 1;
    if (newIdx > giphList.length - 1) newIdx = 0;

    setSelectedGiph({ currIdx: newIdx, giph: giphList[newIdx] });
  };

  useEffect(() => {
    // handleSearch();
  }, []);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <form onSubmit={handleSearch}>
          <div className="flex gap-2">
            <label htmlFor="main-search">Search:</label>
            <input
              className="border border-black"
              id="main-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="border border-purple-300">Search</button>
          </div>
        </form>
      </div>
      <ThumbnailList giphList={giphList} handleShowModal={handleShowModal} />
      {selectedGiph.giph && showModal && (
        <GiphDetail
          giphItem={selectedGiph}
          replaceGiph={handleReplaceGiph}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}
