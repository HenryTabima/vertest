export interface IPage {
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

export class Page {
  // showing off a bit of typescript typing
  title!: string;
  photo: string | undefined;
  description: string | undefined;
  shortDescription?: string;

  constructor({ title, photo, description, shortDescription }: IPage) {
    this.title = title;
    this.photo = photo;
    this.description = description;
    this.shortDescription = shortDescription;
  }
}
