function addAllBeers() {

var ret = [];
ret.push(App.Beer.create({
	name:'Black Sheep Ale. ',
	pct:4.4,
	desc:'Black and average. ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/485855_10151283325868745_1357546171_n.jpg?oh=5b5a0d63af19aacc72106c741ec33ce4&oe=572A945F',
	link:'https://www.facebook.com/photo.php?fbid=10151283325868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg. ',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/536444_10151283326338745_1988442948_n.jpg?oh=6fd98b9884f66af0ac5f112232bd08fe&oe=57621F93',
	link:'https://www.facebook.com/photo.php?fbid=10151283326338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amstel',
	pct:null,
	desc:'',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/1027_10151283326853745_295569657_n.jpg?oh=9c7b2488ba61cdd6eae8ce7c48b85172&oe=5724065B',
	link:'https://www.facebook.com/photo.php?fbid=10151283326853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Webster\'s. ',
	pct:null,
	desc:'Shit bloke, shit beer. ',
	score:1,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/65588_10151283327318745_1619592085_n.jpg?oh=1685b2e51cf2311e7c899075634f90b7&oe=576B9E66',
	link:'https://www.facebook.com/photo.php?fbid=10151283327318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hurlimann. Rather good',
	pct:null,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/375874_10151283327863745_1299694311_n.jpg?oh=6d39543e2c94c96d65d5c6ae65e8cdf9&oe=575E509D',
	link:'https://www.facebook.com/photo.php?fbid=10151283327863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kronenbourg. ',
	pct:5.0,
	desc:'Standard fare. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/60247_10151283328373745_1855333949_n.jpg?oh=621007b7ce00b76a394cc6ff85d73d78&oe=57614CF3',
	link:'https://www.facebook.com/photo.php?fbid=10151283328373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Veltins',
	pct:null,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/32339_10151296241778745_603957055_n.jpg?oh=675e28d6a74f120698680c99bb9eb923&oe=572D34D7',
	link:'https://www.facebook.com/photo.php?fbid=10151296241778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Smith\'s Extra stout .',
	pct:4.5,
	desc:'Like Guinness with a taste of ashtray. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/317875_10151303867498745_1098897913_n.jpg?oh=fc45c4cf60ba659c4eb07487bb95ac5e&oe=576D7AE7',
	link:'https://www.facebook.com/photo.php?fbid=10151303867498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ALEXIOS. ',
	pct:null,
	desc:'The beer telling me to go back to the Greek Islands. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/16981_10151303885378745_1227406993_n.jpg?oh=3e5d8023d7ce8653419a2bcca8a94032&oe=575E9426',
	link:'https://www.facebook.com/photo.php?fbid=10151303885378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red stripe. ',
	pct:4.7,
	desc:'Brick lane special. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/378973_10151303950693745_516519003_n.jpg?oh=c68b0cc8af5a36c73948c0dc05812ba2&oe=57348856',
	link:'https://www.facebook.com/photo.php?fbid=10151303950693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'1892 ',
	pct:3.3,
	desc:'Warm, flat and nutty ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/3705_10151315682573745_1414196769_n.jpg?oh=df834fe7028d060abb39cc4d2e4ba4f4&oe=57325C1E',
	link:'https://www.facebook.com/photo.php?fbid=10151315682573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra ',
	pct:4.8,
	desc:'Indian restaurant special ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/557801_10151315682973745_793850180_n.jpg?oh=9cbd78165a47adde5a34a4365a392dfe&oe=5764EA40',
	link:'https://www.facebook.com/photo.php?fbid=10151315682973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king ipa.  ',
	pct:3.6,
	desc:'Just tastes a bit wrong. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/l/t1.0-0/p480x480/189043_10151315683658745_1443395751_n.jpg?oh=33d6db542ed036ba117f62aafc2c5b6c&oe=5768EAB3',
	link:'https://www.facebook.com/photo.php?fbid=10151315683658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grolsch -  ',
	pct:5.0,
	desc:'Crisp, refreshing, easily overlooked. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/60758_10151315684663745_854245528_n.jpg?oh=63a76bf1f44b12930eb58a664c3d3917&oe=572644A4',
	link:'https://www.facebook.com/photo.php?fbid=10151315684663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noble. ',
	pct:5.0,
	desc:'A confusing bunch of flavours. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/546983_10151331650653745_1841706536_n.jpg?oh=962c68b491d05c59a551e30ee1f619f8&oe=5722A6AC',
	link:'https://www.facebook.com/photo.php?fbid=10151331650653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yankee. ',
	pct:4.3,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/550717_10151331657283745_2008475143_n.jpg?oh=ae50a3a506b0e88b3e663efd10b0736c&oe=576AAA92',
	link:'https://www.facebook.com/photo.php?fbid=10151331657283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Dog\'s Bollocks. ',
	pct:5.9,
	desc:'Tastes just like the name. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/15111_10151331658713745_2003438525_n.jpg?oh=1e50e4c71f437ee93863caf01c5beac4&oe=572B5312',
	link:'https://www.facebook.com/photo.php?fbid=10151331658713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double maxim. ',
	pct:4.7,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/378563_10151331661023745_1836111728_n.jpg?oh=7103feddf2479664878662ac0d682843&oe=5724D7B4',
	link:'https://www.facebook.com/photo.php?fbid=10151331661023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Black. ',
	pct:4.7,
	desc:'',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/293855_10151331663163745_2099861357_n.jpg?oh=0fa2e4ac89d599a538980bc49ba62d63&oe=5766E4C7',
	link:'https://www.facebook.com/photo.php?fbid=10151331663163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Rev. James',
	pct:null,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/542989_10151331668478745_1709226964_n.jpg?oh=55212eac567b11b9e825310e7c482426&oe=572B3A7E',
	link:'https://www.facebook.com/photo.php?fbid=10151331668478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double Dragon. ',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/148410_10151356728003745_1112766365_n.jpg?oh=9ce0f186187eaac6bc313e4ea8b8d85c&oe=57249E39',
	link:'https://www.facebook.com/photo.php?fbid=10151356728003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pride of Oxford. ',
	pct:5.0,
	desc:'Just a very average beverage. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/558943_10151356728198745_2042204432_n.jpg?oh=2c568c9c6b99ce1b6a1fd450da4e4aa1&oe=576454A2',
	link:'https://www.facebook.com/photo.php?fbid=10151356728198745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bishops finger. ',
	pct:5.4,
	desc:'Written on the back: At 5.4% It\'s near the knuckle. .',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/533497_10151356728563745_544345125_n.jpg?oh=c90e07d5fa448e9bae5d19e3ef0eaea3&oe=5723E591',
	link:'https://www.facebook.com/photo.php?fbid=10151356728563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Dark Ale ',
	pct:4.5,
	desc:'Flavoursome. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/521606_10151396303973745_830089732_n.jpg?oh=96dc41464aff7eea61a2ec510428d41b&oe=572E3576',
	link:'https://www.facebook.com/photo.php?fbid=10151396303973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Golden Ale. ',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/480275_10151356728773745_1268031446_n.jpg?oh=edec210a41ea0ed622223a1625bbf46c&oe=572AB6D5',
	link:'https://www.facebook.com/photo.php?fbid=10151356728773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Stout ',
	pct:4.5,
	desc:'Very smooth and mild with a hint of chocolate. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/l/t1.0-0/p480x480/16733_10151396304708745_66219487_n.jpg?oh=eec51e1956fca6b3869215dd61cab57c&oe=576FDAA5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tesco Lager ',
	pct:4,
	desc:'You get what you pay for. ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/530426_10151368077248745_1651993820_n.jpg?oh=a572e4bb06b55e4323aa75399187bc1f&oe=572BCDA0',
	link:'https://www.facebook.com/photo.php?fbid=10151368077248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Abbey Beer ',
	pct:6.5,
	desc:'Cool bottle. Terrible taste. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/424785_10151368077728745_484320810_n.jpg?oh=789377ebc92ba3fd77eb938abeb28768&oe=5726957F',
	link:'https://www.facebook.com/photo.php?fbid=10151368077728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S Belgian Lager',
	pct:null,
	desc:'Easy drinking. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/734776_10151461674018745_617552379_n.jpg?oh=6e4e4a64c379cb0db1430905dd2ec74c&oe=576B2288',
	link:'https://www.facebook.com/photo.php?fbid=10151461674018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S French Lager ',
	pct:4,
	desc:'Not as good as the Belgian one. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/486557_10151563840963745_1674492557_n.jpg?oh=9bc90a38667482cea4fb400f5e8ef1c2&oe=57346081',
	link:'https://www.facebook.com/photo.php?fbid=10151563840963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennant\'s super ',
	pct:9.0,
	desc:'If you\'re really drunk but want to be mike Stuart drunk then this is the beer for you ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/524743_10151649176508745_61534800_n.jpg?oh=c945423d608b0d84459e932da12037de&oe=576B0930',
	link:'https://www.facebook.com/photo.php?fbid=10151649176508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kestral Super lager ',
	pct:9.0,
	desc:'Must be consumer quickly. Before the taste sets in ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/16679_10151428525733745_2106487431_n.jpg?oh=887c18cb394c92a5a67d3a8b1e1de9a7&oe=5765FCAA',
	link:'https://www.facebook.com/photo.php?fbid=10151428525733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg special. ',
	pct:9.0,
	desc:'Tennants super for the discerning bum. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/429525_10151356729088745_1307200238_n.jpg?oh=280e79bba9fc26fd0a09bf93af148c12&oe=5733F212',
	link:'https://www.facebook.com/photo.php?fbid=10151356729088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crest Super ',
	pct:10,
	desc:'As much as I like being able to drink half a bottle of wine in a single can of beer, this is just foul ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/923052_10151649178723745_1627305958_n.jpg?oh=0882af9f9ffa9dabfe50b89ea7c07a5d&oe=5768FC14',
	link:'https://www.facebook.com/photo.php?fbid=10151649178723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old empire. ',
	pct:5.7,
	desc:'Not at all an ipa .',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/73511_10151356728858745_1899006793_n.jpg?oh=7d82536f0f993d306dec45ea2af5de99&oe=57288B20',
	link:'https://www.facebook.com/photo.php?fbid=10151356728858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wainwrights. ',
	pct:4.1,
	desc:'Not too bad at all. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/401229_10151356729468745_228573429_n.jpg?oh=c2dfc41a997f3942b0bb9f54e551bce5&oe=57715068',
	link:'https://www.facebook.com/photo.php?fbid=10151356729468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hobgoblin ',
	pct:5.2,
	desc:'An average ale. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/484314_10151368077318745_996314221_n.jpg?oh=709e2e028e668f55e71102a0d2916eb3&oe=5728700A',
	link:'https://www.facebook.com/photo.php?fbid=10151368077318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'King goblin ',
	pct:6.6,
	desc:'Better than the standard hobgoblin ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash4/v/t1.0-0/p480x480/1656157_10152293086848745_1506561898_n.jpg?oh=ddc3ef3cac46e349855d7b73dd9b6cd7&oe=57348A8B',
	link:'https://www.facebook.com/photo.php?fbid=10152293086848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocking Rudolph ',
	pct:4.2,
	desc:'Makes me feel all Christmasy. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/481704_10151368077713745_2078288487_n.jpg?oh=85eae2babcfaa926b43d27c856800a6e&oe=572A7190',
	link:'https://www.facebook.com/photo.php?fbid=10151368077713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hopping Hare ',
	pct:4.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/399346_10151380245588745_647361323_n.jpg?oh=871bf74e1ab3a956fcd3a145c0b84ba2&oe=572843F3',
	link:'https://www.facebook.com/photo.php?fbid=10151380245588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Champion ',
	pct:5.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/l/t1.0-0/p480x480/537673_10151380245638745_991276182_n.jpg?oh=2bf872592ba4aa44b9798c663e7a3ee0&oe=5729D09D',
	link:'https://www.facebook.com/photo.php?fbid=10151380245638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Glory ',
	pct:4.5,
	desc:'Peach flavoured beer. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/9160_10151380243323745_1001869256_n.jpg?oh=626b9d5e9773f100b954075b69b77176&oe=5761EDAC',
	link:'https://www.facebook.com/photo.php?fbid=10151380243323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fursty Ferret ',
	pct:4.4,
	desc:'The name is better than the taste. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/224528_10151303867818745_1700962680_n.jpg?oh=87611a7c71f548a8c47ed5b61dcfe986&oe=5733E78E',
	link:'https://www.facebook.com/photo.php?fbid=10151303867818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Tangle Foot ',
	pct:5,
	desc:'A standard beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/379340_10151461671708745_1194104860_n.jpg?oh=4302106a5f866678b67d30904af0822c&oe=57247044',
	link:'https://www.facebook.com/photo.php?fbid=10151461671708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Firkin fox ',
	pct:4.3,
	desc:'Firkin terrible ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/542858_10151563945898745_1345565555_n.jpg?oh=54a929d3e400dbf9a062b9fa1ee79dfb&oe=57620E5F',
	link:'https://www.facebook.com/photo.php?fbid=10151563945898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Poacher\'s choice ',
	pct:5.7,
	desc:'You can really taste the liquorice. Not sure why someone put liquorice in beer. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/555262_10151461672288745_1320726068_n.jpg?oh=a9cedbe7dc01bb6027ea87c04eca6170&oe=576F93F0',
	link:'https://www.facebook.com/photo.php?fbid=10151461672288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger blandford flyer ',
	pct:5.2,
	desc:'Mild ginger ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/74705_10151798802528745_954132420_n.jpg?oh=ede36244e4ac27a894f3a520ab646b65&oe=572C0FB0',
	link:'https://www.facebook.com/photo.php?fbid=10151798802528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger First Gold ',
	pct:4,
	desc:'Very hoppy. Too hoppy. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/995127_10151798803233745_1165661191_n.jpg?oh=22eaf1ce753f8f6b93335bd185993daa&oe=5729D27A',
	link:'https://www.facebook.com/photo.php?fbid=10151798803233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot Ale',
	pct:null,
	desc:'A nice solid ale. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/261583_10151368077943745_1842191344_n.jpg?oh=b34abbef61b30399b7979b39e12e3c17&oe=57331A1D',
	link:'https://www.facebook.com/photo.php?fbid=10151368077943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bass.',
	pct:null,
	desc:'The smoothness of Guinness with a lager taste. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/18911_10151368078368745_1781250452_n.jpg?oh=d96eccac557726e0a9f1ac71c6221b34&oe=5724385D',
	link:'https://www.facebook.com/photo.php?fbid=10151368078368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lech',
	pct:null,
	desc:'Just plain average. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/61451_10151380245533745_1375457790_n.jpg?oh=7cf03eb002e8820fc4db0bff05c11866&oe=576F4968',
	link:'https://www.facebook.com/photo.php?fbid=10151380245533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tatra. ',
	pct:6.0,
	desc:'Surprisingly good. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/406821_10151315683338745_1515210431_n.jpg?oh=fe63c38e645e9bdace911df2bd924bfb&oe=575F38B0',
	link:'https://www.facebook.com/photo.php?fbid=10151315683338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zywiec ',
	pct:5.6,
	desc:'Rather high on the list of polish beer',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/482554_10151563946353745_976172500_n.jpg?oh=89b4923477a244cccc0a3e2f2eb0b246&oe=576CDB04',
	link:'https://www.facebook.com/photo.php?fbid=10151563946353745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Debowe mocne ',
	pct:7.0,
	desc:'A nice sweetness. Bogaty smak! ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/923169_10151649174868745_1394415362_n.jpg?oh=5a6c1911829d1c9c4db7be3c78bc8df2&oe=5768C86E',
	link:'https://www.facebook.com/photo.php?fbid=10151649174868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Warka ',
	pct:5.7,
	desc:'Standard polish garbage ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/522510_10151563946283745_279086474_n.jpg?oh=5aae418df5ac8b6e5684d7501fbad6b3&oe=57316E6D',
	link:'https://www.facebook.com/photo.php?fbid=10151563946283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wojak mocny ',
	pct:7.0,
	desc:'Smooth and mild ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/321669_10151649177583745_849913582_n.jpg?oh=347beff6b0676d152bfac2dcd3c30a2d&oe=576BD5EB',
	link:'https://www.facebook.com/photo.php?fbid=10151649177583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tyskie klasyczne ',
	pct:5.0,
	desc:'The best polish beer I\'ve tasted ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1235025_10151888670293745_2077557673_n.jpg?oh=1d014e09e8ae039705f9b7dbffddbbff&oe=576EFAD2',
	link:'https://www.facebook.com/photo.php?fbid=10151888670293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Whistable Bay organic Ale ',
	pct:4.5,
	desc:'Leaves a horrible bitter after taste. ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/282837_10151380245908745_185055294_n.jpg?oh=8dc46becf9228a0b019e300d07628a6b&oe=572FF549',
	link:'https://www.facebook.com/photo.php?fbid=10151380245908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Lager',
	pct:null,
	desc:'A decent Lager. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/547553_10151396304058745_42264123_n.jpg?oh=d38fcf7d588dec8773111172ac57916a&oe=5767DEDD',
	link:'https://www.facebook.com/photo.php?fbid=10151396304058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Isle of Arran blonde. ',
	pct:5.0,
	desc:'No idea why anyone would buy this twice. ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/29588_10151396304143745_1361559358_n.jpg?oh=31e55ee81b69a0269c55cab573a8cf9d&oe=576D59E1',
	link:'https://www.facebook.com/photo.php?fbid=10151396304143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Edmunds. ',
	pct:4.5,
	desc:'A little bit too bitter. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/521840_10151396304393745_1554011177_n.jpg?oh=a3439129579d6519c9b6b0e7984e8a95&oe=576E4E92',
	link:'https://www.facebook.com/photo.php?fbid=10151396304393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs Back TEA. ',
	pct:4.2,
	desc:'Only has a hint of tea. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/282869_10151396304613745_908615539_n.jpg?oh=016233cadc5dd42431839931c9ddef6f&oe=5762F582',
	link:'https://www.facebook.com/photo.php?fbid=10151396304613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holsten Pils ',
	pct:5.0,
	desc:'Ok when it\'s really cold, otherwise very average. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/581508_10151396304968745_547445318_n.jpg?oh=723d5137aa88ca1d46befc4100c10bd1&oe=5760526C',
	link:'https://www.facebook.com/photo.php?fbid=10151396304968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Thumper ',
	pct:5.6,
	desc:'Gave my taste buds a thumping. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/62117_10151396305243745_1878047628_n.jpg?oh=60cba84353a9ba78036add4d757b6f3a&oe=5730C76C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pacifico clara.',
	pct:null,
	desc:'A fairly standard beer. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/382796_10151396306023745_1333802839_n.jpg?oh=b212872976a0966ab94ddc85c7daf9f8&oe=572D0B6B',
	link:'https://www.facebook.com/photo.php?fbid=10151396306023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Christmas cracker. ',
	pct:4.2,
	desc:'Bitter and nutty. ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/408606_10151428525743745_1997517717_n.jpg?oh=f4b2ecba7c82747b6faf84c4180f14cb&oe=572A543F',
	link:'https://www.facebook.com/photo.php?fbid=10151428525743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deuchars IPA ',
	pct:4.4,
	desc:'Gets better after a few sips. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/603151_10151428525283745_670825446_n.jpg?oh=17363fadfddaa67494661c7acd28fe1a&oe=5763C3B0',
	link:'https://www.facebook.com/photo.php?fbid=10151428525283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser. ',
	pct:4.8,
	desc:'Beer flavoured water. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/12558_10151356728378745_471931293_n.jpg?oh=d2ff57ba66ad35db2d94a92a88ddfb43&oe=576DD419',
	link:'https://www.facebook.com/photo.php?fbid=10151356728378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'SIerra Nevada pale ale',
	pct:null,
	desc:'A quality strong flavour. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/23377_10151428526143745_898774029_n.jpg?oh=99ca4b364c91e1fdef83b52698b6aed4&oe=5724351D',
	link:'https://www.facebook.com/photo.php?fbid=10151428526143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black chocolate stout ',
	pct:10.0,
	desc:'Be ready for a kick. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1001078_10151798818383745_544568245_n.jpg?oh=4ab6126d16bed08b53e14c124b8c0a86&oe=575D128F',
	link:'https://www.facebook.com/photo.php?fbid=10151798818383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Miller',
	pct:null,
	desc:'Good for an American beer. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/603011_10151461681363745_1924966324_n.jpg?oh=79e8558751ed3f70bddc640fb47cb9a7&oe=57668E78',
	link:'https://www.facebook.com/photo.php?fbid=10151461681363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blue moon ',
	pct:5.4,
	desc:'Tasty ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/603175_10151428525338745_1084934789_n.jpg?oh=73a68c80431166983aca94d35dcf0a93&oe=576AA8E5',
	link:'https://www.facebook.com/photo.php?fbid=10151428525338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coors Light ',
	pct:4.3,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/3398_10151428533958745_102290057_n.jpg?oh=d43a1b23640c135754c6d9fc3d9e5a03&oe=572907C4',
	link:'https://www.facebook.com/photo.php?fbid=10151428533958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red pig ale ',
	pct:5.0,
	desc:'Tastes more like an american beer than a mexican one. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/67811_10151368077158745_1890584013_n.jpg?oh=055cada6d4e5b9f630bb88ad795a6276&oe=572A62C3',
	link:'https://www.facebook.com/photo.php?fbid=10151368077158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lemongrass Saison ',
	pct:5.0,
	desc:'A wheat beer taste but a little more fresh ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/534376_10152147730388745_345071070_n.jpg?oh=025b29f2f992c0850ad80cdb908c4964&oe=572ECACD',
	link:'https://www.facebook.com/photo.php?fbid=10152147730388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coconut porter ',
	pct:5.7,
	desc:'Can’t really taste the coconut and seems to curdle the stomach. Could just be fighting with the other beers. Or the fried rice. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/1479322_10152147730723745_835775935_n.jpg?oh=ce17e192d1306297f522e7414dd7a3b3&oe=5766F807',
	link:'https://www.facebook.com/photo.php?fbid=10152147730723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed Root brew. ',
	pct:4,
	desc:'Tastes like a ginger beer. But it\'s not.',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/184446_10151428525538745_507755493_n.jpg?oh=1a1e5fc0873539019d7e6b9eae01f753&oe=5766FA06',
	link:'https://www.facebook.com/photo.php?fbid=10151428525538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed ',
	pct:4,
	desc:'Mike would drink this. It\'s not beer.',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/409508_10151396305103745_1792863383_n.jpg?oh=5905adcaa6323a65b100c43c667e0718&oe=576C66CF',
	link:'https://www.facebook.com/photo.php?fbid=10151396305103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Guinness',
	pct:null,
	desc:'Cannot be rated.',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/230829_10151296241408745_792356720_n.jpg?oh=77f3e03fd7c487f575bf78c7de0b7ea5&oe=572CB7C4',
	link:'https://www.facebook.com/photo.php?fbid=10151296241408745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gallway hooker',
	pct:null,
	desc:'A little bit off ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/542152_10151428526223745_595487151_n.jpg?oh=f0dfc28c21adc4b24d914d068fc7fadf&oe=5771359D',
	link:'https://www.facebook.com/photo.php?fbid=10151428526223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harp',
	pct:null,
	desc:'Described as harpic toilet cleaner but has a much nicer taste. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/426781_10151428526053745_1807147542_n.jpg?oh=b222343071db7c569cdae71449292b12&oe=572CBEAF',
	link:'https://www.facebook.com/photo.php?fbid=10151428526053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Five lamps',
	pct:null,
	desc:'Bad to start, bad to finish ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/486257_10151428526493745_65566473_n.jpg?oh=b7a52bce954ac5e157aef0c9c42c9125&oe=5732E8FD',
	link:'https://www.facebook.com/photo.php?fbid=10151428526493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carrig ',
	pct:4.3,
	desc:'An easy bev ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1238989_10151888668133745_55669060_n.jpg?oh=057c91f4df721544df6acf94d6c9174b&oe=572571E2',
	link:'https://www.facebook.com/photo.php?fbid=10151888668133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kilkenny',
	pct:null,
	desc:'A little too bitter ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/603305_10151428526818745_310997790_n.jpg?oh=6345675b00f9e8796393da367342723b&oe=5722F747',
	link:'https://www.facebook.com/photo.php?fbid=10151428526818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Smithwicks',
	pct:null,
	desc:'A smooth ale. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/14944_10151428531923745_1130605177_n.jpg?oh=63a00f14d9ce587ee66fc1f308573e98&oe=57687F5F',
	link:'https://www.facebook.com/photo.php?fbid=10151428531923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caledonia smooth',
	pct:null,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/150976_10151428531978745_744791164_n.jpg?oh=d0e7af029b5c83fb99cee19ad23f34f8&oe=575DBF31',
	link:'https://www.facebook.com/photo.php?fbid=10151428531978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'hara\'s Irish pale ale',
	pct:null,
	desc:'Kind of a mix between an IPA and a pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1233480_10151888666808745_111746617_n.jpg?oh=d81dcb5f35a77a30e32242238013455f&oe=5724FCFC',
	link:'https://www.facebook.com/photo.php?fbid=10151888666808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'haras red',
	pct:null,
	desc:'Maybe the worst beer ever ',
	score:1,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/150601_10151428532178745_1335701826_n.jpg?oh=5e5962bb161d5dea39e4f0c7e5000428&oe=5769056C',
	link:'https://www.facebook.com/photo.php?fbid=10151428532178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cyclone IPA ',
	pct:7.0,
	desc:'Nice but way too heavy right now ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1173698_10151888668208745_564925063_n.jpg?oh=fa60c31b76a0e89c2a1be7a206fd0b21&oe=572FCDCC',
	link:'https://www.facebook.com/photo.php?fbid=10151888668208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brahma ',
	pct:4.3,
	desc:'Easy bevving ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/312335_10151428526733745_366386591_n.jpg?oh=8e6227e78d8e4a4d9cc2f837cdf3f185&oe=572A8D9F',
	link:'https://www.facebook.com/photo.php?fbid=10151428526733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Hardcore IPA ',
	pct:9.2,
	desc:'A lot of flavour. Couldn\'t handle many. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/537412_10151428532378745_1195699464_n.jpg?oh=feb05b8fa7e4d52b6209e301024d0a1e&oe=5766363A',
	link:'https://www.facebook.com/photo.php?fbid=10151428532378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punk IPA ',
	pct:5.6,
	desc:'Quality IPA ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/954631_10151694534143745_666636865_n.jpg?oh=a7b094f8a9c09639ddcb79ac7049294c&oe=5726B7B6',
	link:'https://www.facebook.com/photo.php?fbid=10151694534143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Psycho ',
	pct:10,
	desc:'This beer won\'t stop punching me in the face ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1236502_10151929072183745_392721452_n.jpg?oh=fddf3def53a135f33c29f7ad9f8ba255&oe=5727D963',
	link:'https://www.facebook.com/photo.php?fbid=10151929072183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog 5am saint ',
	pct:5,
	desc:'Quality amber ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/970089_10151694532248745_1860752860_n.jpg?oh=21efc6a08dbc43953293278df0276e16&oe=57235E05',
	link:'https://www.facebook.com/photo.php?fbid=10151694532248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Club ',
	pct:3.8,
	desc:'A beer for anyone ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1003490_10151798796948745_2041837456_n.jpg?oh=1ba344e8d6c4e1567f4c092428806ff3&oe=5728F8D4',
	link:'https://www.facebook.com/photo.php?fbid=10151798796948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crew IPA ',
	pct:6.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/l/t1.0-0/p480x480/63719_10151428532313745_813090694_n.jpg?oh=4ba863ce400a306875a06237eefb4a6c&oe=57345C8B',
	link:'https://www.facebook.com/photo.php?fbid=10151428532313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennents ',
	pct:4.0,
	desc:'The standard in Scotland. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/530689_10151428532548745_22366953_n.jpg?oh=27188f79b8753d4f8b0eb8ad18da9ab3&oe=57640C9A',
	link:'https://www.facebook.com/photo.php?fbid=10151428532548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trouble brewing golden ale ',
	pct:4.3,
	desc:'Very malty ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/397706_10151428533088745_22640063_n.jpg?oh=9eee2f62f6d5a95218e5fcbf595745bc&oe=57609D22',
	link:'https://www.facebook.com/photo.php?fbid=10151428533088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wold top against the grain ',
	pct:4.5,
	desc:'Too harsh ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/555458_10151428533018745_1322698428_n.jpg?oh=cf47311e67332bc6a6e9ffe9d0f4beea&oe=575EF38C',
	link:'https://www.facebook.com/photo.php?fbid=10151428533018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ginger beard ',
	pct:4.2,
	desc:'A tasty ginger beer. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/184456_10151428533288745_183483934_n.jpg?oh=423f619c165c10a4ded0a19459100c73&oe=576D5C79',
	link:'https://www.facebook.com/photo.php?fbid=10151428533288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells banana bread beer ',
	pct:5.2,
	desc:'You can really taste the banana. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/68598_10151428533853745_1576633844_n.jpg?oh=9654c367df05ad84e275c584e5893988&oe=575CA681',
	link:'https://www.facebook.com/photo.php?fbid=10151428533853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'KEO ',
	pct:4.5,
	desc:'Takes a bit to get used to. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/12605_10151428533818745_35949284_n.jpg?oh=0dd95790068365b80dfb6b72c4e34ec8&oe=576EEA4D',
	link:'https://www.facebook.com/photo.php?fbid=10151428533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mongoose',
	pct:null,
	desc:'Standard. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/429123_10151428534248745_2064241641_n.jpg?oh=5bbf61f6c2dee0cfd4872aba763d5a1a&oe=57646BC1',
	link:'https://www.facebook.com/photo.php?fbid=10151428534248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flack Catcher',
	pct:null,
	desc:'Average ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/19223_10151428534118745_318984545_n.jpg?oh=86839bd2d2f2d1cf580f6e0539f7a229&oe=57291E75',
	link:'https://www.facebook.com/photo.php?fbid=10151428534118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedigree ',
	pct:5,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/530655_10151461672258745_1106668421_n.jpg?oh=2a0945ca5c84c3dd47b7d83afe79806e&oe=5769B4B4',
	link:'https://www.facebook.com/photo.php?fbid=10151461672258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fagins ',
	pct:4.1,
	desc:'Gay. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/19212_10151461672388745_962581922_n.jpg?oh=2cbe1b22db1652a098e7a6d6de12ba2f&oe=572D6C1B',
	link:'https://www.facebook.com/photo.php?fbid=10151461672388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London Pride',
	pct:null,
	desc:'The standard London Ale to measure against ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/734258_10151461672898745_380826809_n.jpg?oh=dd7aab8afef96d30afb5f540ef920d1f&oe=576A0079',
	link:'https://www.facebook.com/photo.php?fbid=10151461672898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kent\'s best ',
	pct:4.1,
	desc:'Would hate to see the worst ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/539055_10151461672828745_520276173_n.jpg?oh=e53c3a142c2681c86e6001495926d921&oe=5724E74A',
	link:'https://www.facebook.com/photo.php?fbid=10151461672828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Peroni',
	pct:null,
	desc:'Italian standard. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/37080_10151396305588745_415450314_n.jpg?oh=529937ff74b91681ee0dd01440a69a8e&oe=57332F54',
	link:'https://www.facebook.com/photo.php?fbid=10151396305588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Poretti',
	pct:null,
	desc:'Italian tasting ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/554278_10151461673508745_1407613949_n.jpg?oh=64836dad75fc657d8b5ca48c40c9eb85&oe=5722BADD',
	link:'https://www.facebook.com/photo.php?fbid=10151461673508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra moretti ',
	pct:4.6,
	desc:'Nice and tasty ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/1187105_10151860442623745_1479905492_n.jpg?oh=947bbb36564e00574e87e8221dd71ac8&oe=575CE5DB',
	link:'https://www.facebook.com/photo.php?fbid=10151860442623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tetley smooth',
	pct:null,
	desc:'I much prefer this to tea. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/394796_10151461673368745_1651974167_n.jpg?oh=21767f27b70b4a3601b37d2e40a636f1&oe=5732DF95',
	link:'https://www.facebook.com/photo.php?fbid=10151461673368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Frost ',
	pct:4.5,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/32180_10151461673683745_1033363252_n.jpg?oh=61b1639e06665d367525b49fec208246&oe=572C5571',
	link:'https://www.facebook.com/photo.php?fbid=10151461673683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staffordshire IPA ',
	pct:5.5,
	desc:'A mild IPA. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/535438_10151461674053745_360684095_n.jpg?oh=2769ddaf6de61a9be403864657523e0a&oe=575D0FC7',
	link:'https://www.facebook.com/photo.php?fbid=10151461674053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John smiths extra smooth ',
	pct:3.8,
	desc:'What it lacks in alcohol it makes up in foulness ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/598767_10151461673913745_877248330_n.jpg?oh=e4229cd545b70a2c90add727d2d0ea0a&oe=5726E664',
	link:'https://www.facebook.com/photo.php?fbid=10151461673913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Pale Ale',
	pct:null,
	desc:'Tasty ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/549950_10151461681523745_1486815544_n.jpg?oh=8e90bfe8491493afc93ac84070ffae0a&oe=576DCEC6',
	link:'https://www.facebook.com/photo.php?fbid=10151461681523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers sparkling ale ',
	pct:5.8,
	desc:'Not as good as the green, but has more kick ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/528845_10151602295348745_1649172027_n.jpg?oh=87ec201a0541535e05263d4f93a2d0de&oe=572C20D2',
	link:'https://www.facebook.com/photo.php?fbid=10151602295348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers extra stout ',
	pct:6.3,
	desc:'Twice the stout taste of a regular stout ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/484705_10151602292338745_274952911_n.jpg?oh=c1c2d7e0f0d9a5ef1f776a4b37b73600&oe=576006B3',
	link:'https://www.facebook.com/photo.php?fbid=10151602292338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Lager ',
	pct:4.8,
	desc:'Pretty average, but you get used to it ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p180x540/421878_10151563839458745_1540530586_n.jpg?oh=7a934bfc074498cf3f59e57c4282c93d&oe=577039A3',
	link:'https://www.facebook.com/photo.php?fbid=10151563839458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Resch\'s',
	pct:null,
	desc:'A bit harsh ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/484746_10151563946993745_129350151_n.jpg?oh=b744da182a6892b27f59edad519c5a86&oe=575FE8DC',
	link:'https://www.facebook.com/photo.php?fbid=10151563946993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little Creatures Pale Ale',
	pct:null,
	desc:'',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/543882_10151461681178745_1285845134_n.jpg?oh=c50aaf862a854e28f197c3c70ab46656&oe=572E2AE5',
	link:'https://www.facebook.com/photo.php?fbid=10151461681178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boags',
	pct:null,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/734606_10151461683093745_1782530484_n.jpg?oh=7584bf48a9707b876df58b492766c2f9&oe=572E5433',
	link:'https://www.facebook.com/photo.php?fbid=10151461683093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys Extra Dry',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/543796_10151461681748745_852056112_n.jpg?oh=092acaabf11586448dd35ec9e2b4db73&oe=5763BAA0',
	link:'https://www.facebook.com/photo.php?fbid=10151461681748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Victoria Bitter',
	pct:null,
	desc:'You either love it or hate it. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/521589_10151461681978745_514499327_n.jpg?oh=9b8f792b02680fdac87ac5907f974271&oe=576C1A98',
	link:'https://www.facebook.com/photo.php?fbid=10151461681978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown Lager',
	pct:null,
	desc:'A rich man\'s VB. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/537401_10151461682783745_431486220_n.jpg?oh=d68922f1fdace693f55be14c74caff48&oe=576877F6',
	link:'https://www.facebook.com/photo.php?fbid=10151461682783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys old',
	pct:null,
	desc:'Not a stout, not a lager. Some sort of strange crossbreed ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/644421_10151563947083745_12453002_n.jpg?oh=1b41233b2267a705694585ea396bb105&oe=5764E030',
	link:'https://www.facebook.com/photo.php?fbid=10151563947083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys New',
	pct:null,
	desc:'Not sure why I used to drink this all the time. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/74164_10151461683923745_699202545_n.jpg?oh=5f74705b53918c79741093f997999bb6&oe=57697F1B',
	link:'https://www.facebook.com/photo.php?fbid=10151461683923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:null,
	desc:'Decent ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/602093_10151563947313745_1098411203_n.jpg?oh=54635eefd3ffc510062e854b4733722f&oe=5724E379',
	link:'https://www.facebook.com/photo.php?fbid=10151563947313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Platinum blonde ',
	pct:4.6,
	desc:'Meh ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/576008_10151563947183745_1748647687_n.jpg?oh=7e58b883370c54cfa0e73a0b6b78548c&oe=57669280',
	link:'https://www.facebook.com/photo.php?fbid=10151563947183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Three sheets Pale Ale',
	pct:null,
	desc:'A proper pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/431581_10151563947388745_1746265085_n.jpg?oh=02aa94df06f52329dd6926f149bd0c75&oe=57297E60',
	link:'https://www.facebook.com/photo.php?fbid=10151563947388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hite ',
	pct:4.5,
	desc:'Strange can, crisp taste ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/530584_10151461684393745_825973740_n.jpg?oh=ddcc8e1dee798b020e169ed0d62b2e6d&oe=57308BC5',
	link:'https://www.facebook.com/photo.php?fbid=10151461684393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Helier.',
	pct:null,
	desc:'Actually a cider, but it has a great name.',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/480687_10151461682768745_502482125_n.jpg?oh=1cc3ececbc75dcc0d6b0ba94e88a1c37&oe=5768DBE2',
	link:'https://www.facebook.com/photo.php?fbid=10151461682768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra King ',
	pct:7.5,
	desc:'Nicer, stronger and bigger than it\'s crappy cousin. That\'s why it\'s the king. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/374324_10151461684623745_844347532_n.jpg?oh=920835adaa2bbe1a5c2c2d6591c64588&oe=576ACD34',
	link:'https://www.facebook.com/photo.php?fbid=10151461684623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kingisher',
	pct:null,
	desc:'The better Indian beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/733981_10151563846938745_1548720674_n.jpg?oh=b52b657291cb83c4e44869157ef2492e&oe=57319417',
	link:'https://www.facebook.com/photo.php?fbid=10151563846938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cambridgeshire Golden Ale ',
	pct:4.2,
	desc:'Plain ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/541370_10151563840993745_1315027570_n.jpg?oh=5aeea96e8c6f50a8f01dbbe883cf0772&oe=5731DFB2',
	link:'https://www.facebook.com/photo.php?fbid=10151563840993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'March of the Penguins ',
	pct:4.9,
	desc:'An average stout ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/l/t1.0-0/p480x480/75028_10151563841203745_1533936884_n.jpg?oh=c39b02273be59030b7b47e00f0689683&oe=5762A1A9',
	link:'https://www.facebook.com/photo.php?fbid=10151563841203745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nils Oscar God Lager ',
	pct:5.3,
	desc:'Not too bad ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/485993_10151563842368745_684144336_n.jpg?oh=8fca575155f53f92cdd4f8b716f2a47a&oe=57618CD8',
	link:'https://www.facebook.com/photo.php?fbid=10151563842368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Star ',
	pct:5.1,
	desc:'Smooth and cheap ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/601342_10151563843928745_511866900_n.jpg?oh=b600ac8ea26d4c56bc7f1ebdb6042e25&oe=576BF6DD',
	link:'https://www.facebook.com/photo.php?fbid=10151563843928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Worthingtons White Shield ',
	pct:5.6,
	desc:'Flavoursome ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/380993_10151563843448745_1342021225_n.jpg?oh=8b6af99db686d250d24638caf938882a&oe=57680509',
	link:'https://www.facebook.com/photo.php?fbid=10151563843448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'British Bulldog ',
	pct:4.3,
	desc:'Not bad for a bitter. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/479882_10151563844403745_1566533959_n.jpg?oh=49d23c1b53d41a05e07d4f0ddd3316c5&oe=575D1D39',
	link:'https://www.facebook.com/photo.php?fbid=10151563844403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Newcastle Brown Ale ',
	pct:4.7,
	desc:'Looks kind of like the runoff from some industrial process. Really makes me wonder what I\'m drinking. Amazingly it doesn\'t taste that bad ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/644361_10151563845228745_821469901_n.jpg?oh=8d8d7f81ff9c7e4a10c1a9c278f5f84a&oe=573307B6',
	link:'https://www.facebook.com/photo.php?fbid=10151563845228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrooks pale ale ',
	pct:4.5,
	desc:'Another sock flavoured beer ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/545225_10151860439253745_1854856255_n.jpg?oh=09ab6257d4c999eeec03fa002ffd16d6&oe=572C31FB',
	link:'https://www.facebook.com/photo.php?fbid=10151860439253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrook\'s Brewery Junction ',
	pct:4.5,
	desc:'Not sure what taste they\'re going for here… Maybe socks. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/482628_10151563846178745_1536949417_n.jpg?oh=bfb8ef2629d81e664907e231fcd640c3&oe=5769B236',
	link:'https://www.facebook.com/photo.php?fbid=10151563846178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duff ',
	pct:4.7,
	desc:'Not sure how Homer Simpson drinks this stuff ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/522569_10151563850998745_438604131_n.jpg?oh=433a27b96e341d25ba433c4354f52965&oe=576873DA',
	link:'https://www.facebook.com/photo.php?fbid=10151563850998745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Novomestsy Lezak',
	pct:null,
	desc:'A different taste ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/625446_10151563847698745_35732168_n.jpg?oh=fd6bfe8963603063b421b95a444ecf88&oe=5762F869',
	link:'https://www.facebook.com/photo.php?fbid=10151563847698745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Branik ',
	pct:5.5,
	desc:'Consumed in a room full of smoke. May have influenced the rating ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/486531_10151563848553745_1919030008_n.jpg?oh=8700ed933e536e9f71512eacd1e6be08&oe=5768B9A7',
	link:'https://www.facebook.com/photo.php?fbid=10151563848553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'X33 ',
	pct:12.6,
	desc:'Too sweet. Have one and move on ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/578557_10151563849238745_550093869_n.jpg?oh=b5e4489a86e5ac9bd44c7f8b62401dec&oe=572594E4',
	link:'https://www.facebook.com/photo.php?fbid=10151563849238745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oldgott ',
	pct:5.2,
	desc:'A mild taste of honey ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/374397_10151563850303745_1875521604_n.jpg?oh=06bfb4a7127c3d5a158a2d7a1d6423a8&oe=57297275',
	link:'https://www.facebook.com/photo.php?fbid=10151563850303745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pilsner Urquell',
	pct:null,
	desc:'Actually one of the worse Czech lagers ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/544330_10151563851598745_2141597246_n.jpg?oh=5bf3264adfa46f563a51f65b0352426f&oe=57283294',
	link:'https://www.facebook.com/photo.php?fbid=10151563851598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser Budvar',
	pct:null,
	desc:'Far better than its american cousin. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/165000_10151428534173745_615410288_n.jpg?oh=32acfc4accf073aa5ee3944e462afcd6&oe=5723FF2F',
	link:'https://www.facebook.com/photo.php?fbid=10151428534173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel Dark ',
	pct:3.8,
	desc:'Smooth and flavoursome ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/602178_10151563853043745_1776474012_n.jpg?oh=f01a31dd0d7851d168259ee4ea22f30c&oe=57707A4F',
	link:'https://www.facebook.com/photo.php?fbid=10151563853043745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gambrinus',
	pct:null,
	desc:'A poor mans beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/226421_10151563853523745_546548236_n.jpg?oh=815679c410ce3dea2123a2dc9c9929cd&oe=573343B4',
	link:'https://www.facebook.com/photo.php?fbid=10151563853523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bernard ',
	pct:5.1,
	desc:'Even tastes good after the second opening ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/44464_10151563938373745_1447128785_n.jpg?oh=c075549034dab7fe58d0dce57c506c09&oe=57241688',
	link:'https://www.facebook.com/photo.php?fbid=10151563938373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fenix',
	pct:null,
	desc:'Wheat beer with a hint of orange ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/625502_10151563944728745_168727372_n.jpg?oh=86d1fab498acdbc105d44191e551cdce&oe=576F3E9B',
	link:'https://www.facebook.com/photo.php?fbid=10151563944728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel ',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/533976_10151331665848745_1640769773_n.jpg?oh=c7a3099d6aa32b3d4f5d5f4ba02b0821&oe=572DC8D3',
	link:'https://www.facebook.com/photo.php?fbid=10151331665848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crakonos ',
	pct:5.1,
	desc:'I need to know who this old bever is. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/487632_10151563944693745_625226538_n.jpg?oh=a39a0c1b1b1a6cce28921418c66793a0&oe=573350D4',
	link:'https://www.facebook.com/photo.php?fbid=10151563944693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birell 0.',
	pct:49,
	desc:'Damn language barrier. I consider this a beer flavoured soft drink',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/733744_10151563944413745_394586851_n.jpg?oh=c556cd7a8b09c66ef6f072973609f0c0&oe=5771237F',
	link:'https://www.facebook.com/photo.php?fbid=10151563944413745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice 10 ',
	pct:4.2,
	desc:'Smooth with some sort of extra flavour. Caramel maybe ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/549300_10151563944628745_804920715_n.jpg?oh=f0d4480f264fff4b9f2917353ee0af3f&oe=576162E8',
	link:'https://www.facebook.com/photo.php?fbid=10151563944628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staropramen',
	pct:null,
	desc:'A nice lager. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/59324_10151368078418745_874127613_n.jpg?oh=cd77ffdb0c4a49ba285e382449e1dc39&oe=572C77AC',
	link:'https://www.facebook.com/photo.php?fbid=10151368078418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice musketyr ',
	pct:4.5,
	desc:'Very similar to their other beer. Just a tad stronger ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/480492_10151563944828745_302604960_n.jpg?oh=64d16a515868ff5a89a8fca90a5b5f8e&oe=575E3F45',
	link:'https://www.facebook.com/photo.php?fbid=10151563944828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice cerne ',
	pct:3.8,
	desc:'A nice amber ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/482349_10151563944993745_189404530_n.jpg?oh=a925415a0c2c5a17b81a555ffa6fced4&oe=5771B9E9',
	link:'https://www.facebook.com/photo.php?fbid=10151563944993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Master ',
	pct:5.3,
	desc:'The master bev ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/484682_10151563945163745_604451899_n.jpg?oh=0e8e9b5775f0087d5105ca55e317273f&oe=573420C0',
	link:'https://www.facebook.com/photo.php?fbid=10151563945163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timothy Taylor Landlord ',
	pct:4.3,
	desc:'Orangey tasting ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/577972_10151563945378745_1586746946_n.jpg?oh=a85ba34998029d990cf6dc60804472ca&oe=575C6B83',
	link:'https://www.facebook.com/photo.php?fbid=10151563945378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Goose ',
	pct:4.2,
	desc:'A complete mismatch of flavours ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/555154_10151563945403745_1011654346_n.jpg?oh=5f447e74c2d4238dafdf25e414488cab&oe=573202EF',
	link:'https://www.facebook.com/photo.php?fbid=10151563945403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oranjeboom',
	pct:null,
	desc:'Easy drinking fun ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/544204_10151563945568745_9282207_n.jpg?oh=8c52a40a1c368cca534bc89b6c4eb6a7&oe=5724E341',
	link:'https://www.facebook.com/photo.php?fbid=10151563945568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viru ',
	pct:5.0,
	desc:'Smooth and malty  ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/482859_10151563945748745_1320031993_n.jpg?oh=ff4bf7220ffe7fde8de6ffc10f10d695&oe=575D66EF',
	link:'https://www.facebook.com/photo.php?fbid=10151563945748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saku original ',
	pct:4.6,
	desc:'Why was I served Estonian beer in a Lithuanian club? ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/482209_10151602299593745_443741349_n.jpg?oh=d000ec02ee3e0816b68e6ac320665c4e&oe=572530A3',
	link:'https://www.facebook.com/photo.php?fbid=10151602299593745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jaipur ',
	pct:5.9,
	desc:'Like the bazar, needs to be removed from sale for public safety.  ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/582417_10151563946028745_982723381_n.jpg?oh=5340ee0850b0c0cfb983b76edcea5103&oe=576D1EC5',
	link:'https://www.facebook.com/photo.php?fbid=10151563946028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Almaza ',
	pct:4.2,
	desc:'Tastes very familiar ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/2501_10151563946143745_340977146_n.jpg?oh=e02526a69fd4cb1947e8e0769ca8bc2e&oe=576D02CF',
	link:'https://www.facebook.com/photo.php?fbid=10151563946143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fire rock ',
	pct:6.0,
	desc:'My first hawaiian beer. So far so good ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1002768_10151798817233745_47152190_n.jpg?oh=e7126f3e6b5539de5fef4d39d342545f&oe=5731C397',
	link:'https://www.facebook.com/photo.php?fbid=10151798817233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lion lager ',
	pct:4.8,
	desc:'Nothing special ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/75581_10151563946433745_1440605873_n.jpg?oh=ddffc5d49920ac3afa9dfbb3bee57014&oe=575F56FE',
	link:'https://www.facebook.com/photo.php?fbid=10151563946433745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sol ',
	pct:4.5,
	desc:'Much better than corona ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/556881_10151563946938745_1909714508_n.jpg?oh=9a5b3b06af6d8f74c0f40db379ae5525&oe=572EBB94',
	link:'https://www.facebook.com/photo.php?fbid=10151563946938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arvo brew 51 ',
	pct:4.9,
	desc:'Like an IPA gone wrong. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/9699_10151602278498745_506265925_n.jpg?oh=a1274f5188ee690642434fd43d4ccb8b&oe=57644929',
	link:'https://www.facebook.com/photo.php?fbid=10151602278498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson old admiral ',
	pct:6.1,
	desc:'Too much bitterness ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/575759_10151602281008745_1009725075_n.jpg?oh=d90989062ca85e3eb4241fa7ba602eed&oe=572DD982',
	link:'https://www.facebook.com/photo.php?fbid=10151602281008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Quayle ale ',
	pct:4.0,
	desc:'Not as good as expected ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/602158_10151602281568745_1269833032_n.jpg?oh=ef23789733c484d3352599df3e9a96dd&oe=57616F50',
	link:'https://www.facebook.com/photo.php?fbid=10151602281568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Trafalgar pale ale ',
	pct:4.0,
	desc:'A nice tang ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/7969_10151602281553745_212370865_n.jpg?oh=c3b9f5db17f075e84e338b926a291f9c&oe=576E9071',
	link:'https://www.facebook.com/photo.php?fbid=10151602281553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Nelson\'s blood ',
	pct:5.0,
	desc:'A nice stout taste ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/64391_10151602282878745_784297964_n.jpg?oh=3e734421c860350aa32134b9b32d3898&oe=572807AB',
	link:'https://www.facebook.com/photo.php?fbid=10151602282878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'VB pale lager ',
	pct:4.4,
	desc:'Not quite as bad as regular VB ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/559250_10151602286458745_792577618_n.jpg?oh=025f9cdd205377f72216d6c01b412499&oe=572DE126',
	link:'https://www.facebook.com/photo.php?fbid=10151602286458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds sunset ale ',
	pct:4.6,
	desc:'Slightly fruity, have to get used to it before judgement. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/484855_10151602282628745_1452325767_n.jpg?oh=0a367c810a3c7bf6268fd964afefb136&oe=5762875F',
	link:'https://www.facebook.com/photo.php?fbid=10151602282628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale ',
	pct:4.5,
	desc:'A slightly less fruity pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/599814_10151602286343745_870808186_n.jpg?oh=eae7be163a521e045b25e988ebc28e84&oe=5765B3D3',
	link:'https://www.facebook.com/photo.php?fbid=10151602286343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew pilsner ',
	pct:5.0,
	desc:'Rather nice ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/483798_10151602282778745_989104715_n.jpg?oh=f59fc9cc5d260af9ccb8587eeaa4c44a&oe=5766CADB',
	link:'https://www.facebook.com/photo.php?fbid=10151602282778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fat Yak',
	pct:null,
	desc:'A tasty bev ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/541362_10151602283703745_1951889238_n.jpg?oh=96cc48d855fc98b98e51bdde889452c4&oe=576FAD88',
	link:'https://www.facebook.com/photo.php?fbid=10151602283703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The boxer red ale ',
	pct:4.1,
	desc:'A mild red ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/562244_10151602284348745_1238517334_n.jpg?oh=56b8772d5145e4dc5d7b551126124729&oe=572697E3',
	link:'https://www.facebook.com/photo.php?fbid=10151602284348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hangman pale ale ',
	pct:4.9,
	desc:'A tad bitter for a pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/581543_10151602284093745_555930895_n.jpg?oh=4ee6b66952984c35d280a5012307cf69&oe=575FC001',
	link:'https://www.facebook.com/photo.php?fbid=10151602284093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The governor golden ale ',
	pct:4.5,
	desc:'',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/488220_10151602285323745_1585387237_n.jpg?oh=89d76aa2fbca92deb298498d0864d189&oe=572FC023',
	link:'https://www.facebook.com/photo.php?fbid=10151602285323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red truck lager ',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/480840_10151602285148745_827571703_n.jpg?oh=06b6164f7e8fa676fdcfafa8b9659e22&oe=5730C026',
	link:'https://www.facebook.com/photo.php?fbid=10151602285148745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict lager ',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/l/t1.0-0/p480x480/526421_10151602285463745_410487487_n.jpg?oh=bbe4b28b3aa2d93f13a5e33ddb63c8f5&oe=5728C085',
	link:'https://www.facebook.com/photo.php?fbid=10151602285463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bighead no carb beer ',
	pct:4.2,
	desc:'Tastes like a rusty nail left in a glass of water ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/64725_10151602286543745_838192247_n.jpg?oh=f334f2195ef10317479ac4aa2fe87c00&oe=576C51AC',
	link:'https://www.facebook.com/photo.php?fbid=10151602286543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire one fifty lashes',
	pct:null,
	desc:'A good session beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/482193_10151602292048745_375392297_n.jpg?oh=1a5d84cd8c1b7c71da918e815aac8604&oe=572AD2F4',
	link:'https://www.facebook.com/photo.php?fbid=10151602292048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire sun down ',
	pct:4.4,
	desc:'A good amount of flavour but still easy to smash down. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/5556_10151602286983745_1392314300_n.jpg?oh=961fae54d9f775cb80c3b738109df8c6&oe=57290326',
	link:'https://www.facebook.com/photo.php?fbid=10151602286983745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue ',
	pct:4.9,
	desc:'Not as good as I remember ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/733866_10151602292633745_1103549106_n.jpg?oh=063a2dd61d7a72f5b44fc9f89271f511&oe=5722CDA6',
	link:'https://www.facebook.com/photo.php?fbid=10151602292633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue pilsner ',
	pct:4.5,
	desc:'Doesn\'t really taste like a pilsner ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/149243_10151602295168745_1910196412_n.jpg?oh=3e0fbf26e2cb6bc3f379e2e07c8953cb&oe=5771A9C7',
	link:'https://www.facebook.com/photo.php?fbid=10151602295168745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures bright ale ',
	pct:4.5,
	desc:'Terrible photo, decent beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/488165_10151602292853745_953241846_n.jpg?oh=31e913556803d93d23aa2b9c3eb7ad8c&oe=5726C6C3',
	link:'https://www.facebook.com/photo.php?fbid=10151602292853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pepperjack hand crafted ale ',
	pct:4.7,
	desc:'Takes a while to get used to, even then it\'s average. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/579182_10151602294478745_1578225000_n.jpg?oh=a504d7b02fa11ba52ca0578191a86f14&oe=575F97E9',
	link:'https://www.facebook.com/photo.php?fbid=10151602294478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ pure lager ',
	pct:5.0,
	desc:'Something is wrong with this flavour ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/181067_10151602294978745_1842165802_n.jpg?oh=0ecfed6bbe79ef4bdd35097976846208&oe=5727DE41',
	link:'https://www.facebook.com/photo.php?fbid=10151602294978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Keller door ',
	pct:5.0,
	desc:'Just a little bit extra flavour than a standard lager. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/527734_10151602296568745_390928601_n.jpg?oh=c53c880ce59f1cf872190eec396d936d&oe=573104B1',
	link:'https://www.facebook.com/photo.php?fbid=10151602296568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate roadtrip ipa ',
	pct:5.8,
	desc:'Mild for an american IPA, easier to get used to ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/7254_10151602296908745_1398508952_n.jpg?oh=18fbf4fab614d5bd7ebd0c20c897e558&oe=572664F3',
	link:'https://www.facebook.com/photo.php?fbid=10151602296908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate mt Macedon ale ',
	pct:4.5,
	desc:'Smooth and fruity ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/536215_10151602297528745_137791391_n.jpg?oh=18820498ea9c3e82656a14665412736b&oe=572D8C30',
	link:'https://www.facebook.com/photo.php?fbid=10151602297528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Millenium Falcon ',
	pct:10.0,
	desc:'A mild IPA for the booze content ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/579366_10151602298783745_1455893061_n.jpg?oh=3b32cc2e66252bd4bdbfbc4b49357c88&oe=575DE926',
	link:'https://www.facebook.com/photo.php?fbid=10151602298783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew Belgo ',
	pct:4.5,
	desc:'Very belgian without the alcohol content to match ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/522428_10151602297908745_1068926570_n.jpg?oh=5601fe23dba8b3107deb4802444e20b2&oe=575E8443',
	link:'https://www.facebook.com/photo.php?fbid=10151602297908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murrays icon 2IPA ',
	pct:7.5,
	desc:'Too much IPA flavour ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/524217_10151602298053745_1174689076_n.jpg?oh=dddb128fac4e81e027777ddf9cb65897&oe=576D7B1B',
	link:'https://www.facebook.com/photo.php?fbid=10151602298053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boa\'s bind ',
	pct:5.0,
	desc:'A bit of an IPA flavour ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/10102_10151602299658745_104134259_n.jpg?oh=1fe34febbb4f6511faaa6fe180d28ee5&oe=573034AF',
	link:'https://www.facebook.com/photo.php?fbid=10151602299658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Larks foot ',
	pct:4.5,
	desc:'Pretty average ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10055_10151602300248745_313412556_n.jpg?oh=4956146f1f6a5091c254ef2a74801a59&oe=576CF0FB',
	link:'https://www.facebook.com/photo.php?fbid=10151602300248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton dry',
	pct:null,
	desc:'Decent Aussie beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/600269_10151602300508745_808991925_n.jpg?oh=53bf1ef522bca5704cb1e8fc1c0ef792&oe=5731F443',
	link:'https://www.facebook.com/photo.php?fbid=10151602300508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pure blonde ',
	pct:4.6,
	desc:'Easy drinking ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/157044_10151602300683745_1270951956_n.jpg?oh=432cacd1d7c170db3196bad232f434d5&oe=5727950B',
	link:'https://www.facebook.com/photo.php?fbid=10151602300683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict strong ale ',
	pct:7.2,
	desc:'A strong and average flavour. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/581629_10151602301103745_358423449_n.jpg?oh=d3cced4e2211d0f4dabf62dda947743b&oe=57656E86',
	link:'https://www.facebook.com/photo.php?fbid=10151602301103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier burning gold ',
	pct:4.7,
	desc:'Boring ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/551487_10151649173073745_178044172_n.jpg?oh=5b85daf5a211347ffbb09d125e3d8dab&oe=57263078',
	link:'https://www.facebook.com/photo.php?fbid=10151649173073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Korev ',
	pct:4.8,
	desc:'Like an off becks ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/48034_10151649174363745_1551458446_n.jpg?oh=1cee7d4335a48921310b24f8701c0c71&oe=572D13F2',
	link:'https://www.facebook.com/photo.php?fbid=10151649174363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply IPA ',
	pct:5.0,
	desc:'Just awful. Not even an IPA ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/998582_10151860439493745_805468360_n.jpg?oh=7baac55b945dff7e35d76947ce5405d9&oe=5765FD3D',
	link:'https://www.facebook.com/photo.php?fbid=10151860439493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious Brew ',
	pct:4.7,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/575573_10151649174188745_1546947418_n.jpg?oh=50f1e62397f77bf38a896c11e0956ced&oe=5769DCC5',
	link:'https://www.facebook.com/photo.php?fbid=10151649174188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven grand slam ale ',
	pct:4.0,
	desc:'A mild and average flavour ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/644743_10151649174378745_793600072_n.jpg?oh=7e9c28d9d0b81e1c6d06ca9826a040ec&oe=5761A897',
	link:'https://www.facebook.com/photo.php?fbid=10151649174378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old golden hen ',
	pct:4.1,
	desc:'Wouldn\'t have another ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/48062_10151649174963745_1079824641_n.jpg?oh=aebb7f30e4794bfc2304eeaad82da044&oe=5767E2AE',
	link:'https://www.facebook.com/photo.php?fbid=10151649174963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spitfire Kentish ale ',
	pct:4.5,
	desc:'Not too hard to drink ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/389000_10151649175308745_1470630421_n.jpg?oh=9630711cd15ec6d4dde2152548ff414d&oe=576E1615',
	link:'https://www.facebook.com/photo.php?fbid=10151649175308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier English ',
	pct:4.7,
	desc:'I\'m a fan of this mild ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/12402_10151649175493745_949451993_n.jpg?oh=cd41d6dd9de72b64eeedc27a4d8ce7a0&oe=572A2C9F',
	link:'https://www.facebook.com/photo.php?fbid=10151649175493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murphy\'s draught ',
	pct:4.0,
	desc:'Instantly gave me a headache and made my mouth taste like it was bleeding ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/310059_10151649175513745_267966869_n.jpg?oh=dcd6915371895cb1ff8ed3750dc0b84d&oe=572D339E',
	link:'https://www.facebook.com/photo.php?fbid=10151649175513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Frederic Robinson ginger ale ',
	pct:6.0,
	desc:'The worst ginger beer I\'ve tasted ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/486778_10151649175643745_1984274110_n.jpg?oh=cd2801ad654702d607b5a96c86d051dc&oe=576A09D8',
	link:'https://www.facebook.com/photo.php?fbid=10151649175643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wiltshire rum beer ',
	pct:5.0,
	desc:'Can\'t really taste the rum ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/935047_10151649176048745_1239205144_n.jpg?oh=f6415fb9c8f1cd3b22cf944ad30aa72d&oe=5727CB94',
	link:'https://www.facebook.com/photo.php?fbid=10151649176048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amigos ',
	pct:5.5,
	desc:'Tastes like agave ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/58112_10151649175958745_191846166_n.jpg?oh=48457dc444be64d678077652b153ee98&oe=572EB4B3',
	link:'https://www.facebook.com/photo.php?fbid=10151649175958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Früli.',
	pct:null,
	desc:'Not usually served in a martini glass. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/533653_10151396306263745_1857811158_n.jpg?oh=baa1c793fcdf06520a3a72769d71e595&oe=576E4E0D',
	link:'https://www.facebook.com/photo.php?fbid=10151396306263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans peche lambic beer ',
	pct:4.0,
	desc:'Tastes just like peach, not beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/71413_10151649176248745_1243782720_n.jpg?oh=0f2ad9825f1d9d551025dc934d2565eb&oe=576C0CAA',
	link:'https://www.facebook.com/photo.php?fbid=10151649176248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans strawberry lambic beer ',
	pct:4,
	desc:'Not too much strawberry. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/537448_10151461684443745_989699337_n.jpg?oh=8207eb30cdcd2379cbf287c95fc78b36&oe=572AA656',
	link:'https://www.facebook.com/photo.php?fbid=10151461684443745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vratislav ',
	pct:5.0,
	desc:'There\'s a reason I never saw this in the Czech Republic ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/923443_10151649176573745_311313356_n.jpg?oh=d1589df8d24321c21530677f91739aec&oe=5761D6B3',
	link:'https://www.facebook.com/photo.php?fbid=10151649176573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Remus ',
	pct:6.0,
	desc:'Pretty sure the guy on the label tea bagged this beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/401188_10151649176638745_2029777298_n.jpg?oh=c1771203694a6d929bc6a51668a17317&oe=572631D7',
	link:'https://www.facebook.com/photo.php?fbid=10151649176638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king light ale ',
	pct:3.0,
	desc:'Weak and tasteless. Pretty much a waste of my time. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/67496_10151649177163745_1520090166_n.jpg?oh=01ff6a2d88b85857be854f4669649bb3&oe=576CBE73',
	link:'https://www.facebook.com/photo.php?fbid=10151649177163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old salt quay ',
	pct:3.9,
	desc:'An easy drinking ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/407150_10151649177363745_297706272_n.jpg?oh=1da4d5df8f6b5b8f7316d9842badbdf0&oe=576CC3FE',
	link:'https://www.facebook.com/photo.php?fbid=10151649177363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser 66 ',
	pct:4.0,
	desc:'Slightly fruity ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/62626_10151649177378745_981383908_n.jpg?oh=ec6c8d323d2c191876f92d3b04052884&oe=572A6272',
	link:'https://www.facebook.com/photo.php?fbid=10151649177378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Okocim mocne ',
	pct:7.0,
	desc:'Sweet and a little bit wrong ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/301917_10151649177953745_1459071565_n.jpg?oh=3c39cd07d25aae8699a1fbdf848f0e2b&oe=575F4345',
	link:'https://www.facebook.com/photo.php?fbid=10151649177953745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Desperados ',
	pct:5.9,
	desc:'Kind of a girls beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/305829_10151649178053745_1663963670_n.jpg?oh=00a5062b0602d293255d3adc3552ce27&oe=5764A037',
	link:'https://www.facebook.com/photo.php?fbid=10151649178053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corona ',
	pct:4.5,
	desc:'Not sure why so many people drink this ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/484843_10151694516468745_911431623_n.jpg?oh=841371280541ae80a559af4bcd6a9ae1&oe=5767EE82',
	link:'https://www.facebook.com/photo.php?fbid=10151694516468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cuvana rum beer ',
	pct:5.5,
	desc:'Like an over sweet tequila beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/64844_10151798801973745_1700678415_n.jpg?oh=48a611483c86f73e764735158e407471&oe=576F88D4',
	link:'https://www.facebook.com/photo.php?fbid=10151798801973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masquerido',
	pct:null,
	desc:'Yet another tequila beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/374702_10151649178783745_739073810_n.jpg?oh=7e6d25aca340e1f0c80e4eef034aead3&oe=5763DD23',
	link:'https://www.facebook.com/photo.php?fbid=10151649178783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot ale ',
	pct:5.0,
	desc:'London pride with a bit more cigarette flavour ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/484477_10151649178223745_1831233561_n.jpg?oh=084cec9f29c71fd31c17a0a0a661d94d&oe=575C5633',
	link:'https://www.facebook.com/photo.php?fbid=10151649178223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wychwood brewery Goliath ',
	pct:4.2,
	desc:'The beer to slay a mighty thirst ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/431886_10151649178733745_149102435_n.jpg?oh=53901c37ec53651afe6b75ad7fd7ca5a&oe=5723DEAE',
	link:'https://www.facebook.com/photo.php?fbid=10151649178733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fuller\'s honey dew ',
	pct:5.0,
	desc:'Needs more honey ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/969679_10151694516258745_1883640684_n.jpg?oh=885339c1b498c6607f9b7809322c710e&oe=5733FCA2',
	link:'https://www.facebook.com/photo.php?fbid=10151694516258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales barnsey ',
	pct:4.5,
	desc:'Not too bitter ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/923297_10151694519768745_611137307_n.jpg?oh=b8158e8db63d83116c5d01aee3cd4c01&oe=5769E7BC',
	link:'https://www.facebook.com/photo.php?fbid=10151694519768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales gem ',
	pct:4.5,
	desc:'Not too bitter ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/423793_10151694518423745_774842906_n.jpg?oh=8ca9a58aa7bdb217e152d08563beae68&oe=576630BF',
	link:'https://www.facebook.com/photo.php?fbid=10151694518423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales wild hare ',
	pct:5.0,
	desc:'Lovely and sweet ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/935469_10151694516713745_1078233688_n.jpg?oh=74c33fad1d519685b9c40a688606fbce&oe=57642745',
	link:'https://www.facebook.com/photo.php?fbid=10151694516713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales Dark Side ',
	pct:4.0,
	desc:'A smooth dark ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/933900_10151694517968745_176829546_n.jpg?oh=6cfbba9cd58acaeb8de7cb75e2ba0fc7&oe=57298705',
	link:'https://www.facebook.com/photo.php?fbid=10151694517968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modelo ',
	pct:4.5,
	desc:'Alright ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/430992_10151694517623745_238159373_n.jpg?oh=3f2b1cf6be668b137243ca36b9ea19c6&oe=572828E2',
	link:'https://www.facebook.com/photo.php?fbid=10151694517623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Madog\'s ale ',
	pct:3.7,
	desc:'Almost like a mild IPA ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/931430_10151694519728745_1221673086_n.jpg?oh=d11c136edba561fdeb4ab78d5cb5f5d9&oe=57694699',
	link:'https://www.facebook.com/photo.php?fbid=10151694519728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ysgawen ',
	pct:4.0,
	desc:'Flowery ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/935261_10151694519833745_1401778168_n.jpg?oh=110fa8875e15c61389b40fcf1e01f100&oe=5761FFB1',
	link:'https://www.facebook.com/photo.php?fbid=10151694519833745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faxe ',
	pct:5.0,
	desc:'It would take a long time to get used to this ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/954667_10151694524273745_524236800_n.jpg?oh=2e8f98c197f997d6d9437e53db98d39e&oe=57713235',
	link:'https://www.facebook.com/photo.php?fbid=10151694524273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cwrw gwledd celebration ale',
	pct:4.2,
	desc:'I could enjoy a few of those ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/954753_10151694532288745_1231818486_n.jpg?oh=89b8977e0815c09a8a8f9ea3e91e470a&oe=576D6A40',
	link:'https://www.facebook.com/photo.php?fbid=10151694532288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields Unfiltered lager ',
	pct:4.1,
	desc:'A flavour I can\'t pick ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/931410_10151694532138745_1297410335_n.jpg?oh=171bdb87943f31919fe22d71e9257315&oe=57614776',
	link:'https://www.facebook.com/photo.php?fbid=10151694532138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields wheat beer ',
	pct:4.7,
	desc:'Very wheaty ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/947193_10151694532673745_349270642_n.jpg?oh=d5fc966aa07876e7ee2ab8de19a22335&oe=576D5A22',
	link:'https://www.facebook.com/photo.php?fbid=10151694532673745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam ',
	pct:4.8,
	desc:'Like a mild IPA. Tasty ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/983676_10151694533228745_78503103_n.jpg?oh=34d48b29b5e3a204ae7073be11807fed&oe=576E08BF',
	link:'https://www.facebook.com/photo.php?fbid=10151694533228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields hackney hopster ',
	pct:4.2,
	desc:'I should not have ordered this beer with only 15 minutes to drink it. Would be nice if I had more time to enjoy it ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1480719_10152147735493745_924183769_n.jpg?oh=416eeaf9ed356b2b6ea7561b49ef721c&oe=572DE1D1',
	link:'https://www.facebook.com/photo.php?fbid=10152147735493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dragon stout ',
	pct:7.5,
	desc:'So bad I can\'t believe they bottle this ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/968780_10151694532678745_1443848773_n.jpg?oh=795eba40ddcb5ba837621aca265486b5&oe=572AA5A0',
	link:'https://www.facebook.com/photo.php?fbid=10151694532678745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St mungo ',
	pct:null,
	desc:'Sweet sweet lager , but terrible warm  ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/942794_10151694532513745_577368504_n.jpg?oh=28a267cdc5ec3dfda469318259866256&oe=576DB7B1',
	link:'https://www.facebook.com/photo.php?fbid=10151694532513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs back hop ',
	pct:4.4,
	desc:'Throw up kind if awful ',
	score:1,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/308392_10151694533218745_306927282_n.jpg?oh=25536be7b4938ea700e30eaebef68c5c&oe=576645C8',
	link:'https://www.facebook.com/photo.php?fbid=10151694533218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham citra ',
	pct:4.6,
	desc:'Nice hops but otherwise average ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/1237019_10151929068538745_647712352_n.jpg?oh=60e9a387e0e17718a63eaa979a20592d&oe=576887A5',
	link:'https://www.facebook.com/photo.php?fbid=10151929068538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham scarlet macaw ',
	pct:4.8,
	desc:'Taught me the meaning of pugnacious ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/p480x480/1238244_10151929068473745_105586790_n.jpg?oh=d5fb04267eaa4f1fe2a20e60fb8d7327&oe=575D874E',
	link:'https://www.facebook.com/photo.php?fbid=10151929068473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham ales inferno ',
	pct:4.4,
	desc:'I think a beer called inferno needs chilli ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/942020_10151694533608745_2056877210_n.jpg?oh=f3694ff1bff29a31f07f788a5d3aa473&oe=576963D1',
	link:'https://www.facebook.com/photo.php?fbid=10151694533608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floris chocolat ',
	pct:4.2,
	desc:'Fizzy bad chocolate ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/945065_10151694533818745_1511619525_n.jpg?oh=86d4e25d3eb36e2aa5e1c153eeb7babd&oe=572FDEB7',
	link:'https://www.facebook.com/photo.php?fbid=10151694533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Williams joker IPA ',
	pct:5,
	desc:'Surprisingly good ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/935627_10151694535958745_491079820_n.jpg?oh=db2a84abaa1f513b47605a75f47e343e&oe=576D45BA',
	link:'https://www.facebook.com/photo.php?fbid=10151694535958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber rambler ',
	pct:4.8,
	desc:'Sweet, hoppy, average ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/969003_10151694535793745_176698104_n.jpg?oh=7b8dbd4a7fe9ee32792aee2925498c12&oe=572505A9',
	link:'https://www.facebook.com/photo.php?fbid=10151694535793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruddles ',
	pct:3.7,
	desc:'Never again ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/263308_10151694535858745_1991147618_n.jpg?oh=adabfc7d2049b1387bd47074d8b59a8c&oe=5730D9F0',
	link:'https://www.facebook.com/photo.php?fbid=10151694535858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great bustard ',
	pct:4.8,
	desc:'Black and vomity ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/485453_10151694536548745_106155626_n.jpg?oh=a6be576c0b59a882fc2143ec737dbd3d&oe=576F38A1',
	link:'https://www.facebook.com/photo.php?fbid=10151694536548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Efes ',
	pct:5.0,
	desc:'The best turkey has to offer? ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/261692_10151694536343745_1620675105_n.jpg?oh=c6efc0ca359c9034eb692f13cdf28f8c&oe=5766E798',
	link:'https://www.facebook.com/photo.php?fbid=10151694536343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perge ',
	pct:5.0,
	desc:'Much better than efes ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1005742_10151798801533745_634899063_n.jpg?oh=db66774b5db29df38aafd86604cf6a71&oe=5727B19F',
	link:'https://www.facebook.com/photo.php?fbid=10151798801533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Voll-damn doble Malta ',
	pct:7.2,
	desc:'Quite malty ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/293097_10151694536623745_633779128_n.jpg?oh=37f14c10dd49afdfa9759f2237a09425&oe=572EF865',
	link:'https://www.facebook.com/photo.php?fbid=10151694536623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo ',
	pct:4.8,
	desc:'Easy drinking ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/264403_10151694536708745_1298889096_n.jpg?oh=bc05e21e4042205ed27304df7c63ce93&oe=576EEEE3',
	link:'https://www.facebook.com/photo.php?fbid=10151694536708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella Galicia ',
	pct:5.5,
	desc:'A bit more malty than the regular ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/988265_10151798820448745_1825630126_n.jpg?oh=b34b708d63a8484dcc390cedb01bc3cf&oe=575D7A43',
	link:'https://www.facebook.com/photo.php?fbid=10151798820448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella ',
	pct:null,
	desc:'Tastes a little bit burnt ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/248044_10151694532898745_1441204919_n.jpg?oh=47ea034c89513bc6413d88f9b7bdefe2&oe=57246A1A',
	link:'https://www.facebook.com/photo.php?fbid=10151694532898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mahou.',
	pct:null,
	desc:'A very tasty lager. Could drink these all day ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/150945_10151461683838745_503756954_n.jpg?oh=84b6905148877af320fa4adc16639886&oe=576C2F78',
	link:'https://www.facebook.com/photo.php?fbid=10151461683838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel. ',
	pct:5.4,
	desc:'A beer for all occasions. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/22402_10151315677898745_961047009_n.jpg?oh=4b29df6a1d5426dffb4dce4e5a3124ef&oe=57716854',
	link:'https://www.facebook.com/photo.php?fbid=10151315677898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keler',
	pct:null,
	desc:'Fantastic after a long day ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/64607_10151798820233745_1697119288_n.jpg?oh=4cf00fdd1be44b737dd1960c369d0fcd&oe=572574CF',
	link:'https://www.facebook.com/photo.php?fbid=10151798820233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ambar ',
	pct:5.2,
	desc:'Session beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/540216_10151798819258745_1593913527_n.jpg?oh=f288c64c587a4b6e4b03835561d78d47&oe=5770FE84',
	link:'https://www.facebook.com/photo.php?fbid=10151798819258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo gran reserva ',
	pct:6.4,
	desc:'A bit malty but mostly smooth ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/944493_10151798819313745_233015169_n.jpg?oh=08f46f1efe6533b8ec2d24034f0908ff&oe=575EBF12',
	link:'https://www.facebook.com/photo.php?fbid=10151798819313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koenigsbier ',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/983885_10151694536943745_1632093000_n.jpg?oh=173843232944546ee89792fee457a00a&oe=57692512',
	link:'https://www.facebook.com/photo.php?fbid=10151694536943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quilmes ',
	pct:4.9,
	desc:'Average ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/65636_10151694536878745_1850782094_n.jpg?oh=f41749a0fa279cf54af83bdcfb123152&oe=57651D77',
	link:'https://www.facebook.com/photo.php?fbid=10151694536878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blas trigo ',
	pct:6.0,
	desc:'A strange taste. Almost like a lambic. Even enjoyed by non beer drinkers. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1011466_10151798821318745_54743244_n.jpg?oh=8f9270304d77e0d9e20968ccbd54f51c&oe=5767138C',
	link:'https://www.facebook.com/photo.php?fbid=10151798821318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faro Lambic ',
	pct:4.5,
	desc:'A kind of tangy flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/252348_10151694537033745_65345877_n.jpg?oh=f89c33a1612dc452710796724bf789b5&oe=5727C5DA',
	link:'https://www.facebook.com/photo.php?fbid=10151694537033745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skull splitter ',
	pct:8.5,
	desc:'Every mouthful is like being punched in the neck. A mans bev. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/292440_10151694537253745_171550675_n.jpg?oh=8277c6003beec9eff076dbc2d8fbb846&oe=576F2090',
	link:'https://www.facebook.com/photo.php?fbid=10151694537253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sagres Bohemia ',
	pct:6.2,
	desc:'Easy drinking for the strength ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/261740_10151694537308745_1696408161_n.jpg?oh=daf4bfbe1faf77053516f103bfc974bd&oe=57673775',
	link:'https://www.facebook.com/photo.php?fbid=10151694537308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious original pale ale ',
	pct:3.9,
	desc:'Flowery ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/943639_10151798797268745_543942826_n.jpg?oh=b3c541456fdcd24aa327c5dfaf9d593c&oe=576D17F5',
	link:'https://www.facebook.com/photo.php?fbid=10151798797268745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Centennial IPA ',
	pct:7.2,
	desc:'Slightly too strong ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1070104_10151798797103745_60498930_n.jpg?oh=6458e2ca02a3c5fcc4bed2fb47041779&oe=5727CD9F',
	link:'https://www.facebook.com/photo.php?fbid=10151798797103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wild beer epic saison ',
	pct:5.0,
	desc:'Different but not very good ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/73345_10151798799468745_1877528478_n.jpg?oh=9a7e039446c7e26844b8b10a39448efd&oe=5726AAB0',
	link:'https://www.facebook.com/photo.php?fbid=10151798799468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The wild beer co Bliss ',
	pct:6.0,
	desc:'Weird as hell. Is that ginger ? ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1001179_10151798797773745_1783696922_n.jpg?oh=be4e0c9539e9ca766d95a4d3e3638493&oe=576AF0F3',
	link:'https://www.facebook.com/photo.php?fbid=10151798797773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Porter ',
	pct:6.5,
	desc:'Unexpectedly smooth ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1075890_10151798799218745_348684892_n.jpg?oh=c581ec2c22f51cdf847822a5422849a1&oe=5724F3E6',
	link:'https://www.facebook.com/photo.php?fbid=10151798799218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'01|02 ',
	pct:5.4,
	desc:'Plain ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/64066_10151798799093745_1495677337_n.jpg?oh=4d41ae083c7c45f9be308cd02edc6524&oe=576A7983',
	link:'https://www.facebook.com/photo.php?fbid=10151798799093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu winterbier ',
	pct:5.5,
	desc:'Not sure what it has to do with winter. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/74388_10151428532683745_883935005_n.jpg?oh=35f22cda15acb0f040e7ce6c56a83895&oe=576A31C3',
	link:'https://www.facebook.com/photo.php?fbid=10151428532683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Benediktiner ',
	pct:5.4,
	desc:'',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/598459_10151331653573745_57128822_n.jpg?oh=fee0f885c0f0561373435bce65d43ff5&oe=5763D9BC',
	link:'https://www.facebook.com/photo.php?fbid=10151331653573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spaten',
	pct:null,
	desc:'Average German beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/602999_10151798820463745_26311115_n.jpg?oh=d6783b7e8c3b186b1427036d8e5c1062&oe=5767D569',
	link:'https://www.facebook.com/photo.php?fbid=10151798820463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paulaner',
	pct:null,
	desc:'Still not a fan of wheat beer. Also not happy when this doesn\'t come in a stein. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/542113_10151428531848745_1285156274_n.jpg?oh=20179bd3f988d67b9c6802cd9e284fda&oe=576A3AB0',
	link:'https://www.facebook.com/photo.php?fbid=10151428531848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Erdinger.',
	pct:null,
	desc:'A German classic. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/312687_10151396304703745_1460506547_n.jpg?oh=d796e266946b4356b8fc4f3cbae58965&oe=575E2AA4',
	link:'https://www.facebook.com/photo.php?fbid=10151396304703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lowenbrau',
	pct:null,
	desc:'An old favourite. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1006322_10151854990003745_1367385970_n.jpg?oh=6bb153dc0494288e7102592503464d82&oe=5731E42B',
	link:'https://www.facebook.com/photo.php?fbid=10151854990003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grafenwalder ',
	pct:4.8,
	desc:'Plain and easy to drink. Also cheap. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/72182_10151649174918745_777169044_n.jpg?oh=749b256623fdb17a18ce3690f13746d2&oe=5731D943',
	link:'https://www.facebook.com/photo.php?fbid=10151649174918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kostritzer',
	pct:null,
	desc:'Milder than a dark beer normally is ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/1920083_10152293088098745_591597385_n.jpg?oh=dab65a77c6b7e6e5283a562f3b9f4578&oe=5763331A',
	link:'https://www.facebook.com/photo.php?fbid=10152293088098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rheinbacher. ',
	pct:null,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/644125_10151296241128745_1291306382_n.jpg?oh=442b0d8d968b3212ba355ac58b95fe6c&oe=576B6336',
	link:'https://www.facebook.com/photo.php?fbid=10151296241128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogaarden',
	pct:null,
	desc:'Not a white beer fan. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/312594_10151396305888745_722386464_n.jpg?oh=346d011fdd85defa6cf13d4b4400b437&oe=572E545A',
	link:'https://www.facebook.com/photo.php?fbid=10151396305888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bitburger',
	pct:null,
	desc:'Not my favourite 1L beer. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/45381_10151798800163745_1715529842_n.jpg?oh=8784aab71287f6ed520061d7e6974333&oe=576A5856',
	link:'https://www.facebook.com/photo.php?fbid=10151798800163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fischer\'s stiftungbräu helles ',
	pct:5.1,
	desc:'Could drink this all day ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1016879_10151798800588745_1406598038_n.jpg?oh=349828ef8dc2eaf4574ee93fcf0f9afd&oe=57614222',
	link:'https://www.facebook.com/photo.php?fbid=10151798800588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rothaus Pils',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/263281_10151428533418745_1142185316_n.jpg?oh=f8d49d3e2478d04de6fdf223e2e5980e&oe=572C7080',
	link:'https://www.facebook.com/photo.php?fbid=10151428533418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Konig pils ',
	pct:4.9,
	desc:'Standard German ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/1743537_10152293088048745_37653094_n.jpg?oh=517dc0c22c0a23736d3a8290d53d88a3&oe=572EA987',
	link:'https://www.facebook.com/photo.php?fbid=10152293088048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau',
	pct:null,
	desc:'Oktoberfest goodness ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/2771_10152001625293745_732438079_n.jpg?oh=f524a29b55bdd4484853d2b990fac44b&oe=5732B355',
	link:'https://www.facebook.com/photo.php?fbid=10152001625293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hacker-Pschorr',
	pct:null,
	desc:'Oktoberfest goodness ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1376515_10152001625798745_1787795583_n.jpg?oh=8100a070561d679440ae2f58f7ed5725&oe=5761884A',
	link:'https://www.facebook.com/photo.php?fbid=10152001625798745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'DAB ',
	pct:5.0,
	desc:'Disappointing ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/525742_10151860439343745_1260154559_n.jpg?oh=eec78765f8442aeca8ea73321135b73b&oe=572CF4B5',
	link:'https://www.facebook.com/photo.php?fbid=10151860439343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Augustinerbrau ',
	pct:5.2,
	desc:'Alright ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1375936_10152001624743745_1619318099_n.jpg?oh=a3998468561ac0b239812dd685d34df0&oe=57675C92',
	link:'https://www.facebook.com/photo.php?fbid=10152001624743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxlrainer',
	pct:null,
	desc:'Not too bad ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1385612_10152001625738745_155180417_n.jpg?oh=26a5818f1570458be167c8f12035a4d2&oe=575F949F',
	link:'https://www.facebook.com/photo.php?fbid=10152001625738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Yakima Red ',
	pct:4.1,
	desc:'Pleasant ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/992917_10151798801088745_1382376594_n.jpg?oh=7597586dc57a461c4ceffcf4c58f59fd&oe=573440EA',
	link:'https://www.facebook.com/photo.php?fbid=10151798801088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Stout ',
	pct:4.5,
	desc:'I could have another ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1069371_10151798801138745_1255664168_n.jpg?oh=c1ed8d3f899fda5ae75e8f8142bc90d2&oe=57252A05',
	link:'https://www.facebook.com/photo.php?fbid=10151798801138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Pilsner ',
	pct:4.4,
	desc:'Not my favourite pilsner ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/999024_10151798817478745_821421302_n.jpg?oh=23bf81e44b42955875390ead3b8b4c6d&oe=57684C48',
	link:'https://www.facebook.com/photo.php?fbid=10151798817478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Charlie\'s ',
	pct:5.0,
	desc:'I think charlie may be homeless ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/374377_10151798802143745_204094323_n.jpg?oh=8987d953b0d08fe56721536f5ac581f5&oe=5771B025',
	link:'https://www.facebook.com/photo.php?fbid=10151798802143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Spindrift ',
	pct:5.0,
	desc:'Kind of a pale ale taste. The first time I\'ve seen a beer in a blue bottle ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1069901_10151798803058745_68050022_n.jpg?oh=e478147cce890fd0677e1c45ad90a675&oe=576BB487',
	link:'https://www.facebook.com/photo.php?fbid=10151798803058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hook pilsner ',
	pct:5.3,
	desc:'A mild flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/1069935_10151798817208745_1577449594_n.jpg?oh=e38a5f866c8a9e1afb113a4051bd9b8a&oe=572E5FDB',
	link:'https://www.facebook.com/photo.php?fbid=10151798817208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark Lord ',
	pct:5.0,
	desc:'Really needs a lord of the rings reference on the label. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/935039_10151798818428745_2074781709_n.jpg?oh=3146c6152603ce3a5bc804dacd6b2600&oe=5727EE94',
	link:'https://www.facebook.com/photo.php?fbid=10151798818428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moosehead ',
	pct:5.0,
	desc:'Would take some getting used to ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1000219_10151798818558745_1372926994_n.jpg?oh=3ed62df240cceb24a3d4029a3aecd5c7&oe=575CBAAC',
	link:'https://www.facebook.com/photo.php?fbid=10151798818558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Broadside ',
	pct:4.7,
	desc:'The bitterness takes some time to get used to ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1006000_10151798819328745_2080424026_n.jpg?oh=d88c0b75885ae8f2b2b8f43e248b9d4c&oe=57648AE6',
	link:'https://www.facebook.com/photo.php?fbid=10151798819328745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstök Pale ale. ',
	pct:5.6,
	desc:'A nice pale ale with a hint of volcano. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/559118_10151798821313745_705644987_n.jpg?oh=42eaa46eadacba316639f852062dd3d0&oe=57304A5E',
	link:'https://www.facebook.com/photo.php?fbid=10151798821313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstok toasted porter ',
	pct:6.0,
	desc:'A good morning beer. With bacon and eggs. Also beer #300! ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1069403_10151798927653745_683815255_n.jpg?oh=8fe2601d7231350d3845ff8366d16b79&oe=57643816',
	link:'https://www.facebook.com/photo.php?fbid=10151798927653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leo ',
	pct:5.0,
	desc:'Easy drinking, great in hot weather ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/1947644_10152280801063745_1171315228_n.jpg?oh=0926551c558b9c8f5e53531847b31a28&oe=576C17BB',
	link:'https://www.facebook.com/photo.php?fbid=10152280801063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tiger',
	pct:null,
	desc:'A good choice ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/549260_10151563946038745_1772775906_n.jpg?oh=a4f28dc120105125d50d44405d8ca490&oe=575EDEAE',
	link:'https://www.facebook.com/photo.php?fbid=10151563946038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chang export ',
	pct:5.0,
	desc:'Take the regular low quality chang and add way too much malt ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1969273_10152280801073745_1139224814_n.jpg?oh=9fcd1ae9a7a3f5b21fe7881a16301639&oe=572B24E5',
	link:'https://www.facebook.com/photo.php?fbid=10152280801073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Singha 5.',
	pct:05,
	desc:'Served in the authentic Thai way. With a glass filled with ice. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/522410_10151602279523745_2144170744_n.jpg?oh=951561bd9e2de4fd29e142a5d4c8b775&oe=5764B293',
	link:'https://www.facebook.com/photo.php?fbid=10151602279523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao ',
	pct:5.0,
	desc:'Fairly standard lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/553908_10152001638218745_428160786_n.jpg?oh=cd32413e89f280c212e2536b163ac8c8&oe=576BDEBD',
	link:'https://www.facebook.com/photo.php?fbid=10152001638218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tsingtao ',
	pct:4.7,
	desc:'China standard ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/968819_10151798821173745_1903896463_n.jpg?oh=90e98d3133dc77e4d4f909ce33258305&oe=5732263B',
	link:'https://www.facebook.com/photo.php?fbid=10151798821173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sapporo ',
	pct:5.0,
	desc:'Solid can, solid beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1002989_10151798803018745_1022069808_n.jpg?oh=aa92724523fb52956855027ee99e375d&oe=575D0327',
	link:'https://www.facebook.com/photo.php?fbid=10151798803018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino red rice ',
	pct:7.0,
	desc:'A strange taste, takes a bit to get used to ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/q82/p480x480/1157401_10151888670423745_99231248_n.jpg?oh=950f097eb037daff05d6ed720963ebae&oe=5727A4EB',
	link:'https://www.facebook.com/photo.php?fbid=10151888670423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Ginger ale ',
	pct:8.0,
	desc:'A mild ginger taste. The warming sensation makes me think this isn\'t meant for summer. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/942413_10151798927708745_1675671077_n.jpg?oh=5c37c1d523548ab07e6000c1e59fd3f7&oe=5731FBBD',
	link:'https://www.facebook.com/photo.php?fbid=10151798927708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino pale ale ',
	pct:5.5,
	desc:'Surprisingly good. Wish I bought more than one ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/1011658_10151854990103745_2038671130_n.jpg?oh=42555f9c44b8d04596bd08ff07479ce1&oe=576E2508',
	link:'https://www.facebook.com/photo.php?fbid=10151854990103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi',
	pct:null,
	desc:'A classic ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/537524_10151563945728745_1100203805_n.jpg?oh=0a69e3592b28996b282c34033cb31d7b&oe=575CC6F4',
	link:'https://www.facebook.com/photo.php?fbid=10151563945728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino japaneses classic ale ',
	pct:7.0,
	desc:'Such a letdown after the pale ale ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1185821_10151854990343745_429136882_n.jpg?oh=f8bdc00d4b9d25ffdc3fd010b7a33a0c&oe=57639405',
	link:'https://www.facebook.com/photo.php?fbid=10151854990343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Nest Commemorative Ale ',
	pct:8,
	desc:'The perfect beer for new years. Or any other time ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/970685_10151854991538745_1076029058_n.jpg?oh=e92e7eb7c23aeede2234e3074d4e5c17&oe=572B08D0',
	link:'https://www.facebook.com/photo.php?fbid=10151854991538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoopers Ginger brew ',
	pct:4.0,
	desc:'Exactly how a ginger beer should taste ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1185949_10151854991548745_379811355_n.jpg?oh=bf97219bebf81d0cc6f03098843447b9&oe=57316513',
	link:'https://www.facebook.com/photo.php?fbid=10151854991548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Strongroom dark ',
	pct:4.5,
	desc:'Rather creamy ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/1175248_10151860440378745_2027227367_n.jpg?oh=9febf2500d8c51beee709a0305880bf8&oe=576A8EB4',
	link:'https://www.facebook.com/photo.php?fbid=10151860440378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boondoggle blonde ale ',
	pct:5.0,
	desc:'Some sort of quasi good beer',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/970910_10151860440438745_1474360215_n.jpg?oh=9fbce299c563597f1ef7f4f4fd61a7b2&oe=57272A03',
	link:'https://www.facebook.com/photo.php?fbid=10151860440438745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Banks caribbean lager ',
	pct:4.7,
	desc:'Mild and smooth ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1157507_10151860440488745_679128594_n.jpg?oh=4fdd0b1fe3f03290e22964a25e5b0536&oe=5767CC91',
	link:'https://www.facebook.com/photo.php?fbid=10151860440488745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nutty black ',
	pct:3.9,
	desc:'Not as awful as expected ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1173809_10151860441013745_1894761382_n.jpg?oh=01c6d7e7668e0b8a56892f31c6ea15f0&oe=572DCD23',
	link:'https://www.facebook.com/photo.php?fbid=10151860441013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ESB ',
	pct:5.5,
	desc:'A tangy off flavour. Like someone dipped their balls in the keg. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/999589_10151860441473745_1970036928_n.jpg?oh=5e2a15eb516099bbb508972212f5963f&oe=5732A5EA',
	link:'https://www.facebook.com/photo.php?fbid=10151860441473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hylder Blonde ',
	pct:4.2,
	desc:'A little bit too much flower ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/542217_10151860441663745_480799893_n.jpg?oh=b3542c7d5d590f2a18453b1f1f3004ed&oe=5766B91D',
	link:'https://www.facebook.com/photo.php?fbid=10151860441663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The big inflatable cowboy hat ',
	pct:10.5,
	desc:'Flavourful without being too strong ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/970683_10151860442323745_1389595186_n.jpg?oh=c454dc670212ff6e182f817619764e24&oe=572F2651',
	link:'https://www.facebook.com/photo.php?fbid=10151860442323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Long hammer IPA ',
	pct:5.9,
	desc:'Smash the hammer! ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1173745_10151860442463745_736142328_n.jpg?oh=72eff902e829b1f5c21b655acd8946ab&oe=576E0E74',
	link:'https://www.facebook.com/photo.php?fbid=10151860442463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage light ale ',
	pct:3.2,
	desc:'Why did I even buy this tiny weak beer? ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1003533_10151860443063745_1669379479_n.jpg?oh=b4b175d473a0d4a48e81bafda380e7c7&oe=573146A9',
	link:'https://www.facebook.com/photo.php?fbid=10151860443063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden Hells ',
	pct:4.6,
	desc:'Not too bad. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1469967_10152147735243745_1919940570_n.jpg?oh=14814a15c4f8a4b03f71d1835550a627&oe=577045A0',
	link:'https://www.facebook.com/photo.php?fbid=10152147735243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden gentlemans wit ',
	pct:4.3,
	desc:'I remember nothing about this beer. Must have been a good night ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/1176312_10151860443023745_856797078_n.jpg?oh=82305955770b5199748dc7bc1705659d&oe=576C0C9D',
	link:'https://www.facebook.com/photo.php?fbid=10151860443023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point pale ale ',
	pct:5.4,
	desc:'Pretty mundane ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1185998_10151860443158745_158593717_n.jpg?oh=9f143594b7f1fcb4e14dbca00aba11f0&oe=576BF7E9',
	link:'https://www.facebook.com/photo.php?fbid=10151860443158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caribbean scene',
	pct:null,
	desc:'Not worth getting a second one. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1185783_10151860443868745_1132451963_n.jpg?oh=38e506ff04d1fd319b12cb072073c435&oe=576C8181',
	link:'https://www.facebook.com/photo.php?fbid=10151860443868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cusquena ',
	pct:5.0,
	desc:'Goes badly with fajitas. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/555522_10151860443808745_1012342431_n.jpg?oh=c1ee7e3e7e5c2665194df3b90fea8619&oe=57638091',
	link:'https://www.facebook.com/photo.php?fbid=10151860443808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Utenos classic ',
	pct:5.2,
	desc:'Stock standard beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1175115_10151860444553745_1702342354_n.jpg?oh=574b6946e4ffac35a04d048972e08b3f&oe=57258B2F',
	link:'https://www.facebook.com/photo.php?fbid=10151860444553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk ',
	pct:4.8,
	desc:'An all round average beer. But with a cool bottle ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1185029_10151860445333745_1637600629_n.jpg?oh=1b6ba5a6208b578253ccdee0be67424c&oe=57659C78',
	link:'https://www.facebook.com/photo.php?fbid=10151860445333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu ',
	pct:4.3,
	desc:'Windmills are awesome ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1235059_10151929073993745_1887796007_n.jpg?oh=982d1c8255b818f0ff46896b1bbb851c&oe=576C33E4',
	link:'https://www.facebook.com/photo.php?fbid=10151929073993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Baltika 7 ',
	pct:5.5,
	desc:'Really hard to drink ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/65647_10151694536248745_526286442_n.jpg?oh=50e3de7889430353e72eef91466e5ee4&oe=576D20AD',
	link:'https://www.facebook.com/photo.php?fbid=10151694536248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk Temhoe ',
	pct:4.7,
	desc:'The purple label made me expect poison. But it\'s actually a decent beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1390556_10152001638343745_1466512598_n.jpg?oh=f6b2abd6a5d606e3a859836060bb3c9b&oe=572606E6',
	link:'https://www.facebook.com/photo.php?fbid=10152001638343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'злашен даб ',
	pct:4.5,
	desc:'An interesting flavour, but not one I really like ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/9699_10151602279038745_1469910721_n.jpg?oh=9793ea14decc603843a9b7df6202b440&oe=572665C9',
	link:'https://www.facebook.com/photo.php?fbid=10151602279038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zelta premium ',
	pct:5.2,
	desc:'I like where this beer is going ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1151012_10151888666008745_854242907_n.jpg?oh=4da535f907ee02cfc9c37710ca5156d9&oe=57613ED1',
	link:'https://www.facebook.com/photo.php?fbid=10151888666008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cesu premium ',
	pct:5.2,
	desc:'A bit wrong ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1174664_10151888665988745_1905015784_n.jpg?oh=cdf3a72dfcb7272cb3575414919cf706&oe=572E6302',
	link:'https://www.facebook.com/photo.php?fbid=10151888665988745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams southwold innovation ',
	pct:6.7,
	desc:'A nice pale but just a bit of wrongness ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1238809_10151888666788745_1212313484_n.jpg?oh=07d8ff842bf872394ff297232932c10e&oe=576D0D73',
	link:'https://www.facebook.com/photo.php?fbid=10151888666788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Czech Norris ',
	pct:6.7,
	desc:'Not the roundhouse kick of awesome I expected ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/1176212_10151888667313745_1242801185_n.jpg?oh=7faad057b80eb315e6c554769856a45e&oe=576EE06A',
	link:'https://www.facebook.com/photo.php?fbid=10151888667313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'F.X. Buckley ',
	pct:3.8,
	desc:'Ges ugly really quick ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1174601_10151888668333745_2024277149_n.jpg?oh=192f0994271e4ffed3d59d9c265eb629&oe=576BBF4D',
	link:'https://www.facebook.com/photo.php?fbid=10151888668333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris pilzens ',
	pct:4.2,
	desc:'Lacks any real flavour ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/l/t1.0-0/p480x480/1238101_10151888670483745_714083820_n.jpg?oh=81b99837fee3ae5de23a8ede42b907ef&oe=572DA24A',
	link:'https://www.facebook.com/photo.php?fbid=10151888670483745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Butauty ',
	pct:5.5,
	desc:'Malty crapness. Why make such a big bottle for a crap beer ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1185491_10151888671543745_1781451969_n.jpg?oh=4dfc915aa0befc82b20c42b6007c9162&oe=572AE666',
	link:'https://www.facebook.com/photo.php?fbid=10151888671543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brakspear Oxford gold ',
	pct:4.6,
	desc:'Did not deliver what the label promised ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/76895_10151929068333745_1039559147_n.jpg?oh=8c22b6b50fa6a54a0d6955ea35effad3&oe=5764BC57',
	link:'https://www.facebook.com/photo.php?fbid=10151929068333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Betty Stogs ',
	pct:4.0,
	desc:'Tastes pretty much as you would expect from the name ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/13890_10151929069588745_726766227_n.jpg?oh=d059ae75ff4de0a3061a849ffd120b88&oe=576138F6',
	link:'https://www.facebook.com/photo.php?fbid=10151929069588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Golden Ale ',
	pct:4.7,
	desc:'One of those brewing companies that thinks traditional means better ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/37805_10151929069633745_1476415530_n.jpg?oh=f0deed9e86b368a6c082b7c59286e88d&oe=572D3495',
	link:'https://www.facebook.com/photo.php?fbid=10151929069633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Best Bitter ',
	pct:3.7,
	desc:'I\'ll never understand what people see in a bitter ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1233387_10151929070703745_1019382535_n.jpg?oh=a68cc1e739db18c924d303cc338de0ae&oe=5724BABB',
	link:'https://www.facebook.com/photo.php?fbid=10151929070703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Mild ',
	pct:3.7,
	desc:'This company seems incapable of making a good beer ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1185966_10151929070968745_2126426266_n.jpg?oh=2ad6feb0af655815968a99708f219bee&oe=5771291D',
	link:'https://www.facebook.com/photo.php?fbid=10151929070968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s ruby red ale ',
	pct:4.3,
	desc:'Probably the best of a bad bunch ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/1233970_10151929073588745_1740349447_n.jpg?oh=65ee55d4716da2c3d61c913a56574292&oe=572FE3E8',
	link:'https://www.facebook.com/photo.php?fbid=10151929073588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ekstra ',
	pct:5.2,
	desc:'So much better than expected considering it\'s an extra ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1146736_10151860444768745_544406358_n.jpg?oh=9e4f7a29386b16e826a476a77885c117&oe=573401FF',
	link:'https://www.facebook.com/photo.php?fbid=10151860444768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ',
	pct:4.6,
	desc:'Finally found some Lithuanian beer. A very smooth lager. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1185772_10151860443958745_1792378907_n.jpg?oh=3db6735a8f805812af8836a93f61b9ee&oe=57341958',
	link:'https://www.facebook.com/photo.php?fbid=10151860443958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltijos ',
	pct:5.8,
	desc:'A little bit too bitter for my taste ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1208565_10151929069708745_1120619541_n.jpg?oh=53581de87df92ec0a03bf54642cae939&oe=575D2CE9',
	link:'https://www.facebook.com/photo.php?fbid=10151929069708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltas white ',
	pct:5.0,
	desc:'Can\'t get over the bite of wheat beers ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/563535_10151929074098745_379750960_n.jpg?oh=eecefcb4690ef6e5741f0aa0c90c7112&oe=575C8C82',
	link:'https://www.facebook.com/photo.php?fbid=10151929074098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys old port ale ',
	pct:5.6,
	desc:'A lot smoother than expected ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1234836_10152293116538745_626754395_n.jpg?oh=36533cbc14109824df2a7868d4a99ae7&oe=576C7742',
	link:'https://www.facebook.com/photo.php?fbid=10152293116538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Luksus ',
	pct:5.2,
	desc:'Yep, it’s a lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1484218_10152147730358745_1572080029_n.jpg?oh=1dfdf9673f7a73c97dd9a3c3ccb56629&oe=57612947',
	link:'https://www.facebook.com/photo.php?fbid=10152147730358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kanapinis ',
	pct:5.3,
	desc:'Malty goodness in a great bottle ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1186120_10151860445063745_1601572346_n.jpg?oh=50910576863d0907fc0e03ba01145c74&oe=5730DF4E',
	link:'https://www.facebook.com/photo.php?fbid=10151860445063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keptinis ',
	pct:5.7,
	desc:'Not at all excited by this. Not even a semi ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1240201_10151929073793745_2035177594_n.jpg?oh=fed25f9596cdc1783663c8a2c526c8eb&oe=575F375A',
	link:'https://www.facebook.com/photo.php?fbid=10151929073793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aladaris Gaisais ',
	pct:5.0,
	desc:'Another quality baltic beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/603023_10152001619908745_1091913425_n.jpg?oh=c2d2151f40ad43d58575b2ed8b5d3bae&oe=575C6802',
	link:'https://www.facebook.com/photo.php?fbid=10152001619908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Porteris ',
	pct:6.8,
	desc:'Not a bad porter ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1891209_10152293116448745_1394991978_n.jpg?oh=3d1e2ae0f9f7def47320c208b597c835&oe=57273AFD',
	link:'https://www.facebook.com/photo.php?fbid=10152293116448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas engleman ',
	pct:5.2,
	desc:'Unimpressive ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1176307_10151888665863745_1280335301_n.jpg?oh=7dce7162e4d6dc1dfc1b9749d7e0cb09&oe=57711EF2',
	link:'https://www.facebook.com/photo.php?fbid=10151888665863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Bravoro ',
	pct:5.2,
	desc:'A little bit wrong ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1236122_10151929070963745_949716381_n.jpg?oh=5e5a2595cf08a5b4b3aa6315eed427fc&oe=5769B1FD',
	link:'https://www.facebook.com/photo.php?fbid=10151929070963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Jubiliejinis 160 ',
	pct:5.3,
	desc:'Nice and smooth, and in a cool bottle ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1385338_10152001620008745_462276383_n.jpg?oh=243153ecdcf8b1b33b70f2ec0a11b1ea&oe=5731EFEC',
	link:'https://www.facebook.com/photo.php?fbid=10152001620008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deviant dales pale ale ',
	pct:8,
	desc:'Light for the strength ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/526556_10151929072623745_428217529_n.jpg?oh=5794a0a150f0fcecc3bd9778800f4008&oe=5764DA18',
	link:'https://www.facebook.com/photo.php?fbid=10151929072623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mama\'s Little Yella Pils ',
	pct:5.3,
	desc:'An easy drinking pils ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1187248_10151929072773745_1085795541_n.jpg?oh=41f8c35fa47430062683ddc6681cfd2a&oe=576DFAD7',
	link:'https://www.facebook.com/photo.php?fbid=10151929072773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'McEwans Export ',
	pct:4.5,
	desc:'Not as rubbish as the the can looks ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1384073_10152001619653745_1344996131_n.jpg?oh=aba51ca14edf5adc4765907d33e8b50f&oe=575F2838',
	link:'https://www.facebook.com/photo.php?fbid=10152001619653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cave creek chill beer ',
	pct:4.2,
	desc:'A nice balance of chilli and beer. And yes that is a whole chilli in the bottle ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1378394_10152001620853745_543682046_n.jpg?oh=831c4ccbd2e93860986490cf711ec0e8&oe=5770ECD7',
	link:'https://www.facebook.com/photo.php?fbid=10152001620853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan dubbel ',
	pct:6.4,
	desc:'Strong chocolate taste but takes a while to get used to ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/563194_10152001621188745_696002352_n.jpg?oh=109d3f2f9dc747c46c86aa7015c8ad94&oe=575FB84A',
	link:'https://www.facebook.com/photo.php?fbid=10152001621188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan strong golden belgian ale ',
	pct:8.0,
	desc:'A bit harsh for what I would call a golden ale. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/1497799_10152147732653745_1203656587_n.jpg?oh=0927085eaaf05617e216d777064914cc&oe=57600A41',
	link:'https://www.facebook.com/photo.php?fbid=10152147732653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan Quad ',
	pct:11.2,
	desc:'One of the strangest beers I’ve tasted. Like trying to cross a lambic with a stout.',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1486770_10152147730063745_1162438061_n.jpg?oh=c3023047dfcc840573f668e4a92c352a&oe=5761C1FD',
	link:'https://www.facebook.com/photo.php?fbid=10152147730063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan single ',
	pct:4.8,
	desc:'Nice label, shit beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/1376370_10152001622893745_406801645_n.jpg?oh=7071850f927dcf11edfe5c584bb87b92&oe=575F3D74',
	link:'https://www.facebook.com/photo.php?fbid=10152001622893745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The norseman ',
	pct:5.0,
	desc:'An average ale ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1379331_10152001623128745_1319626583_n.jpg?oh=46414139e7bac2e8afffde033f7e8759&oe=5732A228',
	link:'https://www.facebook.com/photo.php?fbid=10152001623128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trident ',
	pct:5.0,
	desc:'Like a red Guinness gone wrong ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1381987_10152001622888745_1624478487_n.jpg?oh=a9bc4fbbf14b2b1fd63f0249f6d87646&oe=5723E5BF',
	link:'https://www.facebook.com/photo.php?fbid=10152001622888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis Grand Select ',
	pct:5.4,
	desc:'A bit of a hobo taste, but not terrible ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1381183_10152001624088745_284273692_n.jpg?oh=43f6a466c4012d446d2caa694f08c08d&oe=572E117F',
	link:'https://www.facebook.com/photo.php?fbid=10152001624088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batemans Combined Harvest ',
	pct:4.7,
	desc:'I\'m amazed that this doesn\'t taste like an absolute mess ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1383443_10152001624583745_873432820_n.jpg?oh=6248e1001fee7d75ac976817d76eac03&oe=57240152',
	link:'https://www.facebook.com/photo.php?fbid=10152001624583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Dumaku',
	pct:null,
	desc:'Pretty nice ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1381516_10152001638348745_1868079701_n.jpg?oh=73fd834e477ab945cb762e31870e9974&oe=573320AC',
	link:'https://www.facebook.com/photo.php?fbid=10152001638348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Post road pumpkin ale ',
	pct:5.0,
	desc:'Tastes like christmas ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/1512830_10152147731138745_971828677_n.jpg?oh=2508a4fc737fd585dfc7829f6ce5ec96&oe=57244C0A',
	link:'https://www.facebook.com/photo.php?fbid=10152147731138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burning Sky Aurora ',
	pct:5.6,
	desc:'Not too bitter with a mild hoppy taste ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/p480x480/1476223_10152147732298745_333484722_n.jpg?oh=512a418ec9fec13b080f948ff8dd826c&oe=57240507',
	link:'https://www.facebook.com/photo.php?fbid=10152147732298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewmeister Armageddon ',
	pct:65,
	desc:'Was supposedly the strongest beer in the world but that is a complete lie. This beer is max 20% abv. I\'ve never been lied too this badly in my life. ',
	score:0,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1521885_10152147732818745_1092668016_n.jpg?oh=e2b0a93637c36c7d69951286356cd9ae&oe=572F02C3',
	link:'https://www.facebook.com/photo.php?fbid=10152147732818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Blonde ',
	pct:4.8,
	desc:'Kind of tasty lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/579360_10152147733223745_1201965133_n.jpg?oh=af29be61b56fa91fe0777dddeb9ebbdd&oe=575DB914',
	link:'https://www.facebook.com/photo.php?fbid=10152147733223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harvey\'s Kiss ',
	pct:4.8,
	desc:'Kind of warming. Better than the label suggests ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/1482844_10152147733228745_1616012407_n.jpg?oh=b67d35f088bac4a8492022a5ea56508c&oe=572AFA8B',
	link:'https://www.facebook.com/photo.php?fbid=10152147733228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arany Aszok',
	pct:null,
	desc:'Easy drinking lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/1458701_10152147733363745_127688331_n.jpg?oh=259902aa2b175c4adbe93ebf673976ea&oe=5727D03A',
	link:'https://www.facebook.com/photo.php?fbid=10152147733363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Borsodi 6/10',
	pct:null,
	desc:'Not much flavour at all ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1513298_10152147733513745_1123080804_n.jpg?oh=5fa8034ad84d959acec9030ae3476710&oe=572932D7',
	link:'https://www.facebook.com/photo.php?fbid=10152147733513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dreher',
	pct:null,
	desc:'Hungarian standard ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1479455_10152147733863745_266822035_n.jpg?oh=0292189b61c877e08381a6b6b5ed4544&oe=572EC768',
	link:'https://www.facebook.com/photo.php?fbid=10152147733863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zlaty bazant',
	pct:null,
	desc:'A tasteless Slovakian lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1507155_10152147733883745_1859906756_n.jpg?oh=f4b6bdcabf10141bdda3546c51af1381&oe=575EB2D8',
	link:'https://www.facebook.com/photo.php?fbid=10152147733883745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Soproni',
	pct:null,
	desc:'Lager. Nothing more to say. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/1513718_10152147734013745_2012942673_n.jpg?oh=d022fb3f951d71065e8bbd5d9c08cf4b&oe=572D011A',
	link:'https://www.facebook.com/photo.php?fbid=10152147734013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel smieth organic lager ',
	pct:5.0,
	desc:'Nothing special ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1526342_10152147734658745_1378507161_n.jpg?oh=97fa908cd4e37d22347cf1dfb300a19f&oe=576284BD',
	link:'https://www.facebook.com/photo.php?fbid=10152147734658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nicholson\'s pale ale ',
	pct:4.0,
	desc:'A slightly tangly pale ale. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1513323_10152147734918745_1271199559_n.jpg?oh=fec6722d75f19ac66bfea113d9ac5f05&oe=57652665',
	link:'https://www.facebook.com/photo.php?fbid=10152147734918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meteor',
	pct:null,
	desc:'Normal London lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1012810_10152147735373745_584437479_n.jpg?oh=d0eb4e78e7fe58365b765306ae834d6b&oe=5733F53F',
	link:'https://www.facebook.com/photo.php?fbid=10152147735373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Best ',
	pct:4.0,
	desc:'Plain lager. Easy drinking ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/1520804_10152147735848745_1884810076_n.jpg?oh=831478b222026b48676c1e6b959576d4&oe=57343DF4',
	link:'https://www.facebook.com/photo.php?fbid=10152147735848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknot Queboid ',
	pct:8.0,
	desc:'A nice strong flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1520670_10152147736383745_1604295852_n.jpg?oh=1003d135a556e356bcc257afd217a508&oe=575FBF17',
	link:'https://www.facebook.com/photo.php?fbid=10152147736383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harveys Georgian Dragon ',
	pct:4.7,
	desc:'A mild ruby ale with a slightly sweet taste ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1531869_10152147736428745_246396192_n.jpg?oh=7c9b81a9917ae5dcc5f01dffef042a1b&oe=575F1AD8',
	link:'https://www.facebook.com/photo.php?fbid=10152147736428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monty\'s ding dong ',
	pct:4.4,
	desc:'Light and festive and drinkable ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1911822_10152280800298745_1797219050_n.jpg?oh=3b491f50680b719993109b062704a100&oe=572BF45D',
	link:'https://www.facebook.com/photo.php?fbid=10152280800298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Hop Studio Noel ',
	pct:4.5,
	desc:'Some very strange hoppy flavour ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/1618610_10152280800288745_1862858046_n.jpg?oh=9c1780a8235e77eb588cb5f23dd1ec74&oe=576C4C45',
	link:'https://www.facebook.com/photo.php?fbid=10152280800288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Woodlands Christmas special ',
	pct:4.8,
	desc:'Very good for a British ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1623661_10152293086658745_850862784_n.jpg?oh=fe011d2594f32e827c4a0611e240df0e&oe=576E5077',
	link:'https://www.facebook.com/photo.php?fbid=10152293086658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Uncle Scrooge ',
	pct:4.5,
	desc:'No one was being cheap when making this one ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1966869_10152293086653745_1230920015_n.jpg?oh=73ed2a6c550bf11ef4130af2c25a8fe3&oe=576C3F28',
	link:'https://www.facebook.com/photo.php?fbid=10152293086653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheddar ales festive totty ',
	pct:4.7,
	desc:'Not sure how totty applies in this context ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/988380_10152293086573745_484773090_n.jpg?oh=bdc12a517ead36f75aaddd6b2634eca4&oe=5731B2A3',
	link:'https://www.facebook.com/photo.php?fbid=10152293086573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknott azimuth IPA ',
	pct:5.8,
	desc:'An ok IPA ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/1621734_10152293086743745_608289512_n.jpg?oh=79f2f533f48170fe94920c14bee4ae62&oe=573414D1',
	link:'https://www.facebook.com/photo.php?fbid=10152293086743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog Atlantic lager ',
	pct:4.7,
	desc:'Fruity and mild ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/993032_10152293086873745_958885686_n.jpg?oh=dda4aee740da86636f5a68c92efe9fb3&oe=5722AF28',
	link:'https://www.facebook.com/photo.php?fbid=10152293086873745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog snake dog ',
	pct:7.1,
	desc:'A little harsh ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1982179_10152293086923745_434038155_n.jpg?oh=1b9ce94b891f66f3dd12503cd3a2cb9b&oe=5730F295',
	link:'https://www.facebook.com/photo.php?fbid=10152293086923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe Triple ',
	pct:8.5,
	desc:'Stronger and nicer than the standard ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtl1/v/t1.0-0/p480x480/1625649_10152280800668745_1746325328_n.jpg?oh=15e2b5760f6ae689ba3fc79a1c4747be&oe=576E2C86',
	link:'https://www.facebook.com/photo.php?fbid=10152280800668745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe dark',
	pct:null,
	desc:'More of a fuller Leffe than a dark beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1902725_10152293087758745_569610046_n.jpg?oh=7078a30908099f473a17b447b2195364&oe=572E2F61',
	link:'https://www.facebook.com/photo.php?fbid=10152293087758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe. ',
	pct:null,
	desc:'A strong Belgian taste. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/l/t1.0-0/p480x480/398737_10151396305948745_940904591_n.jpg?oh=65b0369987f90206345bea15f8c42dbc&oe=572FB71C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steen Brugge ',
	pct:5.0,
	desc:'Not the biggest fan of this wheat beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1911696_10152280800918745_1929684638_n.jpg?oh=ddce1ff403cee8c5766f062c724ca85f&oe=5770A69F',
	link:'https://www.facebook.com/photo.php?fbid=10152280800918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium Christmas ',
	pct:10.0,
	desc:'Stronger than the originals and a little less unique ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1623626_10152280800643745_1481530083_n.jpg?oh=2703cac086a13e88765960ddd38dc6e8&oe=5728C73C',
	link:'https://www.facebook.com/photo.php?fbid=10152280800643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium nocturnum ',
	pct:8.5,
	desc:'Not as nice as the tremens ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1901197_10152280800558745_1902963784_n.jpg?oh=8d188b597c418803836150eac76bd588&oe=57616FB5',
	link:'https://www.facebook.com/photo.php?fbid=10152280800558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Passchendaele ',
	pct:5.1,
	desc:'A lager with a Belgian ale flavour. Very strange. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/13244_10152293087118745_389678283_n.jpg?oh=5a4912514b976793d3eb09b5e1a25d5d&oe=576C8510',
	link:'https://www.facebook.com/photo.php?fbid=10152293087118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Qantelaar ',
	pct:9.0,
	desc:'Very flavoursome but not too sweet. Not worth the €18 I paid though ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1924797_10152293087133745_1742289591_n.jpg?oh=94bdfa2bc0fc0498ff6d7a820c1dc78d&oe=576752CC',
	link:'https://www.facebook.com/photo.php?fbid=10152293087133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cookie Beer ',
	pct:8.0,
	desc:'Not as much cookie flavour as I was hoping ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/1932219_10152280800273745_138064221_n.jpg?oh=4edce29e495b8ed2f12c31366c9a5101&oe=576264A5',
	link:'https://www.facebook.com/photo.php?fbid=10152280800273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St bernardus ',
	pct:10,
	desc:'Takes a bit to get used to but smooth after that ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1902068_10152293087213745_1501844823_n.jpg?oh=a0d84ef79b1bdf4ea8d39d056f111298&oe=573270B9',
	link:'https://www.facebook.com/photo.php?fbid=10152293087213745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm ',
	pct:5.4,
	desc:'A mild Belgian beer ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/988803_10152293087318745_73934001_n.jpg?oh=083a1d60b321299d678e1c1c8610a587&oe=576A31EB',
	link:'https://www.facebook.com/photo.php?fbid=10152293087318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grimbergen blonde',
	pct:null,
	desc:'An ok Trappist ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1517454_10152293087538745_1520731799_n.jpg?oh=acc0d56bb9e5253854f52647df8d9efd&oe=577043C6',
	link:'https://www.facebook.com/photo.php?fbid=10152293087538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chouffe ',
	pct:8.0,
	desc:'Well rounded ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1911857_10152293087523745_1264067765_n.jpg?oh=9d4c3c443a9522bfad91600c53a32cd9&oe=576DEDC8',
	link:'https://www.facebook.com/photo.php?fbid=10152293087523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brugge tripel',
	pct:null,
	desc:'Like a lager that warms you up ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1662198_10152293087613745_1851257445_n.jpg?oh=0ee085e9d5a5987412791b2e26958c0c&oe=576DFDBB',
	link:'https://www.facebook.com/photo.php?fbid=10152293087613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corsendonk ',
	pct:7.5,
	desc:'Not as easy to drink as I was hoping ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1534405_10152147734558745_724921108_n.jpg?oh=258dfdff828f6a7dc2d9e47aaed70e30&oe=57328BD5',
	link:'https://www.facebook.com/photo.php?fbid=10152147734558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fonteinen oude geuze ',
	pct:6.0,
	desc:'Not a particularly nice lambic ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1382815_10152001621173745_208469765_n.jpg?oh=52fa850ee70fa8dcac9b03d6f3eadeba&oe=5760BA25',
	link:'https://www.facebook.com/photo.php?fbid=10152001621173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vedett. ',
	pct:null,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/486956_10151296240913745_1196071675_n.jpg?oh=e716ee8a9e46610d951f3a12383171f0&oe=57312762',
	link:'https://www.facebook.com/photo.php?fbid=10151296240913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carolus classic ',
	pct:8.5,
	desc:'Dark but not heavy ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1782108_10152293087803745_1558065696_n.jpg?oh=1814ba3b95178bad09c6da6c3bb4c610&oe=57277C85',
	link:'https://www.facebook.com/photo.php?fbid=10152293087803745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orval ',
	pct:6.2,
	desc:'A bit too harsh ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/603000_10151798800068745_508626500_n.jpg?oh=e5abe972c1f4d8ed9cf66c81d8809a26&oe=5768C003',
	link:'https://www.facebook.com/photo.php?fbid=10151798800068745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pauwel Kwak ',
	pct:8,
	desc:'A mild Belgian beer. +1 for the sweet glass ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/1521828_10152147734533745_969043237_n.jpg?oh=f5e5c56a5b5b35cb117c36a2fc075cd3&oe=57326D9E',
	link:'https://www.facebook.com/photo.php?fbid=10152147734533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duvel. ',
	pct:8.5,
	desc:'Not as good as when you buy it in Belgium. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/6394_10151428524928745_265167117_n.jpg?oh=691d75df08eb5de42f5b285bd976939c&oe=5770337A',
	link:'https://www.facebook.com/photo.php?fbid=10151428524928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Triple karmeliet ',
	pct:8.4,
	desc:'I choose this above Delerium 1',
	score:0,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/p480x480/1654211_10152293087868745_1642505899_n.jpg?oh=71f302995a797c8f6ea16e667f106122&oe=5725FF23',
	link:'https://www.facebook.com/photo.php?fbid=10152293087868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Co-operative Czech lager ',
	pct:5.0,
	desc:'Piss water ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1976956_10152293116608745_971300903_n.jpg?oh=7e8ea7bb6b2e1507cb0c812011e4f639&oe=575E2775',
	link:'https://www.facebook.com/photo.php?fbid=10152293116608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fullers Bengal lancer ',
	pct:5.3,
	desc:'A mild IPA. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1902717_10152293116728745_604384062_n.jpg?oh=ad674fa03a48f57baffda0e69ebcb574&oe=572CCB65',
	link:'https://www.facebook.com/photo.php?fbid=10152293116728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rivet lager',
	pct:null,
	desc:'Cheap Aldi lager. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1654215_10152293132398745_1156319319_n.jpg?oh=f38d8ad913401bf6d8ca19d81729f6a1&oe=572756D8',
	link:'https://www.facebook.com/photo.php?fbid=10152293132398745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Itchy green pants cloudy ale',
	pct:null,
	desc:'A citrusy ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/14516_10152293132388745_1804956545_n.jpg?oh=ea60c4acb1017f8b530054cb10a3b6a9&oe=5732B8B6',
	link:'https://www.facebook.com/photo.php?fbid=10152293132388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beez neez ',
	pct:4.7,
	desc:'Nicer than other wheat beers ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1689028_10152293132393745_2076387915_n.jpg?oh=9dc68aa4a9b537d3b361437339ec883e&oe=572B504F',
	link:'https://www.facebook.com/photo.php?fbid=10152293132393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big helga ',
	pct:4.7,
	desc:'Not at all like a Munich beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1911736_10152293132828745_389724707_n.jpg?oh=5d0838e2af2b37ee9c7d2aaa33fa9ea5&oe=57312F05',
	link:'https://www.facebook.com/photo.php?fbid=10152293132828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures original pilsner',
	pct:null,
	desc:'Doesn\'t have the flavour of their other brews ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1959613_10152293132738745_13261275_n.jpg?oh=d6a91675c7a02508f3118ce71e8f6e53&oe=576FD1A0',
	link:'https://www.facebook.com/photo.php?fbid=10152293132738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s real ale',
	pct:null,
	desc:'Strong ale flavour in a lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1797480_10152293132838745_183692179_n.jpg?oh=f2c7ae2f3ac18f6ee8c60c60d0cde698&oe=576C67E7',
	link:'https://www.facebook.com/photo.php?fbid=10152293132838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone and wood pacific ale',
	pct:null,
	desc:'Very nice ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1947926_10152293132973745_485396127_n.jpg?oh=c920f649cb2fe2e30289ccaa2d24fcb3&oe=572FB021',
	link:'https://www.facebook.com/photo.php?fbid=10152293132973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s angry man ',
	pct:5.0,
	desc:'Pretty good ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1975034_10152293133088745_313669023_n.jpg?oh=58d6d23e8e865a85e269c17ffe50b697&oe=5768CAB4',
	link:'https://www.facebook.com/photo.php?fbid=10152293133088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s whale ale',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1622815_10152293133083745_1090580214_n.jpg?oh=6554d1c6a0790d9a09886d4473b05c58&oe=57313150',
	link:'https://www.facebook.com/photo.php?fbid=10152293133083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hopinator ',
	pct:7.5,
	desc:'Hoppy as promised ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/577380_10152293133158745_1128439575_n.jpg?oh=9300aaa71b7741acbf145ee45c87ec33&oe=572E27B5',
	link:'https://www.facebook.com/photo.php?fbid=10152293133158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brookvale union ginger beer',
	pct:null,
	desc:'Sweet sweet ginger ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1796708_10152293133278745_1592031312_n.jpg?oh=148eeb2b2c2ef7c61ce822692544020a&oe=57626B05',
	link:'https://www.facebook.com/photo.php?fbid=10152293133278745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bakalar',
	pct:null,
	desc:'A mild beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1620416_10152293133463745_1571056383_n.jpg?oh=3db6e1f816101729e89cca2bf98efc5b&oe=5734180A',
	link:'https://www.facebook.com/photo.php?fbid=10152293133463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Minimum chips',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/1981912_10152293133693745_209766969_n.jpg?oh=1b208789c07cf80136b13f8fb7e12f7c&oe=57707FC0',
	link:'https://www.facebook.com/photo.php?fbid=10152293133693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aguila',
	pct:null,
	desc:'',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/1962592_10152293133843745_1037481465_n.jpg?oh=ba7905beee2feb9a4764799bace24586&oe=57320A9C',
	link:'https://www.facebook.com/photo.php?fbid=10152293133843745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The grifter pale ale',
	pct:null,
	desc:'A nice pale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1939940_10152293133933745_1195913989_n.jpg?oh=73d3a2184949b5b6018dcaf8d9cf16af&oe=576625F7',
	link:'https://www.facebook.com/photo.php?fbid=10152293133933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s pale ale ',
	pct:4.6,
	desc:'Not at all a pale ale, just a crappy lager. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/1234276_10152327616288745_1383768960_n.jpg?oh=7e032b5c67c3c7e977da5cce25f817c4&oe=572B1B21',
	link:'https://www.facebook.com/photo.php?fbid=10152327616288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale IPA ',
	pct:5.5,
	desc:'Sweater than a normal IPA ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1601320_10152327616293745_1926213057_n.jpg?oh=8c11024a4417d8529153c4950e8b3e52&oe=572DD7C4',
	link:'https://www.facebook.com/photo.php?fbid=10152327616293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zamkowe ',
	pct:5.6,
	desc:'An average polish beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/1148905_10152327616358745_1369255120_n.jpg?oh=18e4ea7b84692cd905bc7fd9fced66e6&oe=5767C59B',
	link:'https://www.facebook.com/photo.php?fbid=10152327616358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road beechworth pale ale ',
	pct:4.8,
	desc:'a nicely hopped pale ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1920508_10152327616563745_674556830_n.jpg?oh=1fb012cd5e8bca37b851f87d407d99d8&oe=57280DC8',
	link:'https://www.facebook.com/photo.php?fbid=10152327616563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lucky ',
	pct:4.8,
	desc:'A little bit metallic ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/1240436_10152327616598745_898539470_n.jpg?oh=dea0519ccdde03e2ac405cc1729a2d7f&oe=5760F0E7',
	link:'https://www.facebook.com/photo.php?fbid=10152327616598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray’s rudeboy ',
	pct:4.8,
	desc:'Not quite sure what this beer is going for ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1506399_10152327616573745_36221798_n.jpg?oh=d70c953eaaa2287e88a431a783a9445d&oe=572F38B5',
	link:'https://www.facebook.com/photo.php?fbid=10152327616573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viking ',
	pct:4.4,
	desc:'An ok pilsner ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/1948233_10152327616743745_932399934_n.jpg?oh=90f9649bc10a6cb2eeca02dae5dd9fc6&oe=57346688',
	link:'https://www.facebook.com/photo.php?fbid=10152327616743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines stout ',
	pct:5.1,
	desc:'A mild easy drinking stout ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1503434_10152327617153745_1770406360_n.jpg?oh=edfc24393dee883ded934bbe8764e73b&oe=5733A183',
	link:'https://www.facebook.com/photo.php?fbid=10152327617153745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tui ',
	pct:4.0,
	desc:'A cheap NZ lager without much flavour ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/971710_10152327616993745_1470932463_n.jpg?oh=ba2db6422871b7e914b53aef49108958&oe=57674949',
	link:'https://www.facebook.com/photo.php?fbid=10152327616993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruby Tuesday ',
	pct:4.7,
	desc:'A nice well balanced amber ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10003998_10152327617233745_190591734_n.jpg?oh=62a8cc95f0f10f2cf5eef6872f7b4d8d&oe=572CB0AC',
	link:'https://www.facebook.com/photo.php?fbid=10152327617233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little ripper ',
	pct:4.7,
	desc:'A slightly zesty lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/1958010_10152327617388745_1928464789_n.jpg?oh=6c04a3e184d2bf463094cc951e61d62d&oe=572CBD98',
	link:'https://www.facebook.com/photo.php?fbid=10152327617388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton mid ',
	pct:3.5,
	desc:'Not quite as nice as a draught and with less alcohol ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/1509668_10152327617473745_370150087_n.jpg?oh=9972a4edc4a97e2a6839de02f03e3b91&oe=5726A53D',
	link:'https://www.facebook.com/photo.php?fbid=10152327617473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord nelson Anileation ',
	pct:5.4,
	desc:'A beer crossed with a coffee ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10003507_10152327617578745_898249905_n.jpg?oh=6dd1b5400bfabfab00a693a527a16395&oe=576DB550',
	link:'https://www.facebook.com/photo.php?fbid=10152327617578745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Hop Thief',
	pct:null,
	desc:'Well hopped ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/1898087_10152327617588745_1756511326_n.jpg?oh=b2886b5b0e5e1c198260a00febfe9313&oe=572568EB',
	link:'https://www.facebook.com/photo.php?fbid=10152327617588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire The Constable',
	pct:null,
	desc:'Like a lovely lightly hopped IPA ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtl1/v/t1.0-0/p480x480/1239035_10152327617748745_242091326_n.jpg?oh=8ea0cc84d4cd4ca098b5edaf8ec15d5a&oe=5762E3B0',
	link:'https://www.facebook.com/photo.php?fbid=10152327617748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Australian brewery pale ale ',
	pct:4.8,
	desc:'A slightly bitter pale ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/10341507_10152425240228745_8265904163887562785_n.jpg?oh=0d65baef5a1d46b8cf9f78603ebfb25b&oe=572F673F',
	link:'https://www.facebook.com/photo.php?fbid=10152425240228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Supa fly rye IPA ',
	pct:5.8,
	desc:'A mild and interesting IPA ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/1506594_10152425240263745_7813835679026139769_n.jpg?oh=934b399e63d0821d5dd4fcd4f7fb5783&oe=57238173',
	link:'https://www.facebook.com/photo.php?fbid=10152425240263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holland import ',
	pct:4.8,
	desc:'A cheap lager ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/10154146_10152425240233745_4967152943053850733_n.jpg?oh=3476203d5f51480e4df62f4158e5937a&oe=572C0060',
	link:'https://www.facebook.com/photo.php?fbid=10152425240233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh brewing Co 28 Pale Ale ',
	pct:4.8,
	desc:'A little bit too bitter for a pale ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10304714_10152425240513745_4080589260215688130_n.jpg?oh=5f6c73b5db6e87dff2b5a7919f52172d&oe=5767A479',
	link:'https://www.facebook.com/photo.php?fbid=10152425240513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Redtrolley ale ',
	pct:5.8,
	desc:'A malty ale ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/10314565_10152425240463745_1300237400658400717_n.jpg?oh=df39c28cee826b7a6940d1643b47f47e&oe=575FF158',
	link:'https://www.facebook.com/photo.php?fbid=10152425240463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Opera bar pale ale',
	pct:null,
	desc:'Flavourless ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10154926_10152425240573745_3819970704734320665_n.jpg?oh=10d9d062888be2eb336553114e4e0406&oe=57664FCD',
	link:'https://www.facebook.com/photo.php?fbid=10152425240573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bingo wings ',
	pct:5.0,
	desc:'A zesty wheat beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10155860_10152425240628745_5749004272951603123_n.jpg?oh=9ea9a6fb17c398515f5353402fe2a9e3&oe=5724B792',
	link:'https://www.facebook.com/photo.php?fbid=10152425240628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dundee India Pale Ale ',
	pct:6.3,
	desc:'Not a bad IPA ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10342507_10152425240783745_250399849084331418_n.jpg?oh=cdd33b909e9b5c065dcc27f577d00514&oe=575E079A',
	link:'https://www.facebook.com/photo.php?fbid=10152425240783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bee Sting ',
	pct:5.0,
	desc:'A nice level of sweetness ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10168130_10152425240878745_5742462968298954155_n.jpg?oh=acac2eb181713216e081874437312f9c&oe=576E0E2A',
	link:'https://www.facebook.com/photo.php?fbid=10152425240878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stefano’s pilsner ',
	pct:4.7,
	desc:'A good pilsner but far from perfect ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash4/v/t1.0-0/p480x480/10301357_10152425240938745_5491397456344059410_n.jpg?oh=abea1730266cd3140fa06804aa7e3003&oe=57317600',
	link:'https://www.facebook.com/photo.php?fbid=10152425240938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Stow Away IPA ',
	pct:5.6,
	desc:'A fairly mild IPA ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/10330353_10152425241028745_6945284873150801200_n.jpg?oh=003b786378565e832adea55e7ac490b8&oe=5762BBF4',
	link:'https://www.facebook.com/photo.php?fbid=10152425241028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Mango Beer ',
	pct:4.5,
	desc:'Kind of tangy but can’t taste the mango ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/10294225_10152425241078745_7192155480482123122_n.jpg?oh=f7ae2989ebd56ee7ebccfc59cbef3de1&oe=575D82A3',
	link:'https://www.facebook.com/photo.php?fbid=10152425241078745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s pearlers pale ale ',
	pct:4.5,
	desc:'A very well balanced pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10459893_10152534289713745_6169618167007300448_n.jpg?oh=a9526d6c43bd1e36feea6b80afbdcb82&oe=57666CED',
	link:'https://www.facebook.com/photo.php?fbid=10152534289713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos equis lager especial ',
	pct:4.5,
	desc:'A very easy drinking lager. Good for a hot day ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/10433892_10152534289243745_2400323308581320924_n.jpg?oh=98aa5ac3220130579227d1456eab9bd9&oe=57672D0B',
	link:'https://www.facebook.com/photo.php?fbid=10152534289243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale Drk ',
	pct:4.5,
	desc:'Quite mild for a dark ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/10373527_10152534289553745_1636959852017465130_n.jpg?oh=fcc6cfd9d059526738bbb8511470bfe1&oe=57661C96',
	link:'https://www.facebook.com/photo.php?fbid=10152534289553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Suntory MD ',
	pct:5.0,
	desc:'A slightly strange lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10426644_10152534289858745_1229530734473771808_n.jpg?oh=022b6e4a746ab46017cf9c74a016f3da&oe=576B3473',
	link:'https://www.facebook.com/photo.php?fbid=10152534289858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s bohemian pilsner ',
	pct:5.0,
	desc:'Smooth with a nice finish ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/10462530_10152534290193745_4497356221968859858_n.jpg?oh=b9ae8a0c80bfd74bb2efe30294d9bd63&oe=576B892A',
	link:'https://www.facebook.com/photo.php?fbid=10152534290193745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redback beer ',
	pct:4.7,
	desc:'Reminds me of some belgian beers but not nearly as good ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10488390_10152534290478745_4494982556291999381_n.jpg?oh=3b88f895b92ba32d960b9079166b1fa5&oe=57705CD8',
	link:'https://www.facebook.com/photo.php?fbid=10152534290478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bintang',
	pct:null,
	desc:'Just like other easy drinking beers from the region ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/10398080_10152534290653745_1374069162252942719_n.jpg?oh=07008e54b9f7f488e3d61ac1d55f8e9e&oe=576E1D27',
	link:'https://www.facebook.com/photo.php?fbid=10152534290653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cats shank kolsch ',
	pct:4.6,
	desc:'Good all round ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/10491226_10152534290818745_8400776013361245843_n.jpg?oh=70c996e6185d9dd7ebca2d77d9bb7146&oe=5768711F',
	link:'https://www.facebook.com/photo.php?fbid=10152534290818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura brewery honey wheat ',
	pct:4.5,
	desc:'A fairly standard beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10393575_10152534291018745_4203149759533116955_n.jpg?oh=ba5119b611330cf0bf2afbd8f13b66d3&oe=575D03BF',
	link:'https://www.facebook.com/photo.php?fbid=10152534291018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Roger\'s beer ',
	pct:3.8,
	desc:'A lager with a bit of a tang ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10482595_10152534291158745_997791426307345458_n.jpg?oh=83fdea00a27a943c5521cb5a504f2a92&oe=576C7B77',
	link:'https://www.facebook.com/photo.php?fbid=10152534291158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'99 not out ',
	pct:5.0,
	desc:'Not my kind of beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10441315_10152534300648745_3725590372701097829_n.jpg?oh=c2a16862a9985e798a80376b854c622f&oe=572F9A87',
	link:'https://www.facebook.com/photo.php?fbid=10152534300648745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral sly fox ',
	pct:4.7,
	desc:'A nice pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/10470597_10152534300708745_7685915012921086968_n.jpg?oh=932c8ee8fed594b178d987ebd9befa05&oe=5725DE8A',
	link:'https://www.facebook.com/photo.php?fbid=10152534300708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat steam ale ',
	pct:4.5,
	desc:'Could go for a case is this ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/10390115_10152534300713745_5030138459822932747_n.jpg?oh=2e2e8db6dddbe186b811d354e36593f2&oe=572AA61F',
	link:'https://www.facebook.com/photo.php?fbid=10152534300713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s golden lager ',
	pct:5.0,
	desc:'What you want on a summer afternoon ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10456077_10152534300758745_7454080799516274626_n.jpg?oh=11399c2f95de2db4b2d078f689841d3a&oe=5763E20B',
	link:'https://www.facebook.com/photo.php?fbid=10152534300758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf porter ',
	pct:6.2,
	desc:'A little bit harsh for me ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10488349_10152534301008745_8348994823778686167_n.jpg?oh=6232726bbf921a34382959ff7aa5faea&oe=572DB7BE',
	link:'https://www.facebook.com/photo.php?fbid=10152534301008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms lager ',
	pct:4.6,
	desc:'Wasn\'t expecting much ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10489819_10152534301208745_6098643900831599392_n.jpg?oh=25d94d33146d26c766898b8625ea0ca1&oe=576277F6',
	link:'https://www.facebook.com/photo.php?fbid=10152534301208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O.k beer Okocim ',
	pct:5.6,
	desc:'It\'s ok ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10300636_10152534301428745_4348861457784870364_n.jpg?oh=55c74f5e850d17ab5a10b9b9620002e1&oe=5763A113',
	link:'https://www.facebook.com/photo.php?fbid=10152534301428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood lager ',
	pct:4.7,
	desc:'Such a letdown after the pale ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/10408527_10152534301523745_6253327536631057603_n.jpg?oh=05f8c3f0c5d616d1b52eea0057a985ad&oe=5760E47B',
	link:'https://www.facebook.com/photo.php?fbid=10152534301523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogbolter ',
	pct:5.2,
	desc:'A very nice malty flavour ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/10409678_10152534301618745_7574186216754130853_n.jpg?oh=ff9161e0780156cbb0f8032e7b3c2f78&oe=572D0F04',
	link:'https://www.facebook.com/photo.php?fbid=10152534301618745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saranac pumpkin ale ',
	pct:5.1,
	desc:'Not that pumkiny ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10262192_10152534301808745_668535654445517750_n.jpg?oh=ca545848ff7857ac94627f5c3a252e52&oe=576BD0C4',
	link:'https://www.facebook.com/photo.php?fbid=10152534301808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada kellerweis ',
	pct:4.8,
	desc:'A true weisbeer. I don\'t like it. ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/10411228_10152534305933745_5912326499497887080_n.jpg?oh=7d99a3f3ff958ebb7986d9d441b6a517&oe=5725250D',
	link:'https://www.facebook.com/photo.php?fbid=10152534305933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hayward 5000 ',
	pct:8.0,
	desc:'Cheap and malty ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10260031_10152534306073745_6457168517247456226_n.jpg?oh=8a1b91424fae1072f483f55e1973132c&oe=575E5456',
	link:'https://www.facebook.com/photo.php?fbid=10152534306073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cass fresh ',
	pct:4.5,
	desc:'A very refreshing lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/10463933_10152534306048745_557216881289649027_n.jpg?oh=e656b0bd4a76a72258446212caa36a07&oe=576A29AC',
	link:'https://www.facebook.com/photo.php?fbid=10152534306048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade bright ale ',
	pct:null,
	desc:'An all round good beer ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/10462761_10152534306183745_7006650351412791308_n.jpg?oh=50aa3298ff90741714e8cb85a9e58f2b&oe=57700375',
	link:'https://www.facebook.com/photo.php?fbid=10152534306183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s ginger beer ',
	pct:3.5,
	desc:'Very gingery but a little bit too fizzy. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10390539_10152534306248745_2125625178149511710_n.jpg?oh=f79c1cec367d2983c698e4d7dfe49270&oe=5765BA46',
	link:'https://www.facebook.com/photo.php?fbid=10152534306248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pintail pale ale ',
	pct:5.3,
	desc:'Kind of a Pale crossed with an IPA ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/10454293_10152534306298745_7768963216409422880_n.jpg?oh=8f40b3b67e1fd5536e6524f5d5498ab3&oe=5761C783',
	link:'https://www.facebook.com/photo.php?fbid=10152534306298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf pale ale ',
	pct:5.4,
	desc:'A little bit stouty',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10464035_10152534310338745_1731994487341714039_n.jpg?oh=cecd7c10c6c55b8448ddc7f98938062e&oe=575CCB72',
	link:'https://www.facebook.com/photo.php?fbid=10152534310338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stiegl ',
	pct:4.9,
	desc:'A nice light Austrian beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/q87/p480x480/10492027_10152534310618745_1648790094042442309_n.jpg?oh=1a0ca87cbba5eef2236846d774804cc0&oe=5725EA6F',
	link:'https://www.facebook.com/photo.php?fbid=10152534310618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau dark ',
	pct:5.5,
	desc:'Tastes really metallic. Might just have been the taps ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/q81/p480x480/10462761_10152534310558745_1029523877930371907_n.jpg?oh=520323372c1ce97a2db63305e1434aa4&oe=576EE921',
	link:'https://www.facebook.com/photo.php?fbid=10152534310558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cantina ',
	pct:4.6,
	desc:'A refreshing drink ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10475339_10152534310788745_8903624356648511173_n.jpg?oh=429bb1c811672c07e84aa0b6fee31f14&oe=572E2983',
	link:'https://www.facebook.com/photo.php?fbid=10152534310788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozlak ',
	pct:6.5,
	desc:'Malty ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/10264926_10152534310928745_6694007916577152263_n.jpg?oh=97e46b6e28c553a5c9a450cd618616d9&oe=57695160',
	link:'https://www.facebook.com/photo.php?fbid=10152534310928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grain lager',
	pct:null,
	desc:'Like a really mild pale ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10448190_10152534314748745_6480384213227978387_n.jpg?oh=b728e47d5df0c182cdb46c1dfbaf9f1a&oe=5769C5A4',
	link:'https://www.facebook.com/photo.php?fbid=10152534314748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Hog IPA ',
	pct:5.8,
	desc:'A fairly plain IPA. A good choice if you’ve never had one before ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/10411207_10153053839443745_1628460253644107712_n.jpg?oh=ec46fe145ffc20a7033fa6d308c23d05&oe=5729528D',
	link:'https://www.facebook.com/photo.php?fbid=10153053839443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA blanc ',
	pct:5.0,
	desc:'Not really sure what this beer is supposed to be. But it’s for olympians ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/10410984_10153053839163745_7731660578628364886_n.jpg?oh=4a4ea7dbce9ad2f15b7e33d98e02c8f4&oe=57255374',
	link:'https://www.facebook.com/photo.php?fbid=10153053839163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redoak organic pale ale  ',
	pct:4.6,
	desc:'A tasty bev ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10349001_10153053839393745_466238167460813515_n.jpg?oh=9222c2f425ef0702c35b7032c1037ab6&oe=5726DF6C',
	link:'https://www.facebook.com/photo.php?fbid=10153053839393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Nail Hoppy Summer Ale ',
	pct:5.0,
	desc:'Nicely hoppy ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/10945677_10153053839853745_7181309439289874351_n.jpg?oh=fbb4c553c2e9f025722d7277de4bc73d&oe=576D6A3E',
	link:'https://www.facebook.com/photo.php?fbid=10153053839853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Astor Ale ',
	pct:4.5,
	desc:'Pretty average ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10945640_10153053840143745_2674301376011904832_n.jpg?oh=60d7770e9994faa5340f8aaa87bf00c9&oe=575E5F23',
	link:'https://www.facebook.com/photo.php?fbid=10153053840143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour bright ale ',
	pct:4.2,
	desc:'Not really worth getting again ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/10696283_10153053840278745_1486083629761267822_n.jpg?oh=6f3f2114c8bf31c44d49b9229baab781&oe=576914B3',
	link:'https://www.facebook.com/photo.php?fbid=10153053840278745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso\'s Smokey Bishop ',
	pct:4.7,
	desc:'Not one to rush, not too smokey either ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1601397_10153053840403745_751081432725627058_n.jpg?oh=82141b935f3ef910bf185c45a8eaed36&oe=5733144F',
	link:'https://www.facebook.com/photo.php?fbid=10153053840403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hooten ',
	pct:4.6,
	desc:'Standard easy drinking lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/1606916_10153053840543745_4428133737928836956_n.jpg?oh=74a6dd7ef5aac312e37f73f8537a9aed&oe=57294255',
	link:'https://www.facebook.com/photo.php?fbid=10153053840543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jenlain Ambre ',
	pct:7.5,
	desc:'Was hoping for so much more than with this giant beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10955719_10153053840738745_4377010572225479820_n.jpg?oh=2b6b962d817ad9dc32d073e5125ce793&oe=572DABE6',
	link:'https://www.facebook.com/photo.php?fbid=10153053840738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snaatch lager',
	pct:null,
	desc:'Probably just a rebrand of some other generic beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1044239_10153053840773745_1317709767507240437_n.jpg?oh=6be6e00bacbdea0c94ac93a61244344d&oe=576D98F4',
	link:'https://www.facebook.com/photo.php?fbid=10153053840773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mexicali  ',
	pct:4.6,
	desc:'Not giving me what expected ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10955710_10153053851408745_4260669585339690789_n.jpg?oh=c5f429b27bfbe731f81fd260630119ee&oe=575D1163',
	link:'https://www.facebook.com/photo.php?fbid=10153053851408745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown golden ale ',
	pct:4.5,
	desc:'Not my favourite golden ale. Only slightly better than regular crown ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10942454_10153053851308745_7500988424962232002_n.jpg?oh=9b9a9e547650b13638e22c1fc01d3cf1&oe=576F595E',
	link:'https://www.facebook.com/photo.php?fbid=10153053851308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Knappstein ',
	pct:5.6,
	desc:'A little bit harsh. Wouldn\'t buy again ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/q84/p480x480/10941856_10153053851368745_8703876646395783250_n.jpg?oh=2aab4c934bd4fb1ee26fa83b430be577&oe=575DBD06',
	link:'https://www.facebook.com/photo.php?fbid=10153053851368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Surry hills pils',
	pct:null,
	desc:'Doesn\'t really taste like a pils ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10428481_10153053851498745_4687849967086253708_n.jpg?oh=6c1d4b132f9ac95b9fdc90da910b9d95&oe=575DBFC5',
	link:'https://www.facebook.com/photo.php?fbid=10153053851498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rio bravo ',
	pct:4.0,
	desc:'A fairly tasteless session beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/q84/p480x480/1920513_10153053851643745_6150367775548290022_n.jpg?oh=61d2d7fc8b3394f93ca25365b9a6fba6&oe=5763ABE6',
	link:'https://www.facebook.com/photo.php?fbid=10153053851643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks American pale ale',
	pct:null,
	desc:'A good level of hops ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/10954539_10153053851753745_8342401209754067322_n.jpg?oh=c9cc8164da6f830c2c8cc3852801c5e7&oe=575F3B5C',
	link:'https://www.facebook.com/photo.php?fbid=10153053851753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s black beer ',
	pct:5.2,
	desc:'Just a bad tasting beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/1979678_10153053851808745_6926811721676931401_n.jpg?oh=4e9c6976ae4172a2ef6df2b424aa274e&oe=5761F6B8',
	link:'https://www.facebook.com/photo.php?fbid=10153053851808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cthulhu ',
	pct:null,
	desc:'A little bit too bitter. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10956041_10153053851963745_7126060138864736213_n.jpg?oh=7ef824f3b7d2168e703bfb0d59235287&oe=573093D9',
	link:'https://www.facebook.com/photo.php?fbid=10153053851963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood jasper ',
	pct:null,
	desc:'Rich but not right ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/10955201_10153053852088745_6663961286785907822_n.jpg?oh=8a64bb3ff4cc89aaf8fa721d39950517&oe=576B3BDF',
	link:'https://www.facebook.com/photo.php?fbid=10153053852088745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat summer ale ',
	pct:4.7,
	desc:'A great beer for a nice day ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/16797_10153053852143745_3087580206529630401_n.jpg?oh=5d7841ff5a043c7b4b0ae113ace99861&oe=57715ED1',
	link:'https://www.facebook.com/photo.php?fbid=10153053852143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pearl river beer ',
	pct:5.3,
	desc:'So so bland ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10945514_10153053852213745_6703947153036432278_n.jpg?oh=5eba2e63416ab956a24cc38ad858d146&oe=57259E4D',
	link:'https://www.facebook.com/photo.php?fbid=10153053852213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kaiserdom ',
	pct:4.5,
	desc:'Just a standard cheap german Lager. But such an awesome can ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p320x320/10931372_10153055725393745_7415839926658912556_n.jpg?oh=af08b30d8e0dccf69d4b7058c48b2718&oe=5764EA2B',
	link:'https://www.facebook.com/photo.php?fbid=10153055725393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN 5.0 ',
	pct:5.0,
	desc:'Not as bad as I expected from the price ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/1560725_10153055725613745_6302115246934015090_n.jpg?oh=6f5b1fad97e2c04284a71e7f0b67546e&oe=5723652F',
	link:'https://www.facebook.com/photo.php?fbid=10153055725613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade IPA  ',
	pct:null,
	desc:'A nice balanced IPA ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10882109_10153055725553745_9030008793027639075_n.jpg?oh=3d23ff2ae9a937af7116bfbc31df6ef1&oe=575FAECC',
	link:'https://www.facebook.com/photo.php?fbid=10153055725553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six string Hefeweizen ',
	pct:null,
	desc:'One of the nicer wheat bears I\'ve tasted ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10957577_10153055725708745_5392401214475659109_n.jpg?oh=f180337a56fc2a9f40cc3d65457f17b2&oe=57312503',
	link:'https://www.facebook.com/photo.php?fbid=10153055725708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hook norton Twelve days ',
	pct:5.5,
	desc:'A little bit nutty ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1924574_10153055725888745_6113742952542006972_n.jpg?oh=7b6733f74263248a16ceff22ea794cc6&oe=572451B3',
	link:'https://www.facebook.com/photo.php?fbid=10153055725888745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Edge angry pirate ',
	pct:6.8,
	desc:'Rum flavour in beer is no good for anybody ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/t31.0-0/p480x480/10911454_10153055725923745_4540481012810101778_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055725923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA methode ',
	pct:5.0,
	desc:'Tastes way too metallic ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/q86/p480x480/10464194_10153055726008745_3155144376465393693_n.jpg?oh=72bd0392f7e5440c67796c4c496e8305&oe=572D2182',
	link:'https://www.facebook.com/photo.php?fbid=10153055726008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road India Saison  ',
	pct:7.5,
	desc:'Too much of a white beer flavour for me ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/t31.0-0/p480x480/10955774_10153055726098745_2456265276299415480_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay The ducks ',
	pct:4.2,
	desc:'Not at all a pale ale. Matilda bay lets me down once again ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/t31.0-0/p480x480/1492370_10153055726208745_5026667878902117342_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dr Tims ',
	pct:4.5,
	desc:'Could do with a bit more punch ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1619547_10153055749173745_8508511661850848187_n.jpg?oh=e53db1db89ceffeb2f6aeb4f2c999a68&oe=576CDCAA',
	link:'https://www.facebook.com/photo.php?fbid=10153055749173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Age The Celt Experience ',
	pct:4.2,
	desc:'Not really much of an experience ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/10947196_10153055749403745_4812053214327954894_n.jpg?oh=26544be7aad17d3c3a34495c9f171baf&oe=576CD119',
	link:'https://www.facebook.com/photo.php?fbid=10153055749403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bling Bling Imperial IPA ',
	pct:8.5,
	desc:'Lots of flavour, couldn’t have many ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/10806453_10153055749418745_7326451586089018048_n.jpg?oh=70f484e3863ac2baf371ea84b5f77080&oe=5766B371',
	link:'https://www.facebook.com/photo.php?fbid=10153055749418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bandit Killer Sprocket ',
	pct:4.8,
	desc:'Way too much of a smokey flavour ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10711_10153055749528745_1705580902509688757_n.jpg?oh=e0fba9043ba921f219f4906c2b303618&oe=576821A7',
	link:'https://www.facebook.com/photo.php?fbid=10153055749528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monkey’s Fist ',
	pct:4.9,
	desc:'Not sure why these are always reduced to clear at Dan Murpheys ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/t31.0-0/p480x480/10257018_10153055749583745_4285986054653809975_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749583745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punch & Judy’s Ale ',
	pct:3.9,
	desc:'Not much flavour or alcohol content',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10922862_10153055749673745_210519337780800601_n.jpg?oh=3bb8f64ea98cb62de988a1a468c81541&oe=5768B3BC',
	link:'https://www.facebook.com/photo.php?fbid=10153055749673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hassle Hop ',
	pct:5.5,
	desc:'A pale with a bit of a strong ale flavour. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/t31.0-0/p480x480/10942330_10153055749753745_4423283376777303913_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The point pale ale ',
	pct:4.2,
	desc:'Not my favourite pale ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/t31.0-0/p480x480/10955559_10153055749933745_9217798578543309687_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Tom Chocolate ',
	pct:6.0,
	desc:'A slight hint of chocolate ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-frc3/v/t1.0-0/p480x480/10891448_10153055770573745_4712183690457686836_n.jpg?oh=77329ed3d5b9a51ee6d31a8f4512f4fa&oe=576A6B63',
	link:'https://www.facebook.com/photo.php?fbid=10153055770573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John Boston Golden ale ',
	pct:4.2,
	desc:'I do like an easy drinking golden ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10690124_10153055770718745_5622367894684528293_n.jpg?oh=773bf750a1df72974a2107b1189a14b3&oe=575EDBE0',
	link:'https://www.facebook.com/photo.php?fbid=10153055770718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Selezione 19 ',
	pct:5.0,
	desc:'Goes well with a nice Italian meal ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10958542_10153055770443745_1738110291091509447_n.jpg?oh=87984fac40755488bb6fb9e78e3f725b&oe=572746F8',
	link:'https://www.facebook.com/photo.php?fbid=10153055770443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hipster ale ',
	pct:5.5,
	desc:'Just not really hitting the spot tonight ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/p480x480/10953214_10153055770813745_8713996460827737605_n.jpg?oh=ee06c04773a55933dfade18ca0ded620&oe=576B8BD1',
	link:'https://www.facebook.com/photo.php?fbid=10153055770813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trumer pils ',
	pct:4.9,
	desc:'An ok pilsner ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10953955_10153055770883745_7624310153191779880_n.jpg?oh=ebefafa4bbffc68b6db7b943c711a11a&oe=57642F5C',
	link:'https://www.facebook.com/photo.php?fbid=10153055770883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers 62 pilsner ',
	pct:5.0,
	desc:'Coopers seem to have a huge range of random beers, sadly the quality varies quite a bit ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/10942756_10153055770968745_4182424304505127141_n.jpg?oh=7e1de3a4a984a74e8cd2e1c79bdf809c&oe=5764F60B',
	link:'https://www.facebook.com/photo.php?fbid=10153055770968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders All Day IPA ',
	pct:4.7,
	desc:'Could literally drink this all day. Another from the great selection at Parsons ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/10955163_10153055771108745_5413724920939008977_n.jpg?oh=1d6d18ec988bb3ab986822457b62765a&oe=5731EE16',
	link:'https://www.facebook.com/photo.php?fbid=10153055771108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Torpedo extra IPA ',
	pct:7.2,
	desc:'So much flavour, so much booze. What’s not to love ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/10686865_10153055771228745_3010927456136598269_n.jpg?oh=5e6955bf1b708ff0ab5fe8b49d262dde&oe=57344F8E',
	link:'https://www.facebook.com/photo.php?fbid=10153055771228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Henninger ',
	pct:4.8,
	desc:'Very bland ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10955215_10153055772023745_950968910298192775_n.jpg?oh=9b2e747c2cae5246091d12329deec744&oe=57307458',
	link:'https://www.facebook.com/photo.php?fbid=10153055772023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian blue ',
	pct:4.5,
	desc:'Ok for a wheat beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1920181_10153055771283745_6859710748033343904_n.jpg?oh=c9b55923552142e5d00f8d44b0cbc35f&oe=57338028',
	link:'https://www.facebook.com/photo.php?fbid=10153055771283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kosciusko Pale ale ',
	pct:4.5,
	desc:'Never heard of this, was hoping for something better ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-ash2/v/t1.0-0/p480x480/10492453_10153055771438745_3655493043304213188_n.jpg?oh=0e3ca773c900bf10357ecad2684ee7cb&oe=575F60A6',
	link:'https://www.facebook.com/photo.php?fbid=10153055771438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Blond ',
	pct:6.5,
	desc:'Not as good or as strong as the Quadrupel ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10491123_10153055791238745_951076558234575000_n.jpg?oh=36969e7ca0c74da4545883d81bc570f1&oe=5763BBFF',
	link:'https://www.facebook.com/photo.php?fbid=10153055791238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Halifter Stout ',
	pct:4.9,
	desc:'A fairly mild stout ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10945766_10153055791503745_8417455299148358450_n.jpg?oh=ef204bb66a358ee794f7f0a3eae62505&oe=576744C7',
	link:'https://www.facebook.com/photo.php?fbid=10153055791503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Menabrea 1846 ',
	pct:4.8,
	desc:'Slightly above average Italian beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/10945561_10153055791438745_6706555972975228314_n.jpg?oh=700b288cf5b8d9da080d6d2f722f714c&oe=572844B3',
	link:'https://www.facebook.com/photo.php?fbid=10153055791438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Doppelbock Winter ale ',
	pct:6.0,
	desc:'I need to sample some more doppelbocks ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/1798753_10153055791623745_8735243396794406846_n.jpg?oh=dea81eed8623dfa25fcc1a113a7db8f4&oe=5732F3C0',
	link:'https://www.facebook.com/photo.php?fbid=10153055791623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Hooky ',
	pct:4.6,
	desc:'There are just so many bad english beers ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10806242_10153055791708745_8168997172530304317_n.jpg?oh=c112e1874a966e5cc7de4a74660da3bc&oe=572B349D',
	link:'https://www.facebook.com/photo.php?fbid=10153055791708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Brewery Stefano’s ',
	pct:5.0,
	desc:'A middle of the road kind of beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10945738_10153055791798745_8584137532392564439_n.jpg?oh=a42de5606a0dbde6c9934daec3003a4e&oe=576D6B42',
	link:'https://www.facebook.com/photo.php?fbid=10153055791798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade Stout ',
	pct:5.8,
	desc:'Not a very nice stout ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10501746_10153055791938745_8029415469669135648_n.jpg?oh=869da1b64690bda56d3132af3978e8ed&oe=572EC4C9',
	link:'https://www.facebook.com/photo.php?fbid=10153055791938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mallee Bull ',
	pct:5.6,
	desc:'Enjoyed this more than I expected ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/10929144_10153055792013745_3943691173139596791_n.jpg?oh=5ab01fd9839c12a2bb8a2634d191cae0&oe=576F937C',
	link:'https://www.facebook.com/photo.php?fbid=10153055792013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floreffe Prima Melior ',
	pct:8.0,
	desc:'Just an awful flavour combination ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-prn2/v/t1.0-0/p480x480/10940507_10153055792123745_6951460612562111481_n.jpg?oh=5d6e07ae6d34bea76c4b9774e6206182&oe=572EBC90',
	link:'https://www.facebook.com/photo.php?fbid=10153055792123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oettinger Pils ',
	pct:4.7,
	desc:'This beer has never been good, but at least it has always been cheap ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10952861_10153055792233745_5985463992710631340_n.jpg?oh=af2d1e4fe90c17a043f3cdc31297fc17&oe=57315045',
	link:'https://www.facebook.com/photo.php?fbid=10153055792233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Quadrupel ',
	pct:10,
	desc:'Such a lovely beer all round. Makes me want to go back to Belgium ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/t31.0-0/p480x480/10838255_10153055792378745_3160802427352478420_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055792378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms captain\'s IPA ',
	pct:5.8,
	desc:'A very mild IPA. Easy drinking but not what I want from an IPA ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/10995650_10153118627158745_3441161072765169256_n.jpg?oh=a899d82cf6e5b8d0340ee6d4eb47e1a9&oe=57718F96',
	link:'https://www.facebook.com/photo.php?fbid=10153118627158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mythos ',
	pct:4.7,
	desc:'I don\'t remember ever seeing another type of beer in Greece ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-0/p480x480/10865944_10153118627183745_3452701286868348707_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118627183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Byron bay pale lager ',
	pct:4.8,
	desc:'Plain and boring ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/17811_10153118627228745_8196338202734334456_n.jpg?oh=7be230012a1d760cfb11b6d75a3e89f7&oe=57287D99',
	link:'https://www.facebook.com/photo.php?fbid=10153118627228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great northern lager ',
	pct:4.2,
	desc:'A little bit metallic. Not sure why this was recommended to me ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/11025812_10153118627363745_3879639136439752978_n.jpg?oh=c0718f0784f9f6972ac5295b79c8b6e8&oe=575FB63D',
	link:'https://www.facebook.com/photo.php?fbid=10153118627363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sirling castle ',
	pct:6.5,
	desc:'Strong on alcohol, mild on flavour. Perfect for getting drunk quickly ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11024597_10153118627558745_640038091949927094_n.jpg?oh=0023c5d272fb8e8bb53da1925bd5c864&oe=5729079A',
	link:'https://www.facebook.com/photo.php?fbid=10153118627558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Red Trolley Ale ',
	pct:5.8,
	desc:'Not really my kind of beer ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11035307_10153118666928745_8142017152048186664_n.jpg?oh=f8b2d40e9666a5870a115d6f634eb5e2&oe=572D46E3',
	link:'https://www.facebook.com/photo.php?fbid=10153118666928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bolt ',
	pct:4.6,
	desc:'Very easy drinking. Very close to water ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11037326_10153118666923745_5159572374416519952_n.jpg?oh=b90996dd17f7380a12c35f73703d41e4&oe=576D96D5',
	link:'https://www.facebook.com/photo.php?fbid=10153118666923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Copycat A.I.P.A ',
	pct:6.8,
	desc:'A nice floral aroma but a little bit harsh ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1797322_10153118666983745_5915201915827958878_n.jpg?oh=4966ea183f45208ddae706cffcb51f8c&oe=575EA2BD',
	link:'https://www.facebook.com/photo.php?fbid=10153118666983745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black Death Beer ',
	pct:5.8,
	desc:'Like a crappy lager but black',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10437609_10153118667103745_274358326202189719_n.jpg?oh=fee658e9dffa307a6124ed73c7cd9b4d&oe=573364D0',
	link:'https://www.facebook.com/photo.php?fbid=10153118667103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant IPA ',
	pct:5.4,
	desc:'Mild but well rounded ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11036670_10153118667448745_2676066066178360898_n.jpg?oh=3e07afad0af076b3613a9ae704d2e195&oe=57621106',
	link:'https://www.facebook.com/photo.php?fbid=10153118667448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s summer ale ',
	pct:5.0,
	desc:'Surprisingly this is a ginger beer. And while I do like ginger beers this isn’t one of the better ones ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10358559_10153118667468745_6994245863309298252_n.jpg?oh=a491d8694a35e890a811600242fb7bd9&oe=5769853C',
	link:'https://www.facebook.com/photo.php?fbid=10153118667468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale IPA ',
	pct:5.5,
	desc:'Always slightly disappointed by the vale range not being as good as vale ale',
	score:null,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/10557224_10153118667568745_7444873751997956052_n.jpg?oh=9f2586a2ee715224f8a8cf3b01aec6be&oe=57240AB3',
	link:'https://www.facebook.com/photo.php?fbid=10153118667568745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked Elf WitBier ',
	pct:5.0,
	desc:'Fairly mild for a wheat beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10292286_10153118667738745_8355190794765320413_n.jpg?oh=2b91a56b1a7dc7c6f618578a85525d9c&oe=5767658C',
	link:'https://www.facebook.com/photo.php?fbid=10153118667738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lander Brau ',
	pct:4.7,
	desc:'Seems like it\'s a cheap flavourless wheat beer but since I don\'t like wheat beer I\'m ok with that ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11000604_10153118667938745_2598821758352900098_n.jpg?oh=b8b667f168bee8d4a393a6b4b94d411c&oe=576D1FE9',
	link:'https://www.facebook.com/photo.php?fbid=10153118667938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN Bitter ',
	pct:4.0,
	desc:'Tastes the same as the green one but not as strong ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/10450836_10153118667958745_9176447944373645082_n.jpg?oh=21db0862c48796a6fb537a5cc36c515c&oe=5764D5FF',
	link:'https://www.facebook.com/photo.php?fbid=10153118667958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Clear ',
	pct:4.5,
	desc:'Tastes like water ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10151181_10153118668273745_149724940762965990_n.jpg?oh=ecc1182bdfb3d910d009206d773e9fb7&oe=57294F19',
	link:'https://www.facebook.com/photo.php?fbid=10153118668273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Johannes ',
	pct:6.5,
	desc:'Slightly too sweet but ok ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/10471235_10153118668688745_4443326077354329396_n.jpg?oh=e802d81811dee24a089e2180f74f1afc&oe=575D2184',
	link:'https://www.facebook.com/photo.php?fbid=10153118668688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber pils ',
	pct:5.0,
	desc:'Not exciting ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1902891_10153118668708745_4563543533450469126_n.jpg?oh=5671d56c26f7467f038bb776270cc844&oe=57706557',
	link:'https://www.facebook.com/photo.php?fbid=10153118668708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ballast Point Big Eye ',
	pct:7,
	desc:'A nice tasty IPA. I like the lack of a bitter aftertaste ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/10389593_10153118668748745_5666950047802645873_n.jpg?oh=7bce1b8f141cb4fcc9a331a560021b85&oe=572D0F63',
	link:'https://www.facebook.com/photo.php?fbid=10153118668748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad long trip Saison ',
	pct:6.6,
	desc:'Very tasty, but the fizz is a bit strange. Sits in such a strange middle ground but I want more ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10986616_10153118669198745_2610490748271486451_n.jpg?oh=c9976bc98f14226855fe5b457d4e2fd4&oe=572327C3',
	link:'https://www.facebook.com/photo.php?fbid=10153118669198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perla Midowa ',
	pct:6.0,
	desc:'A nice hint of honey. Sweeter than most beers ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11018324_10153118669153745_6177767464748408498_n.jpg?oh=acd08b17bc787188fe108621b8b70f15&oe=5728D342',
	link:'https://www.facebook.com/photo.php?fbid=10153118669153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Storm Super Dry Beer ',
	pct:5.0,
	desc:'Your regular plain cheap lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11038700_10153118669473745_5502916115063582938_n.jpg?oh=9bf8a9adcb0bdddfcd9eee22a9ca5a1a&oe=57631B4B',
	link:'https://www.facebook.com/photo.php?fbid=10153118669473745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden lion beer ',
	pct:5.6,
	desc:'A nicely rounded flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11021223_10153118669773745_8881697342781962806_n.jpg?oh=53cd07e3cdf624c20063d1375a8137c5&oe=57243D6E',
	link:'https://www.facebook.com/photo.php?fbid=10153118669773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love Dale Lager ',
	pct:4.7,
	desc:'Quite a smooth lager. Or could just be that it’s the first beer on Friday ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/t31.0-0/p480x480/10687355_10153118669793745_4229208713620347909_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain Pilsner ',
	pct:4.5,
	desc:'Pretty plain, time to move onto something stronger today ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/t31.0-0/p480x480/10845763_10153118669868745_3771962632087142041_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa Valley Milk Stout ',
	pct:7.0,
	desc:'Was expecting this to taste like milk but it’s just a creamy stout ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11034204_10153118792398745_930727431364883158_n.jpg?oh=b6386b3a7e81c560be974cc7ca270f89&oe=576613CA',
	link:'https://www.facebook.com/photo.php?fbid=10153118792398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Lychee Beer ',
	pct:4.5,
	desc:'Too sweet for me, just doesn’t take like a beer anymore ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10311768_10153118792388745_7466271610444299802_n.jpg?oh=596933a5f7affc949dab04ba85367ea3&oe=572709E1',
	link:'https://www.facebook.com/photo.php?fbid=10153118792388745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Past Blue Ribbon ',
	pct:5.0,
	desc:'Not sure why this gets branded as a hipster beer. It’s just a bland lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/1926933_10153118792373745_471015037580664056_n.jpg?oh=c44e3e65fa512c617a629fbdca0de0e7&oe=572C04BB',
	link:'https://www.facebook.com/photo.php?fbid=10153118792373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Chilli Beer ',
	pct:4.2,
	desc:'Has a really strong hit of chilli but I like that. You get the coolness of a beer mixed with the heat of chilli ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11034166_10153118792613745_1685865302807726235_n.jpg?oh=be6d38810aa70ef79101445c4484e0d5&oe=575C597F',
	link:'https://www.facebook.com/photo.php?fbid=10153118792613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Pale ale ',
	pct:5.1,
	desc:'A well balanced pale ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11017023_10153118792808745_2253924034975828582_n.jpg?oh=14382faecc801a5cb2d67d39d9900c62&oe=57301BC8',
	link:'https://www.facebook.com/photo.php?fbid=10153118792808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lick Pier Ginger Beer ',
	pct:4.0,
	desc:'A little bit too fizzy but nice otherwise ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10988914_10153118793028745_6211347906406183583_n.jpg?oh=291c62a9313a4f2801b470a1420409d5&oe=5761D5C4',
	link:'https://www.facebook.com/photo.php?fbid=10153118793028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Adams Boston Lager ',
	pct:4.7,
	desc:'A classic. Need to find this on tap somewhere ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11025711_10153118793008745_157967989601698522_n.jpg?oh=c5c9f4e7a1351fc5dc4d4396e6f58b31&oe=576AA614',
	link:'https://www.facebook.com/photo.php?fbid=10153118793008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines Kolsch ',
	pct:4.6,
	desc:'Makes me want to try more kolsch beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/10452382_10153118793263745_8541367164944833885_n.jpg?oh=aecf5fbe411fb4f7516cb55bae71daeb&oe=572C1F02',
	link:'https://www.facebook.com/photo.php?fbid=10153118793263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit Pale Ale ',
	pct:4.9,
	desc:'I’m a fan ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11024705_10153118793433745_1941343873752633305_n.jpg?oh=590ce230595193984db8710dc799c481&oe=576C27E3',
	link:'https://www.facebook.com/photo.php?fbid=10153118793433745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'BROK export ',
	pct:5.2,
	desc:'Too malty. One of the worse polish beers I’ve had ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11150982_10153225352773745_2645273460851977484_n.jpg?oh=d11b6c229a571efe11b2e657dcc867cc&oe=5764409F',
	link:'https://www.facebook.com/photo.php?fbid=10153225352773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cavalier courage ',
	pct:4.5,
	desc:'A bit plain for me but very good for what it is ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/11077960_10153225352783745_1418047245676555322_n.jpg?oh=9da4df35fca50413bda6a5631c686136&oe=5770C556',
	link:'https://www.facebook.com/photo.php?fbid=10153225352783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dutch windmill ',
	pct:4.6,
	desc:'Standard lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11140753_10153225352778745_8798373029749618991_n.jpg?oh=439615cf54797b2371d2f28e88eb04cd&oe=57714D5A',
	link:'https://www.facebook.com/photo.php?fbid=10153225352778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pony fish unlikely lager ',
	pct:4.7,
	desc:'Lager with something extra but nothing special ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/11096283_10153225353503745_2273426521907233162_n.jpg?oh=4c940212dc9cce25b8cbfdb5d853b2af&oe=57604478',
	link:'https://www.facebook.com/photo.php?fbid=10153225353503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures IPA ',
	pct:6.4,
	desc:'Little creatures is like a baseline for a type of drink ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/17298_10153225353618745_5211021832992114282_n.jpg?oh=d8d03cb396f085122d014f95e19439e7&oe=5732DD04',
	link:'https://www.facebook.com/photo.php?fbid=10153225353618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sainte etienne ',
	pct:4.8,
	desc:'Average Aldi lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/10410488_10153225353563745_8285613091047049802_n.jpg?oh=918f93d2fc8704ff69f43d77d18a6b44&oe=5771609E',
	link:'https://www.facebook.com/photo.php?fbid=10153225353563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'My Antonia ',
	pct:7.5,
	desc:'Surprisingly this tastes better after I brushed my teeth ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/1473040_10153225353703745_3939681785801200434_n.jpg?oh=9add6a2b7cf68e44eb506bbf0ccd37d2&oe=57304CB3',
	link:'https://www.facebook.com/photo.php?fbid=10153225353703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pan head Pilsner ',
	pct:5.2,
	desc:'A little bit metallic. Not my favourite ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/17127_10153225353823745_2917311890568592350_n.jpg?oh=cacad88914362a7b244726976d80487b&oe=576CB79B',
	link:'https://www.facebook.com/photo.php?fbid=10153225353823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young\'s double chocolate stout ',
	pct:5.2,
	desc:'A nice chocolate flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11146531_10153225353988745_3855298969416355875_n.jpg?oh=08f4a1bb4cf4314f41accbc3d92f8f3e&oe=5770AB43',
	link:'https://www.facebook.com/photo.php?fbid=10153225353988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point resin ',
	pct:9.1,
	desc:'Very bitter but without any sort of floral hop taste to balance it out ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11053047_10153225354168745_5695677735113264681_n.jpg?oh=31705aea6382a6b01b201f471e7a0901&oe=572FD80B',
	link:'https://www.facebook.com/photo.php?fbid=10153225354168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Bengali ',
	pct:6.5,
	desc:'Lots of subtle character ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11148760_10153225354163745_4060898664025313434_n.jpg?oh=4cd3b1bd1935d91aefa3555c51b06a4f&oe=5731BEF0',
	link:'https://www.facebook.com/photo.php?fbid=10153225354163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon dog watermelon weizen ',
	pct:5.3,
	desc:'Really subtle watermelon taste. Takes a while to get used to. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11136648_10153225354308745_6098979194311010987_n.jpg?oh=f2c86583285adcfa830c799100bd2bf9&oe=572BF7F2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade rebel ale ',
	pct:4.7,
	desc:'A little stronger than a lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/10494628_10153225354518745_289668608818495871_n.jpg?oh=c85d90495e3710cd38eb7cd2e9c7a946&oe=576E99EF',
	link:'https://www.facebook.com/photo.php?fbid=10153225354518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Immortal beloved Hefeweizen ',
	pct:5.5,
	desc:'Basic wheat beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/p480x480/11159507_10153225354628745_6658479749281312928_n.jpg?oh=d7bd8cbfaec7c91cd5d31aba7cb65985&oe=576F9CD2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Tank nine ',
	pct:4.6,
	desc:'Nicely hopped ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11148511_10153225354708745_902540998621637913_n.jpg?oh=042e81546fbeacbbb20e3f074bf14ea4&oe=572BA06B',
	link:'https://www.facebook.com/photo.php?fbid=10153225354708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire jack of spades ',
	pct:null,
	desc:'A very nice chocolate flavour ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11130116_10153225365978745_2851210165116478542_n.jpg?oh=efa86bb99e86bc946d32066408729718&oe=576FE798',
	link:'https://www.facebook.com/photo.php?fbid=10153225365978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Crisp ',
	pct:5.4,
	desc:'More harsh than crisp. A little bit more bitter than it should be ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11084248_10153225365988745_6811395875070848425_n.jpg?oh=ac820ea72c1f00821de3339c4b8fca69&oe=576B9369',
	link:'https://www.facebook.com/photo.php?fbid=10153225365988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Globe Premium Draught ',
	pct:4.6,
	desc:'Standard lager. Like the can though ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/14716_10153225365973745_9134185236353368363_n.jpg?oh=63f6346442c22fa7087a7de3879bf7b2&oe=5769DEE7',
	link:'https://www.facebook.com/photo.php?fbid=10153225365973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Sweet action ',
	pct:5.2,
	desc:'Nice sweet hoppy taste ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11149483_10153225366508745_5535316799902667426_n.jpg?oh=23eb34df46f12ea4d70728d9209b15d1&oe=57673CA7',
	link:'https://www.facebook.com/photo.php?fbid=10153225366508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ single hop nelson ',
	pct:8.0,
	desc:'Perfect level of bitterness ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11130263_10153225366548745_4430696674965972638_n.jpg?oh=4896139d95207d99f5f261d2426b2e17&oe=57610C45',
	link:'https://www.facebook.com/photo.php?fbid=10153225366548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La guillotine ',
	pct:8.5,
	desc:'Absolutely amazing 1',
	score:0,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11156123_10153225366453745_4053445365399151631_n.jpg?oh=f4aefc3a1432a340716b985a12d1205b&oe=5762BC78',
	link:'https://www.facebook.com/photo.php?fbid=10153225366453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White choc & raspberry pils ',
	pct:5,
	desc:'Really mild on the choc and raspberry so the beer flavour isn\'t overwhelmed ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11027435_10153225366763745_2151282598672247864_n.jpg?oh=8a82954d7a0e7dc5ba2d96ab38eadb3d&oe=572D6E8B',
	link:'https://www.facebook.com/photo.php?fbid=10153225366763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hargreaves hill pale ale ',
	pct:4.9,
	desc:'Like a winery pretending to make a beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/247107_10153268256703745_3742881335896716752_n.jpg?oh=6677654aa68191630e29a21da6eeab8a&oe=5763B52C',
	link:'https://www.facebook.com/photo.php?fbid=10153268256703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Global Warmer ',
	pct:7.0,
	desc:'Tangy, strong ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11196336_10153268256713745_6680283658542121771_n.jpg?oh=437f75cb519d0357950d320d6eee20e2&oe=575E37ED',
	link:'https://www.facebook.com/photo.php?fbid=10153268256713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cristal ',
	pct:4.9,
	desc:'A beer that goes down easy when you’re in a rush ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/11206000_10153268256698745_6063621327290165780_n.jpg?oh=4d994cd0c89b48b526964ce66da7e0e4&oe=576FADFD',
	link:'https://www.facebook.com/photo.php?fbid=10153268256698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra Italia 1906 ',
	pct:4.8,
	desc:'mild and refreshing ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/11205086_10153268257048745_439269609069418781_n.jpg?oh=834aaf8345db4cfde5f52e028138e381&oe=5724F319',
	link:'https://www.facebook.com/photo.php?fbid=10153268257048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat fancy pants ',
	pct:5.2,
	desc:'Really tasty but also easy to drink ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/603733_10153268257103745_7684396821090282649_n.jpg?oh=8f5af6c7efa5c8d5e7f3df5212143599&oe=576AC808',
	link:'https://www.facebook.com/photo.php?fbid=10153268257103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers premium lager ',
	pct:4.8,
	desc:'Not nearly as good as their other offerings ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlt1/v/t1.0-0/p480x480/11178189_10153268257113745_2486098126429601238_n.jpg?oh=039229d6dab5471f0f7411b01041cf79&oe=5770EB28',
	link:'https://www.facebook.com/photo.php?fbid=10153268257113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pixel 480p ',
	pct:4.8,
	desc:'Pretty good all round ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11209719_10153268257203745_8370119320216109443_n.jpg?oh=72e254392adb814ccd24c9052f963045&oe=5765282D',
	link:'https://www.facebook.com/photo.php?fbid=10153268257203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay alpha pale ale ',
	pct:5.2,
	desc:'Standard Matilda bay beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10659329_10153268257393745_1308545288385225140_n.jpg?oh=13f54cbb897e3ea6b40582be6287fc54&oe=57281B9E',
	link:'https://www.facebook.com/photo.php?fbid=10153268257393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quiet deeds white ipa ',
	pct:6,
	desc:'A strange combination. Maybe not quite one I could get used to ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/q84/p480x480/11053929_10153268257438745_724512553237905656_n.jpg?oh=aaf91f71e970e89fa6d8c7dce67c6c3e&oe=5724E215',
	link:'https://www.facebook.com/photo.php?fbid=10153268257438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Foo brew ',
	pct:5.0,
	desc:'Not a thing right with this drink except that it\'s beer ',
	score:2,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11182107_10153268257443745_4399139666821958419_n.jpg?oh=3f9379e7ceb2485545eebbaf561999a9&oe=5764E873',
	link:'https://www.facebook.com/photo.php?fbid=10153268257443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo Brew Hefeweizen ',
	pct:5.1,
	desc:'Wouldn’t want another ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11182307_10153268257633745_3691539250579390263_n.jpg?oh=d2205eaf4ee5f385bf9a669f0c29f400&oe=5763C315',
	link:'https://www.facebook.com/photo.php?fbid=10153268257633745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innis & Gunn original ',
	pct:6.6,
	desc:'Not what I expected. Sweet and strange ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11196243_10153268257703745_5034055497574956739_n.jpg?oh=e16c9965df187d73786c6f162ed72d7f&oe=57298E01',
	link:'https://www.facebook.com/photo.php?fbid=10153268257703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn golden ale ',
	pct:4.5,
	desc:'Not one you see around very often ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/11178208_10153268265353745_1241728649667354734_n.jpg?oh=fb45a7dd5f63b183fc0cb2320278f6de&oe=5731A2AB',
	link:'https://www.facebook.com/photo.php?fbid=10153268265353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pikes pilsner lager ',
	pct:4.5,
	desc:'No fish taste at all ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11205492_10153268265378745_5159414108787972846_n.jpg?oh=6ec005360bc2267b0f1a0b09173443d9&oe=57700341',
	link:'https://www.facebook.com/photo.php?fbid=10153268265378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Altenmünster ',
	pct:4.9,
	desc:'Such a cool name and bottle ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11182040_10153268265373745_4318030430351182427_n.jpg?oh=4c7579ea591dab956f1095a410913827&oe=572D7FD9',
	link:'https://www.facebook.com/photo.php?fbid=10153268265373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love tap double lager ',
	pct:5.9,
	desc:'Have to love a nice strong lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11206105_10153268265533745_1005147961464463270_n.jpg?oh=7660a46aa691ad58e39cb8fc65ff9226&oe=576073AA',
	link:'https://www.facebook.com/photo.php?fbid=10153268265533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu schloss hell ',
	pct:4.9,
	desc:'Got it from Aldi, wasn’t expecting much ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10356419_10153268265598745_7305179253101068466_n.jpg?oh=d3a51507d1dca7258615e936e52deda2&oe=576C41C3',
	link:'https://www.facebook.com/photo.php?fbid=10153268265598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pistonhead lager ',
	pct:4.6,
	desc:'Pretty average lager ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11149264_10153268265618745_5697774882754067421_n.jpg?oh=6bca82ae42c4d9faeb8556fa24e6e715&oe=5766150A',
	link:'https://www.facebook.com/photo.php?fbid=10153268265618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads break water ',
	pct:4.5,
	desc:'Slightly better than your standard ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/11178233_10153268265658745_1088283222834381460_n.jpg?oh=f9c095aecee46a45cd0dcf36376051e8&oe=572A496C',
	link:'https://www.facebook.com/photo.php?fbid=10153268265658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos Equis Ambar ',
	pct:4.5,
	desc:'Has more of a Polish flavour than Mexican ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/q81/p480x480/10421550_10153268279173745_3566359759975585153_n.jpg?oh=a7eb4dc48ef540c338d1ef2e05eec140&oe=576E164A',
	link:'https://www.facebook.com/photo.php?fbid=10153268279173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington pale ale ',
	pct:4.7,
	desc:'One of the best all round beers I’ve tasted ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11188184_10153268279118745_1035950770576096625_n.jpg?oh=19297ffcba209fdeb88e47899b16ec77&oe=572E7E91',
	link:'https://www.facebook.com/photo.php?fbid=10153268279118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'El Loco ',
	pct:4.6,
	desc:'Even worse than Corona ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11017350_10153268279168745_6892560688839392935_n.jpg?oh=a150b322e14a49deb46a74ae0888e336&oe=5766BC50',
	link:'https://www.facebook.com/photo.php?fbid=10153268279168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Melbourne bitter ',
	pct:4.6,
	desc:'Of the standard Australian beers this one ranks pretty low ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/13530_10153268279263745_7432093397688380903_n.jpg?oh=22037ca712885aa42512eddcde00abae&oe=575FE8E4',
	link:'https://www.facebook.com/photo.php?fbid=10153268279263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saint-Mihal ',
	pct:4,
	desc:'Pretty mild but overall ok. Better than expected ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10985916_10153268279573745_5444654809518299041_n.jpg?oh=55cf453ffe5a4fc03774fb835846f8e9&oe=572C53DF',
	link:'https://www.facebook.com/photo.php?fbid=10153268279573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit White Ale ',
	pct:4.5,
	desc:'One of the nicest white beers I’ve had. Another winner from White Rabbit ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1932304_10153268279663745_7818150974405781457_n.jpg?oh=b7bc22e0ccb48818fa654e2636c729ff&oe=5768E39B',
	link:'https://www.facebook.com/photo.php?fbid=10153268279663745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour reserve amber ale ',
	pct:5.2,
	desc:'This tastes like a dark ale but isn’t supposed to. The taste is ok but I’m worried by how badly this is labeled. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/q82/p480x480/10403262_10153268279703745_1182589880637374526_n.jpg?oh=8045f49b64614b1c8e75f2b72f0451e5&oe=575DDF19',
	link:'https://www.facebook.com/photo.php?fbid=10153268279703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Pale ale ',
	pct:4.5,
	desc:'A really mild pale ale but with a great smooth flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/10421490_10153268279843745_9177649199173204206_n.jpg?oh=23decfb1621b322d41fa8fcd4e37e25b&oe=5767B012',
	link:'https://www.facebook.com/photo.php?fbid=10153268279843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Summer ale ',
	pct:4.5,
	desc:'Another winner from steamrail but not as nice as the pale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/11062864_10153268279933745_3157338283510709307_n.jpg?oh=625b55291d92e0f801740ef555621fe4&oe=57276E72',
	link:'https://www.facebook.com/photo.php?fbid=10153268279933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail amber ',
	pct:4.5,
	desc:'Not as good as the rest of the range ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/11109179_10153268279943745_3245706738598167550_n.jpg?oh=e88bbdd189f39de079cd10263b37809e&oe=576F962D',
	link:'https://www.facebook.com/photo.php?fbid=10153268279943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s southern pale ale ',
	pct:4.6,
	desc:'Like a very mild pale ale. Refreshing ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/t31.0-0/p480x480/10498559_10153268294398745_8634108256899324103_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grand ridge Moonshine ',
	pct:8.5,
	desc:'The description on the bottle makes this sound awful but it’s not too bad. Could be a little bit smoother but the overall flavour is really nice ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/10462829_10153268294448745_4601669711477307040_n.jpg?oh=4bbcc0d44c2acdaf51a08095a27c05cb&oe=5762E1F2',
	link:'https://www.facebook.com/photo.php?fbid=10153268294448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers Arms Keeper’s lager ',
	pct:4.6,
	desc:'A sweet and quite flavourful lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/l/t31.0-0/p480x480/1537711_10153268294383745_2698680166388774656_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294383745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry’s Brew am I ',
	pct:5.0,
	desc:'Young henry’s haven’t let me down yet ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/11204930_10153268294698745_7123736277636761157_n.jpg?oh=9f640ffb9bb6e79cea8ca8de672df195&oe=576FD5DE',
	link:'https://www.facebook.com/photo.php?fbid=10153268294698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'’69’ Summer Ale ',
	pct:4.6,
	desc:'Surprisingly happy with this one ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11148611_10153268294718745_4388827143167133097_n.jpg?oh=5e61aec73d39bc7b92de925cedf44282&oe=572C27A9',
	link:'https://www.facebook.com/photo.php?fbid=10153268294718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'New Englander Hop Cannon IPA ',
	pct:6.6,
	desc:'Perhaps a few too many hops for me ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/11202600_10153268294733745_5223220854392756415_n.jpg?oh=558aaf8cb1ceaff56ab8851755315268&oe=5724C737',
	link:'https://www.facebook.com/photo.php?fbid=10153268294733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ÜberBräu ',
	pct:4.0,
	desc:'Standard cheap beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10346275_10153268294828745_7444781895935179067_n.jpg?oh=1d2fbd2e345bf0cdef7a57b60992ba39&oe=572F0480',
	link:'https://www.facebook.com/photo.php?fbid=10153268294828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain pale ale ',
	pct:4.9,
	desc:'Mmm, pale ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/11173400_10153268295048745_1794514503671401328_n.jpg?oh=2e86238712a7e5675ae26a857a7be778&oe=5760C99E',
	link:'https://www.facebook.com/photo.php?fbid=10153268295048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA St Josephs ',
	pct:9.5,
	desc:'Not the best triple but a nice flavour none the less ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11025707_10153268294958745_151299719186905005_n.jpg?oh=e09842bb8c93e8352e2b83a79037df7e&oe=5770636D',
	link:'https://www.facebook.com/photo.php?fbid=10153268294958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue Santa’s private reserve ale ',
	pct:6.0,
	desc:'A hearty beverage ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11149464_10153268295053745_1257589284621380857_n.jpg?oh=13ab67b55372f13b23888b1132ab2902&oe=5766429E',
	link:'https://www.facebook.com/photo.php?fbid=10153268295053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Brewery Seasonal Ale ',
	pct:4.7,
	desc:'Not up to the normal lord nelson standard ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11150609_10153268295143745_4412554411779312688_n.jpg?oh=fd5093932290983953e08653cab77573&oe=5730E0A2',
	link:'https://www.facebook.com/photo.php?fbid=10153268295143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ale house pale draught ',
	pct:4.2,
	desc:'Too much like a lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11212761_10153268295198745_2192040651986082448_n.jpg?oh=4392f24f62dd81a5edc5fc2153a292b1&oe=575FD215',
	link:'https://www.facebook.com/photo.php?fbid=10153268295198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers growler ',
	pct:4.7,
	desc:'Mild sweet brown ale. Surprisingly easy drinking ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/11148587_10153268299343745_976562173073925737_n.jpg?oh=ca57c7978d198831bcb118b1d76cb0fe&oe=5764FB39',
	link:'https://www.facebook.com/photo.php?fbid=10153268299343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s American pale ale ',
	pct:5.7,
	desc:'Was hoping for a hoppier taste. More of a pale ale for getting smashed ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/22311_10153268299368745_777193479112346497_n.jpg?oh=c3696c82e95501546f7dfd1325fe7c74&oe=5725AE72',
	link:'https://www.facebook.com/photo.php?fbid=10153268299368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers Kung foo lager ',
	pct:null,
	desc:'Like a tangy lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/10428667_10153268299353745_7595281458401637305_n.jpg?oh=d21d1a403e58fb6f0f06e74907924668&oe=576C0DDD',
	link:'https://www.facebook.com/photo.php?fbid=10153268299353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rising sun pale ale ',
	pct:5.0,
	desc:'Was expecting more from this. It’s the nice pale flavour but with too much harshness ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/10985454_10153268299563745_9155074984245162225_n.jpg?oh=fb9ff6f360cec98b7132f6ac977a2d86&oe=57278613',
	link:'https://www.facebook.com/photo.php?fbid=10153268299563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maximus ',
	pct:5.8,
	desc:'Good towards the end ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11182152_10153268299603745_965318376264137516_n.jpg?oh=5db52af25c94555efa4c49dc51684feb&oe=57307111',
	link:'https://www.facebook.com/photo.php?fbid=10153268299603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms journeyman ',
	pct:3.5,
	desc:'Nice and easy drinking, but still a mid strength ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11200596_10153268299613745_30462160346726619_n.jpg?oh=33188d10976ae998978c87e4ab67ccc1&oe=576056BE',
	link:'https://www.facebook.com/photo.php?fbid=10153268299613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit dark ale ',
	pct:4.9,
	desc:'Not what I usually expect from a dark ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/q81/p480x480/11168124_10153268299693745_7328518567704258929_n.jpg?oh=b1b006382b1e5c45864b3781099256ed&oe=576FE969',
	link:'https://www.facebook.com/photo.php?fbid=10153268299693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liberty ale ',
	pct:5.9,
	desc:'Very nicely done. Great for a session beer ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11210416_10153268299813745_8323582624602808812_n.jpg?oh=0c6207d0cf2f03c1c1a0e10f4b9d7dd5&oe=5763ED8B',
	link:'https://www.facebook.com/photo.php?fbid=10153268299813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam lager ',
	pct:4.9,
	desc:'A very flavourful lager. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11174764_10153268299828745_5386835742329909663_n.jpg?oh=46df777d30b53ffeee419ea5b1d243ef&oe=575F5A2E',
	link:'https://www.facebook.com/photo.php?fbid=10153268299828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boag XXX Ale ',
	pct:4.8,
	desc:'A solid flavour ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/q81/p480x480/11666075_10153438034333745_2014329694046827935_n.jpg?oh=a7622092f0dfba556e4eca50d561359e&oe=576D45B2',
	link:'https://www.facebook.com/photo.php?fbid=10153438034333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Žatec ',
	pct:4.6,
	desc:'Tastes more polish than Czech ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlt1/v/t1.0-0/p480x480/11692789_10153438034343745_2933345002405640949_n.jpg?oh=2fc37eaaf3cd7b5fffa7c6438110e8c3&oe=57329944',
	link:'https://www.facebook.com/photo.php?fbid=10153438034343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fiji Bitter ',
	pct:4.6,
	desc:'Has a slight tang to it that you don’t get with Australian bitters ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/11698631_10153438034358745_1791286718120294864_n.jpg?oh=4386c3435b14121c90645bfc8a30d2f2&oe=5733A914',
	link:'https://www.facebook.com/photo.php?fbid=10153438034358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Noble Pale ale ',
	pct:5.2,
	desc:'Was expecting much more. Just a plain lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/11202109_10153438034543745_2281064819509080771_n.jpg?oh=c42d5abf393a623a9a22a7d0f427d0dc&oe=576BFD9E',
	link:'https://www.facebook.com/photo.php?fbid=10153438034543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail pilsner',
	pct:4.5,
	desc:'A bit too much like a standard lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtl1/v/t1.0-0/p480x480/11667503_10153438034893745_6099533991518812550_n.jpg?oh=822dffa48d4dd827512b1518014b2eb9&oe=57256A24',
	link:'https://www.facebook.com/photo.php?fbid=10153438034893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds taco ',
	pct:5.2,
	desc:'The best wheat beer I\'ve ever tasted ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11693950_10153438034793745_2993920563621018004_n.jpg?oh=301506bc679aa59e27a5534cbfd3a030&oe=576B1C3D',
	link:'https://www.facebook.com/photo.php?fbid=10153438034793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Norman Australian ale ',
	pct:5.1,
	desc:'The logo looks dodgy but it\'s actually a nice mild pale ale ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11403010_10153438034973745_575409467690114271_n.jpg?oh=e7a2683bc34d72a07e08ad0deba51bb0&oe=575C84EB',
	link:'https://www.facebook.com/photo.php?fbid=10153438034973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Blonde ',
	pct:4.6,
	desc:'As I expected a plain flavourless lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11703056_10153438035233745_914090365741131285_n.jpg?oh=48855b309a1886b9e895bb3f1aa702fd&oe=57630F93',
	link:'https://www.facebook.com/photo.php?fbid=10153438035233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vonu Pure lager ',
	pct:4.6,
	desc:'Surprisingly good and well rounded ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/11707520_10153438035303745_142890088110404042_n.jpg?oh=e96fbd5763b235d5ab59a79be851235a&oe=572ABA91',
	link:'https://www.facebook.com/photo.php?fbid=10153438035303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'OB golden lager ',
	pct:4.8,
	desc:'A little more flavourful than normal german beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/11665626_10153438035338745_1942830826260024445_n.jpg?oh=30d1c6e7a2dae8c6d12d1f27f99901d7&oe=57624390',
	link:'https://www.facebook.com/photo.php?fbid=10153438035338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kirin first press ',
	pct:5.0,
	desc:'A little better than a standard lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11026787_10153438035418745_3190886247129001905_n.jpg?oh=8053176ef53db2bf0ecccf37e730d55a&oe=576B0020',
	link:'https://www.facebook.com/photo.php?fbid=10153438035418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Černovar  Svetlé ',
	pct:4.9,
	desc:'A bit too malty ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11403435_10153438035523745_1440324413921244933_n.jpg?oh=b258ef729a8d076540fea618a876d816&oe=5732420F',
	link:'https://www.facebook.com/photo.php?fbid=10153438035523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage Roads Single Fin ',
	pct:4.5,
	desc:'Floral and tangy. Much better than expected ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11737813_10153438035548745_1721256026335429959_n.jpg?oh=ea85f8608695b31bc9248cab3296801a&oe=5768B703',
	link:'https://www.facebook.com/photo.php?fbid=10153438035548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vailima ',
	pct:4.9,
	desc:'An all round terrible beer ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/11140143_10153438035598745_277263619216109713_n.jpg?oh=7604bc89b3e667305234077462795a4c&oe=572FE251',
	link:'https://www.facebook.com/photo.php?fbid=10153438035598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dry Hopped Pale Ale ',
	pct:5.4,
	desc:'Much hoppier than a normal pale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11693847_10153438035713745_940540476039083000_n.jpg?oh=b2e1d8794a34c7237fc5d282f51c4d7b&oe=57313A63',
	link:'https://www.facebook.com/photo.php?fbid=10153438035713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Breaking the cardinal Rule ',
	pct:9.5,
	desc:'Not much of an IPA but a nice Belgian tripel ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/11063592_10153438035963745_4745705285004081483_n.jpg?oh=6412299e4d06f3c50eeb11f7b832023b&oe=576F94E7',
	link:'https://www.facebook.com/photo.php?fbid=10153438035963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paddo pale ',
	pct:5.0,
	desc:'No idea how this can be called a pale ale. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11665515_10153438035968745_4205414644516816644_n.jpg?oh=91e5d4ecd4bedb6eac309cc52166b394&oe=5765A9CD',
	link:'https://www.facebook.com/photo.php?fbid=10153438035968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Royal Premium lager ',
	pct:5.1,
	desc:'Nothing premium about this ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11742655_10153438036023745_7783155327321003667_n.jpg?oh=c5ea8e21a9489239c053de41f682c5d9&oe=576F2404',
	link:'https://www.facebook.com/photo.php?fbid=10153438036023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'William’s organic pale ale ',
	pct:4.5,
	desc:'A slightly bitter but well rounded pale ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/11234818_10153438036188745_6157946174058205755_n.jpg?oh=3ecc4c2474a1bf32432aec088e61433c&oe=576A9DA3',
	link:'https://www.facebook.com/photo.php?fbid=10153438036188745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses Chardonnay IPA ',
	pct:6.0,
	desc:'A mild IPA that really hits the spot. Nice floral aroma ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11071649_10153438036343745_3147415906093292508_n.jpg?oh=323da3aa9059705f58181024bf53f425&oe=572C9834',
	link:'https://www.facebook.com/photo.php?fbid=10153438036343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oatis ',
	pct:6.5,
	desc:'A little bit too sharp for me ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11667294_10153438036333745_6944136313097119915_n.jpg?oh=376298412563a2b50de74ae0ff9d8380&oe=5732207A',
	link:'https://www.facebook.com/photo.php?fbid=10153438036333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bruce Malone ',
	pct:6.2,
	desc:'Ok, but something is just wrong ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p320x320/11665530_10153438036328745_3370491198453159853_n.jpg?oh=9ab5112f37344d8bc9e2e914260c91ea&oe=5767E9AD',
	link:'https://www.facebook.com/photo.php?fbid=10153438036328745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big smoke wet hop IPA ',
	pct:null,
	desc:'Like the wet hop, need to find more ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/11233171_10153438036778745_7460779125459519208_n.jpg?oh=bd48a6835ad5f073ced17b0902638fa7&oe=576E7956',
	link:'https://www.facebook.com/photo.php?fbid=10153438036778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camel\'s beard black sour ',
	pct:4.3,
	desc:'Like mixing black current juice with a beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/10404258_10153438036873745_1054335218755238006_n.jpg?oh=97e466d586ee4d93b3fcc54b9864b64c&oe=572F876C',
	link:'https://www.facebook.com/photo.php?fbid=10153438036873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks brewing ESB ',
	pct:5.1,
	desc:'Bitter like an IPA but without the floral hoppiness ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/11709549_10153438036878745_3892385374192512736_n.jpg?oh=0ad1096fef9b38b892e09881b3bf111e&oe=572477B9',
	link:'https://www.facebook.com/photo.php?fbid=10153438036878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koshihikari rice beer ',
	pct:5.0,
	desc:'Amazing how similar this is to a normal lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/11665487_10153438037018745_87412937068060294_n.jpg?oh=b5c952d35dec4040f1091d9e77928b03&oe=575C4850',
	link:'https://www.facebook.com/photo.php?fbid=10153438037018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bastard son pale ale ',
	pct:4.8,
	desc:'Cross between a pale and an IPA ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/11039309_10153438037053745_1453835514615000872_n.jpg?oh=8d59447b70cb0a0f2de6913ec6a5c9a3&oe=5722F69E',
	link:'https://www.facebook.com/photo.php?fbid=10153438037053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river red ale ',
	pct:6.5,
	desc:'A bit harsh for me ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/11403190_10153438037108745_3712451184954693803_n.jpg?oh=0c848996c7e24dbb1e01fc92d3685284&oe=572A5BB5',
	link:'https://www.facebook.com/photo.php?fbid=10153438037108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dirty Bastard ',
	pct:8.5,
	desc:'A lot of flavour in this beer but it’s not quite right ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/11707850_10153438037263745_7444067883763013637_n.jpg?oh=33110b7cfc8a018e2ec3074c8447acf5&oe=575D22D0',
	link:'https://www.facebook.com/photo.php?fbid=10153438037263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry ',
	pct:3.5,
	desc:'A crappier version of the regular superdry ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/11214280_10153438037523745_4286815657184147844_n.jpg?oh=94e87b5d9cc39d04b8c08e8e7917f25e&oe=5767CE31',
	link:'https://www.facebook.com/photo.php?fbid=10153438037523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kooinda hop transfusion ipa ',
	pct:7.5,
	desc:'A very well balanced and floral IPA ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/11659318_10153438037553745_8784383877969678894_n.jpg?oh=9cea3448336b0f65e06261fd7836057a&oe=572BC5EB',
	link:'https://www.facebook.com/photo.php?fbid=10153438037553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms spearhead pale ale ',
	pct:5.2,
	desc:'A bit of a let down. Doesn’t have what I expect from a pale ale ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/11709660_10153438037763745_2498650749121162924_n.jpg?oh=c4fc7481f510b34acaddcf2a3098a2c2&oe=5723D55D',
	link:'https://www.facebook.com/photo.php?fbid=10153438037763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Pale Ale ',
	pct:3.8,
	desc:'Really mild for a pale ale but also really mild on alcohol as well. Guess it would be good if you’re just getting into beer. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11666224_10153438038048745_8968016209259531630_n.jpg?oh=b8b0b3afbc3bbccc275cff8cc97bb3a5&oe=572EA942',
	link:'https://www.facebook.com/photo.php?fbid=10153438038048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s session ale ',
	pct:3.5,
	desc:'Another good beer from Matso’s but still a mid strength ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtl1/v/t1.0-0/p480x480/11709463_10153438038063745_514405702449925285_n.jpg?oh=85dad2067802e56dad0548a9372927bc&oe=572E75E0',
	link:'https://www.facebook.com/photo.php?fbid=10153438038063745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Golden ale ',
	pct:4.2,
	desc:'Zesty as promised. Really high quality all round ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/11742900_10153438038123745_9100299621440264544_n.jpg?oh=80edd2641504523286e22a9fb6598384&oe=5722FB4E',
	link:'https://www.facebook.com/photo.php?fbid=10153438038123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage Directors ',
	pct:4.8,
	desc:'Pretty run of the mill english ale ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/11038987_10153438038293745_6155510821012537170_n.jpg?oh=5c5985a9ab4cdb10f4692f7d8c3d4d8d&oe=57234790',
	link:'https://www.facebook.com/photo.php?fbid=10153438038293745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Pale ale ',
	pct:4.5,
	desc:'A really nice sweet hit of flavour ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/11251267_10153438038418745_6850868855690668787_n.jpg?oh=22030bfee1b20c95e52d6c0de1693a31&oe=573422F4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines ESB ',
	pct:5.4,
	desc:'One of the nicer ESBs that I’ve had. But perhaps I just don’t know what an ESB is supposed to taste like ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/11666089_10153438038438745_5192310955658972737_n.jpg?oh=35e1166efd0f7e833c1e2454a07dc4da&oe=576BD3B4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad Sideways Pale ale ',
	pct:4.0,
	desc:'This beer is just all wrong. Tastes more like an IPA than a pale and the fizz is just strange ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/11692763_10153438038563745_2254106052941195483_n.jpg?oh=8937b8248ee6adaa184be7d7bc30505e&oe=576B0735',
	link:'https://www.facebook.com/photo.php?fbid=10153438038563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carter premium lager ',
	pct:4.0,
	desc:'Nothing premium about this ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/11707555_10153438038703745_5816121848155003948_n.jpg?oh=bb3b9e2f1b943ad5deac506d067e5cc8&oe=576DC745',
	link:'https://www.facebook.com/photo.php?fbid=10153438038703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Claro ',
	pct:4.6,
	desc:'A kind of sweet Mexican lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/11694866_10153438038743745_8578021989993223626_n.jpg?oh=ef0fda337f2ddac000d98142aa02b6f4&oe=5768F140',
	link:'https://www.facebook.com/photo.php?fbid=10153438038743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Five hop ',
	pct:6.2,
	desc:'I really wanted to like this beer because of the cool bottle but the flavour just isn’t right. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/12105748_10153656863078745_1274782812792168869_n.jpg?oh=42146d3a60ce160ad560de839bd164b6&oe=5730D370',
	link:'https://www.facebook.com/photo.php?fbid=10153656863078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands pale ',
	pct:4.6,
	desc:'Missing the boxes it\'s trying to tick ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12109067_10153656863173745_3852359078129229777_n.jpg?oh=dbe97064c02b070964fe90b2620ee51f&oe=57271EFA',
	link:'https://www.facebook.com/photo.php?fbid=10153656863173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands IPA ',
	pct:5.2,
	desc:'Nicer than the pale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/q83/p480x480/12065989_10153656863158745_690647153577625477_n.jpg?oh=98c65644d1e40c9abc3c72dbce649495&oe=57710122',
	link:'https://www.facebook.com/photo.php?fbid=10153656863158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bellerose Blanc ',
	pct:6.5,
	desc:'A fairly mild Belgian beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/q83/p480x480/12141679_10153656863378745_27632216009951724_n.jpg?oh=267388350d3e5dab798d9d290fcde240&oe=57324A92',
	link:'https://www.facebook.com/photo.php?fbid=10153656863378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fred Murrays IPA ',
	pct:5.6,
	desc:'Nothing special but nothing wrong with it ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/q86/p480x480/11988711_10153656863543745_374129198357931998_n.jpg?oh=92d8676ebc3e899acbb9a22add7088f3&oe=576839BF',
	link:'https://www.facebook.com/photo.php?fbid=10153656863543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh Brewing Co FIG JAM IPA ',
	pct:7.0,
	desc:'Has a strange aftertaste that completely ruins the beer ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/10393668_10153656863593745_2358385457397680268_n.jpg?oh=9b9ff37fa26bcd23bd3471ac543ab483&oe=5769A85C',
	link:'https://www.facebook.com/photo.php?fbid=10153656863593745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDevil IPA ',
	pct:6.7,
	desc:'A pretty average IPA which slightly misses the mark ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/12072602_10153656863733745_7824943187452200119_n.jpg?oh=2eb339c3cad1fc6cd601ce4c534a08b0&oe=572B0D94',
	link:'https://www.facebook.com/photo.php?fbid=10153656863733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada 2015 Beer Camp ',
	pct:7.0,
	desc:'Not a favourite but a well rounded flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12105717_10153656863923745_5748636982943209878_n.jpg?oh=a63e09445cdbd1573385cc29d39b80b6&oe=572315D7',
	link:'https://www.facebook.com/photo.php?fbid=10153656863923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wahoo summer lager ',
	pct:4.2,
	desc:'Water with a hint of beer. Good for a summer day ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12115651_10153656864028745_2911616261438807210_n.jpg?oh=229d1c2f213d638a1eae121c69ff8cf7&oe=57663C3C',
	link:'https://www.facebook.com/photo.php?fbid=10153656864028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy yak ',
	pct:4.2,
	desc:'I think the creators were lazy ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12096246_10153656864118745_718405220444766067_n.jpg?oh=bbfe72aefeb9dfa8c69535ebf809fb89&oe=5728D9AE',
	link:'https://www.facebook.com/photo.php?fbid=10153656864118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys darling pale ale ',
	pct:4.4,
	desc:'Not that different from a new ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12107775_10153656864253745_3676978926907656134_n.jpg?oh=cd9c78ba40085284874929d758ef3c2d&oe=575C9873',
	link:'https://www.facebook.com/photo.php?fbid=10153656864253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn Pale Ale ',
	pct:4.7,
	desc:'Decent but there’s just a little something wrong ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12112425_10153656864393745_4992271544321247491_n.jpg?oh=81b1380a4629942218272e3b1239bb9b&oe=57646A48',
	link:'https://www.facebook.com/photo.php?fbid=10153656864393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river Jamaica Ale ',
	pct:5.6,
	desc:'Mild but with an underlying taste that’s really nice ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/12112175_10153656864428745_274214784974027443_n.jpg?oh=228fde813d0dab990f88ee1a76633b96&oe=572EAFA7',
	link:'https://www.facebook.com/photo.php?fbid=10153656864428745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Hop Hunter IPA ',
	pct:6.2,
	desc:'Very hoppy with a nice finish ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtl1/v/t1.0-0/p480x480/12115843_10153656864518745_6379524063255293794_n.jpg?oh=da1cde62da99941d116c4e490c663be7&oe=572A9075',
	link:'https://www.facebook.com/photo.php?fbid=10153656864518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat surefoot stout ',
	pct:5.0,
	desc:'A fairly mild stout ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12115556_10153656864648745_1260864511539950726_n.jpg?oh=405a29afef564eb6450535173bfbe192&oe=5769D6D5',
	link:'https://www.facebook.com/photo.php?fbid=10153656864648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge Road Bling IPA ',
	pct:5.8,
	desc:'Lacking the rounded finish that I was hoping for, but not too bad ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/10350421_10153656864623745_1423000334986932771_n.jpg?oh=0893fcd386e9eca246fad4c1e44f0df5&oe=576BD748',
	link:'https://www.facebook.com/photo.php?fbid=10153656864623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon boy golden ale ',
	pct:4.5,
	desc:'Has a little bit of paleness to it ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/12112481_10153656864773745_7414480192728397600_n.jpg?oh=c0244243c99c83e202c27f20e61bf1b2&oe=57630045',
	link:'https://www.facebook.com/photo.php?fbid=10153656864773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Original special blonde beer ',
	pct:8.6,
	desc:'Super strong, comes in a giant can and tastes better than normal lager. An all round winner. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12079418_10153656865038745_406494349310437104_n.jpg?oh=c4ab8949e5198607aa2208fee3c0688c&oe=5730A126',
	link:'https://www.facebook.com/photo.php?fbid=10153656865038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s hop ale ',
	pct:6.0,
	desc:'Strong and bitter, could do to be a bit more floral ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12143171_10153656865058745_383441333102974608_n.jpg?oh=b0dc2ce6bdd9fc278f39dc398a9124d9&oe=5731DA19',
	link:'https://www.facebook.com/photo.php?fbid=10153656865058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers ',
	pct:5.0,
	desc:'The same as all the other thai beers ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/q81/p480x480/12106825_10153656865098745_7827402413417902820_n.jpg?oh=1af9a48862638d4daf1e6a06a7ed6c8d&oe=572DAE71',
	link:'https://www.facebook.com/photo.php?fbid=10153656865098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Federbräu ',
	pct:4.7,
	desc:'Has the flavour of a german beer but the quality is slightly lacking ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/q86/p480x480/12115906_10153656865258745_5285972944996147053_n.jpg?oh=cc450542de70476ee2b61e8de561eb30&oe=576E3C36',
	link:'https://www.facebook.com/photo.php?fbid=10153656865258745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ICing grapefruit ',
	pct:4.0,
	desc:'Not sure how this qualifies as a beer but it\'s pretty nice regardless ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12109080_10153656865268745_8515065510187069262_n.jpg?oh=44e11b7b85840fd93b18cfd72a4fe0aa&oe=575F1EAF',
	link:'https://www.facebook.com/photo.php?fbid=10153656865268745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Phuket ',
	pct:5.0,
	desc:'A little bit more tangy than other Thai beers ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/q81/p480x480/12118934_10153656865338745_4802874236575690852_n.jpg?oh=df8fb47cd98cbe106981e7dd0aa3d648&oe=5761B0AB',
	link:'https://www.facebook.com/photo.php?fbid=10153656865338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao dark lager ',
	pct:6.5,
	desc:'Doesn’t really taste like a dark lager, just a really crisp and clean lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/10888489_10153656865543745_7177566089678444243_n.jpg?oh=f1a0deba34926c5c1322ef51c2d99a65&oe=572E7629',
	link:'https://www.facebook.com/photo.php?fbid=10153656865543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers X-tra ',
	pct:6.0,
	desc:'A slightly stronger and nicer version of the regular cheers ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/11201812_10153656865613745_2836886776655090085_n.jpg?oh=69387b10710bc5b9033a77afe8fa45df&oe=572CB338',
	link:'https://www.facebook.com/photo.php?fbid=10153656865613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel Pale Pilsen ',
	pct:5.0,
	desc:'Filipino version of San Miguel. Not nearly as nice as the Spanish version ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/q86/p480x480/12108847_10153656865618745_952249772663413561_n.jpg?oh=bf1ab786917302add081a886e3c14cc7&oe=577139C7',
	link:'https://www.facebook.com/photo.php?fbid=10153656865618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The fox mid ale',
	pct:null,
	desc:'A microbrew copy of every other tasteless mid strength lager out there ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/12096074_10153656865793745_4213334596574344775_n.jpg?oh=85474042cceae9838472756a34bc8ae4&oe=576ED571',
	link:'https://www.facebook.com/photo.php?fbid=10153656865793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XXXX bitter ',
	pct:4.6,
	desc:'So hard to find the full strength XXXX even in QLD. And it\'s easy to see why. Needs a shot of vodka like in the old days ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12108168_10153656865913745_802278422732824770_n.jpg?oh=505a66b54609694cf31eb0bd1bec6ede&oe=572B068A',
	link:'https://www.facebook.com/photo.php?fbid=10153656865913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės vyšniu kriek ',
	pct:5.0,
	desc:'A cherry beer. A little bit too see to drink much but nice in small doses ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12116003_10153656865943745_8818428390735256762_n.jpg?oh=eda606133385c9fb6ed028820d315f99&oe=576ECC1E',
	link:'https://www.facebook.com/photo.php?fbid=10153656865943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis grand select ',
	pct:5.4,
	desc:'Standard lager ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12115501_10153656866208745_1270989772264309732_n.jpg?oh=1710b3548a6fd64aed3e0b521315ffb1&oe=5726B2A3',
	link:'https://www.facebook.com/photo.php?fbid=10153656866208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point the way IPA ',
	pct:5.9,
	desc:'Really good example of an IPA ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12088452_10153656866578745_7251403189729284400_n.jpg?oh=bdcb47d7dc467b4b4a8029e488bfa321&oe=57644B12',
	link:'https://www.facebook.com/photo.php?fbid=10153656866578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Thanks captain obvious IPA ',
	pct:5.8,
	desc:'Gotta love citra hops ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12112199_10153656866448745_6538817725943333095_n.jpg?oh=edf8601d4063940496a12b9822f019de&oe=57329232',
	link:'https://www.facebook.com/photo.php?fbid=10153656866448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner kristallweissbier ',
	pct:5.4,
	desc:'Very crisp for a wheat beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12115843_10153656866648745_4612566258079331508_n.jpg?oh=041cd89effbe1138e3b10472eaedb3ea&oe=5723727C',
	link:'https://www.facebook.com/photo.php?fbid=10153656866648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noisy minor anzus IPA ',
	pct:6.0,
	desc:'A bit of a let down, just too bitter ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/12088432_10153656866828745_7848120632268756477_n.jpg?oh=8daafe78b83fc23af34d81d07739cfbe&oe=5724EEB6',
	link:'https://www.facebook.com/photo.php?fbid=10153656866828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Martens Pils ',
	pct:5.0,
	desc:'A good session beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/12072622_10153656866868745_684969190381396266_n.jpg?oh=2629030d733e2523339ebccd496fe542&oe=57600E2A',
	link:'https://www.facebook.com/photo.php?fbid=10153656866868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chimay red ',
	pct:7.0,
	desc:'Well known but not the best example of a belgian dubbel ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/1554374_10153656866968745_899111329413653237_n.jpg?oh=ad300449e1d2eabb4e6915f43363cc29&oe=5723EB7E',
	link:'https://www.facebook.com/photo.php?fbid=10153656866968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds bantam IPA ',
	pct:4.7,
	desc:'My biggest disappointment so far from two birds. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12115580_10153656867073745_1898684720680152438_n.jpg?oh=2361d4790e4aa21496cbbd1e0dd2a65b&oe=572E7AFA',
	link:'https://www.facebook.com/photo.php?fbid=10153656867073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew cult hop zone ',
	pct:5.0,
	desc:'Very good IPA but not sure if it\'s a good session beer ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/12079324_10153656867078745_2445263991582775788_n.jpg?oh=7ded542d6f78f6d00476fde6cbb94712&oe=576CA384',
	link:'https://www.facebook.com/photo.php?fbid=10153656867078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult spoiler alert ',
	pct:4.5,
	desc:'A little bit of a let down from the IPAs ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12107838_10153656867113745_341030388742417750_n.jpg?oh=c30c4462a3c1e3ee3ea70a567b485bf2&oe=57319D3A',
	link:'https://www.facebook.com/photo.php?fbid=10153656867113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade pale ale ',
	pct:4.7,
	desc:'A regular beer pretending to be something more ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12140701_10153656867523745_8057771070522060863_n.jpg?oh=6ba5d2a8a24ee1e072267b2cfb913a35&oe=57295F2C',
	link:'https://www.facebook.com/photo.php?fbid=10153656867523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire nine tails ',
	pct:5.0,
	desc:'Pretty good all round ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/12074484_10153656867603745_6432235869019497791_n.jpg?oh=bc7b2a67f266ff0eb048fc7d4b4e074c&oe=57332C52',
	link:'https://www.facebook.com/photo.php?fbid=10153656867603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Celia ',
	pct:4.5,
	desc:'Slightly bad czech lager. But at least it’s gluten free ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12119170_10153656873518745_1645193236829467007_n.jpg?oh=50be5c06331672360e31abc02d18332c&oe=5722E5D6',
	link:'https://www.facebook.com/photo.php?fbid=10153656873518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxx dry ',
	pct:5.0,
	desc:'Standard ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12107835_10153656873528745_2876365020596691425_n.jpg?oh=66bda967e2a80b7a1f72df854f7d39f3&oe=5761129B',
	link:'https://www.facebook.com/photo.php?fbid=10153656873528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn amber ale ',
	pct:4.7,
	desc:'A bit too bitter ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12109019_10153656873578745_8374191481709518736_n.jpg?oh=965d0bd06df32038d5b5f867f1f4fe6f&oe=5728856E',
	link:'https://www.facebook.com/photo.php?fbid=10153656873578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Pointers pale ale ',
	pct:4.2,
	desc:'A very well rounded pale ale but not that much flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12119151_10153656873648745_4254619746116923719_n.jpg?oh=60835c39a4b5dc7d3865e6847d4ccd0c&oe=57261887',
	link:'https://www.facebook.com/photo.php?fbid=10153656873648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner helfe weissbier ',
	pct:5.4,
	desc:'A very mild flavoured wheat beer ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/12509736_10153811610538745_2189727718735863015_n.jpg?oh=f0bd614602760ab3847aa4a457ddb2a9&oe=5729141B',
	link:'https://www.facebook.com/photo.php?fbid=10153811610538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Downtown Brown ',
	pct:5.0,
	desc:'A fairly unsweet brown ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12400634_10153811610548745_7658175171400136673_n.jpg?oh=1ab2397b7fdc3d97fbb5ba41f75a1071&oe=57276D55',
	link:'https://www.facebook.com/photo.php?fbid=10153811610548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans Hoppy Gonzales ',
	pct:5.9,
	desc:'Really mild and nice chilli flavour but there\'s a little too much bitterness ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1935435_10153811610483745_7535392188033528320_n.jpg?oh=ff2e50140ff64606287f92935c064d1d&oe=5765EB4F',
	link:'https://www.facebook.com/photo.php?fbid=10153811610483745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans red sky IPA ',
	pct:6.5,
	desc:'I great IPA for people who are new to beers with flavour. Mild but really well done ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/12510233_10153811610863745_3262758970154145170_n.jpg?oh=4368e1440d14b7027fcd4920163170b7&oe=5727DF3E',
	link:'https://www.facebook.com/photo.php?fbid=10153811610863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans white Sky ',
	pct:6.5,
	desc:'Never quite tasted right but perhaps I was having an off day ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/l/t1.0-0/p480x480/10561728_10153811610893745_8053139554847988051_n.jpg?oh=9f6909239604edad9425b0d5335b69ef&oe=57232807',
	link:'https://www.facebook.com/photo.php?fbid=10153811610893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s newtowner ',
	pct:4.8,
	desc:'A fairly plain lager ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/12376181_10153811610908745_3920511327334452329_n.jpg?oh=b5132eafb6ad86d27794a65bd60eb28b&oe=57318583',
	link:'https://www.facebook.com/photo.php?fbid=10153811610908745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redds Apple-Ale ',
	pct:4.0,
	desc:'Really mild apple flavour, like a cider without all the sugar ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12507414_10153811611358745_6320534595559779603_n.jpg?oh=bf8de50a7bc25ee0b300848e7fee0939&oe=575F77AF',
	link:'https://www.facebook.com/photo.php?fbid=10153811611358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hill Scotch ale ',
	pct:5.8,
	desc:'Fizzed for about 10 minutes and then just tasted a little blemished ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12495170_10153811611453745_4249513101009687446_n.jpg?oh=47505b8e1c64448a56ea4b82fc576a83&oe=575C3673',
	link:'https://www.facebook.com/photo.php?fbid=10153811611453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult Reset Robot ',
	pct:3.5,
	desc:'A little on the weak side but a really good pale flavour. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12417859_10153811611533745_6524426791759855644_n.jpg?oh=ae0b93018163a6a9f85ca5277016af41&oe=57338141',
	link:'https://www.facebook.com/photo.php?fbid=10153811611533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garagista IPA ',
	pct:5.8,
	desc:'Really nice colour but the flavour misses the mark ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12439242_10153811611693745_5295129091092363707_n.jpg?oh=24b9ef62bdfaddf90df904591ffeea56&oe=575C3193',
	link:'https://www.facebook.com/photo.php?fbid=10153811611693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Alice Porter ',
	pct:5.2,
	desc:'A fairly nice porter, but nothing great ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1227_10153811611783745_4791320626770283018_n.jpg?oh=5df4f0eecd2eb723b66a21afdb63ea48&oe=57246AD0',
	link:'https://www.facebook.com/photo.php?fbid=10153811611783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volkan Santorini blonde ',
	pct:5.0,
	desc:'Has a kind of silty texture to it and an Eastern European tang ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/12510230_10153811618053745_1537940753105870983_n.jpg?oh=6755baa45e9a20a94cafc9f0a45e8464&oe=5728C322',
	link:'https://www.facebook.com/photo.php?fbid=10153811618053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing company citra IPA ',
	pct:6.5,
	desc:'Really nice floral flavour. Gotta love citra hops ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12510389_10153811618073745_2543157782800791845_n.jpg?oh=8a3d09f873f11a1524b21aa4dea7f553&oe=5732F2A7',
	link:'https://www.facebook.com/photo.php?fbid=10153811618073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch voyage of the Galaxy',
	pct:null,
	desc:'Just can\'t get into this. It\'s heavy without a nice flavour behind it ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12523010_10153811617993745_3799427315794683212_n.jpg?oh=b6b6500a965f7bc9504201116e457e39&oe=5764F2BF',
	link:'https://www.facebook.com/photo.php?fbid=10153811617993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Merchant three toe ',
	pct:5.6,
	desc:'Has some sort of wrong tinge to it and nothing to redeem that ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/l/t1.0-0/p480x480/12523010_10153811618698745_8674316170585442130_n.jpg?oh=80eef33328483b77fbf4eda0c6fbc215&oe=576EC8EE',
	link:'https://www.facebook.com/photo.php?fbid=10153811618698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch west coast IPA ',
	pct:5.8,
	desc:'Mild but very tasty. One of the first from batch that I really like ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12510395_10153811618823745_3574564297259479731_n.jpg?oh=f88e61552e8f49cc3a6258961356c8cd&oe=5727F9F2',
	link:'https://www.facebook.com/photo.php?fbid=10153811618823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modus cream of the hop #3 ',
	pct:5.6,
	desc:'Actually more creamy than a normal beer. Really nice ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/12509647_10153811618828745_7009333713246897313_n.jpg?oh=5e6edac07039907e1e9afea50d5e29a6&oe=57644DC6',
	link:'https://www.facebook.com/photo.php?fbid=10153811618828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie kolsch ',
	pct:4.6,
	desc:'Really well balanced but a little lacking in flavour ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-0/p480x480/12509088_10153811619033745_702562891235220957_n.jpg?oh=b2537d2386ef895f9ec257aa583fca6c&oe=575C3AAF',
	link:'https://www.facebook.com/photo.php?fbid=10153811619033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie artisan ale ',
	pct:4.4,
	desc:'A bit of a harsh flavour. Disappointing after the kolsch ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/12509407_10153811619193745_3070555167581402785_n.jpg?oh=5cf128f57cc2755d243f5c82e480b020&oe=5724D200',
	link:'https://www.facebook.com/photo.php?fbid=10153811619193745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gulden draak 9000 ',
	pct:10.5,
	desc:'A little harsh all round without any real nice flavour to back it up. You get used to it but why bother ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/q81/p480x480/580376_10153811619198745_8101596644532309757_n.jpg?oh=5f175e304c0bc884c4e8c38aab3c40d4&oe=5767BA9E',
	link:'https://www.facebook.com/photo.php?fbid=10153811619198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arrogant bastard barrel aged ',
	pct:8.1,
	desc:'Really nice secondary flavour. Could drink a lot of these ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xla1/v/t1.0-0/p480x480/12508899_10153811619303745_6510580439583908445_n.jpg?oh=a2b577754c8a0a5513e38728d2b16246&oe=572AB72D',
	link:'https://www.facebook.com/photo.php?fbid=10153811619303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pinedrops IPA ',
	pct:6.5,
	desc:'A solid IPA, better than I expected ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/581926_10153811639323745_2485735585097388298_n.jpg?oh=6e877ff1a092dc20765dbf9f98efa619&oe=57232AF4',
	link:'https://www.facebook.com/photo.php?fbid=10153811639323745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Killer Sproket Rye IPA ',
	pct:6.2,
	desc:'I haven’t had many rye IPAs but so far they’ve all been great beers. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/1660722_10153811639283745_5357595767484756321_n.jpg?oh=16ec33b86dac9065b44d00a49ad27b6c&oe=572EB699',
	link:'https://www.facebook.com/photo.php?fbid=10153811639283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson Valley Wild Turkey Bourbon Barrel Stout ',
	pct:6.9,
	desc:'Better than I expected, but then I was pretty worried about this one ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/6841_10153811639248745_4589085530063719353_n.jpg?oh=72097647438cc7f6aade123860c05075&oe=575E2507',
	link:'https://www.facebook.com/photo.php?fbid=10153811639248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington IPA ',
	pct:6.4,
	desc:'Another winner from Mornington. Really strong on flavour but without any harshness ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/1933914_10153811639743745_2943766557036716002_n.jpg?oh=b4ce3aaf9a6eb0b97ec5e86ebdfdcb75&oe=5767D501',
	link:'https://www.facebook.com/photo.php?fbid=10153811639743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures Furphy ',
	pct:4.4,
	desc:'Saw this a lot in Melbourne and wish it would start showing up in Sydney. Glad to see some more brewers making Kölschs ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12509006_10153811639708745_4922522512256088245_n.jpg?oh=275fc7a7eb5ba1af7fc08d14c13c1552&oe=57701F15',
	link:'https://www.facebook.com/photo.php?fbid=10153811639708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Eelriver Amber Ale ',
	pct:4.5,
	desc:'Nothing much to say about this one ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/1930332_10153811639763745_6829727140926050001_n.jpg?oh=8d42af4aeb59909dbe2401d7fbb08c19&oe=57663372',
	link:'https://www.facebook.com/photo.php?fbid=10153811639763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedlars Pale ',
	pct:5.3,
	desc:'All round decent pale ale ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/10649831_10153811640038745_8117596568326792946_n.jpg?oh=5fdd4012a0f9cb036b2c8fde7bb26a67&oe=576D5D84',
	link:'https://www.facebook.com/photo.php?fbid=10153811640038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 Sorelle ',
	pct:5.5,
	desc:'A strange looking beer but has a lovely mild Belgian taste ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/q85/p480x480/12509130_10153811640153745_7506807419110071415_n.jpg?oh=322fcaa21b2a21dc19baec1c8f63befe&oe=572599E3',
	link:'https://www.facebook.com/photo.php?fbid=10153811640153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pact pale ale ',
	pct:5.2,
	desc:'Another pale ale that falls short. Seems like too many Australian pales are targeting the lager audience ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/1923172_10153811640033745_626679474657757195_n.jpg?oh=1d19ead3ac5c798465cdb3ad870d09db&oe=576C0A7B',
	link:'https://www.facebook.com/photo.php?fbid=10153811640033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita Amber ',
	pct:4.5,
	desc:'An ok beer but there was a slight tang that I didn’t like. I feel like this brewery has so much more to offer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/1434_10153811640518745_1774691229893967268_n.jpg?oh=9c928ebc5b60304f59f30c246846c5c5&oe=576B32EF',
	link:'https://www.facebook.com/photo.php?fbid=10153811640518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Scorcher Summer Ale ',
	pct:4.6,
	desc:'Fairly inoffensive lager. Can’t complain ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/1929791_10153811640558745_2017001779885811496_n.jpg?oh=b654047b0ca5afad510c5d66428f032f&oe=57232D01',
	link:'https://www.facebook.com/photo.php?fbid=10153811640558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Royal Dutch Post Horn Lager ',
	pct:4.3,
	desc:'It’s beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/1936964_10153811640493745_4599335124953015175_n.jpg?oh=35e257ea11445fb37d85dc93aa09dbbd&oe=575EFE99',
	link:'https://www.facebook.com/photo.php?fbid=10153811640493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Abbot Christmas Ale ',
	pct:11.5,
	desc:'Slightly syrupy. Gives that nice warmth that makes sense at Christmas. Just not in Australia. Still great flavour all round ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12717228_10153890412513745_5272405049843729399_n.jpg?oh=aab8eaa3b65a87629c8535feedfee73f&oe=572B7A1A',
	link:'https://www.facebook.com/photo.php?fbid=10153890412513745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sunburnt Irish red ale ',
	pct:5.0,
	desc:'There’s a fair bit of flavour but it’s just harsh. Not my cup of tea ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/12734008_10153890412458745_3823076669808581993_n.jpg?oh=f69e8b6b5e35cd757c662e3571f4b719&oe=576DD0D6',
	link:'https://www.facebook.com/photo.php?fbid=10153890412458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garage Project La Calavera Catrina ',
	pct:6.9,
	desc:'I may be unique in that I find that chilli and beer are a perfect combination; and this is the best one I’ve had so far ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/t1.0-0/p480x480/12705503_10153890412498745_7528959077834200322_n.jpg?oh=91e6f371ed5cf8a2e61bedcaf47f08a7&oe=572A3C22',
	link:'https://www.facebook.com/photo.php?fbid=10153890412498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Session pale ale ',
	pct:4.7,
	desc:'A little bit harsh for a session beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlt1/v/t1.0-0/p480x480/12717761_10153890412778745_1469082473536049223_n.jpg?oh=333ddf8ae1edcecce064529f78c353f5&oe=5728DB3D',
	link:'https://www.facebook.com/photo.php?fbid=10153890412778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nail Golden IPA ',
	pct:7.0,
	desc:'A little too much bitterness without the flavour to back it up ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/12733411_10153890412873745_394127344743781782_n.jpg?oh=ce2bc6d7f5a6946a2385a5c4948ca390&oe=57625117',
	link:'https://www.facebook.com/photo.php?fbid=10153890412873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy Yak ',
	pct:4.2,
	desc:'Pretty standard ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12494917_10153890412913745_8466195884285998669_n.jpg?oh=de4c792c746358c858c3e65fd60521ed&oe=5768914F',
	link:'https://www.facebook.com/photo.php?fbid=10153890412913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St-ambroise Apricot wheat ale ',
	pct:5.0,
	desc:'The apricot is very faint but kind of interferes with the other flavours in an unpleasant way ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-0/p480x480/12687816_10153890413098745_7756341127358562624_n.jpg?oh=2c935ca15eac839216ea84353159dd4f&oe=57295829',
	link:'https://www.facebook.com/photo.php?fbid=10153890413098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rye hard IPA ',
	pct:6.3,
	desc:'Super bitter without a bold IPA flavour. Sadly the awesome name doesn\'t translate into flavour ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12717260_10153890413303745_2949419762809562441_n.jpg?oh=84ad14caa3d4222cd4a1e08661673135&oe=572CB779',
	link:'https://www.facebook.com/photo.php?fbid=10153890413303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Windhoek ',
	pct:4.0,
	desc:'Eastern European maltyness. Ok for a cheap beer ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12715222_10153890413318745_2007894643886260840_n.jpg?oh=8c1a06162f43c2a122a8e21176945923&oe=57347BB1',
	link:'https://www.facebook.com/photo.php?fbid=10153890413318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke sprocket ',
	pct:6.6,
	desc:'Really nice hop profile for a flavoursome IPA ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/q83/p480x480/12743992_10153890413553745_2836285406574144058_n.jpg?oh=ef7da8a6c7d68bd26d892f2dbd470274&oe=576F249B',
	link:'https://www.facebook.com/photo.php?fbid=10153890413553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Crankshaft ',
	pct:6.0,
	desc:'Really strong on the hops, just a little too bitter ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12744268_10153890413753745_5060146557255132828_n.jpg?oh=7be66543e7607e6d3aca4f442cb95577&oe=57701899',
	link:'https://www.facebook.com/photo.php?fbid=10153890413753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke PSI ',
	pct:10.0,
	desc:'Very sour and bitter. Not for me ',
	score:3,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/11229820_10153890413723745_4413328230475725119_n.jpg?oh=dc7c85153744a4e5fa11ea969f14460d&oe=5730BA11',
	link:'https://www.facebook.com/photo.php?fbid=10153890413723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Cluster 16 ',
	pct:16.2,
	desc:'Like a normal IPA distilled into a super potent form. Too much for me right now but I should retry ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/12741979_10153890413793745_6934869662046573410_n.jpg?oh=e70a7284c83d3277e557bf373f14f28c&oe=575C5B8E',
	link:'https://www.facebook.com/photo.php?fbid=10153890413793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed californicator IPA ',
	pct:7.5,
	desc:'A textbook IPA. Bitter with a strong hop flavour. I just picked it because of the bears having sex on the label ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12717177_10153890413993745_4407733928412012176_n.jpg?oh=0d68f09f0fae7601b4aabf8eb88be050&oe=576593B9',
	link:'https://www.facebook.com/photo.php?fbid=10153890413993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing Galaxy IPA ',
	pct:6.5,
	desc:'Low on bitterness, high on aroma. Can\'t decide between this and the citra ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12688166_10153890414098745_93931054277212370_n.jpg?oh=11c400c8e9aa95f20e569cfefdadb33a&oe=576859FC',
	link:'https://www.facebook.com/photo.php?fbid=10153890414098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen from the vault ',
	pct:5.4,
	desc:'Such an amazing sour lambic. The nerd reference is just a bonus ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12687895_10153890414198745_3642229716769396500_n.jpg?oh=f8cec151aaa6619783b98b59686394cd&oe=57325249',
	link:'https://www.facebook.com/photo.php?fbid=10153890414198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen sequoia ',
	pct:6.2,
	desc:'Listed as an amber but kind of like an IPA but a little smoother ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xta1/v/t1.0-0/p480x480/12733610_10153890414378745_2084592148299538325_n.jpg?oh=f988a687c3403b45e43dca02c0403fa6&oe=572C0FF6',
	link:'https://www.facebook.com/photo.php?fbid=10153890414378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen velvet cream ',
	pct:6.6,
	desc:'Like a Guinness with a little more coffee flavour. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12705540_10153890414573745_7427353905568782339_n.jpg?oh=3c9c0768e78d7d296523a9ab41a398e0&oe=575DB206',
	link:'https://www.facebook.com/photo.php?fbid=10153890414573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen Duncan ',
	pct:3.4,
	desc:'Perhaps one of the mildest beers I\'ve ever had but has a great balance between sour and salty. Deducting points because it\'s a mid strength ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/12733543_10153890414603745_2708879129886926163_n.jpg?oh=8fbfb59c96128ecc48089395e2d85224&oe=5732F9CD',
	link:'https://www.facebook.com/photo.php?fbid=10153890414603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi dry black ',
	pct:5.5,
	desc:'A rather sweet taste compared to the regular asahi. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-0/p480x480/942864_10153890414673745_1846063327846189238_n.jpg?oh=d58f4c0e09365986c8463e33d34d6063&oe=5729EA80',
	link:'https://www.facebook.com/photo.php?fbid=10153890414673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wet hopped oatmeal ale ',
	pct:4.3,
	desc:'A lot more plain than I expected. There\'s a really slight oat aftertaste but I was hoping for it to dominate the beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/12742769_10153890414963745_1738049076033297377_n.jpg?oh=61fa2ee863061178b1f6fded1ccbb7f2&oe=575E87DC',
	link:'https://www.facebook.com/photo.php?fbid=10153890414963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Single-take session ale ',
	pct:4.5,
	desc:'Perhaps not the best beer at 10am. The Belgian flavour seemed a bit too wheaty ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/12715222_10153890415008745_8479217372208836383_n.jpg?oh=93fff32f83e646e37af3fd1e1f93fd2e&oe=57345B77',
	link:'https://www.facebook.com/photo.php?fbid=10153890415008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tecate ',
	pct:4.5,
	desc:'Pretty plain lager, easy drinking. +1 because of the giant can ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12728804_10153890415018745_4089268131902727213_n.jpg?oh=2580a77a4f36fc3806d67801cfad0bbf&oe=576272F4',
	link:'https://www.facebook.com/photo.php?fbid=10153890415018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie boys gunnamatta ',
	pct:6.5,
	desc:'Amazingly floral but with so little bitterness. Has a slight spicyness as well which balances perfectly ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/t1.0-0/p480x480/12646945_10153890415153745_1313474125480375485_n.jpg?oh=e7875f233900ed6efd34de042816cb62&oe=576CA131',
	link:'https://www.facebook.com/photo.php?fbid=10153890415153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum capital pale ale ',
	pct:4.7,
	desc:'A little tangy for a pale but still nice ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12717222_10153890415308745_1813544797541172385_n.jpg?oh=0751b15d01ab586731926bab525a33e9&oe=576F8B00',
	link:'https://www.facebook.com/photo.php?fbid=10153890415308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures dog days ',
	pct:4.4,
	desc:'Surprisingly flavourful for a summer beer. Nice little tang to it ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/12717186_10153890415423745_6451428281725925044_n.jpg?oh=c7d786e519684bfa8b1a23df2bd8a391&oe=572AD932',
	link:'https://www.facebook.com/photo.php?fbid=10153890415423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tradewind lager ',
	pct:4.4,
	desc:'Easy drinking lager. Good for an all day drink ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xft1/v/t1.0-0/p480x480/12717308_10153890415688745_8114544610484440853_n.jpg?oh=8f208a5f21276705da708cc5cfe31b44&oe=57266893',
	link:'https://www.facebook.com/photo.php?fbid=10153890415688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed Kol schisel ',
	pct:4.2,
	desc:'Fairly plain and easy drinking ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12715804_10153890415748745_782298131807112307_n.jpg?oh=1b6279578db4f97effb7380ed9ca72f7&oe=575CEE15',
	link:'https://www.facebook.com/photo.php?fbid=10153890415748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum stinger ',
	pct:4.8,
	desc:'kind of tart but sits in a strange place like it can\'t decide what to be ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-0/p480x480/12717321_10153890415758745_9148183600742438871_n.jpg?oh=35c67fff59f5c06c04f4e3ed5222b8bf&oe=575C8E52',
	link:'https://www.facebook.com/photo.php?fbid=10153890415758745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bristol beer factory independence ',
	pct:4.6,
	desc:'The description sounded good but didn\'t quite hit that mark ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-0/p480x480/12741906_10153890416078745_2509646553682533650_n.jpg?oh=c40065462c2dd69626beadabccc9451c&oe=576A11FF',
	link:'https://www.facebook.com/photo.php?fbid=10153890416078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDog cosmic highway ',
	pct:4.8,
	desc:'Well named, you can\'t quite pick what you\'re drinking. Not bad but fails to master any category ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xlp1/v/t1.0-0/p480x480/12744551_10153890416133745_1898256782764708907_n.jpg?oh=90a6bd42e99bb1f195e48e7c9c30d5b4&oe=576F239E',
	link:'https://www.facebook.com/photo.php?fbid=10153890416133745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm hop select ',
	pct:6.0,
	desc:'I expected more, there\'s a slight metallic taste which shouldn\'t be in a nice beer ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12742633_10153890416108745_3638813966682726331_n.jpg?oh=0018de2b5a0447d931685bb9e81787be&oe=576AD4ED',
	link:'https://www.facebook.com/photo.php?fbid=10153890416108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside othello\'s curse ',
	pct:9.0,
	desc:'Too harsh on the tongue. The one time I\'ve wanted a smaller bottle ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/p480x480/12733449_10153890416838745_3402335338987277776_n.jpg?oh=2fd7df14cabf55d8c538af005a7ef6b4&oe=576DF6C1',
	link:'https://www.facebook.com/photo.php?fbid=10153890416838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita jockamo ',
	pct:6.5,
	desc:'Too harsh, this brewery is still yet to win me over ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-0/p480x480/12718283_10153890416898745_6096850790027178927_n.jpg?oh=fee5a87fa4ce81bdd4be537d7bee48f4&oe=576BEF46',
	link:'https://www.facebook.com/photo.php?fbid=10153890416898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brontide smooth black ale ',
	pct:5.0,
	desc:'Started off a bit harsh but was a lot better than other black ales. Makes me want to try more dark beers ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12734008_10153890416878745_633217613773642603_n.jpg?oh=f4a48b0eaf5ee86ee6de344b5b6c0362&oe=5722F309',
	link:'https://www.facebook.com/photo.php?fbid=10153890416878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rodenbach ',
	pct:5.2,
	desc:'Surprisingly tangy with very little bitterness. Worth a try ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12715222_10153890417253745_2655298397910190348_n.jpg?oh=49d7dfcd3385c6808249f3ca1e9189fb&oe=57270AFA',
	link:'https://www.facebook.com/photo.php?fbid=10153890417253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner pils ',
	pct:5.1,
	desc:'Refreshing but not my favourite flavour ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12717710_10153890417503745_4345190063055237739_n.jpg?oh=df97a4f2467bf3494b20f2fddc6a40be&oe=572ECB09',
	link:'https://www.facebook.com/photo.php?fbid=10153890417503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shepherd Neame IPA ',
	pct:6.1,
	desc:'I’m always disappointed by English IPAs since the flavour I want from an IPA is more akin to the American interpretation with much more floral hops. ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12729064_10153890417368745_6907793566119928582_n.jpg?oh=35e76db41868b79b317a74cdc6986c05&oe=572E62E5',
	link:'https://www.facebook.com/photo.php?fbid=10153890417368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red horse beer ',
	pct:7.0,
	desc:'Nicer than expected. Has a slightly spicy finish  ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12744494_10153890418648745_513314091064162487_n.jpg?oh=5e4269e55ac75f97a8a33f4136ddfd27&oe=572DA7EB',
	link:'https://www.facebook.com/photo.php?fbid=10153890418648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road little bling ',
	pct:3.4,
	desc:'Not tasty enough to justify the low alcohol ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/p480x480/12744494_10153890418973745_1506888197203194129_n.jpg?oh=42850bce0fc6cba60e836672b8af73fd&oe=576C4D52',
	link:'https://www.facebook.com/photo.php?fbid=10153890418973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Molson Canadian ',
	pct:5.0,
	desc:'Crisp and refreshing but nothing special ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12728991_10153890418838745_7409486003049273062_n.jpg?oh=8bfe2ad32b2dcbcf234b05ffefe4d60b&oe=57318078',
	link:'https://www.facebook.com/photo.php?fbid=10153890418838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeasty boys hud-a-wa strong ',
	pct:6.8,
	desc:'An interestingly strong flavour but it maintains a smooth finish. ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-0/q81/p480x480/12729183_10153890419403745_8807635240820254136_n.jpg?oh=e215ab20b39819dd2cf76c39c96fa24a&oe=576AFF83',
	link:'https://www.facebook.com/photo.php?fbid=10153890419403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont kölsch ',
	pct:4.6,
	desc:'I love a good kolsch. So easy drinking but without being flavourless ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-0/q81/p480x480/12745536_10153890419543745_6014336509869834605_n.jpg?oh=0de57d6bb313cb7c9d3b490f31a067e5&oe=5761F535',
	link:'https://www.facebook.com/photo.php?fbid=10153890419543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont copper ale ',
	pct:4.0,
	desc:'The final sip of this beer made me sad that it was gone ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12715379_10153890419508745_5707512389210281014_n.jpg?oh=22e293290fe30269d67325bac3319202&oe=576A64C2',
	link:'https://www.facebook.com/photo.php?fbid=10153890419508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch big Paul\'s mango IPA ',
	pct:6.1,
	desc:'The mango flavour doesn\'t overpower what is already a fantastic IPA ',
	score:9,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12728900_10153890419808745_8114701954738943189_n.jpg?oh=11360527fb2cd4aa10441386afaa0e5c&oe=5764CA9B',
	link:'https://www.facebook.com/photo.php?fbid=10153890419808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman Albo corn ale ',
	pct:5.5,
	desc:'Pretty much a lager. Much less exciting than I thought ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-0/p480x480/12728843_10153890420703745_1906734589373356822_n.jpg?oh=04b18e1f4b3a0de7b65d5c371ab06c34&oe=572B4FFB',
	link:'https://www.facebook.com/photo.php?fbid=10153890420703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman old salty gose ',
	pct:4.9,
	desc:'Perhaps the saltiest beer I\'ve ever tasted. But once the initial salt is gone there\'s a really pleasant flavour without the normal beer bitterness ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xal1/v/t1.0-0/p480x480/12745969_10153890420683745_2326162512188830203_n.jpg?oh=84d448eb71e3e449c9384f7b66bfd35a&oe=576BDD39',
	link:'https://www.facebook.com/photo.php?fbid=10153890420683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven Twisted Thistle IPA ',
	pct:5.6,
	desc:'Started off with a bit of a tang but seemed to lose it towards the end ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/p480x480/943951_10153890422103745_2064605675608289445_n.jpg?oh=4025e942b80741433bf6364ea99f9660&oe=576C3110',
	link:'https://www.facebook.com/photo.php?fbid=10153890422103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington brown ',
	pct:5.0,
	desc:'Nicely rounded. Another winner from Mornington ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-0/p480x480/12688382_10153890449953745_3980101759747984162_n.jpg?oh=30f0a4999ce7aab7792a5f3ca2a31787&oe=5760B845',
	link:'https://www.facebook.com/photo.php?fbid=10153890449953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

return ret;
}
