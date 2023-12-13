import HueObject from './HueModel';

interface UserObject {
    username?: string;
    likes?: number;
    hues?: HueObject[];
  }

export default UserObject;