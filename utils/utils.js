import Card  from '../scripts/Card.js';
import {ELEMENT_TEMPLATE_SELECTOR} from './constants.js';

export function createCard(item, popupPhoto){
  //console.log(popupPhoto)
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        popupPhoto.open(name, link)
      }
    }, ELEMENT_TEMPLATE_SELECTOR);
    return card;
  }