import { v4 as uuidv4 } from 'uuid';

export interface IPage {
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

export default class Page {
  uuid?: string;
  title: string;
  photo: string;
  description: string;
  shortDescription: string;

  constructor(params: IPage) {
    this.uuid = uuidv4();
    this.title = params.title;
    this.photo = params.photo;
    this.description = params.description;
    this.shortDescription = params.shortDescription;
  }
}
