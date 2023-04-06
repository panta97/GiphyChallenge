import React from "react";

export default function ThumbnailList({ giphList, handleShowModal }) {
  return (
    <div className="grid grid-cols-4 gap-2 mx-10">
      {giphList.map((g, idx) => (
        <div key={idx}>
          <img
            className="border border-purple-500 w-[300px] h-[150px] object-fill rounded-md cursor-pointer"
            src={g.images.original_still.url}
            alt={g.title}
            onClick={() => handleShowModal({ currIdx: idx, giph: g })}
          />
        </div>
      ))}
    </div>
  );
}
