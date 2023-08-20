import React, { useState } from "react";
import NewTask from "./NewTask";


const NewTaskIcon = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="fixed right-6 bottom-6 group">
        <button
          className="flex items-center justify-center text-white bg-lime-500 rounded-full w-14 h-14 hover:bg-lime-600 focus:ring-4 focus:ring-lime-300 focus:outline-none"
          onClick={() => setModalOpen(true)}
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>

      <NewTask
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default NewTaskIcon;