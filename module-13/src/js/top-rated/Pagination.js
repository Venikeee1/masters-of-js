class Pagination {
  constructor({
    totalPages = 0,
    currentPage = 1,
    perPage = 20,
    onPageChange,
    nextBtnRef,
    prevBtnRef,
  }) {
    this._currentPage = currentPage;
    this.perPage = perPage;
    this.totalPages = totalPages;
    this.onPageChange = onPageChange;
    this.nextBtnRef = nextBtnRef;
    this.prevBtnRef = prevBtnRef;
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);

    this.addListeners();
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(page) {
    this._currentPage = page;
    this.onPageChange(page);
  }

  goToNextPage() {
    if (this.currentPage === this.totalPages) return;

    this.currentPage += 1;
  }

  goToPrevPage() {
    if (this.currentPage === 1) return;

    this.currentPage -= 1;
  }

  goTo(page) {
    this.currentPage = page;
  }

  addListeners() {
    if (this.nextBtnRef) {
      this.nextBtnRef.addEventListener('click', this.goToNextPage);
    }

    if (this.prevBtnRef) {
      this.prevBtnRef.addEventListener('click', this.goToPrevPage);
    }
  }
}

export default Pagination;
