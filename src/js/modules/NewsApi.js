export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getNews(query) {
    let rightNow = new Date();
    let rightNowIsoString = rightNow.toISOString();

    let weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    let weekAgoIsoString = weekAgo.toISOString();

    let numArticles = 100;

    const language = "ru";

    let url = `${this.options.baseUrl}?q=${query}&from=${weekAgoIsoString}&to=${rightNowIsoString}&pageSize=${numArticles}&language=${language}`;

    return fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": this.options.apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // return Promise.reject(`Ошибка: ${res.status}`);
        return Promise.reject(res.json());
      })

      .catch((err) => console.log(err));
  }
}
