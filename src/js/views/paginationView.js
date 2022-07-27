import View from './View.js';

import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1 and there are other pages
    if (this._data.page === 1 && numPages > 1) return 'page 1, and others';

    //Last page
    if (this._data.page == numPages && numPages > 1) return 'last page';
    //Any other page
    if (this._data.page < numPages) return 'other page';

    //Page 1 and there are no other pages
  }
}

export default new PaginationView();
