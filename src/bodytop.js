import Heroimg from './assets/images/illustration-working.svg';

function bodytop()
{
    return (
        <div id="bodytop  ">
            <div className="hero_image overflow-clip mt-[30px]">
                <img src={Heroimg} alt="hero image" className='hero__img translate-x-20' />

            </div>
            <div className="hero_text">
                

            </div>
        </div>
    );
}


export default bodytop;