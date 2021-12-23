

function links()
{



    function xx()
    {
        var input = document.querySelector('#entered_url').value;

        if(input.length > 0){
            // if input filed has err_class class , remove it
            if(document.querySelector('#entered_url').classList.contains('err_class')){
                document.querySelector('#entered_url').classList.remove('err_class');
                // reset placeholder
                document.querySelector('#entered_url').placeholder = 'Shorten a link here...';
            }
            var xhr = new XMLHttpRequest();
            const url = 'https://api.tinyurl.com/create?api_token=oaS6z3buatsD1e4QIeDBzJZ7ISQFDXb6TRn5q6mXMQLPIMmYfVIg3oMd0eTh';
            xhr.open('POST',url,true);
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.setRequestHeader('Authorization', 'Bearer https');
            xhr.send(JSON.stringify({url:input , 'domain':'tiny.one'}));
            var elem;
            xhr.onload = function(){
                if(xhr.status === 200){
                    var data = JSON.parse(xhr.responseText);
                    // retrieve the array from local storage
                    var array = JSON.parse(localStorage.getItem('tiny_array'));
                    var arr2  = JSON.parse(localStorage.getItem('org_array'));
                    if(array == null){
                        array = [];
                    }
                    if(arr2 == null){
                        arr2 = [];
                    }

                    array.push(data.data.tiny_url);
                    elem = data.data.tiny_url;
                    arr2.push(input);
                    localStorage.setItem('tiny_array',JSON.stringify(array));
                    localStorage.setItem('org_array',JSON.stringify(arr2));
                    document.querySelector('#entered_url').value = '';
                    document.querySelector('#waiting_p1').innerHTML = input;
                    document.querySelector('#waiting_p2').innerHTML = elem;
                    // change id of class .nnn
                    document.querySelector('.nnn').id = elem;
                    
        
                    document.querySelector('#wait_block').classList.remove('hidden');
                    window.location.reload();

                    
                }
            }
            
            
        }
        else{
            // add err_class to input field
            document.querySelector('#entered_url').classList.add('err_class');
            // change placeholder text
            document.querySelector('#entered_url').placeholder = 'Please enter a valid url';
        }
    }
    


    return (
        <div>
            <div id="features" className="links  bg-c-white-2 h-[200px] font-[18px] md:mt-[152px] mdm:mt-[168px] font-Poppins relative">
                
                <div className="add-img-link  bg-c-dark-violet left-[50%] translate absolute rounded-2xl  mdm:h-[170px] mdm:w-[80%] translate-y-[-50%]  md:w-[80%]"> {/* H:160 W:327 */}
                    <input  type="url" id="entered_url" className=" outline-none mdm:block  mdm:translate-y-[24px] mdm:w-[80%]  rounded-lg mdm:p-[16px] mdm:m-auto md:ml-[64px] md:my-[52px] md:py-[25px] md:px-[32px] md:w-[60%] " placeholder="Shorten a link here..."/>
                    <button onClick={xx} id="submitbtn" className="outline-none mdm:block  mdm:translate-y-[24px] mdm:w-[80%] mdm:rounded-lg mdm:p-[16px] mdm:m-auto mdm:green-button mdm:hover:opacity-100 mdm:mt-[16px] md:mr-[65px] md:ml-[24px] md:green-button-square">Shorten It!</button>
                    
                </div>
            </div>


            <div className="bg-c-white-2 flex flex-col">
                <div id="wait_block" className="hidden bg-c-white rounded-2xl w-[80%] mdm:h-[200px] flex mdm:flex-col mdm:justify-center md:items-center  m-[auto] mb-[50px]  font-Poppins md:justify-around md:min-h-[70px]">
                    <p id="waiting_p1" className="kkk pl-[40px] my-[18px] text-[16px] md:min-w-[35%] max-w-[200px] overflow-scroll mr-[30px]">ORIGINAL LINK</p>
                    <div className="md:hidden w-[100%] border-b-2 border-t-grey"></div>
                
                    <p id="waiting_p2" className="kkk mdm:pl-[40px] my-[18px] text-[16px] text-c-cyan md:min-w-[200px] overflow-scroll md:pl-[100px]">NEW LINK</p>
                    <button id="copy_btn"  className="nnn green-button mdm:w-[90%] text-center m-auto block rounded md:w-[20%]  mdm:hover:opacity-100">COPY</button>
                </div>
                {setData()}
            </div>

            


            
        </div>
    );
}





