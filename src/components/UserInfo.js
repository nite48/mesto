export default class UserInfo{
    constructor(userSelector, avatarSelector){
        this._nameProfile = userSelector.nameProfile;
        this._descriptionProfile = userSelector.descriptionProfile;
        this._avatarProfile = userSelector.avatarProfile;
        this._currentNameProfile = document.querySelector(this._nameProfile);
        this._currentDescriptionProfile = document.querySelector(this._descriptionProfile);
        this._avatar = avatarSelector;
        

    }
    getUserInfo(){
      this._objectInfo = {name: this._currentNameProfile.textContent, description: this._currentDescriptionProfile.textContent}
      return this._objectInfo;
    }
    setUserInfo(name, description, avatar, id){
      this._currentNameProfile.textContent = name;
      this._currentDescriptionProfile.textContent = description;
      this._avatar.src = avatar;
      this._id = id;


    }
    getId(){
      return this._id
    }
}