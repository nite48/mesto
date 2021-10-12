//import ENVIROMENT_TOKEN from '../utils/constants.js';
export default class Api{
  constructor(parameters){
    this._parameters = parameters;
    this._queryParameters = {};
    this._queryParameters.headers = this._parameters.headers;
  }
  getInitialCards() {
    return fetch(`${this._parameters.baseUrl}/cards`, this._queryParameters)
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  postCardApi(card){
    return fetch(`${this._parameters.baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: card.name,
        link: card.link
      }),
      headers: this._queryParameters.headers
    })
    .then((res) =>{
      if(res.ok){
        return res.json()
      }
      return Promise.reject('Ошибка отправки карточки'`${res.status}`)
    })
  }
  getUserInfo(){
    return fetch(`${this._parameters.baseUrl}/users/me`, this._queryParameters)
    .then((res) =>{
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  getUserEdit(name, about){
    return fetch(`${this._parameters.baseUrl}/users/me`,{
      method: 'PATCH',
      headers: this._queryParameters.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) =>{
      if(res.ok){
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  deleteCard(card){
    return fetch(`${this._parameters.baseUrl}/cards/${id}`,{
      method: 'POST',
      headers: this._queryParameters.headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка удаления карточки: ${res.status}`);
    });
  }
  handleCardLike(id, isLiked){
    console.log(id)
    if (!isLiked) {
      return fetch(`${this._parameters.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: this._queryParameters.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка лайка карточки: ${res.status}`);
      });
    }else{
      return fetch(`${this._parameters.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: this._queryParameters.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка удаление лайка: ${res.status}`);
      });
    }
  }
}