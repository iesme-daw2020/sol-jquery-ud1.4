$(() => {
  /**
   * Practica 4
   * */
  // Primer punto
  $anchorHref = $('<a href="#top">Back to the top</a>');
  $anchorId = $('<a id="#top"></a>');
  //$('div.chapter p').after($anchorHref);
  //$('body').prepend($anchorId);

  // Segundo punto
  //$('#footer').before($('span.footnote'));

  // Tercer punto
  //$('span.footnote').wrapAll('<ol id="notes"></ol>').wrap('<li></li>');

  // Cuarto punto
  $('span.footnote')
    .insertBefore('#footer')
    .wrapAll('<ol id="notes"></ol>')
    .wrap('<li></li>');

  // Quinto punto
  $anchorHref.insertAfter('div.chapter p');
  $anchorId.prependTo('body');
});
