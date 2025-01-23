import { useEffect, useState } from 'react';
import { postComment } from '../store/actions/api-actions';
import { store } from '../store';
import { ToastContainer } from 'react-toastify';

type TProps = {
  offerId: string;
}
interface TextAreaValueElement extends HTMLElement {
  value: string;
}

export default function FormComment(props: TProps){


  const [isAbleButton, setAbleButton] = useState(false);

  const {offerId} = props;
  const [form, setForm] = useState({
    rating: '',
    comment: ''
  });


  const checkDisabled = () =>{
    if(form.rating && form.comment.length >= 50){
      setAbleButton(true);
    }else{
      setAbleButton(false);
    }
  };

  useEffect(()=> {
    checkDisabled();
  }, [form.comment, form.rating]);
  const handlerCommentForm = (event: React.ChangeEvent<HTMLElement>) => {
    const {value} = event.currentTarget as never;
    setForm({ ...form,
      comment: value
    });
  };

  const arCor = [5,4,3,2,1];
  const clickRating = (ev: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      rating : ev.currentTarget.value});
  };

  const handlePost = () =>{
    const args = {
      offerId: offerId,
      comment: form.comment,
      rating: Number(form.rating)
    };

    if(isAbleButton){
      setAbleButton(false);
      store.dispatch(postComment(args));
      setForm({rating: '', comment: ''});

      const el:TextAreaValueElement = document.getElementById('review') as TextAreaValueElement;
      if (el) {
        el.value = '';
      }
    }
  };

  const css = '.disabled { background-color: grey;}';

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ToastContainer />
      <div className="reviews__rating-form form__rating">
        {arCor.map((el) => (
          <span key={el}>
            <input onClick={clickRating}
              className="form__rating-input visually-hidden"
              name="rating"
              value={el} id={`${el}-stars`}
              type="radio"
            />
            <label htmlFor={`${el}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </span>)) }
      </div>

      <textarea onChange={handlerCommentForm}
        className="reviews__textarea form__textarea"
        maxLength={300}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <div onClick={handlePost}
          className={`reviews__submit form__submit button ${!isAbleButton ? 'disabled' : ''}`}
        >
          <style>{css}</style>
          Submit
        </div>
      </div>
    </form>
  );
}
