class photographer {
  constructor(data) {
    this._name = data.name;
    this._id = data.id;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._picture = data.picture;
  }
  get name() {
    return this.name;
  }
  get id() {
    return this.id;
  }
  get city() {
    return this.city;
  }
  get country() {
    return this.country;
  }
  get tagline() {
    return this.tagline;
  }
  get price() {
    return this.price;
  }
  get picture(){
    return `/assets/${this.picture}`
  }
}
