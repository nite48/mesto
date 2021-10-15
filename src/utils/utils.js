import Card  from '../components/Card.js';
import {ELEMENT_TEMPLATE_SELECTOR} from './constants.js';
import {userInfo} from '../pages/index.js';
import {api} from '../pages/index.js';

export function createCard(item, popupPhoto, popupPhotoDelete){
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        popupPhoto.open(name, link)
      },
      
      handleCardLikeClick: (id, isLiked, handleResult) =>{
        console.log(id, isLiked)
        api.handleCardLike(id, isLiked)
        
        .then((result) => {
          
          handleResult(result)
          // console.log(result)
        })
        .catch((err) => {
          console.log(err);
        });

      },
      handlePhotoDelete: (cardId, card) =>{
        popupPhotoDelete.open(cardId, card)
        
      },
    }, userInfo.getId(), ELEMENT_TEMPLATE_SELECTOR);
    return card;
  }
