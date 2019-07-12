$(document).ready(function(){
  console.log('ready');

  // remove the injected scripts from the Bindery object
  $('.sv-feed-item.00abindery').prependTo('body');
  $('.sv-feed-item.00bbinderycontrols').prependTo('body');
  $('.sv-feed-item').css({
    "padding": 0,
    "float": "none"
  });

  // remove some unneeded SV stuff
  $('.sv-feed-block, .sv-control, .anchor').remove();

  // change SV image handling from data-src to src
  $('img').removeClass('lazyload');
  $('img').each(function(){
    var imgSRC = $(this).attr('data-src');
    console.log(imgSRC);
    $(this).attr('src',imgSRC);
  });

  // use SV auto-generated classes and reapply them to Bindery objects
  $('.sv-feed-item').each(function(){
    var itemClasses = $(this).attr('class');
    console.log("itemClasses: " + itemClasses);
    $(this).children().children().addClass(itemClasses).removeClass('sv-feed-item');
  });
  // unwrap content objects to remove SV markup
  $('.sv-feed-item-markdown, .sv-feed-item-photo, .sv-feed-inner').unwrap();
  $('p, h1, h2, h3, h4, h5, h6, blockquote, movie, audio, ul, ol, hr, img').unwrap();

});

// ******* do not edit above this line ******* //

// run Bindery after page loads
document.addEventListener('DOMContentLoaded', function() {
  Bindery.makeBook({
    content: '.sv-feed-inner', // #content – don't change
    pageSetup: {
      size: { width: '148.5mm', height: '210mm' },
      margin: { top: '48pt', inner: '18pt', outer: '24pt', bottom: '24pt' },
    },
    printSetup: {
      layout: Bindery.Layout.BOOKLET,
      paper: Bindery.Paper.A4_LANDSCAPE,
      marks: Bindery.Marks.CROP,
      bleed: '12pt',
    },
    rules: [
      Bindery.PageBreak({ selector: 'h2', position: 'avoid' }),
      Bindery.PageBreak({ selector: '.page-break', position: 'after' }),
      Bindery.FullBleedSpread({ selector: '.big-figure' }),
      Bindery.RunningHeader({
        render: (page) => page.isLeft
          ? `${page.number} · ${page.heading.h1}`
          : `${page.heading.h2} · ${page.number}`
      }),
      Bindery.Footnote({
        selector: 'p > a',
        render: (element, number) => {
          return '<i>' + number + '</i>: Link to ' + element.href;
        }
      }),
      Bindery.PageReference({
        selector: 'h2',
        replace: (element, number) => {
          let row = document.createElement('div');
          row.classList.add('toc-row');
          row.innerHTML = element.textContent;
          row.innerHTML += `<span class='num'>${number}</span>`;
          return row;
        }
      }),
    ], // rules
  });
}, false);
