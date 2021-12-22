import './bodytop.css';
import hero from './assets/images/illustration-working.svg'


function bodytop()
{
    return (
        <div id="bodytop ">
            <div className="hero_image">
                <img src={hero} alt="heroImage" className='mdm:h-[339px] mdm:overflow-x-hidden mdm:max-w-fit' />

            </div>
            <div className="hero_text">

            </div>
        </div>
    );
}


export default bodytop;