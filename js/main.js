const r = new Router(
  {
    german: new Layout(new Page('menu.html'), new Page('german.html')),
    russian: new Layout(new Page('menu.html'), new Page('russian.html')),
    '#default': new Page('menu.html'),
  },
  document.querySelector('.main')
);
