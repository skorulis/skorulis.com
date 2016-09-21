function addAllBeers() {

var ret = [];
ret.push(App.Beer.create({
	name:'Black Sheep Ale',
	pct:4.4,
	desc:'Black and average',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/485855_10151283325868745_1357546171_n.jpg?oh=3ffe5437bb6d58588b2b173b3e32c8fa&oe=5866FC5F',
	link:'https://www.facebook.com/photo.php?fbid=10151283325868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg',
	pct:4.0,
	desc:'Standard British pub beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/536444_10151283326338745_1988442948_n.jpg?oh=3831373c0091fd3602f5da14b130c4b7&oe=5876FA93',
	link:'https://www.facebook.com/photo.php?fbid=10151283326338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amstel',
	pct:5.0,
	desc:'Easier to drink and stronger than most beers you get in a British pub',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1027_10151283326853745_295569657_n.jpg?oh=a87c1636d3645cbf89cf2b03decde2f0&oe=5838E15B',
	link:'https://www.facebook.com/photo.php?fbid=10151283326853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Webster\'s Bitter',
	pct:3.5,
	desc:'Shit bloke, shit beer',
	score:1,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/65588_10151283327318745_1619592085_n.jpg?oh=f9a5cef387cb49b9ab6026726f96d522&oe=58807966',
	link:'https://www.facebook.com/photo.php?fbid=10151283327318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hürlimann lager',
	pct:5.0,
	desc:'Rather good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/375874_10151283327863745_1299694311_n.jpg?oh=071cdc044dd239a7fa1a0938ea04ee19&oe=58732B9D',
	link:'https://www.facebook.com/photo.php?fbid=10151283327863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kronenbourg',
	pct:5.0,
	desc:'Standard fare',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/60247_10151283328373745_1855333949_n.jpg?oh=30e4e19e71c87caa4e961a12bab3145b&oe=587627F3',
	link:'https://www.facebook.com/photo.php?fbid=10151283328373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Veltins',
	pct:4.8,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/32339_10151296241778745_603957055_n.jpg?oh=8c0788e1c8b6e65e2cb6df2176e1a553&oe=58699CD7',
	link:'https://www.facebook.com/photo.php?fbid=10151296241778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Smith\'s Extra stout ',
	pct:4.5,
	desc:'Like Guinness with a taste of ashtray',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/317875_10151303867498745_1098897913_n.jpg?oh=cc2594a33899d5b212a9315ad7463eda&oe=588255E7',
	link:'https://www.facebook.com/photo.php?fbid=10151303867498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ALEXIOS',
	pct:4.0,
	desc:'The beer telling me to go back to the Greek Islands',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/16981_10151303885378745_1227406993_n.jpg?oh=26e754f7f22ec2fc0b708d29de1b83a1&oe=58736F26',
	link:'https://www.facebook.com/photo.php?fbid=10151303885378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red stripe',
	pct:4.7,
	desc:'Brick lane special',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/378973_10151303950693745_516519003_n.jpg?oh=52c7e991ee52ec52f3b44210f8713008&oe=5870F056',
	link:'https://www.facebook.com/photo.php?fbid=10151303950693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'1892',
	pct:3.3,
	desc:'Warm, flat and nutty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/3705_10151315682573745_1414196769_n.jpg?oh=c379083546f5fa87d86d0a6e0eae8b84&oe=586EC41E',
	link:'https://www.facebook.com/photo.php?fbid=10151315682573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra',
	pct:4.8,
	desc:'Indian restaurant special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/557801_10151315682973745_793850180_n.jpg?oh=94aaeac19acb5c1aeb72b2bcb82bac8e&oe=5879C540',
	link:'https://www.facebook.com/photo.php?fbid=10151315682973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king ipa',
	pct:3.6,
	desc:'Just tastes a bit wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/189043_10151315683658745_1443395751_n.jpg?oh=7f1a814be99c5b4d9616183418fd0b9f&oe=587DC5B3',
	link:'https://www.facebook.com/photo.php?fbid=10151315683658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grolsch',
	pct:5.0,
	desc:'Crisp, refreshing, easily overlooked',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/60758_10151315684663745_854245528_n.jpg?oh=0e4dd296093c07fef3a3b0d41c53c87a&oe=583B1FA4',
	link:'https://www.facebook.com/photo.php?fbid=10151315684663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noble',
	pct:5.0,
	desc:'A confusing bunch of flavours',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/546983_10151331650653745_1841706536_n.jpg?oh=f1c793f885724e43bbd2c6a7fe3ce03c&oe=583781AC',
	link:'https://www.facebook.com/photo.php?fbid=10151331650653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yankee',
	pct:4.3,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/550717_10151331657283745_2008475143_n.jpg?oh=49bcaa9466cc058d59b65f6971d5cfae&oe=587F8592',
	link:'https://www.facebook.com/photo.php?fbid=10151331657283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Dog\'s Bollocks',
	pct:5.9,
	desc:'Tastes just like the name',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/15111_10151331658713745_2003438525_n.jpg?oh=56a836ea0f66911e71852ee1b4c81afa&oe=5867BB12',
	link:'https://www.facebook.com/photo.php?fbid=10151331658713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double maxim',
	pct:4.7,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/378563_10151331661023745_1836111728_n.jpg?oh=5b82aa29f94f88cd75f0bf98fd9b73e7&oe=5839B2B4',
	link:'https://www.facebook.com/photo.php?fbid=10151331661023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Black',
	pct:4.7,
	desc:'',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/293855_10151331663163745_2099861357_n.jpg?oh=0551b80d1a95d9c2a572325037738347&oe=587BBFC7',
	link:'https://www.facebook.com/photo.php?fbid=10151331663163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Rev. James',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542989_10151331668478745_1709226964_n.jpg?oh=3935f575069956e7003887a3a3ee216d&oe=5867A27E',
	link:'https://www.facebook.com/photo.php?fbid=10151331668478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double Dragon',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/148410_10151356728003745_1112766365_n.jpg?oh=9fd2622bb54b795bb79ea55a5eb92ab6&oe=58397939',
	link:'https://www.facebook.com/photo.php?fbid=10151356728003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pride of Oxford',
	pct:5.0,
	desc:'Just a very average beverage',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/558943_10151356728198745_2042204432_n.jpg?oh=6ad50efb71234c7a51d46051bb492eac&oe=58792FA2',
	link:'https://www.facebook.com/photo.php?fbid=10151356728198745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bishops finger',
	pct:5.4,
	desc:'Written on the back: At 5.4% It\'s near the knuckle. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/533497_10151356728563745_544345125_n.jpg?oh=f9da668e20ec8bca9ca9bb75f31c155a&oe=5838C091',
	link:'https://www.facebook.com/photo.php?fbid=10151356728563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Dark Ale',
	pct:4.5,
	desc:'Flavoursome',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/521606_10151396303973745_830089732_n.jpg?oh=b43ec37808d3ae0a64f7c7b13c72e3ac&oe=586A9D76',
	link:'https://www.facebook.com/photo.php?fbid=10151396303973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Golden Ale',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480275_10151356728773745_1268031446_n.jpg?oh=baa1cc1bb5e0cdc63fd02962cf2bc83f&oe=58671ED5',
	link:'https://www.facebook.com/photo.php?fbid=10151356728773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Stout',
	pct:4.5,
	desc:'Very smooth and mild with a hint of chocolate',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/16733_10151396304708745_66219487_n.jpg?oh=8918ebeb9064f0b6cbf37d954130e6be&oe=5884B5A5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tesco Lager',
	pct:4,
	desc:'You get what you pay for',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530426_10151368077248745_1651993820_n.jpg?oh=f6d066d3b349a75a95087b3a1dba57a7&oe=586835A0',
	link:'https://www.facebook.com/photo.php?fbid=10151368077248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Abbey Beer',
	pct:6.5,
	desc:'Cool bottle. Terrible taste',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/424785_10151368077728745_484320810_n.jpg?oh=0870f8c3324a731f69ccb6ed88d153df&oe=583B707F',
	link:'https://www.facebook.com/photo.php?fbid=10151368077728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S Belgian Lager',
	pct:5.0,
	desc:'Easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/734776_10151461674018745_617552379_n.jpg?oh=e82048b744a4a0d326a29c09a32608b6&oe=587FFD88',
	link:'https://www.facebook.com/photo.php?fbid=10151461674018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S French Lager',
	pct:4,
	desc:'Not as good as the Belgian one',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486557_10151563840963745_1674492557_n.jpg?oh=b5d9acd9c3ef574cb423929e25183562&oe=5870C881',
	link:'https://www.facebook.com/photo.php?fbid=10151563840963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennant\'s super',
	pct:9.0,
	desc:'If you\'re really drunk but want to be mike Stuart drunk then this is the beer for you',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/524743_10151649176508745_61534800_n.jpg?oh=178e3ad6c1b37b7a864b3495a3807a25&oe=587FE430',
	link:'https://www.facebook.com/photo.php?fbid=10151649176508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kestrel Super lager',
	pct:9.0,
	desc:'Must be consumer quickly. Before the taste sets in',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/16679_10151428525733745_2106487431_n.jpg?oh=6c2c38de0e60acf0e386345a7854d497&oe=587AD7AA',
	link:'https://www.facebook.com/photo.php?fbid=10151428525733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg special',
	pct:9.0,
	desc:'Tennants super for the discerning bum',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/429525_10151356729088745_1307200238_n.jpg?oh=096cbac63e98bd6c516aa7884bbea27a&oe=58705A12',
	link:'https://www.facebook.com/photo.php?fbid=10151356729088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crest Super',
	pct:10,
	desc:'As much as I like being able to drink half a bottle of wine in a single can of beer, this is just foul',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923052_10151649178723745_1627305958_n.jpg?oh=758e63079352cc285eb542e18539d045&oe=587DD714',
	link:'https://www.facebook.com/photo.php?fbid=10151649178723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old empire',
	pct:5.7,
	desc:'Not at all an ipa ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/73511_10151356728858745_1899006793_n.jpg?oh=7a12bb022ef4787cd8c69fd660ff3dfd&oe=583D6620',
	link:'https://www.facebook.com/photo.php?fbid=10151356728858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wainwrights',
	pct:4.1,
	desc:'Not too bad at all',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/401229_10151356729468745_228573429_n.jpg?oh=7bcb51bc5976ab38cf1269c09a9963ac&oe=58862B68',
	link:'https://www.facebook.com/photo.php?fbid=10151356729468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hobgoblin',
	pct:5.2,
	desc:'An average ale',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484314_10151368077318745_996314221_n.jpg?oh=daa2b48cc097a6b51c5f622823f34316&oe=583D4B0A',
	link:'https://www.facebook.com/photo.php?fbid=10151368077318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'King goblin',
	pct:6.6,
	desc:'Better than the standard hobgoblin',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1656157_10152293086848745_1506561898_n.jpg?oh=0b8f2b87914e80ee751112e560d06450&oe=5870F28B',
	link:'https://www.facebook.com/photo.php?fbid=10152293086848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocking Rudolph',
	pct:4.2,
	desc:'Makes me feel all Christmasy',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/481704_10151368077713745_2078288487_n.jpg?oh=8d4a84f27c3ab94d8d731018b2db8227&oe=5866D990',
	link:'https://www.facebook.com/photo.php?fbid=10151368077713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hopping Hare',
	pct:4.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/399346_10151380245588745_647361323_n.jpg?oh=d0024f433bff47d73a6ac8bb16e0fbfa&oe=583D1EF3',
	link:'https://www.facebook.com/photo.php?fbid=10151380245588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Champion',
	pct:5.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/537673_10151380245638745_991276182_n.jpg?oh=c14767b9bf265fb6d9c76851ad93cdc8&oe=5866389D',
	link:'https://www.facebook.com/photo.php?fbid=10151380245638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Glory',
	pct:4.5,
	desc:'Peach flavoured beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9160_10151380243323745_1001869256_n.jpg?oh=e02f29368bafa49cba2bcab56a4d074d&oe=5876C8AC',
	link:'https://www.facebook.com/photo.php?fbid=10151380243323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fursty Ferret',
	pct:4.4,
	desc:'The name is better than the taste',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/224528_10151303867818745_1700962680_n.jpg?oh=c71d5d533708bcb7e241216a89d6a829&oe=58704F8E',
	link:'https://www.facebook.com/photo.php?fbid=10151303867818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Tangle Foot',
	pct:5,
	desc:'A standard beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/379340_10151461671708745_1194104860_n.jpg?oh=9e65439d346b0cfb3f148afee667ac2b&oe=58394B44',
	link:'https://www.facebook.com/photo.php?fbid=10151461671708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Firkin fox',
	pct:4.3,
	desc:'Firkin terrible',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542858_10151563945898745_1345565555_n.jpg?oh=d8f9dc1a1047d495f92e8c58c76ee7c0&oe=5876E95F',
	link:'https://www.facebook.com/photo.php?fbid=10151563945898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Poacher\'s choice',
	pct:5.7,
	desc:'You can really taste the liquorice. Not sure why someone put liquorice in beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555262_10151461672288745_1320726068_n.jpg?oh=626a7d8d426a2d077d6cac2382fc4059&oe=58846EF0',
	link:'https://www.facebook.com/photo.php?fbid=10151461672288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger blandford flyer',
	pct:5.2,
	desc:'Mild ginger',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/74705_10151798802528745_954132420_n.jpg?oh=98221d2ea1c8ce8dd3877f1bb0be63e7&oe=586877B0',
	link:'https://www.facebook.com/photo.php?fbid=10151798802528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger First Gold',
	pct:4,
	desc:'Very hoppy. Too hoppy',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/995127_10151798803233745_1165661191_n.jpg?oh=64eec74f4a3ef7a84037eb209a628119&oe=58663A7A',
	link:'https://www.facebook.com/photo.php?fbid=10151798803233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot Ale',
	pct:5.0,
	desc:'A nice solid ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/261583_10151368077943745_1842191344_n.jpg?oh=b70e9fce299878d097a8535562717623&oe=586F821D',
	link:'https://www.facebook.com/photo.php?fbid=10151368077943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bass',
	pct:5.0,
	desc:'The smoothness of Guinness with a lager taste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/18911_10151368078368745_1781250452_n.jpg?oh=a8441774747af3fa8717d537704ea418&oe=5839135D',
	link:'https://www.facebook.com/photo.php?fbid=10151368078368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lech',
	pct:5.0,
	desc:'Just plain average',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/61451_10151380245533745_1375457790_n.jpg?oh=64271ba6168133b05b57aed956a2f128&oe=58842468',
	link:'https://www.facebook.com/photo.php?fbid=10151380245533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tatra',
	pct:6.0,
	desc:'Surprisingly good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/406821_10151315683338745_1515210431_n.jpg?oh=3c7afd830e66791f6e020af3ffd28f44&oe=587413B0',
	link:'https://www.facebook.com/photo.php?fbid=10151315683338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zywiec',
	pct:5.6,
	desc:'Rather high on the list of polish beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482554_10151563946353745_976172500_n.jpg?oh=51142df8d92f56c25150d36c6cd1854e&oe=5881B604',
	link:'https://www.facebook.com/photo.php?fbid=10151563946353745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Debowe mocne',
	pct:7.0,
	desc:'A nice sweetness. Bogaty smak!',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923169_10151649174868745_1394415362_n.jpg?oh=d37ea9244d16e8b382f7960ac588e35e&oe=587DA36E',
	link:'https://www.facebook.com/photo.php?fbid=10151649174868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Warka',
	pct:5.7,
	desc:'Standard polish garbage',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522510_10151563946283745_279086474_n.jpg?oh=6db1c9df3ad9e46bd4156d503d04dad8&oe=586DD66D',
	link:'https://www.facebook.com/photo.php?fbid=10151563946283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wojak mocny',
	pct:7.0,
	desc:'Smooth and mild',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/321669_10151649177583745_849913582_n.jpg?oh=7148a3bea110a4b612e1bffd5d70565e&oe=5880B0EB',
	link:'https://www.facebook.com/photo.php?fbid=10151649177583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tyskie klasyczne',
	pct:5.0,
	desc:'The best polish beer I\'ve tasted',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1235025_10151888670293745_2077557673_n.jpg?oh=631d4953493b5ab73a3785d3af94ea3a&oe=5883D5D2',
	link:'https://www.facebook.com/photo.php?fbid=10151888670293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Whistable Bay organic Ale',
	pct:4.5,
	desc:'Leaves a horrible bitter after taste',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/282837_10151380245908745_185055294_n.jpg?oh=ea1c2d29f88e937865d5d12525d74f9f&oe=586C5D49',
	link:'https://www.facebook.com/photo.php?fbid=10151380245908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Lager',
	pct:4.5,
	desc:'A decent Lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/547553_10151396304058745_42264123_n.jpg?oh=e2b11d6100748094e1522ba23c93b0f8&oe=587CB9DD',
	link:'https://www.facebook.com/photo.php?fbid=10151396304058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Isle of Arran blonde',
	pct:5.0,
	desc:'No idea why anyone would buy this twice',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/29588_10151396304143745_1361559358_n.jpg?oh=ed71dec7ae0215df932509b14c507535&oe=588234E1',
	link:'https://www.facebook.com/photo.php?fbid=10151396304143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Edmunds',
	pct:4.5,
	desc:'A little bit too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/521840_10151396304393745_1554011177_n.jpg?oh=2b06fdfadaa855536d5dbeab2ec58dd0&oe=58832992',
	link:'https://www.facebook.com/photo.php?fbid=10151396304393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs Back TEA',
	pct:4.2,
	desc:'Only has a hint of tea',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/282869_10151396304613745_908615539_n.jpg?oh=1501f088862da08c0d71a685681dd0c4&oe=5877D082',
	link:'https://www.facebook.com/photo.php?fbid=10151396304613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holsten Pils',
	pct:5.0,
	desc:'Ok when it\'s really cold, otherwise very average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581508_10151396304968745_547445318_n.jpg?oh=c812bfcf28a9294d6234366ff79197f9&oe=58752D6C',
	link:'https://www.facebook.com/photo.php?fbid=10151396304968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Thumper',
	pct:5.6,
	desc:'Gave my taste buds a thumping',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/62117_10151396305243745_1878047628_n.jpg?oh=fd3a2d736a6379369776ff429ba18e46&oe=586D2F6C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pacifico clara',
	pct:4.5,
	desc:'A fairly standard beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/382796_10151396306023745_1333802839_n.jpg?oh=fbba9828266fb38afbf527cde7a38bfd&oe=5869736B',
	link:'https://www.facebook.com/photo.php?fbid=10151396306023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Christmas cracker',
	pct:4.3,
	desc:'Bitter and nutty',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/408606_10151428525743745_1997517717_n.jpg?oh=2e8606e663f153b296e25d26f9269f2b&oe=5866BC3F',
	link:'https://www.facebook.com/photo.php?fbid=10151428525743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deuchars IPA',
	pct:4.4,
	desc:'Gets better after a few sips',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603151_10151428525283745_670825446_n.jpg?oh=49b036c5d6c2ac215077f5ee186f7414&oe=58789EB0',
	link:'https://www.facebook.com/photo.php?fbid=10151428525283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser',
	pct:4.8,
	desc:'Beer flavoured water',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12558_10151356728378745_471931293_n.jpg?oh=ede44b6a46aff7c5eec921c0931d1e85&oe=5882AF19',
	link:'https://www.facebook.com/photo.php?fbid=10151356728378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada pale ale',
	pct:5.6,
	desc:'A quality strong flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/23377_10151428526143745_898774029_n.jpg?oh=55ca4ce16a304efb54d28831c4fa10df&oe=5839101D',
	link:'https://www.facebook.com/photo.php?fbid=10151428526143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black chocolate stout',
	pct:10.0,
	desc:'Be ready for a kick',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1001078_10151798818383745_544568245_n.jpg?oh=5db8028373f6a87f01cec0da1985352b&oe=5871ED8F',
	link:'https://www.facebook.com/photo.php?fbid=10151798818383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Miller',
	pct:4.66,
	desc:'Good for an American beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603011_10151461681363745_1924966324_n.jpg?oh=cda8f43a960b964f72b9c0080ad9d74b&oe=587B6978',
	link:'https://www.facebook.com/photo.php?fbid=10151461681363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blue moon',
	pct:5.4,
	desc:'Tasty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603175_10151428525338745_1084934789_n.jpg?oh=0fedb0554a4504eb03f9e998fb45c5e6&oe=587F83E5',
	link:'https://www.facebook.com/photo.php?fbid=10151428525338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coors Light',
	pct:4.3,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/3398_10151428533958745_102290057_n.jpg?oh=ef31ff618c4ddd9188d1a3886f59fa3f&oe=58656FC4',
	link:'https://www.facebook.com/photo.php?fbid=10151428533958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red pig ale',
	pct:5.0,
	desc:'Tastes more like an american beer than a mexican one',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/67811_10151368077158745_1890584013_n.jpg?oh=73d7a9cbb85a7c9117f270812eca78f3&oe=5866CAC3',
	link:'https://www.facebook.com/photo.php?fbid=10151368077158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lemongrass Saison',
	pct:5.0,
	desc:'A wheat beer taste but a little more fresh',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/534376_10152147730388745_345071070_n.jpg?oh=b2299904cb01f8f1cebcceab2ae6b6d1&oe=586B32CD',
	link:'https://www.facebook.com/photo.php?fbid=10152147730388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coconut porter',
	pct:5.7,
	desc:'Can’t really taste the coconut and seems to curdle the stomach. Could just be fighting with the other beers. Or the fried rice',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1479322_10152147730723745_835775935_n.jpg?oh=3c1ad9f2c4bede576c88a9dfd6a67135&oe=587BD307',
	link:'https://www.facebook.com/photo.php?fbid=10152147730723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed Root brew',
	pct:4,
	desc:'Tastes like a ginger beer. But it\'s not',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/184446_10151428525538745_507755493_n.jpg?oh=f672e5360df9492a6292a3bf853dd6d7&oe=587BD506',
	link:'https://www.facebook.com/photo.php?fbid=10151428525538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed',
	pct:4,
	desc:'Mike would drink this. It\'s not beer',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/409508_10151396305103745_1792863383_n.jpg?oh=a5ea3fbdf079abe6791dc82f926fe304&oe=588141CF',
	link:'https://www.facebook.com/photo.php?fbid=10151396305103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Guinness',
	pct:4.3,
	desc:'Cannot be rated',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/230829_10151296241408745_792356720_n.jpg?oh=ac9b0a7c481b41526c2b2e31d70c6486&oe=58691FC4',
	link:'https://www.facebook.com/photo.php?fbid=10151296241408745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gallway hooker',
	pct:4.3,
	desc:'A little bit off',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542152_10151428526223745_595487151_n.jpg?oh=ff93d7eb8652516a216a8f86b96bf4bc&oe=5886109D',
	link:'https://www.facebook.com/photo.php?fbid=10151428526223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harp',
	pct:5,
	desc:'Described as harpic toilet cleaner but has a much nicer taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/426781_10151428526053745_1807147542_n.jpg?oh=d61c556839fd3a9708a67bd273d26d67&oe=586926AF',
	link:'https://www.facebook.com/photo.php?fbid=10151428526053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Five lamps',
	pct:4.2,
	desc:'Bad to start, bad to finish',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486257_10151428526493745_65566473_n.jpg?oh=6df9ed05c75c9845f75917ca4b5059ff&oe=586F50FD',
	link:'https://www.facebook.com/photo.php?fbid=10151428526493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carrig',
	pct:4.3,
	desc:'An easy bev',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1238989_10151888668133745_55669060_n.jpg?oh=e04e95bdd15316a1b896df80260ea1a4&oe=583A4CE2',
	link:'https://www.facebook.com/photo.php?fbid=10151888668133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kilkenny',
	pct:4.3,
	desc:'A little too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603305_10151428526818745_310997790_n.jpg?oh=0f44bece54cbf8c0fff8d06cac8d2935&oe=5837D247',
	link:'https://www.facebook.com/photo.php?fbid=10151428526818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Smithwicks',
	pct:4.5,
	desc:'A smooth ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14944_10151428531923745_1130605177_n.jpg?oh=ee974293916d1b3673bc0d9d99bdb226&oe=587D5A5F',
	link:'https://www.facebook.com/photo.php?fbid=10151428531923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caledonia smooth',
	pct:4.0,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/150976_10151428531978745_744791164_n.jpg?oh=e7cfd31b6912bd129e0ccc80c16355c9&oe=58729A31',
	link:'https://www.facebook.com/photo.php?fbid=10151428531978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'hara\'s Irish pale ale',
	pct:5.2,
	desc:'Kind of a mix between an IPA and a pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1233480_10151888666808745_111746617_n.jpg?oh=7e75d7a589507e8697c2ba1e303d79d5&oe=5839D7FC',
	link:'https://www.facebook.com/photo.php?fbid=10151888666808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'haras Irish red',
	pct:4.3,
	desc:'Maybe the worst beer ever',
	score:1,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/150601_10151428532178745_1335701826_n.jpg?oh=d30dea5d6d60a5d8d24b5684b83b0ec6&oe=587DE06C',
	link:'https://www.facebook.com/photo.php?fbid=10151428532178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cyclone IPA',
	pct:7.0,
	desc:'Nice but way too heavy right now',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1173698_10151888668208745_564925063_n.jpg?oh=8e72dd2f1cd4ce422a5da0a53d008797&oe=586C35CC',
	link:'https://www.facebook.com/photo.php?fbid=10151888668208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brahma',
	pct:4.3,
	desc:'Easy bevving',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/312335_10151428526733745_366386591_n.jpg?oh=4b36cb438fdd1c6ec3ffca42d81293b4&oe=5866F59F',
	link:'https://www.facebook.com/photo.php?fbid=10151428526733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Hardcore IPA',
	pct:9.2,
	desc:'A lot of flavour. Couldn\'t handle many',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537412_10151428532378745_1195699464_n.jpg?oh=10ba26b1360eb9862f71a6608b5f0510&oe=587B113A',
	link:'https://www.facebook.com/photo.php?fbid=10151428532378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Punk IPA',
	pct:5.6,
	desc:'Quality IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/954631_10151694534143745_666636865_n.jpg?oh=d18393768d664894442d86a22b641729&oe=583B92B6',
	link:'https://www.facebook.com/photo.php?fbid=10151694534143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Cocoa Psycho',
	pct:10,
	desc:'This beer won\'t stop punching me in the face',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1236502_10151929072183745_392721452_n.jpg?oh=eb3ff22b6141e13056d3c3762e3f9ce5&oe=583CB463',
	link:'https://www.facebook.com/photo.php?fbid=10151929072183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog 5am saint',
	pct:5,
	desc:'Quality amber',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970089_10151694532248745_1860752860_n.jpg?oh=0952523a0a49d8818fbfa25fb828d08d&oe=58383905',
	link:'https://www.facebook.com/photo.php?fbid=10151694532248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Club',
	pct:3.8,
	desc:'A beer for anyone',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1003490_10151798796948745_2041837456_n.jpg?oh=64092c56d644a837faa76dab51256c63&oe=586560D4',
	link:'https://www.facebook.com/photo.php?fbid=10151798796948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crew IPA',
	pct:6.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/63719_10151428532313745_813090694_n.jpg?oh=1ae3ad635581a8479045dc363b779799&oe=5870C48B',
	link:'https://www.facebook.com/photo.php?fbid=10151428532313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennents',
	pct:4.0,
	desc:'The standard in Scotland',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530689_10151428532548745_22366953_n.jpg?oh=9ee7e366853769bdf02472d375be6f3b&oe=5878E79A',
	link:'https://www.facebook.com/photo.php?fbid=10151428532548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trouble brewing golden ale',
	pct:4.3,
	desc:'Very malty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/397706_10151428533088745_22640063_n.jpg?oh=79c90ee75e269c05f66ef084629d7faf&oe=58757822',
	link:'https://www.facebook.com/photo.php?fbid=10151428533088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wold top against the grain',
	pct:4.5,
	desc:'Too harsh',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555458_10151428533018745_1322698428_n.jpg?oh=aa8458a25fc17b354388af95f80d199e&oe=5873CE8C',
	link:'https://www.facebook.com/photo.php?fbid=10151428533018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ginger beard',
	pct:4.2,
	desc:'A tasty ginger beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/184456_10151428533288745_183483934_n.jpg?oh=80a6c7799398ff7adf012c453694f70f&oe=58823779',
	link:'https://www.facebook.com/photo.php?fbid=10151428533288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells banana bread beer',
	pct:5.2,
	desc:'You can really taste the banana',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/68598_10151428533853745_1576633844_n.jpg?oh=55075733874e5ec2914bdcaaa0d2da02&oe=58718181',
	link:'https://www.facebook.com/photo.php?fbid=10151428533853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'KEO',
	pct:4.5,
	desc:'Takes a bit to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12605_10151428533818745_35949284_n.jpg?oh=8f8d51004efaf8f2e8a18e1002cfc958&oe=5883C54D',
	link:'https://www.facebook.com/photo.php?fbid=10151428533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mongoose',
	pct:5.0,
	desc:'Standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/429123_10151428534248745_2064241641_n.jpg?oh=f07ce5ac3665d244c1ca218ec4c396d2&oe=587946C1',
	link:'https://www.facebook.com/photo.php?fbid=10151428534248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flack Catcher',
	pct:4.4,
	desc:'Average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/19223_10151428534118745_318984545_n.jpg?oh=9ac848f406fcb63114804f1141a36872&oe=58658675',
	link:'https://www.facebook.com/photo.php?fbid=10151428534118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedigree',
	pct:5,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530655_10151461672258745_1106668421_n.jpg?oh=f866bf3702198d041f39d6c8d1cf2b97&oe=587E8FB4',
	link:'https://www.facebook.com/photo.php?fbid=10151461672258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fagins',
	pct:4.1,
	desc:'Gay',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/19212_10151461672388745_962581922_n.jpg?oh=1946300e447cb22d95cd10a2e745c2b2&oe=5869D41B',
	link:'https://www.facebook.com/photo.php?fbid=10151461672388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London Pride',
	pct:4.1,
	desc:'The standard London Ale to measure against',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/734258_10151461672898745_380826809_n.jpg?oh=c09f88958c8b56d845d3a579dba50f09&oe=587EDB79',
	link:'https://www.facebook.com/photo.php?fbid=10151461672898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kent\'s best',
	pct:4.1,
	desc:'Would hate to see the worst',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/539055_10151461672828745_520276173_n.jpg?oh=3368c7b66511252c7a912b9c44cb211f&oe=5839C24A',
	link:'https://www.facebook.com/photo.php?fbid=10151461672828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Peroni',
	pct:5.1,
	desc:'Italian standard',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/37080_10151396305588745_415450314_n.jpg?oh=9f6398d8008e27aa9680e7a395dcea02&oe=586F9754',
	link:'https://www.facebook.com/photo.php?fbid=10151396305588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Poretti',
	pct:5.4,
	desc:'Italian tasting',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/554278_10151461673508745_1407613949_n.jpg?oh=24d3a770b754c25b0edf5e30f143bea8&oe=583795DD',
	link:'https://www.facebook.com/photo.php?fbid=10151461673508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra moretti',
	pct:4.6,
	desc:'Nice and tasty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1187105_10151860442623745_1479905492_n.jpg?oh=2a46aa4d43d93e771699249da2681fc3&oe=5871C0DB',
	link:'https://www.facebook.com/photo.php?fbid=10151860442623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tetley smooth',
	pct:3.7,
	desc:'I much prefer this to tea',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/394796_10151461673368745_1651974167_n.jpg?oh=bece7bdee23df57f3d2ebee6653beb97&oe=586F4795',
	link:'https://www.facebook.com/photo.php?fbid=10151461673368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Frost',
	pct:4.5,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/32180_10151461673683745_1033363252_n.jpg?oh=f1fc7689fe0c3bec44f7be69a435c0af&oe=5868BD71',
	link:'https://www.facebook.com/photo.php?fbid=10151461673683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staffordshire IPA',
	pct:5.5,
	desc:'A mild IPA',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/535438_10151461674053745_360684095_n.jpg?oh=c60d80edb97d7241da8c2bc17a373acd&oe=5871EAC7',
	link:'https://www.facebook.com/photo.php?fbid=10151461674053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John smiths extra smooth',
	pct:3.8,
	desc:'What it lacks in alcohol it makes up in foulness',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/598767_10151461673913745_877248330_n.jpg?oh=bd1a2f87424d4e432ff751b0d4bcf2d0&oe=583BC164',
	link:'https://www.facebook.com/photo.php?fbid=10151461673913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Pale Ale',
	pct:4.5,
	desc:'Tasty',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/549950_10151461681523745_1486815544_n.jpg?oh=c9a771d399baa3c5140fa61b0e728595&oe=5882A9C6',
	link:'https://www.facebook.com/photo.php?fbid=10151461681523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers sparkling ale',
	pct:5.8,
	desc:'Not as good as the green, but has more kick',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/528845_10151602295348745_1649172027_n.jpg?oh=163f4da2aeb78d1ae8abe4dc3289907a&oe=586888D2',
	link:'https://www.facebook.com/photo.php?fbid=10151602295348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers extra stout',
	pct:6.3,
	desc:'Twice the stout taste of a regular stout',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484705_10151602292338745_274952911_n.jpg?oh=dcf150a19f48e8671c1be992ce4d82c4&oe=5874E1B3',
	link:'https://www.facebook.com/photo.php?fbid=10151602292338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Lager',
	pct:4.8,
	desc:'Pretty average, but you get used to it',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/421878_10151563839458745_1540530586_n.jpg?oh=4a10d88814c45a93c4436ec8a5f0ba53&oe=588514A3',
	link:'https://www.facebook.com/photo.php?fbid=10151563839458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Resch\'s',
	pct:5.0,
	desc:'A bit harsh',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484746_10151563946993745_129350151_n.jpg?oh=dac53393b40cdae017b30bb94cfd9b57&oe=5874C3DC',
	link:'https://www.facebook.com/photo.php?fbid=10151563946993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little Creatures Pale Ale',
	pct:5.2,
	desc:'',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/543882_10151461681178745_1285845134_n.jpg?oh=778a294ec54ba38b6ea983866449d3a5&oe=586A92E5',
	link:'https://www.facebook.com/photo.php?fbid=10151461681178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boags',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/734606_10151461683093745_1782530484_n.jpg?oh=3b7669e644e89efbde7da8ba7367ab8a&oe=586ABC33',
	link:'https://www.facebook.com/photo.php?fbid=10151461683093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys Extra Dry',
	pct:4.6,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/543796_10151461681748745_852056112_n.jpg?oh=55c11f4a209fa30aea6dbd559d28af7a&oe=587895A0',
	link:'https://www.facebook.com/photo.php?fbid=10151461681748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Victoria Bitter',
	pct:4.9,
	desc:'You either love it or hate it',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/521589_10151461681978745_514499327_n.jpg?oh=047a1b114b6cfc56eac3e99cf45460a6&oe=5880F598',
	link:'https://www.facebook.com/photo.php?fbid=10151461681978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown Lager',
	pct:4.9,
	desc:'A rich man\'s VB',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537401_10151461682783745_431486220_n.jpg?oh=686f036cd012ae65244bfc67bfaaf2cd&oe=587D52F6',
	link:'https://www.facebook.com/photo.php?fbid=10151461682783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys old',
	pct:4.4,
	desc:'Not a stout, not a lager. Some sort of strange crossbreed',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644421_10151563947083745_12453002_n.jpg?oh=dd69eaefdea9efc6e048f6ee6d717cdd&oe=5879BB30',
	link:'https://www.facebook.com/photo.php?fbid=10151563947083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys New',
	pct:4.6,
	desc:'Not sure why I used to drink this all the time',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/74164_10151461683923745_699202545_n.jpg?oh=a99183e8af98b14a611a1d4642887b78&oe=587E5A1B',
	link:'https://www.facebook.com/photo.php?fbid=10151461683923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:4.6,
	desc:'Decent',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602093_10151563947313745_1098411203_n.jpg?oh=ba1457f027c0fc5717cdc42fd2491f2b&oe=5839BE79',
	link:'https://www.facebook.com/photo.php?fbid=10151563947313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Platinum blonde',
	pct:4.6,
	desc:'Meh',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/576008_10151563947183745_1748647687_n.jpg?oh=d61da959e0e0e166554b180da8d357b2&oe=587B6D80',
	link:'https://www.facebook.com/photo.php?fbid=10151563947183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Three sheets Pale Ale',
	pct:4.9,
	desc:'A proper pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/431581_10151563947388745_1746265085_n.jpg?oh=267c7133c630b678e4a73e205f3cf301&oe=5865E660',
	link:'https://www.facebook.com/photo.php?fbid=10151563947388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hite',
	pct:4.5,
	desc:'Strange can, crisp taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/530584_10151461684393745_825973740_n.jpg?oh=717d3d0329ae86afd6bf29a876350cf2&oe=586CF3C5',
	link:'https://www.facebook.com/photo.php?fbid=10151461684393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Helier',
	pct:5.0,
	desc:'Actually a cider, but it has a great name',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480687_10151461682768745_502482125_n.jpg?oh=7fe1023cbc970b9a1fad09030fa1ec8c&oe=587DB6E2',
	link:'https://www.facebook.com/photo.php?fbid=10151461682768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra King',
	pct:7.5,
	desc:'Nicer, stronger and bigger than it\'s crappy cousin. That\'s why it\'s the king',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374324_10151461684623745_844347532_n.jpg?oh=f14f28351ab89763107f67dc3ba56e89&oe=587FA834',
	link:'https://www.facebook.com/photo.php?fbid=10151461684623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kingfisher',
	pct:4.8,
	desc:'The better Indian beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/733981_10151563846938745_1548720674_n.jpg?oh=ff4dd3e435d0ce8cba2a8c129b467437&oe=586DFC17',
	link:'https://www.facebook.com/photo.php?fbid=10151563846938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cambridgeshire Golden Ale',
	pct:4.2,
	desc:'Plain',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/541370_10151563840993745_1315027570_n.jpg?oh=b33bc2aaa908081d3b4e8e2621fd95fd&oe=586E47B2',
	link:'https://www.facebook.com/photo.php?fbid=10151563840993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'March of the Penguins',
	pct:4.9,
	desc:'An average stout',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/75028_10151563841203745_1533936884_n.jpg?oh=416c182727d782e7088f676e2772ca57&oe=58777CA9',
	link:'https://www.facebook.com/photo.php?fbid=10151563841203745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nils Oscar God Lager',
	pct:5.3,
	desc:'Not too bad',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/485993_10151563842368745_684144336_n.jpg?oh=68b1e9af150737e1a8981a09e03e31dc&oe=587667D8',
	link:'https://www.facebook.com/photo.php?fbid=10151563842368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Star',
	pct:5.1,
	desc:'Smooth and cheap',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/601342_10151563843928745_511866900_n.jpg?oh=7675c023c0391d4a3c24a74b002b6d68&oe=5880D1DD',
	link:'https://www.facebook.com/photo.php?fbid=10151563843928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Worthingtons White Shield',
	pct:5.6,
	desc:'Flavoursome',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/380993_10151563843448745_1342021225_n.jpg?oh=07379e0a2605214dd8de6a451e6f1c6b&oe=587CE009',
	link:'https://www.facebook.com/photo.php?fbid=10151563843448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'British Bulldog',
	pct:4.3,
	desc:'Not bad for a bitter',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/479882_10151563844403745_1566533959_n.jpg?oh=ed8cecd00fed3b89474c321898af9910&oe=5871F839',
	link:'https://www.facebook.com/photo.php?fbid=10151563844403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Newcastle Brown Ale',
	pct:4.7,
	desc:'Looks kind of like the runoff from some industrial process. Really makes me wonder what I\'m drinking. Amazingly it doesn\'t taste that bad',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644361_10151563845228745_821469901_n.jpg?oh=ce9147066a63ec9a96138d241b41beff&oe=586F6FB6',
	link:'https://www.facebook.com/photo.php?fbid=10151563845228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrooks pale ale',
	pct:4.5,
	desc:'Another sock flavoured beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/545225_10151860439253745_1854856255_n.jpg?oh=2a618f80f5a6a7d60ce86cb7a602c773&oe=586899FB',
	link:'https://www.facebook.com/photo.php?fbid=10151860439253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrook\'s Brewery Junction',
	pct:4.5,
	desc:'Not sure what taste they\'re going for here… Maybe socks',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482628_10151563846178745_1536949417_n.jpg?oh=33078cfa8ab9e3d9179a8d4ffd651c3e&oe=587E8D36',
	link:'https://www.facebook.com/photo.php?fbid=10151563846178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duff',
	pct:4.7,
	desc:'Not sure how Homer Simpson drinks this stuff',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522569_10151563850998745_438604131_n.jpg?oh=5134da5b4d7fc8e2cd57090563127971&oe=587D4EDA',
	link:'https://www.facebook.com/photo.php?fbid=10151563850998745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Novomestsy Ležák',
	pct:4.5,
	desc:'A different taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/625446_10151563847698745_35732168_n.jpg?oh=a1e90ab2d87d6a8a354130bf1f302517&oe=5877D369',
	link:'https://www.facebook.com/photo.php?fbid=10151563847698745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Branik',
	pct:5.5,
	desc:'Consumed in a room full of smoke. May have influenced the rating',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486531_10151563848553745_1919030008_n.jpg?oh=1272425d9f5d120597073084e3571872&oe=587D94A7',
	link:'https://www.facebook.com/photo.php?fbid=10151563848553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'X33',
	pct:12.6,
	desc:'Too sweet. Have one and move on',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/578557_10151563849238745_550093869_n.jpg?oh=1452b5cda9dfb673ad881a7295553f18&oe=583A6FE4',
	link:'https://www.facebook.com/photo.php?fbid=10151563849238745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oldgott',
	pct:5.2,
	desc:'A mild taste of honey',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374397_10151563850303745_1875521604_n.jpg?oh=f833afb5897a4f612c82feb4bb297f2e&oe=5865DA75',
	link:'https://www.facebook.com/photo.php?fbid=10151563850303745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pilsner Urquell',
	pct:4.4,
	desc:'Actually one of the worse Czech lagers',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/544330_10151563851598745_2141597246_n.jpg?oh=7754356c6ef61b5df155565e6add1a47&oe=583D0D94',
	link:'https://www.facebook.com/photo.php?fbid=10151563851598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser Budvar',
	pct:5.0,
	desc:'Far better than its american cousin',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/165000_10151428534173745_615410288_n.jpg?oh=c0c91c62d4b4ef0ac7ad5fae5cb74457&oe=5838DA2F',
	link:'https://www.facebook.com/photo.php?fbid=10151428534173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel Dark',
	pct:3.8,
	desc:'Smooth and flavoursome',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602178_10151563853043745_1776474012_n.jpg?oh=257ef82d6f1138a4ed16b23324948fac&oe=5885554F',
	link:'https://www.facebook.com/photo.php?fbid=10151563853043745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gambrinus',
	pct:5.0,
	desc:'A poor mans beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/226421_10151563853523745_546548236_n.jpg?oh=33ade939623f64b32f095f7c5c4ebf85&oe=586FABB4',
	link:'https://www.facebook.com/photo.php?fbid=10151563853523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bernard',
	pct:5.1,
	desc:'Even tastes good after the second opening',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/44464_10151563938373745_1447128785_n.jpg?oh=615363f65fe7a18ed2cf08658a4f4646&oe=5838F188',
	link:'https://www.facebook.com/photo.php?fbid=10151563938373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fenix',
	pct:4.7,
	desc:'Wheat beer with a hint of orange',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/625502_10151563944728745_168727372_n.jpg?oh=152a59404920efa8f8dca93b7c03096c&oe=5884199B',
	link:'https://www.facebook.com/photo.php?fbid=10151563944728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/533976_10151331665848745_1640769773_n.jpg?oh=0c77cb6f4c3ceaabcc95e31d3eed95ff&oe=586A30D3',
	link:'https://www.facebook.com/photo.php?fbid=10151331665848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crakonos',
	pct:5.1,
	desc:'I need to know who this old bever is',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/487632_10151563944693745_625226538_n.jpg?oh=63e60a6531a85e7ee77a4efade46c763&oe=586FB8D4',
	link:'https://www.facebook.com/photo.php?fbid=10151563944693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birell',
	pct:0.49,
	desc:'Damn language barrier. I consider this a beer flavoured soft drink',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/733744_10151563944413745_394586851_n.jpg?oh=618ca48349be443747e54c3f8126b6f4&oe=5885FE7F',
	link:'https://www.facebook.com/photo.php?fbid=10151563944413745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice 10',
	pct:4.2,
	desc:'Smooth with some sort of extra flavour. Caramel maybe',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/549300_10151563944628745_804920715_n.jpg?oh=0db0314b0b6992bb7cf8f598b3ceb2da&oe=58763DE8',
	link:'https://www.facebook.com/photo.php?fbid=10151563944628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staropramen',
	pct:5.0,
	desc:'A nice lager',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/59324_10151368078418745_874127613_n.jpg?oh=bae158176d0f34b012f2542f634e3df6&oe=5868DFAC',
	link:'https://www.facebook.com/photo.php?fbid=10151368078418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice musketyr',
	pct:4.5,
	desc:'Very similar to their other beer. Just a tad stronger',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480492_10151563944828745_302604960_n.jpg?oh=956dce4bcd21de3d7f8ee92d9d89c4af&oe=58731A45',
	link:'https://www.facebook.com/photo.php?fbid=10151563944828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice cerne',
	pct:3.8,
	desc:'A nice amber ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482349_10151563944993745_189404530_n.jpg?oh=03dae5883cf69d24239eafa2484a59df&oe=588694E9',
	link:'https://www.facebook.com/photo.php?fbid=10151563944993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Master',
	pct:5.3,
	desc:'The master bev',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484682_10151563945163745_604451899_n.jpg?oh=42a1dcdfdbd4de3ec956cf91cd9d8978&oe=587088C0',
	link:'https://www.facebook.com/photo.php?fbid=10151563945163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timothy Taylor Landlord',
	pct:4.3,
	desc:'Orangey tasting',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/577972_10151563945378745_1586746946_n.jpg?oh=1cccd4070e231b298df000f3209a99d2&oe=58714683',
	link:'https://www.facebook.com/photo.php?fbid=10151563945378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Goose',
	pct:4.2,
	desc:'A complete mismatch of flavours',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555154_10151563945403745_1011654346_n.jpg?oh=f8d94048a34f032d5753b93988df65a2&oe=586E6AEF',
	link:'https://www.facebook.com/photo.php?fbid=10151563945403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oranjeboom',
	pct:5.0,
	desc:'Easy drinking fun',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/544204_10151563945568745_9282207_n.jpg?oh=bce23b15496f7c032490c37666279f0e&oe=5839BE41',
	link:'https://www.facebook.com/photo.php?fbid=10151563945568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viru',
	pct:5.0,
	desc:'Smooth and malty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482859_10151563945748745_1320031993_n.jpg?oh=282ea48699b1e19aa3305786b54c192a&oe=587241EF',
	link:'https://www.facebook.com/photo.php?fbid=10151563945748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saku original',
	pct:4.6,
	desc:'Why was I served Estonian beer in a Lithuanian club?',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482209_10151602299593745_443741349_n.jpg?oh=61e62c8b3da64f37e70328ea7cc2daa1&oe=583A0BA3',
	link:'https://www.facebook.com/photo.php?fbid=10151602299593745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jaipur',
	pct:5.9,
	desc:'Like the bazar, needs to be removed from sale for public safety',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/582417_10151563946028745_982723381_n.jpg?oh=5663a74c03769b60c594445bc111113a&oe=5881F9C5',
	link:'https://www.facebook.com/photo.php?fbid=10151563946028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Almaza',
	pct:4.2,
	desc:'Tastes very familiar',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/2501_10151563946143745_340977146_n.jpg?oh=7e552856153a5e795ba9e9fce35435e4&oe=5881DDCF',
	link:'https://www.facebook.com/photo.php?fbid=10151563946143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fire rock',
	pct:6.0,
	desc:'My first hawaiian beer. So far so good',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1002768_10151798817233745_47152190_n.jpg?oh=b7c25b881881f1316f3e449d647da24b&oe=586E2B97',
	link:'https://www.facebook.com/photo.php?fbid=10151798817233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lion lager',
	pct:4.8,
	desc:'Nothing special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/75581_10151563946433745_1440605873_n.jpg?oh=9f4d393c8452cf353fa54a7a4bb904f0&oe=587431FE',
	link:'https://www.facebook.com/photo.php?fbid=10151563946433745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sol',
	pct:4.5,
	desc:'Much better than corona',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/556881_10151563946938745_1909714508_n.jpg?oh=dfce9c2ecbd900ce50caf9e14a33f42e&oe=586B2394',
	link:'https://www.facebook.com/photo.php?fbid=10151563946938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arvo brew 51',
	pct:4.9,
	desc:'Like an IPA gone wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9699_10151602278498745_506265925_n.jpg?oh=3777f2a0682c6e96ddec5d09fbdd11ee&oe=58792429',
	link:'https://www.facebook.com/photo.php?fbid=10151602278498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson old admiral',
	pct:6.1,
	desc:'Too much bitterness',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/575759_10151602281008745_1009725075_n.jpg?oh=d193b26a31fd7bd801c9529012694726&oe=586A4182',
	link:'https://www.facebook.com/photo.php?fbid=10151602281008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Quayle ale',
	pct:4.0,
	desc:'Not as good as expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602158_10151602281568745_1269833032_n.jpg?oh=13b7288343a61342719c91b4225414b5&oe=58764A50',
	link:'https://www.facebook.com/photo.php?fbid=10151602281568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Trafalgar pale ale',
	pct:4.0,
	desc:'A nice tang',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/7969_10151602281553745_212370865_n.jpg?oh=b212978272c3cead4fc765076fcdbbad&oe=58836B71',
	link:'https://www.facebook.com/photo.php?fbid=10151602281553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Nelson\'s blood',
	pct:5.0,
	desc:'A nice stout taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64391_10151602282878745_784297964_n.jpg?oh=af904e5ecdd65ce0e8f8e7f3f6956cfe&oe=583CE2AB',
	link:'https://www.facebook.com/photo.php?fbid=10151602282878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'VB pale lager',
	pct:4.4,
	desc:'Not quite as bad as regular VB',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/559250_10151602286458745_792577618_n.jpg?oh=3dbd0df75eb20abfb6e25f9286194009&oe=586A4926',
	link:'https://www.facebook.com/photo.php?fbid=10151602286458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds sunset ale',
	pct:4.6,
	desc:'Slightly fruity, have to get used to it before judgement',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484855_10151602282628745_1452325767_n.jpg?oh=0091585bde6ce86a791b5394bbc4ac32&oe=5877625F',
	link:'https://www.facebook.com/photo.php?fbid=10151602282628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale',
	pct:4.5,
	desc:'A slightly less fruity pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/599814_10151602286343745_870808186_n.jpg?oh=13cbe9c25fc2a688fdd3b7ded0cf69fc&oe=587A8ED3',
	link:'https://www.facebook.com/photo.php?fbid=10151602286343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew pilsner',
	pct:5.0,
	desc:'Rather nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/483798_10151602282778745_989104715_n.jpg?oh=e96c291994e1f2c28afae31926f0fb41&oe=587BA5DB',
	link:'https://www.facebook.com/photo.php?fbid=10151602282778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fat Yak',
	pct:4.7,
	desc:'A tasty bev',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/541362_10151602283703745_1951889238_n.jpg?oh=07d2070674ee7cb2d498bc5b7e381739&oe=58848888',
	link:'https://www.facebook.com/photo.php?fbid=10151602283703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The boxer red ale',
	pct:4.1,
	desc:'A mild red ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/562244_10151602284348745_1238517334_n.jpg?oh=433e37755cef489100849f28ef91476d&oe=583B72E3',
	link:'https://www.facebook.com/photo.php?fbid=10151602284348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hangman pale ale',
	pct:4.9,
	desc:'A tad bitter for a pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581543_10151602284093745_555930895_n.jpg?oh=24a6b4e1ae8471341b41f85465c5ad67&oe=58749B01',
	link:'https://www.facebook.com/photo.php?fbid=10151602284093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The governor golden ale',
	pct:4.5,
	desc:'',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/488220_10151602285323745_1585387237_n.jpg?oh=6ef74dae9227e07336244c676dbdbcae&oe=586C2823',
	link:'https://www.facebook.com/photo.php?fbid=10151602285323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red truck lager',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/480840_10151602285148745_827571703_n.jpg?oh=0708423aab8e39e733f7a34bffed5544&oe=586D2826',
	link:'https://www.facebook.com/photo.php?fbid=10151602285148745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict lager',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/526421_10151602285463745_410487487_n.jpg?oh=b5c0247d38b483af4d93caee10a118fe&oe=58652885',
	link:'https://www.facebook.com/photo.php?fbid=10151602285463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bighead no carb beer',
	pct:4.2,
	desc:'Tastes like a rusty nail left in a glass of water',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64725_10151602286543745_838192247_n.jpg?oh=0103b477bfe58c7d965a51a992691b17&oe=58812CAC',
	link:'https://www.facebook.com/photo.php?fbid=10151602286543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire one fifty lashes',
	pct:4.2,
	desc:'A good session beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/482193_10151602292048745_375392297_n.jpg?oh=f1a33a93ffc98c3b12cbec6844c49197&oe=58673AF4',
	link:'https://www.facebook.com/photo.php?fbid=10151602292048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire sun down',
	pct:4.4,
	desc:'A good amount of flavour but still easy to smash down',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/5556_10151602286983745_1392314300_n.jpg?oh=9ba9ed4fe031a2ddb2ba6fe10603f023&oe=58656B26',
	link:'https://www.facebook.com/photo.php?fbid=10151602286983745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue',
	pct:4.9,
	desc:'Not as good as I remember',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/733866_10151602292633745_1103549106_n.jpg?oh=b5eda45ae597c80336118f132c47c6e7&oe=5837A8A6',
	link:'https://www.facebook.com/photo.php?fbid=10151602292633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue pilsner',
	pct:4.5,
	desc:'Doesn\'t really taste like a pilsner',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/149243_10151602295168745_1910196412_n.jpg?oh=71d8f5000bd5b2cc3025d88da8370353&oe=588684C7',
	link:'https://www.facebook.com/photo.php?fbid=10151602295168745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures bright ale',
	pct:4.5,
	desc:'Terrible photo, decent beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/488165_10151602292853745_953241846_n.jpg?oh=37757fcebc4d3a814f43dc7dbb7be9b0&oe=583BA1C3',
	link:'https://www.facebook.com/photo.php?fbid=10151602292853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pepperjack hand crafted ale',
	pct:4.7,
	desc:'Takes a while to get used to, even then it\'s average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/579182_10151602294478745_1578225000_n.jpg?oh=3d5df85845c9775d42c80c2d037860cc&oe=587472E9',
	link:'https://www.facebook.com/photo.php?fbid=10151602294478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ pure lager',
	pct:5.0,
	desc:'Something is wrong with this flavour',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/181067_10151602294978745_1842165802_n.jpg?oh=05fea85f16f1402ab27a8ec8e33e1923&oe=583CB941',
	link:'https://www.facebook.com/photo.php?fbid=10151602294978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Keller door',
	pct:5.0,
	desc:'Just a little bit extra flavour than a standard lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/527734_10151602296568745_390928601_n.jpg?oh=02097dd9c4622a44b8b230dbe0e77ea7&oe=586D6CB1',
	link:'https://www.facebook.com/photo.php?fbid=10151602296568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate roadtrip ipa',
	pct:5.8,
	desc:'Mild for an american IPA, easier to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/7254_10151602296908745_1398508952_n.jpg?oh=407efaed48308a850428780889c374bf&oe=583B3FF3',
	link:'https://www.facebook.com/photo.php?fbid=10151602296908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate mt Macedon ale',
	pct:4.5,
	desc:'Smooth and fruity',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/536215_10151602297528745_137791391_n.jpg?oh=760d4773761227c8b4595b7b72715a8d&oe=5869F430',
	link:'https://www.facebook.com/photo.php?fbid=10151602297528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Millenium Falcon',
	pct:10.0,
	desc:'A mild IPA for the booze content',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/579366_10151602298783745_1455893061_n.jpg?oh=5753eeb8f86fd615a7d12364cd1f8ed8&oe=5872C426',
	link:'https://www.facebook.com/photo.php?fbid=10151602298783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew Belgo',
	pct:4.5,
	desc:'Very belgian without the alcohol content to match',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522428_10151602297908745_1068926570_n.jpg?oh=5aa94b27cc1b62d3a22bb55d8a5f836f&oe=58735F43',
	link:'https://www.facebook.com/photo.php?fbid=10151602297908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murrays icon 2IPA',
	pct:7.5,
	desc:'Too much IPA flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/524217_10151602298053745_1174689076_n.jpg?oh=0abba901409c4766cf9fc87aa8556c93&oe=5882561B',
	link:'https://www.facebook.com/photo.php?fbid=10151602298053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boa\'s bind',
	pct:5.0,
	desc:'A bit of an IPA flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10102_10151602299658745_104134259_n.jpg?oh=83af320585aad1d672f72522c0eaaee7&oe=586C9CAF',
	link:'https://www.facebook.com/photo.php?fbid=10151602299658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Larks foot',
	pct:4.5,
	desc:'Pretty average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10055_10151602300248745_313412556_n.jpg?oh=a86d1d7ee8a912e39b3183c83b89e25e&oe=5881CBFB',
	link:'https://www.facebook.com/photo.php?fbid=10151602300248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton dry',
	pct:4.5,
	desc:'Decent Aussie beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/600269_10151602300508745_808991925_n.jpg?oh=30d3e169ef553eb0828cc0403c4bbc7d&oe=586E5C43',
	link:'https://www.facebook.com/photo.php?fbid=10151602300508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pure blonde',
	pct:4.6,
	desc:'Easy drinking',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/157044_10151602300683745_1270951956_n.jpg?oh=781093d2e7f409d21aa5ed9f9cfbaf03&oe=583C700B',
	link:'https://www.facebook.com/photo.php?fbid=10151602300683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict strong ale',
	pct:7.2,
	desc:'A strong and average flavour',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581629_10151602301103745_358423449_n.jpg?oh=ca6a3a370e9885918b0ff4c063805a5f&oe=587A4986',
	link:'https://www.facebook.com/photo.php?fbid=10151602301103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier burning gold',
	pct:4.7,
	desc:'Boring',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/551487_10151649173073745_178044172_n.jpg?oh=aef7decaacf4ea5e2ee703c0e9664946&oe=583B0B78',
	link:'https://www.facebook.com/photo.php?fbid=10151649173073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Korev',
	pct:4.8,
	desc:'Like an off becks',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/48034_10151649174363745_1551458446_n.jpg?oh=c7abbdd8073f4abf0c06fcf91ea1f85d&oe=58697BF2',
	link:'https://www.facebook.com/photo.php?fbid=10151649174363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply IPA',
	pct:5.0,
	desc:'Just awful. Not even an IPA',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/998582_10151860439493745_805468360_n.jpg?oh=278a1d57838d738a870fc45d98b624d5&oe=587AD83D',
	link:'https://www.facebook.com/photo.php?fbid=10151860439493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious Brew',
	pct:4.7,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/575573_10151649174188745_1546947418_n.jpg?oh=cd8be84e4ba152734a45125f91bc8a4b&oe=587EB7C5',
	link:'https://www.facebook.com/photo.php?fbid=10151649174188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven grand slam ale',
	pct:4.0,
	desc:'A mild and average flavour',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644743_10151649174378745_793600072_n.jpg?oh=4ce45e584492e42846fa89f0274beaf6&oe=58768397',
	link:'https://www.facebook.com/photo.php?fbid=10151649174378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old golden hen',
	pct:4.1,
	desc:'Wouldn\'t have another',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/48062_10151649174963745_1079824641_n.jpg?oh=763443100dfc4d264e052cdd865ad21e&oe=587CBDAE',
	link:'https://www.facebook.com/photo.php?fbid=10151649174963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spitfire Kentish ale',
	pct:4.5,
	desc:'Not too hard to drink',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/389000_10151649175308745_1470630421_n.jpg?oh=18276a84bf4bec8dade77c7c56583a16&oe=5882F115',
	link:'https://www.facebook.com/photo.php?fbid=10151649175308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier English',
	pct:4.7,
	desc:'I\'m a fan of this mild ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12402_10151649175493745_949451993_n.jpg?oh=d577b05b27fe61a5804e36b9f3a872fb&oe=5866949F',
	link:'https://www.facebook.com/photo.php?fbid=10151649175493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murphy\'s draught',
	pct:4.0,
	desc:'Instantly gave me a headache and made my mouth taste like it was bleeding',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/310059_10151649175513745_267966869_n.jpg?oh=3b9d6c1f016efd456c30428385e2a241&oe=58699B9E',
	link:'https://www.facebook.com/photo.php?fbid=10151649175513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Frederic Robinson ginger ale',
	pct:6.0,
	desc:'The worst ginger beer I\'ve tasted',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486778_10151649175643745_1984274110_n.jpg?oh=f1b350ca5f45cc4cbef1259167ee90c3&oe=587EE4D8',
	link:'https://www.facebook.com/photo.php?fbid=10151649175643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wiltshire rum beer',
	pct:5.0,
	desc:'Can\'t really taste the rum',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935047_10151649176048745_1239205144_n.jpg?oh=6cbebb459ab3b7f97b97124456b658cc&oe=583CA694',
	link:'https://www.facebook.com/photo.php?fbid=10151649176048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amigos',
	pct:5.5,
	desc:'Tastes like agave',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/58112_10151649175958745_191846166_n.jpg?oh=6ff17b2c9e85ae32efb1a0e8ae3db1d4&oe=586B1CB3',
	link:'https://www.facebook.com/photo.php?fbid=10151649175958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Früli',
	pct:4.1,
	desc:'Not usually served in a martini glass',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/533653_10151396306263745_1857811158_n.jpg?oh=af363638e8aa67d3ac89c3b1c23a6389&oe=5883290D',
	link:'https://www.facebook.com/photo.php?fbid=10151396306263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans peche lambic beer',
	pct:4.0,
	desc:'Tastes just like peach, not beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/71413_10151649176248745_1243782720_n.jpg?oh=39487074861bca0819fca6c82aef7e44&oe=5880E7AA',
	link:'https://www.facebook.com/photo.php?fbid=10151649176248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans strawberry lambic beer',
	pct:4,
	desc:'Not too much strawberry',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537448_10151461684443745_989699337_n.jpg?oh=2b6a8a1de7d9424c41890b88eb01d9fc&oe=58670E56',
	link:'https://www.facebook.com/photo.php?fbid=10151461684443745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vratislav',
	pct:5.0,
	desc:'There\'s a reason I never saw this in the Czech Republic',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923443_10151649176573745_311313356_n.jpg?oh=917b0ef35ff456a573ee61511948ab9a&oe=5876B1B3',
	link:'https://www.facebook.com/photo.php?fbid=10151649176573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Remus',
	pct:6.0,
	desc:'Pretty sure the guy on the label tea bagged this beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/401188_10151649176638745_2029777298_n.jpg?oh=9ae257f334611f96f9123351ec32ddc9&oe=583B0CD7',
	link:'https://www.facebook.com/photo.php?fbid=10151649176638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king light ale',
	pct:3.0,
	desc:'Weak and tasteless. Pretty much a waste of my time',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/67496_10151649177163745_1520090166_n.jpg?oh=509eb182f724e35878f9c128df88aa96&oe=58819973',
	link:'https://www.facebook.com/photo.php?fbid=10151649177163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old salt quay',
	pct:3.9,
	desc:'An easy drinking ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/407150_10151649177363745_297706272_n.jpg?oh=f85c2b97e3ddda58489ca2aaa7a0192d&oe=58819EFE',
	link:'https://www.facebook.com/photo.php?fbid=10151649177363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser 66',
	pct:4.0,
	desc:'Slightly fruity',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/62626_10151649177378745_981383908_n.jpg?oh=d7e1fed3d618185cfdffc967fab75ebd&oe=5866CA72',
	link:'https://www.facebook.com/photo.php?fbid=10151649177378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Okocim mocne',
	pct:7.0,
	desc:'Sweet and a little bit wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/301917_10151649177953745_1459071565_n.jpg?oh=a56c477cd102ed42ddf35bd761da3fef&oe=58741E45',
	link:'https://www.facebook.com/photo.php?fbid=10151649177953745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Desperados',
	pct:5.9,
	desc:'Kind of a girls beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/305829_10151649178053745_1663963670_n.jpg?oh=0ee5de2fc7fe06d8f6a5555c5d4e16fa&oe=58797B37',
	link:'https://www.facebook.com/photo.php?fbid=10151649178053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corona',
	pct:4.5,
	desc:'Not sure why so many people drink this',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/484843_10151694516468745_911431623_n.jpg?oh=49cd02a6dd02cbf650090f213b690f41&oe=587CC982',
	link:'https://www.facebook.com/photo.php?fbid=10151694516468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cuvana rum beer',
	pct:5.5,
	desc:'Like an over sweet tequila beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64844_10151798801973745_1700678415_n.jpg?oh=aeffdb621f31ca89bb14efb3438faad2&oe=588463D4',
	link:'https://www.facebook.com/photo.php?fbid=10151798801973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masquerido',
	pct:5.0,
	desc:'Yet another tequila beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374702_10151649178783745_739073810_n.jpg?oh=2f1138538352d65f6a30f769befcba80&oe=5878B823',
	link:'https://www.facebook.com/photo.php?fbid=10151649178783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wychwood brewery Goliath',
	pct:4.2,
	desc:'The beer to slay a mighty thirst',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/431886_10151649178733745_149102435_n.jpg?oh=12a5c683f241d37ed821cc3c5c3b5e5b&oe=5838B9AE',
	link:'https://www.facebook.com/photo.php?fbid=10151649178733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fuller\'s honey dew',
	pct:5.0,
	desc:'Needs more honey',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/969679_10151694516258745_1883640684_n.jpg?oh=1ecb123e153d4c60a43f84c2deb062bf&oe=587064A2',
	link:'https://www.facebook.com/photo.php?fbid=10151694516258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales barnsey',
	pct:4.5,
	desc:'Not too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/923297_10151694519768745_611137307_n.jpg?oh=f6abf3b1f5479f6950535c87aebfc721&oe=587EC2BC',
	link:'https://www.facebook.com/photo.php?fbid=10151694519768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales gem',
	pct:4.5,
	desc:'Not too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/423793_10151694518423745_774842906_n.jpg?oh=31f5a8754c87395334e80af63f99e272&oe=587B0BBF',
	link:'https://www.facebook.com/photo.php?fbid=10151694518423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales wild hare',
	pct:5.0,
	desc:'Lovely and sweet',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935469_10151694516713745_1078233688_n.jpg?oh=45ce65bb006c5f2aa6e149c7eab99fc8&oe=58790245',
	link:'https://www.facebook.com/photo.php?fbid=10151694516713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales Dark Side',
	pct:4.0,
	desc:'A smooth dark ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/933900_10151694517968745_176829546_n.jpg?oh=65a9d9d90170618745b865319d8d62de&oe=5865EF05',
	link:'https://www.facebook.com/photo.php?fbid=10151694517968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modelo',
	pct:4.5,
	desc:'Alright',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/430992_10151694517623745_238159373_n.jpg?oh=c48e2bd07835178ad3a32d8a96bf4794&oe=583D03E2',
	link:'https://www.facebook.com/photo.php?fbid=10151694517623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Madog\'s ale',
	pct:3.7,
	desc:'Almost like a mild IPA',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/931430_10151694519728745_1221673086_n.jpg?oh=ea8d888762675cf82bc1bd40bb727e44&oe=587E2199',
	link:'https://www.facebook.com/photo.php?fbid=10151694519728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ysgawen',
	pct:4.0,
	desc:'Flowery',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935261_10151694519833745_1401778168_n.jpg?oh=7cede9ca5c6c109e74f127feefa74c7e&oe=5876DAB1',
	link:'https://www.facebook.com/photo.php?fbid=10151694519833745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faxe',
	pct:5.0,
	desc:'It would take a long time to get used to this',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/954667_10151694524273745_524236800_n.jpg?oh=5654b619e75e4a8a403198797249f6e3&oe=58860D35',
	link:'https://www.facebook.com/photo.php?fbid=10151694524273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cwrw gwledd celebration ale',
	pct:4.2,
	desc:'I could enjoy a few of those',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/954753_10151694532288745_1231818486_n.jpg?oh=afc8ae1f7517c07eb127e2437b36663c&oe=58824540',
	link:'https://www.facebook.com/photo.php?fbid=10151694532288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields Unfiltered lager',
	pct:4.1,
	desc:'A flavour I can\'t pick',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/931410_10151694532138745_1297410335_n.jpg?oh=fb7285c67eeddb935a7fc513b961a173&oe=58762276',
	link:'https://www.facebook.com/photo.php?fbid=10151694532138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields wheat beer',
	pct:4.7,
	desc:'Very wheaty',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/947193_10151694532673745_349270642_n.jpg?oh=5bbec34faad3230ec5309d071b0f12d3&oe=58823522',
	link:'https://www.facebook.com/photo.php?fbid=10151694532673745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam',
	pct:4.8,
	desc:'Like a mild IPA. Tasty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/983676_10151694533228745_78503103_n.jpg?oh=1d721a9e36f0ef1a4aac643acc936748&oe=5882E3BF',
	link:'https://www.facebook.com/photo.php?fbid=10151694533228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields hackney hopster',
	pct:4.2,
	desc:'I should not have ordered this beer with only 15 minutes to drink it. Would be nice if I had more time to enjoy it',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1480719_10152147735493745_924183769_n.jpg?oh=76e7ffde85086d6b6b68141b8eab54d5&oe=586A49D1',
	link:'https://www.facebook.com/photo.php?fbid=10152147735493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dragon stout',
	pct:7.5,
	desc:'So bad I can\'t believe they bottle this',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/968780_10151694532678745_1443848773_n.jpg?oh=29801122de214a85e29a385433c69d5a&oe=58670DA0',
	link:'https://www.facebook.com/photo.php?fbid=10151694532678745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St mungo',
	pct:4.9,
	desc:'Sweet sweet lager , but terrible warm',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942794_10151694532513745_577368504_n.jpg?oh=38d2adc28f3da6c321b26242e16b80c3&oe=588292B1',
	link:'https://www.facebook.com/photo.php?fbid=10151694532513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs back hop',
	pct:4.4,
	desc:'Throw up kind if awful',
	score:1,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/308392_10151694533218745_306927282_n.jpg?oh=3ac9a0aae00700ad813e6808e36f1f81&oe=587B20C8',
	link:'https://www.facebook.com/photo.php?fbid=10151694533218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham citra',
	pct:4.6,
	desc:'Nice hops but otherwise average',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1237019_10151929068538745_647712352_n.jpg?oh=64b2ac8711f9a4a962c94fa12df5d8ba&oe=587D62A5',
	link:'https://www.facebook.com/photo.php?fbid=10151929068538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham scarlet macaw',
	pct:4.8,
	desc:'Taught me the meaning of pugnacious',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1238244_10151929068473745_105586790_n.jpg?oh=37f5e8ca31c42d23b29c040acb77c995&oe=5872624E',
	link:'https://www.facebook.com/photo.php?fbid=10151929068473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham ales inferno',
	pct:4.4,
	desc:'I think a beer called inferno needs chilli',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942020_10151694533608745_2056877210_n.jpg?oh=f7c50db22cf322b3252d2b4fdcebb3da&oe=587E3ED1',
	link:'https://www.facebook.com/photo.php?fbid=10151694533608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floris chocolat',
	pct:4.2,
	desc:'Fizzy bad chocolate',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/945065_10151694533818745_1511619525_n.jpg?oh=6ec057034bf596842affd3e2b2b66e42&oe=586C46B7',
	link:'https://www.facebook.com/photo.php?fbid=10151694533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Williams joker IPA',
	pct:5,
	desc:'Surprisingly good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935627_10151694535958745_491079820_n.jpg?oh=c4415fc63620a8d8a43a962c0a0625e3&oe=588220BA',
	link:'https://www.facebook.com/photo.php?fbid=10151694535958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber rambler',
	pct:4.8,
	desc:'Sweet, hoppy, average',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/969003_10151694535793745_176698104_n.jpg?oh=d5e3dc8d09eeaba969762cfc3e18883c&oe=5839E0A9',
	link:'https://www.facebook.com/photo.php?fbid=10151694535793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruddles',
	pct:3.7,
	desc:'Never again',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/263308_10151694535858745_1991147618_n.jpg?oh=6501d22e4a3f83b3a5c8e854bd59a52b&oe=586D41F0',
	link:'https://www.facebook.com/photo.php?fbid=10151694535858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great bustard',
	pct:4.8,
	desc:'Black and vomity',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/485453_10151694536548745_106155626_n.jpg?oh=b6e5fd41dde65db8a981cc3609155007&oe=588413A1',
	link:'https://www.facebook.com/photo.php?fbid=10151694536548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Efes',
	pct:5.0,
	desc:'The best turkey has to offer?',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/261692_10151694536343745_1620675105_n.jpg?oh=f0a320a60c3fd73b822dd020a2a34685&oe=587BC298',
	link:'https://www.facebook.com/photo.php?fbid=10151694536343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perge',
	pct:5.0,
	desc:'Much better than efes',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1005742_10151798801533745_634899063_n.jpg?oh=85a276983a0290cd6bf6192d89a47a4b&oe=583C8C9F',
	link:'https://www.facebook.com/photo.php?fbid=10151798801533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Voll-damn doble Malta',
	pct:7.2,
	desc:'Quite malty',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/293097_10151694536623745_633779128_n.jpg?oh=050eaf561cba84d547a6d21ec9364b36&oe=586B6065',
	link:'https://www.facebook.com/photo.php?fbid=10151694536623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo',
	pct:4.8,
	desc:'Easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/264403_10151694536708745_1298889096_n.jpg?oh=b14324b5fcd8fb803385220db5cc9c64&oe=5883C9E3',
	link:'https://www.facebook.com/photo.php?fbid=10151694536708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella Galicia',
	pct:5.5,
	desc:'A bit more malty than the regular',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/988265_10151798820448745_1825630126_n.jpg?oh=2f291960ce6a8117776a68633b3e00b4&oe=58725543',
	link:'https://www.facebook.com/photo.php?fbid=10151798820448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella',
	pct:5.4,
	desc:'Tastes a little bit burnt',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/248044_10151694532898745_1441204919_n.jpg?oh=d90c6f28fef2f623f8941f4d80590f88&oe=5839451A',
	link:'https://www.facebook.com/photo.php?fbid=10151694532898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mahou',
	pct:5.5,
	desc:'A very tasty lager. Could drink these all day',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/150945_10151461683838745_503756954_n.jpg?oh=8306b48b85dd2ab720634c9d1296ab3b&oe=58810A78',
	link:'https://www.facebook.com/photo.php?fbid=10151461683838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel',
	pct:5.4,
	desc:'A beer for all occasions',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/22402_10151315677898745_961047009_n.jpg?oh=e7fd24313c97847dd722362bcd8e3912&oe=58864354',
	link:'https://www.facebook.com/photo.php?fbid=10151315677898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keler',
	pct:null,
	desc:'Fantastic after a long day',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64607_10151798820233745_1697119288_n.jpg?oh=4e5d34f47cd1570811390471ee903ac2&oe=583A4FCF',
	link:'https://www.facebook.com/photo.php?fbid=10151798820233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ambar',
	pct:5.2,
	desc:'Session beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/540216_10151798819258745_1593913527_n.jpg?oh=8884bbb545c93de4bebe06952134bec8&oe=5885D984',
	link:'https://www.facebook.com/photo.php?fbid=10151798819258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo gran reserva',
	pct:6.4,
	desc:'A bit malty but mostly smooth',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/944493_10151798819313745_233015169_n.jpg?oh=11126f2c5aa76019f5e0c496662df222&oe=58739A12',
	link:'https://www.facebook.com/photo.php?fbid=10151798819313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koenigsbier',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/983885_10151694536943745_1632093000_n.jpg?oh=6eb0758ad150cde57e44b1cf5a7eecc7&oe=587E0012',
	link:'https://www.facebook.com/photo.php?fbid=10151694536943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quilmes',
	pct:4.9,
	desc:'Average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/65636_10151694536878745_1850782094_n.jpg?oh=0f8a5848fc44dbc4e955d04000d8c5f4&oe=5879F877',
	link:'https://www.facebook.com/photo.php?fbid=10151694536878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blas trigo',
	pct:6.0,
	desc:'A strange taste. Almost like a lambic. Even enjoyed by non beer drinkers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1011466_10151798821318745_54743244_n.jpg?oh=9823bb8de41f1cd9fdad54fb8df1e90a&oe=587BEE8C',
	link:'https://www.facebook.com/photo.php?fbid=10151798821318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faro Lambic',
	pct:4.5,
	desc:'A kind of tangy flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/252348_10151694537033745_65345877_n.jpg?oh=b81dd186cfc772d5adf04d15919e36cd&oe=583CA0DA',
	link:'https://www.facebook.com/photo.php?fbid=10151694537033745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skull splitter',
	pct:8.5,
	desc:'Every mouthful is like being punched in the neck. A mans bev',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/292440_10151694537253745_171550675_n.jpg?oh=048166402cd799e28c422d44b539d216&oe=5883FB90',
	link:'https://www.facebook.com/photo.php?fbid=10151694537253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sagres Bohemia',
	pct:6.2,
	desc:'Easy drinking for the strength',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/261740_10151694537308745_1696408161_n.jpg?oh=ea39c9e3435a86b6b37413a35de86ee9&oe=587C1275',
	link:'https://www.facebook.com/photo.php?fbid=10151694537308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious original pale ale',
	pct:3.9,
	desc:'Flowery',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/943639_10151798797268745_543942826_n.jpg?oh=4731b22f8b3085ae216d03004b217808&oe=5881F2F5',
	link:'https://www.facebook.com/photo.php?fbid=10151798797268745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Centennial IPA',
	pct:7.2,
	desc:'Slightly too strong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1070104_10151798797103745_60498930_n.jpg?oh=5d5925db73a791b9f4c4db4c83cbb6aa&oe=583CA89F',
	link:'https://www.facebook.com/photo.php?fbid=10151798797103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wild beer epic saison',
	pct:5.0,
	desc:'Different but not very good',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/73345_10151798799468745_1877528478_n.jpg?oh=10b8c27edb0c28169f38be09b0edc2bf&oe=583B85B0',
	link:'https://www.facebook.com/photo.php?fbid=10151798799468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The wild beer co Bliss',
	pct:6.0,
	desc:'Weird as hell. Is that ginger ?',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1001179_10151798797773745_1783696922_n.jpg?oh=13d31e279db12e519efa34b4034d0509&oe=587FCBF3',
	link:'https://www.facebook.com/photo.php?fbid=10151798797773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Porter',
	pct:6.5,
	desc:'Unexpectedly smooth',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1075890_10151798799218745_348684892_n.jpg?oh=f1da23fa7e348afa6ccc9ddb367db73d&oe=5839CEE6',
	link:'https://www.facebook.com/photo.php?fbid=10151798799218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'01|02',
	pct:5.4,
	desc:'Plain',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/64066_10151798799093745_1495677337_n.jpg?oh=db7304aaed3efd58d332c01e152ada08&oe=587F5483',
	link:'https://www.facebook.com/photo.php?fbid=10151798799093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu winterbier',
	pct:5.5,
	desc:'Not sure what it has to do with winter',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/74388_10151428532683745_883935005_n.jpg?oh=b79942c8b38915bdaebdb2be932e2fa5&oe=587F0CC3',
	link:'https://www.facebook.com/photo.php?fbid=10151428532683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Benediktiner',
	pct:5.4,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/598459_10151331653573745_57128822_n.jpg?oh=2c2b37c30bec07a86c8b98dd85e93d75&oe=5878B4BC',
	link:'https://www.facebook.com/photo.php?fbid=10151331653573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spaten',
	pct:5.2,
	desc:'Average German beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/602999_10151798820463745_26311115_n.jpg?oh=79c1430b69cf754769836657952725b5&oe=587CB069',
	link:'https://www.facebook.com/photo.php?fbid=10151798820463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paulaner',
	pct:4.5,
	desc:'Still not a fan of wheat beer. Also not happy when this doesn\'t come in a stein',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542113_10151428531848745_1285156274_n.jpg?oh=1c965fdb3168a94314fb7c296b625a11&oe=587F15B0',
	link:'https://www.facebook.com/photo.php?fbid=10151428531848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Erdinger',
	pct:5.3,
	desc:'A German classic',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/312687_10151396304703745_1460506547_n.jpg?oh=241580480239a294dcdcd9fae45398ce&oe=587305A4',
	link:'https://www.facebook.com/photo.php?fbid=10151396304703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lowenbräu',
	pct:5.2,
	desc:'An old favourite',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1006322_10151854990003745_1367385970_n.jpg?oh=4ad7ba45809a3b81a762a9649ac85615&oe=586E4C2B',
	link:'https://www.facebook.com/photo.php?fbid=10151854990003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grafenwalder',
	pct:4.8,
	desc:'Plain and easy to drink. Also cheap',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/72182_10151649174918745_777169044_n.jpg?oh=46aeb528f66ba7143e28248d9148dcb7&oe=586E4143',
	link:'https://www.facebook.com/photo.php?fbid=10151649174918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Köstritzer schwarzbier',
	pct:4.8,
	desc:'Milder than a dark beer normally is',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1920083_10152293088098745_591597385_n.jpg?oh=0400f67e0916efadc431019d01782b99&oe=58780E1A',
	link:'https://www.facebook.com/photo.php?fbid=10152293088098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rheinbacher',
	pct:4.8,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/644125_10151296241128745_1291306382_n.jpg?oh=ed53d97f8e9ca07c677fc3fea405b3da&oe=58803E36',
	link:'https://www.facebook.com/photo.php?fbid=10151296241128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoegaarden blanche',
	pct:4.9,
	desc:'Not a white beer fan',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/312594_10151396305888745_722386464_n.jpg?oh=f9f95f432d3be51d8bb305ffa1706525&oe=586ABC5A',
	link:'https://www.facebook.com/photo.php?fbid=10151396305888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bitburger',
	pct:4.8,
	desc:'Not my favourite 1L beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/45381_10151798800163745_1715529842_n.jpg?oh=1b619e62e904e0cf552707a027f88bcb&oe=587F3356',
	link:'https://www.facebook.com/photo.php?fbid=10151798800163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fischer\'s stiftungbräu helles',
	pct:5.1,
	desc:'Could drink this all day',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1016879_10151798800588745_1406598038_n.jpg?oh=964c55a7ed84aca4f8a31d2c8c3994fb&oe=58761D22',
	link:'https://www.facebook.com/photo.php?fbid=10151798800588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rothaus Pils',
	pct:5.1,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/263281_10151428533418745_1142185316_n.jpg?oh=d100318a2ead2a4db5bad7500bc28c5d&oe=5868D880',
	link:'https://www.facebook.com/photo.php?fbid=10151428533418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Konig pils',
	pct:4.9,
	desc:'Standard German',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1743537_10152293088048745_37653094_n.jpg?oh=7328d7a729e406802df7fc2fcdf8ce4e&oe=586B1187',
	link:'https://www.facebook.com/photo.php?fbid=10152293088048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau',
	pct:5.1,
	desc:'Oktoberfest goodness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/2771_10152001625293745_732438079_n.jpg?oh=84c7f757569e075a9095f2910c60b2be&oe=586F1B55',
	link:'https://www.facebook.com/photo.php?fbid=10152001625293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hacker-Pschorr',
	pct:5.8,
	desc:'Oktoberfest goodness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1376515_10152001625798745_1787795583_n.jpg?oh=5231f809f690e08964409becc19125e4&oe=5876634A',
	link:'https://www.facebook.com/photo.php?fbid=10152001625798745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'DAB',
	pct:5.0,
	desc:'Disappointing',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/525742_10151860439343745_1260154559_n.jpg?oh=961955f56492d1bf7a6be229047b1a1b&oe=58695CB5',
	link:'https://www.facebook.com/photo.php?fbid=10151860439343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Augustinerbrau',
	pct:5.2,
	desc:'Alright',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1375936_10152001624743745_1619318099_n.jpg?oh=a10718b7bdbc91f45bbdcb043b7cb53f&oe=587C3792',
	link:'https://www.facebook.com/photo.php?fbid=10152001624743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxlrainer',
	pct:5.3,
	desc:'Not too bad',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1385612_10152001625738745_155180417_n.jpg?oh=e7c6c18afd61da0bde3f6d29641701c4&oe=58746F9F',
	link:'https://www.facebook.com/photo.php?fbid=10152001625738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Yakima Red',
	pct:4.1,
	desc:'Pleasant',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/992917_10151798801088745_1382376594_n.jpg?oh=f226efb9da4f22561f35befcfd364386&oe=5870A8EA',
	link:'https://www.facebook.com/photo.php?fbid=10151798801088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Stout',
	pct:4.5,
	desc:'I could have another',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069371_10151798801138745_1255664168_n.jpg?oh=1aaffd31de2a73df5c1e0ce83dd1a1e0&oe=583A0505',
	link:'https://www.facebook.com/photo.php?fbid=10151798801138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Pilsner',
	pct:4.4,
	desc:'Not my favourite pilsner',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/999024_10151798817478745_821421302_n.jpg?oh=7a002d914b4ab6df7a6980e7c3d048ff&oe=587D2748',
	link:'https://www.facebook.com/photo.php?fbid=10151798817478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Charlie\'s',
	pct:5.0,
	desc:'I think charlie may be homeless',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/374377_10151798802143745_204094323_n.jpg?oh=4a8f7cef69cc0287ea12f2f4366c15ab&oe=58868B25',
	link:'https://www.facebook.com/photo.php?fbid=10151798802143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Spindrift',
	pct:5.0,
	desc:'Kind of a pale ale taste. The first time I\'ve seen a beer in a blue bottle',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069901_10151798803058745_68050022_n.jpg?oh=18cbdac93a33f1678c19b0a93987c7af&oe=58808F87',
	link:'https://www.facebook.com/photo.php?fbid=10151798803058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hook pilsner',
	pct:5.3,
	desc:'A mild flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069935_10151798817208745_1577449594_n.jpg?oh=05f13f80a9892d004f5165e0bf7cd354&oe=586AC7DB',
	link:'https://www.facebook.com/photo.php?fbid=10151798817208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark Lord',
	pct:5.0,
	desc:'Really needs a lord of the rings reference on the label',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/935039_10151798818428745_2074781709_n.jpg?oh=893879bae12b5f0b072c8146cde4756f&oe=583CC994',
	link:'https://www.facebook.com/photo.php?fbid=10151798818428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moosehead',
	pct:5.0,
	desc:'Would take some getting used to',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1000219_10151798818558745_1372926994_n.jpg?oh=93ee91f51fda6be70c923da392325c4a&oe=587195AC',
	link:'https://www.facebook.com/photo.php?fbid=10151798818558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Broadside',
	pct:4.7,
	desc:'The bitterness takes some time to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1006000_10151798819328745_2080424026_n.jpg?oh=50b33c8b81e6ecfddd09b3fa35ec2c63&oe=587965E6',
	link:'https://www.facebook.com/photo.php?fbid=10151798819328745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstök Pale ale',
	pct:5.6,
	desc:'A nice pale ale with a hint of volcano',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/559118_10151798821313745_705644987_n.jpg?oh=14a7d332fe8e818313a87c358f3b3694&oe=586CB25E',
	link:'https://www.facebook.com/photo.php?fbid=10151798821313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstok toasted porter',
	pct:6.0,
	desc:'A good morning beer. With bacon and eggs. Also beer #300!',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1069403_10151798927653745_683815255_n.jpg?oh=fceee80aca9a48717a773225b95b89a3&oe=58791316',
	link:'https://www.facebook.com/photo.php?fbid=10151798927653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leo',
	pct:5.0,
	desc:'Easy drinking, great in hot weather',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1947644_10152280801063745_1171315228_n.jpg?oh=9149cbfd8b5b28d6bb7d310451fc7ac6&oe=5880F2BB',
	link:'https://www.facebook.com/photo.php?fbid=10152280801063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tiger',
	pct:5.0,
	desc:'A good choice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/549260_10151563946038745_1772775906_n.jpg?oh=01b6da24f1dd91e5dfb4367953254f58&oe=5873B9AE',
	link:'https://www.facebook.com/photo.php?fbid=10151563946038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chang export',
	pct:5.0,
	desc:'Take the regular low quality chang and add way too much malt',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1969273_10152280801073745_1139224814_n.jpg?oh=37095ce13154ab67dc6ec3f1cb8fbcdc&oe=58678CE5',
	link:'https://www.facebook.com/photo.php?fbid=10152280801073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Singha',
	pct:5.05,
	desc:'Served in the authentic Thai way. With a glass filled with ice',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/522410_10151602279523745_2144170744_n.jpg?oh=5a4c382d18e161de82a51231afc1d0a3&oe=58798D93',
	link:'https://www.facebook.com/photo.php?fbid=10151602279523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao',
	pct:5.0,
	desc:'Fairly standard lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/553908_10152001638218745_428160786_n.jpg?oh=1a127056b61c9bffe1f7e447ab15785c&oe=5880B9BD',
	link:'https://www.facebook.com/photo.php?fbid=10152001638218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tsingtao',
	pct:4.7,
	desc:'China standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/968819_10151798821173745_1903896463_n.jpg?oh=a102e084ef26c9e77d46d34ba3837bed&oe=586E8E3B',
	link:'https://www.facebook.com/photo.php?fbid=10151798821173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sapporo',
	pct:5.0,
	desc:'Solid can, solid beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1002989_10151798803018745_1022069808_n.jpg?oh=722653981c2ac94435406863cf5ed130&oe=5871DE27',
	link:'https://www.facebook.com/photo.php?fbid=10151798803018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino red rice',
	pct:7.0,
	desc:'A strange taste, takes a bit to get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q82/p480x480/1157401_10151888670423745_99231248_n.jpg?oh=a4191053b69dd8640c3c026fea2a3ca7&oe=583C7FEB',
	link:'https://www.facebook.com/photo.php?fbid=10151888670423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Ginger ale',
	pct:8.0,
	desc:'A mild ginger taste. The warming sensation makes me think this isn\'t meant for summer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942413_10151798927708745_1675671077_n.jpg?oh=d26bbcafcb3e4d716ec903c7e88e3239&oe=586E63BD',
	link:'https://www.facebook.com/photo.php?fbid=10151798927708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino pale ale',
	pct:5.5,
	desc:'Surprisingly good. Wish I bought more than one',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1011658_10151854990103745_2038671130_n.jpg?oh=57576d3990ca339fb804a314099b257a&oe=58830008',
	link:'https://www.facebook.com/photo.php?fbid=10151854990103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi',
	pct:5.0,
	desc:'A classic',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/537524_10151563945728745_1100203805_n.jpg?oh=4f41b9c125360d75b3c536ca819cdafb&oe=5871A1F4',
	link:'https://www.facebook.com/photo.php?fbid=10151563945728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino japaneses classic ale',
	pct:7.0,
	desc:'Such a letdown after the pale ale',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185821_10151854990343745_429136882_n.jpg?oh=e5359cf6b60fa90cafb67152c161dcd5&oe=58786F05',
	link:'https://www.facebook.com/photo.php?fbid=10151854990343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Nest Commemorative Ale',
	pct:8,
	desc:'The perfect beer for new years. Or any other time',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970685_10151854991538745_1076029058_n.jpg?oh=f1f5c4c6847b4580d83758b6df4f807e&oe=586770D0',
	link:'https://www.facebook.com/photo.php?fbid=10151854991538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoopers Ginger brew',
	pct:4.0,
	desc:'Exactly how a ginger beer should taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185949_10151854991548745_379811355_n.jpg?oh=64d9b59f2b380bb47d12eaedbaf96707&oe=586DCD13',
	link:'https://www.facebook.com/photo.php?fbid=10151854991548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Strongroom dark',
	pct:4.5,
	desc:'Rather creamy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1175248_10151860440378745_2027227367_n.jpg?oh=796dd2b1e8dbb637487f32c49cb96daf&oe=587F69B4',
	link:'https://www.facebook.com/photo.php?fbid=10151860440378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boondoggle blonde ale',
	pct:5.0,
	desc:'Some sort of quasi good beer',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970910_10151860440438745_1474360215_n.jpg?oh=74ea455e9b5cc5497c65bc12759ce07a&oe=583C0503',
	link:'https://www.facebook.com/photo.php?fbid=10151860440438745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Banks caribbean lager',
	pct:4.7,
	desc:'Mild and smooth',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1157507_10151860440488745_679128594_n.jpg?oh=b48093bf69677ae9d0efc42a59562d5f&oe=587CA791',
	link:'https://www.facebook.com/photo.php?fbid=10151860440488745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nutty black',
	pct:3.9,
	desc:'Not as awful as expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1173809_10151860441013745_1894761382_n.jpg?oh=f3c4d1e8161c1eb92f5f142c60c707f5&oe=586A3523',
	link:'https://www.facebook.com/photo.php?fbid=10151860441013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ESB',
	pct:5.5,
	desc:'A tangy off flavour. Like someone dipped their balls in the keg',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/999589_10151860441473745_1970036928_n.jpg?oh=1e4696ddc3b4d70d2cebac1eb232b5ef&oe=586F0DEA',
	link:'https://www.facebook.com/photo.php?fbid=10151860441473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hylder Blonde',
	pct:4.2,
	desc:'A little bit too much flower',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/542217_10151860441663745_480799893_n.jpg?oh=ccda04520127b60cca1afcb4b8297eee&oe=587B941D',
	link:'https://www.facebook.com/photo.php?fbid=10151860441663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The big inflatable cowboy hat',
	pct:10.5,
	desc:'Flavourful without being too strong',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970683_10151860442323745_1389595186_n.jpg?oh=116e2020bb4eb972b2178132965da896&oe=586B8E51',
	link:'https://www.facebook.com/photo.php?fbid=10151860442323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Long hammer IPA',
	pct:5.9,
	desc:'Smash the hammer!',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1173745_10151860442463745_736142328_n.jpg?oh=4dc1653c7125d3638ad7fb40af39e7e2&oe=5882E974',
	link:'https://www.facebook.com/photo.php?fbid=10151860442463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage light ale',
	pct:3.2,
	desc:'Why did I even buy this tiny weak beer?',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1003533_10151860443063745_1669379479_n.jpg?oh=8ed0d8d305db955ca81224c6957bb4e5&oe=586DAEA9',
	link:'https://www.facebook.com/photo.php?fbid=10151860443063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden Hells',
	pct:4.6,
	desc:'Not too bad',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1469967_10152147735243745_1919940570_n.jpg?oh=a614c97c9d92cda8bbfaf95972f578ba&oe=588520A0',
	link:'https://www.facebook.com/photo.php?fbid=10152147735243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden gentlemans wit',
	pct:4.3,
	desc:'I remember nothing about this beer. Must have been a good night',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1176312_10151860443023745_856797078_n.jpg?oh=a14ca3ecbb1cc433e302172229d5f68b&oe=5880E79D',
	link:'https://www.facebook.com/photo.php?fbid=10151860443023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point pale ale',
	pct:5.4,
	desc:'Pretty mundane',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185998_10151860443158745_158593717_n.jpg?oh=cffe0d22ed6994afc6aa2a549243c1eb&oe=5880D2E9',
	link:'https://www.facebook.com/photo.php?fbid=10151860443158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caribbean scene',
	pct:null,
	desc:'Not worth getting a second one',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185783_10151860443868745_1132451963_n.jpg?oh=3f82d3c65bb6b320407812028441c780&oe=58815C81',
	link:'https://www.facebook.com/photo.php?fbid=10151860443868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cusquena',
	pct:5.0,
	desc:'Goes badly with fajitas',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/555522_10151860443808745_1012342431_n.jpg?oh=70781bb746d1ed59323cba6f61eb5d47&oe=58785B91',
	link:'https://www.facebook.com/photo.php?fbid=10151860443808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Utenos classic',
	pct:5.2,
	desc:'Stock standard beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1175115_10151860444553745_1702342354_n.jpg?oh=19ff83538274b50b79a5c01471835cc5&oe=583A662F',
	link:'https://www.facebook.com/photo.php?fbid=10151860444553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk',
	pct:4.8,
	desc:'An all round average beer. But with a cool bottle',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185029_10151860445333745_1637600629_n.jpg?oh=9c265da3b484b7c37359fea498a283fc&oe=587A7778',
	link:'https://www.facebook.com/photo.php?fbid=10151860445333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu',
	pct:4.3,
	desc:'Windmills are awesome',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1235059_10151929073993745_1887796007_n.jpg?oh=3aaf024ad064455a1a5cbbc398927734&oe=58810EE4',
	link:'https://www.facebook.com/photo.php?fbid=10151929073993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Baltika 7',
	pct:5.5,
	desc:'Really hard to drink',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/65647_10151694536248745_526286442_n.jpg?oh=bd695377ef572eb88b4056b963e9fc57&oe=5881FBAD',
	link:'https://www.facebook.com/photo.php?fbid=10151694536248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk Temhoe',
	pct:4.7,
	desc:'The purple label made me expect poison. But it\'s actually a decent beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1390556_10152001638343745_1466512598_n.jpg?oh=0d167b80cb5a0d68b2d15ce97fcddb91&oe=583AE1E6',
	link:'https://www.facebook.com/photo.php?fbid=10152001638343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'злашен даб',
	pct:4.5,
	desc:'An interesting flavour, but not one I really like',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9699_10151602279038745_1469910721_n.jpg?oh=dec0af0f98e04d835019166d595d702c&oe=583B40C9',
	link:'https://www.facebook.com/photo.php?fbid=10151602279038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zelta premium',
	pct:5.2,
	desc:'I like where this beer is going',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1151012_10151888666008745_854242907_n.jpg?oh=065ad20411c21d033f990b9c19077c8a&oe=587619D1',
	link:'https://www.facebook.com/photo.php?fbid=10151888666008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cesu premium',
	pct:5.2,
	desc:'A bit wrong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1174664_10151888665988745_1905015784_n.jpg?oh=117affe0f1b4a1059049daef7f190a6c&oe=586ACB02',
	link:'https://www.facebook.com/photo.php?fbid=10151888665988745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams southwold innovation',
	pct:6.7,
	desc:'A nice pale but just a bit of wrongness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1238809_10151888666788745_1212313484_n.jpg?oh=c31b45f90726967b882748cd8ff22ab7&oe=5881E873',
	link:'https://www.facebook.com/photo.php?fbid=10151888666788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Czech Norris',
	pct:6.7,
	desc:'Not the roundhouse kick of awesome I expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1176212_10151888667313745_1242801185_n.jpg?oh=970c6d6dbc925e4277b0b4f612e2fd9f&oe=5883BB6A',
	link:'https://www.facebook.com/photo.php?fbid=10151888667313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'F.X. Buckley',
	pct:3.8,
	desc:'Ges ugly really quick',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1174601_10151888668333745_2024277149_n.jpg?oh=d9094a24755c71424caf1dc50e3fb1d1&oe=58809A4D',
	link:'https://www.facebook.com/photo.php?fbid=10151888668333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris pilzens',
	pct:4.2,
	desc:'Lacks any real flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/1238101_10151888670483745_714083820_n.jpg?oh=18c6a2bf0dc05562f27796b4da653858&oe=586A0A4A',
	link:'https://www.facebook.com/photo.php?fbid=10151888670483745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Butauty',
	pct:5.5,
	desc:'Malty crapness. Why make such a big bottle for a crap beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185491_10151888671543745_1781451969_n.jpg?oh=4564feec45e5fc8355f8140c77e0512f&oe=58674E66',
	link:'https://www.facebook.com/photo.php?fbid=10151888671543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brakspear Oxford gold',
	pct:4.6,
	desc:'Did not deliver what the label promised',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/76895_10151929068333745_1039559147_n.jpg?oh=d05ea6b02d3d506f841d6f7ca8bc3ac4&oe=58799757',
	link:'https://www.facebook.com/photo.php?fbid=10151929068333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Betty Stogs',
	pct:4.0,
	desc:'Tastes pretty much as you would expect from the name',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13890_10151929069588745_726766227_n.jpg?oh=cea399ef2cbab22542fc235291ad33c1&oe=587613F6',
	link:'https://www.facebook.com/photo.php?fbid=10151929069588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Golden Ale',
	pct:4.7,
	desc:'One of those brewing companies that thinks traditional means better',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/37805_10151929069633745_1476415530_n.jpg?oh=96346ca081deb109c78bc0bd4bd70853&oe=58699C95',
	link:'https://www.facebook.com/photo.php?fbid=10151929069633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Best Bitter',
	pct:3.7,
	desc:'I\'ll never understand what people see in a bitter',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1233387_10151929070703745_1019382535_n.jpg?oh=69df07a999468abb8c4f14c2afc23979&oe=583995BB',
	link:'https://www.facebook.com/photo.php?fbid=10151929070703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Mild',
	pct:3.7,
	desc:'This company seems incapable of making a good beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185966_10151929070968745_2126426266_n.jpg?oh=15086e1a734f4bb9ab85aa06e4187789&oe=5886041D',
	link:'https://www.facebook.com/photo.php?fbid=10151929070968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s ruby red ale',
	pct:4.3,
	desc:'Probably the best of a bad bunch',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1233970_10151929073588745_1740349447_n.jpg?oh=39a4709cb8a895651492aa49a33e12c2&oe=586C4BE8',
	link:'https://www.facebook.com/photo.php?fbid=10151929073588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ekstra',
	pct:5.2,
	desc:'So much better than expected considering it\'s an extra',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1146736_10151860444768745_544406358_n.jpg?oh=42b3a596115d587b8745e9135325dd5d&oe=587069FF',
	link:'https://www.facebook.com/photo.php?fbid=10151860444768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys',
	pct:4.6,
	desc:'Finally found some Lithuanian beer. A very smooth lager',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1185772_10151860443958745_1792378907_n.jpg?oh=33569b05f5ef086287c8fff7e0603e60&oe=58708158',
	link:'https://www.facebook.com/photo.php?fbid=10151860443958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltijos',
	pct:5.8,
	desc:'A little bit too bitter for my taste',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1208565_10151929069708745_1120619541_n.jpg?oh=7d503e8014f1e931bf42514e661da57e&oe=587207E9',
	link:'https://www.facebook.com/photo.php?fbid=10151929069708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltas white',
	pct:5.0,
	desc:'Can\'t get over the bite of wheat beers',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/563535_10151929074098745_379750960_n.jpg?oh=92676f85df74d62e834629f7b73fb7fd&oe=58716782',
	link:'https://www.facebook.com/photo.php?fbid=10151929074098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys old port ale',
	pct:5.6,
	desc:'A lot smoother than expected',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1234836_10152293116538745_626754395_n.jpg?oh=96236cf28c156cbd3ac6b306ff7ac057&oe=58815242',
	link:'https://www.facebook.com/photo.php?fbid=10152293116538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Luksus',
	pct:5.2,
	desc:'Yep, it’s a lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1484218_10152147730358745_1572080029_n.jpg?oh=f2d94d09431e857eb72239d602d3bb0c&oe=58760447',
	link:'https://www.facebook.com/photo.php?fbid=10152147730358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kanapinis',
	pct:5.3,
	desc:'Malty goodness in a great bottle',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1186120_10151860445063745_1601572346_n.jpg?oh=b8674668a38f95a61bc7875d55ab1663&oe=586D474E',
	link:'https://www.facebook.com/photo.php?fbid=10151860445063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keptinis',
	pct:5.7,
	desc:'Not at all excited by this. Not even a semi',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1240201_10151929073793745_2035177594_n.jpg?oh=2999f8c8cf8f775512fd1b07604161e5&oe=5874125A',
	link:'https://www.facebook.com/photo.php?fbid=10151929073793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aladaris Gaisais',
	pct:5.0,
	desc:'Another quality baltic beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603023_10152001619908745_1091913425_n.jpg?oh=b35b1cd619fa66b8804a0d98560d4ded&oe=58714302',
	link:'https://www.facebook.com/photo.php?fbid=10152001619908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Porteris',
	pct:6.8,
	desc:'Not a bad porter',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1891209_10152293116448745_1394991978_n.jpg?oh=c76a3020729788a5732efcb5dce3a34f&oe=583C15FD',
	link:'https://www.facebook.com/photo.php?fbid=10152293116448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas engleman',
	pct:5.2,
	desc:'Unimpressive',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1176307_10151888665863745_1280335301_n.jpg?oh=79380f41a51a5afba3bb4a68c47bfae6&oe=5885F9F2',
	link:'https://www.facebook.com/photo.php?fbid=10151888665863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Bravoro',
	pct:5.2,
	desc:'A little bit wrong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1236122_10151929070963745_949716381_n.jpg?oh=174f70bfc1edf88451d54c6afd75d779&oe=587E8CFD',
	link:'https://www.facebook.com/photo.php?fbid=10151929070963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Jubiliejinis 160',
	pct:5.3,
	desc:'Nice and smooth, and in a cool bottle',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1385338_10152001620008745_462276383_n.jpg?oh=78edbd99b0b5cf99072bbc79c6d3e0c8&oe=586E57EC',
	link:'https://www.facebook.com/photo.php?fbid=10152001620008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deviant dales pale ale',
	pct:8,
	desc:'Light for the strength',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/526556_10151929072623745_428217529_n.jpg?oh=063ad4bb5273dc5bcea30832163fd14b&oe=5879B518',
	link:'https://www.facebook.com/photo.php?fbid=10151929072623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mama\'s Little Yella Pils',
	pct:5.3,
	desc:'An easy drinking pils',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1187248_10151929072773745_1085795541_n.jpg?oh=c2a9dc6eb7cb606114272139d7316657&oe=5882D5D7',
	link:'https://www.facebook.com/photo.php?fbid=10151929072773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'McEwans Export',
	pct:4.5,
	desc:'Not as rubbish as the the can looks',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1384073_10152001619653745_1344996131_n.jpg?oh=c2eab81aabb16c7d0f5e7da4aec65e64&oe=58740338',
	link:'https://www.facebook.com/photo.php?fbid=10152001619653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cave creek chili beer',
	pct:4.2,
	desc:'A nice balance of chilli and beer. And yes that is a whole chilli in the bottle',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1378394_10152001620853745_543682046_n.jpg?oh=4e4889e6b35ca3543a2be51ffb6814a7&oe=5885C7D7',
	link:'https://www.facebook.com/photo.php?fbid=10152001620853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan dubbel',
	pct:6.4,
	desc:'Strong chocolate taste but takes a while to get used to',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/563194_10152001621188745_696002352_n.jpg?oh=e2fd0dfc9891f7813194806483427438&oe=5874934A',
	link:'https://www.facebook.com/photo.php?fbid=10152001621188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan strong golden belgian ale',
	pct:8.0,
	desc:'A bit harsh for what I would call a golden ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1497799_10152147732653745_1203656587_n.jpg?oh=5ae3bd67a21637fa80838a9935ef8c99&oe=5874E541',
	link:'https://www.facebook.com/photo.php?fbid=10152147732653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan Quad',
	pct:11.2,
	desc:'One of the strangest beers I’ve tasted. Like trying to cross a lambic with a stout',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1486770_10152147730063745_1162438061_n.jpg?oh=5ac571db1bb5dd0d841effd906776a17&oe=58769CFD',
	link:'https://www.facebook.com/photo.php?fbid=10152147730063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan single',
	pct:4.8,
	desc:'Nice label, shit beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1376370_10152001622893745_406801645_n.jpg?oh=f2e05e4deaa1ab86aa149e3382a987f0&oe=58741874',
	link:'https://www.facebook.com/photo.php?fbid=10152001622893745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The norseman',
	pct:5.0,
	desc:'An average ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1379331_10152001623128745_1319626583_n.jpg?oh=74fe455a732972ec12c17ed2229cc4bf&oe=586F0A28',
	link:'https://www.facebook.com/photo.php?fbid=10152001623128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trident',
	pct:5.0,
	desc:'Like a red Guinness gone wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1381987_10152001622888745_1624478487_n.jpg?oh=bba683391eff130df143bbcbf9f84ac8&oe=5838C0BF',
	link:'https://www.facebook.com/photo.php?fbid=10152001622888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis Grand Select',
	pct:5.4,
	desc:'A bit of a hobo taste, but not terrible',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1381183_10152001624088745_284273692_n.jpg?oh=353c6585e90e79319bd51e9b4a2bbdbe&oe=586A797F',
	link:'https://www.facebook.com/photo.php?fbid=10152001624088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batemans Combined Harvest',
	pct:4.7,
	desc:'I\'m amazed that this doesn\'t taste like an absolute mess',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1383443_10152001624583745_873432820_n.jpg?oh=254167b7869b385dcddd021fdece9d6e&oe=5838DC52',
	link:'https://www.facebook.com/photo.php?fbid=10152001624583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Dumaku',
	pct:null,
	desc:'Pretty nice',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1381516_10152001638348745_1868079701_n.jpg?oh=7f05396af2ea92c7d2c68abd23c010e0&oe=586F88AC',
	link:'https://www.facebook.com/photo.php?fbid=10152001638348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Post road pumpkin ale',
	pct:5.0,
	desc:'Tastes like christmas',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1512830_10152147731138745_971828677_n.jpg?oh=87b7191289c679edc53f3c31d8d3d0eb&oe=5839270A',
	link:'https://www.facebook.com/photo.php?fbid=10152147731138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burning Sky Aurora',
	pct:5.6,
	desc:'Not too bitter with a mild hoppy taste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1476223_10152147732298745_333484722_n.jpg?oh=29ad8ae12349b343b3f671d1f21ffe95&oe=5838E007',
	link:'https://www.facebook.com/photo.php?fbid=10152147732298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewmeister Armageddon',
	pct:65,
	desc:'Was supposedly the strongest beer in the world but that is a complete lie. This beer is max 20% abv. I\'ve never been lied too this badly in my life',
	score:0,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1521885_10152147732818745_1092668016_n.jpg?oh=0f2d1d7943f7419b51dcf138c806db46&oe=586B6AC3',
	link:'https://www.facebook.com/photo.php?fbid=10152147732818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Blonde',
	pct:4.8,
	desc:'Kind of tasty lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/579360_10152147733223745_1201965133_n.jpg?oh=29d482a04bd5240003dd2ebdca6789ff&oe=58729414',
	link:'https://www.facebook.com/photo.php?fbid=10152147733223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harvey\'s Kiss',
	pct:4.8,
	desc:'Kind of warming. Better than the label suggests',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1482844_10152147733228745_1616012407_n.jpg?oh=46cebdd936590e83badce1e3e89b458d&oe=5867628B',
	link:'https://www.facebook.com/photo.php?fbid=10152147733228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arany Aszok',
	pct:4.3,
	desc:'Easy drinking lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1458701_10152147733363745_127688331_n.jpg?oh=142cd6571d973e20a02e0087763b6e14&oe=583CAB3A',
	link:'https://www.facebook.com/photo.php?fbid=10152147733363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Borsodi',
	pct:4.6,
	desc:'Not much flavour at all',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1513298_10152147733513745_1123080804_n.jpg?oh=86e4255550b8b26798ca219f6978d6c0&oe=58659AD7',
	link:'https://www.facebook.com/photo.php?fbid=10152147733513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dreher',
	pct:5.2,
	desc:'Hungarian standard',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1479455_10152147733863745_266822035_n.jpg?oh=b7ff7d5a4a44dffe9eb3abe8da211d7e&oe=586B2F68',
	link:'https://www.facebook.com/photo.php?fbid=10152147733863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zlaty bazant',
	pct:5.0,
	desc:'A tasteless Slovakian lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1507155_10152147733883745_1859906756_n.jpg?oh=142f5341c54afb1beb2f6ea716754527&oe=58738DD8',
	link:'https://www.facebook.com/photo.php?fbid=10152147733883745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Soproni',
	pct:4.5,
	desc:'Lager. Nothing more to say',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1513718_10152147734013745_2012942673_n.jpg?oh=29a8a27824e6d32cfcd375d456372ec6&oe=5869691A',
	link:'https://www.facebook.com/photo.php?fbid=10152147734013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel smieth organic lager',
	pct:5.0,
	desc:'Nothing special',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1526342_10152147734658745_1378507161_n.jpg?oh=4b83dd66f6c93868620b777cc44e4134&oe=58775FBD',
	link:'https://www.facebook.com/photo.php?fbid=10152147734658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nicholson\'s pale ale',
	pct:4.0,
	desc:'A slightly tangly pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1513323_10152147734918745_1271199559_n.jpg?oh=7b18ad9554d78bf9835f427f139368cd&oe=587A0165',
	link:'https://www.facebook.com/photo.php?fbid=10152147734918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meteor',
	pct:4.0,
	desc:'Normal London lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1012810_10152147735373745_584437479_n.jpg?oh=f066db029097fc93654849501db0145d&oe=58705D3F',
	link:'https://www.facebook.com/photo.php?fbid=10152147735373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Best',
	pct:4.0,
	desc:'Plain lager. Easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1520804_10152147735848745_1884810076_n.jpg?oh=14a1ab3e9750c234774a1a4282b5d6b1&oe=5870A5F4',
	link:'https://www.facebook.com/photo.php?fbid=10152147735848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknot Queboid',
	pct:8.0,
	desc:'A nice strong flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1520670_10152147736383745_1604295852_n.jpg?oh=cca3a7299446968f43581e8752cb0033&oe=58749A17',
	link:'https://www.facebook.com/photo.php?fbid=10152147736383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harveys Georgian Dragon',
	pct:4.7,
	desc:'A mild ruby ale with a slightly sweet taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1531869_10152147736428745_246396192_n.jpg?oh=c31a666fc6ef1e193d5922abfaa283ce&oe=5873F5D8',
	link:'https://www.facebook.com/photo.php?fbid=10152147736428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monty\'s ding dong',
	pct:4.4,
	desc:'Light and festive and drinkable',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911822_10152280800298745_1797219050_n.jpg?oh=84533efd6289115706dc7c045a7af65b&oe=58685C5D',
	link:'https://www.facebook.com/photo.php?fbid=10152280800298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Hop Studio Noel',
	pct:4.5,
	desc:'Some very strange hoppy flavour',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1618610_10152280800288745_1862858046_n.jpg?oh=8444e84f59999eff4c2725f4390d399a&oe=58812745',
	link:'https://www.facebook.com/photo.php?fbid=10152280800288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Woodlands Christmas special',
	pct:4.8,
	desc:'Very good for a British ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1623661_10152293086658745_850862784_n.jpg?oh=0f8828f52045b6bfbc739d1414218866&oe=58832B77',
	link:'https://www.facebook.com/photo.php?fbid=10152293086658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Uncle Scrooge',
	pct:4.5,
	desc:'No one was being cheap when making this one',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1966869_10152293086653745_1230920015_n.jpg?oh=5a287e154d30e73cc0bcc4b921da4510&oe=58811A28',
	link:'https://www.facebook.com/photo.php?fbid=10152293086653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheddar ales festive totty',
	pct:4.7,
	desc:'Not sure how totty applies in this context',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/988380_10152293086573745_484773090_n.jpg?oh=a81eea66ff280cf0b7a1ac5e7d604159&oe=586E1AA3',
	link:'https://www.facebook.com/photo.php?fbid=10152293086573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknott azimuth IPA',
	pct:5.8,
	desc:'An ok IPA',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1621734_10152293086743745_608289512_n.jpg?oh=a98028dbf951af751ca3e4c6d6670ed4&oe=58707CD1',
	link:'https://www.facebook.com/photo.php?fbid=10152293086743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog Atlantic lager',
	pct:4.7,
	desc:'Fruity and mild',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/993032_10152293086873745_958885686_n.jpg?oh=dbeb1a4680820df31e6a3683c98f1c44&oe=58378A28',
	link:'https://www.facebook.com/photo.php?fbid=10152293086873745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog snake dog',
	pct:7.1,
	desc:'A little harsh',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1982179_10152293086923745_434038155_n.jpg?oh=b0f2a23bb6bd6b1a3e4eb256353d2dd1&oe=586D5A95',
	link:'https://www.facebook.com/photo.php?fbid=10152293086923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe Triple',
	pct:8.5,
	desc:'Stronger and nicer than the standard',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1625649_10152280800668745_1746325328_n.jpg?oh=d43aa72656f5d230ec490b12727cbb06&oe=58830786',
	link:'https://www.facebook.com/photo.php?fbid=10152280800668745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe dark',
	pct:7.5,
	desc:'More of a fuller Leffe than a dark beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902725_10152293087758745_569610046_n.jpg?oh=fb2326ec08826eb9ee952096ea05c18f&oe=586A9761',
	link:'https://www.facebook.com/photo.php?fbid=10152293087758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe',
	pct:null,
	desc:'A strong Belgian taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/398737_10151396305948745_940904591_n.jpg?oh=ce7161960648a58fa38299d781b33c88&oe=586C1F1C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steen Brugge',
	pct:5.0,
	desc:'Not the biggest fan of this wheat beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911696_10152280800918745_1929684638_n.jpg?oh=36a91b03f06de45ab7b6165d393ca285&oe=5885819F',
	link:'https://www.facebook.com/photo.php?fbid=10152280800918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium Christmas',
	pct:10.0,
	desc:'Stronger than the originals and a little less unique',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1623626_10152280800643745_1481530083_n.jpg?oh=9a36fb8be8341b7ec9c14dade315b813&oe=58652F3C',
	link:'https://www.facebook.com/photo.php?fbid=10152280800643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium nocturnum',
	pct:8.5,
	desc:'Not as nice as the tremens',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1901197_10152280800558745_1902963784_n.jpg?oh=b54487447e241d61f29d5e5ebca349b8&oe=58764AB5',
	link:'https://www.facebook.com/photo.php?fbid=10152280800558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Passchendaele',
	pct:5.1,
	desc:'A lager with a Belgian ale flavour. Very strange',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13244_10152293087118745_389678283_n.jpg?oh=15cf0ec146f2e93a55b76e838265813d&oe=58816010',
	link:'https://www.facebook.com/photo.php?fbid=10152293087118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Qantelaar',
	pct:9.0,
	desc:'Very flavoursome but not too sweet. Not worth the €18 I paid though',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1924797_10152293087133745_1742289591_n.jpg?oh=489dc530bc82f86d47730ea5a4c294e7&oe=587C2DCC',
	link:'https://www.facebook.com/photo.php?fbid=10152293087133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cookie Beer',
	pct:8.0,
	desc:'Not as much cookie flavour as I was hoping',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1932219_10152280800273745_138064221_n.jpg?oh=64b9192f27753ee25017c091f3cd4946&oe=58773FA5',
	link:'https://www.facebook.com/photo.php?fbid=10152280800273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St bernardus',
	pct:10,
	desc:'Takes a bit to get used to but smooth after that',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902068_10152293087213745_1501844823_n.jpg?oh=a00f3b52a7c9b2d2aa135d600ffd7df4&oe=586ED8B9',
	link:'https://www.facebook.com/photo.php?fbid=10152293087213745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm',
	pct:5.4,
	desc:'A mild Belgian beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/988803_10152293087318745_73934001_n.jpg?oh=788cc92dae15fa1fee774b5637cc7b9d&oe=587F0CEB',
	link:'https://www.facebook.com/photo.php?fbid=10152293087318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grimbergen blonde',
	pct:6.7,
	desc:'An ok Trappist',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1517454_10152293087538745_1520731799_n.jpg?oh=50f0179aed69e10cd061cf2981008bbe&oe=58851EC6',
	link:'https://www.facebook.com/photo.php?fbid=10152293087538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chouffe',
	pct:8.0,
	desc:'Well rounded',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911857_10152293087523745_1264067765_n.jpg?oh=e2b99878004dd666e950ea49d79e6b7c&oe=5882C8C8',
	link:'https://www.facebook.com/photo.php?fbid=10152293087523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brugge tripel',
	pct:8.7,
	desc:'Like a lager that warms you up',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1662198_10152293087613745_1851257445_n.jpg?oh=b848671c89477287305d86fad73fcbf7&oe=5882D8BB',
	link:'https://www.facebook.com/photo.php?fbid=10152293087613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corsendonk',
	pct:7.5,
	desc:'Not as easy to drink as I was hoping',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1534405_10152147734558745_724921108_n.jpg?oh=1e99cc2e2d291ba573d31204d4882581&oe=586EF3D5',
	link:'https://www.facebook.com/photo.php?fbid=10152147734558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fonteinen oude geuze',
	pct:6.0,
	desc:'Not a particularly nice lambic',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1382815_10152001621173745_208469765_n.jpg?oh=f5dc3e82bd7032edcd9ee43b4188faea&oe=58759525',
	link:'https://www.facebook.com/photo.php?fbid=10152001621173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vedett',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/486956_10151296240913745_1196071675_n.jpg?oh=e1ce23a8506348f781584b96c830502f&oe=586D8F62',
	link:'https://www.facebook.com/photo.php?fbid=10151296240913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carolus classic',
	pct:8.5,
	desc:'Dark but not heavy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1782108_10152293087803745_1558065696_n.jpg?oh=c83a03e2d57c5b06b68cd81e9d388d2d&oe=583C5785',
	link:'https://www.facebook.com/photo.php?fbid=10152293087803745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orval',
	pct:6.2,
	desc:'A bit too harsh',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603000_10151798800068745_508626500_n.jpg?oh=ebc3c8915551e98c0d8a961aea687240&oe=587D9B03',
	link:'https://www.facebook.com/photo.php?fbid=10151798800068745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pauwel Kwak',
	pct:8,
	desc:'A mild Belgian beer. +1 for the sweet glass',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1521828_10152147734533745_969043237_n.jpg?oh=0728ab1f9fc4cffe63582cc3c59dbe58&oe=586ED59E',
	link:'https://www.facebook.com/photo.php?fbid=10152147734533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duvel',
	pct:8.5,
	desc:'Not as good as when you buy it in Belgium',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/6394_10151428524928745_265167117_n.jpg?oh=809086856fc4837e43a5077471e0af53&oe=58850E7A',
	link:'https://www.facebook.com/photo.php?fbid=10151428524928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Triple karmeliet',
	pct:8.4,
	desc:'I choose this above Delerium',
	score:10,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1654211_10152293087868745_1642505899_n.jpg?oh=5f9d2929b80fadaa41e6d220aec7d96f&oe=583ADA23',
	link:'https://www.facebook.com/photo.php?fbid=10152293087868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Co-operative Czech lager',
	pct:5.0,
	desc:'Piss water',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1976956_10152293116608745_971300903_n.jpg?oh=f5bd0d4412abc1e21009b4b14ebe9cac&oe=58730275',
	link:'https://www.facebook.com/photo.php?fbid=10152293116608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fullers Bengal lancer',
	pct:5.3,
	desc:'A mild IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902717_10152293116728745_604384062_n.jpg?oh=3ddaece7b034d3e8726361b4bb69b425&oe=58693365',
	link:'https://www.facebook.com/photo.php?fbid=10152293116728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rivet lager',
	pct:4.7,
	desc:'Cheap Aldi lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1654215_10152293132398745_1156319319_n.jpg?oh=be7d64de2b4cceb0837e1541014a1764&oe=583C31D8',
	link:'https://www.facebook.com/photo.php?fbid=10152293132398745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Itchy green pants cloudy ale',
	pct:4.7,
	desc:'A citrusy ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14516_10152293132388745_1804956545_n.jpg?oh=00651ab68ff92905288e240d1d2ce86b&oe=586F20B6',
	link:'https://www.facebook.com/photo.php?fbid=10152293132388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beez neez',
	pct:4.7,
	desc:'Nicer than other wheat beers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1689028_10152293132393745_2076387915_n.jpg?oh=a322ad79c182a95893d9248780b9de53&oe=5867B84F',
	link:'https://www.facebook.com/photo.php?fbid=10152293132393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big helga',
	pct:4.7,
	desc:'Not at all like a Munich beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1911736_10152293132828745_389724707_n.jpg?oh=e2869433fa83035fce0270e7b2b87984&oe=586D9705',
	link:'https://www.facebook.com/photo.php?fbid=10152293132828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures original pilsner',
	pct:null,
	desc:'Doesn\'t have the flavour of their other brews',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1959613_10152293132738745_13261275_n.jpg?oh=419678645ad5837e4c3bef136e72860d&oe=5884ACA0',
	link:'https://www.facebook.com/photo.php?fbid=10152293132738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s real ale',
	pct:null,
	desc:'Strong ale flavour in a lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1797480_10152293132838745_183692179_n.jpg?oh=51be3c61076171023b9c14e134d0d350&oe=588142E7',
	link:'https://www.facebook.com/photo.php?fbid=10152293132838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone and wood pacific ale',
	pct:null,
	desc:'Very nice',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1947926_10152293132973745_485396127_n.jpg?oh=a027858d8ad7b7c99354d71d2642fdde&oe=586C1821',
	link:'https://www.facebook.com/photo.php?fbid=10152293132973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s angry man',
	pct:5.0,
	desc:'Pretty good',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1975034_10152293133088745_313669023_n.jpg?oh=e60f79aecac6df940213bc29bfeafc0f&oe=587DA5B4',
	link:'https://www.facebook.com/photo.php?fbid=10152293133088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s whale ale',
	pct:4.5,
	desc:'The smell seems wrong to me since it\'s a wheat beer but the flavour is ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1622815_10152293133083745_1090580214_n.jpg?oh=b100b31c2d51b6ae156083853a47ecc4&oe=586D9950',
	link:'https://www.facebook.com/photo.php?fbid=10152293133083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hopinator',
	pct:7.5,
	desc:'Hoppy as promised',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/577380_10152293133158745_1128439575_n.jpg?oh=25c9793549901cb538522613c9552e91&oe=586A8FB5',
	link:'https://www.facebook.com/photo.php?fbid=10152293133158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brookvale union ginger beer',
	pct:null,
	desc:'Sweet sweet ginger',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1796708_10152293133278745_1592031312_n.jpg?oh=96a2d48cee72df573690fef3458e515e&oe=58774605',
	link:'https://www.facebook.com/photo.php?fbid=10152293133278745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bakalar',
	pct:null,
	desc:'A mild beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1620416_10152293133463745_1571056383_n.jpg?oh=811ad80e80bdad75b9bf4516e41c3fcc&oe=5870800A',
	link:'https://www.facebook.com/photo.php?fbid=10152293133463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Minimum chips',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1981912_10152293133693745_209766969_n.jpg?oh=9d64c17e6455c7c81922c19ce1a6f029&oe=58855AC0',
	link:'https://www.facebook.com/photo.php?fbid=10152293133693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aguila',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1962592_10152293133843745_1037481465_n.jpg?oh=58a57e08a7bfacc7fe236bf51a75345e&oe=586E729C',
	link:'https://www.facebook.com/photo.php?fbid=10152293133843745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The grifter pale ale',
	pct:null,
	desc:'A nice pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1939940_10152293133933745_1195913989_n.jpg?oh=cacc4cef72830ba3f64c2f30cb656c5d&oe=587B00F7',
	link:'https://www.facebook.com/photo.php?fbid=10152293133933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s pale ale',
	pct:4.6,
	desc:'Not at all a pale ale, just a crappy lager',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1234276_10152327616288745_1383768960_n.jpg?oh=97e67627ad97a7e5551a328111084412&oe=58678321',
	link:'https://www.facebook.com/photo.php?fbid=10152327616288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale IPA',
	pct:5.5,
	desc:'Sweater than a normal IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1601320_10152327616293745_1926213057_n.jpg?oh=d1ce7dc4384f8ff44e31b6d3b5470e46&oe=586A3FC4',
	link:'https://www.facebook.com/photo.php?fbid=10152327616293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zamkowe',
	pct:5.6,
	desc:'An average polish beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1148905_10152327616358745_1369255120_n.jpg?oh=2fdc4e9c05d973c3528812f2a5854b39&oe=587CA09B',
	link:'https://www.facebook.com/photo.php?fbid=10152327616358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road beechworth pale ale',
	pct:4.8,
	desc:'a nicely hopped pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1920508_10152327616563745_674556830_n.jpg?oh=34d915e4a1765df16ba5b6f67041ecf3&oe=583CE8C8',
	link:'https://www.facebook.com/photo.php?fbid=10152327616563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lucky',
	pct:4.8,
	desc:'A little bit metallic',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1240436_10152327616598745_898539470_n.jpg?oh=a7cc27545f7f1d76a5d1c2707ee8c522&oe=5875CBE7',
	link:'https://www.facebook.com/photo.php?fbid=10152327616598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray’s rudeboy',
	pct:4.8,
	desc:'Not quite sure what this beer is going for',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1506399_10152327616573745_36221798_n.jpg?oh=5d7eca18ec2f306a278b14333b798797&oe=586BA0B5',
	link:'https://www.facebook.com/photo.php?fbid=10152327616573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viking',
	pct:4.4,
	desc:'An ok pilsner',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1948233_10152327616743745_932399934_n.jpg?oh=bc8bd1e6a7f20be45e68408f59d06858&oe=5870CE88',
	link:'https://www.facebook.com/photo.php?fbid=10152327616743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines stout',
	pct:5.1,
	desc:'A mild easy drinking stout',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1503434_10152327617153745_1770406360_n.jpg?oh=3609b2e44487cde3ab584edc4ef08f9d&oe=58700983',
	link:'https://www.facebook.com/photo.php?fbid=10152327617153745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tui',
	pct:4.0,
	desc:'A cheap NZ lager without much flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/971710_10152327616993745_1470932463_n.jpg?oh=9851ffe9861cd1567f57f7ef256b985a&oe=587C2449',
	link:'https://www.facebook.com/photo.php?fbid=10152327616993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruby Tuesday',
	pct:4.7,
	desc:'A nice well balanced amber',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10003998_10152327617233745_190591734_n.jpg?oh=b9630161a0d485d6bfd05e4a7eecb91a&oe=586918AC',
	link:'https://www.facebook.com/photo.php?fbid=10152327617233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little ripper',
	pct:4.7,
	desc:'A slightly zesty lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1958010_10152327617388745_1928464789_n.jpg?oh=8014cf3b740906c6056b505ad01b0d1c&oe=58692598',
	link:'https://www.facebook.com/photo.php?fbid=10152327617388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton mid',
	pct:3.5,
	desc:'Not quite as nice as a draught and with less alcohol',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1509668_10152327617473745_370150087_n.jpg?oh=2daebeddd46065a20f3cdeb6ad34a78b&oe=583B803D',
	link:'https://www.facebook.com/photo.php?fbid=10152327617473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord nelson Anileation',
	pct:5.4,
	desc:'A beer crossed with a coffee',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10003507_10152327617578745_898249905_n.jpg?oh=c63b84598bbe94bbcd772b4c3d5e6d10&oe=58829050',
	link:'https://www.facebook.com/photo.php?fbid=10152327617578745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Hop Thief',
	pct:null,
	desc:'Well hopped',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1898087_10152327617588745_1756511326_n.jpg?oh=44f8012ecf30be6de69aa3c1d2af0ff9&oe=583A43EB',
	link:'https://www.facebook.com/photo.php?fbid=10152327617588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire The Constable',
	pct:null,
	desc:'Like a lovely lightly hopped IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1239035_10152327617748745_242091326_n.jpg?oh=a3867ab02fd0695d3ca95b87d0bfd8f7&oe=5877BEB0',
	link:'https://www.facebook.com/photo.php?fbid=10152327617748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Australian brewery pale ale',
	pct:4.8,
	desc:'A slightly bitter pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10341507_10152425240228745_8265904163887562785_n.jpg?oh=c90435160893cec0c4344ce471da05f0&oe=586BCF3F',
	link:'https://www.facebook.com/photo.php?fbid=10152425240228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Supa fly rye IPA',
	pct:5.8,
	desc:'A mild and interesting IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1506594_10152425240263745_7813835679026139769_n.jpg?oh=76dc60edf4bcbc62e1a75ad5016096ae&oe=58385C73',
	link:'https://www.facebook.com/photo.php?fbid=10152425240263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holland import',
	pct:4.8,
	desc:'A cheap lager',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10154146_10152425240233745_4967152943053850733_n.jpg?oh=43db5344eed983be0fe71e2d34fad235&oe=58686860',
	link:'https://www.facebook.com/photo.php?fbid=10152425240233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh brewing Co 28 Pale Ale',
	pct:4.8,
	desc:'A little bit too bitter for a pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10304714_10152425240513745_4080589260215688130_n.jpg?oh=c0a98e1d4bc458ef12ba98b56d25d1b6&oe=587C7F79',
	link:'https://www.facebook.com/photo.php?fbid=10152425240513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Redtrolley ale',
	pct:5.8,
	desc:'A malty ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10314565_10152425240463745_1300237400658400717_n.jpg?oh=84b71bfc9eb176c1707b81dfe38d6fd2&oe=5874CC58',
	link:'https://www.facebook.com/photo.php?fbid=10152425240463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Opera bar pale ale',
	pct:null,
	desc:'Flavourless',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10154926_10152425240573745_3819970704734320665_n.jpg?oh=5cfcfc9e6f6f2e648b6e13380af365b3&oe=587B2ACD',
	link:'https://www.facebook.com/photo.php?fbid=10152425240573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bingo wings',
	pct:5.0,
	desc:'A zesty wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10155860_10152425240628745_5749004272951603123_n.jpg?oh=fbebf2778f3534154d7006f337f83121&oe=58399292',
	link:'https://www.facebook.com/photo.php?fbid=10152425240628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dundee India Pale Ale',
	pct:6.3,
	desc:'Not a bad IPA',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10342507_10152425240783745_250399849084331418_n.jpg?oh=e5e572cca0a95b3bbc413658c55967ef&oe=5872E29A',
	link:'https://www.facebook.com/photo.php?fbid=10152425240783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bee Sting',
	pct:5.0,
	desc:'A nice level of sweetness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10168130_10152425240878745_5742462968298954155_n.jpg?oh=72f424ba4903025b39788259c77dc467&oe=5882E92A',
	link:'https://www.facebook.com/photo.php?fbid=10152425240878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stefano’s pilsner',
	pct:4.7,
	desc:'A good pilsner but far from perfect',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10301357_10152425240938745_5491397456344059410_n.jpg?oh=eb0cc966564f0c0baf9bfdd1f06129a4&oe=586DDE00',
	link:'https://www.facebook.com/photo.php?fbid=10152425240938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Stow Away IPA',
	pct:5.6,
	desc:'A fairly mild IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10330353_10152425241028745_6945284873150801200_n.jpg?oh=4278e106bdb8eb676ade32da86fd090d&oe=587796F4',
	link:'https://www.facebook.com/photo.php?fbid=10152425241028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Mango Beer',
	pct:4.5,
	desc:'Kind of tangy but can’t taste the mango',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10294225_10152425241078745_7192155480482123122_n.jpg?oh=2e69e7640d6fa63b1622d65a9714705c&oe=58725DA3',
	link:'https://www.facebook.com/photo.php?fbid=10152425241078745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s pearlers pale ale',
	pct:4.5,
	desc:'A very well balanced pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10459893_10152534289713745_6169618167007300448_n.jpg?oh=c53ef900851d758f2571a19f8e520d71&oe=587B47ED',
	link:'https://www.facebook.com/photo.php?fbid=10152534289713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos equis lager especial',
	pct:4.5,
	desc:'A very easy drinking lager. Good for a hot day',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10433892_10152534289243745_2400323308581320924_n.jpg?oh=e0fbed17c2b7931cfcb51dfabed92e53&oe=587C080B',
	link:'https://www.facebook.com/photo.php?fbid=10152534289243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale Drk',
	pct:4.5,
	desc:'Quite mild for a dark ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10373527_10152534289553745_1636959852017465130_n.jpg?oh=8a3f1228be10ed22bced70be98db14e9&oe=587AF796',
	link:'https://www.facebook.com/photo.php?fbid=10152534289553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Suntory MD',
	pct:5.0,
	desc:'A slightly strange lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10426644_10152534289858745_1229530734473771808_n.jpg?oh=e65685ecd21b4db352448f24e67803b0&oe=58800F73',
	link:'https://www.facebook.com/photo.php?fbid=10152534289858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s bohemian pilsner',
	pct:5.0,
	desc:'Smooth with a nice finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10462530_10152534290193745_4497356221968859858_n.jpg?oh=d064fdd169c5402cf330e38665765b2f&oe=5880642A',
	link:'https://www.facebook.com/photo.php?fbid=10152534290193745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redback beer',
	pct:4.7,
	desc:'Reminds me of some belgian beers but not nearly as good',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10488390_10152534290478745_4494982556291999381_n.jpg?oh=b076818a656f0f73c9fd9e0fdc8e514f&oe=588537D8',
	link:'https://www.facebook.com/photo.php?fbid=10152534290478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bintang',
	pct:null,
	desc:'Just like other easy drinking beers from the region',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10398080_10152534290653745_1374069162252942719_n.jpg?oh=bed1a332cb51e4bb42b92e9a4ff777f5&oe=5882F827',
	link:'https://www.facebook.com/photo.php?fbid=10152534290653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cats shank kolsch',
	pct:4.6,
	desc:'Good all round',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10491226_10152534290818745_8400776013361245843_n.jpg?oh=ae4b7727aafeb6e5233685555826476e&oe=587D4C1F',
	link:'https://www.facebook.com/photo.php?fbid=10152534290818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura brewery honey wheat',
	pct:4.5,
	desc:'A fairly standard beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10393575_10152534291018745_4203149759533116955_n.jpg?oh=89b87301297a1c4463abc9dda9d017f6&oe=5871DEBF',
	link:'https://www.facebook.com/photo.php?fbid=10152534291018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Roger\'s beer',
	pct:3.8,
	desc:'A lager with a bit of a tang',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10482595_10152534291158745_997791426307345458_n.jpg?oh=ee6195b426c2187a3d7544b5b874bcf5&oe=58815677',
	link:'https://www.facebook.com/photo.php?fbid=10152534291158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'99 not out',
	pct:5.0,
	desc:'Not my kind of beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10441315_10152534300648745_3725590372701097829_n.jpg?oh=f15672611cba310620106f144c977903&oe=586C0287',
	link:'https://www.facebook.com/photo.php?fbid=10152534300648745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral sly fox',
	pct:4.7,
	desc:'A nice pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10470597_10152534300708745_7685915012921086968_n.jpg?oh=81d6aef6358c6c166d8f915b7e48005a&oe=583AB98A',
	link:'https://www.facebook.com/photo.php?fbid=10152534300708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat steam ale',
	pct:4.5,
	desc:'Could go for a case is this',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10390115_10152534300713745_5030138459822932747_n.jpg?oh=08ec40d9610d1ce4a7b0f219f39ea6dc&oe=58670E1F',
	link:'https://www.facebook.com/photo.php?fbid=10152534300713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s golden lager',
	pct:5.0,
	desc:'What you want on a summer afternoon',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10456077_10152534300758745_7454080799516274626_n.jpg?oh=cf27363c49a989804c90b1b63396f782&oe=5878BD0B',
	link:'https://www.facebook.com/photo.php?fbid=10152534300758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf porter',
	pct:6.2,
	desc:'A little bit harsh for me',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10488349_10152534301008745_8348994823778686167_n.jpg?oh=fd3793d58e8076548d85cf41c5d0ec14&oe=586A1FBE',
	link:'https://www.facebook.com/photo.php?fbid=10152534301008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms lager',
	pct:4.6,
	desc:'Wasn\'t expecting much',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10489819_10152534301208745_6098643900831599392_n.jpg?oh=92952fa599838ffc0cc63b4c40a0e05b&oe=587752F6',
	link:'https://www.facebook.com/photo.php?fbid=10152534301208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O.k beer Okocim',
	pct:5.6,
	desc:'It\'s ok',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10300636_10152534301428745_4348861457784870364_n.jpg?oh=1d71d5dbf5867e7bdebd32d90bae96ad&oe=58787C13',
	link:'https://www.facebook.com/photo.php?fbid=10152534301428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood lager',
	pct:4.7,
	desc:'Such a letdown after the pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10408527_10152534301523745_6253327536631057603_n.jpg?oh=a147e5091dcc982432443d256d7c880c&oe=5875BF7B',
	link:'https://www.facebook.com/photo.php?fbid=10152534301523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogbolter',
	pct:5.2,
	desc:'A very nice malty flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10409678_10152534301618745_7574186216754130853_n.jpg?oh=1c5ff9225dae8fca135c79823dfe9686&oe=58697704',
	link:'https://www.facebook.com/photo.php?fbid=10152534301618745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saranac pumpkin ale',
	pct:5.1,
	desc:'Not that pumkiny',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10262192_10152534301808745_668535654445517750_n.jpg?oh=fdbeaf4896fcdac1af8ab310ba9528b3&oe=5880ABC4',
	link:'https://www.facebook.com/photo.php?fbid=10152534301808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada kellerweis',
	pct:4.8,
	desc:'A true weisbeer. I don\'t like it',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10411228_10152534305933745_5912326499497887080_n.jpg?oh=02f689caedd24abfc1273b9dd08ee8af&oe=583A000D',
	link:'https://www.facebook.com/photo.php?fbid=10152534305933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hayward 5000',
	pct:8.0,
	desc:'Cheap and malty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10260031_10152534306073745_6457168517247456226_n.jpg?oh=a2fc917876f60b90566229820ca16157&oe=58732F56',
	link:'https://www.facebook.com/photo.php?fbid=10152534306073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cass fresh',
	pct:4.5,
	desc:'A very refreshing lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10463933_10152534306048745_557216881289649027_n.jpg?oh=86b7f0211f76811bed16899ac9914ce2&oe=587F04AC',
	link:'https://www.facebook.com/photo.php?fbid=10152534306048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade bright ale',
	pct:null,
	desc:'An all round good beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10462761_10152534306183745_7006650351412791308_n.jpg?oh=2cdaeb602d2c61335824e3842e92944d&oe=5884DE75',
	link:'https://www.facebook.com/photo.php?fbid=10152534306183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s ginger beer',
	pct:3.5,
	desc:'Very gingery but a little bit too fizzy',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10390539_10152534306248745_2125625178149511710_n.jpg?oh=154cc8fb57881b3dc229dbf54e5ace3a&oe=587A9546',
	link:'https://www.facebook.com/photo.php?fbid=10152534306248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pintail pale ale',
	pct:5.3,
	desc:'Kind of a Pale crossed with an IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10454293_10152534306298745_7768963216409422880_n.jpg?oh=61195aa3e3b84e7bc0094b1ac3644804&oe=5876A283',
	link:'https://www.facebook.com/photo.php?fbid=10152534306298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orion draft beer',
	pct:5.0,
	desc:'Mild on flavour and smell. A really easy drinking beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13442135_10154200936788745_6034318375592636488_n.jpg?oh=3db08eaf677adc151bc923b8ed097a83&oe=5877646A',
	link:'https://www.facebook.com/photo.php?fbid=10154200936788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf pale ale',
	pct:5.4,
	desc:'A little bit stouty',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10464035_10152534310338745_1731994487341714039_n.jpg?oh=91666c653617326d9f690f6ec11f8a9f&oe=5871A672',
	link:'https://www.facebook.com/photo.php?fbid=10152534310338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stiegl',
	pct:4.9,
	desc:'A nice light Austrian beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q87/p480x480/10492027_10152534310618745_1648790094042442309_n.jpg?oh=d50fe5559a7ca6949d9e1f5c5fd5559d&oe=583AC56F',
	link:'https://www.facebook.com/photo.php?fbid=10152534310618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau dark',
	pct:5.5,
	desc:'Tastes really metallic. Might just have been the taps',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/10462761_10152534310558745_1029523877930371907_n.jpg?oh=97e4e5fdf2dae457f02fef1c559efcf3&oe=5883C421',
	link:'https://www.facebook.com/photo.php?fbid=10152534310558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cantina',
	pct:4.6,
	desc:'A refreshing drink',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10475339_10152534310788745_8903624356648511173_n.jpg?oh=1bd4188cc91fa58e001f0d8ca0fe1a07&oe=586A9183',
	link:'https://www.facebook.com/photo.php?fbid=10152534310788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozlak',
	pct:6.5,
	desc:'Malty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10264926_10152534310928745_6694007916577152263_n.jpg?oh=117e9563c471b768c31c53d4d8524323&oe=587E2C60',
	link:'https://www.facebook.com/photo.php?fbid=10152534310928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grain lager',
	pct:null,
	desc:'Like a really mild pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10448190_10152534314748745_6480384213227978387_n.jpg?oh=362190233be4ff5c8feb62d68a18068d&oe=587EA0A4',
	link:'https://www.facebook.com/photo.php?fbid=10152534314748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Hog IPA',
	pct:5.8,
	desc:'A fairly plain IPA. A good choice if you’ve never had one before',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10411207_10153053839443745_1628460253644107712_n.jpg?oh=03a4b2ae52f0ab6e01a55c7cd4fa1e6c&oe=5865BA8D',
	link:'https://www.facebook.com/photo.php?fbid=10153053839443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA blanc',
	pct:5.0,
	desc:'Not really sure what this beer is supposed to be. But it’s for olympians',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10410984_10153053839163745_7731660578628364886_n.jpg?oh=7f423e4ffd7834f5e067c769c1c57cd7&oe=583A2E74',
	link:'https://www.facebook.com/photo.php?fbid=10153053839163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redoak organic pale ale',
	pct:4.6,
	desc:'A tasty bev',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10349001_10153053839393745_466238167460813515_n.jpg?oh=56cfba5aff97f55a04cccdce2af6534d&oe=583BBA6C',
	link:'https://www.facebook.com/photo.php?fbid=10153053839393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Nail Hoppy Summer Ale',
	pct:5.0,
	desc:'Nicely hoppy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945677_10153053839853745_7181309439289874351_n.jpg?oh=ee44dc3ebb36737d104b33fe5f74621c&oe=5882453E',
	link:'https://www.facebook.com/photo.php?fbid=10153053839853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Astor Ale',
	pct:4.5,
	desc:'Pretty average',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945640_10153053840143745_2674301376011904832_n.jpg?oh=45cfa11c1e805a81aefa239254601c62&oe=58733A23',
	link:'https://www.facebook.com/photo.php?fbid=10153053840143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour bright ale',
	pct:4.2,
	desc:'Not really worth getting again',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10696283_10153053840278745_1486083629761267822_n.jpg?oh=f9cd7fff1eacc5a768dbd381014d6947&oe=587DEFB3',
	link:'https://www.facebook.com/photo.php?fbid=10153053840278745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso\'s Smokey Bishop',
	pct:4.7,
	desc:'Not one to rush, not too smokey either',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1601397_10153053840403745_751081432725627058_n.jpg?oh=ee2edc1e4bb35cadb75a5e4b0884a2ad&oe=586F7C4F',
	link:'https://www.facebook.com/photo.php?fbid=10153053840403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hooten',
	pct:4.6,
	desc:'Standard easy drinking lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1606916_10153053840543745_4428133737928836956_n.jpg?oh=02c5ef575b8df252ccc82a7d2864f043&oe=5865AA55',
	link:'https://www.facebook.com/photo.php?fbid=10153053840543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jenlain Ambre',
	pct:7.5,
	desc:'Was hoping for so much more than with this giant beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955719_10153053840738745_4377010572225479820_n.jpg?oh=1856c0d4888840f29f36a2b600e6bd05&oe=586A13E6',
	link:'https://www.facebook.com/photo.php?fbid=10153053840738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snaatch lager',
	pct:null,
	desc:'Probably just a rebrand of some other generic beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1044239_10153053840773745_1317709767507240437_n.jpg?oh=b979d4fa73b3535e52907f8d46a03d89&oe=588273F4',
	link:'https://www.facebook.com/photo.php?fbid=10153053840773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mexicali',
	pct:4.6,
	desc:'Not giving me what expected',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955710_10153053851408745_4260669585339690789_n.jpg?oh=4655a15b0d88783d4d663a3382154851&oe=5871EC63',
	link:'https://www.facebook.com/photo.php?fbid=10153053851408745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown golden ale',
	pct:4.5,
	desc:'Not my favourite golden ale. Only slightly better than regular crown',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10942454_10153053851308745_7500988424962232002_n.jpg?oh=7856b286b82c8f503aec01885a59671e&oe=5884345E',
	link:'https://www.facebook.com/photo.php?fbid=10153053851308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Knappstein',
	pct:5.6,
	desc:'A little bit harsh. Wouldn\'t buy again',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q84/p480x480/10941856_10153053851368745_8703876646395783250_n.jpg?oh=21fe19f639a4fcaeeed3dbc4a0f6f4bf&oe=58729806',
	link:'https://www.facebook.com/photo.php?fbid=10153053851368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Surry hills pils',
	pct:null,
	desc:'Doesn\'t really taste like a pils',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10428481_10153053851498745_4687849967086253708_n.jpg?oh=216c69097c2b9a76dc8625823df859e4&oe=58729AC5',
	link:'https://www.facebook.com/photo.php?fbid=10153053851498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rio bravo',
	pct:4.0,
	desc:'A fairly tasteless session beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q84/p480x480/1920513_10153053851643745_6150367775548290022_n.jpg?oh=3ec049cb82cbe8bdedd352e6a381c01f&oe=587886E6',
	link:'https://www.facebook.com/photo.php?fbid=10153053851643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks American pale ale',
	pct:null,
	desc:'A good level of hops',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10954539_10153053851753745_8342401209754067322_n.jpg?oh=5f1bc2a091000600052a64a8188aaa49&oe=5874165C',
	link:'https://www.facebook.com/photo.php?fbid=10153053851753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s black beer',
	pct:5.2,
	desc:'Just a bad tasting beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1979678_10153053851808745_6926811721676931401_n.jpg?oh=520e4beb893e4500ed5e807dc98c0a98&oe=5876D1B8',
	link:'https://www.facebook.com/photo.php?fbid=10153053851808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cthulhu',
	pct:null,
	desc:'A little bit too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10956041_10153053851963745_7126060138864736213_n.jpg?oh=193eba261ed9f1fead2aa21a5cba9a89&oe=586CFBD9',
	link:'https://www.facebook.com/photo.php?fbid=10153053851963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood jasper',
	pct:null,
	desc:'Rich but not right',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955201_10153053852088745_6663961286785907822_n.jpg?oh=4af9727b2e5d03e27056dec39588a054&oe=588016DF',
	link:'https://www.facebook.com/photo.php?fbid=10153053852088745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat summer ale',
	pct:4.7,
	desc:'A great beer for a nice day',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/16797_10153053852143745_3087580206529630401_n.jpg?oh=d58f26b07dfb45db29b838dc852d567d&oe=588639D1',
	link:'https://www.facebook.com/photo.php?fbid=10153053852143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pearl river beer',
	pct:5.3,
	desc:'So so bland',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945514_10153053852213745_6703947153036432278_n.jpg?oh=d7ed2d6e593477e9a907f98cbad36e50&oe=583A794D',
	link:'https://www.facebook.com/photo.php?fbid=10153053852213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kaiserdom',
	pct:4.5,
	desc:'Just a standard cheap german Lager. But such an awesome can',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/10931372_10153055725393745_7415839926658912556_n.jpg?oh=596024ec0a546df5ce17dfc8e6fac140&oe=5879C52B',
	link:'https://www.facebook.com/photo.php?fbid=10153055725393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN 5.0',
	pct:5.0,
	desc:'Not as bad as I expected from the price',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1560725_10153055725613745_6302115246934015090_n.jpg?oh=47df3152b046bbbf5f9dd7aeebfd18b8&oe=5838402F',
	link:'https://www.facebook.com/photo.php?fbid=10153055725613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade IPA',
	pct:null,
	desc:'A nice balanced IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10882109_10153055725553745_9030008793027639075_n.jpg?oh=8ce325bc17ccc6ed8a09f7594e0693fc&oe=587489CC',
	link:'https://www.facebook.com/photo.php?fbid=10153055725553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six string Hefeweizen',
	pct:null,
	desc:'One of the nicer wheat bears I\'ve tasted',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10957577_10153055725708745_5392401214475659109_n.jpg?oh=703a7b9269e2f8ab1d87a8dcfbf4aff1&oe=586D8D03',
	link:'https://www.facebook.com/photo.php?fbid=10153055725708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hook norton Twelve days',
	pct:5.5,
	desc:'A little bit nutty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1924574_10153055725888745_6113742952542006972_n.jpg?oh=97265dc4d1dcc8b818db2df95391c01e&oe=58392CB3',
	link:'https://www.facebook.com/photo.php?fbid=10153055725888745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Edge angry pirate',
	pct:6.8,
	desc:'Rum flavour in beer is no good for anybody',
	score:4,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10911454_10153055725923745_4540481012810101778_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055725923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA methode',
	pct:5.0,
	desc:'Tastes way too metallic',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/10464194_10153055726008745_3155144376465393693_n.jpg?oh=f07b371deedf8b9050e36dd684e3ef9e&oe=58698982',
	link:'https://www.facebook.com/photo.php?fbid=10153055726008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road India Saison',
	pct:7.5,
	desc:'Too much of a white beer flavour for me',
	score:5,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10955774_10153055726098745_2456265276299415480_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay The ducks',
	pct:4.2,
	desc:'Not at all a pale ale. Matilda bay lets me down once again',
	score:4,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/1492370_10153055726208745_5026667878902117342_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dr Tims',
	pct:4.5,
	desc:'Could do with a bit more punch',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1619547_10153055749173745_8508511661850848187_n.jpg?oh=5931e5c2ff117dc2490ac2e4043350ab&oe=5881B7AA',
	link:'https://www.facebook.com/photo.php?fbid=10153055749173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Age The Celt Experience',
	pct:4.2,
	desc:'Not really much of an experience',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10947196_10153055749403745_4812053214327954894_n.jpg?oh=5bd628800c43f7552cee06bd48147c66&oe=5881AC19',
	link:'https://www.facebook.com/photo.php?fbid=10153055749403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bling Bling Imperial IPA',
	pct:8.5,
	desc:'Lots of flavour, couldn’t have many',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10806453_10153055749418745_7326451586089018048_n.jpg?oh=d8460d2aa03f6dad797fe5c52f24b670&oe=587B8E71',
	link:'https://www.facebook.com/photo.php?fbid=10153055749418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bandit Killer Sprocket',
	pct:4.8,
	desc:'Way too much of a smokey flavour',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10711_10153055749528745_1705580902509688757_n.jpg?oh=071b103155c2447e6ccdef73749e951a&oe=587CFCA7',
	link:'https://www.facebook.com/photo.php?fbid=10153055749528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monkey’s Fist',
	pct:4.9,
	desc:'Not sure why these are always reduced to clear at Dan Murpheys',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10257018_10153055749583745_4285986054653809975_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749583745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punch & Judy’s Ale',
	pct:3.9,
	desc:'Not much flavour or alcohol content',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10922862_10153055749673745_210519337780800601_n.jpg?oh=7eeac379907a38d6482e39103f4efe05&oe=587D8EBC',
	link:'https://www.facebook.com/photo.php?fbid=10153055749673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hassle Hop',
	pct:5.5,
	desc:'A pale with a bit of a strong ale flavour',
	score:4,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10942330_10153055749753745_4423283376777303913_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The point pale ale',
	pct:4.2,
	desc:'Not my favourite pale ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10955559_10153055749933745_9217798578543309687_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Tom Chocolate',
	pct:6.0,
	desc:'A slight hint of chocolate',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10891448_10153055770573745_4712183690457686836_n.jpg?oh=dffd1bf80976bd749b8957392c34b721&oe=587F4663',
	link:'https://www.facebook.com/photo.php?fbid=10153055770573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John Boston Golden ale',
	pct:4.2,
	desc:'I do like an easy drinking golden ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10690124_10153055770718745_5622367894684528293_n.jpg?oh=ce03b44e87bd1ff5acea1a9e7f11dcb8&oe=5873B6E0',
	link:'https://www.facebook.com/photo.php?fbid=10153055770718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Selezione 19',
	pct:5.0,
	desc:'Goes well with a nice Italian meal',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10958542_10153055770443745_1738110291091509447_n.jpg?oh=dc5241462da5aca127f8fdfa0b4bdd6b&oe=583C21F8',
	link:'https://www.facebook.com/photo.php?fbid=10153055770443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hipster ale',
	pct:5.5,
	desc:'Just not really hitting the spot tonight',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10953214_10153055770813745_8713996460827737605_n.jpg?oh=5e26a24162d9e8e47f5009e9ae2953f3&oe=588066D1',
	link:'https://www.facebook.com/photo.php?fbid=10153055770813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trumer pils',
	pct:4.9,
	desc:'An ok pilsner',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10953955_10153055770883745_7624310153191779880_n.jpg?oh=f11073d27902ad53859141de6e9a0871&oe=58790A5C',
	link:'https://www.facebook.com/photo.php?fbid=10153055770883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers 62 pilsner',
	pct:5.0,
	desc:'Coopers seem to have a huge range of random beers, sadly the quality varies quite a bit',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10942756_10153055770968745_4182424304505127141_n.jpg?oh=be13ab3b554986a059dab320b2f4cc82&oe=5879D10B',
	link:'https://www.facebook.com/photo.php?fbid=10153055770968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders All Day IPA',
	pct:4.7,
	desc:'Could literally drink this all day. Another from the great selection at Parsons',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955163_10153055771108745_5413724920939008977_n.jpg?oh=40a2cd3bf2257bac0fbfa3b80ba1abd8&oe=586E5616',
	link:'https://www.facebook.com/photo.php?fbid=10153055771108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Torpedo extra IPA',
	pct:7.2,
	desc:'So much flavour, so much booze. What’s not to love',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10686865_10153055771228745_3010927456136598269_n.jpg?oh=e37cd2119eaa817aa29a520c01ba3a5e&oe=5870B78E',
	link:'https://www.facebook.com/photo.php?fbid=10153055771228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Henninger',
	pct:4.8,
	desc:'Very bland',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10955215_10153055772023745_950968910298192775_n.jpg?oh=12f3996f09291e18b85ddbd449f92e62&oe=586CDC58',
	link:'https://www.facebook.com/photo.php?fbid=10153055772023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian blue',
	pct:4.5,
	desc:'Ok for a wheat beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1920181_10153055771283745_6859710748033343904_n.jpg?oh=87755b496817aa244bf093dcfce4d01f&oe=586FE828',
	link:'https://www.facebook.com/photo.php?fbid=10153055771283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kosciusko Pale ale',
	pct:4.5,
	desc:'Never heard of this, was hoping for something better',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10492453_10153055771438745_3655493043304213188_n.jpg?oh=1debab1fc8970523bd38c51666231544&oe=58743BA6',
	link:'https://www.facebook.com/photo.php?fbid=10153055771438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Blond',
	pct:6.5,
	desc:'Not as good or as strong as the Quadrupel',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10491123_10153055791238745_951076558234575000_n.jpg?oh=3b052c2759c1d3ae10566972a44e1044&oe=587896FF',
	link:'https://www.facebook.com/photo.php?fbid=10153055791238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Halifter Stout',
	pct:4.9,
	desc:'A fairly mild stout',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945766_10153055791503745_8417455299148358450_n.jpg?oh=b19dc618b71a8a1d6ee0b869398f8ab6&oe=587C1FC7',
	link:'https://www.facebook.com/photo.php?fbid=10153055791503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Menabrea 1846',
	pct:4.8,
	desc:'Slightly above average Italian beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10945561_10153055791438745_6706555972975228314_n.jpg?oh=0e8500f22da91a02c705921436f7763f&oe=583D1FB3',
	link:'https://www.facebook.com/photo.php?fbid=10153055791438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Doppelbock Winter ale',
	pct:6.0,
	desc:'I need to sample some more doppelbocks',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1798753_10153055791623745_8735243396794406846_n.jpg?oh=afbe836b1592e83e4b81cf3fa0f56d57&oe=586F5BC0',
	link:'https://www.facebook.com/photo.php?fbid=10153055791623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Hooky',
	pct:4.6,
	desc:'There are just so many bad english beers',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10806242_10153055791708745_8168997172530304317_n.jpg?oh=3c46b08da37fc3428d1c745508619944&oe=58679C9D',
	link:'https://www.facebook.com/photo.php?fbid=10153055791708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade Stout',
	pct:5.8,
	desc:'Not a very nice stout',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10501746_10153055791938745_8029415469669135648_n.jpg?oh=d74200bec0d2e2e1d036acf94bba3c53&oe=586B2CC9',
	link:'https://www.facebook.com/photo.php?fbid=10153055791938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mallee Bull',
	pct:5.6,
	desc:'Enjoyed this more than I expected',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10929144_10153055792013745_3943691173139596791_n.jpg?oh=075179d01fb09e7bc6543717922c1162&oe=58846E7C',
	link:'https://www.facebook.com/photo.php?fbid=10153055792013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floreffe Prima Melior',
	pct:8.0,
	desc:'Just an awful flavour combination',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10940507_10153055792123745_6951460612562111481_n.jpg?oh=a70fe508f4d91c4bcf12adea00799a5f&oe=586B2490',
	link:'https://www.facebook.com/photo.php?fbid=10153055792123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oettinger Pils',
	pct:4.7,
	desc:'This beer has never been good, but at least it has always been cheap',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10952861_10153055792233745_5985463992710631340_n.jpg?oh=e550477494b461c9819ae3b80a3af84d&oe=586DB845',
	link:'https://www.facebook.com/photo.php?fbid=10153055792233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Quadrupel',
	pct:10,
	desc:'Such a lovely beer all round. Makes me want to go back to Belgium',
	score:8,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10838255_10153055792378745_3160802427352478420_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055792378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms captain\'s IPA',
	pct:5.8,
	desc:'A very mild IPA. Easy drinking but not what I want from an IPA',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10995650_10153118627158745_3441161072765169256_n.jpg?oh=b9796c1fdaa30c3fa61b6ce6d0a336d8&oe=58866A96',
	link:'https://www.facebook.com/photo.php?fbid=10153118627158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mythos',
	pct:4.7,
	desc:'I don\'t remember ever seeing another type of beer in Greece',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10865944_10153118627183745_3452701286868348707_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118627183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Byron bay pale lager',
	pct:4.8,
	desc:'Plain and boring',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/17811_10153118627228745_8196338202734334456_n.jpg?oh=705585ee1005e73b2256a7aa4ce44883&oe=583D5899',
	link:'https://www.facebook.com/photo.php?fbid=10153118627228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great northern lager',
	pct:4.2,
	desc:'A little bit metallic. Not sure why this was recommended to me',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11025812_10153118627363745_3879639136439752978_n.jpg?oh=8a0aecb739775e612e428c3e3bb7d0e8&oe=5874913D',
	link:'https://www.facebook.com/photo.php?fbid=10153118627363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sirling castle',
	pct:6.5,
	desc:'Strong on alcohol, mild on flavour. Perfect for getting drunk quickly',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11024597_10153118627558745_640038091949927094_n.jpg?oh=805cef03f7b8de28de16b70ece29c31e&oe=58656F9A',
	link:'https://www.facebook.com/photo.php?fbid=10153118627558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Red Trolley Ale',
	pct:5.8,
	desc:'Not really my kind of beer',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11035307_10153118666928745_8142017152048186664_n.jpg?oh=2e387528ab8e240cb6fe30f1247ada29&oe=5869AEE3',
	link:'https://www.facebook.com/photo.php?fbid=10153118666928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bolt',
	pct:4.6,
	desc:'Very easy drinking. Very close to water',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11037326_10153118666923745_5159572374416519952_n.jpg?oh=de789cab38660c5770f24820b2f026c2&oe=588271D5',
	link:'https://www.facebook.com/photo.php?fbid=10153118666923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Copycat A.I.P.A',
	pct:6.8,
	desc:'A nice floral aroma but a little bit harsh',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1797322_10153118666983745_5915201915827958878_n.jpg?oh=61e180d95bf1c2f225d7735758b44de7&oe=58737DBD',
	link:'https://www.facebook.com/photo.php?fbid=10153118666983745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black Death Beer',
	pct:5.8,
	desc:'Like a crappy lager but black',
	score:null,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10437609_10153118667103745_274358326202189719_n.jpg?oh=92ac4eadfefeb83677a1393c66cf6564&oe=586FCCD0',
	link:'https://www.facebook.com/photo.php?fbid=10153118667103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant IPA',
	pct:5.4,
	desc:'Mild but well rounded',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11036670_10153118667448745_2676066066178360898_n.jpg?oh=e3e011f4496eac6d4da0baa84a486a56&oe=5876EC06',
	link:'https://www.facebook.com/photo.php?fbid=10153118667448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s summer ale',
	pct:5.0,
	desc:'Surprisingly this is a ginger beer. And while I do like ginger beers this isn’t one of the better ones',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10358559_10153118667468745_6994245863309298252_n.jpg?oh=df6ed5229def513d8abe06d646faec8b&oe=587E603C',
	link:'https://www.facebook.com/photo.php?fbid=10153118667468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked Elf WitBier',
	pct:5.0,
	desc:'Fairly mild for a wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10292286_10153118667738745_8355190794765320413_n.jpg?oh=f6918d28d329f9c85976d911aa29c4e5&oe=587C408C',
	link:'https://www.facebook.com/photo.php?fbid=10153118667738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lander Brau',
	pct:4.7,
	desc:'Seems like it\'s a cheap flavourless wheat beer but since I don\'t like wheat beer I\'m ok with that',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11000604_10153118667938745_2598821758352900098_n.jpg?oh=d37e4e469e58535f709669b39dee8e3b&oe=5881FAE9',
	link:'https://www.facebook.com/photo.php?fbid=10153118667938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN Bitter',
	pct:4.0,
	desc:'Tastes the same as the green one but not as strong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10450836_10153118667958745_9176447944373645082_n.jpg?oh=a39de70d6e9921f797a30c96d6f1ca3d&oe=5879B0FF',
	link:'https://www.facebook.com/photo.php?fbid=10153118667958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Clear',
	pct:4.5,
	desc:'Tastes like water',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10151181_10153118668273745_149724940762965990_n.jpg?oh=57eb6cb168db19e3baee7a7ad6a1f7bf&oe=5865B719',
	link:'https://www.facebook.com/photo.php?fbid=10153118668273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Johannes',
	pct:6.5,
	desc:'Slightly too sweet but ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10471235_10153118668688745_4443326077354329396_n.jpg?oh=3adfe1ce7765cac7b003bab238fc7605&oe=5871FC84',
	link:'https://www.facebook.com/photo.php?fbid=10153118668688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber pils',
	pct:5.0,
	desc:'Not exciting',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1902891_10153118668708745_4563543533450469126_n.jpg?oh=bda42927c5519556ced2046d664306d3&oe=58854057',
	link:'https://www.facebook.com/photo.php?fbid=10153118668708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ballast Point Big Eye',
	pct:7,
	desc:'A nice tasty IPA. I like the lack of a bitter aftertaste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10389593_10153118668748745_5666950047802645873_n.jpg?oh=3c66b664b9b8b35c4c1cf93dd6e0a973&oe=58697763',
	link:'https://www.facebook.com/photo.php?fbid=10153118668748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad long trip Saison',
	pct:6.6,
	desc:'Very tasty, but the fizz is a bit strange. Sits in such a strange middle ground but I want more',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10986616_10153118669198745_2610490748271486451_n.jpg?oh=f03a03583b116e31b57702632dc9c61d&oe=583802C3',
	link:'https://www.facebook.com/photo.php?fbid=10153118669198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perla Midowa',
	pct:6.0,
	desc:'A nice hint of honey. Sweeter than most beers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11018324_10153118669153745_6177767464748408498_n.jpg?oh=a6df56e593d440d5716abeb90951c9be&oe=58653B42',
	link:'https://www.facebook.com/photo.php?fbid=10153118669153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Storm Super Dry Beer',
	pct:5.0,
	desc:'Your regular plain cheap lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11038700_10153118669473745_5502916115063582938_n.jpg?oh=6b1f77d6f8bc3ec3740b127e556ef474&oe=5877F64B',
	link:'https://www.facebook.com/photo.php?fbid=10153118669473745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden lion beer',
	pct:5.6,
	desc:'A nicely rounded flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11021223_10153118669773745_8881697342781962806_n.jpg?oh=12451538d70ce6c882d45f02ca8ce5fa&oe=5839186E',
	link:'https://www.facebook.com/photo.php?fbid=10153118669773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love Dale Lager',
	pct:4.7,
	desc:'Quite a smooth lager. Or could just be that it’s the first beer on Friday',
	score:6,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10687355_10153118669793745_4229208713620347909_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain Pilsner',
	pct:4.5,
	desc:'Pretty plain, time to move onto something stronger today',
	score:5,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10845763_10153118669868745_3771962632087142041_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa Valley Milk Stout',
	pct:7.0,
	desc:'Was expecting this to taste like milk but it’s just a creamy stout',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11034204_10153118792398745_930727431364883158_n.jpg?oh=65aa38eaf27ca143a1546bdecdfc0383&oe=587AEECA',
	link:'https://www.facebook.com/photo.php?fbid=10153118792398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Lychee Beer',
	pct:4.5,
	desc:'Too sweet for me, just doesn’t take like a beer anymore',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10311768_10153118792388745_7466271610444299802_n.jpg?oh=390508c84d2716b0879fe9acd926c0e9&oe=583BE4E1',
	link:'https://www.facebook.com/photo.php?fbid=10153118792388745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Past Blue Ribbon',
	pct:5.0,
	desc:'Not sure why this gets branded as a hipster beer. It’s just a bland lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1926933_10153118792373745_471015037580664056_n.jpg?oh=0d63cc0220ff44b154108d2cbe4e1395&oe=58686CBB',
	link:'https://www.facebook.com/photo.php?fbid=10153118792373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Chilli Beer',
	pct:4.2,
	desc:'Has a really strong hit of chilli but I like that. You get the coolness of a beer mixed with the heat of chilli',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11034166_10153118792613745_1685865302807726235_n.jpg?oh=380a853d3efdf0921c5d37e9e7b09d4b&oe=5871347F',
	link:'https://www.facebook.com/photo.php?fbid=10153118792613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Pale ale',
	pct:5.1,
	desc:'A well balanced pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11017023_10153118792808745_2253924034975828582_n.jpg?oh=7be67548d96898e04079f11ead44695e&oe=586C83C8',
	link:'https://www.facebook.com/photo.php?fbid=10153118792808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lick Pier Ginger Beer',
	pct:4.0,
	desc:'A little bit too fizzy but nice otherwise',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10988914_10153118793028745_6211347906406183583_n.jpg?oh=13701bea12bc398c354b558ae96d1ee3&oe=5876B0C4',
	link:'https://www.facebook.com/photo.php?fbid=10153118793028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Adams Boston Lager',
	pct:4.7,
	desc:'A classic. Need to find this on tap somewhere',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11025711_10153118793008745_157967989601698522_n.jpg?oh=ed51d9673cf5a395cd1d7c541b0dd46b&oe=587F8114',
	link:'https://www.facebook.com/photo.php?fbid=10153118793008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines Kolsch',
	pct:4.6,
	desc:'Makes me want to try more kolsch beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10452382_10153118793263745_8541367164944833885_n.jpg?oh=68c51ce4f43250618194aaea5f17fe24&oe=58688702',
	link:'https://www.facebook.com/photo.php?fbid=10153118793263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit Pale Ale',
	pct:4.9,
	desc:'I’m a fan',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11024705_10153118793433745_1941343873752633305_n.jpg?oh=543b42b8a501477237e1fcbc36a82d78&oe=588102E3',
	link:'https://www.facebook.com/photo.php?fbid=10153118793433745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'BROK export',
	pct:5.2,
	desc:'Too malty. One of the worse polish beers I’ve had',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11150982_10153225352773745_2645273460851977484_n.jpg?oh=7bff03a9e9edeeb1d0857fce69093d57&oe=58791B9F',
	link:'https://www.facebook.com/photo.php?fbid=10153225352773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cavalier courage',
	pct:4.5,
	desc:'A bit plain for me but very good for what it is',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11077960_10153225352783745_1418047245676555322_n.jpg?oh=fb77b1463d0cd2b560eed4683a1ef1d2&oe=5885A056',
	link:'https://www.facebook.com/photo.php?fbid=10153225352783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dutch windmill',
	pct:4.6,
	desc:'Standard lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11140753_10153225352778745_8798373029749618991_n.jpg?oh=c94d76f10c9f96b33fe64ebb55e97667&oe=5886285A',
	link:'https://www.facebook.com/photo.php?fbid=10153225352778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pony fish unlikely lager',
	pct:4.7,
	desc:'Lager with something extra but nothing special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11096283_10153225353503745_2273426521907233162_n.jpg?oh=e68d32801431a4f058b816622e058007&oe=58751F78',
	link:'https://www.facebook.com/photo.php?fbid=10153225353503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures IPA',
	pct:6.4,
	desc:'Little creatures is like a baseline for a type of drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/17298_10153225353618745_5211021832992114282_n.jpg?oh=6d48392138645fc64d1c87626ab0298b&oe=586F4504',
	link:'https://www.facebook.com/photo.php?fbid=10153225353618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sainte etienne',
	pct:4.8,
	desc:'Average Aldi lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10410488_10153225353563745_8285613091047049802_n.jpg?oh=66d26d6dcb59948a673d3fe55a3dff46&oe=58863B9E',
	link:'https://www.facebook.com/photo.php?fbid=10153225353563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'My Antonia',
	pct:7.5,
	desc:'Surprisingly this tastes better after I brushed my teeth',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1473040_10153225353703745_3939681785801200434_n.jpg?oh=a8a086b21b54215f92dd0796383cdec6&oe=586CB4B3',
	link:'https://www.facebook.com/photo.php?fbid=10153225353703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pan head Pilsner',
	pct:5.2,
	desc:'A little bit metallic. Not my favourite',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/17127_10153225353823745_2917311890568592350_n.jpg?oh=f1984b13c7cbc3cae48beb6435bc492e&oe=5881929B',
	link:'https://www.facebook.com/photo.php?fbid=10153225353823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young\'s double chocolate stout',
	pct:5.2,
	desc:'A nice chocolate flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11146531_10153225353988745_3855298969416355875_n.jpg?oh=9a349b30821b317c69af0b3785d4fef2&oe=58858643',
	link:'https://www.facebook.com/photo.php?fbid=10153225353988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point resin',
	pct:9.1,
	desc:'Very bitter but without any sort of floral hop taste to balance it out',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11053047_10153225354168745_5695677735113264681_n.jpg?oh=057367d3ae8f8c599e580b9e71f67c58&oe=586C400B',
	link:'https://www.facebook.com/photo.php?fbid=10153225354168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Bengali',
	pct:6.5,
	desc:'Lots of subtle character',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148760_10153225354163745_4060898664025313434_n.jpg?oh=eb60c8ca59182b37b117712decb865d3&oe=586E26F0',
	link:'https://www.facebook.com/photo.php?fbid=10153225354163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon dog watermelon weizen',
	pct:5.3,
	desc:'Really subtle watermelon taste. Takes a while to get used to',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11136648_10153225354308745_6098979194311010987_n.jpg?oh=99ff659edd5ac0054119b75a46027b77&oe=58685FF2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade rebel ale',
	pct:4.7,
	desc:'A little stronger than a lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10494628_10153225354518745_289668608818495871_n.jpg?oh=6490ab2b597009821fc3d4924b5721c2&oe=588374EF',
	link:'https://www.facebook.com/photo.php?fbid=10153225354518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Immortal beloved Hefeweizen',
	pct:5.5,
	desc:'Basic wheat beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11159507_10153225354628745_6658479749281312928_n.jpg?oh=def5d34e9dcb6ff49cd08f76f4e07b66&oe=588477D2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Tank nine',
	pct:4.6,
	desc:'Nicely hopped',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148511_10153225354708745_902540998621637913_n.jpg?oh=ac67fb68c8cd789f633274f0ebc634df&oe=5868086B',
	link:'https://www.facebook.com/photo.php?fbid=10153225354708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire jack of spades',
	pct:5.0,
	desc:'A very nice chocolate flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11130116_10153225365978745_2851210165116478542_n.jpg?oh=092194eaa7382e4704cc77f31909c5e0&oe=5884C298',
	link:'https://www.facebook.com/photo.php?fbid=10153225365978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Crisp',
	pct:5.4,
	desc:'More harsh than crisp. A little bit more bitter than it should be',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11084248_10153225365988745_6811395875070848425_n.jpg?oh=35252998000145bf8f79e6752d71c52b&oe=58806E69',
	link:'https://www.facebook.com/photo.php?fbid=10153225365988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Globe Premium Draught',
	pct:4.6,
	desc:'Standard lager. Like the can though',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14716_10153225365973745_9134185236353368363_n.jpg?oh=f71fc9720161d794312b85cde0d28e39&oe=587EB9E7',
	link:'https://www.facebook.com/photo.php?fbid=10153225365973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Sweet action',
	pct:5.2,
	desc:'Nice sweet hoppy taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11149483_10153225366508745_5535316799902667426_n.jpg?oh=2019b5d781b4199d1827ac48afc070e6&oe=587C17A7',
	link:'https://www.facebook.com/photo.php?fbid=10153225366508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ single hop nelson',
	pct:8.0,
	desc:'Perfect level of bitterness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11130263_10153225366548745_4430696674965972638_n.jpg?oh=c3145bc32e934c98ed6c5ab470fa083b&oe=5875E745',
	link:'https://www.facebook.com/photo.php?fbid=10153225366548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La guillotine',
	pct:8.5,
	desc:'Absolutely amazing',
	score:10,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11156123_10153225366453745_4053445365399151631_n.jpg?oh=b4ea21f67a8d779e4d770f167fcd43d6&oe=58779778',
	link:'https://www.facebook.com/photo.php?fbid=10153225366453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White choc & raspberry pils',
	pct:5,
	desc:'Really mild on the choc and raspberry so the beer flavour isn\'t overwhelmed',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11027435_10153225366763745_2151282598672247864_n.jpg?oh=ea8adca43d67b1841a53da0afb029e32&oe=5869D68B',
	link:'https://www.facebook.com/photo.php?fbid=10153225366763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hargreaves hill pale ale',
	pct:4.9,
	desc:'Like a winery pretending to make a beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/247107_10153268256703745_3742881335896716752_n.jpg?oh=e51147d6391edcf4d706f6640095ee82&oe=5878902C',
	link:'https://www.facebook.com/photo.php?fbid=10153268256703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Global Warmer',
	pct:7.0,
	desc:'Tangy, strong',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11196336_10153268256713745_6680283658542121771_n.jpg?oh=1f2108d0b040e80e694db7675fcacab2&oe=587312ED',
	link:'https://www.facebook.com/photo.php?fbid=10153268256713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cristal',
	pct:4.9,
	desc:'A beer that goes down easy when you’re in a rush',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11206000_10153268256698745_6063621327290165780_n.jpg?oh=220f8ba09949face05cb8aefc9365929&oe=588488FD',
	link:'https://www.facebook.com/photo.php?fbid=10153268256698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra Italia 1906',
	pct:4.8,
	desc:'mild and refreshing',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11205086_10153268257048745_439269609069418781_n.jpg?oh=0ef44117a7c7d143c5d5f3224100c5e8&oe=5839CE19',
	link:'https://www.facebook.com/photo.php?fbid=10153268257048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat fancy pants',
	pct:5.2,
	desc:'Really tasty but also easy to drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/603733_10153268257103745_7684396821090282649_n.jpg?oh=dce18ebb2a061c67f74210fc0ceb4ddd&oe=587FA308',
	link:'https://www.facebook.com/photo.php?fbid=10153268257103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers premium lager',
	pct:4.8,
	desc:'Not nearly as good as their other offerings',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11178189_10153268257113745_2486098126429601238_n.jpg?oh=fc23c0a670f83b47dd0e39b02bc56299&oe=5885C628',
	link:'https://www.facebook.com/photo.php?fbid=10153268257113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pixel 480p',
	pct:4.8,
	desc:'Pretty good all round',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11209719_10153268257203745_8370119320216109443_n.jpg?oh=eda6fd31d7767d98be41e5dfd762cf2a&oe=587A032D',
	link:'https://www.facebook.com/photo.php?fbid=10153268257203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay alpha pale ale',
	pct:5.2,
	desc:'Standard Matilda bay beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10659329_10153268257393745_1308545288385225140_n.jpg?oh=c6d1bb4a04981781de8ef48b3c74caa9&oe=583CF69E',
	link:'https://www.facebook.com/photo.php?fbid=10153268257393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quiet deeds white ipa',
	pct:6,
	desc:'A strange combination. Maybe not quite one I could get used to',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q84/p480x480/11053929_10153268257438745_724512553237905656_n.jpg?oh=b11854938321e58e0f77a3a7e684599b&oe=5839BD15',
	link:'https://www.facebook.com/photo.php?fbid=10153268257438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Foo brew',
	pct:5.0,
	desc:'Not a thing right with this drink except that it\'s beer',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182107_10153268257443745_4399139666821958419_n.jpg?oh=e770012258225a3bc21722e59825e444&oe=5879C373',
	link:'https://www.facebook.com/photo.php?fbid=10153268257443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo Brew Hefeweizen',
	pct:5.1,
	desc:'Wouldn’t want another',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182307_10153268257633745_3691539250579390263_n.jpg?oh=8c3089d20ea22369230c751a2ddb3da3&oe=58789E15',
	link:'https://www.facebook.com/photo.php?fbid=10153268257633745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innis & Gunn original',
	pct:6.6,
	desc:'Not what I expected. Sweet and strange',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11196243_10153268257703745_5034055497574956739_n.jpg?oh=7fa96d60c8d70928fa38d563f466f036&oe=5865F601',
	link:'https://www.facebook.com/photo.php?fbid=10153268257703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn golden ale',
	pct:4.5,
	desc:'Not one you see around very often',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11178208_10153268265353745_1241728649667354734_n.jpg?oh=1c34947736617cab1fba826a8667aed6&oe=586E0AAB',
	link:'https://www.facebook.com/photo.php?fbid=10153268265353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pikes pilsner lager',
	pct:4.5,
	desc:'No fish taste at all',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11205492_10153268265378745_5159414108787972846_n.jpg?oh=5d05f60fab761322eef081e684b53c2c&oe=5884DE41',
	link:'https://www.facebook.com/photo.php?fbid=10153268265378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Altenmünster',
	pct:4.9,
	desc:'Such a cool name and bottle',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182040_10153268265373745_4318030430351182427_n.jpg?oh=92a9beb71186bbdff5f2ffccebccf6b1&oe=5869E7D9',
	link:'https://www.facebook.com/photo.php?fbid=10153268265373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love tap double lager',
	pct:5.9,
	desc:'Have to love a nice strong lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11206105_10153268265533745_1005147961464463270_n.jpg?oh=005253337af28509a5bf72b3395ca583&oe=58754EAA',
	link:'https://www.facebook.com/photo.php?fbid=10153268265533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu schloss hell',
	pct:4.9,
	desc:'Got it from Aldi, wasn’t expecting much',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10356419_10153268265598745_7305179253101068466_n.jpg?oh=74e45ee183317ac89c0f7d529de11099&oe=58811CC3',
	link:'https://www.facebook.com/photo.php?fbid=10153268265598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pistonhead lager',
	pct:4.6,
	desc:'Pretty average lager',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11149264_10153268265618745_5697774882754067421_n.jpg?oh=b41d579db30c2395e4de9510b7e27c2e&oe=587AF00A',
	link:'https://www.facebook.com/photo.php?fbid=10153268265618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads break water',
	pct:4.5,
	desc:'Slightly better than your standard',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11178233_10153268265658745_1088283222834381460_n.jpg?oh=f236216f688c410820d106cf3567c077&oe=5866B16C',
	link:'https://www.facebook.com/photo.php?fbid=10153268265658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos Equis Ambar',
	pct:4.5,
	desc:'Has more of a Polish flavour than Mexican',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/10421550_10153268279173745_3566359759975585153_n.jpg?oh=dc78abdbb2fe2151e5ac824c15359601&oe=5882F14A',
	link:'https://www.facebook.com/photo.php?fbid=10153268279173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington pale ale',
	pct:4.7,
	desc:'One of the best all round beers I’ve tasted',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11188184_10153268279118745_1035950770576096625_n.jpg?oh=c202672dc576396cbcde92866950df8c&oe=586AE691',
	link:'https://www.facebook.com/photo.php?fbid=10153268279118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'El Loco',
	pct:4.6,
	desc:'Even worse than Corona',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11017350_10153268279168745_6892560688839392935_n.jpg?oh=d6e76d4049feea04f3fd750e9b574f5f&oe=587B9750',
	link:'https://www.facebook.com/photo.php?fbid=10153268279168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Melbourne bitter',
	pct:4.6,
	desc:'Of the standard Australian beers this one ranks pretty low',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13530_10153268279263745_7432093397688380903_n.jpg?oh=95a0847bf361605e0d1ab52cb531eb94&oe=5874C3E4',
	link:'https://www.facebook.com/photo.php?fbid=10153268279263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saint-Mihal',
	pct:4,
	desc:'Pretty mild but overall ok. Better than expected',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10985916_10153268279573745_5444654809518299041_n.jpg?oh=38c8f990d2b56ab8748fa21dd8744fd7&oe=5868BBDF',
	link:'https://www.facebook.com/photo.php?fbid=10153268279573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit White Ale',
	pct:4.5,
	desc:'One of the nicest white beers I’ve had. Another winner from White Rabbit',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1932304_10153268279663745_7818150974405781457_n.jpg?oh=676ab83123d1675ef9460bf17c81849f&oe=587DBE9B',
	link:'https://www.facebook.com/photo.php?fbid=10153268279663745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour reserve amber ale',
	pct:5.2,
	desc:'This tastes like a dark ale but isn’t supposed to. The taste is ok but I’m worried by how badly this is labeled',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q82/p480x480/10403262_10153268279703745_1182589880637374526_n.jpg?oh=e39c77054bb38c74e233ca158e05fe54&oe=5872BA19',
	link:'https://www.facebook.com/photo.php?fbid=10153268279703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Pale ale',
	pct:4.5,
	desc:'A really mild pale ale but with a great smooth flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10421490_10153268279843745_9177649199173204206_n.jpg?oh=21163e2cc0415c04b4651ded749d9622&oe=587C8B12',
	link:'https://www.facebook.com/photo.php?fbid=10153268279843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Summer ale',
	pct:4.5,
	desc:'Another winner from steamrail but not as nice as the pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11062864_10153268279933745_3157338283510709307_n.jpg?oh=bbcc710baa682dca9701f1a4c18cc61c&oe=583C4972',
	link:'https://www.facebook.com/photo.php?fbid=10153268279933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail amber',
	pct:4.5,
	desc:'Not as good as the rest of the range',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11109179_10153268279943745_3245706738598167550_n.jpg?oh=5827eeab5cce5da0c5d2f03954ad2cd6&oe=5884712D',
	link:'https://www.facebook.com/photo.php?fbid=10153268279943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s southern pale ale',
	pct:4.6,
	desc:'Like a very mild pale ale. Refreshing',
	score:7,
	img:'https://scontent.xx.fbcdn.net/t31.0-0/p480x480/10498559_10153268294398745_8634108256899324103_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grand ridge Moonshine',
	pct:8.5,
	desc:'The description on the bottle makes this sound awful but it’s not too bad. Could be a little bit smoother but the overall flavour is really nice',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10462829_10153268294448745_4601669711477307040_n.jpg?oh=322cb99f80041ef6fb059f34c33d8a68&oe=5877BCF2',
	link:'https://www.facebook.com/photo.php?fbid=10153268294448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers Arms Keeper’s lager',
	pct:4.6,
	desc:'A sweet and quite flavourful lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/l/t31.0-0/p480x480/1537711_10153268294383745_2698680166388774656_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294383745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry’s Brew am I',
	pct:5.0,
	desc:'Young henry’s haven’t let me down yet',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11204930_10153268294698745_7123736277636761157_n.jpg?oh=2de858d1642715dbc3229aaae4517f54&oe=5884B0DE',
	link:'https://www.facebook.com/photo.php?fbid=10153268294698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'’69’ Summer Ale',
	pct:4.6,
	desc:'Surprisingly happy with this one',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148611_10153268294718745_4388827143167133097_n.jpg?oh=a8f1229eee869418e91833f7ca36dc22&oe=58688FA9',
	link:'https://www.facebook.com/photo.php?fbid=10153268294718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'New Englander Hop Cannon IPA',
	pct:6.6,
	desc:'Perhaps a few too many hops for me',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11202600_10153268294733745_5223220854392756415_n.jpg?oh=65d0169c86706c86330a6dd289a4371f&oe=5839A237',
	link:'https://www.facebook.com/photo.php?fbid=10153268294733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ÜberBräu',
	pct:4.0,
	desc:'Standard cheap beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10346275_10153268294828745_7444781895935179067_n.jpg?oh=4e3c5ec3973fdc9c770b965cc9491696&oe=586B6C80',
	link:'https://www.facebook.com/photo.php?fbid=10153268294828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain pale ale',
	pct:4.9,
	desc:'Mmm, pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11173400_10153268295048745_1794514503671401328_n.jpg?oh=c606dc85e5c6b92c6391559a81aae110&oe=5875A49E',
	link:'https://www.facebook.com/photo.php?fbid=10153268295048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA St Josephs',
	pct:9.5,
	desc:'Not the best triple but a nice flavour none the less',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11025707_10153268294958745_151299719186905005_n.jpg?oh=cf00b7d83b543a0125a40c81120a18fc&oe=58853E6D',
	link:'https://www.facebook.com/photo.php?fbid=10153268294958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue Santa’s private reserve ale',
	pct:6.0,
	desc:'A hearty beverage',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11149464_10153268295053745_1257589284621380857_n.jpg?oh=26bebc0613e62fa7f73f50b337f45506&oe=587B1D9E',
	link:'https://www.facebook.com/photo.php?fbid=10153268295053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Brewery Seasonal Ale',
	pct:4.7,
	desc:'Not up to the normal lord nelson standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11150609_10153268295143745_4412554411779312688_n.jpg?oh=6bd11fb40539c712df600f3341d593d5&oe=586D48A2',
	link:'https://www.facebook.com/photo.php?fbid=10153268295143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ale house pale draught',
	pct:4.2,
	desc:'Too much like a lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11212761_10153268295198745_2192040651986082448_n.jpg?oh=c9fd28eec1a66328195405db1f60e7d2&oe=5874AD15',
	link:'https://www.facebook.com/photo.php?fbid=10153268295198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers growler',
	pct:4.7,
	desc:'Mild sweet brown ale. Surprisingly easy drinking',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11148587_10153268299343745_976562173073925737_n.jpg?oh=c36e96c22419e14ecff3dbfa453d6917&oe=5879D639',
	link:'https://www.facebook.com/photo.php?fbid=10153268299343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s American pale ale',
	pct:5.7,
	desc:'Was hoping for a hoppier taste. More of a pale ale for getting smashed',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/22311_10153268299368745_777193479112346497_n.jpg?oh=0a886be69c8a0bde38a0354c3bd887d8&oe=583A8972',
	link:'https://www.facebook.com/photo.php?fbid=10153268299368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers Kung foo lager',
	pct:4.5,
	desc:'Like a tangy lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10428667_10153268299353745_7595281458401637305_n.jpg?oh=1037e696cf06cd91f24441d25bb8b3b0&oe=5880E8DD',
	link:'https://www.facebook.com/photo.php?fbid=10153268299353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rising sun pale ale',
	pct:5.0,
	desc:'Was expecting more from this. It’s the nice pale flavour but with too much harshness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10985454_10153268299563745_9155074984245162225_n.jpg?oh=6b614725b0553121f0eccc455ed2d571&oe=583C6113',
	link:'https://www.facebook.com/photo.php?fbid=10153268299563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maximus',
	pct:5.8,
	desc:'Good towards the end',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11182152_10153268299603745_965318376264137516_n.jpg?oh=87fe742a9086a19fd7b4cc4d02f11968&oe=586CD911',
	link:'https://www.facebook.com/photo.php?fbid=10153268299603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms journeyman',
	pct:3.5,
	desc:'Nice and easy drinking, but still a mid strength',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11200596_10153268299613745_30462160346726619_n.jpg?oh=f01bc282e880816caf802eb0af9daeb7&oe=587531BE',
	link:'https://www.facebook.com/photo.php?fbid=10153268299613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit dark ale',
	pct:4.9,
	desc:'Not what I usually expect from a dark ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/11168124_10153268299693745_7328518567704258929_n.jpg?oh=1ce63f4edf8ec148f2381324fbfc8c32&oe=5884C469',
	link:'https://www.facebook.com/photo.php?fbid=10153268299693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liberty ale',
	pct:5.9,
	desc:'Very nicely done. Great for a session beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11210416_10153268299813745_8323582624602808812_n.jpg?oh=972fe640b87571931f1e963614773846&oe=5878C88B',
	link:'https://www.facebook.com/photo.php?fbid=10153268299813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam lager',
	pct:4.9,
	desc:'A very flavourful lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11174764_10153268299828745_5386835742329909663_n.jpg?oh=87caf74bde4b479112e6f6cdd0a29ed3&oe=5874352E',
	link:'https://www.facebook.com/photo.php?fbid=10153268299828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boag XXX Ale',
	pct:4.8,
	desc:'A solid flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/11666075_10153438034333745_2014329694046827935_n.jpg?oh=55c9e2da5fcb79980b6e3bb310350b4f&oe=588220B2',
	link:'https://www.facebook.com/photo.php?fbid=10153438034333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Žatec',
	pct:4.6,
	desc:'Tastes more polish than Czech',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11692789_10153438034343745_2933345002405640949_n.jpg?oh=ae66b98955447eb193131b1a7ffa3e67&oe=586F0144',
	link:'https://www.facebook.com/photo.php?fbid=10153438034343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fiji Bitter',
	pct:4.6,
	desc:'Has a slight tang to it that you don’t get with Australian bitters',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11698631_10153438034358745_1791286718120294864_n.jpg?oh=ba740aa98667f791542a59368dd2d90f&oe=58701114',
	link:'https://www.facebook.com/photo.php?fbid=10153438034358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Noble Pale ale',
	pct:5.2,
	desc:'Was expecting much more. Just a plain lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11202109_10153438034543745_2281064819509080771_n.jpg?oh=7015d5e3202da4da8d065e4c551ebaf7&oe=5880D89E',
	link:'https://www.facebook.com/photo.php?fbid=10153438034543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail pilsner',
	pct:4.5,
	desc:'A bit too much like a standard lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11667503_10153438034893745_6099533991518812550_n.jpg?oh=71b8487ed16fd1f2d565c71efdf163d3&oe=583A4524',
	link:'https://www.facebook.com/photo.php?fbid=10153438034893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds taco',
	pct:5.2,
	desc:'The best wheat beer I\'ve ever tasted',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11693950_10153438034793745_2993920563621018004_n.jpg?oh=fff49dfa7223adb74230a8fa89a894ed&oe=587FF73D',
	link:'https://www.facebook.com/photo.php?fbid=10153438034793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Norman Australian ale',
	pct:5.1,
	desc:'The logo looks dodgy but it\'s actually a nice mild pale ale',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11403010_10153438034973745_575409467690114271_n.jpg?oh=cdc4aa8370de9e5ed6de59e7abe96cf8&oe=58715FEB',
	link:'https://www.facebook.com/photo.php?fbid=10153438034973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Blonde',
	pct:4.6,
	desc:'As I expected a plain flavourless lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11703056_10153438035233745_914090365741131285_n.jpg?oh=eca076b16ba8f80d693864975cb678f4&oe=5877EA93',
	link:'https://www.facebook.com/photo.php?fbid=10153438035233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vonu Pure lager',
	pct:4.6,
	desc:'Surprisingly good and well rounded',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11707520_10153438035303745_142890088110404042_n.jpg?oh=ff0b57557a59e6fce927a7144e2ff2a1&oe=58672291',
	link:'https://www.facebook.com/photo.php?fbid=10153438035303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'OB golden lager',
	pct:4.8,
	desc:'A little more flavourful than normal german beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11665626_10153438035338745_1942830826260024445_n.jpg?oh=6f8a455b8e4488e1199a4ca0fd2ac652&oe=58771E90',
	link:'https://www.facebook.com/photo.php?fbid=10153438035338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kirin first press',
	pct:5.0,
	desc:'A little better than a standard lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11026787_10153438035418745_3190886247129001905_n.jpg?oh=26f28898ab39775d4cc18e7b8fa7909e&oe=587FDB20',
	link:'https://www.facebook.com/photo.php?fbid=10153438035418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Černovar  Svetlé',
	pct:4.9,
	desc:'A bit too malty',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11403435_10153438035523745_1440324413921244933_n.jpg?oh=5b06b8168af2781ec94f2574045ba9a0&oe=586EAA0F',
	link:'https://www.facebook.com/photo.php?fbid=10153438035523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage Roads Single Fin',
	pct:4.5,
	desc:'Floral and tangy. Much better than expected',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11737813_10153438035548745_1721256026335429959_n.jpg?oh=2225d05ae1de1e51e477ab7d4427444f&oe=587D9203',
	link:'https://www.facebook.com/photo.php?fbid=10153438035548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vailima',
	pct:4.9,
	desc:'An all round terrible beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11140143_10153438035598745_277263619216109713_n.jpg?oh=ec2f075887f2cb78d86117ca06c702d4&oe=586C4A51',
	link:'https://www.facebook.com/photo.php?fbid=10153438035598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dry Hopped Pale Ale',
	pct:5.4,
	desc:'Much hoppier than a normal pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11693847_10153438035713745_940540476039083000_n.jpg?oh=5772b4b5659309aa667649041b58d007&oe=586DA263',
	link:'https://www.facebook.com/photo.php?fbid=10153438035713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Breaking the cardinal Rule',
	pct:9.5,
	desc:'Not much of an IPA but a nice Belgian tripel',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11063592_10153438035963745_4745705285004081483_n.jpg?oh=ba056b82d664f927e2157f077994ce28&oe=58846FE7',
	link:'https://www.facebook.com/photo.php?fbid=10153438035963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paddo pale',
	pct:5.0,
	desc:'No idea how this can be called a pale ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11665515_10153438035968745_4205414644516816644_n.jpg?oh=4ff1edc36fb92c3a98238edbf0eed578&oe=587A84CD',
	link:'https://www.facebook.com/photo.php?fbid=10153438035968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Royal Premium lager',
	pct:5.1,
	desc:'Nothing premium about this',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11742655_10153438036023745_7783155327321003667_n.jpg?oh=3b996d48d8e8615d689191bee015347e&oe=5883FF04',
	link:'https://www.facebook.com/photo.php?fbid=10153438036023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'William’s organic pale ale',
	pct:4.5,
	desc:'A slightly bitter but well rounded pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11234818_10153438036188745_6157946174058205755_n.jpg?oh=68c42ca868f34d94e8a975f3020aed80&oe=587F78A3',
	link:'https://www.facebook.com/photo.php?fbid=10153438036188745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses Chardonnay IPA',
	pct:6.0,
	desc:'A mild IPA that really hits the spot. Nice floral aroma',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11071649_10153438036343745_3147415906093292508_n.jpg?oh=1d9cd418285e31164767ef5c38d4555a&oe=58690034',
	link:'https://www.facebook.com/photo.php?fbid=10153438036343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oatis',
	pct:6.5,
	desc:'A little bit too sharp for me',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11667294_10153438036333745_6944136313097119915_n.jpg?oh=7377fec95ed31738da7fffd0aaa133a7&oe=586E887A',
	link:'https://www.facebook.com/photo.php?fbid=10153438036333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bruce Malone',
	pct:6.2,
	desc:'Ok, but something is just wrong',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/11665530_10153438036328745_3370491198453159853_n.jpg?oh=a0051fe489f28781de85051ab8e5be67&oe=587CC4AD',
	link:'https://www.facebook.com/photo.php?fbid=10153438036328745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big smoke wet hop IPA',
	pct:null,
	desc:'Like the wet hop, need to find more',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11233171_10153438036778745_7460779125459519208_n.jpg?oh=7988bdaa72f43f64ca03fbb15360bd79&oe=58835456',
	link:'https://www.facebook.com/photo.php?fbid=10153438036778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camel\'s beard black sour',
	pct:4.3,
	desc:'Like mixing black current juice with a beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10404258_10153438036873745_1054335218755238006_n.jpg?oh=03b60e3e57e33b60e7bedf9e640e5384&oe=586BEF6C',
	link:'https://www.facebook.com/photo.php?fbid=10153438036873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks brewing ESB',
	pct:5.1,
	desc:'Bitter like an IPA but without the floral hoppiness',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11709549_10153438036878745_3892385374192512736_n.jpg?oh=dff73a8537e172a6c80b9e5b160c7f0d&oe=583952B9',
	link:'https://www.facebook.com/photo.php?fbid=10153438036878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koshihikari rice beer',
	pct:5.0,
	desc:'Amazing how similar this is to a normal lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11665487_10153438037018745_87412937068060294_n.jpg?oh=6e4b7e628a94f471b975c4e26235cb60&oe=58712350',
	link:'https://www.facebook.com/photo.php?fbid=10153438037018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bastard son pale ale',
	pct:4.8,
	desc:'Cross between a pale and an IPA',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11039309_10153438037053745_1453835514615000872_n.jpg?oh=e42eaba66fa5f6e3361697669941ebe7&oe=5837D19E',
	link:'https://www.facebook.com/photo.php?fbid=10153438037053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river red ale',
	pct:6.5,
	desc:'A bit harsh for me',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11403190_10153438037108745_3712451184954693803_n.jpg?oh=91c66b7c043ecc7ba10587a8ae1c9999&oe=5866C3B5',
	link:'https://www.facebook.com/photo.php?fbid=10153438037108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dirty Bastard',
	pct:8.5,
	desc:'A lot of flavour in this beer but it’s not quite right',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11707850_10153438037263745_7444067883763013637_n.jpg?oh=16847dd1c140e07c0ba7e1c284a34b40&oe=5871FDD0',
	link:'https://www.facebook.com/photo.php?fbid=10153438037263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:3.5,
	desc:'A crappier version of the regular superdry',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11214280_10153438037523745_4286815657184147844_n.jpg?oh=ccd688b85e16c62fe6c8549b24ed0fab&oe=587CA931',
	link:'https://www.facebook.com/photo.php?fbid=10153438037523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kooinda hop transfusion ipa',
	pct:7.5,
	desc:'A very well balanced and floral IPA',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11659318_10153438037553745_8784383877969678894_n.jpg?oh=69d5577adf5ff11849f2ec072e902256&oe=58682DEB',
	link:'https://www.facebook.com/photo.php?fbid=10153438037553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms spearhead pale ale',
	pct:5.2,
	desc:'A bit of a let down. Doesn’t have what I expect from a pale ale',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11709660_10153438037763745_2498650749121162924_n.jpg?oh=212606ce8265129f88b40276e1df6acd&oe=5838B05D',
	link:'https://www.facebook.com/photo.php?fbid=10153438037763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Pale Ale',
	pct:3.8,
	desc:'Really mild for a pale ale but also really mild on alcohol as well. Guess it would be good if you’re just getting into beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11666224_10153438038048745_8968016209259531630_n.jpg?oh=1842dd8ff6de9526bada3ae0843413e9&oe=586B1142',
	link:'https://www.facebook.com/photo.php?fbid=10153438038048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s session ale',
	pct:3.5,
	desc:'Another good beer from Matso’s but still a mid strength',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11709463_10153438038063745_514405702449925285_n.jpg?oh=0c0c248746d3abf4abe088e28c821b0a&oe=586ADDE0',
	link:'https://www.facebook.com/photo.php?fbid=10153438038063745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Golden ale',
	pct:4.2,
	desc:'Zesty as promised. Really high quality all round',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11742900_10153438038123745_9100299621440264544_n.jpg?oh=720c7601a20347907ee710a1489827f3&oe=5837D64E',
	link:'https://www.facebook.com/photo.php?fbid=10153438038123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage Directors',
	pct:4.8,
	desc:'Pretty run of the mill english ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11038987_10153438038293745_6155510821012537170_n.jpg?oh=a1cb9f7d9016605ae22624f86dd378da&oe=58382290',
	link:'https://www.facebook.com/photo.php?fbid=10153438038293745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Pale ale',
	pct:4.5,
	desc:'A really nice sweet hit of flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11251267_10153438038418745_6850868855690668787_n.jpg?oh=b116dd16bbf6c974f889c1739b155c48&oe=58708AF4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines ESB',
	pct:5.4,
	desc:'One of the nicer ESBs that I’ve had. But perhaps I just don’t know what an ESB is supposed to taste like',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11666089_10153438038438745_5192310955658972737_n.jpg?oh=768272ceef82631cc5a05fe25256d575&oe=5880AEB4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad Sideways Pale ale',
	pct:4.0,
	desc:'This beer is just all wrong. Tastes more like an IPA than a pale and the fizz is just strange',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11692763_10153438038563745_2254106052941195483_n.jpg?oh=b4f38141dd1c839cc2e78c7b9afbe54e&oe=587FE235',
	link:'https://www.facebook.com/photo.php?fbid=10153438038563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carter premium lager',
	pct:4.0,
	desc:'Nothing premium about this',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11707555_10153438038703745_5816121848155003948_n.jpg?oh=cde4757e7fa0dc4727b5b422e24b90a2&oe=5882A245',
	link:'https://www.facebook.com/photo.php?fbid=10153438038703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Claro',
	pct:4.6,
	desc:'A kind of sweet Mexican lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11694866_10153438038743745_8578021989993223626_n.jpg?oh=6cf82aae137f60c6b4bf7dcdb9d8d7d4&oe=587DCC40',
	link:'https://www.facebook.com/photo.php?fbid=10153438038743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Five hop',
	pct:6.2,
	desc:'I really wanted to like this beer because of the cool bottle but the flavour just isn’t right',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12105748_10153656863078745_1274782812792168869_n.jpg?oh=1e79b322db3fad8a92da47b18493b084&oe=586D3B70',
	link:'https://www.facebook.com/photo.php?fbid=10153656863078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands pale',
	pct:4.6,
	desc:'Missing the boxes it\'s trying to tick',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12109067_10153656863173745_3852359078129229777_n.jpg?oh=ac574dc6fd4a18eb9239e6588e171c11&oe=583BF9FA',
	link:'https://www.facebook.com/photo.php?fbid=10153656863173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands IPA',
	pct:5.2,
	desc:'Nicer than the pale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q83/p480x480/12065989_10153656863158745_690647153577625477_n.jpg?oh=e792052cb659104217bcb3879ac67e66&oe=5885DC22',
	link:'https://www.facebook.com/photo.php?fbid=10153656863158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bellerose Blanc',
	pct:6.5,
	desc:'A fairly mild Belgian beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q83/p480x480/12141679_10153656863378745_27632216009951724_n.jpg?oh=ee09f0b2f44ff54c014a4ed14ac3044c&oe=586EB292',
	link:'https://www.facebook.com/photo.php?fbid=10153656863378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fred Murrays IPA',
	pct:5.6,
	desc:'Nothing special but nothing wrong with it',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/11988711_10153656863543745_374129198357931998_n.jpg?oh=1ebfd7331501c5b9f21803144522a28e&oe=587D14BF',
	link:'https://www.facebook.com/photo.php?fbid=10153656863543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh Brewing Co FIG JAM IPA',
	pct:7.0,
	desc:'Has a strange aftertaste that completely ruins the beer',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10393668_10153656863593745_2358385457397680268_n.jpg?oh=b43c129106e2d6f7710405cb6cb669a0&oe=587E835C',
	link:'https://www.facebook.com/photo.php?fbid=10153656863593745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDevil IPA',
	pct:6.7,
	desc:'A pretty average IPA which slightly misses the mark',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12072602_10153656863733745_7824943187452200119_n.jpg?oh=0bf1632f32bed25f2df2c9f26e2431f0&oe=58677594',
	link:'https://www.facebook.com/photo.php?fbid=10153656863733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada 2015 Beer Camp',
	pct:7.0,
	desc:'Not a favourite but a well rounded flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12105717_10153656863923745_5748636982943209878_n.jpg?oh=ec443a7e8d472ee275dfa1202892abd6&oe=5837F0D7',
	link:'https://www.facebook.com/photo.php?fbid=10153656863923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wahoo summer lager',
	pct:4.2,
	desc:'Water with a hint of beer. Good for a summer day',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115651_10153656864028745_2911616261438807210_n.jpg?oh=6c6bbcc1c37ba4d56545815d479cbe14&oe=587B173C',
	link:'https://www.facebook.com/photo.php?fbid=10153656864028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy yak',
	pct:4.2,
	desc:'I think the creators were lazy',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12096246_10153656864118745_718405220444766067_n.jpg?oh=d34794696587fb3a680b13e9787502a4&oe=586541AE',
	link:'https://www.facebook.com/photo.php?fbid=10153656864118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys darling pale ale',
	pct:4.4,
	desc:'Not that different from a new',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12107775_10153656864253745_3676978926907656134_n.jpg?oh=531df5e6edeac5bf48c51d9db630be71&oe=58717373',
	link:'https://www.facebook.com/photo.php?fbid=10153656864253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn Pale Ale',
	pct:4.7,
	desc:'Decent but there’s just a little something wrong',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112425_10153656864393745_4992271544321247491_n.jpg?oh=184e03086794cb34e2cd62ed9e06bdf2&oe=58794548',
	link:'https://www.facebook.com/photo.php?fbid=10153656864393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river Jamaica Ale',
	pct:5.6,
	desc:'Mild but with an underlying taste that’s really nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112175_10153656864428745_274214784974027443_n.jpg?oh=f1ac5b6ba7d78ec4a660e7c483d96cf0&oe=586B17A7',
	link:'https://www.facebook.com/photo.php?fbid=10153656864428745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Hop Hunter IPA',
	pct:6.2,
	desc:'Very hoppy with a nice finish',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115843_10153656864518745_6379524063255293794_n.jpg?oh=f6c324887c66e1c8ac910c1a3e25efd2&oe=5866F875',
	link:'https://www.facebook.com/photo.php?fbid=10153656864518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat surefoot stout',
	pct:5.0,
	desc:'A fairly mild stout',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115556_10153656864648745_1260864511539950726_n.jpg?oh=6a94b578abe69b7ceac4fe54537b5d84&oe=587EB1D5',
	link:'https://www.facebook.com/photo.php?fbid=10153656864648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge Road Bling IPA',
	pct:5.8,
	desc:'Lacking the rounded finish that I was hoping for, but not too bad',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10350421_10153656864623745_1423000334986932771_n.jpg?oh=698fd35ae6c58781c52fa9fd893d012a&oe=5880B248',
	link:'https://www.facebook.com/photo.php?fbid=10153656864623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon boy golden ale',
	pct:4.5,
	desc:'Has a little bit of paleness to it',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112481_10153656864773745_7414480192728397600_n.jpg?oh=42a0bb24140b9eea1360a0967721efce&oe=5877DB45',
	link:'https://www.facebook.com/photo.php?fbid=10153656864773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Original special blonde beer',
	pct:8.6,
	desc:'Super strong, comes in a giant can and tastes better than normal lager. An all round winner',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12079418_10153656865038745_406494349310437104_n.jpg?oh=8844cb889817e14c21c4b8caa33d8030&oe=586D0926',
	link:'https://www.facebook.com/photo.php?fbid=10153656865038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s hop ale',
	pct:6.0,
	desc:'Strong and bitter, could do to be a bit more floral',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12143171_10153656865058745_383441333102974608_n.jpg?oh=38fac48071148e4263f02e64ebb764a5&oe=586E4219',
	link:'https://www.facebook.com/photo.php?fbid=10153656865058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers',
	pct:5.0,
	desc:'The same as all the other thai beers',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12106825_10153656865098745_7827402413417902820_n.jpg?oh=2cf88b01c731fd88f129f972ed3aff31&oe=586A1671',
	link:'https://www.facebook.com/photo.php?fbid=10153656865098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Federbräu',
	pct:4.7,
	desc:'Has the flavour of a german beer but the quality is slightly lacking',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/12115906_10153656865258745_5285972944996147053_n.jpg?oh=b47d2cbc39aed893ff51212b86fbedb0&oe=58831736',
	link:'https://www.facebook.com/photo.php?fbid=10153656865258745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ICing grapefruit',
	pct:4.0,
	desc:'Not sure how this qualifies as a beer but it\'s pretty nice regardless',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12109080_10153656865268745_8515065510187069262_n.jpg?oh=4d852b60e6ea15dee29db08eae25cfb7&oe=5873F9AF',
	link:'https://www.facebook.com/photo.php?fbid=10153656865268745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Phuket',
	pct:5.0,
	desc:'A little bit more tangy than other Thai beers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12118934_10153656865338745_4802874236575690852_n.jpg?oh=5b5be2675b1e4592bf47702b64b3c1a6&oe=58768BAB',
	link:'https://www.facebook.com/photo.php?fbid=10153656865338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao dark lager',
	pct:6.5,
	desc:'Doesn’t really taste like a dark lager, just a really crisp and clean lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10888489_10153656865543745_7177566089678444243_n.jpg?oh=1c1fe26f5cf9901ce4a60a03bf462a1a&oe=586ADE29',
	link:'https://www.facebook.com/photo.php?fbid=10153656865543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers X-tra',
	pct:6.0,
	desc:'A slightly stronger and nicer version of the regular cheers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11201812_10153656865613745_2836886776655090085_n.jpg?oh=c0ac1d01d0527289a9f0be32cc056ba1&oe=58691B38',
	link:'https://www.facebook.com/photo.php?fbid=10153656865613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel Pale Pilsen',
	pct:5.0,
	desc:'Filipino version of San Miguel. Not nearly as nice as the Spanish version',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q86/p480x480/12108847_10153656865618745_952249772663413561_n.jpg?oh=2a4199ea7c6e3ee2c13e1a7a9238c2d0&oe=588614C7',
	link:'https://www.facebook.com/photo.php?fbid=10153656865618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The fox mid ale',
	pct:null,
	desc:'A microbrew copy of every other tasteless mid strength lager out there',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12096074_10153656865793745_4213334596574344775_n.jpg?oh=ebe8865a9432ce43c47dfc7349dd9236&oe=5883B071',
	link:'https://www.facebook.com/photo.php?fbid=10153656865793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XXXX bitter',
	pct:4.6,
	desc:'So hard to find the full strength XXXX even in QLD. And it\'s easy to see why. Needs a shot of vodka like in the old days',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12108168_10153656865913745_802278422732824770_n.jpg?oh=378e21981ae8d87b1c7b9790d056872e&oe=58676E8A',
	link:'https://www.facebook.com/photo.php?fbid=10153656865913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės vyšniu kriek',
	pct:5.0,
	desc:'A cherry beer. A little bit too see to drink much but nice in small doses',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12116003_10153656865943745_8818428390735256762_n.jpg?oh=7350cbd639364c18b3c7fae0c61eca97&oe=5883A71E',
	link:'https://www.facebook.com/photo.php?fbid=10153656865943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis grand select',
	pct:5.4,
	desc:'Standard lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115501_10153656866208745_1270989772264309732_n.jpg?oh=e10a230b67a944d6a848209c48a54341&oe=583B8DA3',
	link:'https://www.facebook.com/photo.php?fbid=10153656866208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point the way IPA',
	pct:5.9,
	desc:'Really good example of an IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12088452_10153656866578745_7251403189729284400_n.jpg?oh=5a6f595536152fc54f15a5ed675f5683&oe=58792612',
	link:'https://www.facebook.com/photo.php?fbid=10153656866578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Thanks captain obvious IPA',
	pct:5.8,
	desc:'Gotta love citra hops',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12112199_10153656866448745_6538817725943333095_n.jpg?oh=afda6348ddd520e755bd75966be5b2aa&oe=586EFA32',
	link:'https://www.facebook.com/photo.php?fbid=10153656866448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner kristallweissbier',
	pct:5.4,
	desc:'Very crisp for a wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115843_10153656866648745_4612566258079331508_n.jpg?oh=b40695236dfb6d804248cef7946535c0&oe=58384D7C',
	link:'https://www.facebook.com/photo.php?fbid=10153656866648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noisy minor anzus IPA',
	pct:6.0,
	desc:'A bit of a let down, just too bitter',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12088432_10153656866828745_7848120632268756477_n.jpg?oh=2164dc43a5cc560ff0a7e5a371b75e4b&oe=5839C9B6',
	link:'https://www.facebook.com/photo.php?fbid=10153656866828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Martens Pils',
	pct:5.0,
	desc:'A good session beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12072622_10153656866868745_684969190381396266_n.jpg?oh=7b90da3f39acef05384002aca43a3078&oe=5874E92A',
	link:'https://www.facebook.com/photo.php?fbid=10153656866868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chimay red',
	pct:7.0,
	desc:'Well known but not the best example of a belgian dubbel',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1554374_10153656866968745_899111329413653237_n.jpg?oh=1c87c1dd6d9e07c66731e8c80ed3aa82&oe=5838C67E',
	link:'https://www.facebook.com/photo.php?fbid=10153656866968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds bantam IPA',
	pct:4.7,
	desc:'My biggest disappointment so far from two birds',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12115580_10153656867073745_1898684720680152438_n.jpg?oh=99c2f61b574d298fb94a1e05c9fcd0cd&oe=586AE2FA',
	link:'https://www.facebook.com/photo.php?fbid=10153656867073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew cult hop zone',
	pct:5.0,
	desc:'Very good IPA but not sure if it\'s a good session beer',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12079324_10153656867078745_2445263991582775788_n.jpg?oh=1a61d7a22079b973f9b2aafac8294411&oe=58817E84',
	link:'https://www.facebook.com/photo.php?fbid=10153656867078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult spoiler alert',
	pct:4.5,
	desc:'A little bit of a let down from the IPAs',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12107838_10153656867113745_341030388742417750_n.jpg?oh=48d7c93324a8003e6fd1e8f62b32177e&oe=586E053A',
	link:'https://www.facebook.com/photo.php?fbid=10153656867113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade pale ale',
	pct:4.7,
	desc:'A regular beer pretending to be something more',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12140701_10153656867523745_8057771070522060863_n.jpg?oh=eb435e6ef43c8cdd9e3259b6b1563d69&oe=5865C72C',
	link:'https://www.facebook.com/photo.php?fbid=10153656867523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire nine tails',
	pct:5.0,
	desc:'Pretty good all round',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12074484_10153656867603745_6432235869019497791_n.jpg?oh=58659b69ae70298f9c46e5020bd7e961&oe=586F9452',
	link:'https://www.facebook.com/photo.php?fbid=10153656867603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Celia',
	pct:4.5,
	desc:'Slightly bad czech lager. But at least it’s gluten free',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12119170_10153656873518745_1645193236829467007_n.jpg?oh=7ba89bcf1349bc212583a52bc35d0c0c&oe=5837C0D6',
	link:'https://www.facebook.com/photo.php?fbid=10153656873518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxx dry',
	pct:5.0,
	desc:'Standard',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12107835_10153656873528745_2876365020596691425_n.jpg?oh=d8f8475d2e99c3b71c127fba25d826c4&oe=5875ED9B',
	link:'https://www.facebook.com/photo.php?fbid=10153656873528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn amber ale',
	pct:4.7,
	desc:'A bit too bitter',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12109019_10153656873578745_8374191481709518736_n.jpg?oh=e2349f647f7bc3eb46f8b18b7b5e19b4&oe=583D606E',
	link:'https://www.facebook.com/photo.php?fbid=10153656873578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Pointers pale ale',
	pct:4.2,
	desc:'A very well rounded pale ale but not that much flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12119151_10153656873648745_4254619746116923719_n.jpg?oh=bd1690a1f02bb9296b92e40e5d34c884&oe=583AF387',
	link:'https://www.facebook.com/photo.php?fbid=10153656873648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner helfe weissbier',
	pct:5.4,
	desc:'A very mild flavoured wheat beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509736_10153811610538745_2189727718735863015_n.jpg?oh=1328f513210de7a538c4d7a1c491f122&oe=58657C1B',
	link:'https://www.facebook.com/photo.php?fbid=10153811610538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Downtown Brown',
	pct:5.0,
	desc:'A fairly unsweet brown',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12400634_10153811610548745_7658175171400136673_n.jpg?oh=deaec6c469f6a3c0fba3f45a72cf64b2&oe=583C4855',
	link:'https://www.facebook.com/photo.php?fbid=10153811610548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans Hoppy Gonzales',
	pct:5.9,
	desc:'Really mild and nice chilli flavour but there\'s a little too much bitterness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1935435_10153811610483745_7535392188033528320_n.jpg?oh=4ba63b051e34f4fd324d19cf96e62119&oe=587AC64F',
	link:'https://www.facebook.com/photo.php?fbid=10153811610483745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans red sky IPA',
	pct:6.5,
	desc:'I great IPA for people who are new to beers with flavour. Mild but really well done',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510233_10153811610863745_3262758970154145170_n.jpg?oh=846f349ec8ad14cc2e789cec4588d88e&oe=583CBA3E',
	link:'https://www.facebook.com/photo.php?fbid=10153811610863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans white Sky',
	pct:6.5,
	desc:'Never quite tasted right but perhaps I was having an off day',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/10561728_10153811610893745_8053139554847988051_n.jpg?oh=7da95810c1178a952d0fd5cd9f4bbfac&oe=58380307',
	link:'https://www.facebook.com/photo.php?fbid=10153811610893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s newtowner',
	pct:4.8,
	desc:'A fairly plain lager',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12376181_10153811610908745_3920511327334452329_n.jpg?oh=c276a7dc210b7421df9fb07f7f8d170f&oe=586DED83',
	link:'https://www.facebook.com/photo.php?fbid=10153811610908745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redds Apple-Ale',
	pct:4.0,
	desc:'Really mild apple flavour, like a cider without all the sugar',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12507414_10153811611358745_6320534595559779603_n.jpg?oh=6cb99c90dc8da50d46999b3717d2a4b9&oe=587452AF',
	link:'https://www.facebook.com/photo.php?fbid=10153811611358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hill Scotch ale',
	pct:5.8,
	desc:'Fizzed for about 10 minutes and then just tasted a little blemished',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12495170_10153811611453745_4249513101009687446_n.jpg?oh=b21e94968f3e3628d0fcdc12566184e4&oe=58711173',
	link:'https://www.facebook.com/photo.php?fbid=10153811611453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult Reset Robot',
	pct:3.5,
	desc:'A little on the weak side but a really good pale flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12417859_10153811611533745_6524426791759855644_n.jpg?oh=fe0c312f44f88c46bfc2e40fbf5de13d&oe=586FE941',
	link:'https://www.facebook.com/photo.php?fbid=10153811611533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garagista IPA',
	pct:5.8,
	desc:'Really nice colour but the flavour misses the mark',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12439242_10153811611693745_5295129091092363707_n.jpg?oh=34c83b80576313d7833088902282ea52&oe=58710C93',
	link:'https://www.facebook.com/photo.php?fbid=10153811611693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Alice Porter',
	pct:5.2,
	desc:'A fairly nice porter, but nothing great',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1227_10153811611783745_4791320626770283018_n.jpg?oh=7a5e12e9aff64984da71a47cf74bd274&oe=583945D0',
	link:'https://www.facebook.com/photo.php?fbid=10153811611783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volkan Santorini blonde',
	pct:5.0,
	desc:'Has a kind of silty texture to it and an Eastern European tang',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510230_10153811618053745_1537940753105870983_n.jpg?oh=e7ff8110b5733f7230d94b5363c80982&oe=58652B22',
	link:'https://www.facebook.com/photo.php?fbid=10153811618053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing company citra IPA',
	pct:6.5,
	desc:'Really nice floral flavour. Gotta love citra hops',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510389_10153811618073745_2543157782800791845_n.jpg?oh=74d7540f85c7f1a428002b07b3a6592b&oe=586F5AA7',
	link:'https://www.facebook.com/photo.php?fbid=10153811618073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch voyage of the Galaxy',
	pct:3.9,
	desc:'Just can\'t get into this. It\'s heavy without a nice flavour behind it',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12523010_10153811617993745_3799427315794683212_n.jpg?oh=e6d54926fcc0f29e37b5c99d4d23f592&oe=5879CDBF',
	link:'https://www.facebook.com/photo.php?fbid=10153811617993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Merchant three toe',
	pct:5.6,
	desc:'Has some sort of wrong tinge to it and nothing to redeem that',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/12523010_10153811618698745_8674316170585442130_n.jpg?oh=e91e53da52c580f23e0485d0e5268ffb&oe=5883A3EE',
	link:'https://www.facebook.com/photo.php?fbid=10153811618698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch west coast IPA',
	pct:5.8,
	desc:'Mild but very tasty. One of the first from batch that I really like',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12510395_10153811618823745_3574564297259479731_n.jpg?oh=663b1ea38bd2022a5875ba8d77a20f08&oe=583CD4F2',
	link:'https://www.facebook.com/photo.php?fbid=10153811618823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modus cream of the hop #3',
	pct:5.6,
	desc:'Actually more creamy than a normal beer. Really nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509647_10153811618828745_7009333713246897313_n.jpg?oh=3645cbca8f26684d9689410781fd5654&oe=587928C6',
	link:'https://www.facebook.com/photo.php?fbid=10153811618828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie kolsch',
	pct:4.6,
	desc:'Really well balanced but a little lacking in flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509088_10153811619033745_702562891235220957_n.jpg?oh=67bb1b3293c176f651253710779ac7d7&oe=587115AF',
	link:'https://www.facebook.com/photo.php?fbid=10153811619033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie artisan ale',
	pct:4.4,
	desc:'A bit of a harsh flavour. Disappointing after the kolsch',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509407_10153811619193745_3070555167581402785_n.jpg?oh=02409387fd22b72e761db0fec643f0f5&oe=5839AD00',
	link:'https://www.facebook.com/photo.php?fbid=10153811619193745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gulden draak 9000',
	pct:10.5,
	desc:'A little harsh all round without any real nice flavour to back it up. You get used to it but why bother',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/580376_10153811619198745_8101596644532309757_n.jpg?oh=930ab909f438a9c6417bd8a1a5b067d4&oe=587C959E',
	link:'https://www.facebook.com/photo.php?fbid=10153811619198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arrogant bastard barrel aged',
	pct:8.1,
	desc:'Really nice secondary flavour. Could drink a lot of these',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12508899_10153811619303745_6510580439583908445_n.jpg?oh=b4ed678dfdffe13e1a30d689dde2a2e8&oe=58671F2D',
	link:'https://www.facebook.com/photo.php?fbid=10153811619303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pinedrops IPA',
	pct:6.5,
	desc:'A solid IPA, better than I expected',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/581926_10153811639323745_2485735585097388298_n.jpg?oh=75185345bbd1d20aec6a6d0068645f7e&oe=583805F4',
	link:'https://www.facebook.com/photo.php?fbid=10153811639323745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Killer Sproket Rye IPA',
	pct:6.2,
	desc:'I haven’t had many rye IPAs but so far they’ve all been great beers',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1660722_10153811639283745_5357595767484756321_n.jpg?oh=21b596927d1454f3a6adc592d2f83fc3&oe=586B1E99',
	link:'https://www.facebook.com/photo.php?fbid=10153811639283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson Valley Wild Turkey Bourbon Barrel Stout',
	pct:6.9,
	desc:'Better than I expected, but then I was pretty worried about this one',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/6841_10153811639248745_4589085530063719353_n.jpg?oh=984f5f8da9c79858e4297cc24db6add9&oe=58730007',
	link:'https://www.facebook.com/photo.php?fbid=10153811639248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington IPA',
	pct:6.4,
	desc:'Another winner from Mornington. Really strong on flavour but without any harshness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1933914_10153811639743745_2943766557036716002_n.jpg?oh=2cc56a3eb44294c91a399e42c943d21a&oe=587CB001',
	link:'https://www.facebook.com/photo.php?fbid=10153811639743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures Furphy',
	pct:4.4,
	desc:'Saw this a lot in Melbourne and wish it would start showing up in Sydney. Glad to see some more brewers making Kölschs',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12509006_10153811639708745_4922522512256088245_n.jpg?oh=a308891eeb65ed33880693e1cb538970&oe=5884FA15',
	link:'https://www.facebook.com/photo.php?fbid=10153811639708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Eelriver Amber Ale',
	pct:4.5,
	desc:'Nothing much to say about this one',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1930332_10153811639763745_6829727140926050001_n.jpg?oh=c676e4aaf78509e402b599add5a52f30&oe=587B0E72',
	link:'https://www.facebook.com/photo.php?fbid=10153811639763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedlars Pale',
	pct:5.3,
	desc:'All round decent pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10649831_10153811640038745_8117596568326792946_n.jpg?oh=681ee3affc2d7a9f1038fe0e79399453&oe=58823884',
	link:'https://www.facebook.com/photo.php?fbid=10153811640038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 Sorelle',
	pct:5.5,
	desc:'A strange looking beer but has a lovely mild Belgian taste',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q85/p480x480/12509130_10153811640153745_7506807419110071415_n.jpg?oh=c850c3936ceba4791c1077f294b90a0e&oe=583A74E3',
	link:'https://www.facebook.com/photo.php?fbid=10153811640153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pact pale ale',
	pct:5.2,
	desc:'Another pale ale that falls short. Seems like too many Australian pales are targeting the lager audience',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1923172_10153811640033745_626679474657757195_n.jpg?oh=fa5f1ec23281614f3e15289dc5fd8bb5&oe=5880E57B',
	link:'https://www.facebook.com/photo.php?fbid=10153811640033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita Amber',
	pct:4.5,
	desc:'An ok beer but there was a slight tang that I didn’t like. I feel like this brewery has so much more to offer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1434_10153811640518745_1774691229893967268_n.jpg?oh=065e9b3b2bd8671218a60d2bf3be33fb&oe=58800DEF',
	link:'https://www.facebook.com/photo.php?fbid=10153811640518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Scorcher Summer Ale',
	pct:4.6,
	desc:'Fairly inoffensive lager. Can’t complain',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1929791_10153811640558745_2017001779885811496_n.jpg?oh=97b3a071910d762cb9568a1aafe36b31&oe=58380801',
	link:'https://www.facebook.com/photo.php?fbid=10153811640558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Royal Dutch Post Horn Lager',
	pct:4.3,
	desc:'It’s beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1936964_10153811640493745_4599335124953015175_n.jpg?oh=074e51433d0df90a422e7c0ddd1ae46d&oe=5873D999',
	link:'https://www.facebook.com/photo.php?fbid=10153811640493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Abbot Christmas Ale',
	pct:11.5,
	desc:'Slightly syrupy. Gives that nice warmth that makes sense at Christmas. Just not in Australia. Still great flavour all round',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717228_10153890412513745_5272405049843729399_n.jpg?oh=e2c9c7923560bcde6e5a0750ff84b15a&oe=5867E21A',
	link:'https://www.facebook.com/photo.php?fbid=10153890412513745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sunburnt Irish red ale',
	pct:5.0,
	desc:'There’s a fair bit of flavour but it’s just harsh. Not my cup of tea',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12734008_10153890412458745_3823076669808581993_n.jpg?oh=6f5a87435a0d5ec6b41f17f2e2b6bf28&oe=5882ABD6',
	link:'https://www.facebook.com/photo.php?fbid=10153890412458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garage Project La Calavera Catrina',
	pct:6.9,
	desc:'I may be unique in that I find that chilli and beer are a perfect combination; and this is the best one I’ve had so far',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12705503_10153890412498745_7528959077834200322_n.jpg?oh=d1529ce974353cd5253dea0d8c9eb84a&oe=5866A422',
	link:'https://www.facebook.com/photo.php?fbid=10153890412498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Session pale ale',
	pct:4.7,
	desc:'A little bit harsh for a session beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717761_10153890412778745_1469082473536049223_n.jpg?oh=40ebfefc893cc9f9a6a863215e5c303a&oe=5865433D',
	link:'https://www.facebook.com/photo.php?fbid=10153890412778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nail Golden IPA',
	pct:7.0,
	desc:'A little too much bitterness without the flavour to back it up',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733411_10153890412873745_394127344743781782_n.jpg?oh=3a13519584a295f2ae035dab37515dee&oe=58772C17',
	link:'https://www.facebook.com/photo.php?fbid=10153890412873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy Yak',
	pct:4.2,
	desc:'Pretty standard',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12494917_10153890412913745_8466195884285998669_n.jpg?oh=a0870a146b6567a6b190e6691818316f&oe=587D6C4F',
	link:'https://www.facebook.com/photo.php?fbid=10153890412913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St-ambroise Apricot wheat ale',
	pct:5.0,
	desc:'The apricot is very faint but kind of interferes with the other flavours in an unpleasant way',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12687816_10153890413098745_7756341127358562624_n.jpg?oh=8856a6818add1e3b3aa562cf5d5f177f&oe=5865C029',
	link:'https://www.facebook.com/photo.php?fbid=10153890413098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rye hard IPA',
	pct:6.3,
	desc:'Super bitter without a bold IPA flavour. Sadly the awesome name doesn\'t translate into flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717260_10153890413303745_2949419762809562441_n.jpg?oh=feeb4d56a5ad0e4a26b5a2eca8b55dea&oe=58691F79',
	link:'https://www.facebook.com/photo.php?fbid=10153890413303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Windhoek',
	pct:4.0,
	desc:'Eastern European maltyness. Ok for a cheap beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715222_10153890413318745_2007894643886260840_n.jpg?oh=038a1b91df96d2d2f2447cca70e9da71&oe=5870E3B1',
	link:'https://www.facebook.com/photo.php?fbid=10153890413318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke sprocket',
	pct:6.6,
	desc:'Really nice hop profile for a flavoursome IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q83/p480x480/12743992_10153890413553745_2836285406574144058_n.jpg?oh=35bdb3236710db62f15df95952122ad9&oe=5883FF9B',
	link:'https://www.facebook.com/photo.php?fbid=10153890413553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Crankshaft',
	pct:6.0,
	desc:'Really strong on the hops, just a little too bitter',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744268_10153890413753745_5060146557255132828_n.jpg?oh=8618e7d59b0e8bbc1618efe0b5ea549c&oe=5884F399',
	link:'https://www.facebook.com/photo.php?fbid=10153890413753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke PSI',
	pct:10.0,
	desc:'Very sour and bitter. Not for me',
	score:3,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/11229820_10153890413723745_4413328230475725119_n.jpg?oh=be3dce452971222a1cda42a9cb629ee5&oe=586D2211',
	link:'https://www.facebook.com/photo.php?fbid=10153890413723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Cluster 16',
	pct:16.2,
	desc:'Like a normal IPA distilled into a super potent form. Too much for me right now but I should retry',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12741979_10153890413793745_6934869662046573410_n.jpg?oh=8b16175f3ab36874a45b0d62e2a7f9da&oe=5871368E',
	link:'https://www.facebook.com/photo.php?fbid=10153890413793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed californicator IPA',
	pct:7.5,
	desc:'A textbook IPA. Bitter with a strong hop flavour. I just picked it because of the bears having sex on the label',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717177_10153890413993745_4407733928412012176_n.jpg?oh=b1153d9ed37d15b158aa3ecff1888c6b&oe=587A6EB9',
	link:'https://www.facebook.com/photo.php?fbid=10153890413993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing Galaxy IPA',
	pct:6.5,
	desc:'Low on bitterness, high on aroma. Can\'t decide between this and the citra',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12688166_10153890414098745_93931054277212370_n.jpg?oh=94b555c7ed4ddff6ee05585042abc62b&oe=587D34FC',
	link:'https://www.facebook.com/photo.php?fbid=10153890414098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen from the vault',
	pct:5.4,
	desc:'Such an amazing sour lambic. The nerd reference is just a bonus',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12687895_10153890414198745_3642229716769396500_n.jpg?oh=07822427fb58008b435898cbe4c6d5c3&oe=586EBA49',
	link:'https://www.facebook.com/photo.php?fbid=10153890414198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen sequoia',
	pct:6.2,
	desc:'Listed as an amber but kind of like an IPA but a little smoother',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733610_10153890414378745_2084592148299538325_n.jpg?oh=2e59d599263aa65cd2fa9167d4dfc606&oe=586877F6',
	link:'https://www.facebook.com/photo.php?fbid=10153890414378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen velvet cream',
	pct:6.6,
	desc:'Like a Guinness with a little more coffee flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12705540_10153890414573745_7427353905568782339_n.jpg?oh=baeae1605c5a6e378a8aca34b4cf41a1&oe=58728D06',
	link:'https://www.facebook.com/photo.php?fbid=10153890414573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen Duncan',
	pct:3.4,
	desc:'Perhaps one of the mildest beers I\'ve ever had but has a great balance between sour and salty. Deducting points because it\'s a mid strength',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733543_10153890414603745_2708879129886926163_n.jpg?oh=da13ecba98bb0a33e79455ad321c913b&oe=586F61CD',
	link:'https://www.facebook.com/photo.php?fbid=10153890414603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi dry black',
	pct:5.5,
	desc:'A rather sweet taste compared to the regular asahi',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942864_10153890414673745_1846063327846189238_n.jpg?oh=6cbbb0354dcae859b1258aa6d2b96c79&oe=58665280',
	link:'https://www.facebook.com/photo.php?fbid=10153890414673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wet hopped oatmeal ale',
	pct:4.3,
	desc:'A lot more plain than I expected. There\'s a really slight oat aftertaste but I was hoping for it to dominate the beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12742769_10153890414963745_1738049076033297377_n.jpg?oh=139273194d13a3376e122f6d4ed328f3&oe=587362DC',
	link:'https://www.facebook.com/photo.php?fbid=10153890414963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Single-take session ale',
	pct:4.5,
	desc:'Perhaps not the best beer at 10am. The Belgian flavour seemed a bit too wheaty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715222_10153890415008745_8479217372208836383_n.jpg?oh=8f86f788f39ef09744d9989e811b5cf8&oe=5870C377',
	link:'https://www.facebook.com/photo.php?fbid=10153890415008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tecate',
	pct:4.5,
	desc:'Pretty plain lager, easy drinking. +1 because of the giant can',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728804_10153890415018745_4089268131902727213_n.jpg?oh=892a2b8cf4c0f042a43de6712d26d6aa&oe=58774DF4',
	link:'https://www.facebook.com/photo.php?fbid=10153890415018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie boys gunnamatta',
	pct:6.5,
	desc:'Amazingly floral but with so little bitterness. Has a slight spicyness as well which balances perfectly',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12646945_10153890415153745_1313474125480375485_n.jpg?oh=79f0ed62d49f46522bc430ae884d2d41&oe=58817C31',
	link:'https://www.facebook.com/photo.php?fbid=10153890415153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum capital pale ale',
	pct:4.7,
	desc:'A little tangy for a pale but still nice. Though on further tasting I\'ve found some bottles to be a little bit too tangy and tastes more like an imperfection than a feature',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717222_10153890415308745_1813544797541172385_n.jpg?oh=e445420677a05f38209bbb70cecbbd52&oe=58846600',
	link:'https://www.facebook.com/photo.php?fbid=10153890415308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures dog days',
	pct:4.4,
	desc:'Surprisingly flavourful for a summer beer. Nice little tang to it',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717186_10153890415423745_6451428281725925044_n.jpg?oh=26a6fc9a66b6c07e95d15cdc4deb9581&oe=58674132',
	link:'https://www.facebook.com/photo.php?fbid=10153890415423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tradewind lager',
	pct:4.4,
	desc:'Easy drinking lager. Good for an all day drink',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717308_10153890415688745_8114544610484440853_n.jpg?oh=cb9fe92ad417d68dce010f281689a6a0&oe=583B4393',
	link:'https://www.facebook.com/photo.php?fbid=10153890415688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed Kol schisel',
	pct:4.2,
	desc:'Fairly plain and easy drinking',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715804_10153890415748745_782298131807112307_n.jpg?oh=05317ef081df9ff76ef324d8b146e1fe&oe=5871C915',
	link:'https://www.facebook.com/photo.php?fbid=10153890415748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum stinger',
	pct:4.8,
	desc:'kind of tart but sits in a strange place like it can\'t decide what to be',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717321_10153890415758745_9148183600742438871_n.jpg?oh=b6dd27501ac1912a7534f02b1055bd49&oe=58716952',
	link:'https://www.facebook.com/photo.php?fbid=10153890415758745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bristol beer factory independence',
	pct:4.6,
	desc:'The description sounded good but didn\'t quite hit that mark',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12741906_10153890416078745_2509646553682533650_n.jpg?oh=43646a267b83cceb576cd616a169dcf2&oe=587EECFF',
	link:'https://www.facebook.com/photo.php?fbid=10153890416078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDog cosmic highway',
	pct:4.8,
	desc:'Well named, you can\'t quite pick what you\'re drinking. Not bad but fails to master any category',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744551_10153890416133745_1898256782764708907_n.jpg?oh=06ce141377068cb2bf2e36c5f31b9c03&oe=5883FE9E',
	link:'https://www.facebook.com/photo.php?fbid=10153890416133745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm hop select',
	pct:6.0,
	desc:'I expected more, there\'s a slight metallic taste which shouldn\'t be in a nice beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12742633_10153890416108745_3638813966682726331_n.jpg?oh=04fd2fd64d4332a075dc8e942e8f722d&oe=587FAFED',
	link:'https://www.facebook.com/photo.php?fbid=10153890416108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside othello\'s curse',
	pct:9.0,
	desc:'Too harsh on the tongue. The one time I\'ve wanted a smaller bottle',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12733449_10153890416838745_3402335338987277776_n.jpg?oh=68cd830fa7aae587f792170cb01e5b17&oe=5882D1C1',
	link:'https://www.facebook.com/photo.php?fbid=10153890416838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita jockamo',
	pct:6.5,
	desc:'Too harsh, this brewery is still yet to win me over',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12718283_10153890416898745_6096850790027178927_n.jpg?oh=6b45923cb6d1a6e300b91eeaf361f4e5&oe=5880CA46',
	link:'https://www.facebook.com/photo.php?fbid=10153890416898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brontide smooth black ale',
	pct:5.0,
	desc:'Started off a bit harsh but was a lot better than other black ales. Makes me want to try more dark beers',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12734008_10153890416878745_633217613773642603_n.jpg?oh=b4080dad38f8aed3b51ffe8817d38593&oe=5837CE09',
	link:'https://www.facebook.com/photo.php?fbid=10153890416878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rodenbach',
	pct:5.2,
	desc:'Surprisingly tangy with very little bitterness. Worth a try',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715222_10153890417253745_2655298397910190348_n.jpg?oh=ede5e1f66b0f987b0f8e4605bd69b1d4&oe=583BE5FA',
	link:'https://www.facebook.com/photo.php?fbid=10153890417253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner pils',
	pct:5.1,
	desc:'Refreshing but not my favourite flavour',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12717710_10153890417503745_4345190063055237739_n.jpg?oh=7877fba469962b2228c8555a95ed8963&oe=586B3309',
	link:'https://www.facebook.com/photo.php?fbid=10153890417503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shepherd Neame IPA',
	pct:6.1,
	desc:'I’m always disappointed by English IPAs since the flavour I want from an IPA is more akin to the American interpretation with much more floral hops',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12729064_10153890417368745_6907793566119928582_n.jpg?oh=5a8e2b3c1e6476b9f115e321710ab522&oe=586ACAE5',
	link:'https://www.facebook.com/photo.php?fbid=10153890417368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red horse beer',
	pct:7.0,
	desc:'Nicer than expected. Has a slightly spicy finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744494_10153890418648745_513314091064162487_n.jpg?oh=419ecd035327dfe4aafac28dd5002e7f&oe=586A0FEB',
	link:'https://www.facebook.com/photo.php?fbid=10153890418648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road little bling',
	pct:3.4,
	desc:'Not tasty enough to justify the low alcohol',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12744494_10153890418973745_1506888197203194129_n.jpg?oh=d84b8ff032f3d44d377593314f43a8f2&oe=58812852',
	link:'https://www.facebook.com/photo.php?fbid=10153890418973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Molson Canadian',
	pct:5.0,
	desc:'Crisp and refreshing but nothing special',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728991_10153890418838745_7409486003049273062_n.jpg?oh=7feeb8d94d20c9b85422f0077a0fcbf3&oe=586DE878',
	link:'https://www.facebook.com/photo.php?fbid=10153890418838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeasty boys hud-a-wa strong',
	pct:6.8,
	desc:'An interestingly strong flavour but it maintains a smooth finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12729183_10153890419403745_8807635240820254136_n.jpg?oh=1e32ae7c94d4d92fb3890994535db9b7&oe=587FDA83',
	link:'https://www.facebook.com/photo.php?fbid=10153890419403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont kölsch',
	pct:4.6,
	desc:'I love a good kolsch. So easy drinking but without being flavourless',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/12745536_10153890419543745_6014336509869834605_n.jpg?oh=08fe92d32720ba4fd97ab76eaef1c996&oe=5876D035',
	link:'https://www.facebook.com/photo.php?fbid=10153890419543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont copper ale',
	pct:4.0,
	desc:'The final sip of this beer made me sad that it was gone',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12715379_10153890419508745_5707512389210281014_n.jpg?oh=2817386f12cf7c48243447d224f94713&oe=587F3FC2',
	link:'https://www.facebook.com/photo.php?fbid=10153890419508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch big Paul\'s mango IPA',
	pct:6.1,
	desc:'The mango flavour doesn\'t overpower what is already a fantastic IPA',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728900_10153890419808745_8114701954738943189_n.jpg?oh=32f29af161dab74debce4141de13f05e&oe=5879A59B',
	link:'https://www.facebook.com/photo.php?fbid=10153890419808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman Albo corn ale',
	pct:5.5,
	desc:'Pretty much a lager. Much less exciting than I thought',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12728843_10153890420703745_1906734589373356822_n.jpg?oh=051799df6565df4d10b991848ef35a50&oe=5867B7FB',
	link:'https://www.facebook.com/photo.php?fbid=10153890420703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman old salty gose',
	pct:4.9,
	desc:'Perhaps the saltiest beer I\'ve ever tasted. But once the initial salt is gone there\'s a really pleasant flavour without the normal beer bitterness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12745969_10153890420683745_2326162512188830203_n.jpg?oh=6ce25c202e94519eee9232a3c461752e&oe=5880B839',
	link:'https://www.facebook.com/photo.php?fbid=10153890420683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven Twisted Thistle IPA',
	pct:5.6,
	desc:'Started off with a bit of a tang but seemed to lose it towards the end',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/943951_10153890422103745_2064605675608289445_n.jpg?oh=763033b6221ecdf92baa12e1d9503a40&oe=58810C10',
	link:'https://www.facebook.com/photo.php?fbid=10153890422103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington brown',
	pct:5.0,
	desc:'Nicely rounded. Another winner from Mornington',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12688382_10153890449953745_3980101759747984162_n.jpg?oh=f46ff2900af78b146660310ed34d6463&oe=58759345',
	link:'https://www.facebook.com/photo.php?fbid=10153890449953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat pale ale',
	pct:5.2,
	desc:'Really refreshing with the right amount of hop flavour for a pale ale',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12814792_10153966648923745_359987341393808655_n.jpg?oh=7458c1251e090c2b43256a5719c38e56&oe=5885F2B5',
	link:'https://www.facebook.com/photo.php?fbid=10153966648923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Swindler',
	pct:4.2,
	desc:'Disappointingly plain',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/936555_10153966649228745_7093539391186290992_n.jpg?oh=dc5852de866a3c77eb942d31b06487cb&oe=5880E9C2',
	link:'https://www.facebook.com/photo.php?fbid=10153966649228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat hightail ale',
	pct:4.5,
	desc:'Still yet to have a bad beer from mountain goat though they are a bit too similar',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/970226_10153966649058745_8469352202645792973_n.jpg?oh=ebafb82b8fea49f7a8ccc129ce475a1a&oe=5886381B',
	link:'https://www.facebook.com/photo.php?fbid=10153966649058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Tower 10 IPA',
	pct:7.0,
	desc:'An IPA with a sweet finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12036567_10153966649818745_3762140237584842223_n.jpg?oh=ab01e9718a32eb0fea76836ad28ffc83&oe=5876A98B',
	link:'https://www.facebook.com/photo.php?fbid=10153966649818745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven scottish ale',
	pct:5.2,
	desc:'Scottish ale isn’t one of my favourite styles so I can’t give it a top rating',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10342506_10153966649853745_2082231274376560811_n.jpg?oh=292e03b5171eae8d8135d2abeeaa3963&oe=58710436',
	link:'https://www.facebook.com/photo.php?fbid=10153966649853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fóti',
	pct:4.6,
	desc:'Has a really mild ginger taste. The smell is a little strange but the flavour really grows on you',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1918614_10153966650093745_125776627995891948_n.jpg?oh=2fe064eb9fcf905154f72fc198fd89da&oe=5867D972',
	link:'https://www.facebook.com/photo.php?fbid=10153966650093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante trigo',
	pct:5.0,
	desc:'Surprisingly this cheap beer is one of the better wheat beers that I’ve had. The tang is really well balanced. That said it is a bit light on flavour',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/535112_10153966650528745_107085668519640662_n.jpg?oh=9fd02be4b544e7a72d1c108ac039b069&oe=583A3EE7',
	link:'https://www.facebook.com/photo.php?fbid=10153966650528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Westvleteren Blond',
	pct:5.8,
	desc:'A lot lighter on flavour than I expected but then the bottle I have is older than it should be. That said it is perfectly balanced down to the last drop and there’s a hint of some deliciousness there. Not worth the price you pay in this country but I would love to get a fresh case of this',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1625546_10153966650393745_441647493230179601_n.jpg?oh=e143d4350664f64a6d36f60fe8383a2a&oe=583ABDA9',
	link:'https://www.facebook.com/photo.php?fbid=10153966650393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor IPA',
	pct:6.5,
	desc:'I can’t enjoy this while eating. The bitterness difference is just too large for my taste buds to cope. Outside of that the bitterness is still a little too strong for the hop aroma',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/75534_10153966650468745_295000144566915941_n.jpg?oh=8bffc2454778674666bd7b8f2a8d42b5&oe=587AE924',
	link:'https://www.facebook.com/photo.php?fbid=10153966650468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew dog Jack Hammer',
	pct:7.2,
	desc:'So much floral and citrus aroma. More bitterness than I would like but once you get used to it the flavour is amazing',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1507888_10153966650763745_3858788343816093746_n.jpg?oh=d054e8da620722e68865be0daec1f46f&oe=586F3D55',
	link:'https://www.facebook.com/photo.php?fbid=10153966650763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie Boys Dark Matta',
	pct:7.5,
	desc:'Pretty good for a dark beer. Fairly smooth and rich but perhaps a little too bitter',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10347498_10153966651168745_482800618815663484_n.jpg?oh=bb9de5cb5dfc4a2c745871b0bd06f51b&oe=586AA3EC',
	link:'https://www.facebook.com/photo.php?fbid=10153966651168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masters Finest',
	pct:4.5,
	desc:'No flavour except some bitterness',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10368217_10153966651078745_5301100254520843348_n.jpg?oh=66227048fc32596375503f2691debf2e&oe=58786AB9',
	link:'https://www.facebook.com/photo.php?fbid=10153966651078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Throwback IPA',
	pct:3.5,
	desc:'Great smell but a bit lacking on flavour. A nice session IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10169445_10153966651248745_4831098313362630542_n.jpg?oh=a77956e1ba8bc20e4f7c487ee26eb497&oe=58380011',
	link:'https://www.facebook.com/photo.php?fbid=10153966651248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės kvietinis',
	pct:5.2,
	desc:'Pretty standard wheat beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10356398_10153966651813745_6716954315521047307_n.jpg?oh=371fc4e6da44637cd3e31a2235016aff&oe=5883150F',
	link:'https://www.facebook.com/photo.php?fbid=10153966651813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Houblon Chouffe Double IPA Triple',
	pct:9.0,
	desc:'Doesn’t really taste much like an IPA, nor is it the best Belgian blonde',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12494908_10153966651838745_649551942505437131_n.jpg?oh=ed1cd2c04f41201323316ef0d34cbf35&oe=5876344D',
	link:'https://www.facebook.com/photo.php?fbid=10153966651838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lupulus Pale ale',
	pct:4.7,
	desc:'Fantastically flavoured pale ale. Still mild though',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/600415_10153966651858745_4717804169564084978_n.jpg?oh=49d62553b572420a82cf7ccd2a99ba84&oe=587F7F98',
	link:'https://www.facebook.com/photo.php?fbid=10153966651858745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head indian brown ale',
	pct:7.2,
	desc:'One of the nicer browns I’ve had',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1545766_10153966653998745_8815895665252384924_n.jpg?oh=318640dd9f440346c097bb4ffaa26435&oe=5867A41C',
	link:'https://www.facebook.com/photo.php?fbid=10153966653998745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Imperial IPA',
	pct:8.8,
	desc:'Hugely fragrant and really tasty',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/62366_10153966653993745_718097065966967009_n.jpg?oh=5db8339e3f656fb91fe1e5d6b7581c61&oe=586DAF8D',
	link:'https://www.facebook.com/photo.php?fbid=10153966653993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head 90 minute IIPA',
	pct:9.0,
	desc:'Really nice flavour. Solid beer all the way',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1010314_10153966653958745_5103605884788995211_n.jpg?oh=b702a2b99f7024de3c2d7c7a17192099&oe=58727917',
	link:'https://www.facebook.com/photo.php?fbid=10153966653958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Forester bitter amber ale',
	pct:5.2,
	desc:'A little sour but not in a bad way',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1936970_10153966655368745_7839777973772364383_n.jpg?oh=da52b9fbea93a089b0988db23a85979c&oe=587D972B',
	link:'https://www.facebook.com/photo.php?fbid=10153966655368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Emelisse rye smoked IPA',
	pct:6.2,
	desc:'To me the smokiness gives it some harshness that I don’t like',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10004059_10153966655363745_2943533530938025216_n.jpg?oh=eb2f09f6330a92c1b15f31117ecc8218&oe=583C4B65',
	link:'https://www.facebook.com/photo.php?fbid=10153966655363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Pale Ale',
	pct:5.4,
	desc:'Had more flavour than anticipated, it’s actually a lot like the IIPA but with less bitterness',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10401879_10153966655348745_3642236879798361206_n.jpg?oh=f7a6ced6f3cd5e740e707efa22c8235e&oe=586E279E',
	link:'https://www.facebook.com/photo.php?fbid=10153966655348745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Federation Pale ale',
	pct:5.1,
	desc:'Don’t have the best memory of drinking this but it was ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1782025_10153966655578745_4664850473670279145_n.jpg?oh=e4ea606ae73f3f38b83f3029527778d8&oe=587FADEC',
	link:'https://www.facebook.com/photo.php?fbid=10153966655578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rockpool Pilsner',
	pct:5.0,
	desc:'Crisp but ultimately flavourless. Perhaps I\'ve been having too many IPAs recently',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1936522_10153966655918745_1071656518415804472_n.jpg?oh=796d005000c6b8d6e676b598e1c8ae73&oe=5874C210',
	link:'https://www.facebook.com/photo.php?fbid=10153966655918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn IPA',
	pct:5.8,
	desc:'Delicious. A little bitter but lots of hoppy flavour',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/580369_10153966656363745_4315787602585071997_n.jpg?oh=91b59752aa2578d586c2129c9367933f&oe=583BC27D',
	link:'https://www.facebook.com/photo.php?fbid=10153966656363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prancing pony Amber Ale',
	pct:5.0,
	desc:'Overly bitter and without much malt flavour. Still yet to find a great amber',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12821411_10153966656918745_380719159889184662_n.jpg?oh=e7fd4581b811de8806e64c074c862009&oe=5885E6FE',
	link:'https://www.facebook.com/photo.php?fbid=10153966656918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington Imperial Amber',
	pct:7.5,
	desc:'So thick coming out of bottle. The initial taste is bitter but behind that is a strong and sweet flavour that while not what I normally go for is still really nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10478660_10153966656973745_8240271036615712554_n.jpg?oh=3e1aa12d897e5cba70518214809a2674&oe=583CAAE0',
	link:'https://www.facebook.com/photo.php?fbid=10153966656973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snow',
	pct:4.5,
	desc:'Almost no bitterness. It\'s got quite a lot of malt flavour as if it wasn\'t left long enough to ferment. Perfect with a spicy dish',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/600298_10153966657628745_4870073187001041055_n.jpg?oh=cef4ba5ad76bab1b0d224ba273a80b85&oe=587D04D8',
	link:'https://www.facebook.com/photo.php?fbid=10153966657628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha freshwater pale ale',
	pct:5.2,
	desc:'Mild on hops but also low on bitterness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/1934561_10153966658683745_1961182541822640883_n.jpg?oh=d4ccc34d1eefd32dd6061525b72231f0&oe=587B84D2',
	link:'https://www.facebook.com/photo.php?fbid=10153966658683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Extra Bitter Type',
	pct:5.4,
	desc:'It’s bitter and a little malty',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10403247_10153966658678745_4947349393995850106_n.jpg?oh=dabde297b935110c402c62046e719534&oe=583C6122',
	link:'https://www.facebook.com/photo.php?fbid=10153966658678745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weidmann',
	pct:4.2,
	desc:'A little bit more malty than most German lagers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10639498_10153966658918745_2502060406104500926_n.jpg?oh=2e6315346e22875fc90f82e0445c7f20&oe=5868D713',
	link:'https://www.facebook.com/photo.php?fbid=10153966658918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Blonde Type',
	pct:5.4,
	desc:'Supposed to be hoppy but it’s just bitter. Feels like it’s missing something',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12832355_10153966659053745_5547402226284326278_n.jpg?oh=fb0e907b846e04df45d19873437296c8&oe=586E4DD5',
	link:'https://www.facebook.com/photo.php?fbid=10153966659053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Rye IPA',
	pct:6.0,
	desc:'Smells really good but the taste is a little harsh',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/9185_10153966659098745_8275916423969475463_n.jpg?oh=e3ce1fa4cfd464576c05bfd7c3807857&oe=5869DD79',
	link:'https://www.facebook.com/photo.php?fbid=10153966659098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cucapa brown ale',
	pct:4.8,
	desc:'It’s not awful but I can’t really get into it',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12821335_10153966659288745_8654410515493028710_n.jpg?oh=0edf0bb2d0dccff3eaf2513a39042cf2&oe=5873D8F3',
	link:'https://www.facebook.com/photo.php?fbid=10153966659288745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Celebration',
	pct:6.8,
	desc:'Not as fresh as I was hoping but still nice',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942538_10153966659453745_8399119403482883132_n.jpg?oh=d05970005662091f351e820497e77729&oe=58854768',
	link:'https://www.facebook.com/photo.php?fbid=10153966659453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jelen pivo',
	pct:4.6,
	desc:'Has a strange smell and a kind of malty taste',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10398353_10153966659598745_7866549484220940291_n.jpg?oh=cd2cb3e3610762e1e9372ee725a2aa3b&oe=587F3A9E',
	link:'https://www.facebook.com/photo.php?fbid=10153966659598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six strings pale ale',
	pct:4.8,
	desc:'The bitterness is a tad too harsh but it’s nicely hopped',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/10570347_10153966659658745_1644353854355421040_n.jpg?oh=f478db6bce89199f271924d53e50c2d0&oe=587F01F8',
	link:'https://www.facebook.com/photo.php?fbid=10153966659658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lav',
	pct:5.0,
	desc:'Standard malty european cheap lager',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/934134_10153966659898745_3561780875401552010_n.jpg?oh=b80e040f71c89af188839727d98e5abc&oe=5870483F',
	link:'https://www.facebook.com/photo.php?fbid=10153966659898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #1 Pale Ale',
	pct:null,
	desc:'A bit too much yeastyness which overrides the other flavours, this has reduced considerably as the beer has aged. Otherwise rather mild on flavour without much hop punch',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13015479_10154072539743745_2413857034853958131_n.jpg?oh=d0dd358546f3ae33caaf0dec9e88f809&oe=587A4F93',
	link:'https://www.facebook.com/photo.php?fbid=10154072539743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #2 Pale Ale',
	pct:3.6,
	desc:'Has a bit of a yeasty smell but it’s covered up a bit by a mild hop aroma. Low on bitterness with a bit of sweetness and not too malty. All round quite drinkable',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/942882_10154072540043745_2361335499708872878_n.jpg?oh=b7a86ba5d803407fd5cb807e02827d29&oe=586E92C4',
	link:'https://www.facebook.com/photo.php?fbid=10154072540043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duel Hoppy Lager',
	pct:4.7,
	desc:'Nicer than I expected, quite a bit of hop aroma coming off this and a well rounded taste',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13015652_10154072540083745_7009465615847756409_n.jpg?oh=cf411bbfe883555433ce6174c8c75b6f&oe=583BF3E1',
	link:'https://www.facebook.com/photo.php?fbid=10154072540083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'8bit',
	pct:6.5,
	desc:'Really nice IPA, little strong but a good hop profile',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13062107_10154072540318745_5259423050211336454_n.jpg?oh=8062f98469b0b7d4c4412c673cc2a819&oe=58725F97',
	link:'https://www.facebook.com/photo.php?fbid=10154072540318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chop shop pale ale',
	pct:4.7,
	desc:'Lacks on every side. No hops and way too bitter',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13010770_10154072540533745_222338390337149891_n.jpg?oh=30ab0b38d75d975bf1121fd902e5ab20&oe=586E456F',
	link:'https://www.facebook.com/photo.php?fbid=10154072540533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington why so cereal',
	pct:4.9,
	desc:'Really nice. Not too strong on flavour but well balanced. Give it a go if you\'re new to pale ales',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13062012_10154072540558745_5299069403089933354_n.jpg?oh=ea8ecb4a910777f880c7aabae50a7e4c&oe=587F7DAE',
	link:'https://www.facebook.com/photo.php?fbid=10154072540558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yulli\'s seabass',
	pct:4.2,
	desc:'Can\'t pick what the flavour is but I like it. Not as plain as I was expecting',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13000118_10154072540778745_8031562595698025950_n.jpg?oh=2f8ff1b1980c209a26c11e973dc1c3fd&oe=587CE69B',
	link:'https://www.facebook.com/photo.php?fbid=10154072540778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant',
	pct:5.4,
	desc:'Very little hop flavour, mostly just bitterness. Somewhere underneath there’s a nice flavour trying to break through',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13076528_10154072540798745_8824066737110537781_n.jpg?oh=0b65ef79aa7cb4de009e3dd9bc2196e0&oe=5876BD29',
	link:'https://www.facebook.com/photo.php?fbid=10154072540798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes mirror pond pale ale',
	pct:5.0,
	desc:'Could be a little hoppier but it\'s still smooth and sweet with a nice hint of caramel',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13007147_10154072540863745_3547228142622250194_n.jpg?oh=cf91b2a6a1a6378d1cc215619d95c170&oe=583D81A8',
	link:'https://www.facebook.com/photo.php?fbid=10154072540863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mont Blanc Génépi',
	pct:5.9,
	desc:'Kind of tastes how it looks. Like a like cordial mixed with beer. The little bit of spice ties it together and makes for a nice sweet beer',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13001187_10154072541123745_7747103315223526141_n.jpg?oh=c37bb9665c35c232bf4efb55b04165b9&oe=58721028',
	link:'https://www.facebook.com/photo.php?fbid=10154072541123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Evil twin Falco',
	pct:7.0,
	desc:'A little more bitter than I was hoping but has a nice hop finish',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13043371_10154072541163745_2624244242033439826_n.jpg?oh=0044c282239eab8f0ca170b40b5d4698&oe=58787F8F',
	link:'https://www.facebook.com/photo.php?fbid=10154072541163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes fresh squeezed IPA',
	pct:6.4,
	desc:'Really citrusy, a little too bitter but still a great drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q85/p480x480/13015236_10154072541183745_1805235121131069529_n.jpg?oh=4ae42ae9eb6030ed52659a144ea0d8f7&oe=587B3674',
	link:'https://www.facebook.com/photo.php?fbid=10154072541183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liger',
	pct:6.9,
	desc:'Fizzy and dark and sweet',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13012764_10154072541233745_130102072018590790_n.jpg?oh=160167ae26e15e581cb90da60bdb7351&oe=587262E2',
	link:'https://www.facebook.com/photo.php?fbid=10154072541233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tuatara Ardennes',
	pct:6.5,
	desc:'The Belgian flavour makes it taste stronger than it is. It’s fairly good but there are so many better Belgian beers out there that it’s not doing enough to bring me back',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239986_10154147273578745_3214682018646558241_n.jpg?oh=5a4489288552cacef23a63b89a12b993&oe=587321A7',
	link:'https://www.facebook.com/photo.php?fbid=10154147273578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Panhead APA',
	pct:5.7,
	desc:'Interesting smell but the taste is covered up too much by the bitterness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239385_10154147273588745_8270989544774283167_n.jpg?oh=521ba06a228a85fd752b7a31430cd247&oe=58820E57',
	link:'https://www.facebook.com/photo.php?fbid=10154147273588745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #3',
	pct:4.6,
	desc:'Pretty good all round. Has a nice sweetness which balances well against the slight citrus hop profile',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13221450_10154147273613745_1009157283682000956_n.jpg?oh=4b6871afb54d0547a63bfcc834f4202f&oe=586BFFDB',
	link:'https://www.facebook.com/photo.php?fbid=10154147273613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beirut beer',
	pct:4.6,
	desc:'Tastes like a cheap Eastern European beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13230125_10154147273808745_8826087779815602957_n.jpg?oh=7a9462be1df92dcedea5138d6394cc0c&oe=5879E087',
	link:'https://www.facebook.com/photo.php?fbid=10154147273808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Hopco NZ pale ale',
	pct:4.8,
	desc:'Doesn’t have the same floral taste that their other beers have. It’s still hoppy but more of the bitterness is coming through',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13238891_10154147274018745_2218348989364359233_n.jpg?oh=8e483135c1c3c270f2a139a7f594356d&oe=587983C2',
	link:'https://www.facebook.com/photo.php?fbid=10154147274018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone coffee milk stout',
	pct:5.0,
	desc:'Creamy, rich and oh so dark. The coffee flavour is mild enough for me to enjoy',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13241124_10154147274053745_6203121244694342567_n.jpg?oh=aac60e79d18e2eeeebd9f0c25735b366&oe=587BA94E',
	link:'https://www.facebook.com/photo.php?fbid=10154147274053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden road ride on IPA',
	pct:6.4,
	desc:'Huge floral hop aroma. Perhaps just a tad too bitter but very enjoyable',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13237689_10154147274093745_5794071140903192166_n.jpg?oh=4197cc62c18bba57a71df4cf339ab190&oe=586BEFB7',
	link:'https://www.facebook.com/photo.php?fbid=10154147274093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life IPA',
	pct:6.0,
	desc:'Another great beer from Pirate Life. Nicely hoppy',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239358_10154147274213745_2832924558842747402_n.jpg?oh=1adee3053e9a2f6f48f558e0ad86e079&oe=587AA95C',
	link:'https://www.facebook.com/photo.php?fbid=10154147274213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delirium Argentum',
	pct:7.0,
	desc:'Had a slightly metallic taste to start but otherwise it’s a really clean and crisp beer. Much milder in taste than other Belgian beers. I’m beginning to get the feeling that Belgian IPAs don’t have the hop profile that I expect',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256284_10154147274343745_1195107616388760793_n.jpg?oh=d4be3a7a2bf3a973ff42321eb42982ee&oe=586DEC8C',
	link:'https://www.facebook.com/photo.php?fbid=10154147274343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wayward brewing rose kölsch',
	pct:5.1,
	desc:'Great kölsch. Crisp and clean but keeps you coming back',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13240606_10154147274448745_3348024943795201690_n.jpg?oh=7da0e6806c8431badb5872f7c91c194e&oe=5875ECAF',
	link:'https://www.facebook.com/photo.php?fbid=10154147274448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses harvest ale',
	pct:5.8,
	desc:'Pretty plain ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13265938_10154147274608745_6314635329318943118_n.jpg?oh=55768be23f5a29bc77a75f00bfb2adfb&oe=5876889D',
	link:'https://www.facebook.com/photo.php?fbid=10154147274608745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Norton lager',
	pct:4.3,
	desc:'A very sweet lager with much more flavour than your average lager',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13232982_10154147274688745_9124860390189621549_n.jpg?oh=b718b194d5c312b328105c5831fae187&oe=58857637',
	link:'https://www.facebook.com/photo.php?fbid=10154147274688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew stout #4',
	pct:5.4,
	desc:'Has a yeasty and hoppy smell like my other beers but with a mild stout smell. The stout taste is milder than when I bottled it. To me it’s a great because it doesn’t have the kick like other stouts but this may disappoint those who look for that in a stout',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13244856_10154147274693745_6588882774543071375_n.jpg?oh=d1beda1f8f37b0a03f0b4b63696748fc&oe=586B2A07',
	link:'https://www.facebook.com/photo.php?fbid=10154147274693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch smoking Russian party guy',
	pct:3.2,
	desc:'Quite mild on the stout flavour, sweet and tasty',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256284_10154147274788745_4004743103375627628_n.jpg?oh=5af19fe8cdef6eafb04a1fc390c0721b&oe=5869372C',
	link:'https://www.facebook.com/photo.php?fbid=10154147274788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch American pale ale',
	pct:5.2,
	desc:'Pretty good pale ale. Nothing super exciting',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13254124_10154147274953745_3000260124675662961_n.jpg?oh=861ef36abdc4dd561e3054beef902aae&oe=588238C7',
	link:'https://www.facebook.com/photo.php?fbid=10154147274953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch in a pickle',
	pct:4.2,
	desc:'My first cucumber beer. Tastes a lot like pickles. It\'s interesting but it wouldn\'t bring me back',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/q81/p480x480/13233015_10154147274988745_881393278262650589_n.jpg?oh=0edb6a34d21847b3ff5eaeaa73a2ea9e&oe=5877616B',
	link:'https://www.facebook.com/photo.php?fbid=10154147274988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch seeing red IRA',
	pct:7.1,
	desc:'Pretty much a red IPA. Nice flavour but doesn\'t have as much floral aroma as I like',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/12871500_10154147275008745_8435099638862141389_n.jpg?oh=f0da7f12403d954b17b4c78f0fd5d64f&oe=5867C946',
	link:'https://www.facebook.com/photo.php?fbid=10154147275008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter Marnie\'s majority ale',
	pct:6.4,
	desc:'Nicely floral, not too bitter. All round good IPA',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13241213_10154147275538745_4637541751661074474_n.jpg?oh=99fd783b63e072f2fb0db242dbbd1f55&oe=58826E4E',
	link:'https://www.facebook.com/photo.php?fbid=10154147275538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter big sur',
	pct:6.7,
	desc:'Strong on flavour, big on hops',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13230238_10154147276023745_1973175567688158306_n.jpg?oh=be22ae29e4143768b11ac14d1d63959e&oe=586EB74E',
	link:'https://www.facebook.com/photo.php?fbid=10154147276023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans flight path',
	pct:6.0,
	desc:'Smells like and IPA, tastes like a stout. But still pretty good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13239234_10154147275958745_6647175011009867398_n.jpg?oh=c22cb0064389c7534012d072d2dd2357&oe=5837D29C',
	link:'https://www.facebook.com/photo.php?fbid=10154147275958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XX bitter',
	pct:6.0,
	desc:'Not as hoppy as the label indicates,  almost European in the maltyness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13245387_10154147276163745_6894115153068596063_n.jpg?oh=8019f230d88db533404a3ca523373d82&oe=58787A23',
	link:'https://www.facebook.com/photo.php?fbid=10154147276163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside brewing 88 robust porter',
	pct:6.0,
	desc:'One of the less sweet porters I’ve had but still not bitter. Not my favourite',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13230311_10154147276338745_1922289556115965636_n.jpg?oh=d5796e9aa063036c2591923fbaa12298&oe=58831061',
	link:'https://www.facebook.com/photo.php?fbid=10154147276338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Pale ale #1',
	pct:4.6,
	desc:'Tastes like a Belgian ale. It’s alright',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13267730_10154147276308745_5674622146165558080_n.jpg?oh=b2be2f700d12fcdf940dca5b94c7f2fa&oe=586B872A',
	link:'https://www.facebook.com/photo.php?fbid=10154147276308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Belgian IPA #2',
	pct:5.5,
	desc:'Like other Belgian IPAs it’s not very hoppy',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13238891_10154147276503745_6482757969464081061_n.jpg?oh=8e042f2616767e47c14634fe4560d915&oe=587849C2',
	link:'https://www.facebook.com/photo.php?fbid=10154147276503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Pils #3',
	pct:4.4,
	desc:'Pretty good pilsner',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13254038_10154147276793745_7322916825370233688_n.jpg?oh=11bee0d452f8e8f887daa383dfdbf4f8&oe=5880705C',
	link:'https://www.facebook.com/photo.php?fbid=10154147276793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beachwood road dark harvest',
	pct:6.6,
	desc:'Smells hoppy but tastes stouty',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13265923_10154147277158745_2404573365022025413_n.jpg?oh=19458e232e1cf478b20840cdaa9a69cf&oe=583A2C7B',
	link:'https://www.facebook.com/photo.php?fbid=10154147277158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha fire within',
	pct:5.8,
	desc:'Pretty spot on for what I expect from an amber ale but doesn\'t have a flavour I love',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13254029_10154147277223745_2166868226944171155_n.jpg?oh=06e1e99c7a3419679be64f0e316f3b4d&oe=5881CF48',
	link:'https://www.facebook.com/photo.php?fbid=10154147277223745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Derwent aromatic spelt ale',
	pct:5.9,
	desc:'Only slightly sour and it all comes together well. It\'s not a style that I\'m used to but I do enjoy it',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13221636_10154147277423745_6025488422010352804_n.jpg?oh=1898d6038ceb5c310bcda0234c6cec7a&oe=58398888',
	link:'https://www.facebook.com/photo.php?fbid=10154147277423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter Serpents kiss',
	pct:4.4,
	desc:'The slight watermelon taste makes it hard to enjoy the beer. You get used to it but there\'s not a lot of reason to',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256027_10154147277688745_7034538653078229756_n.jpg?oh=e8a711ecbfb3b797c473eba3c3d62a1a&oe=58662878',
	link:'https://www.facebook.com/photo.php?fbid=10154147277688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark knight porter style',
	pct:4.5,
	desc:'Mild and sweet. Nice easy drinking porter',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13263768_10154147277768745_7051226245324032886_n.jpg?oh=ece2559516a49abd39b73bfad9a10cc6&oe=587ECA06',
	link:'https://www.facebook.com/photo.php?fbid=10154147277768745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral karma citra',
	pct:5.8,
	desc:'A little bit too stouty and bitter for me but otherwise good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13241326_10154147277883745_7683110725231850309_n.jpg?oh=bfad21d00f4e83abcc2a600b109878e1&oe=588566D2',
	link:'https://www.facebook.com/photo.php?fbid=10154147277883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew single hop',
	pct:4.8,
	desc:'A little bit lacking on the hop side but well rounded. Kind of want to know what hop and malt they use',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/13226775_10154147278083745_8353755751636156502_n.jpg?oh=a5611161ad531a0ab930362a1dee9c87&oe=5876A2C2',
	link:'https://www.facebook.com/photo.php?fbid=10154147278083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante lager',
	pct:5.2,
	desc:'Pretty plain lager, slightly better than your standard Australian beers',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13256370_10154147278128745_521618674616706499_n.jpg?oh=7ac7962526123e6c5d872989813c0cf4&oe=5881F3F7',
	link:'https://www.facebook.com/photo.php?fbid=10154147278128745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone IPA',
	pct:6.9,
	desc:'Very bitter and lacking in hops but ok',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13244720_10154147278198745_7466060435592720847_n.jpg?oh=0042d60516148302e8d5cafbdea255f0&oe=586F0ECF',
	link:'https://www.facebook.com/photo.php?fbid=10154147278198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha water buffalo',
	pct:6.6,
	desc:'Has a few flavours which are hard to pin down but it works well. Has a nice amount of sweetness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13245472_10154147280238745_5349990342920915596_n.jpg?oh=0bde970ae99f36dd0bb439d4f1c5667f&oe=586BB1FF',
	link:'https://www.facebook.com/photo.php?fbid=10154147280238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arc Valley Lager',
	pct:4.7,
	desc:'Nothing particularly good about this beer. It’s drinkable but that’s about it',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13413137_10154200938153745_6141742786313639808_n.jpg?oh=c86f323436ff3a57dae516ffbae665e5&oe=587246EE',
	link:'https://www.facebook.com/photo.php?fbid=10154200938153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Namysrów pils',
	pct:6.0,
	desc:'Malty European pils. Nothing special',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13442354_10154200938273745_8005265126653801521_n.jpg?oh=b49909af31bc06d722de3bb992cb24db&oe=5882C1DE',
	link:'https://www.facebook.com/photo.php?fbid=10154200938273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Otra vez',
	pct:4.5,
	desc:'Smells strange bad but tastes completely different. Having trouble describing exactly what I’m getting here, kind of like watermelon. Perhaps too many things going on all at once. I wouldn’t want many but it’s worth the experience',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13435367_10154200938253745_7818346019313072630_n.jpg?oh=2dfe500498ad0a5883007863a1a99091&oe=586C47E3',
	link:'https://www.facebook.com/photo.php?fbid=10154200938253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic rock Cannonball IPA',
	pct:7.4,
	desc:'Has the floral smell that I love in an IPA and a nice balance of bitterness and hops. A great example of an IPA',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13413596_10154200938458745_5561217537478071831_n.jpg?oh=08aa29ea180e192bb4a2ae2baa4bc38e&oe=58714E16',
	link:'https://www.facebook.com/photo.php?fbid=10154200938458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Exit milk stout',
	pct:5.2,
	desc:'Not nearly as sweet as I expected, almost had a sour note. Once I got used to it it was an enjoyable drink',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13450864_10154200938523745_2403941117496205897_n.jpg?oh=a976319fc6bc3dd47a780df972d48d37&oe=58849391',
	link:'https://www.facebook.com/photo.php?fbid=10154200938523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The continuous daryl',
	pct:8.4,
	desc:'One amazing beer. Spot on with bitterness and fruitiness',
	score:9.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423996_10154200938528745_8109251558112727055_n.jpg?oh=24120e200933d779cb92a5ecd4e1f865&oe=586D8282',
	link:'https://www.facebook.com/photo.php?fbid=10154200938528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate temptress',
	pct:6.0,
	desc:'A little bit too bitter and too stouty for me. Not getting any chocolate either',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13418736_10154200938698745_7920734449371306402_n.jpg?oh=02d699b75c244fbc7a257bdcd20ea08b&oe=58716980',
	link:'https://www.facebook.com/photo.php?fbid=10154200938698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic rock high wire grapefruit',
	pct:5.5,
	desc:'Fruity like a soft drink but still bitter like a beer. Smells a little bit like past. Different and refreshing',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423871_10154200938833745_2449878580533037042_n.jpg?oh=514e32e5509fc3168dd99e316198b25b&oe=587049BE',
	link:'https://www.facebook.com/photo.php?fbid=10154200938833745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hop tart',
	pct:4.6,
	desc:'An interesting beer. Could do with a little more hop flavour to go with the sourness but refreshing as it is',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13407034_10154200938858745_1959407752907879656_n.jpg?oh=71b71add5cec4ab6c7e03bd00224a5b9&oe=5883E00C',
	link:'https://www.facebook.com/photo.php?fbid=10154200938858745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue dead guy',
	pct:6.5,
	desc:'Like a really sweet IPA. There’s something else in there that I can’t put my finger on',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13445293_10154200938923745_8996401406387609840_n.jpg?oh=89f2a2e9939302a2a39cbe501c7c5472&oe=587E8292',
	link:'https://www.facebook.com/photo.php?fbid=10154200938923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #6',
	pct:5.8,
	desc:'A little underwhelmed with the hop flavour, it didn’t come out as strong as I expected. While I wouldn’t really call this an IPA it’s still a nice beer. Not too bitter and really easy to drink',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13434897_10154200939143745_4531007103835058687_n.jpg?oh=92f8cc7a5a3974bb70dcb23b903de6c4&oe=583CD98B',
	link:'https://www.facebook.com/photo.php?fbid=10154200939143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic rock salty kiss',
	pct:4.1,
	desc:'Fairly mild on flavour. Easy to drink and refreshing',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423942_10154200939173745_2576605150498271504_n.jpg?oh=02f6f11ecee894cdf2a6129865654b45&oe=58830CE5',
	link:'https://www.facebook.com/photo.php?fbid=10154200939173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tuatara outrigger',
	pct:4.5,
	desc:'More of a Belgian flavour than I expected. Ok but not great',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13423884_10154200939238745_5620898802714048410_n.jpg?oh=620db6a7baa0dc184491cdb725e9f448&oe=5838F74F',
	link:'https://www.facebook.com/photo.php?fbid=10154200939238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Legal tender',
	pct:4.5,
	desc:'Has a slightly sweet taste and a spicy finish. Drink it quick before it gets warm',
	score:5.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13445722_10154200939418745_7912390867396221069_n.jpg?oh=d9f9a35b2a01d7abe835fce9b0af4400&oe=587951DD',
	link:'https://www.facebook.com/photo.php?fbid=10154200939418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson dead ahead',
	pct:null,
	desc:'There\'s an interesting background flavour, perhaps honey, but it\'s overwhelmed by the bitterness. A little disappointing',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/13393976_10154200939438745_8730033578411056337_n.jpg?oh=30c72f00bf1b2a66666297f271b7e029&oe=5877EA2B',
	link:'https://www.facebook.com/photo.php?fbid=10154200939438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #5',
	pct:6.4,
	desc:'Definitely tastes like a belgian ale. Not the favourite beer I\'ve made but it\'s ok',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14358744_10154470801668745_8655409107323903704_n.jpg?oh=b771bb0258886334908b4d69a8df722c&oe=587F17C6',
	link:'https://www.facebook.com/photo.php?fbid=10154470801668745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #7',
	pct:6.6,
	desc:'There’s a slight caramel/toffee flavour that comes through but the apple isn’t there except for the smell. More bitter than my other beers but it’s not overwhelming',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14355682_10154470801823745_1173945088278637495_n.jpg?oh=542f38158316eb041616ad359405324a&oe=586BEE5C',
	link:'https://www.facebook.com/photo.php?fbid=10154470801823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #8',
	pct:5.6,
	desc:'A much more in your face stout than my #3. The chocolate hasn’t come through but the sweetness from the lactose has. There’s a noticeable coffee flavour as well that I didn’t expect. Amazingly though it comes together really well and is quite easy drinking',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14390783_10154470801013745_7457075134918125782_n.jpg?oh=70780c0e68a0c8f6be54dc5f4d4194d2&oe=5883D9A6',
	link:'https://www.facebook.com/photo.php?fbid=10154470801013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six strings dark red IPA',
	pct:6.0,
	desc:'Too much bitterness overwhelming the other flavours',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14441019_10154470803253745_5501701895500526145_n.jpg?oh=869466e2ddcace3d1368f63efecdc8b5&oe=588129EE',
	link:'https://www.facebook.com/photo.php?fbid=10154470803253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cleanskin Green beer',
	pct:4.5,
	desc:'Not as cheap tasting as I expected. Low bitterness and a sweet malt profile make it fairly drinkable',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14344819_10154470803348745_8611392715725012151_n.jpg?oh=86acb1f55a27d6cc8831d55dd22f23e7&oe=583C1BB8',
	link:'https://www.facebook.com/photo.php?fbid=10154470803348745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Hell',
	pct:4.2,
	desc:'Almost tasteless. Absolutely nothing exciting about this beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14449987_10154470803333745_1465091648994242942_n.jpg?oh=51d6bf31941b814f76b06cbd33bab543&oe=586F8D12',
	link:'https://www.facebook.com/photo.php?fbid=10154470803333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa brewing I can\'t believe it\'s not bacon',
	pct:5.5,
	desc:'Super smokey but not overwhelming. Definitely evokes memories of bacon',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14364803_10154470805213745_3875462672312387508_n.jpg?oh=9acd0c056104d88a602d11aad5f86750&oe=58708CC1',
	link:'https://www.facebook.com/photo.php?fbid=10154470805213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'West end draught',
	pct:4.5,
	desc:'Uninspired south Australian lager. Not as bitter as other Australian brews but there\'s no hops or malt to make it s decent beer',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333654_10154470805553745_6025478775328181204_n.jpg?oh=24e07f83d5b756f753e3b019ec82776d&oe=587EF4E7',
	link:'https://www.facebook.com/photo.php?fbid=10154470805553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa valley hop heaven',
	pct:5.0,
	desc:'Nicely balanced hops. Bitterness is on par for what I expect from a beer like this. Great smell too',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333767_10154470806018745_900617753120366059_n.jpg?oh=53591e8c5e49303572785e3b65878f40&oe=5837B493',
	link:'https://www.facebook.com/photo.php?fbid=10154470806018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa valley SA wit',
	pct:4.4,
	desc:'Really refreshing. Would go great on a hot day. One of the better wit beers I\'ve had',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/14333606_10154470807043745_5024248083203116549_n.jpg?oh=ccaa53017c5f4885b6f3d3482549b0eb&oe=5865CD20',
	link:'https://www.facebook.com/photo.php?fbid=10154470807043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Clare valley bulls eye',
	pct:4.5,
	desc:'Overly bitter with no hop profile',
	score:4.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14448985_10154470807198745_1941773766117119359_n.jpg?oh=18ee92e9f2ac45aa648185cf4b82dadd&oe=583B6E51',
	link:'https://www.facebook.com/photo.php?fbid=10154470807198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prancing pony sunshine ale',
	pct:4.8,
	desc:'A little bit lacking but not a bad beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14364917_10154470807363745_7728138801464076268_n.jpg?oh=0f555d6019e39e5f37114936ed0f680f&oe=5885E435',
	link:'https://www.facebook.com/photo.php?fbid=10154470807363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Clare valley monkey\'s uncle',
	pct:4.5,
	desc:'Another bitter beer but tastes like a red ale. Decent flavours behind the bitterness',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14370253_10154470814018745_7440993665823569606_n.jpg?oh=5f6ad7b9aaae5982c11053433f54d13e&oe=58760703',
	link:'https://www.facebook.com/photo.php?fbid=10154470814018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Malt fiction session ale',
	pct:4.5,
	desc:'Very easy drinking. Not a lot of flavour but for something you’re drinking all day this would be great. A little bit tangy',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333020_10154470814048745_257468858783913286_n.jpg?oh=1dc1d63320bc6c01f587853f0f6466af&oe=587985E3',
	link:'https://www.facebook.com/photo.php?fbid=10154470814048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic hat smash hits IPA',
	pct:5.5,
	desc:'Definitely an IPA but not terribly nice. Surprisingly the bitterness went away as it got warmer and it was a bit nicer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359032_10154470814043745_5966474147333652109_n.jpg?oh=eb1fa0ed1363f6ba8f97bc6dab6e0761&oe=583A51DB',
	link:'https://www.facebook.com/photo.php?fbid=10154470814043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Magic hat Stealin time',
	pct:5.5,
	desc:'Really nice ginger hit',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14445970_10154470815508745_4236605545443642954_n.jpg?oh=737312351a56eff801304b63682edc95&oe=58748BD3',
	link:'https://www.facebook.com/photo.php?fbid=10154470815508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington dogs bollocks',
	pct:6.2,
	desc:'Oh so smooth. One of easiest drinking beers I’ve ever had',
	score:9,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14330073_10154470816203745_282816465036444454_n.jpg?oh=a6e71b932df983f33afe339c5b317eff&oe=587FA7F1',
	link:'https://www.facebook.com/photo.php?fbid=10154470816203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innes & Gunn fired oak scotch ale',
	pct:7.0,
	desc:'You can really taste the oak flavours coming through Has a slightly strange flavour but overall pretty nice',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14446159_10154470816978745_506619917402895971_n.jpg?oh=ce1317bd1a21228634fb3608b25ec428&oe=58684924',
	link:'https://www.facebook.com/photo.php?fbid=10154470816978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire hop thief #8',
	pct:5.0,
	desc:'Didn’t think I would enjoy this one as much as the #7 given the hops but it’s just as good',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14368650_10154470818108745_5244772193649315176_n.jpg?oh=73685556aff137b83f4add4a88bb4996&oe=58683B90',
	link:'https://www.facebook.com/photo.php?fbid=10154470818108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steam whistle pilsner',
	pct:5.0,
	desc:'Easy drinking. Fairly dry and not too bitter',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14354999_10154470819568745_6410883825021001969_n.jpg?oh=d0537cb291be9ebb8eb8943f140874aa&oe=583D112A',
	link:'https://www.facebook.com/photo.php?fbid=10154470819568745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mismatch Extra pale ale',
	pct:5.8,
	desc:'Really tasty brew. Not as bitter as I expected which works well with mild hop flavour',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14433165_10154470820783745_152106093540537783_n.jpg?oh=6714fba967d1b084858fa39bf2a70fc5&oe=5884E8BB',
	link:'https://www.facebook.com/photo.php?fbid=10154470820783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shark island pale ale',
	pct:null,
	desc:'My first from this brewery, happy so far. Mild on hops but the sweetness from the malt holds it together',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14449945_10154470822683745_4208137139695558555_n.jpg?oh=77fdf504a4d8e53c01099648f319cc5f&oe=583909B0',
	link:'https://www.facebook.com/photo.php?fbid=10154470822683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shark island summer ale',
	pct:null,
	desc:'A little bit too yeasty. Not what I expect from a summer ale',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14355645_10154470822778745_4715676910602713492_n.jpg?oh=883c7bb94bf816a4d5f445ae127bd401&oe=586E3DAB',
	link:'https://www.facebook.com/photo.php?fbid=10154470822778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont Belgian pale ale',
	pct:5.1,
	desc:'Perfect example of a Belgian',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14358791_10154470822723745_2714715947737886763_n.jpg?oh=169d7949d494883a599466010452068b&oe=5874FE08',
	link:'https://www.facebook.com/photo.php?fbid=10154470822723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont saison de Ville',
	pct:6.7,
	desc:'The best saison I\'ve had. Like drinking a piece of fruit',
	score:9.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359213_10154470823213745_2596732537954561642_n.jpg?oh=f739700a1d59b620abc7ecd2a0534523&oe=58667A9E',
	link:'https://www.facebook.com/photo.php?fbid=10154470823213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch juicy as phuck dark',
	pct:6.3,
	desc:'So much hop aroma with no bitterness. A style I\'ve been searching for but it could be more balanced',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359083_10154470824703745_1117717087850964481_n.jpg?oh=4b36837f9e7d7f87fde00b1fc5e568f8&oe=583D7E9B',
	link:'https://www.facebook.com/photo.php?fbid=10154470824703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch tank 6 imperial stout',
	pct:9.2,
	desc:'There\'s a beautiful flavour but it\'s hidden behind some harshness which slightly spoils it',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14359220_10154470824843745_4704165971419825465_n.jpg?oh=80c1c4aead1edd4649845a17683a3585&oe=586BB9D1',
	link:'https://www.facebook.com/photo.php?fbid=10154470824843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral smoked porter',
	pct:4.9,
	desc:'Smooth but without the backing to make it a great beer',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14446226_10154470825398745_5928076298632372626_n.jpg?oh=deed7f679283aa6b8afa1806ee887afe&oe=5877C101',
	link:'https://www.facebook.com/photo.php?fbid=10154470825398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hotchkiss six',
	pct:4.5,
	desc:'Really mild easy drinking stout. Kind of lacks any interesting depth of flavour',
	score:6.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14333103_10154470826493745_1969706286448885118_n.jpg?oh=f3a89c197fe4e6346bf0ee5a31432b91&oe=583CDC96',
	link:'https://www.facebook.com/photo.php?fbid=10154470826493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson valley blood orange gose',
	pct:4.2,
	desc:'Takes a bit of getting used to, orange doesn’t usually go with salty. Not something I would buy again',
	score:5.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14344683_10154470826643745_4940801353933151559_n.jpg?oh=148f222f09f756f03049b7604a90bd3f&oe=58719E8C',
	link:'https://www.facebook.com/photo.php?fbid=10154470826643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redbay bearded hobo pale ale',
	pct:4.9,
	desc:'Crisp and dry. Very easy drinking, a great pale ale for someone new to beer',
	score:7.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14358894_10154470827368745_3712421249999347669_n.jpg?oh=5a4cb3acac22e95181a0cb66dab30082&oe=587F1B0B',
	link:'https://www.facebook.com/photo.php?fbid=10154470827368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redbay Vlad White IPA',
	pct:6.0,
	desc:'The hops cut through what I normally dislike in a wheat beer. Nicely aromatic and not too bitter',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14355084_10154470829398745_6813450556520253908_n.jpg?oh=242d6aa21deaf7c9f7d358dbb9fb84bb&oe=587F998F',
	link:'https://www.facebook.com/photo.php?fbid=10154470829398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redbay Black gold coffee porter',
	pct:5.9,
	desc:'A nice balance between beer and coffee. Could do with some more sweetness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14390723_10154470829368745_5229900954620895810_n.jpg?oh=bd1bbc52e4b9a5c3c130df9d349ba33f&oe=58720075',
	link:'https://www.facebook.com/photo.php?fbid=10154470829368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liebenweiss hefe weissbier',
	pct:5.5,
	desc:'Really citrusy which hides the yeastiness',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14390784_10154470829463745_472986184778146969_n.jpg?oh=c0a6b067036adcc66f7d8eaed0959ebe&oe=58738A07',
	link:'https://www.facebook.com/photo.php?fbid=10154470829463745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Destroy all humans',
	pct:null,
	desc:'Tastes like it wants to kill me. Was this even supposed to be consumed',
	score:2,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14370189_10154470831048745_1494600717903960685_n.jpg?oh=5acb574cfa8f2a6eb9b536f553eced8f&oe=5878F5CB',
	link:'https://www.facebook.com/photo.php?fbid=10154470831048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie smith triple',
	pct:8.6,
	desc:'Super strange color but with an amazing taste. Starts with a kick then followed by a mild berry sweetness which then mellows out for a smooth finish',
	score:8.5,
	img:'https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14433200_10154470831183745_4447106305531667099_n.jpg?oh=4eacbabd4fe46636cc49bda7cd0586f2&oe=58689AF1',
	link:'https://www.facebook.com/photo.php?fbid=10154470831183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

return ret;
}
