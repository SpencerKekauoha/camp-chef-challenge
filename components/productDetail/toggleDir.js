angular.module('campChef')
  .directive('toggleDir', function(){
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        $(document).ready(function(){
          $(".myLink").bind("click", function() {
              $(".myDiv").hide();
              var divId= $(this).attr("divId");
              $("#" + divId).show();
          });
        });
      }
    };
  });

//google css focus if foucs make the background grey
