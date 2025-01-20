import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace,
  //  AuthorizationStatus
} from '../../constant';
import {OfferProcess} from '../../types/newStateTypes';
import {fetchOffers,
  fetchFavoriteOffers,
  fetchOffer,
  fetchComments,
  fetchNearByOffers,
  postComment,
  fetchFavoriteStatus} from '../actions/apiActions';
import {convertCitiesById} from '../../helpers/convertCitiesById';
import {setCities} from '../../helpers/setCities';
import { TCity } from '../../types/cityTypes';


const initialState: OfferProcess = {
  offers: [],
  cityes: [],
  favoriteOffers: [],
  nearByOffers: [],
  currentOffer: {},
  currentOfferComments:[],
  selectedCity: {
    name:'Paris',
    location: {
      latitude:48.85661,
      longitude:2.351499,
      zoom:13,
    }
  },
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dispatchSelectedCity: (state, action: PayloadAction<TCity>) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        const offers = convertCitiesById(action.payload);
        const cityes = setCities(offers);
        state.offers = offers;
        state.cityes = cityes;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offers = [];
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoriteOffers = [];
      })
      .addCase(fetchOffer.fulfilled, (state, action)=> {
        state.currentOffer = action.payload;
        state.selectedCity = action.payload.city;
      })
      .addCase(fetchOffer.rejected, ()=> {
        // dispatch(redirectToRoute(AppRouter.NotFound));

      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.currentOfferComments = action.payload;
      })
      .addCase(fetchNearByOffers.fulfilled, (state, action) => {
        const offers = action.payload.map((offer)=> {
          const location = {...offer.location, id: offer.id};
          offer.location = location;
          return offer;
        });
        state.nearByOffers = offers;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.currentOfferComments = [...state.currentOfferComments, action.payload];
      })
      .addCase(fetchFavoriteStatus.fulfilled, (state, action) => {
        const offer = state.offers.find((of)=> of.id === action.payload.id);
        if(offer){
          offer.isFavorite = !offer.isFavorite;
        }
      });
  }
});

export const {dispatchSelectedCity} = offerProcess.actions;
