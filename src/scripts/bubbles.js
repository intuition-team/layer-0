import $ from 'jquery';

$(() => {
  const $bubbles = $('.bubbles');

  const COLORS = [
    'Coral',
    'Tomato',
    'DeepPink',
    'Crimson',
    'DarkOrchid',
    'MediumSlateBlue',
    'RoyalBlue',
    'LightSeaGreen',
    'DarkTurquoise',
    'Turquoise',
    'LimeGreen',
    'YellowGreen',
    'DarkKhaki',
    'DarkGoldenRod',
    'Sienna',
    'Gray',
    'DarkSlateGray',
  ];

  const COUNT = 80;
  const TOP_RANGE = [0, $bubbles.outerHeight(true) - 20];
  const LEFT_RANGE = [0, $bubbles.outerWidth(true) - 40];
  const SIZE_RANGE = [20, 40];
  const COLORS_RANGE = [0, COLORS.length];

  const randomFromRange = (start, end) =>
    start + Math.floor(Math.random() * end);
  const randomColor = () => COLORS[randomFromRange(...COLORS_RANGE)];

  const renderBubble = ({ top, left, size, background }) => {
    $('<div></div>')
      .addClass('bubble')
      .css({
        top,
        left,
        background,
        width: size,
        height: size,
      })
      .mouseenter(({ currentTarget }) =>
        $(currentTarget).css({ background: randomColor() })
      )
      .appendTo($bubbles);
  };

  for (let i = 0; i < COUNT; i += 1) {
    renderBubble({
      top: randomFromRange(...TOP_RANGE),
      left: randomFromRange(...LEFT_RANGE),
      size: randomFromRange(...SIZE_RANGE),
      background: randomColor(),
    });
  }
});
