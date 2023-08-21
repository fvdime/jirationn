import React, { useState } from "react";
import EditTask from "../components/EditTask";
import NewTaskIcon from "../components/NewTaskIcon";

const TaskList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="mb-4">
          <div className="relative flex items-center justify-center h-56 w-full bg-gray-500">
            <img src="/99.-Roman.jpg" alt="" className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center h-40 mb-4 max-w-screen-xl mx-auto px-2">
          <p className="text-3xl font-medium text-gray-800">Task List</p>
          <p className="text-lg text-gray-500 pt-3">
            - Use this to track your personal tasks!
            <br />- Click{" "}
            <span className="bg-lime-300 rounded-full px-2 py-1 text-white">
              +
            </span>{" "}
            to create new task.
          </p>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-xl mx-auto px-2">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100/60">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">
                  Task Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((item) => ( */}
              <tr
                className="bg-white border-b  hover:bg-gray-50 "
                // key={item.id}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      // onChange={(e) => complete_task(e, task.id)}
                    />
                    <label
                      htmlhtmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  oma oma god
                </th>
                <td className="px-6 py-4">omg omg omg</td>

                <td className="flex items-center px-6 py-4 space-x-3">
                  <button
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => setModalOpen(true)}
                  >
                    Edit
                  </button>

                  <button
                    className="font-medium text-red-600 hover:underline"
                    // onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </button>
                </td>
                <NewTaskIcon />
                <EditTask
                  open={modalOpen}
                  onClose={() => setModalOpen(false)}
                  // fetchData={fetchData}
                />
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
