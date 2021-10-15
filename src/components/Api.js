
export default class Api{
  constructor(parameters){
    this._parameters = parameters;
    this._queryParameters = {};
    this._queryParameters.headers = this._parameters.headers;
  }
  _checkResponse(res){
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    return res.json()
  }
  getInitialCards() {
    return fetch(`${this._parameters.baseUrl}/cards`, this._queryParameters)
      .then(res => {
        return this._checkResponse(res)
      });
      
  }

  getUserInfo(){
    return fetch(`${this._parameters.baseUrl}/users/me`, this._queryParameters)
      .then(res =>{
        return this._checkResponse(res)
      })
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
    .then(res => {
      return this._checkResponse(res)
    });
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
    .then(res =>{
      return this._checkResponse(res)
    })
  }
  deleteCard(id){
    return fetch(`${this._parameters.baseUrl}/cards/${id}`,{
      method: 'DELETE',
      headers: this._queryParameters.headers
    })
    .then(res =>{
      return this._checkResponse(res)
    })
  }
  
  sendUserPhoto(link){
    return fetch(`${this._parameters.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._queryParameters.headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
    .then(res =>{
      return this._checkResponse(res)
    })
  }
  handleCardLike(id, isLiked){
    // console.log(id, isLiked)
    if (!isLiked) {
      // console.log(!isLiked)
      return fetch(`${this._parameters.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: this._queryParameters.headers
      })
      .then(res =>{
        //console.log(res)
        return this._checkResponse(res)
      })
    } else {
      return fetch(`${this._parameters.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: this._queryParameters.headers
      })
      .then(res =>{
        // console.log(res)
        return this._checkResponse(res)
      })
    }
  }
}