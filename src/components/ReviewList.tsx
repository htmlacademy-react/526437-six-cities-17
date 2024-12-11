
import {TReviewOffer} from '../types/offerTypes';
import ReviewItem from './ReviewItem';
type TProps = {
    reviewList: TReviewOffer[];
  }
export default function ReviewList(props: TProps){
  const {reviewList} = props;
  return (
    <ul className="reviews__list">
      {reviewList.map((el: TReviewOffer) => <ReviewItem review={el} key={el.id}/>)}

    </ul>
  );
}
