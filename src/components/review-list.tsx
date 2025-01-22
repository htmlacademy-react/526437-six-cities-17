
import {TReviewOffer} from '../types/offer-types';
import ReviewItem from './review-item';
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
