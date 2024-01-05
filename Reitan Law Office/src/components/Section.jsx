import './../styles/section.scss'
import { Buildings, Umbrella, Bank, HouseLine, UsersThree, Scales } from 'phosphor-react'

export function Section(){
    return (
        <>
            <div className='aboutContainer'>
                <div className='aboutQuote'>
                    <h6>ABOUT US</h6>
                    <h2>Why You Can Trust</h2>
                    <h2><span>REITAN LAW OFFICE</span>?</h2>
                </div>
                <div className='aboutContent'>
                    <p>Take the first step towards securing your legal rights and archieving your legal goals. 
                        We pride ourselves on building strong client relationships based on trust, integrity, 
                        and transparency.</p>
                    <p>Our attorneys are not just legal experts, they are compassionate advocates who genuinely 
                        care about your well-being and the outcome of your case. We strive to demystify the legal process, ensuring 
                        that you are informed and empowered to make the best decisions for your unique situation.</p>
                    <a href='https://api.whatsapp.com/send?phone=5511900000000&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'>Contact us</a>
                </div>
            </div>
            <div className='bannerSection'>
                <h2>20+ Years of Experience in Various Cases</h2>
                <p>Whether you're facing a challenging court case, need assistance with legal documentation<br/> or seeking advice on legal matters, our team is here to guide you every step of the way.</p>
                <div className='experienceContainer'>
                    <div className='experienceItem'>
                        <h1>1998</h1>
                        <p>Year of foundation</p>
                    </div>
                    <div className='experienceItem'>
                        <h1>+500</h1>
                        <p>Clients served</p>
                    </div>
                    <div className='experienceItem'>
                        <h1>100%</h1>
                        <p>Satisfaction with our services</p>
                    </div>
                    <div className='experienceItem'>
                        <h1>+1500</h1>
                        <p>Cases analyzed</p>
                    </div>
                </div>
            </div>
            <div className='areaSection'>
                <h2>Our Legal Practice Areas</h2>
                <div className='cardContainer'>
                    <div className='card'>
                        <UsersThree size={32} className='icon'/>
                        <h3>Family Law</h3>
                        <p>Compassionate resolution for familial matters. We guide you through divorces, child custody, and more.</p>
                    </div>
                    <div className='card'>
                        <Buildings size={32} className='icon'/>
                        <h3>Business Law</h3>
                        <p>Safeguarding your business interests with expertise in contracts, disputes, and legal compliance.</p>
                    </div>
                    <div className='card'>
                        <Scales size={32} className='icon'/>
                        <h3>Civil Litigation</h3>
                        <p>Asserting your rights through legal channels, resolving disputes with effective legal representation.</p>
                    </div>
                    <div className='card'>
                        <Umbrella size={32} className='icon'/>
                        <h3>Insurance Claim</h3>
                        <p>Advocating for fair insurance settlements, ensuring you get the compensation you deserve.</p>
                    </div>
                    <div className='card'>
                        <HouseLine size={32} className='icon'/>
                        <h3>Real Estate Law</h3>
                        <p>Protecting your assets and properties, offering legal support in transactions and disputes.</p>
                    </div>
                    <div className='card'>
                        <Bank size={32} className='icon'/>
                        <h3>Finance Law</h3>
                        <p>Ensuring your financial transactions meet legal standards, providing counsel on regulatory compliance.</p>
                    </div>
                </div>
            </div>
        </>
    )
}