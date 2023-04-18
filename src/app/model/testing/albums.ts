export class Albums{
  private _id:number;
  private _userId:number;
  private _title:string;

  constructor(id: number, userId: number, title: string) {
    this._id = id;
    this._userId = userId;
    this._title = title;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
