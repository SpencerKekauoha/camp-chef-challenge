angular.module('campChef')
  .directive('carouselDir', function(){
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        $(document).ready(function(){
          $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
        });
      }
    };
  });
