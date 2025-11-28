import { Landing } from '@components/index'
import './Home.css'
import Cookie from 'cookie-universal';
import Restaurant from '@pages/Restuarant/Restaurant'

const Home = () => {
     const cookie = Cookie()
    console.log(cookie.get('token'))
    return (
        <>
            <Landing />
            <Restaurant />
        </>
    )
}

export default Home
