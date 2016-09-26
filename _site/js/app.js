

App = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true
});

App.ApplicationController = Ember.Controller.extend({
	routeChanged: function(){
    if (window._gaq === undefined) { return; }
	
    var path = this.get('currentPath');
      Em.run.next(function(){
        _gaq.push(['_trackPageview']);
        console.log('page view' + path);
      });
  }.observes('currentPath')
});

App.Router = Ember.Router.extend({
  //rootURL: '/Users/skorulis/Dev/html/skorulis/',
  location: 'hash'
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
  	return { title: 'MAIN'};
  }
});

App.HomeRoute = Ember.Route.extend({
  model: function() {
  	return { title: 'News', news: news};
  },
  activate: function() {
        $(document).attr('title', 'Skorulis.com');
  }
});


App.AndroidRoute = Ember.Route.extend({
  model: function() {
  	return androidApps;
  },
  activate: function() {
        $(document).attr('title', 'Skorulis.com - Android');
    }
});

App.IOSRoute = Ember.Route.extend({
  model: function() {
  	return { title: 'iOS', apps: iOSApps};
  },
  activate: function() {
        $(document).attr('title', 'Skorulis.com - iOS');
    }
});

App.FlashRoute = Ember.Route.extend({
  model: function() {
  	return { title: 'Flash', apps: flashApps};
  },
  activate: function() {
        $(document).attr('title', 'Skorulis.com - Flash');
    }
});

App.FlashContentRoute = Ember.Route.extend({
  model: function(params) {
  	return flashApps[params.id];
  },
  activate: function() {
        $(document).attr('title', 'Skorulis.com - Flash');
    }
});


App.HtmlRoute = Ember.Route.extend({
  model: function() {
  	return { title: 'html', apps: htmlApps};
  },
  activate: function() {
        $(document).attr('title', 'Skorulis.com - Flash');
    }
});

App.Router.map(function() {
  this.route("home", { path: "" });
  this.route("android", { path: "android" });
  this.route("iOS", { path: "iOS" });
  this.route("flash", { path: "flash" });
  this.route("html", { path: "html" });
  this.route("flashContent", { path: "flash-content/:id" });
});

//Views
App.ApplicationView = Ember.View.extend({
  currentPathDidChange: function() {
    Ember.run.next( this, function() {
      this.$("ul.nav li:has(>a.active)").addClass('active');
      this.$("ul.nav li:not(:has(>a.active))").removeClass('active');
    });
  }.observes('controller.currentPath')
});

var androidApps = [ 
	{
		id: 0,
		name: 'PEL',
		img: 'img/pel.png',
		year: 2011,
		link: 'https://market.android.com/details?id=com.skorulis.PEL&amp;feature=search_result',
		isFirst: true
	},
	{
		id: 1,
		name:  'Drinking Buddy',
		img: 'img/db.png',
		year: 2011,
		link: 'https://market.android.com/details?id=com.skorulis.buddy&amp;feature=search_result',
		isFirst: false
	},
	{
		id: 2,
		name: 'Splatballs wallpaper',
		img: 'img/splat2.png',
		year: 2011,
		link: 'https://market.android.com/details?id=com.skorulis.splat.wp&amp;feature=search_result',
		isFirst: false
	}
];

var iOSApps = [ 
	{
		id: 1,
		name: 'Phringly',
		img: 'img/phringly.jpg',
		year: 2013,
		link: 'https://itunes.apple.com/us/app/phringly/id661740558'
	},
];

var flashApps = [ 
	{
		id: 0,
		name: 'Swarmers',
		img: 'img/swarm.png',
		year: 2005,
		width: 550,
		height: 400,
		filename: '/content/flash/swarm.swf'
	},
	{
		id: 1,
		name: 'Swarmers 2',
		img: 'img/swarm2.png',
		year: 2005,
		width: 640,
		height: 480,
		filename: '/content/flash/swarm2.swf'
	},
	{
		id: 2,
		name: 'A.D.A.M',
		img: 'img/adam.png',
		year: 2006,
		width: 640,
		height: 480,
		filename: '/content/flash/adam.swf'
	},
];

var htmlApps = [
	{
		name: 'London housing price map',
		year: 2012,
		img: "img/london.png",
		link: 'london/index.html'
	},
	{
		name: 'The big album of beers',
		year: 2013,
		img: "img/beer.png",
		link: 'beer/index.html'
	},

];

		
$("#mainContent").detach();

