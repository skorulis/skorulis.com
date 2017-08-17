

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
		name: 'Sydney Beer Guide',
		year: '2017',
		divId: 'beerguide',
		images: ["beerguide1.jpg","beerguide2.jpg","beerguide3.jpg","beerguide4.jpg"],
		desc: 'An app to consolidate all the information I\'ve collected over the years about the Sydney craft beer scene. Focuses on providing information over a highly customised UI.',
		involvement: "Personal app which reflects another website that I've built. I had to design and develop the app as well as source or generate the content."
	},
	{
		name: 'Love Your Leftovers',
		year: '2016',
		divId: 'lylo',
		images: ["lylo1.jpeg","lylo2.jpeg","lylo3.jpeg","lylo4.jpeg","lylo5.jpeg"],
		desc: 'Lylo is a cooking app that will help you minimise waste and maximise taste. <br/> <a href="https://itunes.apple.com/au/app/love-your-leftovers/id654877641?mt=8"> iPhone link</a> ',
		involvement: "Took over from a previous developer and added meal planner and shopping list features while simultaneously improving app stability and modernising the user interface."
	},
	{
		name: 'lenslife',
		divId: 'lenslife',
		year: '2016',
		images: ["lenslife1.jpeg","lenslife2.jpeg","lenslife3.jpeg","lenslife4.jpeg","lenslife5.jpeg"],
		desc: 'Lenslife is a brand new photo and video messaging iOS application. <br/> <a href="https://itunes.apple.com/au/app/life-awaits-photo-messenger/id945568543?ls=1&mt=8"> iPhone link</a> ',
		involvement: "I was the sole iOS developer for the project. In addition I was heavily involved with the backend model architecture"
	},
	{
		name: 'ad tech',
		divId: 'adtech',
		year: '2009',
		images: ["070l.png", "071l.png", "072l.png", "073l.png", "074l.png", "ats1l.png", "ats2l.png", "ats3l.png", "ats4l.png"],
		desc: 'iPhone based exhibition program guide for Sydney and Melbourne (no longer available)',
		involvement: "I was the sole iOS developer for the project. This was the first iOS app that I wrote"
	},
	{
		name: "Children's Panadol",
		divId: 'childP',
		year: '2010',
		images: ["cp1l.png", "cp2l.png", "cp3l.png", "cp4l.png", "cp5l.png", "cp6l.png", "cp7l.png"],
		desc: 'Childrens Panadol - Informational application about childrens panadol.<br/> <a href="http://itunes.apple.com/au/app/childrens-panadol/id368157238?mt=8">iPhone link</a>',
		involvement: "I was the sole iOS developer for the project."
	},
	{
		name: "Children's Panadol UAE",
		divId: 'childPUAE',
		year: '2010',
		images: ["cpuae1l.png", "cpuae2l.png", "cpuae3l.png", "cpuae4l.png", "cpuae5l.png", "cpuae6l.png", "cpuae7l.png", ],
		desc: "Redesign of the Australian panadol app for distribution in UAE",
		involvement: "I was the sole iOS developer for the project. It required modifying the original Children's Panadol app to allow reskinning without rewriting the code base."
	},
	{
		name: "Domain",
		divId: 'domain',
		year: '2010',
		images: ["domain1.jpg", "domain2.jpg",],
		desc: "Android version of the already built iPhone application",
		involvement: "I developed the original Domain Android app. Since then it has evolved and been redeveloped."
	},
	{
		name: "Android wallpapers",
		divId: "wallpapers",
		year: '2010',
		images: ["fish1.png", "matrix1.png", "plasma1.png"],
		desc: "Various android live wallpapers built using openGL and android 2D graphics libraries",
		involvement: "I worked together with designers to come up with ideas for live wallpapers which could be sold via the companies existing distribution channels. Originally these started as experiments during down time but sold well so became commonplace."
	},
	{
		name: "Pages Digital",
		divId: "pagesDigital",
		year: '2010',
		images: ["pd1l.png", "pd2l.png", "pd3l.png", "pd4l.png", "pda1.jpg", "pda2.jpg"],
		desc: 'iPhone and Android application to deliver news and gigs from <a href="http://www.pagesdigital.com">Pages Digital</a><br/> <a href="https://market.android.com/details?id=com.miainternational.PagesDigital&feature=search_result">Android link</a><br/> <a href="http://itunes.apple.com/au/app/music-gigs-fashion-guide/id397713753?mt=8">iPhone link</a>',
		involvement: "I was the sole iOS developer for the project."
	},
	{
		name: "What makes me",
		divId: "wmm",
		year: '2011',
		images: ["wmm1l.png", "wmm2l.png", "wmm3l.png", "wmm4l.png", "wmm5l.png", ],
		desc: 'iPhone version of the flash website <a href="http://www.whatmakesme.com.au/">http://www.whatmakesme.com.au/</a>. Allowed the user to build a 3d cube and then submit it to the website. (no longer available)',
		involvement: "I was the sole iOS developer for the project."
	},
	{
		name:"Network Ten App",
		divId: "ten",
		year: '2011',
		images: ["TenAndroid.jpg"],
		desc: 'Androind app to display TV guide information as well as series details. Also let the user set reminders for particular TV shows'
		},
	{
		name: "Shazam player",
		divId: "shazam",
		year: '2011',
		images: ["sp1.jpg", "sp2.jpg", "sp3.jpg", "sp4.jpg"],
		desc: 'iPhone / iPad application that showed lyrics in a karaoke style to songs on the users device. Originally built as a standalone application it has now been combined into the standard Shazam application. <a href="https://www.shazam.com/music/web/productfeatures.html?id=587">Feature info</a>',
		involvement: "I was the sole iOS developer for the project."
	},
	{
		name: "MPme",
		divId: "mpme",
		year: '2011',
		images: ["mpme1.jpeg", "mpme2.jpeg", "mpme3.jpeg", "mpme4.jpeg",],
		desc: 'MPme - iPad application to listen to online radio. Backend servers continually monitored radio stations to create a searchable database of online radio stations. Recommendations could then be generated for the user based on previous listening habits <a href="http://radio.mpme.com/">Product website</a>',
		involvement: "I helped out the existing team who worked on this project to fix bugs and add smaller features"
	},
	{
		name: "Reuters Olympics London 2012",
		divId: "olympics",
		year: '2012',
		images: ["olympics1.jpg", "olympics2.jpg", "olympics3.jpg", "olympics4.jpg"],
		desc: 'iPhone / iPad application to display Reuters olympic photography in a unique fashion <a href="http://blog.thomsonreuters.com/index.php/reuters-olympics-london-2012-app/">Description</a>',
		involvement: "I was one of 2 iOS developers working on this project. I was primarily responsible for implementing the networking layer and creating the infinite photo scroll."
	},
	{
		name: "Boardlink",
		divId: "boardlink",
		year: '2013',
		images: ["boardlink.jpeg"],
		desc: 'iPad application to help company board members manage board meeting information. <a href="https://itunes.apple.com/au/app/boardlink/id390462758?mt=8">iTunes link</a>',
		involvement: "I took over development of this app to modernise and add new features but mostly to get development back on track. Once the project timelines were back on track I handed it off to other developers."
	},
	{
		name: "Eikon",
		divId: "eikon",
		year: '2013',
		images: ["eikon1.jpeg", "eikon2.jpeg", "eikon3.jpeg", "eikon4.jpeg", "eikon5.jpeg", ],
		desc: 'Large scale iOS application used in the finance industry <a href="https://itunes.apple.com/au/app/thomson-reuters-eikon/id551988464?mt=8">iTunes link</a>',
		involvement: "Eikon is a gigantic product. I was involved with transitioning development from an outsourced team to an in house team that was being put together"
	}
	
		
];

for(i = 0; i < portfolio.length; ++i) {
	for(j = 0; j < portfolio[i].images.length; ++j) {
		portfolio[i].images[j] = "img/" + portfolio[i].images[j]; 
	}
}
		
$("#mainContent").detach();

