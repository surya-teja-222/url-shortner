import img1 from './assets/images/icon-brand-recognition.svg';
import img2 from './assets/images/icon-detailed-records.svg';
import img3 from './assets/images/icon-fully-customizable.svg';


function links()
{
    return (
        <div className="links  bg-c-white-2 h-[200px] font-[18px] md:mt-[152px] mdm:mt-[168px] font-Poppins relative">
            
            <div className=" mdm:bg-c-dark-violet add_img_mob add_img_md bg-c-very-dark-blue left-[50%] absolute translate rounded-2xl  mdm:h-[170px] mdm:w-[327px] translate-y-[-50%]  md:w-[80%]"> {/* H:160 W:327 */}
                <input type="url" className="outline-none mdm:block  mdm:translate-y-[24px] mdm:w-[80%]  rounded-lg mdm:p-[16px] mdm:m-auto md:ml-[64px] md:my-[52px] md:py-[25px] md:px-[32px] md:w-[780px] " placeholder="Shorten a link here..."/>
                <button className="outline-none mdm:block  mdm:translate-y-[24px] mdm:w-[80%] mdm:rounded-lg mdm:p-[16px] mdm:m-auto mdm:green-button mdm:hover:opacity-100 mdm:mt-[16px] md:mr-[65px] md:ml-[24px] md:green-button-square">Shorten It!</button>
            </div>

            {/* ADVANCED STATISTICS PART */}
            <div className="bg-c-white-2 mdm:pb-[100px] md:pb-[64px]">
                <h1 className="pt-[172px] text-center text-[24px] font-bold">Advanced Statistics</h1>
                <p className="text-center text-t-grey mt-[34px]">Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

            {/* ADVANCED STATISTICS ELEMENTS */}

            <div className='bg-c-white-2 mdm:flex mdm:flex-col justify-center items-center mdm:pb-[80px]'>
                <div className='elem1 rounded-2xl bg-c-white mdm:w-[80%] flex flex-col justify-center items-center'>
                    <div className='rounded-full bg-c-dark-violet mdm:translate-y-[-50%]'><img src={img1} className='p-6 h-[88px] w-[88px] '></img></div>
                    <h1 className='text-center  font-bold'>Brand Recognition</h1>
                    <p className='text-center mdm:my-[24px] text-t-grey '>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>


                </div>

                <div className='mdm:h-[98px] bg-c-cyan mdm:w-[8px]'>

                </div>


                <div className='elem2  rounded-2xl bg-c-white mdm:w-[80%] flex flex-col justify-center items-center'>
                    <div className='rounded-full bg-c-dark-violet mdm:translate-y-[-50%]'><img src={img2} className='p-6 h-[88px] w-[88px]'></img></div>
                    <h1 className='text-center  font-bold'>Detailed Records</h1>
                    <p className='text-center mdm:my-[24px] text-t-grey'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>


                </div>

                <div className='mdm:h-[98px] bg-c-cyan mdm:w-[8px]'></div>

                <div className='elem3  rounded-2xl bg-c-white mdm:w-[80%] flex flex-col justify-center items-center'>
                    <div className='rounded-full bg-c-dark-violet mdm:translate-y-[-50%]'><img src={img3} className='p-6 h-[88px] w-[88px]'></img></div>
                    <h1 className='text-center  font-bold'>Fully Customizable</h1>
                    <p className='text-center mdm:my-[24px] text-t-grey'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>


                </div>
            </div>


      



        </div>
    );
}





export default links;





/*

    ##########################example code block


                <div className='bg-c-white  w-[80%] z-50 absolute left-[50%] translate-x-[-50%] align-middle  h-[328px]'>
                        <div className='rounded-full  bg-c-dark-violet w-fit translate-y-[-50%] absolute left-[50%] translate-x-[-50%]'><img src={img1} className="p-5  w-[80px] h-[80px]  "></img></div>
                        <h1 className='text-center mt-[80px] font-bold'>Brand Recognition</h1>
                        <p className='text-center mt-[24px] text-t-grey'> Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                <div className='h-[48px] w-[8px] bg-c-cyan'>
*/