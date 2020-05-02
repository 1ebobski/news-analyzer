export default class GithubApi {
  constructor(options) {
    this.options = options;
  }

  getCommits() {
    return fetch(
      this.options.url
      //   {
      //   method: "GET",
      //   headers: {
      //     Authorization: "token " + this.options.oAuthToken,
      //   },
      // }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => console.log(err));
  }
}
