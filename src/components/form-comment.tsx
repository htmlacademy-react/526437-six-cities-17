import { ChangeEvent, FormEvent, Fragment, memo, useEffect, useState } from 'react';
import { Comment, Rating, RATINGS } from '../constant';
import { useSelector } from 'react-redux';
import { RootState, store } from '../store';
import { postComment } from '../store/actions/api-actions';

const initFormData = {
  rating: 0,
  comment: '',
};

function OfferReviewsForm() {
  const [formData, setFormData] = useState(initFormData);
  const [checkedRating, setCheckedRating] = useState({isChecked: ''});
  const [isFormDisabled, setFormDisabled] = useState(false);
  const isFormSending = useSelector((state: RootState) => state.OFFER.commentPosted);
  const hasSubmitError = useSelector((state: RootState) => state.OFFER.commentPostedError);
  const offer = useSelector((state: RootState) => state.OFFER.currentOffer);

  useEffect(() => {
    setFormDisabled(isFormSending);
    if (!isFormSending && !hasSubmitError) {
      setFormData(initFormData);
      setCheckedRating({isChecked: ''});
    }
  }, [hasSubmitError, isFormSending]);

  const hasFormValidate = formData.rating > Rating.InitState
    && formData.comment.length >= Comment.MinLength
    && formData.comment.length < Comment.MaxLength;

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(evt.target.value)
    });
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: evt.target.value
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offer) {
      store.dispatch(postComment({
        offerId: offer.id,
        comment: formData.comment,
        rating: formData.rating
      }));
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATINGS.map(({ value, title }) => (
            <Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleRatingChange}
                onClick={() => setCheckedRating({isChecked: title})}
                checked={checkedRating.isChecked === title}
                disabled={isFormDisabled}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
                aria-disabled={isFormDisabled}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleTextareaChange}
        disabled={isFormDisabled}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!hasFormValidate || isFormDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

const MemoizedOfferReviewsForm = memo(OfferReviewsForm);
export default MemoizedOfferReviewsForm;
