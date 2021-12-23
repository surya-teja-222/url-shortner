import Heroimg from './assets/images/illustration-working.svg';

function bodytop()
{
    return (
        <div id="bodytop" className='bodytop' >
            <div className='md:flex md:flex-row-reverse md:flex-vertical md:mt-[80px]'>
                <div className="hero_image overflow-clip mdm:mt-[30px]">
                    <img src={Heroimg} alt="hero image" className='hero__img translate-x-20 md:w-[100%]' />

                </div>
                <div className="hero_text font-Poppins mdm:mt-[45px] md:ml-[170px]">
                    <h1 className='font-bold mdm:self-center mdm:text-center mdm:text-[30px] mdm:mx-[40px]  md:text-[56px] md:leading-[60px]'>More than just shorter links</h1>
                    <p className='font-normal mdm:mx-[30px] text-t-grey mdm:text-center mdm:text-[18px] mdm:mt-[30px] md:text-[22px] md:mt-[24px]'>
                        Build your brand's recognition 
                        and get detailed insights on 
                        how your links are performing.
                        </p>

                        <a href='#' 
                            className='green-button self-center 
                                    text-center  block 
                                     mdm:w-[50%] 
                                    mdm:translate-x-[50%] mdm:mt-[34px]
                                    md:mt-[40px] md:w-[30%]'>
                                        Get Started
                        </a>
                </div>
            </div>
        </div>
    );
}


export default bodytop;