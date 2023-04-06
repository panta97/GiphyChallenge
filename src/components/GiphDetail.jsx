import React from "react";
import ReactDOM from "react-dom";

export default function GiphDetail({
  giphItem,
  replaceGiph,
  showModal,
  setShowModal,
}) {
  // debugger;
  return ReactDOM.createPortal(
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col bg-white p-10 border border-purple-300 rounded-md">
          <div>
            <div className="flex justify-end">
              <p
                className="cursor-pointer text-3xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </p>
            </div>
            <img
              className="border border-purple-500  object-fill rounded-md cursor-pointer w-[500px] h-[200px]"
              src={giphItem.giph.images.original_still.url}
              alt={giphItem.giph.title}
            />
          </div>
          <div className="flex justify-between text-3xl">
            <button
              className="cursor-pointer"
              onClick={() => replaceGiph(giphItem, "LEFT")}
            >
              {"<"}
            </button>
            <button
              className="cursor-pointer"
              onClick={() => replaceGiph(giphItem, "RIGHT")}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
