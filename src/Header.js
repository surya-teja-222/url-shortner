import './Header.css';
import logo from './assets/images/logo.svg';



function Header(){

    function handleClick() { 
        document.getElementById('hamid').classList.toggle('ham');
        document.getElementById('dropdown').classList.toggle('hidden');
    }

    return (
        <div className="header font-Poppins align-middle">
            
            <div className='flex w-full justify-between  mt-[40px] '>
                <div className='flex text-t-grey'>
                    <img src={logo} className='w-[120px] h-[34px] mdm:ml-[24px] md:ml-[165px]' alt='AppLogo'/>

                    <div className='ch-1 mdm:hidden ml-[45px] font-medium text-[18px]'  >
                        <a className='mr-[30px] hover:text-c-very-dark-blue hover:cursor-pointer' href='#' >Features</a>
                        <a className='mr-[30px] hover:text-c-very-dark-blue hover:cursor-pointer' href='#' >Pricing</a>
                        <a className='mr-[0px]  hover:text-c-very-dark-blue hover:cursor-pointer' href='#' >Resources</a>
                    </div>
                </div>

                <div className='ch-2  text-t-grey mdm:hidden md:mr-[165px] font-medium text-[18px]' >
                        <a href='#' className='hover:text-c-very-dark-blue hover:cursor-pointer'>Login</a>
                        <a className='ml-[38px] green-button ' href='#' >Sign Up</a>
                </div>

                <div className="w-[24px] h-[24px] mr-[24px] md:hidden " id='hamid' onClick={handleClick} >
                    <div className="ham-line ham-animation-1 h-[3px] bg-t-grey my-[3px]" ></div>
                    <div className="ham-line ham-animation-2 h-[3px] bg-t-grey my-[3px]" ></div>
                    <div className="ham-line ham-animation-3 h-[3px] bg-t-grey my-[3px]" ></div>
                </div>
            </div>

            <div className='absolute dropdown text-c-white font-bold hidden ease-in duration-300' id='dropdown'>
                <div className='flex flex-col'>
                    <a href='#' className='self-center mt-[38px]' >Features</a>
                    <a href='#' className='self-center mt-[38px]'>Pricing</a>
                    <a href='#' className='self-center my-[38px]'>Resources</a>
                </div>
                <center><hr className='w-[280px] self-center '></hr></center>
                <div className='flex flex-col'>
                <a href='#' className='self-center mt-[38px] '>Login</a>
                <a href='#' className='green-button self-center mt-[38px]'>Sign Up</a>
                </div>

            </div>

        </div>
    );
}



export default Header;

// LOGO , HAM {Features,  Pricing , Resources , <hr> , Login , Sign Up}