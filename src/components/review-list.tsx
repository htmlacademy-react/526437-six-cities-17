
import {TReviewOffer} from '../types/offer-types';
import ReviewItem from './review-item';
type TProps = {
    reviewList: TReviewOffer[];
  }
export default function ReviewList(props: TProps){
  const {reviewList} = props;
  const sortedReviews = reviewList.toSorted((review1, review2) => Date.parse(review2.date) - Date.parse(review1.date)).slice(0,10);
  return (
    <ul className="reviews__list">
      {sortedReviews.map((el: TReviewOffer) => <ReviewItem review={el} key={el.id}/>)}

    </ul>
  );
}
