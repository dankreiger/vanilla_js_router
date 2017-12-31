const r = new Router(
  {
    about: new Layout(new Page('menu.html'), new Page('about.html')),
    russian: new Layout(new Page('menu.html'), new Page('russian.html')),
    '#default': new Page('menu.html'),
  },
  document.querySelector('main')
);
