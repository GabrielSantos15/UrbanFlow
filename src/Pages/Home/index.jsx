import Collections from "../../components/home/Collections"
import Hero from "../../components/home/Hero"
import Stats from "../../components/home/Stats"
import Testimonials from "../../components/home/Testimonials"
import Marquee from "../../components/Marquee"

export default function Home(){
    return(
        <main>
            <Hero></Hero>
            <Marquee></Marquee>
            <Stats></Stats>
            <Collections></Collections>
            <Testimonials></Testimonials>
        </main>
    )
}