export default class SearchInput {
  constructor(searchInputElement) {
    this.searchInputElement = searchInputElement;
  }
  // validateInput() {
  //   this.searchInputElement.
  // }
  fetchQuery() {
    return this.searchInputElement.value;
  }
}
