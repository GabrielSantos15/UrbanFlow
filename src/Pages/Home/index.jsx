import Hero from "../../components/home/Hero"
import Stats from "../../components/home/Stats"
import Marquee from "../../components/Marquee"

export default function Home(){
    return(
        <main>
            <Hero></Hero>
            <Marquee></Marquee>
            <Stats></Stats>
            <section style={{height:'100vh'}}>
            </section>
        </main>
    )
}