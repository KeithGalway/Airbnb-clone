import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import data from './data'

const App = () => {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}        
                {...item}
            />
        )
    })
    return (
        <>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}

export default App