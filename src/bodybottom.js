import img1 from './assets/images/icon-brand-recognition.svg';
import img2 from './assets/images/icon-detailed-records.svg';
import img3 from './assets/images/icon-fully-customizable.svg';


function bodybottom(){
    return (
        // <div className="bodybottom ">
        //     <div className="md:h-[500px] mdm:h-[1200px] bg-c-white-2">

        //     </div>
        //     <div className="h-[300px] bg-c-very-dark-blue">

        //     </div>
            
        // </div>
        <div className="bodybottom">
            
            
            <section id="resources" className=' mdm:h-[1300px] md:h-[568px] bg-c-white-2 font-Poppins'>
                <div className="bg-c-white-2 mdm:pb-[100px] md:pb-[64px]">
                    <h1 className="text-center text-[24px] font-bold pt-[50px]">Advanced Statistics</h1>
                    <p className="text-center text-t-grey mt-[34px]">Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </div>

                {/* ADVANCED STATISTICS ELEMENTS */}

                <div className='bg-c-white-2 flex mdm:flex-col justify-center items-center mdm:pb-[80px] md:pb-[120px]'>


                    <div className='elem1 rounded-2xl bg-c-white mdm:w-[80%] flex flex-col justify-center mdm:items-center md:w-[360px] md:h-[260px] '>
                        <div className='rounded-full bg-c-dark-violet mdm:translate-y-[-50%] md:w-fit  md:translate-y-[-50%] md:translate-x-[35%]'><img src={img1} className='p-6 h-[88px] w-[88px] '></img></div>
                        <h1 className='mdm:text-center  font-bold  md:ml-[32px]'>Brand Recognition</h1>
                        <p className='mdm:text-center mdm:my-[24px] text-t-grey md:m-[32px]'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>


                    </div>

                    <div className='mdm:h-[98px] bg-c-cyan mdm:w-[8px]  md:w-[30px] md:h-[8px]'>

                    </div>


                    <div className='elem2  rounded-2xl bg-c-white mdm:w-[80%] flex flex-col justify-center mdm:items-center  md:w-[360px] md:h-[260px] md:translate-y-[15%]'>
                        <div className='rounded-full bg-c-dark-violet mdm:translate-y-[-50%] md:w-fit md:translate-y-[-50%] md:translate-x-[35%]'><img src={img2} className='p-6 h-[88px] w-[88px]'></img></div>
                        <h1 className='mdm:text-center  font-bold md:ml-[32px]'>Detailed Records</h1>
                        <p className='mdm:text-center mdm:my-[24px] text-t-grey md:m-[32px]'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>


                    </div>

                    <div className='mdm:h-[98px] bg-c-cyan mdm:w-[8px]  md:w-[30px] md:h-[8px]'></div>


                    <div className='elem3  rounded-2xl bg-c-white mdm:w-[80%] flex flex-col justify-center mdm:items-center  md:w-[360px] md:h-[260px] md:translate-y-[30%]'>
                        <div className='rounded-full bg-c-dark-violet mdm:translate-y-[-50%] md:w-fit  md:translate-y-[-50%] md:translate-x-[35%]'><img src={img3} className='p-6 h-[88px] w-[88px]'></img></div>
                        <h1 className='mdm:text-center  font-bold md:ml-[32px]'>Fully Customizable</h1>
                        <p className='mdm:text-center mdm:my-[24px] text-t-grey md:m-[32px]'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>


                    </div>
                </div>
                
            </section>

            <section className='violetbody h-[300px] bg-c-dark-violet font-Poppins flex flex-col'>
                <h1 className='text-center text-[32px] text-c-white pt-[106px]'>Boost your links today</h1>
                <button className='green-button text-center mdm:hover:opacity-100 m-auto'>Get Started</button>
            </section>

        </div>
    );
}


export default bodybottom;