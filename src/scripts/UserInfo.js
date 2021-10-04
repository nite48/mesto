export default class UserInfo{
    constructor(userSelector){
        this._nameProfile = userSelector.nameProfile;
        this._descriptionProfile = userSelector.descriptionProfile;
        this._currentNameProfile = document.querySelector(this._nameProfile);
        this._currentDescriptionProfile = document.querySelector(this._descriptionProfile);
        

    }
    getUserInfo(){
      this._objectInfo = {name: this._currentNameProfile.textContent, description: this._currentDescriptionProfile.textContent};
      return this._objectInfo;
    }
    setUserInfo(name, description){
      this._currentNameProfile.textContent = name;
      this._currentDescriptionProfile.textContent = description;
    }
}