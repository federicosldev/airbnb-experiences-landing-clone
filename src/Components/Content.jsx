import Card from "./Card"
import ExperiencesData from "../ExperiencesData"

function Content() {
    
    const ExperiencesElements = ExperiencesData.map((experience) => {
        return (
            <Card 
                key={experience.id}
                experience={experience}
            />
        ) 
    })
    return (
        <main className="container">
            <section className="main-img">
                <img src="/assets/header-img.png" alt="Imagen que muestra las actividades que ofrece Airbnb" />
            </section>
            <article className="main-info">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </article>
            <section className="cards">
                {ExperiencesElements}
            </section>
        </main>
    )
}

export default Content