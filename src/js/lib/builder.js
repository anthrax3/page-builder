$(function() {
  'use strict'

  // Expand control
  if ( $('.js_expand').length ) {
    $('.js_expand').click(function() {
      $('.js_left-menu').toggleClass('left-menu-hide');
      $('.js_content-area').toggleClass('content-area-wide');
      $('.js_top-nav').find('.button').toggleClass('is-small');
      $('.js_top-navbar').toggleClass('top-navbar-reduced')
      $('#stage').find('*').attr('contenteditable', false);
    });
  }


  // Resize controls
  $('[data-resize]').each(function() {
    $(this).click(function() {
      $('.js_pb_stage').css('max-width', $(this).attr('data-resize'));
    });
  });


  // Export HTML functionaliy
  var stageMarkup;
  $('[data-save-modal]').click(function() {
    stageMarkup = $('#stage').html();
    $('.js_markup-textarea').text(stageMarkup);
  });

  var starterHtml = [
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="Your Page Description"><meta name="keywords" content="keyword 1, keyword 2"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><title>Your Page Title</title></head><body>',
    '</body></html>'
  ];

  if ( $('.js_starter-html').length ) {
    $(".js_starter-html").change(function() {
      if ( $(this).is(':checked') ) {
        $('.js_markup-textarea').text(starterHtml[0] + stageMarkup + starterHtml[1]);
      } else {
        $('.js_markup-textarea').text(stageMarkup);
      }
    });
  }


  // Reset control
  $('#reset-page').click(function() {
    $('#stage').html('');
  });


  // Set stage height
  if ( $('#stage').length ) {
    var stageHeight = $('body').height();
    $('#stage').css('max-height', stageHeight - $('.js_top-navbar').height());
  }


  // Widgets
  $('[data-widget]').each(function () {
    $(this).click(function() {
      $('.pb_stage_drag').remove();

      // Heading widget
      if ( $(this).attr('data-widget') === 'heading' ) {
        $('#stage').append('<h2>Your H1 Heading</h2>');
      }

      // Button widget
      if ( $(this).attr('data-widget') === 'button' ) {
        $('#stage').append('<button class="button">Button</button>');
      }

      // Hero widget
      if ( $(this).attr('data-widget') === 'hero' ) {
        $('#stage').append('<section class="hero is-medium is-primary is-bold"><div class="hero-body"><div class="container"><h1 class="title"> Primary bold title</h1><h2 class="subtitle">Primary bold subtitle</h2></div></div></section>');
      }

      // Image widget
      if ( $(this).attr('data-widget') === 'image' ) {
        $('#stage').append('<img src="https://via.placeholder.com/1150x250" alt="Placeholder image" />');
      }

      // Box widget
      if ( $(this).attr('data-widget') === 'box' ) {
        $('#stage').append('<div class="box">Box component</div>');
      }

      // Horizontal Rule widget
      if ( $(this).attr('data-widget') === 'horizontal-rule' ) {
        $('#stage').append('<hr>');
      }

      // Tag widget
      if ( $(this).attr('data-widget') === 'tag' ) {
        $('#stage').append('<span class="tag is-primary">Tag</span>');
      }

      // Message widget
      if ( $(this).attr('data-widget') === 'message' ) {
        $('#stage').append('<article class="message is-info"><div class="message-header"><p>Info</p><button class="delete" aria-label="delete"></button></div><div class="message-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor.</div></article>')
      }

      $('#stage').find('*').attr('contenteditable', true);
    });
  });


  // Modal functionality
  $('[data-modal]').click(function() {
    $('body').find($(this).attr('data-modal')).toggleClass('is-active');
  });

  if ( $('.js_modal-bg, .js_modal-close').length ) {
    $('.js_modal-bg, .js_modal-close').click(function() {
      $(this).closest('.modal').removeClass('is-active');
      $(this).closest('.modal').find('.js_starter-html').prop('checked', false);
    });
  }

});
