export default class Api {
  constructor(options) {
    this.options = options;
  }

  getNews() {
    return fetch(this.options.baseUrl + this.options.query, {
      headers: this.options.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch(err => console.log(err));
  }
}

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=b49ad60a137d4678bb0381a62982fc60
