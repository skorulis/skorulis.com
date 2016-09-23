

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
  	return { title: 'Portfolio', portfolio: portfolio};
  },
  activate: function() {
        $(document).attr('title', 'Alex Skorulis - Portfolio');
  }
});

App.Router.map(function() {
  this.route("home", { path: "" });
});

//Views
App.ApplicationView = Ember.View.extend({
  currentPathDidChange: function() {
    Ember.run.next( this, function() {
      this.$("ul.nav li:has(>a.active)").addClass('active');
      this.$("ul.nav li:not(:has(>a.active))").removeClass('active');
    });
  }.observes('controller.currentPath'),
  
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
		for(i = 0; i < portfolio.length; ++i) {
			var s = "#" + portfolio[i].divId;
		}
    });
  }
  
});

var portfolio = [
	{
		name: 'ad tech',
		divId: 'adtech',
		images: ["070l.png", "071l.png", "072l.png", "073l.png", "074l.png", "ats1l.png", "ats2l.png", "ats3l.png", "ats4l.png",],
		desc: 'iPhone based exhibition program guide for Sydney and Melbourne (no longer available)'
	},
	{
		name: "Children's Panadol",
		divId: 'childP',
		images: ["cp1.png", "cp2.png", "cp3.png", "cp4.png", "cp5.png", "cp6.png", "cp7.png"],
		desc: 'Childrens Panadol - Informational application about childrens panadol.<br/> <a href="http://itunes.apple.com/au/app/childrens-panadol/id368157238?mt=8">iPhone link</a>'
	},
	{
		name: "Children's Panadol UAE",
		divId: 'childPUAE',
		images: ["cpuae1.png", "cpuae2.png", "cpuae3.png", "cpuae4.png", "cpuae5.png", "cpuae6.png", "cpuae7.png", ],
		desc: "Redesign of the Australian panadol app for distribution in UAE"
	},
	{
		name: "Domain",
		divId: 'domain',
		images: ["domain1.jpg", "domain2.jpg",],
		desc: "Android version of the already built iPhone application"
	},
	{
		name: "Android wallpapers",
		divId: "wallpapers",
		images: ["fish1.png", "matrix1.png", "plasma1.png"],
		desc: "Various android live wallpapers built using openGL and android 2D graphics libraries"
	},
	{
		name: "Pages Digital",
		divId: "pagesDigital",
		images: ["pd1l.png", "pd2l.png", "pd3l.png", "pd4l.png", "pda1.jpg", "pda2.jpg"],
		desc: 'iPhone and Android application to deliver news and gigs from <a href="http://www.pagesdigital.com">Pages Digital</a><br/> <a href="https://market.android.com/details?id=com.miainternational.PagesDigital&feature=search_result">Android link</a><br/> <a href="http://itunes.apple.com/au/app/music-gigs-fashion-guide/id397713753?mt=8">iPhone link</a>'
	},
	{
		name: "What makes me",
		divId: "wmm",
		images: ["wmm1l.png", "wmm2l.png", "wmm3l.png", "wmm4l.png", "wmm5l.png", ],
		desc: 'iPhone version of the flash website <a href="http://www.whatmakesme.com.au/">http://www.whatmakesme.com.au/</a>. Allowed the user to build a 3d cube and then submit it to the website. (no longer available)'
	},
	{
		name:"Network Ten App",
		divId: "ten",
		images: ["TenAndroid.jpg"],
		desc: 'Androind app to display TV guide information as well as series details. Also let the user set reminders for particular TV shows'
		},
	{
		name: "Shazam player",
		divId: "shazam",
		images: ["sp1.jpg", "sp2.jpg", "sp3.jpg", "sp4.jpg"],
		desc: 'iPhone / iPad application that showed lyrics in a karaoke style to songs on the users device. Originally built as a standalone application it has now been combined into the standard Shazam application. <a href="https://www.shazam.com/music/web/productfeatures.html?id=587">Feature info</a>'
	},
	{
		name: "MPme",
		divId: "mpme",
		images: ["mpme1.jpeg", "mpme2.jpeg", "mpme3.jpeg", "mpme4.jpeg",],
		desc: 'MPme - iPad application to listen to online radio. Backend servers continually monitored radio stations to create a searchable database of online radio stations. Recommendations could then be generated for the user based on previous listening habits <a href="http://radio.mpme.com/">Product website</a>'
	},
	{
		name: "Reuters Olympics London 2012",
		divId: "olympics",
		images: ["olympics1.jpg", "olympics2.jpg", "olympics3.jpg", "olympics4.jpg"],
		desc: 'iPhone / iPad application to display Reuters olympic photography in a unique fashion <a href="http://blog.thomsonreuters.com/index.php/reuters-olympics-london-2012-app/">Description</a>'
	},
	{
		name: "Boardlink",
		divId: "boardlink",
		images: ["boardlink.jpeg"],
		desc: 'iPad application to help company board members manage board meeting information. <a href="https://itunes.apple.com/au/app/boardlink/id390462758?mt=8">iTunes link</a>'
	},
	{
		name: "Eikon",
		divId: "eikon",
		images: ["eikon1.jpeg", "eikon2.jpeg", "eikon3.jpeg", "eikon4.jpeg", "eikon5.jpeg", ],
		desc: 'Large scale iOS application used in the finance industry <a href="https://itunes.apple.com/au/app/thomson-reuters-eikon/id551988464?mt=8">iTunes link</a>'
	}
	
		
	

];

for(i = 0; i < portfolio.length; ++i) {
	for(j = 0; j < portfolio[i].images.length; ++j) {
		portfolio[i].images[j] = "img/" + portfolio[i].images[j]; 
	}
}
		
$("#mainContent").detach();

