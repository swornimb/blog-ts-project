import { FaSearch, FaUserCircle } from "react-icons/fa"

function Navigation() {
  return (
    <nav className="border-2 text-black border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
            <FaSearch className="mr-[10px]"/>
            <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full"/>
        </div>
        <section className="flex items-center mr-[5rem]">
            <FaUserCircle className="text-3xl"/>
        </section>
    </nav>
  )
}

export default Navigation