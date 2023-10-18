import starFull from '../Assets/star_full.svg'
import starEmpty from '../Assets/star_empty.svg'

function Rating(props) {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rating-wrapper">
            {range.map((number) =>
                props.rating >= number ? (
                    <img src={starFull} alt='' key={number.toString()} />
                ) : (
                    <img src={starEmpty} alt='' key={number.toString()} />
                )
            )}
        </div>
    )
}

export default Rating