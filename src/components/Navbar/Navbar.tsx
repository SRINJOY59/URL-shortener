import logo from '../../assets/Logo.svg'

export const Navbar = () => {
  return (
    <nav className='w-full bg-transparent z-50 flex py-6 bg-[#0B101B] justify-between items-center navbar'>
        <img src={logo} className='ml-10'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-5">
              <button className="bg-dark-gray hover:bg-blue-500 text-white h-[50px] w-[125px] font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded-full">
              Login
              </button>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-5">
              <button className="bg-bright-blue h-[50px] w-[140px]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Register Now
              </button>
            </li>
        </ul>
    </nav>
  )
}
