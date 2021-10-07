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
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((post) =>{
      if(res.ok){
        return res.json()
      }
      return Promise.reject('Ошибка отправки карточки'`${res.status}`)
    })
  }
}