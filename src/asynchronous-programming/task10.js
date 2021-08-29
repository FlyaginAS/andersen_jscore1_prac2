export default class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  getAlbums = async () => {
    const response = await fetch(this.albumsUrl);
    return response.json(); //return promise not albums
  };
}
