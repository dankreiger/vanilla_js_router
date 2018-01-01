const r = new Router(
  {
    german_submenu: new Layout(new Page('german/german_submenu.html')),
    german_lesson_1: new Layout(new Page('german/lessons/1.html')),
    german_lesson_2: new Layout(new Page('german/lessons/2.html')),
    russian_submenu: new Layout(new Page('russian/russian_submenu.html')),
    russian_lesson_1: new Layout(new Page('russian/lessons/1.html')),
    russian_lesson_2: new Layout(new Page('russian/lessons/2.html')),
    '#default': new Page('menu.html'),
  },
  document.querySelector('.main')
);
