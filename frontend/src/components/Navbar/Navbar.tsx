import logo from '../../assets/Logo.svg'

const Navbar = () => {
  return (
    <nav className='w-full bg-transparent z-50 flex py-6 bg-[#0B101B] justify-between items-center navbar'>
        <p className='ml-10 text-[40px] text-transparent bg-gradient-to-r from-bright-pink to-bright-blue bg-clip-text font-bold justify-center z-50 center'>Shorty-URL</p>
        <ul className='list-none flex justify-end items-center flex-1'>
            <li className="font-poppins font-bold cursor-pointer text-[16px] text-white mr-5">
              <button className="bg-dark-gray font-bold hover:bg-bright-blue text-lite-gray h-[50px] w-[125px] hover:text-white py-2 px-8 border-3 border-elite-black hover:border-transparent rounded-full">
              Log In
              </button>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-5 sm:flex hidden">
              <button className="bg-bright-blue shadow-bright-blue h-[50px] w-[150px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Register Now
              </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;
