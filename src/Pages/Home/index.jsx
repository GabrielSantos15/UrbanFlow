import Hero from "../../components/home/Hero"
import Hero2 from "../../components/Home/Hero"
import Marquee from "../../components/Marquee"

export default function Home(){
    return(
        <main>
            <Hero2></Hero2>
            <Marquee></Marquee>
            <section style={{height:'100vh'}}>

            </section>
            <Hero/>
        </main>
    )
}