export default class Section{
  constructor({ renderer }, containerSelector){
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
  }
  addItem(item){
    // console.log(item)
    this._container.prepend(item);
  }
  clear(){
    this._container.innerHTML = ''; 
  }
  renderItems(result) {
    this.clear();
    // console.log(result)
    
    result.forEach(item => {
      this._renderer(item);
    });
  }
}