export default links;


const DivBlock = ({l1,l2 ,l3}) => {
    return (
        <div id={l3} className="bg-c-white rounded-2xl w-[80%] mdm:h-[200px] flex mdm:flex-col mdm:justify-center md:items-center  m-[auto] mb-[50px]  font-Poppins md:justify-around md:min-h-[70px]">
                <p className="kkk pl-[40px] my-[18px] text-[16px] md:min-w-[35%] md:max-w-[200px] overflow-scroll mr-[30px]">{l1}</p>
                <div className="md:hidden w-[100%] border-b-2 border-t-grey"></div>
                <p className="kkk mdm:pl-[40px] my-[18px] text-[16px] text-c-cyan md:min-w-[200px] overflow-scroll md:pl-[100px]">{l2}</p>
                <button id={"copy_btn"+l3} onClick={() => {
                    navigator.clipboard.writeText(l2); 
                    // change text on the button to Copied!
                    document.querySelector("#copy_btn"+l3).innerHTML = "Copied!";
                    document.querySelector("#copy_btn"+l3).classList.remove("green-button");
                    // change button color to grey
                    document.querySelector("#copy_btn"+l3).classList.add("blue-btn");
                    // after 4 seconds change everything to default
                    setTimeout(() => {
                        document.querySelector("#copy_btn"+l3).innerHTML = "Copy";
                        document.querySelector("#copy_btn"+l3).classList.remove("blue-btn");
                        document.querySelector("#copy_btn"+l3).classList.add("green-button");
                    },4000);
                    }}  className="green-button mdm:w-[90%] text-center m-auto block rounded md:w-[20%]  mdm:hover:opacity-100">COPY</button>
        </div>
    );
}



function setData()
{
    // retrieve the array from local storage
    var array = JSON.parse(localStorage.getItem('tiny_array'));
    var arr2  = JSON.parse(localStorage.getItem('org_array'));
    
    // create an empty div block to hold html elements
    var div_block = [];
    if(array != null){
        for(var i = array.length-1; i >=0; i--){
            div_block.push(<DivBlock l1={arr2[i]} l2={array[i]} l3={i+1} />);
        }
    }
    return div_block;
}   






/*

    ##########################example code block


                <div className='bg-c-white  w-[80%] z-50 absolute left-[50%] translate-x-[-50%] align-middle  h-[328px]'>
                        <div className='rounded-full  bg-c-dark-violet w-fit translate-y-[-50%] absolute left-[50%] translate-x-[-50%]'><img src={img1} className="p-5  w-[80px] h-[80px]  "></img></div>
                        <h1 className='text-center mt-[80px] font-bold'>Brand Recognition</h1>
                        <p className='text-center mt-[24px] text-t-grey'> Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                <div className='h-[48px] w-[8px] bg-c-cyan'>
*/




/*

<div className="bg-c-white-2 mdm:pb-[100px] md:pb-[64px]">
                    <h1 className="pt-[172px] text-center text-[24px] font-bold">Advanced Statistics</h1>
                    <p className="text-center text-t-grey mt-[34px]">Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </div>

                

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
*/


/*

document.querySelector('#submitbtn').addEventListener('click',function(){
        var input = document.querySelector('#entered_url').value;

        var xhr = new XMLHttpRequest();
        const url = 'https://api.tinyurl.com/create?api_token=oaS6z3buatsD1e4QIeDBzJZ7ISQFDXb6TRn5q6mXMQLPIMmYfVIg3oMd0eTh';
        xhr.open('POST',url,true);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.setRequestHeader('Authorization', 'Bearer https');
        xhr.send(JSON.stringify({url:input}));
        xhr.onload = function(){
            if(xhr.status === 200){
                var data = JSON.parse(xhr.responseText);
                // retrieve the array from local storage
                var array = JSON.parse(localStorage.getItem('array'));
                if(array == null){
                    array = [];
                }

                array.push(data.data.tinyurl);
                localStorage.setItem('array',JSON.stringify(array));
                document.querySelector('#entered_url').value = '';
                console.log(array);
            }
        }
    });
*/