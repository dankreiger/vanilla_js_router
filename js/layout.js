class Layout {
  constructor(...pages) {
    this.pages = pages;
  }

  load() {
    return Promise.all(this.pages.map(page => page.load()));
  }

  show(el) {
    $('.main, .navbar .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
    });

    for (let page of this.pages) {
      const div = document.createElement('div');
      div.classList += 'flex flex-columns flex-align-items-center';
      page.show(div);
      el.appendChild(div);

      // not so nice here - please refactor code below
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


      // buttons
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
      $('.prev-card').click(function() {
        if($('.flashcard').index($('.flashcard.show-flex'))) {
          $('.flashcard.show-flex').removeClass('show-flex').prev().addClass('show-flex');
        } else {
          $('.flashcard.show-flex').removeClass('show-flex');
          $('.flashcard').last().addClass('show-flex');
        }
        if ($('.flashcard').hasClass('flipped-card')) {
          $('.flashcard').removeClass('flipped-card');
          $('.back').addClass('hidden');
          $('.front').removeClass('hidden');
        }
      });

      $('.say-btn').click(function() {
        let artyom = new Artyom();
        artyom.say($('.show-flex .front').text(), {
          lang:$(this).parent().parent().data('lang')
        });
      });
    }
  }
}
