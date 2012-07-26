# jQuery Gallery

Gallery is a jQuery plugin designed to provide simple image scaling. The gallery supports captions and basic animations.

## Installation

To install copy the *images*, *javascripts*, and *stylesheets* directories into your project and add the following snippet to the header:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js" type="text/javascript"></script>
    <script src="javascripts/jquery.gallery.js" type="text/javascript"></script>
    <link href="stylesheets/style.css" rel="stylesheet" type="text/css" />
  
## Examples

Setting up a gallery is easy. The following snippet is a good start:
    
    <div class="gallery">
      <div class="item">
        <div class="outline">
          <image src="samples/sample-01.png" class="preview" />
        </div>
      </div>
      <div class="item">
        <div class="outline">
          <image src="samples/sample-02.png" class="preview" />
        </div>
      </div>
      <div class="item">
        <div class="outline">
          <image src="samples/sample-03.png" class="preview" />
        </div>
      </div>
      <div class="item">
        <div class="outline">
          <image src="samples/sample-04.png" class="preview" />
        </div>
      </div>
      <div class="item">
        <div class="outline">
          <image src="samples/sample-05.png" class="preview" />
        </div>
      </div>
      <div class="item">
        <div class="outline">
          <image src="samples/sample-06.png" class="preview" />
        </div>
      </div>
    </div>
  
    <script type="text/javascript">
      $('.gallery').gallery();
    </script>

## Copyright

Copyright (c) 2010 - 2012 Kevin Sylvestre. See LICENSE for details.
