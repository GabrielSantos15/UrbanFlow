import Collections from "../../components/home/Collections"
import Hero from "../../components/home/Hero"
import Stats from "../../components/home/Stats"
import Marquee from "../../components/Marquee"

export default function Home(){
    return(
        <main>
            <Hero></Hero>
            <Stats></Stats>
            <Marquee></Marquee>
            <Collections></Collections>
        </main>
    )
}