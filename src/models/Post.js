export class Post {
  constructor(title, img) {
    this.title = title;
    this.img = img;
    this.date = new Date().toLocaleTimeString();
  }

  toString = () =>
    JSON.stringify(
      { title: this.title, date: this.date, img: this.img },
      null,
      2
    );
}
