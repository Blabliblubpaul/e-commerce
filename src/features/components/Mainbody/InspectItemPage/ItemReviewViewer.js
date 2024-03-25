export default function ItemReviewViewer({reviews}) {
    return (
        <div id="itemReviewViewer">
            <h1>Reviews:</h1>
            <div id="itemReviews">
                <Reviews reviews={reviews} />
                <div id="placeholder"></div>
            </div>
        </div>
    )
}

function Reviews({reviews}) {
    return (
        reviews.map((x, index) => (
            <div className="itemReview" key={index}>
                <h1 id="itemReviewHeader">{x.author}</h1>
                <h3 id="itemReviewRating">{"Rated: " + x.rating}</h3>
                <p id="itemReviewDescription">{x.description}</p>
            </div>
        ))
    )
}