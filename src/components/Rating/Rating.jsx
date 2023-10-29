import starFull from '../../assets/star_full.svg'
import starEmpty from '../../assets/star_empty.svg'
import './rating.css'

function Rating(props) {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rating-wrapper">
            {range.map((value) =>
                props.rating >= value ? (
                    <img src={starFull} alt='' key={value.toString()} />
                ) : (
                    <img src={starEmpty} alt='' key={value.toString()} />
                )
            )}
        </div>
    )
}

export default Rating;