class Layout {
  constructor(...pages) {
    this.pages = pages;
  }

  load() {
    return Promise.all(this.pages.map(page => page.load()));
  }

  show(el) {
    for (let page of this.pages) {
      const div = document.createElement('div');
      div.classList += 'flex flex-columns flex-align-items-center';
      page.show(div);
      el.appendChild(div);

      // not so nice here - please refactor
      $('.flashcard').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('flipped-card');
        if ($(this).hasClass('flipped-card')) {
          $('.front').addClass('hidden');
          $('.back').removeClass('hidden');
        } else {
          $('.back').addClass('hidden');
          $('.front').removeClass('hidden');
        }
      });

      $('.next-card').click(function() {
        if($('.flashcard').index($('.flashcard.show-flex')) < $('.flashcard').length - 1) {
          $('.flashcard.show-flex').removeClass('show-flex').next().addClass('show-flex');
        } else {
          $('.flashcard.show-flex').removeClass('show-flex');
          $('.flashcard').first().addClass('show-flex');
        }
        if ($('.flashcard').hasClass('flipped-card')) {
          $('.flashcard').removeClass('flipped-card');
          $('.back').addClass('hidden');
          $('.front').removeClass('hidden');
        }
      });
    }
  }
}
