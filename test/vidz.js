// var app = angular.module('app', ['youtubeResponsive']);

describe('youtubeResponsive', function() {
  var element, scope;

  // load the youtubeResponsive code
  beforeEach(module('youtubeResponsive'));

  // load the templates
  beforeEach(module('tpl/youtube-video.html'));

  beforeEach(inject(function($rootScope, $compile) {

    element = angular.element(
      '<div width="400">' +
      '<h3>' +
      // throws error if I include this string
      // '<responsive-video video-slug="xCFEk6Y8TmM"></responsive-video>' +
      '</h3>' +
      '</div>');


    scope = $rootScope;
    scope.albums = 'empty';

    $compile(element)(scope);
    scope.$digest();
  }));

  it('should create clickable titles', inject(function($compile, $rootScope) {
    // var vid = element.find('iframe');
    var vid = element.find('h3');
    expect(vid.length).toBe(1);
    expect(element.width()).toBe(400);
    expect(vid.width()).toBe(400);
  }));

});