import Heroimg from './assets/images/illustration-working.svg';

function bodytop()
{
    return (
        <div id="bodytop">
            <div className="hero_image overflow-clip mt-[30px]">
                <img src={Heroimg} alt="hero image" className='hero__img translate-x-20' />

            </div>
            <div className="hero_text font-Poppins mt-[45px]">
                <h1 className='font-bold text-[30px] self-center text-center mx-[40px]'>More than just shorter links</h1>
                <p className='font-normal mx-[30px] text-t-grey text-center text-[18px] mt-[30px]'>
                    Build your brand's recognition 
                    and get detailed insights on 
                    how your links are performing.
                    </p>
                
                    <a href='#' className='green-button self-center text-center  block hover:opacity-100 w-[50%] translate-x-[50%] mt-[34px]'>Sign Up</a>
            </div>
        </div>
    );
}


export default bodytop;