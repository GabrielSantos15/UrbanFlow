import "./Hero.estilos.css"

export default function Hero(){
    return(
        <section className="hero">
            <h1>UrbanFlow</h1>
            <figure className="hero-person">
                <img src="./assets/personHero.png" alt="" />
            </figure>
        </section>
    )
}