

function links()
{
    return (
        <div className="links  bg-t-grey h-[200px] font-[18px] md:mt-[152px] mdm:mt-[168px] font-Poppins relative">
            
            <div className=" bg-c-dark-violet  left-[50%] absolute translate rounded-2xl  mdm:h-[170px] mdm:w-[327px] translate-y-[-50%]  md:w-[80%]"> {/* H:160 W:327 */}
                <input type="url" className="outline-none mdm:block  mdm:translate-y-[24px] mdm:w-[80%]  rounded-lg mdm:p-[16px] mdm:m-auto md:ml-[64px] md:my-[52px] md:py-[25px] md:px-[32px] md:w-[780px] " placeholder="Shorten a link here..."/>
                <button className="outline-none mdm:block  mdm:translate-y-[24px] mdm:w-[80%] mdm:rounded-lg mdm:p-[16px] mdm:m-auto mdm:green-button mdm:hover:opacity-100 mdm:mt-[16px] md:mr-[65px] md:ml-[24px] md:green-button-square">Shorten It!</button>
            </div>

        </div>
    );
}


export default links;