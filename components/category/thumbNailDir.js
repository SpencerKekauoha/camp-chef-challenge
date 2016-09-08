angular.module('campChef')
  .directive('thumbNailDir', function(){
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        $(document).ready(function(){
          $('.thumb1').hover(function(){
            $('.main-img').attr('src', 'http://www.campchef.com/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/e/x/ex60lw700x767.jpg');
          });
          $('.thumb2').hover(function(){
            $('.main-img').attr('src', 'styles/images/single.jpg');
          });
          $('.thumb3').hover(function(){
            $('.main-img').attr('src', 'styles/images/breakfast.jpg');
          });
          $('.thumb4').hover(function(){
            $('.main-img').attr('src', 'styles/images/eggs.jpg');
          });
        });
      }
    };
  });
