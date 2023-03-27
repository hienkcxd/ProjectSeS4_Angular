import {FileStorage} from "../file/file-storage.model";

export class DeviceDTO {
  id!:string;
  deviceID!:string;
  deviceName!:string;
  username!:string;
  groupName!:string;
  storeName!:string;
  area!:string;
  fileName!:string[];
  fileStorage!:FileStorage[];
}
