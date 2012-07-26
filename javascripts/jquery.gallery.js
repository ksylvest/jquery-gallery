/*!
 * jQuery Gallery
 *
 * Copyright 2010 - 2012 Kevin Sylvestre
 */

(function ($) {

  $.fn.gallery = function(options) {
  
    var settings = {
      item: '.item',
      outline: '.outline',
      preview: '.preview',
      caption: '.caption',
      duration: 500,
      easing: 'easeInOutBack',
      enter: {
        'padding' : '0px',
        'top'     : '-70px',
        'left'    : '-120px',
        'right'   : '-120px',
        'bottom'  : '-70px',
        'width'   : '480px',
        'height'  : '270px',
        'z-index' : '2000',
      },
      leave: {
        'padding' : '0px',
        'top'     : '0px',
        'left'    : '0px',
        'right'   : '0px',
        'bottom'  : '0px',
        'width'   : '240px',
        'height'  : '135px',
        'z-index' : '1000',
      },
    };
  
    if (options) ($.extend(settings, options));
  
    var $items = $(this).find(settings['item']);
  
    $items.mouseenter(function () {
    
      var $item = $(this);
      var $outline = $item.find(settings['outline']);
      var $preview = $item.find(settings['preview']);
      var $caption = $item.find(settings['caption']);
      
      $({ z: ~~$item.css('zIndex') }).animate({ z: settings['enter']['z-index'] }, {
        step: function(now) { $item.css({ 'z-index': ~~this.z }) },
        duration: settings['duration']
      });

      $outline.stop().animate({ 
        'padding-top'    : settings['enter']['padding'],
        'padding-left'   : settings['enter']['padding'],
        'padding-bottom' : settings['enter']['padding'],
        'padding-right'  : settings['enter']['padding'],
        'top'            : settings['enter']['top'    ],
        'left'           : settings['enter']['left'   ],
        'right'          : settings['enter']['right'  ],
        'bottom'         : settings['enter']['bottom' ],
        'width'          : settings['enter']['width'  ],
      }, settings['duration'], settings['easing']);
    
      $preview.stop().animate({
        'height' : settings['enter']['height'  ],
        'width'  : settings['enter']['width'   ],
      }, settings['duration'], settings['easing']);
    
      $caption.css({
        'width'  : settings['enter']['width'   ],
      });
    
      $caption.show(settings['duration']);
    
    });
  
    $items.mouseleave(function () {
    
      var $item = $(this);
      var $outline = $item.find(settings['outline']);
      var $preview = $item.find(settings['preview']);
      var $caption = $item.find(settings['caption']);
    
      $({ z: ~~$item.css('zIndex') }).animate({ z: settings['leave']['z-index'] }, {
        step: function(now) { $item.css({ 'z-index': ~~this.z }) },
        duration: settings['duration']
      });

      $outline.stop().animate({ 
        'padding-top'    : settings['leave']['padding'],
        'padding-left'   : settings['leave']['padding'],
        'padding-bottom' : settings['leave']['padding'],
        'padding-right'  : settings['leave']['padding'],
        'top'            : settings['leave']['top'    ],
        'left'           : settings['leave']['left'   ],
        'right'          : settings['leave']['right'  ],
        'bottom'         : settings['leave']['bottom' ],
        'width'          : settings['leave']['width'  ],
      }, settings['duration'], settings['easing']);
    
      $preview.stop().animate({
        'height' : settings['leave']['height'  ],
        'width'  : settings['leave']['width'   ],
      }, settings['duration'], settings['easing']);
    
      $caption.css({
        'width'  : settings['leave']['width'   ],
      });
    
      $caption.hide(settings['duration']);
    
    });
  
  };
  
}) (jQuery);
