
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Portfolio from './Portfolio'

function Home() {

    return (
        <div>
            <Hero/>
            <Services />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home