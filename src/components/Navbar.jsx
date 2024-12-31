import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = ({Current = ''}) => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Skillupia</span
              >
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className={`text-white ${Current} bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >Home</Link
                >
                <Link
                  to="/jobs"
                  className={`text-white ${Current} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >Jobs</Link
                >
                <Link
                  to="/addjob"
                  className={`text-white ${Current} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >Add Job</Link
                >
                <Link
                  to="/test"
                  className={`text-white ${Current} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >Test</Link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar