import Card  from '../scripts/Card.js';
import {ELEMENT_TEMPLATE_SELECTOR} from './constants.js';
import {userInfo} from '../scripts/index.js';
import {api} from '../scripts/index.js';

export function createCard(item, popupPhoto, popupPhotoDelete){
  // console.log(popupPhoto)
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        popupPhoto.open(name, link)
      },
      handlePhotoDelete: (cardId, card) =>{
        popupPhotoDelete.open(cardId, card)
      },
      handleCardLikeClick: (id, isLiked, handleResult) =>{
        console.log(id)
        api.handleCardLike(id, isLiked)
        .then((result) => {
          handleResult(result)
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }, userInfo.getId(), ELEMENT_TEMPLATE_SELECTOR);
    return card;
  }
