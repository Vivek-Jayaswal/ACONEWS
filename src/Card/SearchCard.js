import "./searchcard.scss"

const SearchCard = ({data}) => {
    console.log(data);

    return (
        <div className="search-card-container">
            {
                data.map((item, idx) => {
                    return (
                        <div className="search-card" key={idx}>
                            <h2 style={{fontSize : "20px",fontWeight:"800"}}>{item.title}</h2>
                            <p>{item.description}</p>
                            <img src={item.image} alt="img" />
                            <p>{item.content}</p>
                            <div className="button">
                                <p>Source :- {item.source.name}</p>
                                <button>
                                    <a href={item.source.url} target="_blank" rel="noreferrer">
                                        more
                                    </a>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default SearchCard;