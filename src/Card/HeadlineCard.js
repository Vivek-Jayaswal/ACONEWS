// import { useState } from "react";
import "./hedline.scss"

const HeadlineCard = ({data}) => {
    return (
        <div className="headline-container">
            {
                data.map((item, idx) => {
                    return (
                        <div className="headline-card" key={idx}>
                            <div className="headline">
                                <p>{item.source.name}</p>
                                <p>{item.description}</p>
                                <div className="headline-link">
                                    <a href={item.source.url} target="_blank" rel="noreferrer">
                                        {item.title}
                                    </a>
                                </div>
                            </div>
                            <img src={item.image} alt="card-image" />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HeadlineCard;