var vidz = angular.module('youtubeResponsive', []);

vidz.directive('responsiveVideo', function($rootScope) {
    return {
      templateUrl: 'tpl/youtube-video.html',
      restrict: 'EA',
      scope: {
        videoSlug: '@'
      },
      replace: true,
      link: function postLink($scope, element, attrs) {

        $scope.getWidth = function() {
          return parseInt(element.css('width'), 10) * (9/16);
        };

        $scope.$watch($scope.getWidth, function(newValue, oldValue) {
          $scope.height = newValue;
        });

        $(window).on('resize onorientationchange', $.throttle(250, function() {
          $scope.$apply();
        }));
      }
    };
  });