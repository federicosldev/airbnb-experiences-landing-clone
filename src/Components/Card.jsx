function Card(props) {
    
    let badgeText
    if (props.experience.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.experience.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {
            badgeText &&
            <div className="card--badge">{badgeText}</div>
        }
            <img 
                src={props.experience.img} 
                className="card--image" 
            />
            <div className="card--stats">
                <img 
                    src="/assets/star.svg" 
                    className="card--star" 
                />
                <span>{props.experience.rating}</span>
                <span className="gray">({props.experience.reviewCount}) • </span>
                <span className="gray">{props.experience.location}</span>
            </div>
            <p>{props.experience.title}</p>
            <p><span className="bold">From ${props.experience.price}</span> / person</p>
        </div>
    )
}

export default Card