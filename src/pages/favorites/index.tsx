import { useSelector, useDispatch } from 'react-redux';
import { TOffer } from '../../types/offerTypes';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { AppRouter } from '../../constant';
import {setSelectedCityAction} from '../../store/actions';


type TFavorites = {
  [index: string]: TOffer[];
}
export default function Favorites() {
  const dispatch = useDispatch();

  const favoriteOffers = useSelector((state: RootState)=> state.favoriteOffers);

  const x = (f: TOffer[]) => {
    const y = f.reduce((acc: TFavorites, val: TOffer): TFavorites => {
      const co:string = val?.city.name;
      if(!acc[co]){
        acc[co] = [val];
      }else{
        acc[co].push(val);
      }
      return acc;
    }, {});
    return y;
  };
  const sortedCardByCity:TFavorites = x(favoriteOffers);
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(sortedCardByCity).map((item) => (
                  <li className="favorites__locations-items" key={item}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link"
                          onClick={()=> dispatch(setSelectedCityAction(sortedCardByCity[item][0].city))}
                          to={AppRouter.Root}
                        >
                          <span>{item}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {sortedCardByCity[item].map((el) => (
                        <article className="favorites__card place-card" key={el.id}>

                          {el.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link to={`/offer/${el.id}`}>
                              <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
                            </Link>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">€  {el.price}</b>
                                <span className="place-card__price-text">&#47;&nbsp; night</span>
                              </div>
                              <button className="place-card__bookmark-button button" type="button">
                                {el.isFavorite ?
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg> : <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg>}
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span style={{ width: `${100 / 5 * el.rating}%` }}></span>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link to={`/offer/${el.id}`}>{el.title}</Link>
                            </h2>
                            <p className="place-card__type">Apartment</p>
                          </div>
                        </article>
                      ))}


                    </div>
                  </li>
                ))
              }

            </ul>
          </section>
        </div>
      </main>

    </div>
  );
}
