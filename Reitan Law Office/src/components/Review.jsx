import { Star } from 'phosphor-react'
import './../styles/review.scss'

export function Review() {
    return (
        <>
            <div className='reviewContainer'>
                <Star width={30} className='icon'/>
                <Star width={30} className='icon'/>
                <Star width={30} className='icon'/>
                <Star width={30} className='icon'/>
                <Star width={30} className='icon'/>
            </div>
        </>
    )
}