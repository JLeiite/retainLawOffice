import './../styles/banner.scss'
import { Buildings, Scales, Umbrella } from 'phosphor-react'

export function Banner(){
    return (
        <>
            <div className='bannerContainer'>
                <img src="https://images.unsplash.com/photo-1544225917-1bf66feace19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <div className='bannerContent'>
                    <h2>Reputation.<br/>Respect. <i>Result.</i></h2>
                    <p>Our team of dedicated attorneys is committed to providing you with the highest level of legal representation.</p>
                    <a href="https://api.whatsapp.com/send?phone=5511900000000&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.">Schedule an appointment</a>
                </div>
                <div className='bannerBlock'>
                    <div className='bannerContentCard'>
                        <div className='bannerCard'>
                            <Buildings size={32} className='icon'/>
                            <h3>Business Law</h3>
                            <p>Safeguarding your business interests with expertise in contracts, disputes, and legal compliance.</p>
                        </div>
                        <div className='bannerCard'>
                            <Scales size={32} className='icon'/>
                            <h3>Civil Litigation</h3>
                            <p>Asserting your rights through legal channels, resolving disputes with effective legal representation.</p>
                        </div>
                        <div className='bannerCard'>
                            <Umbrella size={32} className='icon'/>
                            <h3>Insurance Claim</h3>
                            <p>Advocating for fair insurance settlements, ensuring you get the compensation you deserve.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}