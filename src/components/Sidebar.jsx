const Sidebar = ({ activeMenu, setActiveMenu }) => {
  // const menu = [
  //   {name: "Dashboard", link: '/'},
  //   {name: "Kanban", link: '/'},
  //   {name: "Inbox", link: '/'},
  //   {name: "Users", link: '/'},
  //   {name: "Products", link: '/'},
  //   {name: "Te", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  //   {name: "Dashboard", link: '/'},
  // ]

  return (
    <div>
      <aside
        className={`fixed top-0 left-0 z-40 ${
          activeMenu ? "w-64" : "w-14"
        } h-screen transition-transform -translate-x-full sm:translate-x-0 duration-500`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <div className="flex flex-row justify-between items-center mb-5">
            <a
              href="/"
              className={`flex items-center pl-2.5 ${!activeMenu && "hidden"}`}
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Jiration
              </span>
            </a>
            <button
              type="button"
              className="ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li
              className={`border-b border-gray-200 text-md text-gray-600 ${
                !activeMenu && "hidden"
              }`}
            >
              Planning
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span
                  //  style={{ transitionDelay: `${i + 3}00ms`}}
                  className={`ml-3 ${
                    !activeMenu && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Dashboard
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                  Pro
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  3
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/tasklist"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Tasks</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  Tasks
                </span>
              </a>
            </li>
            <li>
              <a
                href="/calender"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ml-3">Calender</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  Calender
                </span>
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  Sign In
                </span>
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  Sign Up
                </span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Timeline</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ">
                  Pro
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-lime-800 bg-lime-100 rounded-full ">
                  3
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li
              className={`my-2 border-b border-gray-200 text-md text-gray-600 ${
                !activeMenu && "hidden"
              }`}
            >
              Development
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Team Members
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Code</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Tasks</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Personal Home
                </span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Notes</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
            <li>
              <a
                href="/contact"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                </svg>
                <span className="ml-3">Contact With Us</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  Contact With Us
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                </svg>
                <span className="ml-3">Components</span>
                <span
                  className={`${
                    activeMenu && "hidden"
                  } absolute left-48 bg-white/50 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 overflow-hidden group-hover:w-fit`}
                >
                  dashboard
                </span>
              </a>
            </li>
          </ul>
          <div
            className={`p-4 mt-6 rounded-lg border border-lime-200 ${
              !activeMenu && "hidden"
            }`}
          >
            <div className="flex items-center mb-3">
              <span className="bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-xl">
                Free
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 inline-flex justify-center items-center w-6 h-6 text-lime-900 rounded-lg focus:ring-2 focus:ring-slate-400 p-1 hover:bg-lime-200"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm text-gray-800">
              You're on the Free plan
            </p>
            <div className="flex items-center justify-center">
              <a href="/upgrade">
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-700 focus:outline-none border-2 border-slate-700 hover:bg-gradient-to-r from-blue-900 to-slate-900 rounded-full hover:bg-lime-100 hover:text-gray-300 focus:z-10 focus:ring-4 focus:ring-lime-200 uppercase"
                >
                  upgrade
                </button>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
