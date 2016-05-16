function addAllBeers() {

var ret = [];
ret.push(App.Beer.create({
	name:'Black Sheep Ale. ',
	pct:4.4,
	desc:'Black and average. ',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/485855_10151283325868745_1357546171_n.jpg?oh=f7856c2ce89f62f9b1db2475095fefcd&oe=57A13B5F&__gda__=1470339310_d03431945853cac4afe0ae6e81e0737f',
	link:'https://www.facebook.com/photo.php?fbid=10151283325868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg. ',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/536444_10151283326338745_1988442948_n.jpg?oh=2b91441c8382b5225cf56f31bb2868d7&oe=57B13993&__gda__=1470615074_eaf55e37934e4e82ea336fc626df9817',
	link:'https://www.facebook.com/photo.php?fbid=10151283326338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amstel',
	pct:null,
	desc:'',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1027_10151283326853745_295569657_n.jpg?oh=2cc353f963aef285020736674c10d34d&oe=579AAD5B&__gda__=1471359502_8d0eb11209ef6421c0cbddbbacb778f1',
	link:'https://www.facebook.com/photo.php?fbid=10151283326853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Webster\'s. ',
	pct:null,
	desc:'Shit bloke, shit beer. ',
	score:1,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/65588_10151283327318745_1619592085_n.jpg?oh=3fbdd4adf27605de1aaccbf70a840908&oe=57BAB866&__gda__=1471364655_eaa0fdcfa32e4bc6bed17326dfc14698',
	link:'https://www.facebook.com/photo.php?fbid=10151283327318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hurlimann. Rather good',
	pct:null,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/375874_10151283327863745_1299694311_n.jpg?oh=24b545b531f4cb5ed271670b5499637f&oe=57AD6A9D&__gda__=1471731244_efa8e0401c1a728023ed9f314421e27a',
	link:'https://www.facebook.com/photo.php?fbid=10151283327863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kronenbourg. ',
	pct:5.0,
	desc:'Standard fare. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/60247_10151283328373745_1855333949_n.jpg?oh=7ca117ac9e522d696711afb4621c010e&oe=57B066F3&__gda__=1470861242_577dcd233c10934b50d7cc30ef49e40c',
	link:'https://www.facebook.com/photo.php?fbid=10151283328373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Veltins',
	pct:null,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/32339_10151296241778745_603957055_n.jpg?oh=d5f778cd9561360119de373f13e34232&oe=57A3DBD7&__gda__=1469710064_98477187fb159eeb5c279f3d9a76076e',
	link:'https://www.facebook.com/photo.php?fbid=10151296241778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Smith\'s Extra stout .',
	pct:4.5,
	desc:'Like Guinness with a taste of ashtray. ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/317875_10151303867498745_1098897913_n.jpg?oh=58178be72d7fb8cfcf7a5959974f7e73&oe=57BC94E7&__gda__=1471888238_34a5836e614feeb978f3a844600801f0',
	link:'https://www.facebook.com/photo.php?fbid=10151303867498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ALEXIOS. ',
	pct:null,
	desc:'The beer telling me to go back to the Greek Islands. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/16981_10151303885378745_1227406993_n.jpg?oh=7c9abf93f9c8110a5084efd8a63b5aac&oe=57ADAE26&__gda__=1472009560_8bb1322de71f10230f6870b53e3aca53',
	link:'https://www.facebook.com/photo.php?fbid=10151303885378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red stripe. ',
	pct:4.7,
	desc:'Brick lane special. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/378973_10151303950693745_516519003_n.jpg?oh=b0e8e62558064351d188caa1a873cf9c&oe=57AB2F56&__gda__=1470672424_0ab563ff9c2e539e81fe316f7e5e5563',
	link:'https://www.facebook.com/photo.php?fbid=10151303950693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'1892 ',
	pct:3.3,
	desc:'Warm, flat and nutty ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/3705_10151315682573745_1414196769_n.jpg?oh=34b6181be3a96dcab0b6ad8f84328d3c&oe=57A9031E&__gda__=1470769441_026bd91dc92622eff3485bc8f800c59f',
	link:'https://www.facebook.com/photo.php?fbid=10151315682573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra ',
	pct:4.8,
	desc:'Indian restaurant special ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/557801_10151315682973745_793850180_n.jpg?oh=99337c8d9357db6b1042089ed9a6887d&oe=57B40440&__gda__=1474821950_5ef4775f7d7c84dc7cd0489fdb7d9e75',
	link:'https://www.facebook.com/photo.php?fbid=10151315682973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king ipa.  ',
	pct:3.6,
	desc:'Just tastes a bit wrong. ',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/189043_10151315683658745_1443395751_n.jpg?oh=bcc454df0a36d446cc2a0bf8d116831e&oe=57B804B3',
	link:'https://www.facebook.com/photo.php?fbid=10151315683658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grolsch -  ',
	pct:5.0,
	desc:'Crisp, refreshing, easily overlooked. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/60758_10151315684663745_854245528_n.jpg?oh=9149fdd6ce7832b57959049bcd227af1&oe=579CEBA4&__gda__=1470412872_c692cb4a56bd451591887e6c03a29f1a',
	link:'https://www.facebook.com/photo.php?fbid=10151315684663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noble. ',
	pct:5.0,
	desc:'A confusing bunch of flavours. ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/546983_10151331650653745_1841706536_n.jpg?oh=0a2499d54b16cf83cd2c0612403912bd&oe=57994DAC&__gda__=1474826172_ddf3e76e821a85d22a30967609dc580e',
	link:'https://www.facebook.com/photo.php?fbid=10151331650653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yankee. ',
	pct:4.3,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/550717_10151331657283745_2008475143_n.jpg?oh=ba81cdd398db138b572b85f958cb7238&oe=57B9C492&__gda__=1471244708_b6fd876ea469173125b7023c4aa77097',
	link:'https://www.facebook.com/photo.php?fbid=10151331657283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Dog\'s Bollocks. ',
	pct:5.9,
	desc:'Tastes just like the name. ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/15111_10151331658713745_2003438525_n.jpg?oh=8f15552010a6c218fe26eb2bf324ad06&oe=57A1FA12&__gda__=1471977680_cc29e62e87b78081764634bca05482b7',
	link:'https://www.facebook.com/photo.php?fbid=10151331658713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double maxim. ',
	pct:4.7,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/378563_10151331661023745_1836111728_n.jpg?oh=d10069e1ae1bc800af2e4cde927d4234&oe=579B7EB4&__gda__=1471376701_68e4cca82fdb3a4347350548d1cd089d',
	link:'https://www.facebook.com/photo.php?fbid=10151331661023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Black. ',
	pct:4.7,
	desc:'',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/293855_10151331663163745_2099861357_n.jpg?oh=e3400e8f87dd319c88b99819b7895ced&oe=57B5FEC7&__gda__=1471452022_8d989369cdf08aa199025cec103e14cd',
	link:'https://www.facebook.com/photo.php?fbid=10151331663163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Rev. James',
	pct:null,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/542989_10151331668478745_1709226964_n.jpg?oh=495287fff81148e76d6ad672d5e0fcd2&oe=57A1E17E&__gda__=1471827151_b58be550e1021617891b24576a155cd8',
	link:'https://www.facebook.com/photo.php?fbid=10151331668478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double Dragon. ',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/148410_10151356728003745_1112766365_n.jpg?oh=c700029f4e3686df0a3e80908a856018&oe=579B4539&__gda__=1470991280_af88a68d805f68bef8eec0d16e90a427',
	link:'https://www.facebook.com/photo.php?fbid=10151356728003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pride of Oxford. ',
	pct:5.0,
	desc:'Just a very average beverage. ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/558943_10151356728198745_2042204432_n.jpg?oh=b60c2827c1ed3230d202764dc42e0545&oe=57B36EA2&__gda__=1470865496_706c2a65b0a48f1ff5b2f202b211c789',
	link:'https://www.facebook.com/photo.php?fbid=10151356728198745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bishops finger. ',
	pct:5.4,
	desc:'Written on the back: At 5.4% It\'s near the knuckle. .',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/533497_10151356728563745_544345125_n.jpg?oh=c845988c881c7af3f85a877ece410d55&oe=579A8C91&__gda__=1470171585_e004d21b8702527fe8e22902f2e9b82b',
	link:'https://www.facebook.com/photo.php?fbid=10151356728563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Dark Ale ',
	pct:4.5,
	desc:'Flavoursome. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/521606_10151396303973745_830089732_n.jpg?oh=c362c242b1cb77be219b5a6a08b9c260&oe=57A4DC76&__gda__=1470597734_2868c432a374241ec2c2a494b5e9954e',
	link:'https://www.facebook.com/photo.php?fbid=10151396303973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Golden Ale. ',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/480275_10151356728773745_1268031446_n.jpg?oh=37bb4e9c63c490c6c43b750b58c10832&oe=57A15DD5&__gda__=1471559268_eb85f86cf6fb9cf4502bfa7d5609c94a',
	link:'https://www.facebook.com/photo.php?fbid=10151356728773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Stout ',
	pct:4.5,
	desc:'Very smooth and mild with a hint of chocolate. ',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/16733_10151396304708745_66219487_n.jpg?oh=2f91f50a67ecd7d02369d3d3638fac07&oe=57BEF4A5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tesco Lager ',
	pct:4,
	desc:'You get what you pay for. ',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/530426_10151368077248745_1651993820_n.jpg?oh=90bf99e39f5f74c8e650d5c21631fe59&oe=57A274A0&__gda__=1471967322_0092eada28f700afc7fe20ec4b88ab75',
	link:'https://www.facebook.com/photo.php?fbid=10151368077248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Abbey Beer ',
	pct:6.5,
	desc:'Cool bottle. Terrible taste. ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/424785_10151368077728745_484320810_n.jpg?oh=0e5b548dcce51887309a15f089739483&oe=579D3C7F&__gda__=1469737519_de6077f17105c4971c2f9ffc13afb07a',
	link:'https://www.facebook.com/photo.php?fbid=10151368077728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S Belgian Lager',
	pct:null,
	desc:'Easy drinking. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/734776_10151461674018745_617552379_n.jpg?oh=9a896394312ac55f495b4444da1ee7fb&oe=57BA3C88&__gda__=1471584949_814fb9956c77b835928bbab09e5048d4',
	link:'https://www.facebook.com/photo.php?fbid=10151461674018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S French Lager ',
	pct:4,
	desc:'Not as good as the Belgian one. ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/486557_10151563840963745_1674492557_n.jpg?oh=cf48ea805d6b860ff3e04ce41e2b31c6&oe=57AB0781&__gda__=1470922800_3220831dc9b9b0e16e53caa8680d3456',
	link:'https://www.facebook.com/photo.php?fbid=10151563840963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennant\'s super ',
	pct:9.0,
	desc:'If you\'re really drunk but want to be mike Stuart drunk then this is the beer for you ',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/524743_10151649176508745_61534800_n.jpg?oh=c49c1725792858e1ec79893e07e9f1f0&oe=57BA2330&__gda__=1469926347_5ea37bdea8bca2746314e58133d84f95',
	link:'https://www.facebook.com/photo.php?fbid=10151649176508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kestral Super lager ',
	pct:9.0,
	desc:'Must be consumer quickly. Before the taste sets in ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/16679_10151428525733745_2106487431_n.jpg?oh=72d63f1aed2b58652e47aa60cc03633a&oe=57B516AA&__gda__=1471759098_77cc2b0519addac6499fefffca05f137',
	link:'https://www.facebook.com/photo.php?fbid=10151428525733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg special. ',
	pct:9.0,
	desc:'Tennants super for the discerning bum. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/429525_10151356729088745_1307200238_n.jpg?oh=2ca3f1f69bbb0d597b1664a82a709e4a&oe=57AA9912&__gda__=1471034531_dba7e3cdcb9925c1ac0e5478827c94a6',
	link:'https://www.facebook.com/photo.php?fbid=10151356729088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crest Super ',
	pct:10,
	desc:'As much as I like being able to drink half a bottle of wine in a single can of beer, this is just foul ',
	score:2,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/923052_10151649178723745_1627305958_n.jpg?oh=49fcb8e1e19a538f5c8ae83ecdc7d989&oe=57B81614&__gda__=1471804332_dfc26a51204fa9913699cb8e7a48f4c9',
	link:'https://www.facebook.com/photo.php?fbid=10151649178723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old empire. ',
	pct:5.7,
	desc:'Not at all an ipa .',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/73511_10151356728858745_1899006793_n.jpg?oh=5cd2b41ec42f480e0d47f733c90bca9a&oe=579F3220&__gda__=1470854505_d956b09c368e67347f91aa0538e4d039',
	link:'https://www.facebook.com/photo.php?fbid=10151356728858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wainwrights. ',
	pct:4.1,
	desc:'Not too bad at all. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/401229_10151356729468745_228573429_n.jpg?oh=2fd12711ecb5cfdf9daa30ff5970f2d7&oe=57E7F768&__gda__=1471845688_de69669c00d4621fc51dfa42438d6a00',
	link:'https://www.facebook.com/photo.php?fbid=10151356729468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hobgoblin ',
	pct:5.2,
	desc:'An average ale. ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484314_10151368077318745_996314221_n.jpg?oh=7da41bc768671d664abdaeb45e7d54e6&oe=579F170A&__gda__=1474792538_88ffcaf81c611281f0559798956b1b8c',
	link:'https://www.facebook.com/photo.php?fbid=10151368077318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'King goblin ',
	pct:6.6,
	desc:'Better than the standard hobgoblin ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash4/v/t1.0-0/p480x480/1656157_10152293086848745_1506561898_n.jpg?oh=4738cef944bc3cd1e062f730eb30ffb9&oe=57AB318B&__gda__=1471525358_9c068f994868164cc0fefe8581fda193',
	link:'https://www.facebook.com/photo.php?fbid=10152293086848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocking Rudolph ',
	pct:4.2,
	desc:'Makes me feel all Christmasy. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/481704_10151368077713745_2078288487_n.jpg?oh=42179485bdcba5ef4616e6b4f8e7a701&oe=57A11890&__gda__=1471589665_0a60c4661042ef98defa305c8d653f02',
	link:'https://www.facebook.com/photo.php?fbid=10151368077713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hopping Hare ',
	pct:4.4,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/399346_10151380245588745_647361323_n.jpg?oh=24136cdf6bf3822840e8a757bbf0502e&oe=579EEAF3&__gda__=1474768547_d79043eb06d088791fbeb41af490f5d1',
	link:'https://www.facebook.com/photo.php?fbid=10151380245588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Champion ',
	pct:5.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/v/l/t1.0-0/p480x480/537673_10151380245638745_991276182_n.jpg?oh=04409623d86950feffed3cc51c159afa&oe=57A0779D',
	link:'https://www.facebook.com/photo.php?fbid=10151380245638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Glory ',
	pct:4.5,
	desc:'Peach flavoured beer. ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/9160_10151380243323745_1001869256_n.jpg?oh=0bc2142a09732acb2794220421dcbb5b&oe=57B107AC&__gda__=1470919401_f7d6c6eb760f43b185d59c95416d4520',
	link:'https://www.facebook.com/photo.php?fbid=10151380243323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fursty Ferret ',
	pct:4.4,
	desc:'The name is better than the taste. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/224528_10151303867818745_1700962680_n.jpg?oh=b6e7f1e476e5147cc6d29daf1af5375c&oe=57AA8E8E&__gda__=1470701172_e33e4855877746eac05cc241c9947de7',
	link:'https://www.facebook.com/photo.php?fbid=10151303867818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Tangle Foot ',
	pct:5,
	desc:'A standard beer ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/379340_10151461671708745_1194104860_n.jpg?oh=12ce90a098e9e0b97c1bfe5c5e5d628d&oe=579B1744&__gda__=1474777077_f05fd9cdb2b9f23071db827aaef05597',
	link:'https://www.facebook.com/photo.php?fbid=10151461671708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Firkin fox ',
	pct:4.3,
	desc:'Firkin terrible ',
	score:2,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/542858_10151563945898745_1345565555_n.jpg?oh=df996a27e558bc9b687ef53bfe0ba504&oe=57B1285F&__gda__=1470531689_110dd5b7fccc895f545d37bdf30a6993',
	link:'https://www.facebook.com/photo.php?fbid=10151563945898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Poacher\'s choice ',
	pct:5.7,
	desc:'You can really taste the liquorice. Not sure why someone put liquorice in beer. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/555262_10151461672288745_1320726068_n.jpg?oh=0a95ce63ae454264321e5cc8e6d2ebcd&oe=57BEADF0&__gda__=1471284704_069438d6bfceac61c71dfccc33d951a3',
	link:'https://www.facebook.com/photo.php?fbid=10151461672288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger blandford flyer ',
	pct:5.2,
	desc:'Mild ginger ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/74705_10151798802528745_954132420_n.jpg?oh=de2f31ea205d92a326e0af3cc81abe72&oe=57A2B6B0&__gda__=1469941554_cfd81f54621cc9b8f7ddc8f0c830e7e0',
	link:'https://www.facebook.com/photo.php?fbid=10151798802528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger First Gold ',
	pct:4,
	desc:'Very hoppy. Too hoppy. ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/995127_10151798803233745_1165661191_n.jpg?oh=76536d4693d3ed06ebaa9a9b89e94361&oe=57A0797A&__gda__=1471824502_50cd706e5935a7de66228fe1060f2fab',
	link:'https://www.facebook.com/photo.php?fbid=10151798803233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot Ale',
	pct:null,
	desc:'A nice solid ale. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/261583_10151368077943745_1842191344_n.jpg?oh=5665b4f89eaa9d84151733efa974d0d0&oe=57A9C11D&__gda__=1470218900_81d31c94f01560ad26658e021deeb2cf',
	link:'https://www.facebook.com/photo.php?fbid=10151368077943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bass.',
	pct:null,
	desc:'The smoothness of Guinness with a lager taste. ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/18911_10151368078368745_1781250452_n.jpg?oh=66bc3fa19b35fe1ac9e618b0bb0e25bd&oe=579ADF5D&__gda__=1470961760_ad7b3ee09f82bbfa45dfc72b437347fe',
	link:'https://www.facebook.com/photo.php?fbid=10151368078368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lech',
	pct:null,
	desc:'Just plain average. ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/61451_10151380245533745_1375457790_n.jpg?oh=9ef2c31f602f25875dd61a5349f6ac19&oe=57BE6368&__gda__=1470824277_493625341e72c2b6b960d9183baf905d',
	link:'https://www.facebook.com/photo.php?fbid=10151380245533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tatra. ',
	pct:6.0,
	desc:'Surprisingly good. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/406821_10151315683338745_1515210431_n.jpg?oh=142ce95291701dc1fd8eccf21de7cb8f&oe=57AE52B0&__gda__=1470065114_89c3fa6f937c94d0664331a844e900dc',
	link:'https://www.facebook.com/photo.php?fbid=10151315683338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zywiec ',
	pct:5.6,
	desc:'Rather high on the list of polish beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/482554_10151563946353745_976172500_n.jpg?oh=da5fd25c455c52b31be33a11c6cb7d00&oe=57BBF504&__gda__=1470665529_dcca5c052f4f2f5588963d6b18cc5c83',
	link:'https://www.facebook.com/photo.php?fbid=10151563946353745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Debowe mocne ',
	pct:7.0,
	desc:'A nice sweetness. Bogaty smak! ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/923169_10151649174868745_1394415362_n.jpg?oh=0c528c7741181446761da9c11c572bb1&oe=57B7E26E&__gda__=1471109636_9686cd6f5570d7456642c6ce71017b4a',
	link:'https://www.facebook.com/photo.php?fbid=10151649174868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Warka ',
	pct:5.7,
	desc:'Standard polish garbage ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/522510_10151563946283745_279086474_n.jpg?oh=67fcec5fb68586507a58ec39266d1e69&oe=57A8156D&__gda__=1471844669_956a37a75f11c82d6cdc12c171ce925c',
	link:'https://www.facebook.com/photo.php?fbid=10151563946283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wojak mocny ',
	pct:7.0,
	desc:'Smooth and mild ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/321669_10151649177583745_849913582_n.jpg?oh=d5037928b4cd8cdaa286d60bb3ff3434&oe=57BAEFEB&__gda__=1471892629_6e3ab96dc7c922c5e34707d1825ebd14',
	link:'https://www.facebook.com/photo.php?fbid=10151649177583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tyskie klasyczne ',
	pct:5.0,
	desc:'The best polish beer I\'ve tasted ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1235025_10151888670293745_2077557673_n.jpg?oh=045e4a4bfda4be86b8c9c937b88c89c4&oe=57BE14D2&__gda__=1470420871_fac855bcdb91f98410029d0891c00a2b',
	link:'https://www.facebook.com/photo.php?fbid=10151888670293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Whistable Bay organic Ale ',
	pct:4.5,
	desc:'Leaves a horrible bitter after taste. ',
	score:2,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/282837_10151380245908745_185055294_n.jpg?oh=6f2f47e328fb2708e05faf4b851d1f34&oe=57A69C49&__gda__=1471461401_a0bea4333f09f328960ba1dbf74c4eeb',
	link:'https://www.facebook.com/photo.php?fbid=10151380245908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Lager',
	pct:null,
	desc:'A decent Lager. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/547553_10151396304058745_42264123_n.jpg?oh=197b5a04a661fd4d573ac5625ccb27c7&oe=57B6F8DD&__gda__=1469973352_1eb9561a6ad83576d92c917ddd0eb973',
	link:'https://www.facebook.com/photo.php?fbid=10151396304058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Isle of Arran blonde. ',
	pct:5.0,
	desc:'No idea why anyone would buy this twice. ',
	score:2,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/29588_10151396304143745_1361559358_n.jpg?oh=f5727fd85207d56bcad966a61f2d220c&oe=57BC73E1&__gda__=1470712540_a1ddfc6067f19fe6cb6b2a9d222ea089',
	link:'https://www.facebook.com/photo.php?fbid=10151396304143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Edmunds. ',
	pct:4.5,
	desc:'A little bit too bitter. ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/521840_10151396304393745_1554011177_n.jpg?oh=43ef8f96ddf2b2072ce789dc4bb65b01&oe=57BD6892&__gda__=1469899562_6324fa7e69a7cd92561210423bd64798',
	link:'https://www.facebook.com/photo.php?fbid=10151396304393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs Back TEA. ',
	pct:4.2,
	desc:'Only has a hint of tea. ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/282869_10151396304613745_908615539_n.jpg?oh=b78e99fa48eef6f8f61a9154efb446c6&oe=57B20F82&__gda__=1470314687_cf12f5d0b613bfa6fc5e45de3d10f7b0',
	link:'https://www.facebook.com/photo.php?fbid=10151396304613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holsten Pils ',
	pct:5.0,
	desc:'Ok when it\'s really cold, otherwise very average. ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/581508_10151396304968745_547445318_n.jpg?oh=d16c5440c3f7f2c4c6a31fd3a7dcd52a&oe=57AF6C6C&__gda__=1471740028_f81a5bac80b49b1d1cf94dd8e5f1d741',
	link:'https://www.facebook.com/photo.php?fbid=10151396304968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Thumper ',
	pct:5.6,
	desc:'Gave my taste buds a thumping. ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/62117_10151396305243745_1878047628_n.jpg?oh=4f63397b93faaad16cb199ba26b8c204&oe=57A76E6C&__gda__=1471630061_97b2553a0fda3ddf11fd97ccd97199f8',
	link:'https://www.facebook.com/photo.php?fbid=10151396305243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pacifico clara.',
	pct:null,
	desc:'A fairly standard beer. ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/382796_10151396306023745_1333802839_n.jpg?oh=50b0acf11073e7499bf3f34700407b3a&oe=57A3B26B&__gda__=1470473821_44432da2bd0379e9afd7880c284fc68a',
	link:'https://www.facebook.com/photo.php?fbid=10151396306023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Christmas cracker. ',
	pct:4.2,
	desc:'Bitter and nutty. ',
	score:2,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/408606_10151428525743745_1997517717_n.jpg?oh=55c235f6b211e5f935a7884121f054b7&oe=57A0FB3F&__gda__=1471929609_bffe75ef10ee9f5a5a3c387a66e3fefd',
	link:'https://www.facebook.com/photo.php?fbid=10151428525743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deuchars IPA ',
	pct:4.4,
	desc:'Gets better after a few sips. ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/603151_10151428525283745_670825446_n.jpg?oh=0b39f590508511ffddf42d93fcc96d07&oe=57B2DDB0&__gda__=1470956173_24430f17c150c1aebaa1c91f69282b86',
	link:'https://www.facebook.com/photo.php?fbid=10151428525283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser. ',
	pct:4.8,
	desc:'Beer flavoured water. ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/12558_10151356728378745_471931293_n.jpg?oh=9c8c481da08e583047ee0db5316e8e20&oe=57BCEE19&__gda__=1469698988_9f978d5da1bc14bcabf9e4ab0b0bad6f',
	link:'https://www.facebook.com/photo.php?fbid=10151356728378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'SIerra Nevada pale ale',
	pct:null,
	desc:'A quality strong flavour. ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/23377_10151428526143745_898774029_n.jpg?oh=e69271e1698bec4fdd7ab3a0d3cd5f24&oe=579ADC1D&__gda__=1471414440_6cfaf534a99f72a2ab473624824bb545',
	link:'https://www.facebook.com/photo.php?fbid=10151428526143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black chocolate stout ',
	pct:10.0,
	desc:'Be ready for a kick. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1001078_10151798818383745_544568245_n.jpg?oh=3e0874cf94859d3f02ae1648463f3a0b&oe=57AC2C8F&__gda__=1471577300_6edbd0c9da30ee31ec230a2432e09d63',
	link:'https://www.facebook.com/photo.php?fbid=10151798818383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Miller',
	pct:null,
	desc:'Good for an American beer. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/603011_10151461681363745_1924966324_n.jpg?oh=4717043539a70bc49bf922a321de5089&oe=57B5A878&__gda__=1469729984_ea643e9bca9766ade603a03b519810b0',
	link:'https://www.facebook.com/photo.php?fbid=10151461681363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blue moon ',
	pct:5.4,
	desc:'Tasty ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/603175_10151428525338745_1084934789_n.jpg?oh=dda9e1448a99aa005f1770e96efae9c0&oe=57B9C2E5&__gda__=1470394452_a5450b55b32626b89552a1c0090de2ac',
	link:'https://www.facebook.com/photo.php?fbid=10151428525338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coors Light ',
	pct:4.3,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/3398_10151428533958745_102290057_n.jpg?oh=9c2796d93f41499a93a000f61299f80f&oe=579FAEC4&__gda__=1471992675_7d95906e901e6e4291dfbe7b48734d9f',
	link:'https://www.facebook.com/photo.php?fbid=10151428533958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red pig ale ',
	pct:5.0,
	desc:'Tastes more like an american beer than a mexican one. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/67811_10151368077158745_1890584013_n.jpg?oh=2ffd46ecbce8ce9aae4b23845173df80&oe=57A109C3&__gda__=1474836362_f1c4b418a3c216ff8ff37d0c1a847e75',
	link:'https://www.facebook.com/photo.php?fbid=10151368077158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lemongrass Saison ',
	pct:5.0,
	desc:'A wheat beer taste but a little more fresh ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/534376_10152147730388745_345071070_n.jpg?oh=1466d75b6cfbfa0d2e3bb71e8d49a936&oe=57A571CD&__gda__=1469769036_bc043c6c03fee9f14990216dbed43c11',
	link:'https://www.facebook.com/photo.php?fbid=10152147730388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coconut porter ',
	pct:5.7,
	desc:'Can’t really taste the coconut and seems to curdle the stomach. Could just be fighting with the other beers. Or the fried rice. ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1479322_10152147730723745_835775935_n.jpg?oh=1f59da0cf9f9cc0e08970ce4e822cf96&oe=57B61207&__gda__=1470196739_fdfdf1bf9784b0678e21a0073d014455',
	link:'https://www.facebook.com/photo.php?fbid=10152147730723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed Root brew. ',
	pct:4,
	desc:'Tastes like a ginger beer. But it\'s not.',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/184446_10151428525538745_507755493_n.jpg?oh=9e04c2d5d22fe20a16197e98824bf655&oe=57B61406&__gda__=1474818902_dcdcc0f287611903ca9cf542bae9db9f',
	link:'https://www.facebook.com/photo.php?fbid=10151428525538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed ',
	pct:4,
	desc:'Mike would drink this. It\'s not beer.',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/409508_10151396305103745_1792863383_n.jpg?oh=fca7955eb9031fa32a4cc97dbcb697bc&oe=57BB80CF&__gda__=1472074233_6cfd0d228bb1d654b2857a5df432f63d',
	link:'https://www.facebook.com/photo.php?fbid=10151396305103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Guinness',
	pct:null,
	desc:'Cannot be rated.',
	score:null,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/230829_10151296241408745_792356720_n.jpg?oh=c832622edb8a12ecae0aed2b2a7c1fd5&oe=57A35EC4&__gda__=1471847519_9f8114789efa70498342c6affed83276',
	link:'https://www.facebook.com/photo.php?fbid=10151296241408745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gallway hooker',
	pct:null,
	desc:'A little bit off ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/542152_10151428526223745_595487151_n.jpg?oh=9c1cc656d0e3e7f0acceb867462d1b3c&oe=57E7DC9D&__gda__=1472067277_f4030cd3f149c0b392d1bda4a4abe4ff',
	link:'https://www.facebook.com/photo.php?fbid=10151428526223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harp',
	pct:null,
	desc:'Described as harpic toilet cleaner but has a much nicer taste. ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/426781_10151428526053745_1807147542_n.jpg?oh=23086bca4107bcbc46b5da6bf6d38a05&oe=57A365AF&__gda__=1470429470_e9162e7cf08e252386cbb64b09c8fcd8',
	link:'https://www.facebook.com/photo.php?fbid=10151428526053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Five lamps',
	pct:null,
	desc:'Bad to start, bad to finish ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/486257_10151428526493745_65566473_n.jpg?oh=e2ee98157db88ebd380acf59af6d47a3&oe=57A98FFD&__gda__=1471212360_e4aaa02ca9cab00ef72bc3979f784f04',
	link:'https://www.facebook.com/photo.php?fbid=10151428526493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carrig ',
	pct:4.3,
	desc:'An easy bev ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1238989_10151888668133745_55669060_n.jpg?oh=7c2a8d5878dbe7a866e6577e99e30acf&oe=579C18E2&__gda__=1471580572_b2bb52c794a925e4cd7634508be4c5f5',
	link:'https://www.facebook.com/photo.php?fbid=10151888668133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kilkenny',
	pct:null,
	desc:'A little too bitter ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/603305_10151428526818745_310997790_n.jpg?oh=ea85cdeeca182b45ae02eb57ebe4b07f&oe=57999E47&__gda__=1470831673_c75289aef2381b16e54fd1f1447ce194',
	link:'https://www.facebook.com/photo.php?fbid=10151428526818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Smithwicks',
	pct:null,
	desc:'A smooth ale. ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/14944_10151428531923745_1130605177_n.jpg?oh=9b1efffe5412b1cd204d8c918fc089bb&oe=57B7995F&__gda__=1470191126_3480b60913ece4f8566896ce12c1bfe4',
	link:'https://www.facebook.com/photo.php?fbid=10151428531923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caledonia smooth',
	pct:null,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/150976_10151428531978745_744791164_n.jpg?oh=3e5aaf6488762645094dfb8b8a5bc0ca&oe=57ACD931&__gda__=1471174497_fad9a412cf8bfaf858c7ea8f939626e5',
	link:'https://www.facebook.com/photo.php?fbid=10151428531978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'hara\'s Irish pale ale',
	pct:null,
	desc:'Kind of a mix between an IPA and a pale ale ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1233480_10151888666808745_111746617_n.jpg?oh=c163c149e8f17bad7c4c613ad75da917&oe=579BA3FC&__gda__=1471805728_13798f2e120015f2155cec01c3ee7182',
	link:'https://www.facebook.com/photo.php?fbid=10151888666808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'haras red',
	pct:null,
	desc:'Maybe the worst beer ever ',
	score:1,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/150601_10151428532178745_1335701826_n.jpg?oh=e43fc76f0e4626c6ca2f5163f8a2c9f9&oe=57B81F6C&__gda__=1470416730_5f4e2114db849ecb4c857b85d2f22bcb',
	link:'https://www.facebook.com/photo.php?fbid=10151428532178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cyclone IPA ',
	pct:7.0,
	desc:'Nice but way too heavy right now ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1173698_10151888668208745_564925063_n.jpg?oh=83ed93e4466fad3821d6e4a68010f0d2&oe=57A674CC&__gda__=1470182004_4d92f502e02634965e028e364ef46fb1',
	link:'https://www.facebook.com/photo.php?fbid=10151888668208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brahma ',
	pct:4.3,
	desc:'Easy bevving ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/312335_10151428526733745_366386591_n.jpg?oh=15b249b4f2af340134b90efea9cba2b6&oe=57A1349F&__gda__=1471135201_9056bba9f56e467f18b1d441a3a690f2',
	link:'https://www.facebook.com/photo.php?fbid=10151428526733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Hardcore IPA ',
	pct:9.2,
	desc:'A lot of flavour. Couldn\'t handle many. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/537412_10151428532378745_1195699464_n.jpg?oh=39bee0b375b459fe1ebd50601ea35f4b&oe=57B5503A&__gda__=1470430438_0e5db4b0efadb9893a80b8a23ad10f5d',
	link:'https://www.facebook.com/photo.php?fbid=10151428532378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punk IPA ',
	pct:5.6,
	desc:'Quality IPA ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/954631_10151694534143745_666636865_n.jpg?oh=eac8feb8f7d8c63d434f6cecc33ac63d&oe=579D5EB6&__gda__=1474763639_b4a35f3bb05671a684653d0955667c22',
	link:'https://www.facebook.com/photo.php?fbid=10151694534143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Psycho ',
	pct:10,
	desc:'This beer won\'t stop punching me in the face ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1236502_10151929072183745_392721452_n.jpg?oh=7502848ee5b30d6684c670be089a1ba3&oe=579E8063&__gda__=1471507097_2b0c068924e0c62021d770edd65ff4f6',
	link:'https://www.facebook.com/photo.php?fbid=10151929072183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog 5am saint ',
	pct:5,
	desc:'Quality amber ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/970089_10151694532248745_1860752860_n.jpg?oh=4c84efa336e0c6e89735eb311e1ce975&oe=579A0505&__gda__=1471747212_ffe248e5d95d9ae6dfcaba9e7bcc1c54',
	link:'https://www.facebook.com/photo.php?fbid=10151694532248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Club ',
	pct:3.8,
	desc:'A beer for anyone ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1003490_10151798796948745_2041837456_n.jpg?oh=748f4bb058a36f8999ac52a66707f0c4&oe=579F9FD4&__gda__=1470761857_74fdc928c915b46ef5c1c50a2f36a921',
	link:'https://www.facebook.com/photo.php?fbid=10151798796948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crew IPA ',
	pct:6.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/63719_10151428532313745_813090694_n.jpg?oh=ebc59a528e7e16a19f5855ff77d44e8a&oe=57AB038B',
	link:'https://www.facebook.com/photo.php?fbid=10151428532313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennents ',
	pct:4.0,
	desc:'The standard in Scotland. ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/530689_10151428532548745_22366953_n.jpg?oh=4539bf87864136f677daa4f7e3e8f411&oe=57B3269A&__gda__=1470350383_4734f0ff399a4ba11f9c8044927a00dd',
	link:'https://www.facebook.com/photo.php?fbid=10151428532548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trouble brewing golden ale ',
	pct:4.3,
	desc:'Very malty ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/397706_10151428533088745_22640063_n.jpg?oh=9164de27c09573d1d9b53d4734522cc6&oe=57AFB722&__gda__=1472056215_86b12b7936a92d3a322c931561c286c0',
	link:'https://www.facebook.com/photo.php?fbid=10151428533088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wold top against the grain ',
	pct:4.5,
	desc:'Too harsh ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/555458_10151428533018745_1322698428_n.jpg?oh=74fce5fc1249b1a8a5067117caefe857&oe=57AE0D8C&__gda__=1470988956_baa1076c52f2879f13e4f8f8706e6fca',
	link:'https://www.facebook.com/photo.php?fbid=10151428533018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ginger beard ',
	pct:4.2,
	desc:'A tasty ginger beer. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/184456_10151428533288745_183483934_n.jpg?oh=288400272afe82a7172b5a67bad9ab10&oe=57BC7679&__gda__=1469704489_dfc955fd54e9ef0cde182460e7368569',
	link:'https://www.facebook.com/photo.php?fbid=10151428533288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells banana bread beer ',
	pct:5.2,
	desc:'You can really taste the banana. ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/68598_10151428533853745_1576633844_n.jpg?oh=7a0e5c338aa2dfb2f4bd1edc7925c9d6&oe=57ABC081&__gda__=1471854847_a4dfda459e19b54c9860dfd531a57631',
	link:'https://www.facebook.com/photo.php?fbid=10151428533853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'KEO ',
	pct:4.5,
	desc:'Takes a bit to get used to. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/12605_10151428533818745_35949284_n.jpg?oh=a117f7369edf66950979d36df981bf08&oe=57BE044D&__gda__=1471076074_2d113940f8ed1fb8c92fb779d3534c46',
	link:'https://www.facebook.com/photo.php?fbid=10151428533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mongoose',
	pct:null,
	desc:'Standard. ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/429123_10151428534248745_2064241641_n.jpg?oh=f1c587c83d0fe89d5e3f2a16718b80ad&oe=57B385C1&__gda__=1471670007_312ea8f0ed774c23938c0708d46b5116',
	link:'https://www.facebook.com/photo.php?fbid=10151428534248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flack Catcher',
	pct:null,
	desc:'Average ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/19223_10151428534118745_318984545_n.jpg?oh=28a490ec2fba222be095a07df2f53b65&oe=579FC575&__gda__=1470929268_be7cd9cd8ff2f6c0f3ed7f7e80f03b5e',
	link:'https://www.facebook.com/photo.php?fbid=10151428534118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedigree ',
	pct:5,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/530655_10151461672258745_1106668421_n.jpg?oh=c099251e94d3d51e269a72f473121365&oe=57B8CEB4&__gda__=1470924293_ee4368aa2289e57daca035cdf26c880d',
	link:'https://www.facebook.com/photo.php?fbid=10151461672258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fagins ',
	pct:4.1,
	desc:'Gay. ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/19212_10151461672388745_962581922_n.jpg?oh=06faf4401953fda1e4071b5ee4237fa0&oe=57A4131B&__gda__=1472122854_0db6dc4bc30a7ecd9e30d9b9cd44d7da',
	link:'https://www.facebook.com/photo.php?fbid=10151461672388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London Pride',
	pct:null,
	desc:'The standard London Ale to measure against ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/734258_10151461672898745_380826809_n.jpg?oh=d07681829ad11a2d638420127986927f&oe=57B91A79&__gda__=1471075512_9f164900219623c762f3a64e9fba53bf',
	link:'https://www.facebook.com/photo.php?fbid=10151461672898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kent\'s best ',
	pct:4.1,
	desc:'Would hate to see the worst ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/539055_10151461672828745_520276173_n.jpg?oh=443bbbefc67c31da0a4a2a005bdc57e6&oe=579B8E4A&__gda__=1471297626_9e191d26b092f4dc08137aa92fd36acc',
	link:'https://www.facebook.com/photo.php?fbid=10151461672828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Peroni',
	pct:null,
	desc:'Italian standard. ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/37080_10151396305588745_415450314_n.jpg?oh=6b081d5ce310935036a27e3f39d6aca8&oe=57A9D654&__gda__=1469812193_8ab1eee1c4e847d11e7fae958745ca0f',
	link:'https://www.facebook.com/photo.php?fbid=10151396305588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Poretti',
	pct:null,
	desc:'Italian tasting ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/554278_10151461673508745_1407613949_n.jpg?oh=4f362db648daad5f3000522c95439a9d&oe=579961DD&__gda__=1470810988_1164d424a5f7aa82f290a1710e51beae',
	link:'https://www.facebook.com/photo.php?fbid=10151461673508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra moretti ',
	pct:4.6,
	desc:'Nice and tasty ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1187105_10151860442623745_1479905492_n.jpg?oh=80fa81a186285bdc8d88e3e176ef5877&oe=57ABFFDB&__gda__=1471822374_fdc5ada771619e08df509b27d9229ac5',
	link:'https://www.facebook.com/photo.php?fbid=10151860442623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tetley smooth',
	pct:null,
	desc:'I much prefer this to tea. ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/394796_10151461673368745_1651974167_n.jpg?oh=f5649a4092b5aea87a12335a11b6f305&oe=57A98695&__gda__=1470938275_89798171815451e4a21c6fc494827424',
	link:'https://www.facebook.com/photo.php?fbid=10151461673368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Frost ',
	pct:4.5,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/32180_10151461673683745_1033363252_n.jpg?oh=be0783869ab17ab942f45295ca665149&oe=57A2FC71&__gda__=1470666511_aadd79decd429e93f2af4f188720cffd',
	link:'https://www.facebook.com/photo.php?fbid=10151461673683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staffordshire IPA ',
	pct:5.5,
	desc:'A mild IPA. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/535438_10151461674053745_360684095_n.jpg?oh=812898c7b08d162f0d9108c45fce9c7c&oe=57AC29C7&__gda__=1471031225_e50fa7738f06cd84187eb4876f0d9daf',
	link:'https://www.facebook.com/photo.php?fbid=10151461674053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John smiths extra smooth ',
	pct:3.8,
	desc:'What it lacks in alcohol it makes up in foulness ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/598767_10151461673913745_877248330_n.jpg?oh=70c173e50b096586818abbc259a131fc&oe=579D8D64&__gda__=1470684717_a3e00546f6e4d2cfc1f143a38f47dbf9',
	link:'https://www.facebook.com/photo.php?fbid=10151461673913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Pale Ale',
	pct:null,
	desc:'Tasty ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/549950_10151461681523745_1486815544_n.jpg?oh=4b27743a8db61ebc2af79f45b95d2672&oe=57BCE8C6&__gda__=1472059511_9b5035fac36e261178df4c4280c3e308',
	link:'https://www.facebook.com/photo.php?fbid=10151461681523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers sparkling ale ',
	pct:5.8,
	desc:'Not as good as the green, but has more kick ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/528845_10151602295348745_1649172027_n.jpg?oh=6562b53f4604cefad8479ae5d0cfd45b&oe=57A2C7D2&__gda__=1471010659_5366b70cd0004ae9c1d99eb3e62d8542',
	link:'https://www.facebook.com/photo.php?fbid=10151602295348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers extra stout ',
	pct:6.3,
	desc:'Twice the stout taste of a regular stout ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/484705_10151602292338745_274952911_n.jpg?oh=6a07848cc3d2284e5ddf86c4d1ddb080&oe=57AF20B3&__gda__=1471857357_12050fafb619c847251448796e4ec7e4',
	link:'https://www.facebook.com/photo.php?fbid=10151602292338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Lager ',
	pct:4.8,
	desc:'Pretty average, but you get used to it ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p180x540/421878_10151563839458745_1540530586_n.jpg?oh=c6a809b25066f3e712358c2c8c2740b3&oe=57E6E0A3&__gda__=1471705237_ff647299311d54b54a09ba2b8a8b5a4a',
	link:'https://www.facebook.com/photo.php?fbid=10151563839458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Resch\'s',
	pct:null,
	desc:'A bit harsh ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/484746_10151563946993745_129350151_n.jpg?oh=5824c40f3bc010ff238c8fafde6ab595&oe=57AF02DC&__gda__=1471760290_ef6ba542bf609176812b3ff8fcf8b089',
	link:'https://www.facebook.com/photo.php?fbid=10151563946993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little Creatures Pale Ale',
	pct:null,
	desc:'',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/543882_10151461681178745_1285845134_n.jpg?oh=eea0651a92e243f8297c2fd4dbd03008&oe=57A4D1E5&__gda__=1471682537_40f2ca05108f9f8baa8e2aaa4ba0ee68',
	link:'https://www.facebook.com/photo.php?fbid=10151461681178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boags',
	pct:null,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/734606_10151461683093745_1782530484_n.jpg?oh=6607a5b85799cbadf72bf8c55d83c923&oe=57A4FB33&__gda__=1470917209_697c70a236540e9658a57991bb604b13',
	link:'https://www.facebook.com/photo.php?fbid=10151461683093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys Extra Dry',
	pct:null,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/543796_10151461681748745_852056112_n.jpg?oh=72d637c6880d95d636e20b75642f0cb2&oe=57B2D4A0&__gda__=1471152929_47bfd6a9e5b502546ba300c5a9b6abcc',
	link:'https://www.facebook.com/photo.php?fbid=10151461681748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Victoria Bitter',
	pct:null,
	desc:'You either love it or hate it. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/521589_10151461681978745_514499327_n.jpg?oh=c1f3630dc26e07b583cc79c8153b9606&oe=57BB3498&__gda__=1470680089_ef3bfa9e86de6600b61ad6d6419e7c86',
	link:'https://www.facebook.com/photo.php?fbid=10151461681978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown Lager',
	pct:null,
	desc:'A rich man\'s VB. ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/537401_10151461682783745_431486220_n.jpg?oh=1ab4cd75949de9546aa92d370063ee61&oe=57B791F6&__gda__=1471409611_8aa3d099b64437f8a5ca8a61030d00bf',
	link:'https://www.facebook.com/photo.php?fbid=10151461682783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys old',
	pct:null,
	desc:'Not a stout, not a lager. Some sort of strange crossbreed ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/644421_10151563947083745_12453002_n.jpg?oh=038bd974885054fdc96205eca2cb1ce9&oe=57B3FA30&__gda__=1470551905_4da0a88eceb6a86f1bb63a038afa2f58',
	link:'https://www.facebook.com/photo.php?fbid=10151563947083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys New',
	pct:null,
	desc:'Not sure why I used to drink this all the time. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/74164_10151461683923745_699202545_n.jpg?oh=896114631534702f5384301768717a50&oe=57B8991B&__gda__=1470423526_6b3fe125773ad0db05ade2475236e44e',
	link:'https://www.facebook.com/photo.php?fbid=10151461683923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:null,
	desc:'Decent ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/602093_10151563947313745_1098411203_n.jpg?oh=a641ff4f96f3a8fbe75a7cffd1307698&oe=579B8A79&__gda__=1470333827_61c69e18c7e0f12e861ee96e243514e5',
	link:'https://www.facebook.com/photo.php?fbid=10151563947313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Platinum blonde ',
	pct:4.6,
	desc:'Meh ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/576008_10151563947183745_1748647687_n.jpg?oh=44051d23ffbad9e3a47efdaadf91e826&oe=57B5AC80&__gda__=1471499190_a732e27b759c35baa95e0f8960b3bedb',
	link:'https://www.facebook.com/photo.php?fbid=10151563947183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Three sheets Pale Ale',
	pct:null,
	desc:'A proper pale ale ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/431581_10151563947388745_1746265085_n.jpg?oh=291bb2b3fc2c2aaa703c6f2befb5956e&oe=57A02560&__gda__=1471243350_ed8fc73990e26081b5a98d6bb2f0d3e0',
	link:'https://www.facebook.com/photo.php?fbid=10151563947388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hite ',
	pct:4.5,
	desc:'Strange can, crisp taste ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/530584_10151461684393745_825973740_n.jpg?oh=0bb017149d9d5aa1ecd0a32376333040&oe=57A732C5&__gda__=1470356885_c8193f1260829c06a336d42d575a5f84',
	link:'https://www.facebook.com/photo.php?fbid=10151461684393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Helier.',
	pct:null,
	desc:'Actually a cider, but it has a great name.',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/480687_10151461682768745_502482125_n.jpg?oh=ef34fbff399aa7f5bf6c2aaa6f242677&oe=57B7F5E2&__gda__=1470162354_e83b2ef321eae534005b581b3c27f9cf',
	link:'https://www.facebook.com/photo.php?fbid=10151461682768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra King ',
	pct:7.5,
	desc:'Nicer, stronger and bigger than it\'s crappy cousin. That\'s why it\'s the king. ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/374324_10151461684623745_844347532_n.jpg?oh=cc235775497262c4c017dce06f165c34&oe=57B9E734&__gda__=1471531108_36b28ebe5fa514076b9173bd7d8b117d',
	link:'https://www.facebook.com/photo.php?fbid=10151461684623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kingisher',
	pct:null,
	desc:'The better Indian beer ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/733981_10151563846938745_1548720674_n.jpg?oh=ebfa660600e8e20ad90c1fa3a759b60b&oe=57A83B17&__gda__=1470015407_08510aceb36d7c125d70b1ecb29f6645',
	link:'https://www.facebook.com/photo.php?fbid=10151563846938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cambridgeshire Golden Ale ',
	pct:4.2,
	desc:'Plain ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/541370_10151563840993745_1315027570_n.jpg?oh=8d0bc9a6c81a4411099d76ab9aaf769a&oe=57A886B2&__gda__=1471950782_e94ff77b83a568b87accdae446f7a05e',
	link:'https://www.facebook.com/photo.php?fbid=10151563840993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'March of the Penguins ',
	pct:4.9,
	desc:'An average stout ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/75028_10151563841203745_1533936884_n.jpg?oh=1a289d43f25c1b23640a46d3f9c58211&oe=57B1BBA9',
	link:'https://www.facebook.com/photo.php?fbid=10151563841203745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nils Oscar God Lager ',
	pct:5.3,
	desc:'Not too bad ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/485993_10151563842368745_684144336_n.jpg?oh=9a053432a37a5db305bb153af80158bf&oe=57B0A6D8&__gda__=1471303334_477fc118fc3f39971f43eb2a2ba3ce89',
	link:'https://www.facebook.com/photo.php?fbid=10151563842368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Star ',
	pct:5.1,
	desc:'Smooth and cheap ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/601342_10151563843928745_511866900_n.jpg?oh=63f6157b0316ffc137fa6d750d2f9368&oe=57BB10DD&__gda__=1469755341_0953b1739586237b3e15cef1cb9196e9',
	link:'https://www.facebook.com/photo.php?fbid=10151563843928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Worthingtons White Shield ',
	pct:5.6,
	desc:'Flavoursome ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/380993_10151563843448745_1342021225_n.jpg?oh=0f4b44a38719116ecace75b8bfd2cf97&oe=57B71F09&__gda__=1470995896_a4d88681e4d7ced003c4e2dc44505e62',
	link:'https://www.facebook.com/photo.php?fbid=10151563843448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'British Bulldog ',
	pct:4.3,
	desc:'Not bad for a bitter. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/479882_10151563844403745_1566533959_n.jpg?oh=273adde345dc8c318b094aa1c752bec3&oe=57AC3739&__gda__=1471057167_51934826a2f6b614ed4d807fdc4d0ca5',
	link:'https://www.facebook.com/photo.php?fbid=10151563844403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Newcastle Brown Ale ',
	pct:4.7,
	desc:'Looks kind of like the runoff from some industrial process. Really makes me wonder what I\'m drinking. Amazingly it doesn\'t taste that bad ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/644361_10151563845228745_821469901_n.jpg?oh=eabf068c045934586ad5ec0bef5bf61f&oe=57A9AEB6&__gda__=1470980747_2d8262e45a65db99d9d83b61b6b3b1af',
	link:'https://www.facebook.com/photo.php?fbid=10151563845228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrooks pale ale ',
	pct:4.5,
	desc:'Another sock flavoured beer ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/545225_10151860439253745_1854856255_n.jpg?oh=1dc83f8269452bdcaaa27f1a37f9af70&oe=57A2D8FB&__gda__=1471500267_e41cf228c563d1d0ab1fd940fab1b9f7',
	link:'https://www.facebook.com/photo.php?fbid=10151860439253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrook\'s Brewery Junction ',
	pct:4.5,
	desc:'Not sure what taste they\'re going for here… Maybe socks. ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/482628_10151563846178745_1536949417_n.jpg?oh=cba2b4ecd9302159bca133c2c63e40f4&oe=57B8CC36&__gda__=1474838330_aff55b1e7600d9db988179a7ff25b449',
	link:'https://www.facebook.com/photo.php?fbid=10151563846178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duff ',
	pct:4.7,
	desc:'Not sure how Homer Simpson drinks this stuff ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/522569_10151563850998745_438604131_n.jpg?oh=d3c0db00bb85fa0076a9939f25367393&oe=57B78DDA&__gda__=1469935268_644f902ce42e61954de648f42a037909',
	link:'https://www.facebook.com/photo.php?fbid=10151563850998745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Novomestsy Lezak',
	pct:null,
	desc:'A different taste ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/625446_10151563847698745_35732168_n.jpg?oh=84d3c55759624ed596c5cb3fa0d63969&oe=57B21269&__gda__=1471755666_31c7f8c74eb0d619e68cea7fda6b6a5c',
	link:'https://www.facebook.com/photo.php?fbid=10151563847698745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Branik ',
	pct:5.5,
	desc:'Consumed in a room full of smoke. May have influenced the rating ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/486531_10151563848553745_1919030008_n.jpg?oh=ab31fe77dbe5db34e47536bb1f58d9c6&oe=57B7D3A7&__gda__=1472107286_b316fc4f5e85469d6a8a10180d882dc8',
	link:'https://www.facebook.com/photo.php?fbid=10151563848553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'X33 ',
	pct:12.6,
	desc:'Too sweet. Have one and move on ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/578557_10151563849238745_550093869_n.jpg?oh=2961e473436f75f63a2be029f73b3721&oe=579C3BE4&__gda__=1471547237_48e228e7228be73c7ee35197b0ee7e30',
	link:'https://www.facebook.com/photo.php?fbid=10151563849238745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oldgott ',
	pct:5.2,
	desc:'A mild taste of honey ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/374397_10151563850303745_1875521604_n.jpg?oh=096f078e4fc378eccb5c6cb8e36f3ad7&oe=57A01975&__gda__=1472053188_e88c1361413229e510fd524dc557953a',
	link:'https://www.facebook.com/photo.php?fbid=10151563850303745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pilsner Urquell',
	pct:null,
	desc:'Actually one of the worse Czech lagers ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/544330_10151563851598745_2141597246_n.jpg?oh=cac8629535acda8865264d0c4dbc3e79&oe=579ED994&__gda__=1471642924_42f82643f31c5ed2aefbfdc8afd893dc',
	link:'https://www.facebook.com/photo.php?fbid=10151563851598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser Budvar',
	pct:null,
	desc:'Far better than its american cousin. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/165000_10151428534173745_615410288_n.jpg?oh=2613ab807f0abe45033dda3d42db9fc9&oe=579AA62F&__gda__=1470027345_7dbafac3ad2491fec9b554050f79b0bd',
	link:'https://www.facebook.com/photo.php?fbid=10151428534173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel Dark ',
	pct:3.8,
	desc:'Smooth and flavoursome ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/602178_10151563853043745_1776474012_n.jpg?oh=7d096b605e52a1692b35cf3d2b2de5d1&oe=57E7214F&__gda__=1470958839_3afa6ac684d132769b488394253f9fd5',
	link:'https://www.facebook.com/photo.php?fbid=10151563853043745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gambrinus',
	pct:null,
	desc:'A poor mans beer ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/226421_10151563853523745_546548236_n.jpg?oh=576a1446ca044f509f7f766929c0426d&oe=57A9EAB4&__gda__=1471332605_0c27a1d650a9a0c5ae0149a7a156792c',
	link:'https://www.facebook.com/photo.php?fbid=10151563853523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bernard ',
	pct:5.1,
	desc:'Even tastes good after the second opening ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/44464_10151563938373745_1447128785_n.jpg?oh=f0a3c4257aedf7206a135effe8b845bb&oe=579ABD88&__gda__=1470187701_a93e48ae5810c9f48d86a9be9c3b092e',
	link:'https://www.facebook.com/photo.php?fbid=10151563938373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fenix',
	pct:null,
	desc:'Wheat beer with a hint of orange ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/625502_10151563944728745_168727372_n.jpg?oh=a1c154c51fe3daa4e929ee3e9a1195d4&oe=57BE589B&__gda__=1471928602_a75edcd992540be70434d750ff67ba07',
	link:'https://www.facebook.com/photo.php?fbid=10151563944728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel ',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/533976_10151331665848745_1640769773_n.jpg?oh=ca941d8e2b5a7360e1f45ab15b049470&oe=57A46FD3&__gda__=1471441705_19f8d91fc921229377788d880677e221',
	link:'https://www.facebook.com/photo.php?fbid=10151331665848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crakonos ',
	pct:5.1,
	desc:'I need to know who this old bever is. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/487632_10151563944693745_625226538_n.jpg?oh=7fce47c773c99fc965022b72fe8fff80&oe=57A9F7D4&__gda__=1471898282_918628c0ddf673aa2eacf439b16dac18',
	link:'https://www.facebook.com/photo.php?fbid=10151563944693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birell 0.',
	pct:49,
	desc:'Damn language barrier. I consider this a beer flavoured soft drink',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/733744_10151563944413745_394586851_n.jpg?oh=123a7df94edf9e53806ebf32b65c5a98&oe=57E7CA7F&__gda__=1472121086_de825e734bb869bfb110359ea1e893e1',
	link:'https://www.facebook.com/photo.php?fbid=10151563944413745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice 10 ',
	pct:4.2,
	desc:'Smooth with some sort of extra flavour. Caramel maybe ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/549300_10151563944628745_804920715_n.jpg?oh=2a68b3e2d7bda1971c75aaa72f3e15af&oe=57B07CE8&__gda__=1471275009_6ad20ff21db2060ce3b42658de65fabe',
	link:'https://www.facebook.com/photo.php?fbid=10151563944628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staropramen',
	pct:null,
	desc:'A nice lager. ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/59324_10151368078418745_874127613_n.jpg?oh=edfe3093a520911112015af17a1ec537&oe=57A31EAC&__gda__=1469756555_23480c981f7cf3f731c71108389cf516',
	link:'https://www.facebook.com/photo.php?fbid=10151368078418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice musketyr ',
	pct:4.5,
	desc:'Very similar to their other beer. Just a tad stronger ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/480492_10151563944828745_302604960_n.jpg?oh=a74e41fe1462de851ae53ec922ab83c6&oe=57AD5945&__gda__=1471815084_df10521be4e980e0741d2f4463bc8193',
	link:'https://www.facebook.com/photo.php?fbid=10151563944828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice cerne ',
	pct:3.8,
	desc:'A nice amber ale ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/482349_10151563944993745_189404530_n.jpg?oh=58cdfb712ea17e3759e93f30eacc7120&oe=57E860E9&__gda__=1471981497_67c190731ad81ae02d23a8c6a844b2be',
	link:'https://www.facebook.com/photo.php?fbid=10151563944993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Master ',
	pct:5.3,
	desc:'The master bev ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484682_10151563945163745_604451899_n.jpg?oh=e95c15b894ba1978c4a8a6a238d25dac&oe=57AAC7C0&__gda__=1470861456_d7ddab2075ff6e2c9f6146d45725410f',
	link:'https://www.facebook.com/photo.php?fbid=10151563945163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timothy Taylor Landlord ',
	pct:4.3,
	desc:'Orangey tasting ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/577972_10151563945378745_1586746946_n.jpg?oh=ef464bcef1a9f9dc6d4bb28e132de470&oe=57AB8583&__gda__=1469667765_1c71285f3b09b9707da6c451ba0edf75',
	link:'https://www.facebook.com/photo.php?fbid=10151563945378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Goose ',
	pct:4.2,
	desc:'A complete mismatch of flavours ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/555154_10151563945403745_1011654346_n.jpg?oh=fe3a4f518684ca729569e11c24f9d310&oe=57A8A9EF&__gda__=1469844019_575a171dd2710f76e94e79929496d1b9',
	link:'https://www.facebook.com/photo.php?fbid=10151563945403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oranjeboom',
	pct:null,
	desc:'Easy drinking fun ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/544204_10151563945568745_9282207_n.jpg?oh=ff53ecc44d96275d15ccb8076aa38984&oe=579B8A41&__gda__=1471253040_cba42b398791e6699491a0af49116cfc',
	link:'https://www.facebook.com/photo.php?fbid=10151563945568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viru ',
	pct:5.0,
	desc:'Smooth and malty  ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/482859_10151563945748745_1320031993_n.jpg?oh=675f67653cbf8a8d3934ea85f6002246&oe=57AC80EF&__gda__=1472072665_6180bfe72a60ae74dcd1edf72fb54ae6',
	link:'https://www.facebook.com/photo.php?fbid=10151563945748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saku original ',
	pct:4.6,
	desc:'Why was I served Estonian beer in a Lithuanian club? ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/482209_10151602299593745_443741349_n.jpg?oh=5259e9afe7943a7aea30ad95465b0e02&oe=579BD7A3&__gda__=1471901171_c83bfd8e30dcfe4f790ce2f3abc2369e',
	link:'https://www.facebook.com/photo.php?fbid=10151602299593745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jaipur ',
	pct:5.9,
	desc:'Like the bazar, needs to be removed from sale for public safety.  ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/582417_10151563946028745_982723381_n.jpg?oh=29c5f39e4ee4a614232ba093e3e2b7b6&oe=57BC38C5&__gda__=1472131259_f6d89a34f3a5c2b19943b786e895c5ef',
	link:'https://www.facebook.com/photo.php?fbid=10151563946028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Almaza ',
	pct:4.2,
	desc:'Tastes very familiar ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/2501_10151563946143745_340977146_n.jpg?oh=3c82aea10ff377f8745aa4e9ac1f6e84&oe=57BC1CCF&__gda__=1469853048_27b62cc8c703d2c6d422ee03c0b50ca5',
	link:'https://www.facebook.com/photo.php?fbid=10151563946143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fire rock ',
	pct:6.0,
	desc:'My first hawaiian beer. So far so good ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1002768_10151798817233745_47152190_n.jpg?oh=c44e0dc4867082951d61102c9679f7e3&oe=57A86A97&__gda__=1471454599_250b94531168b9e422f1c72a69efb98c',
	link:'https://www.facebook.com/photo.php?fbid=10151798817233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lion lager ',
	pct:4.8,
	desc:'Nothing special ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/75581_10151563946433745_1440605873_n.jpg?oh=7f21db77f8a2c1a4f6be507575ce57a0&oe=57AE70FE&__gda__=1470994871_a5cf165b35e9e3a878d329c73c7ef2bf',
	link:'https://www.facebook.com/photo.php?fbid=10151563946433745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sol ',
	pct:4.5,
	desc:'Much better than corona ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/556881_10151563946938745_1909714508_n.jpg?oh=f7d8ad6abcaa1f4dd9ec02d677a16dd0&oe=57A56294&__gda__=1470541896_20ef0be87a86690bbd22bd193528e6be',
	link:'https://www.facebook.com/photo.php?fbid=10151563946938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arvo brew 51 ',
	pct:4.9,
	desc:'Like an IPA gone wrong. ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/9699_10151602278498745_506265925_n.jpg?oh=1d54d223532934ce812d2614ceb356fc&oe=57B36329&__gda__=1474820290_c864ad9148abbe23592c41106529d287',
	link:'https://www.facebook.com/photo.php?fbid=10151602278498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson old admiral ',
	pct:6.1,
	desc:'Too much bitterness ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/575759_10151602281008745_1009725075_n.jpg?oh=607731ab59face784f814918e21c0f14&oe=57A48082&__gda__=1470770574_0aac8945fcfee1eddfde56393c2faa67',
	link:'https://www.facebook.com/photo.php?fbid=10151602281008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Quayle ale ',
	pct:4.0,
	desc:'Not as good as expected ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/602158_10151602281568745_1269833032_n.jpg?oh=331f47aebe6ba61a6f769e23e843533d&oe=57B08950&__gda__=1470849420_759d0a3ceb0ce8994e644618a5d83fa5',
	link:'https://www.facebook.com/photo.php?fbid=10151602281568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Trafalgar pale ale ',
	pct:4.0,
	desc:'A nice tang ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/7969_10151602281553745_212370865_n.jpg?oh=221109e373060a896116be8a83c3174d&oe=57BDAA71&__gda__=1474746880_2f54dd7ccb70b66b3157f8d1ec2c0ae5',
	link:'https://www.facebook.com/photo.php?fbid=10151602281553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Nelson\'s blood ',
	pct:5.0,
	desc:'A nice stout taste ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/64391_10151602282878745_784297964_n.jpg?oh=70b7b257a4a7c85a1c69c4279d15bb31&oe=579EAEAB&__gda__=1474780999_c8dc2d4d7a03ec2a2fc5297ab66617cf',
	link:'https://www.facebook.com/photo.php?fbid=10151602282878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'VB pale lager ',
	pct:4.4,
	desc:'Not quite as bad as regular VB ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/559250_10151602286458745_792577618_n.jpg?oh=8081d96c21f303982efed49f1d5cd742&oe=57A48826&__gda__=1470081999_fd0e8f7d327ce788525a83c22130aa22',
	link:'https://www.facebook.com/photo.php?fbid=10151602286458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds sunset ale ',
	pct:4.6,
	desc:'Slightly fruity, have to get used to it before judgement. ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484855_10151602282628745_1452325767_n.jpg?oh=82bb00ae354f48c821fd3932f2ba2e0c&oe=57B1A15F&__gda__=1470027369_1d927f608dccd522623bf3fd7d935faa',
	link:'https://www.facebook.com/photo.php?fbid=10151602282628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale ',
	pct:4.5,
	desc:'A slightly less fruity pale ale ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/599814_10151602286343745_870808186_n.jpg?oh=1e30673a224361e5ea280813f6c7d2b9&oe=57B4CDD3&__gda__=1469679811_c61d22684f0358d72a96bb976a6881c6',
	link:'https://www.facebook.com/photo.php?fbid=10151602286343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew pilsner ',
	pct:5.0,
	desc:'Rather nice ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/483798_10151602282778745_989104715_n.jpg?oh=3fac70788ee43cd3caa4d20e99783cf7&oe=57B5E4DB&__gda__=1474795173_1235071c4989f1ced5a4c5d4d1b1c60a',
	link:'https://www.facebook.com/photo.php?fbid=10151602282778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fat Yak',
	pct:null,
	desc:'A tasty bev ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/541362_10151602283703745_1951889238_n.jpg?oh=85ee18d62e4f3a9247a263602c4fb6de&oe=57BEC788&__gda__=1471515070_5ff072f1f9d5f21cbeb87c1d8aed119b',
	link:'https://www.facebook.com/photo.php?fbid=10151602283703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The boxer red ale ',
	pct:4.1,
	desc:'A mild red ale ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/562244_10151602284348745_1238517334_n.jpg?oh=68896cc6d9d3e57992c2c4c7201ed6d4&oe=579D3EE3&__gda__=1469837650_41e7191849e558321ed88bad6919b2ba',
	link:'https://www.facebook.com/photo.php?fbid=10151602284348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hangman pale ale ',
	pct:4.9,
	desc:'A tad bitter for a pale ale ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/581543_10151602284093745_555930895_n.jpg?oh=c323f49d6434b4c3aff84c0ed2b80846&oe=57AEDA01&__gda__=1470035328_fc16ac163b076e17381a85ccd18e0b49',
	link:'https://www.facebook.com/photo.php?fbid=10151602284093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The governor golden ale ',
	pct:4.5,
	desc:'',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/488220_10151602285323745_1585387237_n.jpg?oh=92bbdb3d83e069fa30f3122a91ff578b&oe=57A66723&__gda__=1474776085_78001699fb0214d9392cc490ad245ce3',
	link:'https://www.facebook.com/photo.php?fbid=10151602285323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red truck lager ',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/480840_10151602285148745_827571703_n.jpg?oh=ee2eeaca4687288f3112997c37a28e41&oe=57A76726&__gda__=1470541942_d4f9b4d017b9857745215a2801a1d820',
	link:'https://www.facebook.com/photo.php?fbid=10151602285148745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict lager ',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/526421_10151602285463745_410487487_n.jpg?oh=e6a194dd76ffc323fce0adec97ca9c92&oe=579F6785',
	link:'https://www.facebook.com/photo.php?fbid=10151602285463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bighead no carb beer ',
	pct:4.2,
	desc:'Tastes like a rusty nail left in a glass of water ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/64725_10151602286543745_838192247_n.jpg?oh=143b01948ef7524a5d936e0bfc09fc87&oe=57BB6BAC&__gda__=1471259694_18c3db32106a62aec45e5532413fd957',
	link:'https://www.facebook.com/photo.php?fbid=10151602286543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire one fifty lashes',
	pct:null,
	desc:'A good session beer ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/482193_10151602292048745_375392297_n.jpg?oh=963d3cb59b7f3b2c693bde6f047be4bd&oe=57A179F4&__gda__=1470163082_e8cc52d942396cb519ec931f081948fb',
	link:'https://www.facebook.com/photo.php?fbid=10151602292048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire sun down ',
	pct:4.4,
	desc:'A good amount of flavour but still easy to smash down. ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/5556_10151602286983745_1392314300_n.jpg?oh=d655ef1ccf3fa412574953f6527515bc&oe=579FAA26&__gda__=1469750701_65a447e157dfbe114d17888a98e360dc',
	link:'https://www.facebook.com/photo.php?fbid=10151602286983745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue ',
	pct:4.9,
	desc:'Not as good as I remember ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/733866_10151602292633745_1103549106_n.jpg?oh=f89e8f66200612423d31ea9ba242d957&oe=579974A6&__gda__=1471616426_636c091c65f5d69aeb72c6c5995d44d1',
	link:'https://www.facebook.com/photo.php?fbid=10151602292633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue pilsner ',
	pct:4.5,
	desc:'Doesn\'t really taste like a pilsner ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/149243_10151602295168745_1910196412_n.jpg?oh=24667b4e1a8c9c828367296512be25cd&oe=57E850C7&__gda__=1470028785_b2e44b085bcefda84950e1123d8d7448',
	link:'https://www.facebook.com/photo.php?fbid=10151602295168745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures bright ale ',
	pct:4.5,
	desc:'Terrible photo, decent beer ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/488165_10151602292853745_953241846_n.jpg?oh=62ebad326714ce02f3d4aadd322962be&oe=579D6DC3&__gda__=1470114749_ef053aaa446bc9245215a1b08c4a1596',
	link:'https://www.facebook.com/photo.php?fbid=10151602292853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pepperjack hand crafted ale ',
	pct:4.7,
	desc:'Takes a while to get used to, even then it\'s average. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/579182_10151602294478745_1578225000_n.jpg?oh=c25a97373e89ed634665385db78d0a0a&oe=57AEB1E9&__gda__=1470760953_810d67656b80817f57cf25d9273f605f',
	link:'https://www.facebook.com/photo.php?fbid=10151602294478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ pure lager ',
	pct:5.0,
	desc:'Something is wrong with this flavour ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/181067_10151602294978745_1842165802_n.jpg?oh=330e99f6a36b2ea7e4aff01c13e7e176&oe=579E8541&__gda__=1474814448_f7024d78225a9071685989c7f37f30e2',
	link:'https://www.facebook.com/photo.php?fbid=10151602294978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Keller door ',
	pct:5.0,
	desc:'Just a little bit extra flavour than a standard lager. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/527734_10151602296568745_390928601_n.jpg?oh=e0f1ba45cef1689a1b84b79edfc388ce&oe=57A7ABB1&__gda__=1470638799_fb136976622ec28ec00864edfc478809',
	link:'https://www.facebook.com/photo.php?fbid=10151602296568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate roadtrip ipa ',
	pct:5.8,
	desc:'Mild for an american IPA, easier to get used to ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/7254_10151602296908745_1398508952_n.jpg?oh=43faf836043b100f177eb26cb93254f8&oe=579D0BF3&__gda__=1471569777_ff73f14c2e470498bd595b0a90b5e8d9',
	link:'https://www.facebook.com/photo.php?fbid=10151602296908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate mt Macedon ale ',
	pct:4.5,
	desc:'Smooth and fruity ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/536215_10151602297528745_137791391_n.jpg?oh=385c555b9b7d0a2c44516b47404a526b&oe=57A43330&__gda__=1474790873_77ee002214d4ba3aaeb3479ac2746e05',
	link:'https://www.facebook.com/photo.php?fbid=10151602297528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Millenium Falcon ',
	pct:10.0,
	desc:'A mild IPA for the booze content ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/579366_10151602298783745_1455893061_n.jpg?oh=2e745159defa94a24242b26998da8ad3&oe=57AD0326&__gda__=1470390058_8dc647660d18ebfc220e95e5e40ac813',
	link:'https://www.facebook.com/photo.php?fbid=10151602298783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew Belgo ',
	pct:4.5,
	desc:'Very belgian without the alcohol content to match ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/522428_10151602297908745_1068926570_n.jpg?oh=875843e34b1da44a4051d0e9d0c0a35b&oe=57AD9E43&__gda__=1472116051_331bb435761b30f7698b6b8003330fb8',
	link:'https://www.facebook.com/photo.php?fbid=10151602297908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murrays icon 2IPA ',
	pct:7.5,
	desc:'Too much IPA flavour ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/524217_10151602298053745_1174689076_n.jpg?oh=68e8fb0f37f52b7970cb4c5abf790450&oe=57BC951B&__gda__=1471600865_29871d6230a913ca5bfa9f311a3c2651',
	link:'https://www.facebook.com/photo.php?fbid=10151602298053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boa\'s bind ',
	pct:5.0,
	desc:'A bit of an IPA flavour ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10102_10151602299658745_104134259_n.jpg?oh=4c0159c3b1ce5dfb06438398aea71c1c&oe=57A6DBAF&__gda__=1471292334_4bcfafd0484a8818169430757286cc84',
	link:'https://www.facebook.com/photo.php?fbid=10151602299658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Larks foot ',
	pct:4.5,
	desc:'Pretty average ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10055_10151602300248745_313412556_n.jpg?oh=47af203135738c8571fdbc5509eafe6a&oe=57BC0AFB&__gda__=1472104106_2730cda5639cff8afdf8e6386dab6033',
	link:'https://www.facebook.com/photo.php?fbid=10151602300248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton dry',
	pct:null,
	desc:'Decent Aussie beer ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/600269_10151602300508745_808991925_n.jpg?oh=7ba27e03700a9b4cf60abec46a65a630&oe=57A89B43&__gda__=1471160659_2aae701d9f1b398772fb9ecb250e7039',
	link:'https://www.facebook.com/photo.php?fbid=10151602300508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pure blonde ',
	pct:4.6,
	desc:'Easy drinking ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/157044_10151602300683745_1270951956_n.jpg?oh=a107c40f040c9f35f070caf03d0c75dc&oe=579E3C0B&__gda__=1471372218_7d26aa57c0d178ba2388ad17cabc6281',
	link:'https://www.facebook.com/photo.php?fbid=10151602300683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict strong ale ',
	pct:7.2,
	desc:'A strong and average flavour. ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/581629_10151602301103745_358423449_n.jpg?oh=ef08361f93ab8ea50176e503bb991ee2&oe=57B48886&__gda__=1470121622_5e03d3f23e82ff21adbbac5ae1ddfdf4',
	link:'https://www.facebook.com/photo.php?fbid=10151602301103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier burning gold ',
	pct:4.7,
	desc:'Boring ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/551487_10151649173073745_178044172_n.jpg?oh=3dfc5f76e87c5f5dbbce6d3670bf149e&oe=579CD778&__gda__=1470046504_36d9177de54e34d3f4cee27618189784',
	link:'https://www.facebook.com/photo.php?fbid=10151649173073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Korev ',
	pct:4.8,
	desc:'Like an off becks ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/48034_10151649174363745_1551458446_n.jpg?oh=be413aa21db53705ebb9c2cdc2498b32&oe=57A3BAF2&__gda__=1472058530_af8fc87cb00811f7551d8104e21e5e2e',
	link:'https://www.facebook.com/photo.php?fbid=10151649174363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply IPA ',
	pct:5.0,
	desc:'Just awful. Not even an IPA ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/998582_10151860439493745_805468360_n.jpg?oh=a00e66813ca8cfecc8234e5cb078ea2f&oe=57B5173D&__gda__=1471316269_b9bab279c04ba5812053dea82be0bc4b',
	link:'https://www.facebook.com/photo.php?fbid=10151860439493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious Brew ',
	pct:4.7,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/575573_10151649174188745_1546947418_n.jpg?oh=e5c547d02898272e03d45d2c4f2c7ccb&oe=57B8F6C5&__gda__=1470694681_63a70319ed50193b145ae657b82e60c3',
	link:'https://www.facebook.com/photo.php?fbid=10151649174188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven grand slam ale ',
	pct:4.0,
	desc:'A mild and average flavour ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/644743_10151649174378745_793600072_n.jpg?oh=e0cafcd3fc9bcc5306b39aa4d709c239&oe=57B0C297&__gda__=1472002183_c4928f0831791274434e8a44f295fc42',
	link:'https://www.facebook.com/photo.php?fbid=10151649174378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old golden hen ',
	pct:4.1,
	desc:'Wouldn\'t have another ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/48062_10151649174963745_1079824641_n.jpg?oh=ad5314df9903a92a2b38b7be81a304c1&oe=57B6FCAE&__gda__=1470288275_03ea4492ad57c61b6f68fa554526f16c',
	link:'https://www.facebook.com/photo.php?fbid=10151649174963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spitfire Kentish ale ',
	pct:4.5,
	desc:'Not too hard to drink ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/389000_10151649175308745_1470630421_n.jpg?oh=a87194704229d2207fa836f61579b56a&oe=57BD3015&__gda__=1470573732_e7264287a661a0863b65ef12bd2063d5',
	link:'https://www.facebook.com/photo.php?fbid=10151649175308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier English ',
	pct:4.7,
	desc:'I\'m a fan of this mild ale ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12402_10151649175493745_949451993_n.jpg?oh=2e715359f1e98516d9e3043bdc8a1e50&oe=57A0D39F&__gda__=1474827874_fb01d2213bc0cad9323e6e4599508e3b',
	link:'https://www.facebook.com/photo.php?fbid=10151649175493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murphy\'s draught ',
	pct:4.0,
	desc:'Instantly gave me a headache and made my mouth taste like it was bleeding ',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/310059_10151649175513745_267966869_n.jpg?oh=e4956c24d0ec0dd9c788dc23857812b3&oe=57A3DA9E&__gda__=1471229920_398d5e8f096c8bf81dca75f80a59f811',
	link:'https://www.facebook.com/photo.php?fbid=10151649175513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Frederic Robinson ginger ale ',
	pct:6.0,
	desc:'The worst ginger beer I\'ve tasted ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/486778_10151649175643745_1984274110_n.jpg?oh=ea1f30a0c8bc2013a7d57ef1230073eb&oe=57B923D8&__gda__=1471193092_731eb781e8da91724f18c8cec83488ea',
	link:'https://www.facebook.com/photo.php?fbid=10151649175643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wiltshire rum beer ',
	pct:5.0,
	desc:'Can\'t really taste the rum ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/935047_10151649176048745_1239205144_n.jpg?oh=8e08eaab096c5528eb5ce550e1ed8736&oe=579E7294&__gda__=1470782626_693af96e30d1e5f7f2f072333e46abc4',
	link:'https://www.facebook.com/photo.php?fbid=10151649176048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amigos ',
	pct:5.5,
	desc:'Tastes like agave ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/58112_10151649175958745_191846166_n.jpg?oh=5f6286f69a4dd41c79a489e130c5ca37&oe=57A55BB3&__gda__=1474776910_092c8dbe4957492a3f03860aa5acbe0d',
	link:'https://www.facebook.com/photo.php?fbid=10151649175958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Früli.',
	pct:null,
	desc:'Not usually served in a martini glass. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/533653_10151396306263745_1857811158_n.jpg?oh=058512e384d4300fc20756718f14fe6a&oe=57BD680D&__gda__=1470427895_4082855a3cc2d625519896e34974b765',
	link:'https://www.facebook.com/photo.php?fbid=10151396306263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans peche lambic beer ',
	pct:4.0,
	desc:'Tastes just like peach, not beer ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/71413_10151649176248745_1243782720_n.jpg?oh=1c460360bc6ee44f4ef8ea2c5d2e3a3f&oe=57BB26AA&__gda__=1471088099_4ffdd0a3f37d3801af8d2975c955ab53',
	link:'https://www.facebook.com/photo.php?fbid=10151649176248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans strawberry lambic beer ',
	pct:4,
	desc:'Not too much strawberry. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/537448_10151461684443745_989699337_n.jpg?oh=8fef453fe4e72472a981ca75e731b279&oe=57A14D56&__gda__=1471237407_d0272a77f68a191f9374e93c696b1d60',
	link:'https://www.facebook.com/photo.php?fbid=10151461684443745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vratislav ',
	pct:5.0,
	desc:'There\'s a reason I never saw this in the Czech Republic ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/923443_10151649176573745_311313356_n.jpg?oh=c87a8239839c4206d6e49c6c2506ae25&oe=57B0F0B3&__gda__=1469703395_f97b8552cf8d52b121d6f1bd289965d6',
	link:'https://www.facebook.com/photo.php?fbid=10151649176573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Remus ',
	pct:6.0,
	desc:'Pretty sure the guy on the label tea bagged this beer ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/401188_10151649176638745_2029777298_n.jpg?oh=8c9f320498d1d20da04acb789c4ccad0&oe=579CD8D7&__gda__=1474757222_d6310a2aec527b59b4d57591adea4bcf',
	link:'https://www.facebook.com/photo.php?fbid=10151649176638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king light ale ',
	pct:3.0,
	desc:'Weak and tasteless. Pretty much a waste of my time. ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/67496_10151649177163745_1520090166_n.jpg?oh=1a71873fe67bf34a095ac6b7d82b88fc&oe=57BBD873&__gda__=1470930098_e1b9667ca6fbaea015676b549eb84073',
	link:'https://www.facebook.com/photo.php?fbid=10151649177163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old salt quay ',
	pct:3.9,
	desc:'An easy drinking ale ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/407150_10151649177363745_297706272_n.jpg?oh=318218c4ba95af6c9fcc5e62e35fc22d&oe=57BBDDFE&__gda__=1471874432_80b363821c6e826581450c99f2c8a666',
	link:'https://www.facebook.com/photo.php?fbid=10151649177363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser 66 ',
	pct:4.0,
	desc:'Slightly fruity ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/62626_10151649177378745_981383908_n.jpg?oh=a721fdc894021dc6bc651a6ed9a2a35f&oe=57A10972&__gda__=1470728176_dc747a4fd08e9c1d6c1fef7c0ad0377d',
	link:'https://www.facebook.com/photo.php?fbid=10151649177378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Okocim mocne ',
	pct:7.0,
	desc:'Sweet and a little bit wrong ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/301917_10151649177953745_1459071565_n.jpg?oh=f4ae4214098a19923cfd7a4f37cd7da3&oe=57AE5D45&__gda__=1470539508_8a02e9c6eb1ab98bd366612e1f46edf6',
	link:'https://www.facebook.com/photo.php?fbid=10151649177953745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Desperados ',
	pct:5.9,
	desc:'Kind of a girls beer ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/305829_10151649178053745_1663963670_n.jpg?oh=0b740b203ae47ef1fce5630b38c6ee0f&oe=57B3BA37&__gda__=1471402241_3395cd1ba720984d6c3c56c7b37a5da2',
	link:'https://www.facebook.com/photo.php?fbid=10151649178053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corona ',
	pct:4.5,
	desc:'Not sure why so many people drink this ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484843_10151694516468745_911431623_n.jpg?oh=2f3e7cc53a393469887ffdde8e8ae8c5&oe=57B70882&__gda__=1471088338_d99bf96023b21b1d852b680bbe7a0612',
	link:'https://www.facebook.com/photo.php?fbid=10151694516468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cuvana rum beer ',
	pct:5.5,
	desc:'Like an over sweet tequila beer ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/64844_10151798801973745_1700678415_n.jpg?oh=c780833e40665c0a7664ff61a52401ee&oe=57BEA2D4&__gda__=1471666333_77af7f783cf4a4416e92ea53b92f1e7e',
	link:'https://www.facebook.com/photo.php?fbid=10151798801973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masquerido',
	pct:null,
	desc:'Yet another tequila beer ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/374702_10151649178783745_739073810_n.jpg?oh=e161c83b6f843e21b6246503f99d2de3&oe=57B2F723&__gda__=1474784861_9909f952d1610e8e4c053302a1144d6c',
	link:'https://www.facebook.com/photo.php?fbid=10151649178783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot ale ',
	pct:5.0,
	desc:'London pride with a bit more cigarette flavour ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/484477_10151649178223745_1831233561_n.jpg?oh=c23260ab78fd803ad702abded1339ba1&oe=57AB7033&__gda__=1470540418_414f22ceeec05c5fb42f77e33a614083',
	link:'https://www.facebook.com/photo.php?fbid=10151649178223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wychwood brewery Goliath ',
	pct:4.2,
	desc:'The beer to slay a mighty thirst ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/431886_10151649178733745_149102435_n.jpg?oh=51a0fd3b6838c2801fca1f0b6a4b6000&oe=579A85AE&__gda__=1470999087_b92cad7b2772d5127f59fe040d2f155e',
	link:'https://www.facebook.com/photo.php?fbid=10151649178733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fuller\'s honey dew ',
	pct:5.0,
	desc:'Needs more honey ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/969679_10151694516258745_1883640684_n.jpg?oh=478aa329d8db0ec41b16a93493b5f595&oe=57AAA3A2&__gda__=1471152427_99cbd97040aa0d27f81bd89c7b02589c',
	link:'https://www.facebook.com/photo.php?fbid=10151694516258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales barnsey ',
	pct:4.5,
	desc:'Not too bitter ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/923297_10151694519768745_611137307_n.jpg?oh=4c74cc7effe3298a10776ad0f0d76fc1&oe=57B901BC&__gda__=1471668775_6287d69689e837114181026cbdcbe29b',
	link:'https://www.facebook.com/photo.php?fbid=10151694519768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales gem ',
	pct:4.5,
	desc:'Not too bitter ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/423793_10151694518423745_774842906_n.jpg?oh=95407ddd92a0bc4f9181fec1b9dcf8ce&oe=57B54ABF&__gda__=1469888751_7c7b138eb89dbc117953d3288165557d',
	link:'https://www.facebook.com/photo.php?fbid=10151694518423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales wild hare ',
	pct:5.0,
	desc:'Lovely and sweet ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/935469_10151694516713745_1078233688_n.jpg?oh=e0fc5a816aabebb796ab83035aaa29c5&oe=57B34145&__gda__=1471845068_13b70c8f851bf5e58a353486dd66fdae',
	link:'https://www.facebook.com/photo.php?fbid=10151694516713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales Dark Side ',
	pct:4.0,
	desc:'A smooth dark ale ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/933900_10151694517968745_176829546_n.jpg?oh=60f90200c712f127e6ebc53896e3df2a&oe=57A02E05&__gda__=1471499244_7146435e6144d029804bd3b4985983e7',
	link:'https://www.facebook.com/photo.php?fbid=10151694517968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modelo ',
	pct:4.5,
	desc:'Alright ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/430992_10151694517623745_238159373_n.jpg?oh=4666942fdb354fd1ba08f8b86c20b93d&oe=579ECFE2&__gda__=1470894258_4f9d099b4514e3f1ce417d0059a8f905',
	link:'https://www.facebook.com/photo.php?fbid=10151694517623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Madog\'s ale ',
	pct:3.7,
	desc:'Almost like a mild IPA ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/931430_10151694519728745_1221673086_n.jpg?oh=89ba719bd6c2f713a4fd590da857f6cd&oe=57B86099&__gda__=1470579472_b5718f91cb908e25592087748a0bb2b3',
	link:'https://www.facebook.com/photo.php?fbid=10151694519728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ysgawen ',
	pct:4.0,
	desc:'Flowery ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/935261_10151694519833745_1401778168_n.jpg?oh=b3a28cacfdf5565c7470bac7d078d8fc&oe=57B119B1&__gda__=1470603064_ff942f48c18b3e491a4a256461ab5aa1',
	link:'https://www.facebook.com/photo.php?fbid=10151694519833745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faxe ',
	pct:5.0,
	desc:'It would take a long time to get used to this ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/954667_10151694524273745_524236800_n.jpg?oh=0c043fbdfbe02493fc02174a63c4ef37&oe=57E7D935&__gda__=1471844084_9f26151aa1507987feef9e4367ebc5c3',
	link:'https://www.facebook.com/photo.php?fbid=10151694524273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cwrw gwledd celebration ale',
	pct:4.2,
	desc:'I could enjoy a few of those ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/954753_10151694532288745_1231818486_n.jpg?oh=ca081a729ee2faf9a953267889d50cba&oe=57BC8440&__gda__=1472116216_05bf39d1bad3fc695b53c099f443e3a1',
	link:'https://www.facebook.com/photo.php?fbid=10151694532288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields Unfiltered lager ',
	pct:4.1,
	desc:'A flavour I can\'t pick ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/931410_10151694532138745_1297410335_n.jpg?oh=dcc1a15ccba8a15fa137f304bc4cab9c&oe=57B06176&__gda__=1471226879_55b56fc00f9c41e0acc74946e52c3695',
	link:'https://www.facebook.com/photo.php?fbid=10151694532138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields wheat beer ',
	pct:4.7,
	desc:'Very wheaty ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/947193_10151694532673745_349270642_n.jpg?oh=4d29f1b09cfed890078ef83a4447f921&oe=57BC7422&__gda__=1469751755_e5396982d4f4c5df2b87dea8694210d5',
	link:'https://www.facebook.com/photo.php?fbid=10151694532673745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam ',
	pct:4.8,
	desc:'Like a mild IPA. Tasty ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/983676_10151694533228745_78503103_n.jpg?oh=98bb2c8086e119f451a9fe7c6234c0a4&oe=57BD22BF&__gda__=1471605742_14f0a08d640078a818bafae26f8338a4',
	link:'https://www.facebook.com/photo.php?fbid=10151694533228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields hackney hopster ',
	pct:4.2,
	desc:'I should not have ordered this beer with only 15 minutes to drink it. Would be nice if I had more time to enjoy it ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1480719_10152147735493745_924183769_n.jpg?oh=219b816ecb26f1407662125a5dc45468&oe=57A488D1&__gda__=1471235853_6c83e4349ba348250ed2c415c2308d6e',
	link:'https://www.facebook.com/photo.php?fbid=10152147735493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dragon stout ',
	pct:7.5,
	desc:'So bad I can\'t believe they bottle this ',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/968780_10151694532678745_1443848773_n.jpg?oh=2682583f95b33cc81127acd12424aea6&oe=57A14CA0&__gda__=1471424041_1a44df2084b584ef5999cdb37597da48',
	link:'https://www.facebook.com/photo.php?fbid=10151694532678745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St mungo ',
	pct:null,
	desc:'Sweet sweet lager , but terrible warm  ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/942794_10151694532513745_577368504_n.jpg?oh=5d8c9ff7fa24ed11fb082274242ae455&oe=57BCD1B1&__gda__=1470734404_6203433dd68e322748779cb1a8d7304b',
	link:'https://www.facebook.com/photo.php?fbid=10151694532513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs back hop ',
	pct:4.4,
	desc:'Throw up kind if awful ',
	score:1,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/308392_10151694533218745_306927282_n.jpg?oh=1eebd02b751a897a6144e7f4faa0d4b2&oe=57B55FC8&__gda__=1471226806_ea3040eff3081fe643be5ff6bbe0b832',
	link:'https://www.facebook.com/photo.php?fbid=10151694533218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham citra ',
	pct:4.6,
	desc:'Nice hops but otherwise average ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/1237019_10151929068538745_647712352_n.jpg?oh=58c6de27bea63f09aab34f662037d34e&oe=57B7A1A5&__gda__=1471927282_85b4af0ab6d070fb4af28057f883136a',
	link:'https://www.facebook.com/photo.php?fbid=10151929068538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham scarlet macaw ',
	pct:4.8,
	desc:'Taught me the meaning of pugnacious ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1238244_10151929068473745_105586790_n.jpg?oh=f4bea9e0bfb944422a7c56afef0563f7&oe=57ACA14E&__gda__=1470855500_864d1bcde31dc40a2ddc6030ab3a18d5',
	link:'https://www.facebook.com/photo.php?fbid=10151929068473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham ales inferno ',
	pct:4.4,
	desc:'I think a beer called inferno needs chilli ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/942020_10151694533608745_2056877210_n.jpg?oh=512cd0eac772e6c73eb0956d9c98be21&oe=57B87DD1&__gda__=1472124637_6df0734f8ab023b15f6871d772fa2b6d',
	link:'https://www.facebook.com/photo.php?fbid=10151694533608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floris chocolat ',
	pct:4.2,
	desc:'Fizzy bad chocolate ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/945065_10151694533818745_1511619525_n.jpg?oh=00589b860024d799cec05c36d97770f3&oe=57A685B7&__gda__=1471685453_1289796ff488b2571f2afdbe8e3947a6',
	link:'https://www.facebook.com/photo.php?fbid=10151694533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Williams joker IPA ',
	pct:5,
	desc:'Surprisingly good ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/935627_10151694535958745_491079820_n.jpg?oh=fdbb50d20f762b5b0a3bdc42b302b3b4&oe=57BC5FBA&__gda__=1471380892_f1e5f8051beb823be43362067ff43dbc',
	link:'https://www.facebook.com/photo.php?fbid=10151694535958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber rambler ',
	pct:4.8,
	desc:'Sweet, hoppy, average ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/969003_10151694535793745_176698104_n.jpg?oh=dc5656d7792ec1487c6399f768a2af58&oe=579BACA9&__gda__=1470178880_88021b3c24261469574c17f234b221b7',
	link:'https://www.facebook.com/photo.php?fbid=10151694535793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruddles ',
	pct:3.7,
	desc:'Never again ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/263308_10151694535858745_1991147618_n.jpg?oh=5f9f3bd0d044a842ec9554c3178f238e&oe=57A780F0&__gda__=1471781697_42c80e2d2fd74d91591cb1527d8aca04',
	link:'https://www.facebook.com/photo.php?fbid=10151694535858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great bustard ',
	pct:4.8,
	desc:'Black and vomity ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/485453_10151694536548745_106155626_n.jpg?oh=7273259c3144c0a5d7d1feccec74c391&oe=57BE52A1&__gda__=1471697248_794625f209b6f336484b23675d175332',
	link:'https://www.facebook.com/photo.php?fbid=10151694536548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Efes ',
	pct:5.0,
	desc:'The best turkey has to offer? ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/261692_10151694536343745_1620675105_n.jpg?oh=7564f9284bfb6b2fface593fd79b6d7a&oe=57B60198&__gda__=1471470254_16a6ea8d3ecb04975b604112ed04ddab',
	link:'https://www.facebook.com/photo.php?fbid=10151694536343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perge ',
	pct:5.0,
	desc:'Much better than efes ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1005742_10151798801533745_634899063_n.jpg?oh=7d18043fbc6e299c26a5fc7fa25d1fed&oe=579E589F&__gda__=1471421865_5b919019f56cb2286d4df51c8c77348e',
	link:'https://www.facebook.com/photo.php?fbid=10151798801533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Voll-damn doble Malta ',
	pct:7.2,
	desc:'Quite malty ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/293097_10151694536623745_633779128_n.jpg?oh=23bdf2a6ffbf48122c85c036f4ea33c2&oe=57A59F65&__gda__=1471834651_b4b40548bf4a6d8d84b623dc24e1b3ff',
	link:'https://www.facebook.com/photo.php?fbid=10151694536623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo ',
	pct:4.8,
	desc:'Easy drinking ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/264403_10151694536708745_1298889096_n.jpg?oh=f81a1719d4f96520de25e825e9913256&oe=57BE08E3&__gda__=1470627410_d94d949fa3e4c0df421b498e9924170b',
	link:'https://www.facebook.com/photo.php?fbid=10151694536708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella Galicia ',
	pct:5.5,
	desc:'A bit more malty than the regular ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/988265_10151798820448745_1825630126_n.jpg?oh=1065383abf51f8021c2eedba505f1755&oe=57AC9443&__gda__=1472014794_2efccf965b91083ee08d2a894ca5c40b',
	link:'https://www.facebook.com/photo.php?fbid=10151798820448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella ',
	pct:null,
	desc:'Tastes a little bit burnt ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/248044_10151694532898745_1441204919_n.jpg?oh=3670bdbd427655fa34ac4b4b6e444c89&oe=579B111A&__gda__=1472119340_cc9c7796437969b431555d14c3d9d88c',
	link:'https://www.facebook.com/photo.php?fbid=10151694532898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mahou.',
	pct:null,
	desc:'A very tasty lager. Could drink these all day ',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/150945_10151461683838745_503756954_n.jpg?oh=6bfc6e05bc92dbb92f30b0c9639593d3&oe=57BB4978&__gda__=1470298630_c44fc7179e1b05ca3e80703d43ae885d',
	link:'https://www.facebook.com/photo.php?fbid=10151461683838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel. ',
	pct:5.4,
	desc:'A beer for all occasions. ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/22402_10151315677898745_961047009_n.jpg?oh=ca18ec0126ae75f08c37ef3f2fdd05a4&oe=57E80F54&__gda__=1471200470_9dde0020c388c4df2fe10c1b6a937d30',
	link:'https://www.facebook.com/photo.php?fbid=10151315677898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keler',
	pct:null,
	desc:'Fantastic after a long day ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/64607_10151798820233745_1697119288_n.jpg?oh=e0849f8e678b131813e4e3b7071c3ab3&oe=579C1BCF&__gda__=1469887878_5b832591c02c0428c966d9b08b3c2658',
	link:'https://www.facebook.com/photo.php?fbid=10151798820233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ambar ',
	pct:5.2,
	desc:'Session beer ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/540216_10151798819258745_1593913527_n.jpg?oh=4bfaf3ec850b63327e3fbf81b2625a2c&oe=57E7A584&__gda__=1469684372_d9635c4259ab84ae4b97d67ae756a506',
	link:'https://www.facebook.com/photo.php?fbid=10151798819258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo gran reserva ',
	pct:6.4,
	desc:'A bit malty but mostly smooth ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/944493_10151798819313745_233015169_n.jpg?oh=5e17d9e35b590eb65e970676877fee19&oe=57ADD912&__gda__=1470358018_8e06d1752dbfb870841b61a003bf1595',
	link:'https://www.facebook.com/photo.php?fbid=10151798819313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koenigsbier ',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/983885_10151694536943745_1632093000_n.jpg?oh=fee5f925b07cdd0354fd16bc0c77eba2&oe=57B83F12&__gda__=1470867236_1e445cc68211586b4794797d832bbeac',
	link:'https://www.facebook.com/photo.php?fbid=10151694536943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quilmes ',
	pct:4.9,
	desc:'Average ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/65636_10151694536878745_1850782094_n.jpg?oh=f7df905923b8ee511b34b9de70d57234&oe=57B43777&__gda__=1470796839_e0cb0fdb16cc8d7b964c76de641da27b',
	link:'https://www.facebook.com/photo.php?fbid=10151694536878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blas trigo ',
	pct:6.0,
	desc:'A strange taste. Almost like a lambic. Even enjoyed by non beer drinkers. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1011466_10151798821318745_54743244_n.jpg?oh=55d39312a1ca2143b40e3546f372cf7a&oe=57B62D8C&__gda__=1472128498_6a046bf5732858f27e5d7119c011a664',
	link:'https://www.facebook.com/photo.php?fbid=10151798821318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faro Lambic ',
	pct:4.5,
	desc:'A kind of tangy flavour ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/252348_10151694537033745_65345877_n.jpg?oh=5e9cfe09e01612f8d9976864d97d68a0&oe=579E6CDA&__gda__=1470141217_8deebab5b529a5ebe610cbfb07f8ae00',
	link:'https://www.facebook.com/photo.php?fbid=10151694537033745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skull splitter ',
	pct:8.5,
	desc:'Every mouthful is like being punched in the neck. A mans bev. ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/292440_10151694537253745_171550675_n.jpg?oh=641f3fdc79b8ed20869ec3ccafc6a0af&oe=57BE3A90&__gda__=1471468014_008dc3f6d27ef51200f1f17bc9064c3e',
	link:'https://www.facebook.com/photo.php?fbid=10151694537253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sagres Bohemia ',
	pct:6.2,
	desc:'Easy drinking for the strength ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/261740_10151694537308745_1696408161_n.jpg?oh=670ac9530a8e68477e6183b915821fd6&oe=57B65175&__gda__=1470901956_348fbcc46d7d4eea49967f3e06850d9c',
	link:'https://www.facebook.com/photo.php?fbid=10151694537308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious original pale ale ',
	pct:3.9,
	desc:'Flowery ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/943639_10151798797268745_543942826_n.jpg?oh=de6069ef740f93763f242ddbcbab8767&oe=57BC31F5&__gda__=1471674652_9c5dcf1e7cc6857c0682a16b32a90733',
	link:'https://www.facebook.com/photo.php?fbid=10151798797268745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Centennial IPA ',
	pct:7.2,
	desc:'Slightly too strong ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1070104_10151798797103745_60498930_n.jpg?oh=07c53a58349868838251c86337348bc2&oe=579E749F&__gda__=1471001762_76e811e2a01d33c5d4c2e3b26d9d62b9',
	link:'https://www.facebook.com/photo.php?fbid=10151798797103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wild beer epic saison ',
	pct:5.0,
	desc:'Different but not very good ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/73345_10151798799468745_1877528478_n.jpg?oh=686c6e76151d2c924d39ba8541e8e542&oe=579D51B0&__gda__=1472073209_13959d0b0722fd4e965c04ca6eef9f55',
	link:'https://www.facebook.com/photo.php?fbid=10151798799468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The wild beer co Bliss ',
	pct:6.0,
	desc:'Weird as hell. Is that ginger ? ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1001179_10151798797773745_1783696922_n.jpg?oh=91226afa2662a6904d00f3aa198e2055&oe=57BA0AF3&__gda__=1470452292_dda12b5f8ac452110ed886a85f848c27',
	link:'https://www.facebook.com/photo.php?fbid=10151798797773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Porter ',
	pct:6.5,
	desc:'Unexpectedly smooth ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1075890_10151798799218745_348684892_n.jpg?oh=ff598183fa86841a230dc220baed7785&oe=579B9AE6&__gda__=1470183262_d75236bc66dfb5fd457a4d2607403a13',
	link:'https://www.facebook.com/photo.php?fbid=10151798799218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'01|02 ',
	pct:5.4,
	desc:'Plain ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/64066_10151798799093745_1495677337_n.jpg?oh=16bec7104bb7c737654f66025ec3eb89&oe=57B99383&__gda__=1470480893_a3848ff4872a77d839f4c94600a5b4a9',
	link:'https://www.facebook.com/photo.php?fbid=10151798799093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu winterbier ',
	pct:5.5,
	desc:'Not sure what it has to do with winter. ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/74388_10151428532683745_883935005_n.jpg?oh=0a950c8c36e7523cfd1fae654f7719d5&oe=57B94BC3&__gda__=1470499649_5e28559cef757658921f43f6455fc35b',
	link:'https://www.facebook.com/photo.php?fbid=10151428532683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Benediktiner ',
	pct:5.4,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/598459_10151331653573745_57128822_n.jpg?oh=3a78a10ae1b54a66ccd49df57900b139&oe=57B2F3BC&__gda__=1474845705_dcd74e5b9e8986c90b9cd4a324e9f9c1',
	link:'https://www.facebook.com/photo.php?fbid=10151331653573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spaten',
	pct:null,
	desc:'Average German beer ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/602999_10151798820463745_26311115_n.jpg?oh=5f3ebef80c8026abdfcb30e3414df062&oe=57B6EF69&__gda__=1471124444_c01e86670f3931a101a4b5c4099b1f30',
	link:'https://www.facebook.com/photo.php?fbid=10151798820463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paulaner',
	pct:null,
	desc:'Still not a fan of wheat beer. Also not happy when this doesn\'t come in a stein. ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/542113_10151428531848745_1285156274_n.jpg?oh=c32522f5efbb581df86ba84c5d6308c6&oe=57B954B0&__gda__=1471453953_a1c1e3503fb944539138dc6a6310c43a',
	link:'https://www.facebook.com/photo.php?fbid=10151428531848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Erdinger.',
	pct:null,
	desc:'A German classic. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/312687_10151396304703745_1460506547_n.jpg?oh=8d6b7d564ca4de78df72168623ede06b&oe=57AD44A4&__gda__=1470489365_f4a00f6fe3608b2c29416ec581a950f5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lowenbrau',
	pct:null,
	desc:'An old favourite. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1006322_10151854990003745_1367385970_n.jpg?oh=baba28a33ec71ebe32f7ac16bb6d2c9c&oe=57A88B2B&__gda__=1470700411_376628ec0bfd9ddb0b120aa696c3e2e7',
	link:'https://www.facebook.com/photo.php?fbid=10151854990003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grafenwalder ',
	pct:4.8,
	desc:'Plain and easy to drink. Also cheap. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/72182_10151649174918745_777169044_n.jpg?oh=b98b72942513f79abf2826803a0b6695&oe=57A88043&__gda__=1469944898_16cb800128f6cc74f3ccbcac7e2d7568',
	link:'https://www.facebook.com/photo.php?fbid=10151649174918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kostritzer',
	pct:null,
	desc:'Milder than a dark beer normally is ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1920083_10152293088098745_591597385_n.jpg?oh=55fd32e94845552e638b4f6c28166a1a&oe=57B24D1A&__gda__=1471637256_8b47593d5c112f654bec2da3a3a24839',
	link:'https://www.facebook.com/photo.php?fbid=10152293088098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rheinbacher. ',
	pct:null,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/644125_10151296241128745_1291306382_n.jpg?oh=0db0b493a39d754421c6d1c737eab8b1&oe=57BA7D36&__gda__=1470873382_48074e7be09ebfaa1d352b99d93bbd47',
	link:'https://www.facebook.com/photo.php?fbid=10151296241128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogaarden',
	pct:null,
	desc:'Not a white beer fan. ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/312594_10151396305888745_722386464_n.jpg?oh=c7baaadb9c4ded4ec23f4bcef31d7248&oe=57A4FB5A&__gda__=1470050314_5fb8b1969448c6d5a9f739158fdd982e',
	link:'https://www.facebook.com/photo.php?fbid=10151396305888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bitburger',
	pct:null,
	desc:'Not my favourite 1L beer. ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/45381_10151798800163745_1715529842_n.jpg?oh=fbcede5fbe600c4665655093c53a3b6a&oe=57B97256&__gda__=1471593175_99955a8b111c70a0aa01dcd16448fdf0',
	link:'https://www.facebook.com/photo.php?fbid=10151798800163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fischer\'s stiftungbräu helles ',
	pct:5.1,
	desc:'Could drink this all day ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1016879_10151798800588745_1406598038_n.jpg?oh=502f4eb67b888154e73c875d95fa177e&oe=57B05C22&__gda__=1469977513_2da2e46c14d51e14c626ab45bc8a61be',
	link:'https://www.facebook.com/photo.php?fbid=10151798800588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rothaus Pils',
	pct:null,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/263281_10151428533418745_1142185316_n.jpg?oh=ee3c890a4787af05c197e1efa62b1507&oe=57A31780&__gda__=1470953009_a97f1070f2818db998e1fb37ad164ace',
	link:'https://www.facebook.com/photo.php?fbid=10151428533418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Konig pils ',
	pct:4.9,
	desc:'Standard German ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1743537_10152293088048745_37653094_n.jpg?oh=4c1184d3a19ae6278aa56d9f9f7f6621&oe=57A55087&__gda__=1474778042_3a886646999ba9d51454db78f1c6d227',
	link:'https://www.facebook.com/photo.php?fbid=10152293088048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau',
	pct:null,
	desc:'Oktoberfest goodness ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/2771_10152001625293745_732438079_n.jpg?oh=d68687b7e8bb4d3ded7a82db3713f270&oe=57A95A55&__gda__=1472060914_0da064d1da7c6727800def5bd5ce6b05',
	link:'https://www.facebook.com/photo.php?fbid=10152001625293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hacker-Pschorr',
	pct:null,
	desc:'Oktoberfest goodness ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1376515_10152001625798745_1787795583_n.jpg?oh=b55d0f94c419dfe6ce8c62b93b4c055b&oe=57B0A24A&__gda__=1472146547_be93986332cfa55b28494b69da32f8dd',
	link:'https://www.facebook.com/photo.php?fbid=10152001625798745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'DAB ',
	pct:5.0,
	desc:'Disappointing ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/525742_10151860439343745_1260154559_n.jpg?oh=47ee858dd943e75591050bb35535274f&oe=57A39BB5&__gda__=1469915727_3814b9d15019845f529729d69032670a',
	link:'https://www.facebook.com/photo.php?fbid=10151860439343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Augustinerbrau ',
	pct:5.2,
	desc:'Alright ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1375936_10152001624743745_1619318099_n.jpg?oh=095ddefadfb38c3567f3db9ea80a479e&oe=57B67692&__gda__=1471504043_25ecf5ea72a0fa67137c8c57d27f5546',
	link:'https://www.facebook.com/photo.php?fbid=10152001624743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxlrainer',
	pct:null,
	desc:'Not too bad ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1385612_10152001625738745_155180417_n.jpg?oh=6b4dfabef5120c1da0d5a0f571174fd2&oe=57AEAE9F&__gda__=1471187557_e3a4af26c93009529b6a0ad431197f26',
	link:'https://www.facebook.com/photo.php?fbid=10152001625738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Yakima Red ',
	pct:4.1,
	desc:'Pleasant ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/992917_10151798801088745_1382376594_n.jpg?oh=59ab3a92da91aa8b8740d0af771b53dc&oe=57AAE7EA&__gda__=1471126011_dded8d0dd7073b72a5f9f99d7f78faa1',
	link:'https://www.facebook.com/photo.php?fbid=10151798801088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Stout ',
	pct:4.5,
	desc:'I could have another ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1069371_10151798801138745_1255664168_n.jpg?oh=44e6919343b31309a198f34e261fcbb3&oe=579BD105&__gda__=1470079036_a32ef455e84d77b038ee27918f328eee',
	link:'https://www.facebook.com/photo.php?fbid=10151798801138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Pilsner ',
	pct:4.4,
	desc:'Not my favourite pilsner ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/999024_10151798817478745_821421302_n.jpg?oh=6925117ec85cc339479c6ed116869685&oe=57B76648&__gda__=1474750744_18c41f5fa4e1dd23bb081a214b7dc0b5',
	link:'https://www.facebook.com/photo.php?fbid=10151798817478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Charlie\'s ',
	pct:5.0,
	desc:'I think charlie may be homeless ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/374377_10151798802143745_204094323_n.jpg?oh=97d8797ae4b2c192e300696304b4ddb2&oe=57E85725&__gda__=1471013467_e971d4dc8970219730f21eee63ae6522',
	link:'https://www.facebook.com/photo.php?fbid=10151798802143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Spindrift ',
	pct:5.0,
	desc:'Kind of a pale ale taste. The first time I\'ve seen a beer in a blue bottle ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1069901_10151798803058745_68050022_n.jpg?oh=0787caff3d0450c58cc4aad831e1463f&oe=57BACE87&__gda__=1470411982_e200369d4167b4e9f970bc8f0d0b2076',
	link:'https://www.facebook.com/photo.php?fbid=10151798803058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hook pilsner ',
	pct:5.3,
	desc:'A mild flavour ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1069935_10151798817208745_1577449594_n.jpg?oh=769d56c805407ed102703da77207cf62&oe=57A506DB&__gda__=1470992668_d68e83fdb1e4842050ca842b305d7ef6',
	link:'https://www.facebook.com/photo.php?fbid=10151798817208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark Lord ',
	pct:5.0,
	desc:'Really needs a lord of the rings reference on the label. ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/935039_10151798818428745_2074781709_n.jpg?oh=952371aaa948922dc67237516cd6bed7&oe=579E9594&__gda__=1474757925_a50f87f25cca525e6e9e67a1e1add488',
	link:'https://www.facebook.com/photo.php?fbid=10151798818428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moosehead ',
	pct:5.0,
	desc:'Would take some getting used to ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1000219_10151798818558745_1372926994_n.jpg?oh=86d913f74e790555ddf2a42bdbfeaf0d&oe=57ABD4AC&__gda__=1469875495_85eea4c8ae23b23119e58ad9164b7c2d',
	link:'https://www.facebook.com/photo.php?fbid=10151798818558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Broadside ',
	pct:4.7,
	desc:'The bitterness takes some time to get used to ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1006000_10151798819328745_2080424026_n.jpg?oh=6e14a5b4fc06f85c27f047fed61fcc87&oe=57B3A4E6&__gda__=1471876433_083a34ec9e398074394cbea8d51d83c4',
	link:'https://www.facebook.com/photo.php?fbid=10151798819328745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstök Pale ale. ',
	pct:5.6,
	desc:'A nice pale ale with a hint of volcano. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/559118_10151798821313745_705644987_n.jpg?oh=5133084d2b012c92e8c5786d53dc5a91&oe=57A6F15E&__gda__=1470905422_d96217f039615e7c508e56eea238a2df',
	link:'https://www.facebook.com/photo.php?fbid=10151798821313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstok toasted porter ',
	pct:6.0,
	desc:'A good morning beer. With bacon and eggs. Also beer #300! ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1069403_10151798927653745_683815255_n.jpg?oh=67800fe992f1a6971debd0edb5ebd04c&oe=57B35216&__gda__=1471309742_355a4c413da004f12c6890fa7ae36248',
	link:'https://www.facebook.com/photo.php?fbid=10151798927653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leo ',
	pct:5.0,
	desc:'Easy drinking, great in hot weather ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1947644_10152280801063745_1171315228_n.jpg?oh=f1a1b7123a9623c55b5b46d2ed8615e4&oe=57BB31BB&__gda__=1470178677_49939aadb3999d605d5b38e824913023',
	link:'https://www.facebook.com/photo.php?fbid=10152280801063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tiger',
	pct:null,
	desc:'A good choice ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/549260_10151563946038745_1772775906_n.jpg?oh=dbc0bf4790d48a71868949aa553e558e&oe=57ADF8AE&__gda__=1470903380_f610ac26ce95b53ece0260cff730fc63',
	link:'https://www.facebook.com/photo.php?fbid=10151563946038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chang export ',
	pct:5.0,
	desc:'Take the regular low quality chang and add way too much malt ',
	score:2,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1969273_10152280801073745_1139224814_n.jpg?oh=89a4da89991587d81ba78940e50369fc&oe=57A1CBE5&__gda__=1471132689_8cc3e3a2b31fb5833a62d6e6f8ceba9a',
	link:'https://www.facebook.com/photo.php?fbid=10152280801073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Singha 5.',
	pct:05,
	desc:'Served in the authentic Thai way. With a glass filled with ice. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/522410_10151602279523745_2144170744_n.jpg?oh=ca7bd3da26424879bfadd9b5dc2b93d1&oe=57B3CC93&__gda__=1470355561_6d67573edd112ee4a96f4a90338917e3',
	link:'https://www.facebook.com/photo.php?fbid=10151602279523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao ',
	pct:5.0,
	desc:'Fairly standard lager ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/553908_10152001638218745_428160786_n.jpg?oh=10c70b97108ea7c850c6fc863d30f130&oe=57BAF8BD&__gda__=1471496788_a2fb68bca5e4cb35b509b349d1308ea3',
	link:'https://www.facebook.com/photo.php?fbid=10152001638218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tsingtao ',
	pct:4.7,
	desc:'China standard ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/968819_10151798821173745_1903896463_n.jpg?oh=922ac38591c947e1faeba70a7282d93c&oe=57A8CD3B&__gda__=1471433665_be4240589ef9d19faea7eaa01ab034ed',
	link:'https://www.facebook.com/photo.php?fbid=10151798821173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sapporo ',
	pct:5.0,
	desc:'Solid can, solid beer ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1002989_10151798803018745_1022069808_n.jpg?oh=557357853a3d66c8fc2126ea4dfb42f4&oe=57AC1D27&__gda__=1471773072_89f38d6f21f032fc1264f9773e965429',
	link:'https://www.facebook.com/photo.php?fbid=10151798803018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino red rice ',
	pct:7.0,
	desc:'A strange taste, takes a bit to get used to ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/q82/p480x480/1157401_10151888670423745_99231248_n.jpg?oh=f7ef8302977d06075a246be3703be880&oe=579E4BEB&__gda__=1472130441_88824a4bd406af1b38b14b1e67b159a8',
	link:'https://www.facebook.com/photo.php?fbid=10151888670423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Ginger ale ',
	pct:8.0,
	desc:'A mild ginger taste. The warming sensation makes me think this isn\'t meant for summer. ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/942413_10151798927708745_1675671077_n.jpg?oh=8d2fc9427f27e7faa06c4eda51d2c350&oe=57A8A2BD&__gda__=1471291141_205b21989960c5f74eac5e8023e7a4ae',
	link:'https://www.facebook.com/photo.php?fbid=10151798927708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino pale ale ',
	pct:5.5,
	desc:'Surprisingly good. Wish I bought more than one ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1011658_10151854990103745_2038671130_n.jpg?oh=21206a5439abcfe0a3b223cb7999a3c7&oe=57BD3F08&__gda__=1471409871_5eb4312bc9c68a69914d1fa4e428ff16',
	link:'https://www.facebook.com/photo.php?fbid=10151854990103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi',
	pct:null,
	desc:'A classic ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/537524_10151563945728745_1100203805_n.jpg?oh=ff4c121099b56754bbeaaaacacb72a7e&oe=57ABE0F4&__gda__=1470121922_2e1e446ce6ec18f12b88facf81d48acd',
	link:'https://www.facebook.com/photo.php?fbid=10151563945728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino japaneses classic ale ',
	pct:7.0,
	desc:'Such a letdown after the pale ale ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185821_10151854990343745_429136882_n.jpg?oh=5fd576a9788737391baee29417c8bf4d&oe=57B2AE05&__gda__=1472027097_e0135d1c7f50c0d164324c444bb9fbc8',
	link:'https://www.facebook.com/photo.php?fbid=10151854990343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Nest Commemorative Ale ',
	pct:8,
	desc:'The perfect beer for new years. Or any other time ',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/970685_10151854991538745_1076029058_n.jpg?oh=75b2de19f4a7c461ce053965a1b95226&oe=57A1AFD0&__gda__=1471151884_1ad3972eb7b26ca984791aba9453a30b',
	link:'https://www.facebook.com/photo.php?fbid=10151854991538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoopers Ginger brew ',
	pct:4.0,
	desc:'Exactly how a ginger beer should taste ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185949_10151854991548745_379811355_n.jpg?oh=e253bfeee3fb8b6356f71617ee42267d&oe=57A80C13&__gda__=1470192847_f086667195a313e21adabd176e92870a',
	link:'https://www.facebook.com/photo.php?fbid=10151854991548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Strongroom dark ',
	pct:4.5,
	desc:'Rather creamy ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1175248_10151860440378745_2027227367_n.jpg?oh=0269c1439609341e138749da21082aeb&oe=57B9A8B4&__gda__=1471208307_6698306a7834b456af9c0eb4c57142be',
	link:'https://www.facebook.com/photo.php?fbid=10151860440378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boondoggle blonde ale ',
	pct:5.0,
	desc:'Some sort of quasi good beer',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/970910_10151860440438745_1474360215_n.jpg?oh=11bb029f5ed7b2cb5cae3a9e7e5b46f3&oe=579DD103&__gda__=1470151818_561c531849f5b2ccdd74888a873d4b2f',
	link:'https://www.facebook.com/photo.php?fbid=10151860440438745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Banks caribbean lager ',
	pct:4.7,
	desc:'Mild and smooth ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1157507_10151860440488745_679128594_n.jpg?oh=86c3381f33ed5cbb381172b123e5493c&oe=57B6E691&__gda__=1472123433_670672205a99c184d25b3881eeee6b97',
	link:'https://www.facebook.com/photo.php?fbid=10151860440488745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nutty black ',
	pct:3.9,
	desc:'Not as awful as expected ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1173809_10151860441013745_1894761382_n.jpg?oh=51e41311d7026339b04a2102f7ac69ce&oe=57A47423&__gda__=1471061833_a0cda9ce0596a3c3545428d5b6a3714c',
	link:'https://www.facebook.com/photo.php?fbid=10151860441013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ESB ',
	pct:5.5,
	desc:'A tangy off flavour. Like someone dipped their balls in the keg. ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/999589_10151860441473745_1970036928_n.jpg?oh=f473ce660d43b74519bdee1cc34511d7&oe=57A94CEA&__gda__=1470782458_676c80644bf5c3395ed33385826e0841',
	link:'https://www.facebook.com/photo.php?fbid=10151860441473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hylder Blonde ',
	pct:4.2,
	desc:'A little bit too much flower ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/542217_10151860441663745_480799893_n.jpg?oh=a6976520c4188ad89f4daa9c69d6bce1&oe=57B5D31D&__gda__=1470770076_e866304404fb841674c27b4b207211d2',
	link:'https://www.facebook.com/photo.php?fbid=10151860441663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The big inflatable cowboy hat ',
	pct:10.5,
	desc:'Flavourful without being too strong ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/970683_10151860442323745_1389595186_n.jpg?oh=3b9a50ece0a92c37d886ea10ef833fa5&oe=57A5CD51&__gda__=1471443928_d02bfc179571bdf8475da963ee685f19',
	link:'https://www.facebook.com/photo.php?fbid=10151860442323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Long hammer IPA ',
	pct:5.9,
	desc:'Smash the hammer! ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1173745_10151860442463745_736142328_n.jpg?oh=0d6cbf8c27660985fedadef327c4d0d0&oe=57BD2874&__gda__=1469932712_ca18d2b18dc278b16e1f46ffdfc3dc70',
	link:'https://www.facebook.com/photo.php?fbid=10151860442463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage light ale ',
	pct:3.2,
	desc:'Why did I even buy this tiny weak beer? ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1003533_10151860443063745_1669379479_n.jpg?oh=8ee016dcedb556f1d54b7888a2c34160&oe=57A7EDA9&__gda__=1472067580_5e55265ed9e244c70519223f05c5d985',
	link:'https://www.facebook.com/photo.php?fbid=10151860443063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden Hells ',
	pct:4.6,
	desc:'Not too bad. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1469967_10152147735243745_1919940570_n.jpg?oh=08bb8f3d30f5e6866935c098993b2e64&oe=57E6ECA0&__gda__=1469783193_40914708d11ec3168f4229d7d7b209f2',
	link:'https://www.facebook.com/photo.php?fbid=10152147735243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden gentlemans wit ',
	pct:4.3,
	desc:'I remember nothing about this beer. Must have been a good night ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1176312_10151860443023745_856797078_n.jpg?oh=c4d9e5ae20e4c61f035ef76ad2ea2048&oe=57BB269D&__gda__=1471178641_34dd0fce10bc7d3d211ff4b3f000f8ee',
	link:'https://www.facebook.com/photo.php?fbid=10151860443023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point pale ale ',
	pct:5.4,
	desc:'Pretty mundane ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185998_10151860443158745_158593717_n.jpg?oh=d0a76f1d24e62f2e73d068d865f8cd34&oe=57BB11E9&__gda__=1471839797_db13ce0238a74af24065d57d0633143c',
	link:'https://www.facebook.com/photo.php?fbid=10151860443158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caribbean scene',
	pct:null,
	desc:'Not worth getting a second one. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185783_10151860443868745_1132451963_n.jpg?oh=db1eb5441b48a494a526cb4b0c4ae6d3&oe=57BB9B81&__gda__=1471545272_d792a87796323a79df985e8e451fdd14',
	link:'https://www.facebook.com/photo.php?fbid=10151860443868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cusquena ',
	pct:5.0,
	desc:'Goes badly with fajitas. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/555522_10151860443808745_1012342431_n.jpg?oh=32ccbfad395374e74732e8470afb97c2&oe=57B29A91&__gda__=1471945752_fff9a38cc7a21977cdad331c823b560e',
	link:'https://www.facebook.com/photo.php?fbid=10151860443808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Utenos classic ',
	pct:5.2,
	desc:'Stock standard beer ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1175115_10151860444553745_1702342354_n.jpg?oh=7f65c34db57c6b58760b6c9070c42aac&oe=579C322F&__gda__=1470771269_dcb34c5f8c46b54c9b6fbbc429f50b37',
	link:'https://www.facebook.com/photo.php?fbid=10151860444553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk ',
	pct:4.8,
	desc:'An all round average beer. But with a cool bottle ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185029_10151860445333745_1637600629_n.jpg?oh=9f9481ed54b305f729b633a17538241d&oe=57B4B678&__gda__=1470217793_c023acd5df3f0aa83a9ae64c957d81f9',
	link:'https://www.facebook.com/photo.php?fbid=10151860445333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu ',
	pct:4.3,
	desc:'Windmills are awesome ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1235059_10151929073993745_1887796007_n.jpg?oh=7346e3eadfb2e19e633c29e783416d15&oe=57BB4DE4&__gda__=1472026545_025f74d9f1c9cf48707c5cb96bcce72d',
	link:'https://www.facebook.com/photo.php?fbid=10151929073993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Baltika 7 ',
	pct:5.5,
	desc:'Really hard to drink ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/65647_10151694536248745_526286442_n.jpg?oh=5cf2dacf2d04587384d2fecea437961c&oe=57BC3AAD&__gda__=1470264879_826c8824b93fa6fe1af8d17ee2a12727',
	link:'https://www.facebook.com/photo.php?fbid=10151694536248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk Temhoe ',
	pct:4.7,
	desc:'The purple label made me expect poison. But it\'s actually a decent beer ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1390556_10152001638343745_1466512598_n.jpg?oh=8187f589faed7af941b0e7acb8095f5a&oe=579CADE6&__gda__=1470389238_c9c2b7d6cda348ae990af2dec6c1bc74',
	link:'https://www.facebook.com/photo.php?fbid=10152001638343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'злашен даб ',
	pct:4.5,
	desc:'An interesting flavour, but not one I really like ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/9699_10151602279038745_1469910721_n.jpg?oh=58750dee2b765cf754d5ea817aa850fd&oe=579D0CC9&__gda__=1471753416_376815307816dbafc544ed782b04d3db',
	link:'https://www.facebook.com/photo.php?fbid=10151602279038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zelta premium ',
	pct:5.2,
	desc:'I like where this beer is going ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1151012_10151888666008745_854242907_n.jpg?oh=f01c2dd8b7135c9692edf80bd1ddb552&oe=57B058D1&__gda__=1471133033_b40f6da007b589d7fbf1f8cbf60341f2',
	link:'https://www.facebook.com/photo.php?fbid=10151888666008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cesu premium ',
	pct:5.2,
	desc:'A bit wrong ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1174664_10151888665988745_1905015784_n.jpg?oh=3933bab4dad4a11b318f90abc5330081&oe=57A50A02&__gda__=1469931112_f368c8f12c531b67443d066cf486ad9c',
	link:'https://www.facebook.com/photo.php?fbid=10151888665988745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams southwold innovation ',
	pct:6.7,
	desc:'A nice pale but just a bit of wrongness ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1238809_10151888666788745_1212313484_n.jpg?oh=3bed8ce9eba33a4a4429f40cca9cad38&oe=57BC2773&__gda__=1471500106_05435d4fd0a97b472bdd61846c4778f2',
	link:'https://www.facebook.com/photo.php?fbid=10151888666788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Czech Norris ',
	pct:6.7,
	desc:'Not the roundhouse kick of awesome I expected ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1176212_10151888667313745_1242801185_n.jpg?oh=08b1d976bc46f14c3cfcbfc03ae664ec&oe=57BDFA6A&__gda__=1471580077_37483661f7cd518b88c61fc7b9c7855a',
	link:'https://www.facebook.com/photo.php?fbid=10151888667313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'F.X. Buckley ',
	pct:3.8,
	desc:'Ges ugly really quick ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1174601_10151888668333745_2024277149_n.jpg?oh=ca19ef159b9a8d736434dcdb68735b8f&oe=57BAD94D&__gda__=1471184664_f68901036777890ee5d046b5f554ccbe',
	link:'https://www.facebook.com/photo.php?fbid=10151888668333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris pilzens ',
	pct:4.2,
	desc:'Lacks any real flavour ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/1238101_10151888670483745_714083820_n.jpg?oh=4592d6de9f10a51cf8400d8cff3b79ca&oe=57A4494A',
	link:'https://www.facebook.com/photo.php?fbid=10151888670483745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Butauty ',
	pct:5.5,
	desc:'Malty crapness. Why make such a big bottle for a crap beer ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1185491_10151888671543745_1781451969_n.jpg?oh=063ef3a0a3947fd8d8fafe953aec0459&oe=57A18D66&__gda__=1470570614_d39a555df5c7ac6169e0d65c105e2389',
	link:'https://www.facebook.com/photo.php?fbid=10151888671543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brakspear Oxford gold ',
	pct:4.6,
	desc:'Did not deliver what the label promised ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/76895_10151929068333745_1039559147_n.jpg?oh=c3a77aaf7055ba24f688f65697213906&oe=57B3D657&__gda__=1470682316_07e8e3cc341630034b95ee3abfd783cb',
	link:'https://www.facebook.com/photo.php?fbid=10151929068333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Betty Stogs ',
	pct:4.0,
	desc:'Tastes pretty much as you would expect from the name ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13890_10151929069588745_726766227_n.jpg?oh=a23ecd286f8b11db1d2b0355add5f0fc&oe=57B052F6&__gda__=1471739635_91e24b489e68509caaf29ee48e7ca71f',
	link:'https://www.facebook.com/photo.php?fbid=10151929069588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Golden Ale ',
	pct:4.7,
	desc:'One of those brewing companies that thinks traditional means better ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/37805_10151929069633745_1476415530_n.jpg?oh=ec4a76e01bf7208d788d8636ffa2353f&oe=57A3DB95&__gda__=1471072168_0049b54a315a1a980326e03969651350',
	link:'https://www.facebook.com/photo.php?fbid=10151929069633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Best Bitter ',
	pct:3.7,
	desc:'I\'ll never understand what people see in a bitter ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1233387_10151929070703745_1019382535_n.jpg?oh=917ec2b373ef115f92a23fbd69c551a3&oe=579B61BB&__gda__=1471857282_8603fa6a5c83585c21fd3a6dd3fca195',
	link:'https://www.facebook.com/photo.php?fbid=10151929070703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Mild ',
	pct:3.7,
	desc:'This company seems incapable of making a good beer ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185966_10151929070968745_2126426266_n.jpg?oh=aa86647814e1c30ac8c1e778cc8033d9&oe=57E7D01D&__gda__=1470119204_89cfbb29a2199deb1f4552a03758dbc4',
	link:'https://www.facebook.com/photo.php?fbid=10151929070968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s ruby red ale ',
	pct:4.3,
	desc:'Probably the best of a bad bunch ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1233970_10151929073588745_1740349447_n.jpg?oh=63e3fe78c5caa2c07b140d60dd098a66&oe=57A68AE8&__gda__=1470287948_9f486ab63d4d9890faf0c0018b0cb543',
	link:'https://www.facebook.com/photo.php?fbid=10151929073588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ekstra ',
	pct:5.2,
	desc:'So much better than expected considering it\'s an extra ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1146736_10151860444768745_544406358_n.jpg?oh=047caf44b5335213a932739adc70975b&oe=57AAA8FF&__gda__=1470449223_7c39de7e332868e63be647f93139e3c3',
	link:'https://www.facebook.com/photo.php?fbid=10151860444768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ',
	pct:4.6,
	desc:'Finally found some Lithuanian beer. A very smooth lager. ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1185772_10151860443958745_1792378907_n.jpg?oh=6c554c903349d0eb06eea5e79249fc60&oe=57AAC058&__gda__=1469837618_e1d26b58efb3ba5514619520f6eec8cc',
	link:'https://www.facebook.com/photo.php?fbid=10151860443958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltijos ',
	pct:5.8,
	desc:'A little bit too bitter for my taste ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1208565_10151929069708745_1120619541_n.jpg?oh=e5da24fcf9155451fb670136562e426b&oe=57AC46E9&__gda__=1471811459_9d773542ab1a07449a8997b6b6af0a69',
	link:'https://www.facebook.com/photo.php?fbid=10151929069708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltas white ',
	pct:5.0,
	desc:'Can\'t get over the bite of wheat beers ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/563535_10151929074098745_379750960_n.jpg?oh=cb072f8b507f53d7b8bf1b6582a9b0de&oe=57ABA682&__gda__=1470505106_6ff425809a82b927e377392a0dbf69b7',
	link:'https://www.facebook.com/photo.php?fbid=10151929074098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys old port ale ',
	pct:5.6,
	desc:'A lot smoother than expected ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1234836_10152293116538745_626754395_n.jpg?oh=0891128e4087e081a3c77bdc65894962&oe=57BB9142&__gda__=1470086046_fd820425d4bbb486359c158ab50fb4c4',
	link:'https://www.facebook.com/photo.php?fbid=10152293116538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Luksus ',
	pct:5.2,
	desc:'Yep, it’s a lager ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1484218_10152147730358745_1572080029_n.jpg?oh=5389f762e94bbcf23426f57ced284e7d&oe=57B04347&__gda__=1469888813_47cec540e0f9749a60256e65d80e7d92',
	link:'https://www.facebook.com/photo.php?fbid=10152147730358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kanapinis ',
	pct:5.3,
	desc:'Malty goodness in a great bottle ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1186120_10151860445063745_1601572346_n.jpg?oh=7548582da1dee0c7bf0c0a4aac17d9da&oe=57A7864E&__gda__=1470683675_5e6b60367c8ac5de457bc9765606e332',
	link:'https://www.facebook.com/photo.php?fbid=10151860445063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keptinis ',
	pct:5.7,
	desc:'Not at all excited by this. Not even a semi ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1240201_10151929073793745_2035177594_n.jpg?oh=42e8f98c29d2a09d7338cc05132bea98&oe=57AE515A&__gda__=1471936015_e91385f8dfb19da75543fdf740b87607',
	link:'https://www.facebook.com/photo.php?fbid=10151929073793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aladaris Gaisais ',
	pct:5.0,
	desc:'Another quality baltic beer ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/603023_10152001619908745_1091913425_n.jpg?oh=4b50ed5e79a825b5cae93f1167f14d99&oe=57AB8202&__gda__=1469734878_7a70ba4eac71336fddaeaac0a8fc6428',
	link:'https://www.facebook.com/photo.php?fbid=10152001619908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Porteris ',
	pct:6.8,
	desc:'Not a bad porter ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1891209_10152293116448745_1394991978_n.jpg?oh=241689c5c2ed31034aab2e4352a7f816&oe=579DE1FD&__gda__=1470761225_7e9ac6c7c77dfa86ab1aa136622751e8',
	link:'https://www.facebook.com/photo.php?fbid=10152293116448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas engleman ',
	pct:5.2,
	desc:'Unimpressive ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1176307_10151888665863745_1280335301_n.jpg?oh=db4c5348328d6bdff3b86e1fbb8cc7ab&oe=57E7C5F2&__gda__=1471770338_2db7aa97a7dce44fcd0c39cc820941bd',
	link:'https://www.facebook.com/photo.php?fbid=10151888665863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Bravoro ',
	pct:5.2,
	desc:'A little bit wrong ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1236122_10151929070963745_949716381_n.jpg?oh=66ef4e2573076cfe27b77f8349d53297&oe=57B8CBFD&__gda__=1472041197_5838408452294d9cf0ba055b64c8cb01',
	link:'https://www.facebook.com/photo.php?fbid=10151929070963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Jubiliejinis 160 ',
	pct:5.3,
	desc:'Nice and smooth, and in a cool bottle ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1385338_10152001620008745_462276383_n.jpg?oh=dd47e770448ae8e89b027586b8f84eac&oe=57A896EC&__gda__=1471315504_632f9c5ad62ac048264159cd2070d77d',
	link:'https://www.facebook.com/photo.php?fbid=10152001620008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deviant dales pale ale ',
	pct:8,
	desc:'Light for the strength ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/526556_10151929072623745_428217529_n.jpg?oh=fd3d4c17eaadc6254b392ee46c8517d9&oe=57B3F418&__gda__=1470619097_62f55da143969f1424f34235e711ca84',
	link:'https://www.facebook.com/photo.php?fbid=10151929072623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mama\'s Little Yella Pils ',
	pct:5.3,
	desc:'An easy drinking pils ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1187248_10151929072773745_1085795541_n.jpg?oh=819173e1d1714abb0e6a15bc69afdf28&oe=57BD14D7&__gda__=1471389678_ff5f7e82dde57a658126a7430766d2ec',
	link:'https://www.facebook.com/photo.php?fbid=10151929072773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'McEwans Export ',
	pct:4.5,
	desc:'Not as rubbish as the the can looks ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1384073_10152001619653745_1344996131_n.jpg?oh=5005a6f11077d92873c735dae192c51b&oe=57AE4238&__gda__=1470411777_fabc4564bd0c1069db6e80995548d055',
	link:'https://www.facebook.com/photo.php?fbid=10152001619653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cave creek chill beer ',
	pct:4.2,
	desc:'A nice balance of chilli and beer. And yes that is a whole chilli in the bottle ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1378394_10152001620853745_543682046_n.jpg?oh=9beba9a914e58e447f3f6b7769db9163&oe=57E793D7&__gda__=1472024460_7761aadece3f12fa5a75ab98a79aa380',
	link:'https://www.facebook.com/photo.php?fbid=10152001620853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan dubbel ',
	pct:6.4,
	desc:'Strong chocolate taste but takes a while to get used to ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/563194_10152001621188745_696002352_n.jpg?oh=5e6c40713892c0afbc18649b8879dca2&oe=57AED24A&__gda__=1471612506_81ebd9a6c7cf2765f09cb1ff3fb76bf4',
	link:'https://www.facebook.com/photo.php?fbid=10152001621188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan strong golden belgian ale ',
	pct:8.0,
	desc:'A bit harsh for what I would call a golden ale. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1497799_10152147732653745_1203656587_n.jpg?oh=bdd1169616eb257debf2db1376d3bb39&oe=57AF2441&__gda__=1470686095_570728720b31450e34cc47674ebf12d3',
	link:'https://www.facebook.com/photo.php?fbid=10152147732653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan Quad ',
	pct:11.2,
	desc:'One of the strangest beers I’ve tasted. Like trying to cross a lambic with a stout.',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1486770_10152147730063745_1162438061_n.jpg?oh=5e110257641b75eee51e94f80ac2dc4f&oe=57B0DBFD&__gda__=1470960068_71b3e405a80e38986aa42f18caedc0a3',
	link:'https://www.facebook.com/photo.php?fbid=10152147730063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan single ',
	pct:4.8,
	desc:'Nice label, shit beer ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1376370_10152001622893745_406801645_n.jpg?oh=d2d6f9600c210f47a75b7739b8ebb42f&oe=57AE5774&__gda__=1471985661_528e2c0f69b3a6ab3169b3a38fb74de0',
	link:'https://www.facebook.com/photo.php?fbid=10152001622893745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The norseman ',
	pct:5.0,
	desc:'An average ale ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1379331_10152001623128745_1319626583_n.jpg?oh=d83c99213cc984d55f8e6a33830c9429&oe=57A94928&__gda__=1472148241_dd8ac39f0ea7c458f30955ffb89a0558',
	link:'https://www.facebook.com/photo.php?fbid=10152001623128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trident ',
	pct:5.0,
	desc:'Like a red Guinness gone wrong ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1381987_10152001622888745_1624478487_n.jpg?oh=1836219b583e5f4bf2ad4c466b2582f2&oe=579A8CBF&__gda__=1469826031_bab83c7c07397d8b788de29809ab4516',
	link:'https://www.facebook.com/photo.php?fbid=10152001622888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis Grand Select ',
	pct:5.4,
	desc:'A bit of a hobo taste, but not terrible ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1381183_10152001624088745_284273692_n.jpg?oh=c8dfb6cb5861fd4c1793f3b67b10a8aa&oe=57A4B87F&__gda__=1471472547_f63ab41dcda1052cc0e93cafba34ba4b',
	link:'https://www.facebook.com/photo.php?fbid=10152001624088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batemans Combined Harvest ',
	pct:4.7,
	desc:'I\'m amazed that this doesn\'t taste like an absolute mess ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1383443_10152001624583745_873432820_n.jpg?oh=30a0e4dc3b523829d01ec9293cbfa6d7&oe=579AA852&__gda__=1474794408_dde5b89cb7b42090170333928f74d2aa',
	link:'https://www.facebook.com/photo.php?fbid=10152001624583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Dumaku',
	pct:null,
	desc:'Pretty nice ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1381516_10152001638348745_1868079701_n.jpg?oh=531e98a93a010dc7a9d47e07fe913fc1&oe=57A9C7AC&__gda__=1469827526_fd90870b78833f650485dedd9d8b4957',
	link:'https://www.facebook.com/photo.php?fbid=10152001638348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Post road pumpkin ale ',
	pct:5.0,
	desc:'Tastes like christmas ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1512830_10152147731138745_971828677_n.jpg?oh=2ba32db36f32c72ead104c1e7f044ec3&oe=579AF30A&__gda__=1471544533_34537bdee545585ccbfa570fcc014850',
	link:'https://www.facebook.com/photo.php?fbid=10152147731138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burning Sky Aurora ',
	pct:5.6,
	desc:'Not too bitter with a mild hoppy taste ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1476223_10152147732298745_333484722_n.jpg?oh=9ddd5c1db6ab800ab497c44ee81ff24e&oe=579AAC07&__gda__=1470085637_217059822ed0830bddfb2536224c639c',
	link:'https://www.facebook.com/photo.php?fbid=10152147732298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewmeister Armageddon ',
	pct:65,
	desc:'Was supposedly the strongest beer in the world but that is a complete lie. This beer is max 20% abv. I\'ve never been lied too this badly in my life. ',
	score:0,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1521885_10152147732818745_1092668016_n.jpg?oh=ae680391e887d0ae99547f418b6d58a8&oe=57A5A9C3&__gda__=1474837929_652f808b3dad3e20fc3ab0a7243aa94b',
	link:'https://www.facebook.com/photo.php?fbid=10152147732818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Blonde ',
	pct:4.8,
	desc:'Kind of tasty lager ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/579360_10152147733223745_1201965133_n.jpg?oh=225dd48f134bda4d3d332bed26bd46dc&oe=57ACD314&__gda__=1474763800_c23ad1fd7a816fe96c2810e8ddbf396a',
	link:'https://www.facebook.com/photo.php?fbid=10152147733223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harvey\'s Kiss ',
	pct:4.8,
	desc:'Kind of warming. Better than the label suggests ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1482844_10152147733228745_1616012407_n.jpg?oh=749c9098d835fb46fc2d89edf657d19f&oe=57A1A18B&__gda__=1470776756_b7ff4c543a62b00938a1bb510cef664f',
	link:'https://www.facebook.com/photo.php?fbid=10152147733228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arany Aszok',
	pct:null,
	desc:'Easy drinking lager ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1458701_10152147733363745_127688331_n.jpg?oh=0da1cb978c1ab8e9acb2cb5ea6bd0bb2&oe=579E773A&__gda__=1469873843_00aba16090354abf38577c4f8a157336',
	link:'https://www.facebook.com/photo.php?fbid=10152147733363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Borsodi 6/10',
	pct:null,
	desc:'Not much flavour at all ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1513298_10152147733513745_1123080804_n.jpg?oh=7dabac0e391b1da17a9574ee58491dfc&oe=579FD9D7&__gda__=1470829183_d80b79138972e23a96695802d156e5f2',
	link:'https://www.facebook.com/photo.php?fbid=10152147733513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dreher',
	pct:null,
	desc:'Hungarian standard ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1479455_10152147733863745_266822035_n.jpg?oh=2e6cc41340d1ea1321914f6899d0ee61&oe=57A56E68&__gda__=1470540920_34bf78202cade6a3c9be8d383a269a84',
	link:'https://www.facebook.com/photo.php?fbid=10152147733863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zlaty bazant',
	pct:null,
	desc:'A tasteless Slovakian lager ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1507155_10152147733883745_1859906756_n.jpg?oh=f63f37085408154cef527d8536742c7b&oe=57ADCCD8&__gda__=1471079304_33a7ca63acd8c5a38845e084939599f6',
	link:'https://www.facebook.com/photo.php?fbid=10152147733883745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Soproni',
	pct:null,
	desc:'Lager. Nothing more to say. ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1513718_10152147734013745_2012942673_n.jpg?oh=463a0d4a5ac7419f5b468fffc0a77d00&oe=57A3A81A&__gda__=1471281531_1dcb522ce7ed1a02c17f1ace9478d2f7',
	link:'https://www.facebook.com/photo.php?fbid=10152147734013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel smieth organic lager ',
	pct:5.0,
	desc:'Nothing special ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1526342_10152147734658745_1378507161_n.jpg?oh=3a60725faaa39e7ddfa73ade886eda96&oe=57B19EBD&__gda__=1470573015_fe42416e042141c1b5ae055091d9ed0a',
	link:'https://www.facebook.com/photo.php?fbid=10152147734658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nicholson\'s pale ale ',
	pct:4.0,
	desc:'A slightly tangly pale ale. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1513323_10152147734918745_1271199559_n.jpg?oh=de1446e9748f8b20789a18167175596c&oe=57B44065&__gda__=1470907996_e11dff1b9ed042c4f74467a570c24cdd',
	link:'https://www.facebook.com/photo.php?fbid=10152147734918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meteor',
	pct:null,
	desc:'Normal London lager ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1012810_10152147735373745_584437479_n.jpg?oh=77dc3f4c288ff1a600faa05aa945e834&oe=57AA9C3F&__gda__=1470916805_9859458d1ab9012113756a50a74cef3f',
	link:'https://www.facebook.com/photo.php?fbid=10152147735373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Best ',
	pct:4.0,
	desc:'Plain lager. Easy drinking ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1520804_10152147735848745_1884810076_n.jpg?oh=65a0fa04d531a3dac1c358543954c0cd&oe=57AAE4F4&__gda__=1471726795_a2af67f94549f0ce02a61baf8fac9e3e',
	link:'https://www.facebook.com/photo.php?fbid=10152147735848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknot Queboid ',
	pct:8.0,
	desc:'A nice strong flavour ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1520670_10152147736383745_1604295852_n.jpg?oh=cfa2fda9c06caec48e0b3cc8063ec37b&oe=57AED917&__gda__=1470809469_eba9e44db51a476b80b9fab4dfa5266f',
	link:'https://www.facebook.com/photo.php?fbid=10152147736383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harveys Georgian Dragon ',
	pct:4.7,
	desc:'A mild ruby ale with a slightly sweet taste ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1531869_10152147736428745_246396192_n.jpg?oh=c95d30dd27ddb8ee27c7e6b8a4b59d7a&oe=57AE34D8&__gda__=1472010244_bbab80fcf2d3f504041f00c2f7d774c9',
	link:'https://www.facebook.com/photo.php?fbid=10152147736428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monty\'s ding dong ',
	pct:4.4,
	desc:'Light and festive and drinkable ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1911822_10152280800298745_1797219050_n.jpg?oh=45c58a669c0ac834f16b74c743c50bd6&oe=57A29B5D&__gda__=1470409430_c072783d016aed215b9ad5771c89d17a',
	link:'https://www.facebook.com/photo.php?fbid=10152280800298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Hop Studio Noel ',
	pct:4.5,
	desc:'Some very strange hoppy flavour ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1618610_10152280800288745_1862858046_n.jpg?oh=84428e49236013260c5700b230cdafc2&oe=57BB6645&__gda__=1469984303_be5791ca609d23405d1bfeeeba1988a7',
	link:'https://www.facebook.com/photo.php?fbid=10152280800288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Woodlands Christmas special ',
	pct:4.8,
	desc:'Very good for a British ale ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1623661_10152293086658745_850862784_n.jpg?oh=a74a01df635961360d3c34d9b97c7f60&oe=57BD6A77&__gda__=1471888940_a4ec0f80868a1bce764637a5a07e17b7',
	link:'https://www.facebook.com/photo.php?fbid=10152293086658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Uncle Scrooge ',
	pct:4.5,
	desc:'No one was being cheap when making this one ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1966869_10152293086653745_1230920015_n.jpg?oh=ae56502930d89ac6db95a4c921dc1725&oe=57BB5928&__gda__=1470313016_641f03ab2731eea5bc17b0138d4463e9',
	link:'https://www.facebook.com/photo.php?fbid=10152293086653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheddar ales festive totty ',
	pct:4.7,
	desc:'Not sure how totty applies in this context ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/988380_10152293086573745_484773090_n.jpg?oh=a586713e2868f1ac88b501fb101f133d&oe=57A859A3&__gda__=1471345250_f10882c5d0d7fcd7c0708c4e44e3fd49',
	link:'https://www.facebook.com/photo.php?fbid=10152293086573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknott azimuth IPA ',
	pct:5.8,
	desc:'An ok IPA ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1621734_10152293086743745_608289512_n.jpg?oh=1d1b5989c7ff4b5db5cc37d58dbe3897&oe=57AABBD1&__gda__=1471243278_20e4c4bd0a1e2c4d27e397b128d76ee3',
	link:'https://www.facebook.com/photo.php?fbid=10152293086743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog Atlantic lager ',
	pct:4.7,
	desc:'Fruity and mild ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/993032_10152293086873745_958885686_n.jpg?oh=98bd3e5b30849b8a091cd085356ac2ba&oe=57995628&__gda__=1471165205_2eab788a9f72fbda76746e578de98083',
	link:'https://www.facebook.com/photo.php?fbid=10152293086873745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog snake dog ',
	pct:7.1,
	desc:'A little harsh ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/1982179_10152293086923745_434038155_n.jpg?oh=4acde098f7a35647bdd330f8dbdf24e0&oe=57A79995&__gda__=1471506666_dc9eee6777ef421ed10b53dc875a4742',
	link:'https://www.facebook.com/photo.php?fbid=10152293086923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe Triple ',
	pct:8.5,
	desc:'Stronger and nicer than the standard ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1625649_10152280800668745_1746325328_n.jpg?oh=c88793cf6544ad424266ee03883d94d9&oe=57BD4686&__gda__=1470663729_94c048b17bd900da5433a98a2a3e9650',
	link:'https://www.facebook.com/photo.php?fbid=10152280800668745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe dark',
	pct:null,
	desc:'More of a fuller Leffe than a dark beer ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1902725_10152293087758745_569610046_n.jpg?oh=3ef4689a51498b37092937948dd20e6f&oe=57A4D661&__gda__=1471649000_6381f66c71f90a877ecb3ee317435772',
	link:'https://www.facebook.com/photo.php?fbid=10152293087758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe. ',
	pct:null,
	desc:'A strong Belgian taste. ',
	score:6,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfa1/v/l/t1.0-0/p480x480/398737_10151396305948745_940904591_n.jpg?oh=becb2f5ce9f6f3f501d58fe4340eeb6f&oe=57A65E1C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steen Brugge ',
	pct:5.0,
	desc:'Not the biggest fan of this wheat beer ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1911696_10152280800918745_1929684638_n.jpg?oh=1b044fa75d039ba79de308b25fa03c79&oe=57E74D9F&__gda__=1470044815_cc640c5f782cfe86b08d82377353d693',
	link:'https://www.facebook.com/photo.php?fbid=10152280800918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium Christmas ',
	pct:10.0,
	desc:'Stronger than the originals and a little less unique ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1623626_10152280800643745_1481530083_n.jpg?oh=e5e7ec2169a3109147613c847b11fbd3&oe=579F6E3C&__gda__=1469952439_799d14cd70d563532c1cad19a9d7b9a2',
	link:'https://www.facebook.com/photo.php?fbid=10152280800643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium nocturnum ',
	pct:8.5,
	desc:'Not as nice as the tremens ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1901197_10152280800558745_1902963784_n.jpg?oh=1df3c0a343afc545f4d521ee80960762&oe=57B089B5&__gda__=1470831077_b4d06aba24060824a80b3c0e31331d15',
	link:'https://www.facebook.com/photo.php?fbid=10152280800558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Passchendaele ',
	pct:5.1,
	desc:'A lager with a Belgian ale flavour. Very strange. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/13244_10152293087118745_389678283_n.jpg?oh=6262f4b128e1539503e43a60043a9242&oe=57BB9F10&__gda__=1471479105_4cb508c1d29564185c2102f43bb480bb',
	link:'https://www.facebook.com/photo.php?fbid=10152293087118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Qantelaar ',
	pct:9.0,
	desc:'Very flavoursome but not too sweet. Not worth the €18 I paid though ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1924797_10152293087133745_1742289591_n.jpg?oh=90334bb79e8c6f29e6c7e02bac2454b8&oe=57B66CCC&__gda__=1471095367_cb9d3bae3e09b43f21f43610cd863233',
	link:'https://www.facebook.com/photo.php?fbid=10152293087133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cookie Beer ',
	pct:8.0,
	desc:'Not as much cookie flavour as I was hoping ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1932219_10152280800273745_138064221_n.jpg?oh=2eb1f0e6a8459670cb2f2fd11561fd76&oe=57B17EA5&__gda__=1471630377_24a339f4314c7cde96504d88b10b9ab2',
	link:'https://www.facebook.com/photo.php?fbid=10152280800273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St bernardus ',
	pct:10,
	desc:'Takes a bit to get used to but smooth after that ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1902068_10152293087213745_1501844823_n.jpg?oh=fd1b1d8186c7dce2f29f847ce99187c7&oe=57A917B9&__gda__=1471949036_6fbbbe1efc4461674506acab896b8e2a',
	link:'https://www.facebook.com/photo.php?fbid=10152293087213745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm ',
	pct:5.4,
	desc:'A mild Belgian beer ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/988803_10152293087318745_73934001_n.jpg?oh=e9a1304f1a42797e45fe6c975730992f&oe=57B94BEB&__gda__=1472098147_473a179e8173ad3faf5d16e51b46d451',
	link:'https://www.facebook.com/photo.php?fbid=10152293087318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grimbergen blonde',
	pct:null,
	desc:'An ok Trappist ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1517454_10152293087538745_1520731799_n.jpg?oh=a01da85c3762fd94fadf9b15d59455e7&oe=57E6EAC6&__gda__=1471368305_b10f59dfaa99d9a8c92a5840ada39fe6',
	link:'https://www.facebook.com/photo.php?fbid=10152293087538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chouffe ',
	pct:8.0,
	desc:'Well rounded ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1911857_10152293087523745_1264067765_n.jpg?oh=a6ff93a1fa13c1090e483aaa03438323&oe=57BD07C8&__gda__=1471952707_5538c13b3f9517f5099c622492d4bc61',
	link:'https://www.facebook.com/photo.php?fbid=10152293087523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brugge tripel',
	pct:null,
	desc:'Like a lager that warms you up ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1662198_10152293087613745_1851257445_n.jpg?oh=1836908c89c64c05414eea888769b5c6&oe=57BD17BB&__gda__=1471892715_a898c92770c5f01c59084bea2927a513',
	link:'https://www.facebook.com/photo.php?fbid=10152293087613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corsendonk ',
	pct:7.5,
	desc:'Not as easy to drink as I was hoping ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1534405_10152147734558745_724921108_n.jpg?oh=383e848c6a8b04f6e2df475d63d7cecd&oe=57A932D5&__gda__=1471183469_800c571f7182bf7c4feed0c14013e2f1',
	link:'https://www.facebook.com/photo.php?fbid=10152147734558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fonteinen oude geuze ',
	pct:6.0,
	desc:'Not a particularly nice lambic ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1382815_10152001621173745_208469765_n.jpg?oh=42ef4035eeff4e611cdfec03ccf14d19&oe=57AFD425&__gda__=1470132473_a1ef906fde083b56c1446ad5a94bc2c1',
	link:'https://www.facebook.com/photo.php?fbid=10152001621173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vedett. ',
	pct:null,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/486956_10151296240913745_1196071675_n.jpg?oh=320b6d2dc7ef2f056b20857e4475996a&oe=57A7CE62&__gda__=1469908564_f8f3539ea2eca7c43e4d7418f902c3de',
	link:'https://www.facebook.com/photo.php?fbid=10151296240913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carolus classic ',
	pct:8.5,
	desc:'Dark but not heavy ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1782108_10152293087803745_1558065696_n.jpg?oh=c2d1be83e36e2d9da8d48083e1c2c5f6&oe=579E2385&__gda__=1471492622_43f178524082bf26718bdfe6cc16cedd',
	link:'https://www.facebook.com/photo.php?fbid=10152293087803745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orval ',
	pct:6.2,
	desc:'A bit too harsh ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/603000_10151798800068745_508626500_n.jpg?oh=6c73071b88cddc3498571f5b2bb438ac&oe=57B7DA03&__gda__=1472015443_28acd7486b1a52b2d1ab081742cabd0f',
	link:'https://www.facebook.com/photo.php?fbid=10151798800068745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pauwel Kwak ',
	pct:8,
	desc:'A mild Belgian beer. +1 for the sweet glass ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1521828_10152147734533745_969043237_n.jpg?oh=045df6f32aa50dc592cc9cfef4bb5428&oe=57A9149E&__gda__=1474801832_8235e7e3600aca802edebaf255a46fd6',
	link:'https://www.facebook.com/photo.php?fbid=10152147734533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duvel. ',
	pct:8.5,
	desc:'Not as good as when you buy it in Belgium. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/6394_10151428524928745_265167117_n.jpg?oh=ad20effe6f84646769b8ecb4b20b29eb&oe=57E6DA7A&__gda__=1474798885_156d0742149b80f558fba74448d368f3',
	link:'https://www.facebook.com/photo.php?fbid=10151428524928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Triple karmeliet ',
	pct:8.4,
	desc:'I choose this above Delerium 1',
	score:0,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1654211_10152293087868745_1642505899_n.jpg?oh=71957cd3e944a528cc78e7f608b4ddc2&oe=579CA623&__gda__=1474771558_f476271c530fdc56d1df9aa649134e86',
	link:'https://www.facebook.com/photo.php?fbid=10152293087868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Co-operative Czech lager ',
	pct:5.0,
	desc:'Piss water ',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1976956_10152293116608745_971300903_n.jpg?oh=62c2ab44e083681c85ef07e6bca75e21&oe=57AD4175&__gda__=1471105220_8f333b14dc40fdc2ef09583b6e4f6ebb',
	link:'https://www.facebook.com/photo.php?fbid=10152293116608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fullers Bengal lancer ',
	pct:5.3,
	desc:'A mild IPA. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1902717_10152293116728745_604384062_n.jpg?oh=28cbdbb4cf332bdd4c2dda3f6a648b9e&oe=57A37265&__gda__=1470918974_aa778d2db95d5fad5053a9bb27598a64',
	link:'https://www.facebook.com/photo.php?fbid=10152293116728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rivet lager',
	pct:null,
	desc:'Cheap Aldi lager. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1654215_10152293132398745_1156319319_n.jpg?oh=d244e7d2fc52fc4f8bc48b29f54cbcb8&oe=579DFDD8&__gda__=1471239346_8bc1fa0107e1fd9c192c38e9e77b5fdc',
	link:'https://www.facebook.com/photo.php?fbid=10152293132398745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Itchy green pants cloudy ale',
	pct:null,
	desc:'A citrusy ale ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/14516_10152293132388745_1804956545_n.jpg?oh=5c007292c1a74052ede5372fa11f23f6&oe=57A95FB6&__gda__=1470412518_a6e374a504a5ab2c507ac617cbdceddf',
	link:'https://www.facebook.com/photo.php?fbid=10152293132388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beez neez ',
	pct:4.7,
	desc:'Nicer than other wheat beers ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1689028_10152293132393745_2076387915_n.jpg?oh=6e0eca9a8f67f69ec8748243ff3eeb2e&oe=57A1F74F&__gda__=1469780261_8ef839e4a528aabe897c3a7c3a5f92c3',
	link:'https://www.facebook.com/photo.php?fbid=10152293132393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big helga ',
	pct:4.7,
	desc:'Not at all like a Munich beer ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1911736_10152293132828745_389724707_n.jpg?oh=63769b9be9ea74f9056c7cdefafd231e&oe=57A7D605&__gda__=1471539819_9a6a53b0a8b50eed50da89ea7db70f21',
	link:'https://www.facebook.com/photo.php?fbid=10152293132828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures original pilsner',
	pct:null,
	desc:'Doesn\'t have the flavour of their other brews ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1959613_10152293132738745_13261275_n.jpg?oh=1c887f2853f26f1875842f894bc9ef98&oe=57BEEBA0&__gda__=1470747209_eb56ced79c9bb3954923fc1eff55bb83',
	link:'https://www.facebook.com/photo.php?fbid=10152293132738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s real ale',
	pct:null,
	desc:'Strong ale flavour in a lager ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1797480_10152293132838745_183692179_n.jpg?oh=d9744649bd497a105a134cd669a73f08&oe=57BB81E7&__gda__=1469730890_b25f07221c5d8d650aa65f2d167e7aca',
	link:'https://www.facebook.com/photo.php?fbid=10152293132838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone and wood pacific ale',
	pct:null,
	desc:'Very nice ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1947926_10152293132973745_485396127_n.jpg?oh=946f9034d2d1bb95526b084eb9692caf&oe=57A65721&__gda__=1469742811_cb23c221cc1fb3714315c2649c254d8e',
	link:'https://www.facebook.com/photo.php?fbid=10152293132973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s angry man ',
	pct:5.0,
	desc:'Pretty good ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1975034_10152293133088745_313669023_n.jpg?oh=7904fbf7fa525d0181181b611c4451e9&oe=57B7E4B4&__gda__=1471405829_f5f9a388dc5a84cd0567929d95f8ac75',
	link:'https://www.facebook.com/photo.php?fbid=10152293133088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s whale ale ',
	pct:4.5,
	desc:'The smell seems wrong to me since it\'s a wheat beer but the flavour is ok ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1622815_10152293133083745_1090580214_n.jpg?oh=619ed89caf66080eb59fd88e94168b91&oe=57A7D850&__gda__=1471260635_97cc25a17d972f23d29abe9bd2aab64f',
	link:'https://www.facebook.com/photo.php?fbid=10152293133083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hopinator ',
	pct:7.5,
	desc:'Hoppy as promised ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/577380_10152293133158745_1128439575_n.jpg?oh=35a3284531abd5b1cca39a023e98dbaf&oe=57A4CEB5&__gda__=1470630505_7fefbd7e8dfbe96222165b7638b9cc88',
	link:'https://www.facebook.com/photo.php?fbid=10152293133158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brookvale union ginger beer',
	pct:null,
	desc:'Sweet sweet ginger ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1796708_10152293133278745_1592031312_n.jpg?oh=c006bbf9f58e15dd3bcc4034ef10a7e7&oe=57B18505&__gda__=1470998962_f7cb961e5ffafc14f8d79a511b744eae',
	link:'https://www.facebook.com/photo.php?fbid=10152293133278745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bakalar',
	pct:null,
	desc:'A mild beer ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1620416_10152293133463745_1571056383_n.jpg?oh=96e571fb3db74f56d8b9cccfb967fcbd&oe=57AABF0A&__gda__=1470814141_0ae694ecc49cf2c8f55330900b5a44eb',
	link:'https://www.facebook.com/photo.php?fbid=10152293133463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Minimum chips',
	pct:null,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1981912_10152293133693745_209766969_n.jpg?oh=46cb02c6eddbfbfa297a07603e9a955c&oe=57E726C0&__gda__=1469731502_7ca0e51944e8bdbaf04d4ffb6c071eea',
	link:'https://www.facebook.com/photo.php?fbid=10152293133693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aguila',
	pct:null,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1962592_10152293133843745_1037481465_n.jpg?oh=0661a034ef3c313e8df563766b229ddd&oe=57A8B19C&__gda__=1471595427_e0324dc8d3cc2968002684a1eff8c846',
	link:'https://www.facebook.com/photo.php?fbid=10152293133843745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The grifter pale ale',
	pct:null,
	desc:'A nice pale ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1939940_10152293133933745_1195913989_n.jpg?oh=c053839fe40591e141aacafe838bf73e&oe=57B53FF7&__gda__=1469953856_2339cdc80d6214450f17fdf43ecf3679',
	link:'https://www.facebook.com/photo.php?fbid=10152293133933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s pale ale ',
	pct:4.6,
	desc:'Not at all a pale ale, just a crappy lager. ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1234276_10152327616288745_1383768960_n.jpg?oh=f53bc9a3c37503fd795d2d0651d14302&oe=57A1C221&__gda__=1470137733_580c714d8d9bdca874d5c49a70bc0102',
	link:'https://www.facebook.com/photo.php?fbid=10152327616288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale IPA ',
	pct:5.5,
	desc:'Sweater than a normal IPA ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1601320_10152327616293745_1926213057_n.jpg?oh=56f2c4f470beb6c794b6c457f37b016d&oe=57A47EC4&__gda__=1470991987_5f6c7e8ef8df400c2ed954720cd49397',
	link:'https://www.facebook.com/photo.php?fbid=10152327616293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zamkowe ',
	pct:5.6,
	desc:'An average polish beer ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1148905_10152327616358745_1369255120_n.jpg?oh=5e0c4193dc3e6bd6b0636ec4f1b59f1a&oe=57B6DF9B&__gda__=1469775601_52ca5581032ffbfad688fb91e02bb247',
	link:'https://www.facebook.com/photo.php?fbid=10152327616358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road beechworth pale ale ',
	pct:4.8,
	desc:'a nicely hopped pale ale ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1920508_10152327616563745_674556830_n.jpg?oh=43f62adaabd3e7f4c2f8cb59d3e3d7c2&oe=579EB4C8&__gda__=1471762482_eb2378f917961dd21aaff84ad538550c',
	link:'https://www.facebook.com/photo.php?fbid=10152327616563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lucky ',
	pct:4.8,
	desc:'A little bit metallic ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1240436_10152327616598745_898539470_n.jpg?oh=cfca6c438a4b3a0c782cacec55dbe5cf&oe=57B00AE7&__gda__=1471140067_35f1ac0e43870cfe5e6dd56593a398db',
	link:'https://www.facebook.com/photo.php?fbid=10152327616598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray’s rudeboy ',
	pct:4.8,
	desc:'Not quite sure what this beer is going for ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1506399_10152327616573745_36221798_n.jpg?oh=7894e164cec5ca73717e8953309796ce&oe=57A5DFB5&__gda__=1470420734_d9293fac844b57bd5265536f573758cb',
	link:'https://www.facebook.com/photo.php?fbid=10152327616573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viking ',
	pct:4.4,
	desc:'An ok pilsner ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1948233_10152327616743745_932399934_n.jpg?oh=d848457f1483e940b08828de06db19e9&oe=57AB0D88&__gda__=1471140722_e1d00f7f6d8d03ac349ae93c73a3e9cc',
	link:'https://www.facebook.com/photo.php?fbid=10152327616743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines stout ',
	pct:5.1,
	desc:'A mild easy drinking stout ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1503434_10152327617153745_1770406360_n.jpg?oh=6d4014bf3a281f5df6a908a4adb8d4d9&oe=57AA4883&__gda__=1470639292_6ab2dba88f57c110967bc2d74a08b642',
	link:'https://www.facebook.com/photo.php?fbid=10152327617153745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tui ',
	pct:4.0,
	desc:'A cheap NZ lager without much flavour ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/971710_10152327616993745_1470932463_n.jpg?oh=a530a4844f980c10b262744ca728f874&oe=57B66349&__gda__=1471950627_34a61c8b1683865f4796262d71023424',
	link:'https://www.facebook.com/photo.php?fbid=10152327616993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruby Tuesday ',
	pct:4.7,
	desc:'A nice well balanced amber ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10003998_10152327617233745_190591734_n.jpg?oh=70aebb5cccce180e501805258cb9dcf4&oe=57A357AC&__gda__=1471273354_940687e5e91cea9f3676deaec669b117',
	link:'https://www.facebook.com/photo.php?fbid=10152327617233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little ripper ',
	pct:4.7,
	desc:'A slightly zesty lager ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1958010_10152327617388745_1928464789_n.jpg?oh=ec71240fdc739ded7359d61720677bba&oe=57A36498&__gda__=1471667193_34ca7778c8a00460556877afed5ca063',
	link:'https://www.facebook.com/photo.php?fbid=10152327617388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton mid ',
	pct:3.5,
	desc:'Not quite as nice as a draught and with less alcohol ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1509668_10152327617473745_370150087_n.jpg?oh=16643ccbaeafde7f7ac642bd2b492ee0&oe=579D4C3D&__gda__=1470360889_6a55f2fed76f28d43ccc401ccb2597ed',
	link:'https://www.facebook.com/photo.php?fbid=10152327617473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord nelson Anileation ',
	pct:5.4,
	desc:'A beer crossed with a coffee ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10003507_10152327617578745_898249905_n.jpg?oh=446542bdcd21ad6771664ee3d728bf31&oe=57BCCF50&__gda__=1471049024_e2c1c990786a3a6e8eb958ce29ead7d2',
	link:'https://www.facebook.com/photo.php?fbid=10152327617578745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Hop Thief',
	pct:null,
	desc:'Well hopped ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/1898087_10152327617588745_1756511326_n.jpg?oh=5adaf6e4187f9597275e7c3dc91f344a&oe=579C0FEB&__gda__=1470383821_d955aef0751ff3e3106e77a3b99a671c',
	link:'https://www.facebook.com/photo.php?fbid=10152327617588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire The Constable',
	pct:null,
	desc:'Like a lovely lightly hopped IPA ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1239035_10152327617748745_242091326_n.jpg?oh=11bc2be1c30a965a287d3e43c284d94f&oe=57B1FDB0&__gda__=1471023282_c1ca915d67565495f7bfe922bc0ea614',
	link:'https://www.facebook.com/photo.php?fbid=10152327617748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Australian brewery pale ale ',
	pct:4.8,
	desc:'A slightly bitter pale ale ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/10341507_10152425240228745_8265904163887562785_n.jpg?oh=86e56aee2a130215ea23f93b17fdf6bc&oe=57A60E3F&__gda__=1474821719_dc9b0ad38984d03d96f149f0ddd0372f',
	link:'https://www.facebook.com/photo.php?fbid=10152425240228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Supa fly rye IPA ',
	pct:5.8,
	desc:'A mild and interesting IPA ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1506594_10152425240263745_7813835679026139769_n.jpg?oh=88af9748645de55c63439b14e9149bd4&oe=579A2873&__gda__=1470097878_51c32a6d56caf5f97b9845b7c59eb4ca',
	link:'https://www.facebook.com/photo.php?fbid=10152425240263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holland import ',
	pct:4.8,
	desc:'A cheap lager ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10154146_10152425240233745_4967152943053850733_n.jpg?oh=046e9ae92b9d730ac80d665fc4cfa581&oe=57A2A760&__gda__=1471377055_c1bac23934c413f2d1fcdf6891ea7d83',
	link:'https://www.facebook.com/photo.php?fbid=10152425240233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh brewing Co 28 Pale Ale ',
	pct:4.8,
	desc:'A little bit too bitter for a pale ale ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10304714_10152425240513745_4080589260215688130_n.jpg?oh=15a0492065ea90f666804c5075c6b042&oe=57B6BE79&__gda__=1471245351_05829951b6f6dbcb4354bb27ee27afa8',
	link:'https://www.facebook.com/photo.php?fbid=10152425240513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Redtrolley ale ',
	pct:5.8,
	desc:'A malty ale ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10314565_10152425240463745_1300237400658400717_n.jpg?oh=fb3e96df0a7f5b76f492e0475807fc4d&oe=57AF0B58&__gda__=1471155111_43b524a83913d101fa7d5264c5556a1b',
	link:'https://www.facebook.com/photo.php?fbid=10152425240463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Opera bar pale ale',
	pct:null,
	desc:'Flavourless ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10154926_10152425240573745_3819970704734320665_n.jpg?oh=2639d220697e1b653136211283e63563&oe=57B569CD&__gda__=1469802387_eca79913372e963099349f74fae14962',
	link:'https://www.facebook.com/photo.php?fbid=10152425240573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bingo wings ',
	pct:5.0,
	desc:'A zesty wheat beer ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10155860_10152425240628745_5749004272951603123_n.jpg?oh=f94b6032b48b686d09410fb31e0ceb19&oe=579B5E92&__gda__=1471681127_bf91f764b878ae99b7a34c9a038c37c8',
	link:'https://www.facebook.com/photo.php?fbid=10152425240628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dundee India Pale Ale ',
	pct:6.3,
	desc:'Not a bad IPA ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10342507_10152425240783745_250399849084331418_n.jpg?oh=123f506b3df15cdece9f03c2c355c093&oe=57AD219A&__gda__=1470240273_c8c0ac582083356b4d700a2a66d2857e',
	link:'https://www.facebook.com/photo.php?fbid=10152425240783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bee Sting ',
	pct:5.0,
	desc:'A nice level of sweetness ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10168130_10152425240878745_5742462968298954155_n.jpg?oh=7f1865fde622b27a22bb233cde299789&oe=57BD282A&__gda__=1470650257_7e33d658d52a4508cdc5739a58b9a939',
	link:'https://www.facebook.com/photo.php?fbid=10152425240878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stefano’s pilsner ',
	pct:4.7,
	desc:'A good pilsner but far from perfect ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash4/v/t1.0-0/p480x480/10301357_10152425240938745_5491397456344059410_n.jpg?oh=f74d5ea28101bb3b604b4b1c0ff2b6b5&oe=57A81D00&__gda__=1471098822_7c574e77a34c908984bd58b8c60015bf',
	link:'https://www.facebook.com/photo.php?fbid=10152425240938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Stow Away IPA ',
	pct:5.6,
	desc:'A fairly mild IPA ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/10330353_10152425241028745_6945284873150801200_n.jpg?oh=a122eae48fb8713c5496a6c5aaecabfa&oe=57B1D5F4&__gda__=1474774310_4a3958963fcb55e8dac4e619113dca77',
	link:'https://www.facebook.com/photo.php?fbid=10152425241028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Mango Beer ',
	pct:4.5,
	desc:'Kind of tangy but can’t taste the mango ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10294225_10152425241078745_7192155480482123122_n.jpg?oh=ff617ca229c458f663f51fb424aaaa8a&oe=57AC9CA3&__gda__=1470632117_f30fd989d4b51d3c071822a3f6a0eebd',
	link:'https://www.facebook.com/photo.php?fbid=10152425241078745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s pearlers pale ale ',
	pct:4.5,
	desc:'A very well balanced pale ale ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10459893_10152534289713745_6169618167007300448_n.jpg?oh=f3b110673f95d1939d5f00dbc94a8355&oe=57B586ED&__gda__=1470286185_162d52bead836ba9e54609a6c83fb285',
	link:'https://www.facebook.com/photo.php?fbid=10152534289713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos equis lager especial ',
	pct:4.5,
	desc:'A very easy drinking lager. Good for a hot day ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10433892_10152534289243745_2400323308581320924_n.jpg?oh=56b123bab2590be9de9b840a9201715e&oe=57B6470B&__gda__=1470253554_62d85565592dc44629e3867382b4c929',
	link:'https://www.facebook.com/photo.php?fbid=10152534289243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale Drk ',
	pct:4.5,
	desc:'Quite mild for a dark ale ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/10373527_10152534289553745_1636959852017465130_n.jpg?oh=326a36c2491c42975539d8f11071a1cc&oe=57B53696&__gda__=1469897187_31a39629c6773d8c5c2c855791082327',
	link:'https://www.facebook.com/photo.php?fbid=10152534289553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Suntory MD ',
	pct:5.0,
	desc:'A slightly strange lager ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10426644_10152534289858745_1229530734473771808_n.jpg?oh=ca54c048ee6ddb4e1d89f23e10b9f903&oe=57BA4E73&__gda__=1469967048_01f45b641986f482b562a79c02949980',
	link:'https://www.facebook.com/photo.php?fbid=10152534289858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s bohemian pilsner ',
	pct:5.0,
	desc:'Smooth with a nice finish ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10462530_10152534290193745_4497356221968859858_n.jpg?oh=951fe7b3aab092020f90a5ecd4c1eee0&oe=57BAA32A&__gda__=1470481287_db59117686e47a27f406b57206e0b958',
	link:'https://www.facebook.com/photo.php?fbid=10152534290193745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redback beer ',
	pct:4.7,
	desc:'Reminds me of some belgian beers but not nearly as good ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10488390_10152534290478745_4494982556291999381_n.jpg?oh=88c20222ee04bd94e2ebcb9050ee1e39&oe=57E703D8&__gda__=1470793308_da0295a15b4fa7c15cf881115d719b11',
	link:'https://www.facebook.com/photo.php?fbid=10152534290478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bintang',
	pct:null,
	desc:'Just like other easy drinking beers from the region ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10398080_10152534290653745_1374069162252942719_n.jpg?oh=5900359e16d4f934b4aa3acff2579545&oe=57BD3727&__gda__=1470066225_e37cf27ac5e5c20f2765e238327535f4',
	link:'https://www.facebook.com/photo.php?fbid=10152534290653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cats shank kolsch ',
	pct:4.6,
	desc:'Good all round ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10491226_10152534290818745_8400776013361245843_n.jpg?oh=759428b9c8f7c81dda23ef4a4b97ed6e&oe=57B78B1F&__gda__=1469941518_6820edf6fb846820816c4218088c386e',
	link:'https://www.facebook.com/photo.php?fbid=10152534290818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura brewery honey wheat ',
	pct:4.5,
	desc:'A fairly standard beer ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10393575_10152534291018745_4203149759533116955_n.jpg?oh=c5bae1134b5a768015207151739b2398&oe=57AC1DBF&__gda__=1471123271_e47092aea8343f9c9b296e9b09b2f111',
	link:'https://www.facebook.com/photo.php?fbid=10152534291018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Roger\'s beer ',
	pct:3.8,
	desc:'A lager with a bit of a tang ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10482595_10152534291158745_997791426307345458_n.jpg?oh=c722a773bd62ad442a67d7718eb9ee6a&oe=57BB9577&__gda__=1470254715_b74a72a672d1c9faac1d43b1a2a53d9b',
	link:'https://www.facebook.com/photo.php?fbid=10152534291158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'99 not out ',
	pct:5.0,
	desc:'Not my kind of beer ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10441315_10152534300648745_3725590372701097829_n.jpg?oh=1c0299797f8530168d64f6195527ac56&oe=57A64187&__gda__=1471810108_1e5c92875acc848b6fea9fbe110af977',
	link:'https://www.facebook.com/photo.php?fbid=10152534300648745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral sly fox ',
	pct:4.7,
	desc:'A nice pale ale ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/10470597_10152534300708745_7685915012921086968_n.jpg?oh=49a72cefaf0ca4e13d231179a67428eb&oe=579C858A&__gda__=1470866869_0b1bbd4d91835a8885e8afd196639ef5',
	link:'https://www.facebook.com/photo.php?fbid=10152534300708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat steam ale ',
	pct:4.5,
	desc:'Could go for a case is this ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10390115_10152534300713745_5030138459822932747_n.jpg?oh=ff6acf470f2375b99df24f8448ba9d98&oe=57A14D1F&__gda__=1470300451_3091fa5708230c494e34261284ceeff7',
	link:'https://www.facebook.com/photo.php?fbid=10152534300713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s golden lager ',
	pct:5.0,
	desc:'What you want on a summer afternoon ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10456077_10152534300758745_7454080799516274626_n.jpg?oh=9648c8b23f69776d26a461879750cbb3&oe=57B2FC0B&__gda__=1471232911_beab62bf0777013a9542ab391a99c699',
	link:'https://www.facebook.com/photo.php?fbid=10152534300758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf porter ',
	pct:6.2,
	desc:'A little bit harsh for me ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10488349_10152534301008745_8348994823778686167_n.jpg?oh=adac22edb7892becb200e4dc3739a872&oe=57A45EBE&__gda__=1470648800_e8f5a50c0286e1f5fbc9c8fb546f70b5',
	link:'https://www.facebook.com/photo.php?fbid=10152534301008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms lager ',
	pct:4.6,
	desc:'Wasn\'t expecting much ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10489819_10152534301208745_6098643900831599392_n.jpg?oh=aa35a680f16ffb82a7fc3e7a9db15117&oe=57B191F6&__gda__=1470149234_00329f8c0ae1189db1b08206d1e5eb0c',
	link:'https://www.facebook.com/photo.php?fbid=10152534301208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O.k beer Okocim ',
	pct:5.6,
	desc:'It\'s ok ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10300636_10152534301428745_4348861457784870364_n.jpg?oh=6223621c2682c1b0aeeb131372bef3b1&oe=57B2BB13&__gda__=1469898061_1d1141ada5ca77fd0a46405ffc90703d',
	link:'https://www.facebook.com/photo.php?fbid=10152534301428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood lager ',
	pct:4.7,
	desc:'Such a letdown after the pale ale ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10408527_10152534301523745_6253327536631057603_n.jpg?oh=2815075963f065e0e2573a46bbc21c9d&oe=57AFFE7B&__gda__=1470522730_2a0d984b6950a837fd247b70fdf6569b',
	link:'https://www.facebook.com/photo.php?fbid=10152534301523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogbolter ',
	pct:5.2,
	desc:'A very nice malty flavour ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/10409678_10152534301618745_7574186216754130853_n.jpg?oh=8e6eaf0fa434c879a4da2adf23620ad5&oe=57A3B604&__gda__=1469686976_d48919a2db6e85b672b02ac7b2f412e2',
	link:'https://www.facebook.com/photo.php?fbid=10152534301618745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saranac pumpkin ale ',
	pct:5.1,
	desc:'Not that pumkiny ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10262192_10152534301808745_668535654445517750_n.jpg?oh=bcbfb948c2a471c1c1cf439a72ab7d30&oe=57BAEAC4&__gda__=1469793736_4540c23878154b6be0b52e4e2422361b',
	link:'https://www.facebook.com/photo.php?fbid=10152534301808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada kellerweis ',
	pct:4.8,
	desc:'A true weisbeer. I don\'t like it. ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10411228_10152534305933745_5912326499497887080_n.jpg?oh=3772359663c35be95a172fa8b3a66623&oe=579BCC0D&__gda__=1471354001_357c7a470db5dc62f0f628be30e9b1c2',
	link:'https://www.facebook.com/photo.php?fbid=10152534305933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hayward 5000 ',
	pct:8.0,
	desc:'Cheap and malty ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10260031_10152534306073745_6457168517247456226_n.jpg?oh=8ec1b02ce30097efb40cb9380d3045d7&oe=57AD6E56&__gda__=1471656658_423ac96e6ea98bf2d8c759ebef4fbd18',
	link:'https://www.facebook.com/photo.php?fbid=10152534306073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cass fresh ',
	pct:4.5,
	desc:'A very refreshing lager ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10463933_10152534306048745_557216881289649027_n.jpg?oh=fa3aff0a76de10d5179f90408cb0f794&oe=57B943AC&__gda__=1471544937_a346a6dbd3c87dd76e629fd681cb1a20',
	link:'https://www.facebook.com/photo.php?fbid=10152534306048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade bright ale ',
	pct:null,
	desc:'An all round good beer ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10462761_10152534306183745_7006650351412791308_n.jpg?oh=5cce55ab319b26251a9827807f64826a&oe=57BF1D75&__gda__=1470009417_5163acc7565c281513054a2ea2356580',
	link:'https://www.facebook.com/photo.php?fbid=10152534306183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s ginger beer ',
	pct:3.5,
	desc:'Very gingery but a little bit too fizzy. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10390539_10152534306248745_2125625178149511710_n.jpg?oh=23c1fc684c56964d212604b62ed1f513&oe=57B4D446&__gda__=1471336944_4d7d0a395118939e7d696d8099b9fd28',
	link:'https://www.facebook.com/photo.php?fbid=10152534306248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pintail pale ale ',
	pct:5.3,
	desc:'Kind of a Pale crossed with an IPA ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10454293_10152534306298745_7768963216409422880_n.jpg?oh=263c30a3625df7256e4348a6778eb24c&oe=57B0E183&__gda__=1474776929_1ca53df18110db893712ba3e94666a1e',
	link:'https://www.facebook.com/photo.php?fbid=10152534306298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf pale ale ',
	pct:5.4,
	desc:'A little bit stouty',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10464035_10152534310338745_1731994487341714039_n.jpg?oh=3207db76e58c7e1598af092d4acbdffe&oe=57ABE572&__gda__=1470868106_fa2343a6f16002602272c7c41c7583eb',
	link:'https://www.facebook.com/photo.php?fbid=10152534310338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stiegl ',
	pct:4.9,
	desc:'A nice light Austrian beer ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q87/p480x480/10492027_10152534310618745_1648790094042442309_n.jpg?oh=e14cc4b795b96f0caed84b9acb532d0e&oe=579C916F&__gda__=1470017422_8db9192624ccf79fd9fc353f0662c31e',
	link:'https://www.facebook.com/photo.php?fbid=10152534310618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau dark ',
	pct:5.5,
	desc:'Tastes really metallic. Might just have been the taps ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/q81/p480x480/10462761_10152534310558745_1029523877930371907_n.jpg?oh=4cd7a327a90e6f3a66cd5f9c0777acbb&oe=57BE0321&__gda__=1470757257_32d201304ad97e9c34a716decc121d9a',
	link:'https://www.facebook.com/photo.php?fbid=10152534310558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cantina ',
	pct:4.6,
	desc:'A refreshing drink ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10475339_10152534310788745_8903624356648511173_n.jpg?oh=232a94e43de2d1f826172b723e892f62&oe=57A4D083&__gda__=1471104007_a4a0e8b7b3a4bc3dc93d3b94def9a3ee',
	link:'https://www.facebook.com/photo.php?fbid=10152534310788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozlak ',
	pct:6.5,
	desc:'Malty ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10264926_10152534310928745_6694007916577152263_n.jpg?oh=341661e1d99f0dfc4296691dab76c1b7&oe=57B86B60&__gda__=1471202396_73aa5c3730fe77688e809337b2a5fa65',
	link:'https://www.facebook.com/photo.php?fbid=10152534310928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grain lager',
	pct:null,
	desc:'Like a really mild pale ale ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10448190_10152534314748745_6480384213227978387_n.jpg?oh=993434012d836b0d4412af4b5086e886&oe=57B8DFA4&__gda__=1471079712_437966140925bbd82aeb44b09a569150',
	link:'https://www.facebook.com/photo.php?fbid=10152534314748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Hog IPA ',
	pct:5.8,
	desc:'A fairly plain IPA. A good choice if you’ve never had one before ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10411207_10153053839443745_1628460253644107712_n.jpg?oh=89f8658594496412e36057e53f3e966f&oe=579FF98D&__gda__=1470384928_2421944e1f76461895cb21323cd2e6d0',
	link:'https://www.facebook.com/photo.php?fbid=10153053839443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA blanc ',
	pct:5.0,
	desc:'Not really sure what this beer is supposed to be. But it’s for olympians ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10410984_10153053839163745_7731660578628364886_n.jpg?oh=76edbf09ff162e962e842d3af5f1824c&oe=579BFA74&__gda__=1471830157_fae24c8b242c9676ae55a6991472a145',
	link:'https://www.facebook.com/photo.php?fbid=10153053839163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redoak organic pale ale  ',
	pct:4.6,
	desc:'A tasty bev ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10349001_10153053839393745_466238167460813515_n.jpg?oh=dca2b12f75cc91261e81f7b74de1648a&oe=579D866C&__gda__=1470003800_6314d5a919466237356c9187976efc28',
	link:'https://www.facebook.com/photo.php?fbid=10153053839393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Nail Hoppy Summer Ale ',
	pct:5.0,
	desc:'Nicely hoppy ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10945677_10153053839853745_7181309439289874351_n.jpg?oh=bfe6ba049d54a0dfc43788db067f048c&oe=57BC843E&__gda__=1474755368_34a7c6f038a6ed9e94d6510d4cddeab2',
	link:'https://www.facebook.com/photo.php?fbid=10153053839853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Astor Ale ',
	pct:4.5,
	desc:'Pretty average ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10945640_10153053840143745_2674301376011904832_n.jpg?oh=7559c58e68f3df3f7540d1b9a8501c44&oe=57AD7923&__gda__=1471984253_968a461a8bea540bab5a23064db3b98c',
	link:'https://www.facebook.com/photo.php?fbid=10153053840143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour bright ale ',
	pct:4.2,
	desc:'Not really worth getting again ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10696283_10153053840278745_1486083629761267822_n.jpg?oh=3045a52a2638e8b7b6b34961c5eec6a3&oe=57B82EB3&__gda__=1471365298_cc73f3e2fb5434a80463b5f0cbffec02',
	link:'https://www.facebook.com/photo.php?fbid=10153053840278745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso\'s Smokey Bishop ',
	pct:4.7,
	desc:'Not one to rush, not too smokey either ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1601397_10153053840403745_751081432725627058_n.jpg?oh=1728e51ca3ee8485db5ef3180e59530c&oe=57A9BB4F&__gda__=1470451549_0cde9a40b8b9e02bf4f1fb19a6de446d',
	link:'https://www.facebook.com/photo.php?fbid=10153053840403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hooten ',
	pct:4.6,
	desc:'Standard easy drinking lager ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1606916_10153053840543745_4428133737928836956_n.jpg?oh=4c5708b9df0f617452ea41275a685459&oe=579FE955&__gda__=1469976574_68eb82d1139bcd6751ce87fa26d5cd9e',
	link:'https://www.facebook.com/photo.php?fbid=10153053840543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jenlain Ambre ',
	pct:7.5,
	desc:'Was hoping for so much more than with this giant beer ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10955719_10153053840738745_4377010572225479820_n.jpg?oh=c6ba2ae9b4b7f8bb14dab22c167f4582&oe=57A452E6&__gda__=1470692024_e046b76ac5264b901ca32301f8300d4b',
	link:'https://www.facebook.com/photo.php?fbid=10153053840738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snaatch lager',
	pct:null,
	desc:'Probably just a rebrand of some other generic beer ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1044239_10153053840773745_1317709767507240437_n.jpg?oh=2152618bb7a3a60cdf7dc8db893fa867&oe=57BCB2F4&__gda__=1471857868_4c746747d132b2b69ff91f0dabb4710a',
	link:'https://www.facebook.com/photo.php?fbid=10153053840773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mexicali  ',
	pct:4.6,
	desc:'Not giving me what expected ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10955710_10153053851408745_4260669585339690789_n.jpg?oh=ec314c856f73a5b20d8cac5757a8bd21&oe=57AC2B63&__gda__=1470433179_4f276954c371ef0acf7626f09507a30e',
	link:'https://www.facebook.com/photo.php?fbid=10153053851408745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown golden ale ',
	pct:4.5,
	desc:'Not my favourite golden ale. Only slightly better than regular crown ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10942454_10153053851308745_7500988424962232002_n.jpg?oh=2539f2a5f02d85c6565e84b7920ce71b&oe=57BE735E&__gda__=1470117287_fe166cfe615425d132e4827872661851',
	link:'https://www.facebook.com/photo.php?fbid=10153053851308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Knappstein ',
	pct:5.6,
	desc:'A little bit harsh. Wouldn\'t buy again ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q84/p480x480/10941856_10153053851368745_8703876646395783250_n.jpg?oh=310b3dc5df849ed73f254c195040e485&oe=57ACD706&__gda__=1472100071_d26cdb3e362191411bc11f4cf53a3a62',
	link:'https://www.facebook.com/photo.php?fbid=10153053851368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Surry hills pils',
	pct:null,
	desc:'Doesn\'t really taste like a pils ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10428481_10153053851498745_4687849967086253708_n.jpg?oh=51973ddbbde7b3f61fb5c1ca1ffae227&oe=57ACD9C5&__gda__=1474798913_a4abb221e55fbbc1beef3f9c964906bf',
	link:'https://www.facebook.com/photo.php?fbid=10153053851498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rio bravo ',
	pct:4.0,
	desc:'A fairly tasteless session beer ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/q84/p480x480/1920513_10153053851643745_6150367775548290022_n.jpg?oh=0c57eb8aa7fdc6ccda2ba73df430e3d9&oe=57B2C5E6&__gda__=1469672933_076de1ae174ef1c556b615ee2e17ba1e',
	link:'https://www.facebook.com/photo.php?fbid=10153053851643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks American pale ale',
	pct:null,
	desc:'A good level of hops ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10954539_10153053851753745_8342401209754067322_n.jpg?oh=2b59411f3b0d1fe20af4c5321635ad3d&oe=57AE555C&__gda__=1471973095_944e149d2f2381232aa3feb6283affa1',
	link:'https://www.facebook.com/photo.php?fbid=10153053851753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s black beer ',
	pct:5.2,
	desc:'Just a bad tasting beer ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1979678_10153053851808745_6926811721676931401_n.jpg?oh=59291114ea85fc864c9bdf85dc163b9d&oe=57B110B8&__gda__=1470814619_05fb5207c10f20bf55c64c9b14a8340a',
	link:'https://www.facebook.com/photo.php?fbid=10153053851808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cthulhu ',
	pct:null,
	desc:'A little bit too bitter. ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10956041_10153053851963745_7126060138864736213_n.jpg?oh=219d0fee97476d99aaae393b617b24a2&oe=57A73AD9&__gda__=1470437487_f03c5649d484c923c26911504e9fa555',
	link:'https://www.facebook.com/photo.php?fbid=10153053851963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood jasper ',
	pct:null,
	desc:'Rich but not right ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10955201_10153053852088745_6663961286785907822_n.jpg?oh=c8bfa95a51a29906185c15be297d3756&oe=57BA55DF&__gda__=1469927369_48552b86a9bf14573b1d21b78d581444',
	link:'https://www.facebook.com/photo.php?fbid=10153053852088745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat summer ale ',
	pct:4.7,
	desc:'A great beer for a nice day ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/16797_10153053852143745_3087580206529630401_n.jpg?oh=d2e2465ed98fa6a173fbb7f883f9701c&oe=57E805D1&__gda__=1470100046_9dee0054796c93f75473b8e5de9aed8f',
	link:'https://www.facebook.com/photo.php?fbid=10153053852143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pearl river beer ',
	pct:5.3,
	desc:'So so bland ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10945514_10153053852213745_6703947153036432278_n.jpg?oh=75eabdf145fa2c67eb0d9895685222a9&oe=579C454D&__gda__=1471744952_495605d5026a50d88454d24eb9d2ebda',
	link:'https://www.facebook.com/photo.php?fbid=10153053852213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kaiserdom ',
	pct:4.5,
	desc:'Just a standard cheap german Lager. But such an awesome can ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p320x320/10931372_10153055725393745_7415839926658912556_n.jpg?oh=db280f2a8681109efb01abaed888feda&oe=57B4042B&__gda__=1474774389_cd6d429f1c223643b6581bd9cb90c3f2',
	link:'https://www.facebook.com/photo.php?fbid=10153055725393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN 5.0 ',
	pct:5.0,
	desc:'Not as bad as I expected from the price ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1560725_10153055725613745_6302115246934015090_n.jpg?oh=402a72091c6108920a03e32c2a171f54&oe=579A0C2F&__gda__=1471552932_1936b0cbdf05bc1b04e1d0c9000f917e',
	link:'https://www.facebook.com/photo.php?fbid=10153055725613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade IPA  ',
	pct:null,
	desc:'A nice balanced IPA ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10882109_10153055725553745_9030008793027639075_n.jpg?oh=c7fae1ef4e5311898b4cfc9890c3a99f&oe=57AEC8CC&__gda__=1470890874_3bef3eb5c730c3d0a337ae022d2e468f',
	link:'https://www.facebook.com/photo.php?fbid=10153055725553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six string Hefeweizen ',
	pct:null,
	desc:'One of the nicer wheat bears I\'ve tasted ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10957577_10153055725708745_5392401214475659109_n.jpg?oh=c9c4e0aa89aa7b6410d0d9b13744c78f&oe=57A7CC03&__gda__=1471084540_d4162ac552db3a3bbf0875076c5885f0',
	link:'https://www.facebook.com/photo.php?fbid=10153055725708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hook norton Twelve days ',
	pct:5.5,
	desc:'A little bit nutty ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1924574_10153055725888745_6113742952542006972_n.jpg?oh=ea5ee3af5f2e35cc1948157ec3acb2c8&oe=579AF8B3&__gda__=1471712703_4c39e1f93a2e0e9d70f8409f930adcbf',
	link:'https://www.facebook.com/photo.php?fbid=10153055725888745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Edge angry pirate ',
	pct:6.8,
	desc:'Rum flavour in beer is no good for anybody ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/t31.0-0/p480x480/10911454_10153055725923745_4540481012810101778_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055725923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA methode ',
	pct:5.0,
	desc:'Tastes way too metallic ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q86/p480x480/10464194_10153055726008745_3155144376465393693_n.jpg?oh=ce83684993c356aaf536c90390c74989&oe=57A3C882&__gda__=1471054947_337abae3f83e521a0e98e61ae5f98682',
	link:'https://www.facebook.com/photo.php?fbid=10153055726008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road India Saison  ',
	pct:7.5,
	desc:'Too much of a white beer flavour for me ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/t31.0-0/p480x480/10955774_10153055726098745_2456265276299415480_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay The ducks ',
	pct:4.2,
	desc:'Not at all a pale ale. Matilda bay lets me down once again ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/t31.0-0/p480x480/1492370_10153055726208745_5026667878902117342_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dr Tims ',
	pct:4.5,
	desc:'Could do with a bit more punch ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1619547_10153055749173745_8508511661850848187_n.jpg?oh=40f2792104f04c70c02b45eee9ce6685&oe=57BBF6AA&__gda__=1470407590_9009e272778985da690557ab478bc82a',
	link:'https://www.facebook.com/photo.php?fbid=10153055749173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Age The Celt Experience ',
	pct:4.2,
	desc:'Not really much of an experience ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/10947196_10153055749403745_4812053214327954894_n.jpg?oh=aab229bd1bd6200c274e20554658b444&oe=57BBEB19&__gda__=1470247718_b461bea2604785ead9f434177dbff4df',
	link:'https://www.facebook.com/photo.php?fbid=10153055749403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bling Bling Imperial IPA ',
	pct:8.5,
	desc:'Lots of flavour, couldn’t have many ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10806453_10153055749418745_7326451586089018048_n.jpg?oh=c94125402f6bb731423994047478b8dc&oe=57B5CD71&__gda__=1470558172_f3a06adcbc901f62d0c7dcdac07b333f',
	link:'https://www.facebook.com/photo.php?fbid=10153055749418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bandit Killer Sprocket ',
	pct:4.8,
	desc:'Way too much of a smokey flavour ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10711_10153055749528745_1705580902509688757_n.jpg?oh=7e1e70a237b64697515c5b5f57d5b267&oe=57B73BA7&__gda__=1469957774_42300527164e79e24f7b49e3a711f58e',
	link:'https://www.facebook.com/photo.php?fbid=10153055749528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monkey’s Fist ',
	pct:4.9,
	desc:'Not sure why these are always reduced to clear at Dan Murpheys ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t31.0-0/p480x480/10257018_10153055749583745_4285986054653809975_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749583745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punch & Judy’s Ale ',
	pct:3.9,
	desc:'Not much flavour or alcohol content',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10922862_10153055749673745_210519337780800601_n.jpg?oh=295eb94473c19438076757f08c314e78&oe=57B7CDBC&__gda__=1469761968_3ef96b7ad5ed68ef42af14eec200e22f',
	link:'https://www.facebook.com/photo.php?fbid=10153055749673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hassle Hop ',
	pct:5.5,
	desc:'A pale with a bit of a strong ale flavour. ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/t31.0-0/p480x480/10942330_10153055749753745_4423283376777303913_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The point pale ale ',
	pct:4.2,
	desc:'Not my favourite pale ale ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/t31.0-0/p480x480/10955559_10153055749933745_9217798578543309687_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Tom Chocolate ',
	pct:6.0,
	desc:'A slight hint of chocolate ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10891448_10153055770573745_4712183690457686836_n.jpg?oh=1ba36c1194cbc8d9cf855a7cbb38d2c9&oe=57B98563&__gda__=1471997646_1af93f64f122a66bedd04dc68712c664',
	link:'https://www.facebook.com/photo.php?fbid=10153055770573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John Boston Golden ale ',
	pct:4.2,
	desc:'I do like an easy drinking golden ale ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10690124_10153055770718745_5622367894684528293_n.jpg?oh=0cf97fca1e4f2b77a57f5dd47745f109&oe=57ADF5E0&__gda__=1470930774_68137a816865fc924a3f55e22257ed62',
	link:'https://www.facebook.com/photo.php?fbid=10153055770718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Selezione 19 ',
	pct:5.0,
	desc:'Goes well with a nice Italian meal ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10958542_10153055770443745_1738110291091509447_n.jpg?oh=efe8f4e9cb642489b0b0d654f6533ced&oe=579DEDF8&__gda__=1471222851_00a669bf7179a885b00c6d66c68ec7d1',
	link:'https://www.facebook.com/photo.php?fbid=10153055770443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hipster ale ',
	pct:5.5,
	desc:'Just not really hitting the spot tonight ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10953214_10153055770813745_8713996460827737605_n.jpg?oh=245639d5c7d72803d91460aa6e73339f&oe=57BAA5D1&__gda__=1470461802_af11d1466c751d1bfb8fc8f9d1226c75',
	link:'https://www.facebook.com/photo.php?fbid=10153055770813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trumer pils ',
	pct:4.9,
	desc:'An ok pilsner ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/10953955_10153055770883745_7624310153191779880_n.jpg?oh=7e96ca60d4484ed5a15c80ae8ff1a779&oe=57B3495C&__gda__=1471427981_3c59c066a63b804bd2be21e47aab5a39',
	link:'https://www.facebook.com/photo.php?fbid=10153055770883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers 62 pilsner ',
	pct:5.0,
	desc:'Coopers seem to have a huge range of random beers, sadly the quality varies quite a bit ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10942756_10153055770968745_4182424304505127141_n.jpg?oh=eeeaacb34ae2201a5092442a48912f77&oe=57B4100B&__gda__=1471392522_2df718d51b2f627eb259fd3e617e9a5a',
	link:'https://www.facebook.com/photo.php?fbid=10153055770968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders All Day IPA ',
	pct:4.7,
	desc:'Could literally drink this all day. Another from the great selection at Parsons ',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10955163_10153055771108745_5413724920939008977_n.jpg?oh=7d98543f767ef0c7f08de8349a58ee34&oe=57A89516&__gda__=1470792711_d8f9a760af202046a87eadebd5f5f1dc',
	link:'https://www.facebook.com/photo.php?fbid=10153055771108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Torpedo extra IPA ',
	pct:7.2,
	desc:'So much flavour, so much booze. What’s not to love ',
	score:9,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10686865_10153055771228745_3010927456136598269_n.jpg?oh=702340de849beed2ae52f835fc08468c&oe=57AAF68E&__gda__=1471883116_b5510e611a5b609b7991fd19927a2395',
	link:'https://www.facebook.com/photo.php?fbid=10153055771228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Henninger ',
	pct:4.8,
	desc:'Very bland ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10955215_10153055772023745_950968910298192775_n.jpg?oh=b66cb804a3fa3d09848f0e210b9921a6&oe=57A71B58&__gda__=1471049044_9aa437cf4f54095b405af01f5d88f9ae',
	link:'https://www.facebook.com/photo.php?fbid=10153055772023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian blue ',
	pct:4.5,
	desc:'Ok for a wheat beer ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1920181_10153055771283745_6859710748033343904_n.jpg?oh=7089c9e67e872afd5f7a9a251247f3c0&oe=57AA2728&__gda__=1470240464_c36918f321a9a92a2b840e1301812d65',
	link:'https://www.facebook.com/photo.php?fbid=10153055771283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kosciusko Pale ale ',
	pct:4.5,
	desc:'Never heard of this, was hoping for something better ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10492453_10153055771438745_3655493043304213188_n.jpg?oh=3d2659a18ef9757f73f004b4986b46fa&oe=57AE7AA6&__gda__=1471013530_485305bf281538f8e2055c7b966a0fd1',
	link:'https://www.facebook.com/photo.php?fbid=10153055771438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Blond ',
	pct:6.5,
	desc:'Not as good or as strong as the Quadrupel ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10491123_10153055791238745_951076558234575000_n.jpg?oh=a93c21762e51661e271ace12ae17c3a6&oe=57B2D5FF&__gda__=1471922887_67c649fb0c4cc65e0b6ea11f4475bd50',
	link:'https://www.facebook.com/photo.php?fbid=10153055791238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Halifter Stout ',
	pct:4.9,
	desc:'A fairly mild stout ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10945766_10153055791503745_8417455299148358450_n.jpg?oh=33202311f68727db57e83a7b20c3e9e5&oe=57B65EC7&__gda__=1470000252_4e9e5a97da490706b12a1a64c9c7458b',
	link:'https://www.facebook.com/photo.php?fbid=10153055791503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Menabrea 1846 ',
	pct:4.8,
	desc:'Slightly above average Italian beer ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/10945561_10153055791438745_6706555972975228314_n.jpg?oh=dbb1f4a9eca7c8cef46faa5e575b45a2&oe=579EEBB3&__gda__=1470639558_26ccb205a0262f9ab44f20a459be4c02',
	link:'https://www.facebook.com/photo.php?fbid=10153055791438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Doppelbock Winter ale ',
	pct:6.0,
	desc:'I need to sample some more doppelbocks ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1798753_10153055791623745_8735243396794406846_n.jpg?oh=6f774ce3bc0e9e8a175febc94ce71ddf&oe=57A99AC0&__gda__=1470354795_5f6123e3b0440547279624a22fb8bb5d',
	link:'https://www.facebook.com/photo.php?fbid=10153055791623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Hooky ',
	pct:4.6,
	desc:'There are just so many bad english beers ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10806242_10153055791708745_8168997172530304317_n.jpg?oh=c9d2fc631efc9da9a31f02da4525e245&oe=57A1DB9D&__gda__=1471003161_d5704d7246265f2275cd5cb3f03cc812',
	link:'https://www.facebook.com/photo.php?fbid=10153055791708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Brewery Stefano’s ',
	pct:5.0,
	desc:'A middle of the road kind of beer ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10945738_10153055791798745_8584137532392564439_n.jpg?oh=f6a1609debd06dda3f3b2ba06ea378da&oe=57BC8542&__gda__=1471067732_2b3d1f0cb181e4592decba2256bcc9d9',
	link:'https://www.facebook.com/photo.php?fbid=10153055791798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade Stout ',
	pct:5.8,
	desc:'Not a very nice stout ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10501746_10153055791938745_8029415469669135648_n.jpg?oh=556b4be58053fcd05d158e55ae924b07&oe=57A56BC9&__gda__=1469806396_4029cbb7660193a72298fad544f85175',
	link:'https://www.facebook.com/photo.php?fbid=10153055791938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mallee Bull ',
	pct:5.6,
	desc:'Enjoyed this more than I expected ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10929144_10153055792013745_3943691173139596791_n.jpg?oh=f342079d94d50f73fe645e8cd0395d73&oe=57BEAD7C&__gda__=1470267529_2cd9a553fa993c41d883a65dbf8e10f1',
	link:'https://www.facebook.com/photo.php?fbid=10153055792013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floreffe Prima Melior ',
	pct:8.0,
	desc:'Just an awful flavour combination ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10940507_10153055792123745_6951460612562111481_n.jpg?oh=ddc013cf89709c7dfd234529ce08d64f&oe=57A56390&__gda__=1471411476_aa4863633fbbd91cc15b85d837e741a6',
	link:'https://www.facebook.com/photo.php?fbid=10153055792123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oettinger Pils ',
	pct:4.7,
	desc:'This beer has never been good, but at least it has always been cheap ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10952861_10153055792233745_5985463992710631340_n.jpg?oh=49f6ffe80bd2ceda50f2b9f5ee63aa8f&oe=57A7F745&__gda__=1469898739_ec052b9f68ac4322f5d2aec5bff5da1d',
	link:'https://www.facebook.com/photo.php?fbid=10153055792233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Quadrupel ',
	pct:10,
	desc:'Such a lovely beer all round. Makes me want to go back to Belgium ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t31.0-0/p480x480/10838255_10153055792378745_3160802427352478420_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055792378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms captain\'s IPA ',
	pct:5.8,
	desc:'A very mild IPA. Easy drinking but not what I want from an IPA ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10995650_10153118627158745_3441161072765169256_n.jpg?oh=6c4c37b8a6fc3f68cb0a9a7208dbe05d&oe=57E83696&__gda__=1470528800_e8596ddda43600acdfa9a23f757d9f41',
	link:'https://www.facebook.com/photo.php?fbid=10153118627158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mythos ',
	pct:4.7,
	desc:'I don\'t remember ever seeing another type of beer in Greece ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/t31.0-0/p480x480/10865944_10153118627183745_3452701286868348707_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118627183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Byron bay pale lager ',
	pct:4.8,
	desc:'Plain and boring ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/17811_10153118627228745_8196338202734334456_n.jpg?oh=1f0275634f0daa2624d4b6a06d9efc3e&oe=579F2499&__gda__=1471594062_255648d4351e97020c918359c819dccc',
	link:'https://www.facebook.com/photo.php?fbid=10153118627228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great northern lager ',
	pct:4.2,
	desc:'A little bit metallic. Not sure why this was recommended to me ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11025812_10153118627363745_3879639136439752978_n.jpg?oh=ec5e4d07f4de31b29b6435a8362219dd&oe=57AED03D&__gda__=1472072927_13da736138999a310f4697b9c6837ebd',
	link:'https://www.facebook.com/photo.php?fbid=10153118627363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sirling castle ',
	pct:6.5,
	desc:'Strong on alcohol, mild on flavour. Perfect for getting drunk quickly ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11024597_10153118627558745_640038091949927094_n.jpg?oh=0c1eb980918a40d53f942e5050f721a2&oe=579FAE9A&__gda__=1472128305_9b2c46f5fc9c46e0c3ef9b4d09df13f4',
	link:'https://www.facebook.com/photo.php?fbid=10153118627558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Red Trolley Ale ',
	pct:5.8,
	desc:'Not really my kind of beer ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11035307_10153118666928745_8142017152048186664_n.jpg?oh=4080bb1f6f594c6168c39cc7a0dc4be7&oe=57A3EDE3&__gda__=1472060182_79c3ae1ab42f7ef1791322ed51986e1e',
	link:'https://www.facebook.com/photo.php?fbid=10153118666928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bolt ',
	pct:4.6,
	desc:'Very easy drinking. Very close to water ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11037326_10153118666923745_5159572374416519952_n.jpg?oh=623d0f4083d95b77e9bfd4f971ed5377&oe=57BCB0D5&__gda__=1470943883_2993a0c3ba7936b370b1d0430d29de1c',
	link:'https://www.facebook.com/photo.php?fbid=10153118666923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Copycat A.I.P.A ',
	pct:6.8,
	desc:'A nice floral aroma but a little bit harsh ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1797322_10153118666983745_5915201915827958878_n.jpg?oh=dd36f9746ff2e4435d69366a83615652&oe=57ADBCBD&__gda__=1470093622_9d2a7520714607c6e6d1708b45c8b647',
	link:'https://www.facebook.com/photo.php?fbid=10153118666983745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black Death Beer ',
	pct:5.8,
	desc:'Like a crappy lager but black',
	score:null,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10437609_10153118667103745_274358326202189719_n.jpg?oh=595754a83d5855ad59e5af717a272dde&oe=57AA0BD0&__gda__=1471951592_ff3b77ddc240ed003a3f384151daf1ef',
	link:'https://www.facebook.com/photo.php?fbid=10153118667103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant IPA ',
	pct:5.4,
	desc:'Mild but well rounded ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11036670_10153118667448745_2676066066178360898_n.jpg?oh=891f951c5683aee3ab53d3631c6fedf3&oe=57B12B06&__gda__=1470482931_2f5b8fe31bf6cda5d01a792a86a52958',
	link:'https://www.facebook.com/photo.php?fbid=10153118667448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s summer ale ',
	pct:5.0,
	desc:'Surprisingly this is a ginger beer. And while I do like ginger beers this isn’t one of the better ones ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10358559_10153118667468745_6994245863309298252_n.jpg?oh=59424e0b0778b2944d7f31463fc5817d&oe=57B89F3C&__gda__=1471002313_e74a80abbb520c6e9a47ab86883acced',
	link:'https://www.facebook.com/photo.php?fbid=10153118667468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale IPA ',
	pct:5.5,
	desc:'Always slightly disappointed by the vale range not being as good as vale ale',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10557224_10153118667568745_7444873751997956052_n.jpg?oh=b6af37b0086ffe9f0b774e411aa3d75a&oe=579AB1B3&__gda__=1471246639_76fa49aefe7b8482ace3da2d15db9bf1',
	link:'https://www.facebook.com/photo.php?fbid=10153118667568745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked Elf WitBier ',
	pct:5.0,
	desc:'Fairly mild for a wheat beer ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10292286_10153118667738745_8355190794765320413_n.jpg?oh=0c3919848741c13e15288825f8be1fa3&oe=57B67F8C&__gda__=1470129523_04b2923e967a09973deaeabf15829063',
	link:'https://www.facebook.com/photo.php?fbid=10153118667738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lander Brau ',
	pct:4.7,
	desc:'Seems like it\'s a cheap flavourless wheat beer but since I don\'t like wheat beer I\'m ok with that ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11000604_10153118667938745_2598821758352900098_n.jpg?oh=878e374f82756308cefcff47485b6c46&oe=57BC39E9&__gda__=1471612956_7752473dfa3927f79063bca685dadcc8',
	link:'https://www.facebook.com/photo.php?fbid=10153118667938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN Bitter ',
	pct:4.0,
	desc:'Tastes the same as the green one but not as strong ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10450836_10153118667958745_9176447944373645082_n.jpg?oh=a08dc48291c024b33c553b6d06ecfab5&oe=57B3EFFF&__gda__=1470550782_052424b43ed350e634850a2208a87b4f',
	link:'https://www.facebook.com/photo.php?fbid=10153118667958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Clear ',
	pct:4.5,
	desc:'Tastes like water ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10151181_10153118668273745_149724940762965990_n.jpg?oh=8e8c7f0384c61bf25c6784e6c9d5c5bc&oe=579FF619&__gda__=1470696850_642184368da3cab324e33d681f315e62',
	link:'https://www.facebook.com/photo.php?fbid=10153118668273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Johannes ',
	pct:6.5,
	desc:'Slightly too sweet but ok ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10471235_10153118668688745_4443326077354329396_n.jpg?oh=86be62fe5c2fa40da4d67bd858e81963&oe=57AC3B84&__gda__=1471530642_88c0273a662603c5fff7d90709b53347',
	link:'https://www.facebook.com/photo.php?fbid=10153118668688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber pils ',
	pct:5.0,
	desc:'Not exciting ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1902891_10153118668708745_4563543533450469126_n.jpg?oh=7c5ad0c80ae4afacbe48382694ea2342&oe=57E70C57&__gda__=1472146310_52e5ba07d300ef71d2207ab99e9df2df',
	link:'https://www.facebook.com/photo.php?fbid=10153118668708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ballast Point Big Eye ',
	pct:7,
	desc:'A nice tasty IPA. I like the lack of a bitter aftertaste ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10389593_10153118668748745_5666950047802645873_n.jpg?oh=edc5be4f3802fd75a5a601baaa3809b1&oe=57A3B663&__gda__=1470955932_50b31ce1075c1514ebeefc96906ddd41',
	link:'https://www.facebook.com/photo.php?fbid=10153118668748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad long trip Saison ',
	pct:6.6,
	desc:'Very tasty, but the fizz is a bit strange. Sits in such a strange middle ground but I want more ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10986616_10153118669198745_2610490748271486451_n.jpg?oh=5e9c27d4b73fe50c9485c69ce87d1341&oe=5799CEC3&__gda__=1471921272_78bb62c3145c78df9e016eb277d54af6',
	link:'https://www.facebook.com/photo.php?fbid=10153118669198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perla Midowa ',
	pct:6.0,
	desc:'A nice hint of honey. Sweeter than most beers ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11018324_10153118669153745_6177767464748408498_n.jpg?oh=2a0e0fb1c8624e76ce88c15da573e126&oe=579F7A42&__gda__=1470676128_c57e72e6b6b1c2cd28c2dc6100d1658d',
	link:'https://www.facebook.com/photo.php?fbid=10153118669153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Storm Super Dry Beer ',
	pct:5.0,
	desc:'Your regular plain cheap lager ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11038700_10153118669473745_5502916115063582938_n.jpg?oh=3519fb974fb47ad7d12b6309ce3b3710&oe=57B2354B&__gda__=1472005822_4a5f96d2adb76dc116ccd60f69379e3f',
	link:'https://www.facebook.com/photo.php?fbid=10153118669473745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden lion beer ',
	pct:5.6,
	desc:'A nicely rounded flavour ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11021223_10153118669773745_8881697342781962806_n.jpg?oh=0d7033ce6fccd60032a0d997e0cea4ba&oe=579AE46E&__gda__=1470103451_ff4ad99feda81c4f9d3e416cd05db553',
	link:'https://www.facebook.com/photo.php?fbid=10153118669773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love Dale Lager ',
	pct:4.7,
	desc:'Quite a smooth lager. Or could just be that it’s the first beer on Friday ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/t31.0-0/p480x480/10687355_10153118669793745_4229208713620347909_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain Pilsner ',
	pct:4.5,
	desc:'Pretty plain, time to move onto something stronger today ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/t31.0-0/p480x480/10845763_10153118669868745_3771962632087142041_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa Valley Milk Stout ',
	pct:7.0,
	desc:'Was expecting this to taste like milk but it’s just a creamy stout ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11034204_10153118792398745_930727431364883158_n.jpg?oh=0bf97b64055caf26713eea4f91b0469e&oe=57B52DCA&__gda__=1470371208_dc9050714ae870be1035b316fbef8b03',
	link:'https://www.facebook.com/photo.php?fbid=10153118792398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Lychee Beer ',
	pct:4.5,
	desc:'Too sweet for me, just doesn’t take like a beer anymore ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10311768_10153118792388745_7466271610444299802_n.jpg?oh=31b011ec7df970c826e52fb97241d2d2&oe=579DB0E1&__gda__=1471306175_dec6b5ae796fe0ae881f558f83417959',
	link:'https://www.facebook.com/photo.php?fbid=10153118792388745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Past Blue Ribbon ',
	pct:5.0,
	desc:'Not sure why this gets branded as a hipster beer. It’s just a bland lager ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1926933_10153118792373745_471015037580664056_n.jpg?oh=697fe18adf89bc481f08d55fa2fbaa87&oe=57A2ABBB&__gda__=1471233157_f6f174cfcfc2103edc46addf39cb8d68',
	link:'https://www.facebook.com/photo.php?fbid=10153118792373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Chilli Beer ',
	pct:4.2,
	desc:'Has a really strong hit of chilli but I like that. You get the coolness of a beer mixed with the heat of chilli ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11034166_10153118792613745_1685865302807726235_n.jpg?oh=b304b8cbaf1f9d6821df78e70689f347&oe=57AB737F&__gda__=1471192714_f578099b150828532b24f5809fc78740',
	link:'https://www.facebook.com/photo.php?fbid=10153118792613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Pale ale ',
	pct:5.1,
	desc:'A well balanced pale ale ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11017023_10153118792808745_2253924034975828582_n.jpg?oh=e3017a3cdf3b76e35d524a9934816d4a&oe=57A6C2C8&__gda__=1470768938_e4c96e07e913c4e659a340e7a6435d6e',
	link:'https://www.facebook.com/photo.php?fbid=10153118792808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lick Pier Ginger Beer ',
	pct:4.0,
	desc:'A little bit too fizzy but nice otherwise ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10988914_10153118793028745_6211347906406183583_n.jpg?oh=5e99c413e8a13853c4cf25b2a6c860eb&oe=57B0EFC4&__gda__=1471370965_793334bc340b7e904fc8ebe460f56d22',
	link:'https://www.facebook.com/photo.php?fbid=10153118793028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Adams Boston Lager ',
	pct:4.7,
	desc:'A classic. Need to find this on tap somewhere ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/11025711_10153118793008745_157967989601698522_n.jpg?oh=29a76dc5fa6afb1940d61790f1749e33&oe=57B9C014&__gda__=1470456427_2165116bc8d7ee2d4d40e274aa40f87f',
	link:'https://www.facebook.com/photo.php?fbid=10153118793008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines Kolsch ',
	pct:4.6,
	desc:'Makes me want to try more kolsch beer ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/10452382_10153118793263745_8541367164944833885_n.jpg?oh=f3fc95253fbb306d13d03af90852f9ab&oe=57A2C602&__gda__=1470076638_b82c8755a87540ac7925609b16736ae4',
	link:'https://www.facebook.com/photo.php?fbid=10153118793263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit Pale Ale ',
	pct:4.9,
	desc:'I’m a fan ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11024705_10153118793433745_1941343873752633305_n.jpg?oh=78d77352fd6db22faf350b19aefd5144&oe=57BB41E3&__gda__=1470500634_49e56e5333dbedd300a0e72ccb59fee0',
	link:'https://www.facebook.com/photo.php?fbid=10153118793433745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'BROK export ',
	pct:5.2,
	desc:'Too malty. One of the worse polish beers I’ve had ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11150982_10153225352773745_2645273460851977484_n.jpg?oh=1dbf36a44ac0bedb8ae1fad91711b0f1&oe=57B35A9F&__gda__=1470821569_3f94dace806f0d0294a19c357049cd9a',
	link:'https://www.facebook.com/photo.php?fbid=10153225352773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cavalier courage ',
	pct:4.5,
	desc:'A bit plain for me but very good for what it is ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11077960_10153225352783745_1418047245676555322_n.jpg?oh=ef21fa73ff6b992571e980acdf02c0cd&oe=57E76C56&__gda__=1470463156_d1be97a7d8b4ac91c7fff58520297c60',
	link:'https://www.facebook.com/photo.php?fbid=10153225352783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dutch windmill ',
	pct:4.6,
	desc:'Standard lager ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11140753_10153225352778745_8798373029749618991_n.jpg?oh=b69e68f8537a20b8fcfe75ab438c41f1&oe=57E7F45A&__gda__=1470939298_f6987867292186d0b5274fece890923c',
	link:'https://www.facebook.com/photo.php?fbid=10153225352778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pony fish unlikely lager ',
	pct:4.7,
	desc:'Lager with something extra but nothing special ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11096283_10153225353503745_2273426521907233162_n.jpg?oh=64a70661c54d7c451c14d1cd05fbf084&oe=57AF5E78&__gda__=1471069390_90fe8dc6233e611e7008e9751c90f02e',
	link:'https://www.facebook.com/photo.php?fbid=10153225353503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures IPA ',
	pct:6.4,
	desc:'Little creatures is like a baseline for a type of drink ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/17298_10153225353618745_5211021832992114282_n.jpg?oh=c3c2ad7ef8158b8cf091dfb48d431da1&oe=57A98404&__gda__=1469811667_af094fa467577707f77f516cb53e0367',
	link:'https://www.facebook.com/photo.php?fbid=10153225353618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sainte etienne ',
	pct:4.8,
	desc:'Average Aldi lager ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10410488_10153225353563745_8285613091047049802_n.jpg?oh=ee8c6df9009d43b22daaefa051a49f32&oe=57E8079E&__gda__=1469725954_6fb557531d1332a3770e0e7aef53116d',
	link:'https://www.facebook.com/photo.php?fbid=10153225353563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'My Antonia ',
	pct:7.5,
	desc:'Surprisingly this tastes better after I brushed my teeth ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1473040_10153225353703745_3939681785801200434_n.jpg?oh=dc4d7a93e0b48e281b6868562e87ed6a&oe=57A6F3B3&__gda__=1471236376_5b307b34953a324b92c08ea10282e632',
	link:'https://www.facebook.com/photo.php?fbid=10153225353703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pan head Pilsner ',
	pct:5.2,
	desc:'A little bit metallic. Not my favourite ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/17127_10153225353823745_2917311890568592350_n.jpg?oh=67aa52094f114f6c3893bcd0169d2f5c&oe=57BBD19B&__gda__=1471662259_bdf1b61889c224cfb308cee82a961773',
	link:'https://www.facebook.com/photo.php?fbid=10153225353823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young\'s double chocolate stout ',
	pct:5.2,
	desc:'A nice chocolate flavour ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11146531_10153225353988745_3855298969416355875_n.jpg?oh=598cbd082cc0f2a5be156b8ee72327ea&oe=57E75243&__gda__=1471597341_2eb8732c4de7b9bab801c26824b08239',
	link:'https://www.facebook.com/photo.php?fbid=10153225353988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point resin ',
	pct:9.1,
	desc:'Very bitter but without any sort of floral hop taste to balance it out ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11053047_10153225354168745_5695677735113264681_n.jpg?oh=a867427506a53626039fecc9121361db&oe=57A67F0B&__gda__=1470307925_af9c002c1c1da913a239ca861e06680f',
	link:'https://www.facebook.com/photo.php?fbid=10153225354168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Bengali ',
	pct:6.5,
	desc:'Lots of subtle character ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11148760_10153225354163745_4060898664025313434_n.jpg?oh=7a319b559e49dc71ac8b7b53bf9ba393&oe=57A865F0&__gda__=1471754419_f9ae7cd976f82ba2efe670a663799bd7',
	link:'https://www.facebook.com/photo.php?fbid=10153225354163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon dog watermelon weizen ',
	pct:5.3,
	desc:'Really subtle watermelon taste. Takes a while to get used to. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11136648_10153225354308745_6098979194311010987_n.jpg?oh=c69ce41ba18105af7f0310c1a4bced3f&oe=57A29EF2&__gda__=1470838791_7cd4f97ff026bc4da872dd1bad62b5c4',
	link:'https://www.facebook.com/photo.php?fbid=10153225354308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade rebel ale ',
	pct:4.7,
	desc:'A little stronger than a lager ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10494628_10153225354518745_289668608818495871_n.jpg?oh=111ce822609109e3b8c69a60145adbe3&oe=57BDB3EF&__gda__=1470442723_0e2d317fd675ef32e880c01b536fd398',
	link:'https://www.facebook.com/photo.php?fbid=10153225354518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Immortal beloved Hefeweizen ',
	pct:5.5,
	desc:'Basic wheat beer ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/11159507_10153225354628745_6658479749281312928_n.jpg?oh=847b57c888974649a8bca21651893430&oe=57BEB6D2&__gda__=1469968972_47d24a971423cfd7a3b6c900ef2a38a3',
	link:'https://www.facebook.com/photo.php?fbid=10153225354628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Tank nine ',
	pct:4.6,
	desc:'Nicely hopped ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11148511_10153225354708745_902540998621637913_n.jpg?oh=0b2aa439f69ac04322e2c95f0f17ee0d&oe=57A2476B&__gda__=1470506599_9da6fc5742ba349c28b4ff8828ef37c2',
	link:'https://www.facebook.com/photo.php?fbid=10153225354708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire jack of spades ',
	pct:null,
	desc:'A very nice chocolate flavour ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11130116_10153225365978745_2851210165116478542_n.jpg?oh=80db46c2ee8b3ebc4a25922715f44859&oe=57BF0198&__gda__=1470539718_1a4ee1712623e2f408f3f8355291b5fb',
	link:'https://www.facebook.com/photo.php?fbid=10153225365978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Crisp ',
	pct:5.4,
	desc:'More harsh than crisp. A little bit more bitter than it should be ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11084248_10153225365988745_6811395875070848425_n.jpg?oh=1ee029d58d3572b9dfe87027bc3048be&oe=57BAAD69&__gda__=1471109020_fa936a2cd7b631c0c872452602b5d3d9',
	link:'https://www.facebook.com/photo.php?fbid=10153225365988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Globe Premium Draught ',
	pct:4.6,
	desc:'Standard lager. Like the can though ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/14716_10153225365973745_9134185236353368363_n.jpg?oh=4829e0fb1cc23e84c820ed106f0d6474&oe=57B8F8E7&__gda__=1471917774_cddbaf38ffa644747b404fda63491493',
	link:'https://www.facebook.com/photo.php?fbid=10153225365973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Sweet action ',
	pct:5.2,
	desc:'Nice sweet hoppy taste ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11149483_10153225366508745_5535316799902667426_n.jpg?oh=38c7249d430ffb58bb3bfa06a9002a8d&oe=57B656A7&__gda__=1471327225_2dbea7fe01c2cb11ad24166c1259fc1d',
	link:'https://www.facebook.com/photo.php?fbid=10153225366508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ single hop nelson ',
	pct:8.0,
	desc:'Perfect level of bitterness ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11130263_10153225366548745_4430696674965972638_n.jpg?oh=11c5e3267e546088c7e85e45e30bb279&oe=57B02645&__gda__=1470727963_2cd197be008c3f083bc1b9f1a697dc10',
	link:'https://www.facebook.com/photo.php?fbid=10153225366548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La guillotine ',
	pct:8.5,
	desc:'Absolutely amazing 1',
	score:0,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11156123_10153225366453745_4053445365399151631_n.jpg?oh=10c2a388672bcd3162088b8998a87c15&oe=57B1D678&__gda__=1471681318_4facda832a5457c0c80ce215fe6c6ed3',
	link:'https://www.facebook.com/photo.php?fbid=10153225366453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White choc & raspberry pils ',
	pct:5,
	desc:'Really mild on the choc and raspberry so the beer flavour isn\'t overwhelmed ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11027435_10153225366763745_2151282598672247864_n.jpg?oh=8981461bc16c9b85d816376b707a94e1&oe=57A4158B&__gda__=1471418226_213315f4d1265e0cb696f31165c16f65',
	link:'https://www.facebook.com/photo.php?fbid=10153225366763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hargreaves hill pale ale ',
	pct:4.9,
	desc:'Like a winery pretending to make a beer ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/247107_10153268256703745_3742881335896716752_n.jpg?oh=436845d23a18dc2e4e37620a32bbddfd&oe=57B2CF2C&__gda__=1469847806_b9d3e6a2d0428c0ce8d56be3f82660df',
	link:'https://www.facebook.com/photo.php?fbid=10153268256703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Global Warmer ',
	pct:7.0,
	desc:'Tangy, strong ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11196336_10153268256713745_6680283658542121771_n.jpg?oh=d7f6f01de5bcf3ccfc109786749d29f5&oe=57AD51ED&__gda__=1470415795_3174abed7298efd14483ebee1df5d4f8',
	link:'https://www.facebook.com/photo.php?fbid=10153268256713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cristal ',
	pct:4.9,
	desc:'A beer that goes down easy when you’re in a rush ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11206000_10153268256698745_6063621327290165780_n.jpg?oh=a1046c56a894f555ad7a35763a857131&oe=57BEC7FD&__gda__=1471623755_6b9ddadf5ac6e715df83368f72162f8a',
	link:'https://www.facebook.com/photo.php?fbid=10153268256698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra Italia 1906 ',
	pct:4.8,
	desc:'mild and refreshing ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/11205086_10153268257048745_439269609069418781_n.jpg?oh=25bcf66a993a25116edcf9338af2684e&oe=579B9A19&__gda__=1472053862_7ef746b4e5a1d826f6980b60c9da806d',
	link:'https://www.facebook.com/photo.php?fbid=10153268257048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat fancy pants ',
	pct:5.2,
	desc:'Really tasty but also easy to drink ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/603733_10153268257103745_7684396821090282649_n.jpg?oh=0b45795237950fbba2b71501bd029aa5&oe=57B9E208&__gda__=1469897083_356abc931cb6eaf5e9d257d995ad6eef',
	link:'https://www.facebook.com/photo.php?fbid=10153268257103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers premium lager ',
	pct:4.8,
	desc:'Not nearly as good as their other offerings ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/11178189_10153268257113745_2486098126429601238_n.jpg?oh=bd0f7b969e5605e237feac6ccbe1f55e&oe=57E79228&__gda__=1470333760_61bfeb9b76478f59cdac645f66965efa',
	link:'https://www.facebook.com/photo.php?fbid=10153268257113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pixel 480p ',
	pct:4.8,
	desc:'Pretty good all round ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11209719_10153268257203745_8370119320216109443_n.jpg?oh=9d8e3fc5329944eb5b8b2681d682a7d2&oe=57B4422D&__gda__=1472082648_719c18b75f013184a27a3fc2cccd10c3',
	link:'https://www.facebook.com/photo.php?fbid=10153268257203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay alpha pale ale ',
	pct:5.2,
	desc:'Standard Matilda bay beer ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10659329_10153268257393745_1308545288385225140_n.jpg?oh=ec89a4e044c33bc1ee822ca625eceafe&oe=579EC29E&__gda__=1470103654_845709d34aa9cc945d5de1195702dcc1',
	link:'https://www.facebook.com/photo.php?fbid=10153268257393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quiet deeds white ipa ',
	pct:6,
	desc:'A strange combination. Maybe not quite one I could get used to ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/q84/p480x480/11053929_10153268257438745_724512553237905656_n.jpg?oh=0bcaccdc965f442d7898deb6c5b32a4d&oe=579B8915&__gda__=1471002539_1b074a8f0effd3d2cfcf6ddcefabfbd7',
	link:'https://www.facebook.com/photo.php?fbid=10153268257438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Foo brew ',
	pct:5.0,
	desc:'Not a thing right with this drink except that it\'s beer ',
	score:2,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11182107_10153268257443745_4399139666821958419_n.jpg?oh=3b2c1ad5e0d8540231d85003ed016536&oe=57B40273&__gda__=1471392557_fbfd846b79e23167be515fbe097d97c8',
	link:'https://www.facebook.com/photo.php?fbid=10153268257443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo Brew Hefeweizen ',
	pct:5.1,
	desc:'Wouldn’t want another ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11182307_10153268257633745_3691539250579390263_n.jpg?oh=2abdd49a575e865c14eae692d00a118c&oe=57B2DD15&__gda__=1470630624_681d408fdf5a20ef2ed91779fb57a0e8',
	link:'https://www.facebook.com/photo.php?fbid=10153268257633745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innis & Gunn original ',
	pct:6.6,
	desc:'Not what I expected. Sweet and strange ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11196243_10153268257703745_5034055497574956739_n.jpg?oh=87a096c968b13938d120f1a55aec673c&oe=57A03501&__gda__=1470361695_7af5f72ac784ee121c29b2310fc5505b',
	link:'https://www.facebook.com/photo.php?fbid=10153268257703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn golden ale ',
	pct:4.5,
	desc:'Not one you see around very often ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11178208_10153268265353745_1241728649667354734_n.jpg?oh=d9c76a19efa76f743c67dd1de9d843d9&oe=57A849AB&__gda__=1471984980_747f51eecc0499946e8493da89e74eae',
	link:'https://www.facebook.com/photo.php?fbid=10153268265353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pikes pilsner lager ',
	pct:4.5,
	desc:'No fish taste at all ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11205492_10153268265378745_5159414108787972846_n.jpg?oh=2ba7efe96e1a7ccfd466be1c1970ed5c&oe=57BF1D41&__gda__=1471192249_108fa9c627f7556a5b406a826c6573be',
	link:'https://www.facebook.com/photo.php?fbid=10153268265378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Altenmünster ',
	pct:4.9,
	desc:'Such a cool name and bottle ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11182040_10153268265373745_4318030430351182427_n.jpg?oh=15a4f833373eb725ae4731f6ac77b21b&oe=57A426D9&__gda__=1471334535_9cd38f01d7505f5e8f50bb4ca80b64ff',
	link:'https://www.facebook.com/photo.php?fbid=10153268265373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love tap double lager ',
	pct:5.9,
	desc:'Have to love a nice strong lager ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11206105_10153268265533745_1005147961464463270_n.jpg?oh=1c0124895a8243b1f79473c1130d1db6&oe=57AF8DAA&__gda__=1470379871_8062e72c9a8b4872b0b8e05f749955aa',
	link:'https://www.facebook.com/photo.php?fbid=10153268265533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu schloss hell ',
	pct:4.9,
	desc:'Got it from Aldi, wasn’t expecting much ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10356419_10153268265598745_7305179253101068466_n.jpg?oh=db97620cea7fab389493e50200476b1b&oe=57BB5BC3&__gda__=1471333686_f1c730197a2a5cef9ae1927e0780a9f0',
	link:'https://www.facebook.com/photo.php?fbid=10153268265598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pistonhead lager ',
	pct:4.6,
	desc:'Pretty average lager ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11149264_10153268265618745_5697774882754067421_n.jpg?oh=de49c1abd74e74b10943788ccb1e981d&oe=57B52F0A&__gda__=1471861076_162fc40fe9e8dde234a4f7d2e2a46f6c',
	link:'https://www.facebook.com/photo.php?fbid=10153268265618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads break water ',
	pct:4.5,
	desc:'Slightly better than your standard ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11178233_10153268265658745_1088283222834381460_n.jpg?oh=e6821402a8893ec3ef5f7fde6920dce7&oe=57A0F06C&__gda__=1471552654_be5b19d124ed2928ad4a5988265596a9',
	link:'https://www.facebook.com/photo.php?fbid=10153268265658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos Equis Ambar ',
	pct:4.5,
	desc:'Has more of a Polish flavour than Mexican ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q81/p480x480/10421550_10153268279173745_3566359759975585153_n.jpg?oh=f3feaf9b9fd374ec9af7647e44d05c1e&oe=57BD304A&__gda__=1470779354_7c94e13e6282e5c8e8774949526ad8f8',
	link:'https://www.facebook.com/photo.php?fbid=10153268279173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington pale ale ',
	pct:4.7,
	desc:'One of the best all round beers I’ve tasted ',
	score:9,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11188184_10153268279118745_1035950770576096625_n.jpg?oh=717eac0f1301b9cb1233167741c6b5eb&oe=57A52591&__gda__=1471970511_2844cef9cb9dd8ac842329576031c9ce',
	link:'https://www.facebook.com/photo.php?fbid=10153268279118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'El Loco ',
	pct:4.6,
	desc:'Even worse than Corona ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11017350_10153268279168745_6892560688839392935_n.jpg?oh=282bda1bc0f81e286e794983d55c4ae3&oe=57B5D650&__gda__=1471661843_3acf960db3e8d94491728fd951dbacb2',
	link:'https://www.facebook.com/photo.php?fbid=10153268279168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Melbourne bitter ',
	pct:4.6,
	desc:'Of the standard Australian beers this one ranks pretty low ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13530_10153268279263745_7432093397688380903_n.jpg?oh=cad10751edcc9b3db01298dd7591d1cf&oe=57AF02E4&__gda__=1474749133_b07d8b0342097f3b8ed70079feede89b',
	link:'https://www.facebook.com/photo.php?fbid=10153268279263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saint-Mihal ',
	pct:4,
	desc:'Pretty mild but overall ok. Better than expected ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10985916_10153268279573745_5444654809518299041_n.jpg?oh=720ca3230a5f709eb0530a09ca7d9ed3&oe=57A2FADF&__gda__=1472101930_2d732a17bdd8ffd7cc534a84250729a2',
	link:'https://www.facebook.com/photo.php?fbid=10153268279573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit White Ale ',
	pct:4.5,
	desc:'One of the nicest white beers I’ve had. Another winner from White Rabbit ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1932304_10153268279663745_7818150974405781457_n.jpg?oh=d3336431d5a721c2038b57be8510dc06&oe=57B7FD9B&__gda__=1469860759_d6b3befde810a3a9aeef34ac1acf446c',
	link:'https://www.facebook.com/photo.php?fbid=10153268279663745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour reserve amber ale ',
	pct:5.2,
	desc:'This tastes like a dark ale but isn’t supposed to. The taste is ok but I’m worried by how badly this is labeled. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/q82/p480x480/10403262_10153268279703745_1182589880637374526_n.jpg?oh=532889c204d42595aebbe3fb313e21e9&oe=57ACF919&__gda__=1470247962_3efadbf81ff5108ece24eaba166150c8',
	link:'https://www.facebook.com/photo.php?fbid=10153268279703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Pale ale ',
	pct:4.5,
	desc:'A really mild pale ale but with a great smooth flavour ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10421490_10153268279843745_9177649199173204206_n.jpg?oh=6793b4fe02232295cf2710a1bcbc4f32&oe=57B6CA12&__gda__=1470931203_2ae4d634b9918a51044968c160b9e359',
	link:'https://www.facebook.com/photo.php?fbid=10153268279843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Summer ale ',
	pct:4.5,
	desc:'Another winner from steamrail but not as nice as the pale ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11062864_10153268279933745_3157338283510709307_n.jpg?oh=3a12dec499891c284a3c6f73e2688fc5&oe=579E1572&__gda__=1471570276_0ec22fac42e055289073a88b0faecfdc',
	link:'https://www.facebook.com/photo.php?fbid=10153268279933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail amber ',
	pct:4.5,
	desc:'Not as good as the rest of the range ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11109179_10153268279943745_3245706738598167550_n.jpg?oh=5fd4a3bc982aef9461d3de930bc6babf&oe=57BEB02D&__gda__=1471118287_339f9236b8d5335b299f6601c73b48c3',
	link:'https://www.facebook.com/photo.php?fbid=10153268279943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s southern pale ale ',
	pct:4.6,
	desc:'Like a very mild pale ale. Refreshing ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/t31.0-0/p480x480/10498559_10153268294398745_8634108256899324103_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grand ridge Moonshine ',
	pct:8.5,
	desc:'The description on the bottle makes this sound awful but it’s not too bad. Could be a little bit smoother but the overall flavour is really nice ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10462829_10153268294448745_4601669711477307040_n.jpg?oh=4922359e196be5d01f88357ab43257fe&oe=57B1FBF2&__gda__=1471326020_09b4a27f5d45a8a6edc4612cd4548821',
	link:'https://www.facebook.com/photo.php?fbid=10153268294448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers Arms Keeper’s lager ',
	pct:4.6,
	desc:'A sweet and quite flavourful lager ',
	score:7,
	img:'https://scontent.xx.fbcdn.net/hphotos-xaf1/l/t31.0-0/p480x480/1537711_10153268294383745_2698680166388774656_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294383745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry’s Brew am I ',
	pct:5.0,
	desc:'Young henry’s haven’t let me down yet ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/11204930_10153268294698745_7123736277636761157_n.jpg?oh=fca40b8ee6093872674f528185c7cd11&oe=57BEEFDE&__gda__=1471460610_96c17ee45bd30805eca1262e8c2c301b',
	link:'https://www.facebook.com/photo.php?fbid=10153268294698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'’69’ Summer Ale ',
	pct:4.6,
	desc:'Surprisingly happy with this one ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/11148611_10153268294718745_4388827143167133097_n.jpg?oh=4b35579427bb83ed740b79c31a7e5eed&oe=57A2CEA9&__gda__=1471234472_e4d503e97c941ceaf71041e5a5624216',
	link:'https://www.facebook.com/photo.php?fbid=10153268294718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'New Englander Hop Cannon IPA ',
	pct:6.6,
	desc:'Perhaps a few too many hops for me ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11202600_10153268294733745_5223220854392756415_n.jpg?oh=9a86b7a9ec25da14ce81b08884578ca8&oe=579B6E37&__gda__=1471564137_1b094cc21b4f88f83d80d05aedf0efb3',
	link:'https://www.facebook.com/photo.php?fbid=10153268294733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ÜberBräu ',
	pct:4.0,
	desc:'Standard cheap beer ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10346275_10153268294828745_7444781895935179067_n.jpg?oh=30ce0e33bdc68ce151f9f527125da0eb&oe=57A5AB80&__gda__=1471371998_ac1253257b67f1fa27603c0454b1d4ef',
	link:'https://www.facebook.com/photo.php?fbid=10153268294828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain pale ale ',
	pct:4.9,
	desc:'Mmm, pale ale ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11173400_10153268295048745_1794514503671401328_n.jpg?oh=b88a1bc955522fdbb4a04ea08e1d3ee9&oe=57AFE39E&__gda__=1471154725_258738fb3a27b4bd2df0e70f3a56070d',
	link:'https://www.facebook.com/photo.php?fbid=10153268295048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA St Josephs ',
	pct:9.5,
	desc:'Not the best triple but a nice flavour none the less ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/11025707_10153268294958745_151299719186905005_n.jpg?oh=e933956b6d160487b1c0f86e3b601ec2&oe=57E70A6D&__gda__=1469765766_250aa7318f48f8e520cd6951beb611da',
	link:'https://www.facebook.com/photo.php?fbid=10153268294958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue Santa’s private reserve ale ',
	pct:6.0,
	desc:'A hearty beverage ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11149464_10153268295053745_1257589284621380857_n.jpg?oh=824ad7a0ce2e31a466019a5a9d0dfdc3&oe=57B55C9E&__gda__=1470344640_afa8e4c6e4560d9e1e10f353474589ef',
	link:'https://www.facebook.com/photo.php?fbid=10153268295053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Brewery Seasonal Ale ',
	pct:4.7,
	desc:'Not up to the normal lord nelson standard ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11150609_10153268295143745_4412554411779312688_n.jpg?oh=27502c2402d9f805a042120baa5d5c6e&oe=57A787A2&__gda__=1470030679_20ab36320ee97e1e049d29f43e5e17dd',
	link:'https://www.facebook.com/photo.php?fbid=10153268295143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ale house pale draught ',
	pct:4.2,
	desc:'Too much like a lager ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11212761_10153268295198745_2192040651986082448_n.jpg?oh=3b467b71d578ba3e881cafda24a39bc5&oe=57AEEC15&__gda__=1471732960_8fa1d10cd3a781fb21106335a86c7714',
	link:'https://www.facebook.com/photo.php?fbid=10153268295198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers growler ',
	pct:4.7,
	desc:'Mild sweet brown ale. Surprisingly easy drinking ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11148587_10153268299343745_976562173073925737_n.jpg?oh=159cf2ce74d5958b3079552f310cea6a&oe=57B41539&__gda__=1471290625_ffe1a67b79daf1e527ce0bea168b9ed6',
	link:'https://www.facebook.com/photo.php?fbid=10153268299343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s American pale ale ',
	pct:5.7,
	desc:'Was hoping for a hoppier taste. More of a pale ale for getting smashed ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/22311_10153268299368745_777193479112346497_n.jpg?oh=095384988d91498fc3a14b55db0f439c&oe=579C5572&__gda__=1470942407_073cc45eb448bd85a95471a384da0d12',
	link:'https://www.facebook.com/photo.php?fbid=10153268299368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers Kung foo lager ',
	pct:null,
	desc:'Like a tangy lager ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10428667_10153268299353745_7595281458401637305_n.jpg?oh=20f13de69d6b4aa35dbf1ef0bedcb874&oe=57BB27DD&__gda__=1470965311_a0756189b4469734739d880b725d1b6d',
	link:'https://www.facebook.com/photo.php?fbid=10153268299353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rising sun pale ale ',
	pct:5.0,
	desc:'Was expecting more from this. It’s the nice pale flavour but with too much harshness ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10985454_10153268299563745_9155074984245162225_n.jpg?oh=fd761741045f4956ccee0fad2a731eb0&oe=579E2D13&__gda__=1470778086_6adc9e9fd11d6286f440ac669316913f',
	link:'https://www.facebook.com/photo.php?fbid=10153268299563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maximus ',
	pct:5.8,
	desc:'Good towards the end ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11182152_10153268299603745_965318376264137516_n.jpg?oh=01fd172d38beb7d48e98033c000c9b8f&oe=57A71811&__gda__=1470408477_8a1997d61308b0f3637ffc2bfe497987',
	link:'https://www.facebook.com/photo.php?fbid=10153268299603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms journeyman ',
	pct:3.5,
	desc:'Nice and easy drinking, but still a mid strength ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11200596_10153268299613745_30462160346726619_n.jpg?oh=14c4338c420ae9c4580ab883d12610cc&oe=57AF70BE&__gda__=1471956825_1ecb670ad1dc79423d89025687717be0',
	link:'https://www.facebook.com/photo.php?fbid=10153268299613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit dark ale ',
	pct:4.9,
	desc:'Not what I usually expect from a dark ale ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/q81/p480x480/11168124_10153268299693745_7328518567704258929_n.jpg?oh=0a6ca32b0da2d853fa5ac9267d270457&oe=57BF0369&__gda__=1471332843_aa036f3f0f98256d8535241eea1036dd',
	link:'https://www.facebook.com/photo.php?fbid=10153268299693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liberty ale ',
	pct:5.9,
	desc:'Very nicely done. Great for a session beer ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11210416_10153268299813745_8323582624602808812_n.jpg?oh=1d4e991da6ec98cbad1c1b0f0818fcfc&oe=57B3078B&__gda__=1470643838_89fdbf193a9d7e6af9bc9ea2f6e8024c',
	link:'https://www.facebook.com/photo.php?fbid=10153268299813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam lager ',
	pct:4.9,
	desc:'A very flavourful lager. ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11174764_10153268299828745_5386835742329909663_n.jpg?oh=e88fd5b129c7644d7d1d97393a6c42c1&oe=57AE742E&__gda__=1470689238_5e4187760067ff5a1f7ebd1420f24198',
	link:'https://www.facebook.com/photo.php?fbid=10153268299828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boag XXX Ale ',
	pct:4.8,
	desc:'A solid flavour ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/q81/p480x480/11666075_10153438034333745_2014329694046827935_n.jpg?oh=58a5664f410eadfcb64d01d706a65a39&oe=57BC5FB2&__gda__=1469718393_063e1a45690518265d38cf1e962d5261',
	link:'https://www.facebook.com/photo.php?fbid=10153438034333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Žatec ',
	pct:4.6,
	desc:'Tastes more polish than Czech ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/11692789_10153438034343745_2933345002405640949_n.jpg?oh=1e5f4ba04f41a2371a4c46e8452f87b9&oe=57A94044&__gda__=1470645292_dec5a9620db6bf1efe3e00f3c202b6ac',
	link:'https://www.facebook.com/photo.php?fbid=10153438034343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fiji Bitter ',
	pct:4.6,
	desc:'Has a slight tang to it that you don’t get with Australian bitters ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11698631_10153438034358745_1791286718120294864_n.jpg?oh=0fb940d4900f7fecae6ca96136cb7397&oe=57AA5014&__gda__=1471027631_558a355b1b4198149d4827c1e34c51b5',
	link:'https://www.facebook.com/photo.php?fbid=10153438034358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Noble Pale ale ',
	pct:5.2,
	desc:'Was expecting much more. Just a plain lager ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/11202109_10153438034543745_2281064819509080771_n.jpg?oh=67db1703d42a422b5e2fc4a8d3c38e13&oe=57BB179E&__gda__=1470927503_e704d4a1e2f9ed22370c680e4b895500',
	link:'https://www.facebook.com/photo.php?fbid=10153438034543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail pilsner',
	pct:4.5,
	desc:'A bit too much like a standard lager ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/11667503_10153438034893745_6099533991518812550_n.jpg?oh=de7778a55f0c3a4ce257a3165db7c68f&oe=579C1124&__gda__=1471047157_f1a756e4e85e6062de22f3b77df64c34',
	link:'https://www.facebook.com/photo.php?fbid=10153438034893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds taco ',
	pct:5.2,
	desc:'The best wheat beer I\'ve ever tasted ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11693950_10153438034793745_2993920563621018004_n.jpg?oh=781c3d5e9dfea7ea49a56bf0f5877b7f&oe=57BA363D&__gda__=1472085189_37aba55288634c6ebb66353ac381bb93',
	link:'https://www.facebook.com/photo.php?fbid=10153438034793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Norman Australian ale ',
	pct:5.1,
	desc:'The logo looks dodgy but it\'s actually a nice mild pale ale ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11403010_10153438034973745_575409467690114271_n.jpg?oh=23174e2c4d65f130094cb7c636bee9be&oe=57AB9EEB&__gda__=1470870830_2bdde7d6418b471a404672e7a6f20eac',
	link:'https://www.facebook.com/photo.php?fbid=10153438034973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Blonde ',
	pct:4.6,
	desc:'As I expected a plain flavourless lager ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11703056_10153438035233745_914090365741131285_n.jpg?oh=954994da27d7e7ba750966d0ce6d1489&oe=57B22993&__gda__=1470049695_1159f030652a25a8e65e3748946d79ff',
	link:'https://www.facebook.com/photo.php?fbid=10153438035233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vonu Pure lager ',
	pct:4.6,
	desc:'Surprisingly good and well rounded ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11707520_10153438035303745_142890088110404042_n.jpg?oh=b148f53fcd1d52007d23043ba93edf12&oe=57A16191&__gda__=1470285114_480e124e7366e4b0df1b07b5c85910e9',
	link:'https://www.facebook.com/photo.php?fbid=10153438035303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'OB golden lager ',
	pct:4.8,
	desc:'A little more flavourful than normal german beer ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11665626_10153438035338745_1942830826260024445_n.jpg?oh=d9551df97cf4817ffe2cb01dcff1c2ad&oe=57B15D90&__gda__=1471118379_c8e0519449a42c5c2e73d7a94ec15ca9',
	link:'https://www.facebook.com/photo.php?fbid=10153438035338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kirin first press ',
	pct:5.0,
	desc:'A little better than a standard lager ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11026787_10153438035418745_3190886247129001905_n.jpg?oh=bcae4b235f85b45f0a3d6ead28fdbf1e&oe=57BA1A20&__gda__=1472136291_6c059eb923dcd2babf7c283bdf679f11',
	link:'https://www.facebook.com/photo.php?fbid=10153438035418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Černovar  Svetlé ',
	pct:4.9,
	desc:'A bit too malty ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11403435_10153438035523745_1440324413921244933_n.jpg?oh=94c2747fc8071771e2b25a8e262d92ab&oe=57A8E90F&__gda__=1471086071_799378617379c5ba4f2fca328cbe2e59',
	link:'https://www.facebook.com/photo.php?fbid=10153438035523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage Roads Single Fin ',
	pct:4.5,
	desc:'Floral and tangy. Much better than expected ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11737813_10153438035548745_1721256026335429959_n.jpg?oh=b044fb0a0df48d43b12ca2231b3d3e3f&oe=57B7D103&__gda__=1471595770_370153113efc8dce4a9cadc253e0680c',
	link:'https://www.facebook.com/photo.php?fbid=10153438035548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vailima ',
	pct:4.9,
	desc:'An all round terrible beer ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11140143_10153438035598745_277263619216109713_n.jpg?oh=010affb8dca75b7d7b4a7cfe7f59c78a&oe=57A68951&__gda__=1469822868_1ed3552373ab15fdede1914e253ce3c7',
	link:'https://www.facebook.com/photo.php?fbid=10153438035598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dry Hopped Pale Ale ',
	pct:5.4,
	desc:'Much hoppier than a normal pale ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11693847_10153438035713745_940540476039083000_n.jpg?oh=8f4e04f55490af5a5279d7fdc7c96cb2&oe=57A7E163&__gda__=1471257010_3df293696a4a2c7ced15447db7799212',
	link:'https://www.facebook.com/photo.php?fbid=10153438035713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Breaking the cardinal Rule ',
	pct:9.5,
	desc:'Not much of an IPA but a nice Belgian tripel ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11063592_10153438035963745_4745705285004081483_n.jpg?oh=ca345b960442065228fd9100daba02e7&oe=57BEAEE7&__gda__=1470408273_a57b8ee14584792850b9e6b92286351b',
	link:'https://www.facebook.com/photo.php?fbid=10153438035963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paddo pale ',
	pct:5.0,
	desc:'No idea how this can be called a pale ale. ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11665515_10153438035968745_4205414644516816644_n.jpg?oh=c30d0142e56ac479c996f7c3d7029947&oe=57B4C3CD&__gda__=1470195854_23a9691056704a8f4984868e5a05bc15',
	link:'https://www.facebook.com/photo.php?fbid=10153438035968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Royal Premium lager ',
	pct:5.1,
	desc:'Nothing premium about this ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11742655_10153438036023745_7783155327321003667_n.jpg?oh=6b4e5f16273dbd8713177a8c5b44ac5d&oe=57BE3E04&__gda__=1470205169_bbc6ca7ba30512c87c1bf73ece53a656',
	link:'https://www.facebook.com/photo.php?fbid=10153438036023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'William’s organic pale ale ',
	pct:4.5,
	desc:'A slightly bitter but well rounded pale ale ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/11234818_10153438036188745_6157946174058205755_n.jpg?oh=21314ef3dd902bf74a0aa5facf3d6fe7&oe=57B9B7A3&__gda__=1471224732_7b328440b65ebbc292c986986303b501',
	link:'https://www.facebook.com/photo.php?fbid=10153438036188745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses Chardonnay IPA ',
	pct:6.0,
	desc:'A mild IPA that really hits the spot. Nice floral aroma ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11071649_10153438036343745_3147415906093292508_n.jpg?oh=8a8c85c1f7d86f0e5ba7e64478aca23c&oe=57A33F34&__gda__=1470675831_aedc86dbf908a3705dd0d206e2bbee81',
	link:'https://www.facebook.com/photo.php?fbid=10153438036343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oatis ',
	pct:6.5,
	desc:'A little bit too sharp for me ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11667294_10153438036333745_6944136313097119915_n.jpg?oh=5672421144a1fc83fb9afaabbf501a06&oe=57A8C77A&__gda__=1470622521_8b7a4b5bad048f3d6c1006af634a2e15',
	link:'https://www.facebook.com/photo.php?fbid=10153438036333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bruce Malone ',
	pct:6.2,
	desc:'Ok, but something is just wrong ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p320x320/11665530_10153438036328745_3370491198453159853_n.jpg?oh=6e8725ba560f7a7c9db3b31ea39eecd9&oe=57B703AD&__gda__=1470817211_833e4c67e7c1c0d6e78ebf411fb9e1da',
	link:'https://www.facebook.com/photo.php?fbid=10153438036328745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big smoke wet hop IPA ',
	pct:null,
	desc:'Like the wet hop, need to find more ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/11233171_10153438036778745_7460779125459519208_n.jpg?oh=75a0b1a0fb416b031a31e283a86f74ff&oe=57BD9356&__gda__=1470832675_3bb390b85661b6377cf5c70a3550755f',
	link:'https://www.facebook.com/photo.php?fbid=10153438036778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camel\'s beard black sour ',
	pct:4.3,
	desc:'Like mixing black current juice with a beer ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10404258_10153438036873745_1054335218755238006_n.jpg?oh=f79073671704487fb85260f141931ca2&oe=57A62E6C&__gda__=1469781975_bcaa6e958394208ed16ee7e7d507809e',
	link:'https://www.facebook.com/photo.php?fbid=10153438036873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks brewing ESB ',
	pct:5.1,
	desc:'Bitter like an IPA but without the floral hoppiness ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11709549_10153438036878745_3892385374192512736_n.jpg?oh=2594be1647a0e98ddfd13050e3a59ea9&oe=579B1EB9&__gda__=1469923074_e0fe78f25cf58c255fd4b2d7368eb244',
	link:'https://www.facebook.com/photo.php?fbid=10153438036878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koshihikari rice beer ',
	pct:5.0,
	desc:'Amazing how similar this is to a normal lager ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11665487_10153438037018745_87412937068060294_n.jpg?oh=eda2d9336b471213c1992b48392d32ed&oe=57AB6250&__gda__=1471659278_8f6df64dfd127193b3292abb8229e24e',
	link:'https://www.facebook.com/photo.php?fbid=10153438037018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bastard son pale ale ',
	pct:4.8,
	desc:'Cross between a pale and an IPA ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11039309_10153438037053745_1453835514615000872_n.jpg?oh=171e32877ec0d53edf62d19926791566&oe=57999D9E&__gda__=1470749030_6070d8546bd312ffdd4a7f00e2e62eee',
	link:'https://www.facebook.com/photo.php?fbid=10153438037053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river red ale ',
	pct:6.5,
	desc:'A bit harsh for me ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/11403190_10153438037108745_3712451184954693803_n.jpg?oh=bd12218834e9ad4a3311781c469511b7&oe=57A102B5&__gda__=1470351284_4bd91e5da52f0fdd713c090e9746e3b9',
	link:'https://www.facebook.com/photo.php?fbid=10153438037108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dirty Bastard ',
	pct:8.5,
	desc:'A lot of flavour in this beer but it’s not quite right ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11707850_10153438037263745_7444067883763013637_n.jpg?oh=68448b57e1e7a43b2a5e4199ab5be6ae&oe=57AC3CD0&__gda__=1470224178_899d5ef44a52554f10e6bd4de50dbadd',
	link:'https://www.facebook.com/photo.php?fbid=10153438037263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry ',
	pct:3.5,
	desc:'A crappier version of the regular superdry ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11214280_10153438037523745_4286815657184147844_n.jpg?oh=4c31e2523a5380f1386d0a487e4706b0&oe=57B6E831&__gda__=1470339022_54084b5358e18edb502f5c948bd095dc',
	link:'https://www.facebook.com/photo.php?fbid=10153438037523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kooinda hop transfusion ipa ',
	pct:7.5,
	desc:'A very well balanced and floral IPA ',
	score:9,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11659318_10153438037553745_8784383877969678894_n.jpg?oh=d2daffac70756d53f5682b759c1044dc&oe=57A26CEB&__gda__=1470851348_66d189d30aef3e4c17c2d442a2e37b98',
	link:'https://www.facebook.com/photo.php?fbid=10153438037553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms spearhead pale ale ',
	pct:5.2,
	desc:'A bit of a let down. Doesn’t have what I expect from a pale ale ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11709660_10153438037763745_2498650749121162924_n.jpg?oh=540042d5c925a08f83f11d05207ef9a7&oe=579A7C5D&__gda__=1470427810_4b82c25d7eb8c215b33ca88a8db0a4a2',
	link:'https://www.facebook.com/photo.php?fbid=10153438037763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Pale Ale ',
	pct:3.8,
	desc:'Really mild for a pale ale but also really mild on alcohol as well. Guess it would be good if you’re just getting into beer. ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11666224_10153438038048745_8968016209259531630_n.jpg?oh=59c65689f560026f8bcae961a2598995&oe=57A55042&__gda__=1469993888_ac91b164b798255b69a73beddaf32a12',
	link:'https://www.facebook.com/photo.php?fbid=10153438038048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s session ale ',
	pct:3.5,
	desc:'Another good beer from Matso’s but still a mid strength ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/11709463_10153438038063745_514405702449925285_n.jpg?oh=1ed237efa639f6fb7594952d7758a9d5&oe=57A51CE0&__gda__=1469957375_c49c38f2ce73986b4fd0e26ef3568a24',
	link:'https://www.facebook.com/photo.php?fbid=10153438038063745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Golden ale ',
	pct:4.2,
	desc:'Zesty as promised. Really high quality all round ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11742900_10153438038123745_9100299621440264544_n.jpg?oh=e8357f727545f0650f7a3f2e2485e6eb&oe=5799A24E&__gda__=1471388859_169a55cd0a3b84bb4c8b165f184f6655',
	link:'https://www.facebook.com/photo.php?fbid=10153438038123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage Directors ',
	pct:4.8,
	desc:'Pretty run of the mill english ale ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11038987_10153438038293745_6155510821012537170_n.jpg?oh=0d06baabc8effb03662c38859d4908c8&oe=5799EE90&__gda__=1471928454_6fe1ca6923f122b914a192cc0aec78b4',
	link:'https://www.facebook.com/photo.php?fbid=10153438038293745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Pale ale ',
	pct:4.5,
	desc:'A really nice sweet hit of flavour ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11251267_10153438038418745_6850868855690668787_n.jpg?oh=0c018de82ec2681d14b3cc7f9fcdce19&oe=57AAC9F4&__gda__=1469854391_2e1f468846a1fbfdc0e4ec48b0a5f4b2',
	link:'https://www.facebook.com/photo.php?fbid=10153438038418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines ESB ',
	pct:5.4,
	desc:'One of the nicer ESBs that I’ve had. But perhaps I just don’t know what an ESB is supposed to taste like ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11666089_10153438038438745_5192310955658972737_n.jpg?oh=71baeb8872401224747abdbd8f7d9321&oe=57BAEDB4&__gda__=1470104298_95b5ff6ad55db5e6f4f06d4ffefcc846',
	link:'https://www.facebook.com/photo.php?fbid=10153438038438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad Sideways Pale ale ',
	pct:4.0,
	desc:'This beer is just all wrong. Tastes more like an IPA than a pale and the fizz is just strange ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11692763_10153438038563745_2254106052941195483_n.jpg?oh=ef62e0e9f3a4f059dc823821726f52f1&oe=57BA2135&__gda__=1470902732_67253f778a0c6cebff625607d401a127',
	link:'https://www.facebook.com/photo.php?fbid=10153438038563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carter premium lager ',
	pct:4.0,
	desc:'Nothing premium about this ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11707555_10153438038703745_5816121848155003948_n.jpg?oh=3f9e804b357f2d2f833ad1d170338f31&oe=57BCE145&__gda__=1470100922_0ff6ed7ce6ce6cafd5f88100b5595e5e',
	link:'https://www.facebook.com/photo.php?fbid=10153438038703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Claro ',
	pct:4.6,
	desc:'A kind of sweet Mexican lager ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/11694866_10153438038743745_8578021989993223626_n.jpg?oh=4554c5ff1056f54e771b79e4b0aba2bb&oe=57B80B40&__gda__=1470559634_b25a5a969690c6d4c9fb8c96d2d54787',
	link:'https://www.facebook.com/photo.php?fbid=10153438038743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Five hop ',
	pct:6.2,
	desc:'I really wanted to like this beer because of the cool bottle but the flavour just isn’t right. ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12105748_10153656863078745_1274782812792168869_n.jpg?oh=9e96d90435cf69ad9a9bcb92e36696af&oe=57A77A70&__gda__=1469669729_f4e39ef58f4483a955fc980379f36933',
	link:'https://www.facebook.com/photo.php?fbid=10153656863078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands pale ',
	pct:4.6,
	desc:'Missing the boxes it\'s trying to tick ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12109067_10153656863173745_3852359078129229777_n.jpg?oh=c849fedb19c5e5b968765b0586ac8c96&oe=579DC5FA&__gda__=1471364587_ce15e008b54995b4d1a397d89a678b64',
	link:'https://www.facebook.com/photo.php?fbid=10153656863173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands IPA ',
	pct:5.2,
	desc:'Nicer than the pale ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/q83/p480x480/12065989_10153656863158745_690647153577625477_n.jpg?oh=0d5eac70315c69d7bffcfa25f4e2b08a&oe=57E7A822&__gda__=1470332428_54128c00827b4ed814f3025a7fd437d4',
	link:'https://www.facebook.com/photo.php?fbid=10153656863158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bellerose Blanc ',
	pct:6.5,
	desc:'A fairly mild Belgian beer ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q83/p480x480/12141679_10153656863378745_27632216009951724_n.jpg?oh=5290f8eaf9f897c8130803199cdf89ec&oe=57A8F192&__gda__=1471107247_4aa4730bfc003ab47107cd45d4e5ed6c',
	link:'https://www.facebook.com/photo.php?fbid=10153656863378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fred Murrays IPA ',
	pct:5.6,
	desc:'Nothing special but nothing wrong with it ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/q86/p480x480/11988711_10153656863543745_374129198357931998_n.jpg?oh=3291bfbccbe0bc8d6588ac9156a73795&oe=57B753BF&__gda__=1470687332_a4141f443ab5d44bfd697ed9ca618c9f',
	link:'https://www.facebook.com/photo.php?fbid=10153656863543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh Brewing Co FIG JAM IPA ',
	pct:7.0,
	desc:'Has a strange aftertaste that completely ruins the beer ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10393668_10153656863593745_2358385457397680268_n.jpg?oh=8cd740dee6951c060b672412b6800dd8&oe=57B8C25C&__gda__=1471358466_74fca948761e92f3b2ce78035f575d6a',
	link:'https://www.facebook.com/photo.php?fbid=10153656863593745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDevil IPA ',
	pct:6.7,
	desc:'A pretty average IPA which slightly misses the mark ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/12072602_10153656863733745_7824943187452200119_n.jpg?oh=be96cf8bf57086b8546e6b1ab5a4cad6&oe=57A1B494&__gda__=1471396321_68596dbfc7ae034d93bdfca6a380a157',
	link:'https://www.facebook.com/photo.php?fbid=10153656863733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada 2015 Beer Camp ',
	pct:7.0,
	desc:'Not a favourite but a well rounded flavour ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12105717_10153656863923745_5748636982943209878_n.jpg?oh=cc96e2f4d661910280053251a7c3101f&oe=5799BCD7&__gda__=1470417878_c954df32649e88d1fcc9c143281ab4e9',
	link:'https://www.facebook.com/photo.php?fbid=10153656863923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wahoo summer lager ',
	pct:4.2,
	desc:'Water with a hint of beer. Good for a summer day ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115651_10153656864028745_2911616261438807210_n.jpg?oh=49944634fd276b35b0fc7f921fa5e236&oe=57B5563C&__gda__=1471420894_d22d00722c22360820f621e25d461ab1',
	link:'https://www.facebook.com/photo.php?fbid=10153656864028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy yak ',
	pct:4.2,
	desc:'I think the creators were lazy ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12096246_10153656864118745_718405220444766067_n.jpg?oh=58cd005b6c364080166fe21ff05aadee&oe=579F80AE&__gda__=1471946902_06d3c189ff1e43e4ed1bdd346bb333e7',
	link:'https://www.facebook.com/photo.php?fbid=10153656864118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys darling pale ale ',
	pct:4.4,
	desc:'Not that different from a new ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12107775_10153656864253745_3676978926907656134_n.jpg?oh=f742b045d13ae54435f9afca45ada307&oe=57ABB273&__gda__=1470940305_8f14d361496f533eab0f27707b22f1e9',
	link:'https://www.facebook.com/photo.php?fbid=10153656864253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn Pale Ale ',
	pct:4.7,
	desc:'Decent but there’s just a little something wrong ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12112425_10153656864393745_4992271544321247491_n.jpg?oh=363d548fca865cc56a73d77c2b1d8377&oe=57B38448&__gda__=1470643626_80c433e5016d91d11e9e12d6d84c407d',
	link:'https://www.facebook.com/photo.php?fbid=10153656864393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river Jamaica Ale ',
	pct:5.6,
	desc:'Mild but with an underlying taste that’s really nice ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12112175_10153656864428745_274214784974027443_n.jpg?oh=9e88dc21595b7682069d115f43be0478&oe=57A556A7&__gda__=1469833688_412e80b6aa30e336d155547135197346',
	link:'https://www.facebook.com/photo.php?fbid=10153656864428745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Hop Hunter IPA ',
	pct:6.2,
	desc:'Very hoppy with a nice finish ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12115843_10153656864518745_6379524063255293794_n.jpg?oh=932a3a808301f88a6075147061adf857&oe=57A13775&__gda__=1470915267_f36cdd9b96978ecd928bd7053161895f',
	link:'https://www.facebook.com/photo.php?fbid=10153656864518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat surefoot stout ',
	pct:5.0,
	desc:'A fairly mild stout ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12115556_10153656864648745_1260864511539950726_n.jpg?oh=811231f2963f684064f837b9cd23bbeb&oe=57B8F0D5&__gda__=1471136212_2049175fc6739667f72087363bbb1dcf',
	link:'https://www.facebook.com/photo.php?fbid=10153656864648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge Road Bling IPA ',
	pct:5.8,
	desc:'Lacking the rounded finish that I was hoping for, but not too bad ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/10350421_10153656864623745_1423000334986932771_n.jpg?oh=96daa08879feab7f3f32a208c898aea7&oe=57BAF148&__gda__=1469988727_d6da63c96427991272bb5d060c460ab1',
	link:'https://www.facebook.com/photo.php?fbid=10153656864623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon boy golden ale ',
	pct:4.5,
	desc:'Has a little bit of paleness to it ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12112481_10153656864773745_7414480192728397600_n.jpg?oh=a0c3a437e3df7fa9dd8df955d7b99ec9&oe=57B21A45&__gda__=1471674436_154d9b8401f8761942013bb78394f4b3',
	link:'https://www.facebook.com/photo.php?fbid=10153656864773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Original special blonde beer ',
	pct:8.6,
	desc:'Super strong, comes in a giant can and tastes better than normal lager. An all round winner. ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12079418_10153656865038745_406494349310437104_n.jpg?oh=3beb7b004d7670f927cf52e7d3a687e6&oe=57A74826&__gda__=1469674282_ffcb814e41b91036ab22c3672f85e151',
	link:'https://www.facebook.com/photo.php?fbid=10153656865038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s hop ale ',
	pct:6.0,
	desc:'Strong and bitter, could do to be a bit more floral ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12143171_10153656865058745_383441333102974608_n.jpg?oh=d22fa2c007a9f907a6a41ee0b47d0617&oe=57A88119&__gda__=1472097557_b00125394af10081588fb00b4e3a61bd',
	link:'https://www.facebook.com/photo.php?fbid=10153656865058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers ',
	pct:5.0,
	desc:'The same as all the other thai beers ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/q81/p480x480/12106825_10153656865098745_7827402413417902820_n.jpg?oh=1ff0ca34025555bb574f9f66443ef03b&oe=57A45571&__gda__=1474801655_810f2d2960e75a89a8da6310f844d459',
	link:'https://www.facebook.com/photo.php?fbid=10153656865098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Federbräu ',
	pct:4.7,
	desc:'Has the flavour of a german beer but the quality is slightly lacking ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q86/p480x480/12115906_10153656865258745_5285972944996147053_n.jpg?oh=63aaa5db2651d3b2c6c9987de3857ce0&oe=57BD5636&__gda__=1470564823_b6751d60600b6ddc762642886e191d69',
	link:'https://www.facebook.com/photo.php?fbid=10153656865258745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ICing grapefruit ',
	pct:4.0,
	desc:'Not sure how this qualifies as a beer but it\'s pretty nice regardless ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12109080_10153656865268745_8515065510187069262_n.jpg?oh=2bd620467d39a29b8622b1300217aca6&oe=57AE38AF&__gda__=1469894937_4667a4eb6421bc58db4c3a6f6ddeea2d',
	link:'https://www.facebook.com/photo.php?fbid=10153656865268745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Phuket ',
	pct:5.0,
	desc:'A little bit more tangy than other Thai beers ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q81/p480x480/12118934_10153656865338745_4802874236575690852_n.jpg?oh=25be33e877fe4a930c1c9a306eaadd25&oe=57B0CAAB&__gda__=1471943227_cf7d1ad4c0e8af614bfa0573f837cb9d',
	link:'https://www.facebook.com/photo.php?fbid=10153656865338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao dark lager ',
	pct:6.5,
	desc:'Doesn’t really taste like a dark lager, just a really crisp and clean lager ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10888489_10153656865543745_7177566089678444243_n.jpg?oh=18e07988749662a9f8a5ffbeb95706c2&oe=57A51D29&__gda__=1470146518_decd71e5a9a54a5675e20d2eb6f9b227',
	link:'https://www.facebook.com/photo.php?fbid=10153656865543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers X-tra ',
	pct:6.0,
	desc:'A slightly stronger and nicer version of the regular cheers ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/11201812_10153656865613745_2836886776655090085_n.jpg?oh=2a08237f899c53ab78c61c7290a21294&oe=57A35A38&__gda__=1469999657_1fed4494678973e0668e997a04cc2f8e',
	link:'https://www.facebook.com/photo.php?fbid=10153656865613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel Pale Pilsen ',
	pct:5.0,
	desc:'Filipino version of San Miguel. Not nearly as nice as the Spanish version ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/q86/p480x480/12108847_10153656865618745_952249772663413561_n.jpg?oh=9ee1aafef861ca975ffa1e91b7c911ad&oe=57E7E0C7&__gda__=1469685737_8bcba16a24074bf28c51b70b535d48d6',
	link:'https://www.facebook.com/photo.php?fbid=10153656865618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The fox mid ale',
	pct:null,
	desc:'A microbrew copy of every other tasteless mid strength lager out there ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12096074_10153656865793745_4213334596574344775_n.jpg?oh=86b166e32ee3ab83662ad4c45a87b480&oe=57BDEF71&__gda__=1469921632_8f6d4bcd791486788fc9d2d196b358db',
	link:'https://www.facebook.com/photo.php?fbid=10153656865793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XXXX bitter ',
	pct:4.6,
	desc:'So hard to find the full strength XXXX even in QLD. And it\'s easy to see why. Needs a shot of vodka like in the old days ',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12108168_10153656865913745_802278422732824770_n.jpg?oh=d324cabcbce1d5b820c06d73e9b7880c&oe=57A1AD8A&__gda__=1469716513_e3ac3188a8430cb63f807946fe7e39de',
	link:'https://www.facebook.com/photo.php?fbid=10153656865913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės vyšniu kriek ',
	pct:5.0,
	desc:'A cherry beer. A little bit too see to drink much but nice in small doses ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12116003_10153656865943745_8818428390735256762_n.jpg?oh=7a067746593a634f2fee5c1aab3a2526&oe=57BDE61E&__gda__=1471696415_37d83415e33cf33ba7fe787c3f863a7a',
	link:'https://www.facebook.com/photo.php?fbid=10153656865943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis grand select ',
	pct:5.4,
	desc:'Standard lager ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115501_10153656866208745_1270989772264309732_n.jpg?oh=7d88b0cc4c25da3040a4392c4f428bb2&oe=579D59A3&__gda__=1471920705_9f05cecbb09ea353d908ceaf5fe1d7fc',
	link:'https://www.facebook.com/photo.php?fbid=10153656866208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point the way IPA ',
	pct:5.9,
	desc:'Really good example of an IPA ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12088452_10153656866578745_7251403189729284400_n.jpg?oh=8674c72ff587c08efdff4e817f6331d0&oe=57B36512&__gda__=1470770928_f6107a4115fae1cde8d5375b324e386b',
	link:'https://www.facebook.com/photo.php?fbid=10153656866578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Thanks captain obvious IPA ',
	pct:5.8,
	desc:'Gotta love citra hops ',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12112199_10153656866448745_6538817725943333095_n.jpg?oh=e6e28622b19dfe8cd088fe34517e43b7&oe=57A93932&__gda__=1470262835_8f409f1182ad1b7de85f21886784c851',
	link:'https://www.facebook.com/photo.php?fbid=10153656866448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner kristallweissbier ',
	pct:5.4,
	desc:'Very crisp for a wheat beer ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115843_10153656866648745_4612566258079331508_n.jpg?oh=90a1e0d5982103df6cb1f98996a24c68&oe=579A197C&__gda__=1470841758_ee2e071310fb72e28c3a637735286800',
	link:'https://www.facebook.com/photo.php?fbid=10153656866648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noisy minor anzus IPA ',
	pct:6.0,
	desc:'A bit of a let down, just too bitter ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12088432_10153656866828745_7848120632268756477_n.jpg?oh=c2bbb5558e590a675219659d2ea0a418&oe=579B95B6&__gda__=1470210471_70e8471e5dd2fbf7e55bf2497267531f',
	link:'https://www.facebook.com/photo.php?fbid=10153656866828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Martens Pils ',
	pct:5.0,
	desc:'A good session beer ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12072622_10153656866868745_684969190381396266_n.jpg?oh=ac2e20aaff537cc7e01fcd7753c5c87d&oe=57AF282A&__gda__=1472048422_671e3633ac69ac03d44666327f683419',
	link:'https://www.facebook.com/photo.php?fbid=10153656866868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chimay red ',
	pct:7.0,
	desc:'Well known but not the best example of a belgian dubbel ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1554374_10153656866968745_899111329413653237_n.jpg?oh=0dcdd9a1f6bb912ca810925c58d3b247&oe=579A927E&__gda__=1469771372_814694761bc8724c5b8bc10049cfdf12',
	link:'https://www.facebook.com/photo.php?fbid=10153656866968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds bantam IPA ',
	pct:4.7,
	desc:'My biggest disappointment so far from two birds. ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115580_10153656867073745_1898684720680152438_n.jpg?oh=39a5f79095fa7e90c68a061a2e121298&oe=57A521FA&__gda__=1470966040_b3da649379ddaba79e80b6a05451cfb9',
	link:'https://www.facebook.com/photo.php?fbid=10153656867073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew cult hop zone ',
	pct:5.0,
	desc:'Very good IPA but not sure if it\'s a good session beer ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12079324_10153656867078745_2445263991582775788_n.jpg?oh=277b919b7e4c268f43406e10f853adae&oe=57BBBD84&__gda__=1471313019_7cb77387a876244d6cb99c38f3b95284',
	link:'https://www.facebook.com/photo.php?fbid=10153656867078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult spoiler alert ',
	pct:4.5,
	desc:'A little bit of a let down from the IPAs ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12107838_10153656867113745_341030388742417750_n.jpg?oh=60abd36f4aa7bac3c09d767555bf4242&oe=57A8443A&__gda__=1471237265_f0e3f7c784b66b45f703ae9137487651',
	link:'https://www.facebook.com/photo.php?fbid=10153656867113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade pale ale ',
	pct:4.7,
	desc:'A regular beer pretending to be something more ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12140701_10153656867523745_8057771070522060863_n.jpg?oh=ebb42ffb27182137f36c77af8da7bc8e&oe=57A0062C&__gda__=1470794797_11f3b57a290748bba202d224396152d0',
	link:'https://www.facebook.com/photo.php?fbid=10153656867523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire nine tails ',
	pct:5.0,
	desc:'Pretty good all round ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/12074484_10153656867603745_6432235869019497791_n.jpg?oh=1aaa4fbaf41eb1ed8cb15e4c2fee67d7&oe=57A9D352&__gda__=1470419751_e9a4604726f438a59e5f4b029a4faf12',
	link:'https://www.facebook.com/photo.php?fbid=10153656867603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Celia ',
	pct:4.5,
	desc:'Slightly bad czech lager. But at least it’s gluten free ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12119170_10153656873518745_1645193236829467007_n.jpg?oh=9251415f6137916aadc446cf419552b8&oe=57998CD6&__gda__=1471301847_8b5fef0599cd4b4846ff70527381f706',
	link:'https://www.facebook.com/photo.php?fbid=10153656873518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxx dry ',
	pct:5.0,
	desc:'Standard ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12107835_10153656873528745_2876365020596691425_n.jpg?oh=c520aeacf934425ee8c719a982d563b6&oe=57B02C9B&__gda__=1471882394_1f318c9722d3fa1f9af14f08dc52c08b',
	link:'https://www.facebook.com/photo.php?fbid=10153656873528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn amber ale ',
	pct:4.7,
	desc:'A bit too bitter ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12109019_10153656873578745_8374191481709518736_n.jpg?oh=ee58ec831cc0e5c84e2680d426ded33c&oe=579F2C6E&__gda__=1470279023_ccfbf087b9657ffcb4f9b210d4884f49',
	link:'https://www.facebook.com/photo.php?fbid=10153656873578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Pointers pale ale ',
	pct:4.2,
	desc:'A very well rounded pale ale but not that much flavour ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12119151_10153656873648745_4254619746116923719_n.jpg?oh=bf00cb65cae792513713b85b148f7a62&oe=579CBF87&__gda__=1474748294_6ba828c1e566a4ee8f0fa1d31490a1df',
	link:'https://www.facebook.com/photo.php?fbid=10153656873648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner helfe weissbier ',
	pct:5.4,
	desc:'A very mild flavoured wheat beer ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/12509736_10153811610538745_2189727718735863015_n.jpg?oh=5d840c260f1462f8cc55f8254bd29eb1&oe=579FBB1B&__gda__=1470325028_7179bc573a4e5c20cc59bbb031fd1449',
	link:'https://www.facebook.com/photo.php?fbid=10153811610538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Downtown Brown ',
	pct:5.0,
	desc:'A fairly unsweet brown ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12400634_10153811610548745_7658175171400136673_n.jpg?oh=5912548ad54a27d5cd0972e852614f1e&oe=579E1455&__gda__=1469686954_1e898c7911cb699ab8f0cdfda8d79819',
	link:'https://www.facebook.com/photo.php?fbid=10153811610548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans Hoppy Gonzales ',
	pct:5.9,
	desc:'Really mild and nice chilli flavour but there\'s a little too much bitterness ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1935435_10153811610483745_7535392188033528320_n.jpg?oh=9c729ca5407c7eb9a28637a9ead6b664&oe=57B5054F&__gda__=1470085470_6bbd4bf511f99444b053dff6b9a92817',
	link:'https://www.facebook.com/photo.php?fbid=10153811610483745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans red sky IPA ',
	pct:6.5,
	desc:'I great IPA for people who are new to beers with flavour. Mild but really well done ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/12510233_10153811610863745_3262758970154145170_n.jpg?oh=237c6a275a7edbafa6cccd9fe400f1bf&oe=579E863E&__gda__=1471105954_c616acd8fb9cef36c992534232a0fcd1',
	link:'https://www.facebook.com/photo.php?fbid=10153811610863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans white Sky ',
	pct:6.5,
	desc:'Never quite tasted right but perhaps I was having an off day ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfl1/v/l/t1.0-0/p480x480/10561728_10153811610893745_8053139554847988051_n.jpg?oh=40d65784a98cc9326c2ed65bd6cfb11f&oe=5799CF07',
	link:'https://www.facebook.com/photo.php?fbid=10153811610893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s newtowner ',
	pct:4.8,
	desc:'A fairly plain lager ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12376181_10153811610908745_3920511327334452329_n.jpg?oh=ac3e0627da9deb9edf7cb5b824883a2b&oe=57A82C83&__gda__=1469998716_e2e9bf837882715341aa6efdaf5abe0d',
	link:'https://www.facebook.com/photo.php?fbid=10153811610908745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redds Apple-Ale ',
	pct:4.0,
	desc:'Really mild apple flavour, like a cider without all the sugar ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12507414_10153811611358745_6320534595559779603_n.jpg?oh=9f82189abd9f0f2924e57e5ea822ad80&oe=57AE91AF&__gda__=1470148438_4ca085805c34c6c16b5f49628d5c5b14',
	link:'https://www.facebook.com/photo.php?fbid=10153811611358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hill Scotch ale ',
	pct:5.8,
	desc:'Fizzed for about 10 minutes and then just tasted a little blemished ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12495170_10153811611453745_4249513101009687446_n.jpg?oh=78e3d4fcfb2ce89c7ae81ded36d1831a&oe=57AB5073&__gda__=1470899141_67ddf6b09436d149b891f9a9331c2ef5',
	link:'https://www.facebook.com/photo.php?fbid=10153811611453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult Reset Robot ',
	pct:3.5,
	desc:'A little on the weak side but a really good pale flavour. ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12417859_10153811611533745_6524426791759855644_n.jpg?oh=a856941014581dd938f163c77557b7c4&oe=57AA2841&__gda__=1470584896_89985083a30d2a136a2131fe99e0f961',
	link:'https://www.facebook.com/photo.php?fbid=10153811611533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garagista IPA ',
	pct:5.8,
	desc:'Really nice colour but the flavour misses the mark ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/12439242_10153811611693745_5295129091092363707_n.jpg?oh=6c3f4ead9c4e53e8a91fffdedfe93e85&oe=57AB4B93&__gda__=1470064614_55a32bea9c5b2c03106fc76f1b0f41fa',
	link:'https://www.facebook.com/photo.php?fbid=10153811611693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Alice Porter ',
	pct:5.2,
	desc:'A fairly nice porter, but nothing great ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1227_10153811611783745_4791320626770283018_n.jpg?oh=aa526f96a62f2f3c27a16381ea6aebc6&oe=579B11D0&__gda__=1471051109_35f35f00a11336a6f75cd336b2774787',
	link:'https://www.facebook.com/photo.php?fbid=10153811611783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volkan Santorini blonde ',
	pct:5.0,
	desc:'Has a kind of silty texture to it and an Eastern European tang ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12510230_10153811618053745_1537940753105870983_n.jpg?oh=c114c971c4ff615948b809d0d1184eb0&oe=579F6A22&__gda__=1470534041_cdc674928480f99f627b68221557f7fd',
	link:'https://www.facebook.com/photo.php?fbid=10153811618053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing company citra IPA ',
	pct:6.5,
	desc:'Really nice floral flavour. Gotta love citra hops ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12510389_10153811618073745_2543157782800791845_n.jpg?oh=af729ed0c6c307bfc615261952273a19&oe=57A999A7&__gda__=1469956190_88fec17891294db5ef2c65a8734c3de0',
	link:'https://www.facebook.com/photo.php?fbid=10153811618073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch voyage of the Galaxy',
	pct:null,
	desc:'Just can\'t get into this. It\'s heavy without a nice flavour behind it ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/12523010_10153811617993745_3799427315794683212_n.jpg?oh=4953153cddd74cce13d85f2d8fa5dbae&oe=57B40CBF&__gda__=1470609223_072d7a9397acf79338a26ca9725a25fc',
	link:'https://www.facebook.com/photo.php?fbid=10153811617993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Merchant three toe ',
	pct:5.6,
	desc:'Has some sort of wrong tinge to it and nothing to redeem that ',
	score:5,
	img:'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/l/t1.0-0/p480x480/12523010_10153811618698745_8674316170585442130_n.jpg?oh=18f5f61f9f961697c064adeca4dcd563&oe=57BDE2EE',
	link:'https://www.facebook.com/photo.php?fbid=10153811618698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch west coast IPA ',
	pct:5.8,
	desc:'Mild but very tasty. One of the first from batch that I really like ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12510395_10153811618823745_3574564297259479731_n.jpg?oh=672ae557279cf4f498c37e606ca928fb&oe=579EA0F2&__gda__=1471479307_76389d5398f8523a52f0b8c5a8322bee',
	link:'https://www.facebook.com/photo.php?fbid=10153811618823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modus cream of the hop #3 ',
	pct:5.6,
	desc:'Actually more creamy than a normal beer. Really nice ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12509647_10153811618828745_7009333713246897313_n.jpg?oh=75c43487faf50ea7c56b56319ee4b64b&oe=57B367C6&__gda__=1469709181_bba8a97949050c51cf240fd8a022af0f',
	link:'https://www.facebook.com/photo.php?fbid=10153811618828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie kolsch ',
	pct:4.6,
	desc:'Really well balanced but a little lacking in flavour ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/12509088_10153811619033745_702562891235220957_n.jpg?oh=58de8d1917d7e099aa04cd376a8aedc8&oe=57AB54AF&__gda__=1471339683_ccc08afd8dfa43cedd9f35e1e5ae9f63',
	link:'https://www.facebook.com/photo.php?fbid=10153811619033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie artisan ale ',
	pct:4.4,
	desc:'A bit of a harsh flavour. Disappointing after the kolsch ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/12509407_10153811619193745_3070555167581402785_n.jpg?oh=93d8d6a9e2833b4522f47cc54d044804&oe=579B7900&__gda__=1471740661_e9f564e63eb093c0dab7b6b0688563b4',
	link:'https://www.facebook.com/photo.php?fbid=10153811619193745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gulden draak 9000 ',
	pct:10.5,
	desc:'A little harsh all round without any real nice flavour to back it up. You get used to it but why bother ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q81/p480x480/580376_10153811619198745_8101596644532309757_n.jpg?oh=152c3eff7a8390fb89711e8fdcf8e2a2&oe=57B6D49E&__gda__=1469812131_ee407418d38960b043ef25606073fc83',
	link:'https://www.facebook.com/photo.php?fbid=10153811619198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arrogant bastard barrel aged ',
	pct:8.1,
	desc:'Really nice secondary flavour. Could drink a lot of these ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/12508899_10153811619303745_6510580439583908445_n.jpg?oh=3390eae2ad854c532045163d52ca9a9d&oe=57A15E2D&__gda__=1470389937_26e08ca4272c42d157c4c570c3912256',
	link:'https://www.facebook.com/photo.php?fbid=10153811619303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pinedrops IPA ',
	pct:6.5,
	desc:'A solid IPA, better than I expected ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/581926_10153811639323745_2485735585097388298_n.jpg?oh=cfc013d7e4b6701454a22a88974f643e&oe=5799D1F4&__gda__=1471322664_e646a8c94dd9c001b45dcdd5d9db3e5a',
	link:'https://www.facebook.com/photo.php?fbid=10153811639323745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Killer Sproket Rye IPA ',
	pct:6.2,
	desc:'I haven’t had many rye IPAs but so far they’ve all been great beers. ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1660722_10153811639283745_5357595767484756321_n.jpg?oh=6bd233ee893dc124e519d9f5ed9915e2&oe=57A55D99&__gda__=1470546012_17379e7872d89b6d65d29fb76f7ecbdf',
	link:'https://www.facebook.com/photo.php?fbid=10153811639283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson Valley Wild Turkey Bourbon Barrel Stout ',
	pct:6.9,
	desc:'Better than I expected, but then I was pretty worried about this one ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/6841_10153811639248745_4589085530063719353_n.jpg?oh=0f0f1b037aba22eb43427e549b802116&oe=57AD3F07&__gda__=1470192104_97d74ec29877afdad1069b48a635c9a9',
	link:'https://www.facebook.com/photo.php?fbid=10153811639248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington IPA ',
	pct:6.4,
	desc:'Another winner from Mornington. Really strong on flavour but without any harshness ',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1933914_10153811639743745_2943766557036716002_n.jpg?oh=d464a40791e73d45df3aac19f332292a&oe=57B6EF01&__gda__=1470620030_67b29b8942fb848854bdfaacb25cd614',
	link:'https://www.facebook.com/photo.php?fbid=10153811639743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures Furphy ',
	pct:4.4,
	desc:'Saw this a lot in Melbourne and wish it would start showing up in Sydney. Glad to see some more brewers making Kölschs ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12509006_10153811639708745_4922522512256088245_n.jpg?oh=712eb33d448124aac89372beb4c65109&oe=57BF3915&__gda__=1470157559_fb50d26d31b513b4b8edf8242ccf49f8',
	link:'https://www.facebook.com/photo.php?fbid=10153811639708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Eelriver Amber Ale ',
	pct:4.5,
	desc:'Nothing much to say about this one ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/1930332_10153811639763745_6829727140926050001_n.jpg?oh=cbbae317624e7d4110731a12a74e206f&oe=57B54D72&__gda__=1471825854_b35c3d8c66c76ce795cb35c9a4da3455',
	link:'https://www.facebook.com/photo.php?fbid=10153811639763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedlars Pale ',
	pct:5.3,
	desc:'All round decent pale ale ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10649831_10153811640038745_8117596568326792946_n.jpg?oh=af30eed0b5699faaad4391e409485c30&oe=57BC7784&__gda__=1471833446_5c7a990f21f2bf54ad5fbdce888cc6e2',
	link:'https://www.facebook.com/photo.php?fbid=10153811640038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 Sorelle ',
	pct:5.5,
	desc:'A strange looking beer but has a lovely mild Belgian taste ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/q85/p480x480/12509130_10153811640153745_7506807419110071415_n.jpg?oh=19b2478834c4eacc7507a75ddd3cf1d4&oe=579C40E3&__gda__=1469938216_391131b92e1ba9c24f5631c5d553e1bd',
	link:'https://www.facebook.com/photo.php?fbid=10153811640153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pact pale ale ',
	pct:5.2,
	desc:'Another pale ale that falls short. Seems like too many Australian pales are targeting the lager audience ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1923172_10153811640033745_626679474657757195_n.jpg?oh=a05d49a45f7d6016ea26b1e2cbd3839d&oe=57BB247B&__gda__=1471385705_9b42564c7ab6930c29096a3ceef72ce8',
	link:'https://www.facebook.com/photo.php?fbid=10153811640033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita Amber ',
	pct:4.5,
	desc:'An ok beer but there was a slight tang that I didn’t like. I feel like this brewery has so much more to offer ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1434_10153811640518745_1774691229893967268_n.jpg?oh=bdd3271be4fbcbc477cac8a3b2d07020&oe=57BA4CEF&__gda__=1471131885_a3734074f77f7a0d4fce66019de57eb0',
	link:'https://www.facebook.com/photo.php?fbid=10153811640518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Scorcher Summer Ale ',
	pct:4.6,
	desc:'Fairly inoffensive lager. Can’t complain ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1929791_10153811640558745_2017001779885811496_n.jpg?oh=0fd54229a02695adfad43c702c2ac8b2&oe=5799D401&__gda__=1471634851_2ed154abf4635dbdf3c17b25a47b4d21',
	link:'https://www.facebook.com/photo.php?fbid=10153811640558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Royal Dutch Post Horn Lager ',
	pct:4.3,
	desc:'It’s beer ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1936964_10153811640493745_4599335124953015175_n.jpg?oh=681bd9ea7c37eaf9ba746c0ff57d8657&oe=57AE1899&__gda__=1470645640_f5c0c2b39950d3a5f654ae314369b136',
	link:'https://www.facebook.com/photo.php?fbid=10153811640493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Abbot Christmas Ale ',
	pct:11.5,
	desc:'Slightly syrupy. Gives that nice warmth that makes sense at Christmas. Just not in Australia. Still great flavour all round ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717228_10153890412513745_5272405049843729399_n.jpg?oh=66a88aa8f169abad3b52adaca936d9b5&oe=57A2211A&__gda__=1470274019_8d0dcdd8e538e6c55bc6fa7328e0704b',
	link:'https://www.facebook.com/photo.php?fbid=10153890412513745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sunburnt Irish red ale ',
	pct:5.0,
	desc:'There’s a fair bit of flavour but it’s just harsh. Not my cup of tea ',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12734008_10153890412458745_3823076669808581993_n.jpg?oh=97ee1b6cc7091dbd04ce01d61f0b2963&oe=57BCEAD6&__gda__=1471138863_6d321dba098ab383666f0a05855289f4',
	link:'https://www.facebook.com/photo.php?fbid=10153890412458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garage Project La Calavera Catrina ',
	pct:6.9,
	desc:'I may be unique in that I find that chilli and beer are a perfect combination; and this is the best one I’ve had so far ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12705503_10153890412498745_7528959077834200322_n.jpg?oh=5dd60d6d47554aec4e58a4132935bbd9&oe=57A0E322&__gda__=1471394779_f2332280100096f8863ed30c554cce39',
	link:'https://www.facebook.com/photo.php?fbid=10153890412498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Session pale ale ',
	pct:4.7,
	desc:'A little bit harsh for a session beer ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717761_10153890412778745_1469082473536049223_n.jpg?oh=6f2bbce04137438de0f4ec0eae6f8471&oe=579F823D&__gda__=1472014532_1d07cfb165a9232ca3fa03123faeefea',
	link:'https://www.facebook.com/photo.php?fbid=10153890412778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nail Golden IPA ',
	pct:7.0,
	desc:'A little too much bitterness without the flavour to back it up ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/12733411_10153890412873745_394127344743781782_n.jpg?oh=bb85ed4e0b3ccb6f76613ed9b3e381f4&oe=57B16B17&__gda__=1470065020_d9062236259fbad123b10e059bc32859',
	link:'https://www.facebook.com/photo.php?fbid=10153890412873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy Yak ',
	pct:4.2,
	desc:'Pretty standard ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12494917_10153890412913745_8466195884285998669_n.jpg?oh=f8dc09991851127ca0f402e7bae46fad&oe=57B7AB4F&__gda__=1471096313_6f9836e972fc1651f4f94c714aa3ccb9',
	link:'https://www.facebook.com/photo.php?fbid=10153890412913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St-ambroise Apricot wheat ale ',
	pct:5.0,
	desc:'The apricot is very faint but kind of interferes with the other flavours in an unpleasant way ',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12687816_10153890413098745_7756341127358562624_n.jpg?oh=e2af29128a3fddeec598b695675af86d&oe=579FFF29&__gda__=1471766731_7e9dbd3cb38937a72700f89ac524e182',
	link:'https://www.facebook.com/photo.php?fbid=10153890413098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rye hard IPA ',
	pct:6.3,
	desc:'Super bitter without a bold IPA flavour. Sadly the awesome name doesn\'t translate into flavour ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12717260_10153890413303745_2949419762809562441_n.jpg?oh=14c5db131322ee3bedc090e1135db26a&oe=57A35E79&__gda__=1469802863_9692d2489be0d2e40728a5c6eebe9c11',
	link:'https://www.facebook.com/photo.php?fbid=10153890413303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Windhoek ',
	pct:4.0,
	desc:'Eastern European maltyness. Ok for a cheap beer ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12715222_10153890413318745_2007894643886260840_n.jpg?oh=9d92eb4783c6b819112ce613f9357503&oe=57AB22B1&__gda__=1470092616_85115baf592ab76a1e29fd34af35f395',
	link:'https://www.facebook.com/photo.php?fbid=10153890413318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke sprocket ',
	pct:6.6,
	desc:'Really nice hop profile for a flavoursome IPA ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/q83/p480x480/12743992_10153890413553745_2836285406574144058_n.jpg?oh=a1f8be0573a91113df25dfac18ec5139&oe=57BE3E9B&__gda__=1472043880_76b2cdf87a3e54e0c0a767f82d011658',
	link:'https://www.facebook.com/photo.php?fbid=10153890413553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Crankshaft ',
	pct:6.0,
	desc:'Really strong on the hops, just a little too bitter ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12744268_10153890413753745_5060146557255132828_n.jpg?oh=8a2ff89581fc0e236157b1fdd12a826a&oe=57BF3299&__gda__=1471758459_225fd5983c38c1ee3128a78c1cef1daf',
	link:'https://www.facebook.com/photo.php?fbid=10153890413753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke PSI ',
	pct:10.0,
	desc:'Very sour and bitter. Not for me ',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11229820_10153890413723745_4413328230475725119_n.jpg?oh=46f104838c872a72159b7c556933ad5d&oe=57A76111&__gda__=1469668103_eb11ab6200a8fade7151f275b0207057',
	link:'https://www.facebook.com/photo.php?fbid=10153890413723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Cluster 16 ',
	pct:16.2,
	desc:'Like a normal IPA distilled into a super potent form. Too much for me right now but I should retry ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12741979_10153890413793745_6934869662046573410_n.jpg?oh=aaf5b5541fcc1aa0ae64a455289c8bd6&oe=57AB758E&__gda__=1472127607_8d54f230661e88d934c3509820c52964',
	link:'https://www.facebook.com/photo.php?fbid=10153890413793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed californicator IPA ',
	pct:7.5,
	desc:'A textbook IPA. Bitter with a strong hop flavour. I just picked it because of the bears having sex on the label ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717177_10153890413993745_4407733928412012176_n.jpg?oh=3e9d4818cbc45e607b0ddf9785ea7d00&oe=57B4ADB9&__gda__=1470897984_ce4b022cd3e907f0183714a0ee13effe',
	link:'https://www.facebook.com/photo.php?fbid=10153890413993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing Galaxy IPA ',
	pct:6.5,
	desc:'Low on bitterness, high on aroma. Can\'t decide between this and the citra ',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/12688166_10153890414098745_93931054277212370_n.jpg?oh=bfacce25c8b120375e5fad332746728f&oe=57B773FC&__gda__=1471950816_5499f90a269c90d03ae195a7e6588df8',
	link:'https://www.facebook.com/photo.php?fbid=10153890414098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen from the vault ',
	pct:5.4,
	desc:'Such an amazing sour lambic. The nerd reference is just a bonus ',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12687895_10153890414198745_3642229716769396500_n.jpg?oh=4acc52059dcbe8ce77a86a53f279e8fc&oe=57A8F949&__gda__=1469798751_c134bf763626fca625f112867a9d9f41',
	link:'https://www.facebook.com/photo.php?fbid=10153890414198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen sequoia ',
	pct:6.2,
	desc:'Listed as an amber but kind of like an IPA but a little smoother ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12733610_10153890414378745_2084592148299538325_n.jpg?oh=006b179b8f43e2c6bd1238fa80fd7fe8&oe=57A2B6F6&__gda__=1472064265_18323fcbe3caea5eddb9bffa578d04a9',
	link:'https://www.facebook.com/photo.php?fbid=10153890414378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen velvet cream ',
	pct:6.6,
	desc:'Like a Guinness with a little more coffee flavour. ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/12705540_10153890414573745_7427353905568782339_n.jpg?oh=34bc829e05037310e1977c2a185009f3&oe=57ACCC06&__gda__=1471187781_ebd8cc9b9821fd0a1ab297a0b0251bb1',
	link:'https://www.facebook.com/photo.php?fbid=10153890414573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen Duncan ',
	pct:3.4,
	desc:'Perhaps one of the mildest beers I\'ve ever had but has a great balance between sour and salty. Deducting points because it\'s a mid strength ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12733543_10153890414603745_2708879129886926163_n.jpg?oh=47027d6b72bee33d36e69a1622e8dfd7&oe=57A9A0CD&__gda__=1471568948_76bb07ecb5d83e7efa1fabd6551c2218',
	link:'https://www.facebook.com/photo.php?fbid=10153890414603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi dry black ',
	pct:5.5,
	desc:'A rather sweet taste compared to the regular asahi. ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/942864_10153890414673745_1846063327846189238_n.jpg?oh=1288d8354fd5138a227422e36240db80&oe=57A09180&__gda__=1470588006_bdc54758389a5208ca114e00b20ca77c',
	link:'https://www.facebook.com/photo.php?fbid=10153890414673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wet hopped oatmeal ale ',
	pct:4.3,
	desc:'A lot more plain than I expected. There\'s a really slight oat aftertaste but I was hoping for it to dominate the beer ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12742769_10153890414963745_1738049076033297377_n.jpg?oh=e3959b8fe827cd541798fe1940e9529e&oe=57ADA1DC&__gda__=1471961034_d76fb880fa8642be75f7f84d4ca9c6ae',
	link:'https://www.facebook.com/photo.php?fbid=10153890414963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Single-take session ale ',
	pct:4.5,
	desc:'Perhaps not the best beer at 10am. The Belgian flavour seemed a bit too wheaty ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12715222_10153890415008745_8479217372208836383_n.jpg?oh=2bfc89ece2de7277c411280127721865&oe=57AB0277&__gda__=1471902862_49113d5a8463960343cb4aec06c8538e',
	link:'https://www.facebook.com/photo.php?fbid=10153890415008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tecate ',
	pct:4.5,
	desc:'Pretty plain lager, easy drinking. +1 because of the giant can ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12728804_10153890415018745_4089268131902727213_n.jpg?oh=90febc4a23e3c23a798cf2999c6ba3c4&oe=57B18CF4&__gda__=1471063053_47be07c38f5bf47bf77260957a0a4899',
	link:'https://www.facebook.com/photo.php?fbid=10153890415018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie boys gunnamatta ',
	pct:6.5,
	desc:'Amazingly floral but with so little bitterness. Has a slight spicyness as well which balances perfectly ',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12646945_10153890415153745_1313474125480375485_n.jpg?oh=a9c5117c48ccf9d50b2ed6d083182bc8&oe=57BBBB31&__gda__=1472109768_c218b34eaa8f220534e456a859d56664',
	link:'https://www.facebook.com/photo.php?fbid=10153890415153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum capital pale ale ',
	pct:4.7,
	desc:'A little tangy for a pale but still nice. Though on further tasting I\'ve found some bottles to be a little bit too tangy and tastes more like an imperfection than a feature. ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717222_10153890415308745_1813544797541172385_n.jpg?oh=8edb70f822852b3a6f68b461a51599c7&oe=57BEA500&__gda__=1471948537_eebb1d8e5aedbb0285a4f017ec2b7ebc',
	link:'https://www.facebook.com/photo.php?fbid=10153890415308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures dog days ',
	pct:4.4,
	desc:'Surprisingly flavourful for a summer beer. Nice little tang to it ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12717186_10153890415423745_6451428281725925044_n.jpg?oh=46a440e6aaec458f14d50ee844cf2897&oe=57A18032&__gda__=1470972452_ebb0093ccfbc94193ae17712ddd0fe33',
	link:'https://www.facebook.com/photo.php?fbid=10153890415423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tradewind lager ',
	pct:4.4,
	desc:'Easy drinking lager. Good for an all day drink ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717308_10153890415688745_8114544610484440853_n.jpg?oh=97b4384fb5f861422e17c35621b6940c&oe=579D0F93&__gda__=1469945962_dced2061ac64f95a2ba790fc92f8d23d',
	link:'https://www.facebook.com/photo.php?fbid=10153890415688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed Kol schisel ',
	pct:4.2,
	desc:'Fairly plain and easy drinking ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/12715804_10153890415748745_782298131807112307_n.jpg?oh=add51812e24b0e14e110afcb527dd4d9&oe=57AC0815&__gda__=1469763095_0d4916bb4d0d3fbbb11c6c90fc197d9c',
	link:'https://www.facebook.com/photo.php?fbid=10153890415748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum stinger ',
	pct:4.8,
	desc:'kind of tart but sits in a strange place like it can\'t decide what to be ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717321_10153890415758745_9148183600742438871_n.jpg?oh=37fbb283cc53b5753655b3c1fc8cacfb&oe=57ABA852&__gda__=1471031467_97469d9c22a0d56a7b720c100bc596d4',
	link:'https://www.facebook.com/photo.php?fbid=10153890415758745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bristol beer factory independence ',
	pct:4.6,
	desc:'The description sounded good but didn\'t quite hit that mark ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/12741906_10153890416078745_2509646553682533650_n.jpg?oh=88f1be306f8d5d930b749087e14c5a1a&oe=57B92BFF&__gda__=1470832225_aa3c5495ed4c9d44993c0f2f5b698fdd',
	link:'https://www.facebook.com/photo.php?fbid=10153890416078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDog cosmic highway ',
	pct:4.8,
	desc:'Well named, you can\'t quite pick what you\'re drinking. Not bad but fails to master any category ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12744551_10153890416133745_1898256782764708907_n.jpg?oh=593816e45086a9c7fc9b5de19fa14cbd&oe=57BE3D9E&__gda__=1471607432_e2b9f154e254a90d51010337cd749240',
	link:'https://www.facebook.com/photo.php?fbid=10153890416133745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm hop select ',
	pct:6.0,
	desc:'I expected more, there\'s a slight metallic taste which shouldn\'t be in a nice beer ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12742633_10153890416108745_3638813966682726331_n.jpg?oh=9dacce79a01db6c75434e1598bd27c99&oe=57B9EEED&__gda__=1471555092_8fd076434aea3ec1167ff081d7c8b981',
	link:'https://www.facebook.com/photo.php?fbid=10153890416108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside othello\'s curse ',
	pct:9.0,
	desc:'Too harsh on the tongue. The one time I\'ve wanted a smaller bottle ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12733449_10153890416838745_3402335338987277776_n.jpg?oh=2457eaf76c1259c5b35223952fba18ef&oe=57BD10C1&__gda__=1470006391_87a9a94bfd1a79736b655eed9a69972f',
	link:'https://www.facebook.com/photo.php?fbid=10153890416838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita jockamo ',
	pct:6.5,
	desc:'Too harsh, this brewery is still yet to win me over ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/12718283_10153890416898745_6096850790027178927_n.jpg?oh=91639035cfcd1bba4be8b6de2c712818&oe=57BB0946&__gda__=1470130041_ab5d766b3e53f679547c852e55d09102',
	link:'https://www.facebook.com/photo.php?fbid=10153890416898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brontide smooth black ale ',
	pct:5.0,
	desc:'Started off a bit harsh but was a lot better than other black ales. Makes me want to try more dark beers ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12734008_10153890416878745_633217613773642603_n.jpg?oh=1af5c5b071d0ac84f19b03c99148ad08&oe=57999A09&__gda__=1469976536_779ed19eef81badb5b4eebbac0adfce2',
	link:'https://www.facebook.com/photo.php?fbid=10153890416878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rodenbach ',
	pct:5.2,
	desc:'Surprisingly tangy with very little bitterness. Worth a try ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12715222_10153890417253745_2655298397910190348_n.jpg?oh=125c733a4e1d1e763d40e58f483c1c7a&oe=579DB1FA&__gda__=1470199020_250f279f7828390be23b1485cf52da01',
	link:'https://www.facebook.com/photo.php?fbid=10153890417253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner pils ',
	pct:5.1,
	desc:'Refreshing but not my favourite flavour ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12717710_10153890417503745_4345190063055237739_n.jpg?oh=3c9ecd28083b8d2f315bf4bc84962f9e&oe=57A57209&__gda__=1469666335_4acd66e97a4faccf9b576285476e114b',
	link:'https://www.facebook.com/photo.php?fbid=10153890417503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shepherd Neame IPA ',
	pct:6.1,
	desc:'I’m always disappointed by English IPAs since the flavour I want from an IPA is more akin to the American interpretation with much more floral hops. ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12729064_10153890417368745_6907793566119928582_n.jpg?oh=6712058b47d01e800c7bb525488e74d8&oe=57A509E5&__gda__=1470604787_d8758023dc57d277f9662091aeacdbd4',
	link:'https://www.facebook.com/photo.php?fbid=10153890417368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red horse beer ',
	pct:7.0,
	desc:'Nicer than expected. Has a slightly spicy finish  ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12744494_10153890418648745_513314091064162487_n.jpg?oh=3d386f15b96bacf2aa7827f96cd017b3&oe=57A44EEB&__gda__=1471895271_f40610ba3eb9c051963f2e9658be58f2',
	link:'https://www.facebook.com/photo.php?fbid=10153890418648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road little bling ',
	pct:3.4,
	desc:'Not tasty enough to justify the low alcohol ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12744494_10153890418973745_1506888197203194129_n.jpg?oh=49043da44a85ef763449be19e0edc929&oe=57BB6752&__gda__=1471840489_71d553203520d8e06f4ea316d2a06e5b',
	link:'https://www.facebook.com/photo.php?fbid=10153890418973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Molson Canadian ',
	pct:5.0,
	desc:'Crisp and refreshing but nothing special ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12728991_10153890418838745_7409486003049273062_n.jpg?oh=024b6f7ad77dcfd3fea3dd75414b410b&oe=57A82778&__gda__=1470950510_6e37acc82b1aabd9f894075ad841ce85',
	link:'https://www.facebook.com/photo.php?fbid=10153890418838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeasty boys hud-a-wa strong ',
	pct:6.8,
	desc:'An interestingly strong flavour but it maintains a smooth finish. ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/q81/p480x480/12729183_10153890419403745_8807635240820254136_n.jpg?oh=167ecd7b3255fb98dade95c7c386fb41&oe=57BA1983&__gda__=1471435166_2c20f225122bcffc1f806f241820244c',
	link:'https://www.facebook.com/photo.php?fbid=10153890419403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont kölsch ',
	pct:4.6,
	desc:'I love a good kolsch. So easy drinking but without being flavourless ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/q81/p480x480/12745536_10153890419543745_6014336509869834605_n.jpg?oh=ed564304b58bff9a7f670b3592343c94&oe=57B10F35&__gda__=1470041896_e9895bea9ddccd647d17e951d6f2b7ba',
	link:'https://www.facebook.com/photo.php?fbid=10153890419543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont copper ale ',
	pct:4.0,
	desc:'The final sip of this beer made me sad that it was gone ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12715379_10153890419508745_5707512389210281014_n.jpg?oh=f93f43abf922f92fe2da864dc136575a&oe=57B97EC2&__gda__=1469765844_ee12911aa025c0e7da472f9cc4147632',
	link:'https://www.facebook.com/photo.php?fbid=10153890419508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch big Paul\'s mango IPA ',
	pct:6.1,
	desc:'The mango flavour doesn\'t overpower what is already a fantastic IPA ',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12728900_10153890419808745_8114701954738943189_n.jpg?oh=278c92fb52cd3da9dce4e2ea8063e367&oe=57B3E49B&__gda__=1469699981_8f4dff06d782f478c8fbd0dbdfe8d424',
	link:'https://www.facebook.com/photo.php?fbid=10153890419808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman Albo corn ale ',
	pct:5.5,
	desc:'Pretty much a lager. Much less exciting than I thought ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12728843_10153890420703745_1906734589373356822_n.jpg?oh=60a011b45a3926fded4c5cdad8d401ef&oe=57A1F6FB&__gda__=1471349762_81ebd28e81c9ba458af8991213b266f2',
	link:'https://www.facebook.com/photo.php?fbid=10153890420703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman old salty gose ',
	pct:4.9,
	desc:'Perhaps the saltiest beer I\'ve ever tasted. But once the initial salt is gone there\'s a really pleasant flavour without the normal beer bitterness ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12745969_10153890420683745_2326162512188830203_n.jpg?oh=a57e3b0d641c4569ae223c4ddb3b9f00&oe=57BAF739&__gda__=1470973999_5101e8f5f44af4834e14558674a989b4',
	link:'https://www.facebook.com/photo.php?fbid=10153890420683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven Twisted Thistle IPA ',
	pct:5.6,
	desc:'Started off with a bit of a tang but seemed to lose it towards the end ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/943951_10153890422103745_2064605675608289445_n.jpg?oh=a1d543c18cd57cee4dad5c94d990bf06&oe=57BB4B10&__gda__=1469751395_66a0258c027e7ccac81f3cc101bea780',
	link:'https://www.facebook.com/photo.php?fbid=10153890422103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington brown ',
	pct:5.0,
	desc:'Nicely rounded. Another winner from Mornington ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12688382_10153890449953745_3980101759747984162_n.jpg?oh=d5a81ce31e6d540945c3e0a6d32d2dd7&oe=57AFD245&__gda__=1471080531_cf655a869eba82998c9773a4dc569a84',
	link:'https://www.facebook.com/photo.php?fbid=10153890449953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat pale ale ',
	pct:5.2,
	desc:'Really refreshing with the right amount of hop flavour for a pale ale ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/12814792_10153966648923745_359987341393808655_n.jpg?oh=a17262e4790c56a74c54a7e00b477fcb&oe=57E7BEB5&__gda__=1471629738_7a9ffc0ddd30b559d68ff775d788d42e',
	link:'https://www.facebook.com/photo.php?fbid=10153966648923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Swindler ',
	pct:4.2,
	desc:'Disappointingly plain ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/936555_10153966649228745_7093539391186290992_n.jpg?oh=5ffd90e347f143cdef11998cad983288&oe=57BB28C2&__gda__=1474796523_43c5e8908429c729558ea8f7e0ea82bb',
	link:'https://www.facebook.com/photo.php?fbid=10153966649228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat hightail ale ',
	pct:4.5,
	desc:'Still yet to have a bad beer from mountain goat though they are a bit too similar ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/970226_10153966649058745_8469352202645792973_n.jpg?oh=72ee3dd20eeeee63ea0b167db46f5c53&oe=57E8041B&__gda__=1472129481_a95d98b3197505ae1ae3cb8a6b3aa13c',
	link:'https://www.facebook.com/photo.php?fbid=10153966649058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Tower 10 IPA ',
	pct:7.0,
	desc:'An IPA with a sweet finish ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12036567_10153966649818745_3762140237584842223_n.jpg?oh=ea471eac41970563bd96c47d6cbe67ce&oe=57B0E88B&__gda__=1469687668_4bb21ede785ac2113a38f1c4b186067e',
	link:'https://www.facebook.com/photo.php?fbid=10153966649818745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven scottish ale ',
	pct:5.2,
	desc:'Scottish ale isn’t one of my favourite styles so I can’t give it a top rating ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10342506_10153966649853745_2082231274376560811_n.jpg?oh=d8e5f06bb7d913a65e5fb360db7fd4cd&oe=57AB4336&__gda__=1471008718_8cbd11fa0212e7f28de8e7c226397422',
	link:'https://www.facebook.com/photo.php?fbid=10153966649853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fóti ',
	pct:4.6,
	desc:'Has a really mild ginger taste. The smell is a little strange but the flavour really grows on you ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1918614_10153966650093745_125776627995891948_n.jpg?oh=d28e820bb1de7af111c63f7ce1d80324&oe=57A21872&__gda__=1471335119_a49ab6718a0e70b70cc137e9fb782f5c',
	link:'https://www.facebook.com/photo.php?fbid=10153966650093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante trigo ',
	pct:5.0,
	desc:'Surprisingly this cheap beer is one of the better wheat beers that I’ve had. The tang is really well balanced. That said it is a bit light on flavour ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/535112_10153966650528745_107085668519640662_n.jpg?oh=416a4f755523485e28b8da02d3b397d8&oe=579C0AE7&__gda__=1470619529_f27de4989e6b55d400db44f8b2f15ed6',
	link:'https://www.facebook.com/photo.php?fbid=10153966650528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Westvleteren Blond ',
	pct:5.8,
	desc:'A lot lighter on flavour than I expected but then the bottle I have is older than it should be. That said it is perfectly balanced down to the last drop and there’s a hint of some deliciousness there. Not worth the price you pay in this country but I would love to get a fresh case of this ',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/1625546_10153966650393745_441647493230179601_n.jpg?oh=2e380a83f45249be078af7fb619e33f4&oe=579C89A9&__gda__=1474777562_4ba58bd0a3aa55803cfedb49aacce1db',
	link:'https://www.facebook.com/photo.php?fbid=10153966650393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor IPA ',
	pct:6.5,
	desc:'I can’t enjoy this while eating. The bitterness difference is just too large for my taste buds to cope. Outside of that the bitterness is still a little too strong for the hop aroma ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/75534_10153966650468745_295000144566915941_n.jpg?oh=6c045ce2cdff76c2ccbe2b4408fbd60b&oe=57B52824&__gda__=1470038524_4f7b2a4e107bd53cc63d6b2e21248835',
	link:'https://www.facebook.com/photo.php?fbid=10153966650468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew dog Jack Hammer ',
	pct:7.2,
	desc:'So much floral and citrus aroma. More bitterness than I would like but once you get used to it the flavour is amazing ',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1507888_10153966650763745_3858788343816093746_n.jpg?oh=8432b34db02834d8c00d64b28b17605c&oe=57A97C55&__gda__=1470773495_cf2d646c434dd8a4f1491aeceeefa333',
	link:'https://www.facebook.com/photo.php?fbid=10153966650763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie Boys Dark Matta ',
	pct:7.5,
	desc:'Pretty good for a dark beer. Fairly smooth and rich but perhaps a little too bitter ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10347498_10153966651168745_482800618815663484_n.jpg?oh=212db6ba277033694f2ffa19d3da2a19&oe=57A4E2EC&__gda__=1472113735_09ad434a17e6ea6835106c45ea078c5b',
	link:'https://www.facebook.com/photo.php?fbid=10153966651168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masters Finest ',
	pct:4.5,
	desc:'No flavour except some bitterness ',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/10368217_10153966651078745_5301100254520843348_n.jpg?oh=eb4e3e4998767dc77ebd348a8ee6ab00&oe=57B2A9B9&__gda__=1471084583_3fcc7aa7482957a7bc4394d8b9cae8aa',
	link:'https://www.facebook.com/photo.php?fbid=10153966651078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Throwback IPA ',
	pct:3.5,
	desc:'Great smell but a bit lacking on flavour. A nice session IPA ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10169445_10153966651248745_4831098313362630542_n.jpg?oh=9b36735beedeb0e83342a9124b7c71e5&oe=5799CC11&__gda__=1470606835_c5c60b7d3a329d87acf30976a77479af',
	link:'https://www.facebook.com/photo.php?fbid=10153966651248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės kvietinis ',
	pct:5.2,
	desc:'Pretty standard wheat beer ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10356398_10153966651813745_6716954315521047307_n.jpg?oh=5e0a6592d0998f1e528b825319cd4586&oe=57BD540F&__gda__=1471189785_dc8d7de4676b152b045f94b06effe885',
	link:'https://www.facebook.com/photo.php?fbid=10153966651813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Houblon Chouffe Double IPA Triple ',
	pct:9.0,
	desc:'Doesn’t really taste much like an IPA, nor is it the best Belgian blonde ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12494908_10153966651838745_649551942505437131_n.jpg?oh=50d30ac8619266d7f7680cafc8c3dc99&oe=57B0734D&__gda__=1469731558_bbd1165873617acc5cd05a50cb1f850b',
	link:'https://www.facebook.com/photo.php?fbid=10153966651838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lupulus Pale ale ',
	pct:4.7,
	desc:'Fantastically flavoured pale ale. Still mild though ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/600415_10153966651858745_4717804169564084978_n.jpg?oh=3acb501c3df2f63b8473e056af77f084&oe=57B9BE98&__gda__=1470831487_aab2a663114020997859391c01497c7f',
	link:'https://www.facebook.com/photo.php?fbid=10153966651858745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head indian brown ale ',
	pct:7.2,
	desc:'One of the nicer browns I’ve had ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1545766_10153966653998745_8815895665252384924_n.jpg?oh=efca45452d70c42c7c7612df55a20844&oe=57A1E31C&__gda__=1470505421_61380ad9ed79c8c399eee666c1a943e4',
	link:'https://www.facebook.com/photo.php?fbid=10153966653998745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Imperial IPA ',
	pct:8.8,
	desc:'Hugely fragrant and really tasty ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/62366_10153966653993745_718097065966967009_n.jpg?oh=645397d34512a381b4b3e81948b8381d&oe=57A7EE8D&__gda__=1471192378_2441935db7c36d009bad0dbef78b96f1',
	link:'https://www.facebook.com/photo.php?fbid=10153966653993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head 90 minute IIPA ',
	pct:9.0,
	desc:'Really nice flavour. Solid beer all the way ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1010314_10153966653958745_5103605884788995211_n.jpg?oh=a389f565c9a15788cf09500f56817e67&oe=57ACB817&__gda__=1470794523_868776533b229b61782f4eae62ed46f4',
	link:'https://www.facebook.com/photo.php?fbid=10153966653958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Forester bitter amber ale ',
	pct:5.2,
	desc:'A little sour but not in a bad way ',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1936970_10153966655368745_7839777973772364383_n.jpg?oh=fbe744d128b3a0122994763f7f0b4754&oe=57B7D62B&__gda__=1470100873_5ff235009b29cfaa2a4216e74b88710b',
	link:'https://www.facebook.com/photo.php?fbid=10153966655368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Emelisse rye smoked IPA ',
	pct:6.2,
	desc:'To me the smokiness gives it some harshness that I don’t like ',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10004059_10153966655363745_2943533530938025216_n.jpg?oh=820cb301cdda652c7f60c085af851cc6&oe=579E1765&__gda__=1471054329_9c60e7765bd475545b29a407d7e3508f',
	link:'https://www.facebook.com/photo.php?fbid=10153966655363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Pale Ale ',
	pct:5.4,
	desc:'Had more flavour than anticipated, it’s actually a lot like the IIPA but with less bitterness ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10401879_10153966655348745_3642236879798361206_n.jpg?oh=a73a3e39bd8843f5858a2e0277b627e0&oe=57A8669E&__gda__=1471309931_80631718f5070d17cc2ae4a3e0e9561c',
	link:'https://www.facebook.com/photo.php?fbid=10153966655348745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Federation Pale ale ',
	pct:5.1,
	desc:'Don’t have the best memory of drinking this but it was ok ',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1782025_10153966655578745_4664850473670279145_n.jpg?oh=8b100a9b97f12ce01b0f8d12bf6fc352&oe=57B9ECEC&__gda__=1470156873_770f0023d12e3a48bf29a66eed59cc08',
	link:'https://www.facebook.com/photo.php?fbid=10153966655578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rockpool Pilsner ',
	pct:5.0,
	desc:'Crisp but ultimately flavourless. Perhaps I\'ve been having too many IPAs recently ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1936522_10153966655918745_1071656518415804472_n.jpg?oh=85c018d94ed30b7d1c2d629ae6004998&oe=57AF0110&__gda__=1471265749_a470205aa67b3371943a2313da097d80',
	link:'https://www.facebook.com/photo.php?fbid=10153966655918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn IPA ',
	pct:5.8,
	desc:'Delicious. A little bitter but lots of hoppy flavour ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/580369_10153966656363745_4315787602585071997_n.jpg?oh=655d086cdcfaf164143f092f96af1f89&oe=579D8E7D&__gda__=1469740442_31d5bcc098172044758d2b415ccb9efc',
	link:'https://www.facebook.com/photo.php?fbid=10153966656363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prancing pony Amber Ale ',
	pct:5.0,
	desc:'Overly bitter and without much malt flavour. Still yet to find a great amber ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/12821411_10153966656918745_380719159889184662_n.jpg?oh=61f45a1a5ba5caf12165dad310515b38&oe=57E7B2FE&__gda__=1470361825_37f8aa1480e684a0959116e2d90f42e7',
	link:'https://www.facebook.com/photo.php?fbid=10153966656918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington Imperial Amber ',
	pct:7.5,
	desc:'So thick coming out of bottle. The initial taste is bitter but behind that is a strong and sweet flavour that while not what I normally go for is still really nice ',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/10478660_10153966656973745_8240271036615712554_n.jpg?oh=c45e5ab3bfba6e3d0e99975c78848668&oe=579E76E0&__gda__=1471675196_f56bb08481ecfa89277023ab68b8ffad',
	link:'https://www.facebook.com/photo.php?fbid=10153966656973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snow ',
	pct:4.5,
	desc:'Almost no bitterness. It\'s got quite a lot of malt flavour as if it wasn\'t left long enough to ferment. Perfect with a spicy dish ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/600298_10153966657628745_4870073187001041055_n.jpg?oh=6c65c62364ffa4b2975184d133715891&oe=57B743D8&__gda__=1470618628_fe3021ecfa7963c73a7a8352c23da5dc',
	link:'https://www.facebook.com/photo.php?fbid=10153966657628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha freshwater pale ale ',
	pct:5.2,
	desc:'Mild on hops but also low on bitterness ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1934561_10153966658683745_1961182541822640883_n.jpg?oh=a396f0241c42a244d6e0bb1d30bc9469&oe=57B5C3D2&__gda__=1470246915_80ca670b7da16ebaeb83fe4f1092db6d',
	link:'https://www.facebook.com/photo.php?fbid=10153966658683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Extra Bitter Type ',
	pct:5.4,
	desc:'It’s bitter and a little malty ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/10403247_10153966658678745_4947349393995850106_n.jpg?oh=194da653db20215c079f15e48fd5e575&oe=579E2D22&__gda__=1469794634_fa3a536fbbcdae758751491d9773ed17',
	link:'https://www.facebook.com/photo.php?fbid=10153966658678745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weidmann ',
	pct:4.2,
	desc:'A little bit more malty than most German lagers ',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10639498_10153966658918745_2502060406104500926_n.jpg?oh=84be8bd3cc927195fe857d83f629f50c&oe=57A31613&__gda__=1470670853_f1bd6d7dc3c9de8e3307f886aec535bf',
	link:'https://www.facebook.com/photo.php?fbid=10153966658918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Blonde Type ',
	pct:5.4,
	desc:'Supposed to be hoppy but it’s just bitter. Feels like it’s missing something ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12832355_10153966659053745_5547402226284326278_n.jpg?oh=6c6bd2c084702f1d43468d57ea3ed0f6&oe=57A88CD5&__gda__=1470927404_6c32a7aaf573ab003ad80da7841ae21b',
	link:'https://www.facebook.com/photo.php?fbid=10153966659053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Rye IPA ',
	pct:6.0,
	desc:'Smells really good but the taste is a little harsh. ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/9185_10153966659098745_8275916423969475463_n.jpg?oh=7ec488e390c8a6216f388e4f2fe2c791&oe=57A41C79&__gda__=1471190560_94a1ae31cb36c824e818ba0fc51af09e',
	link:'https://www.facebook.com/photo.php?fbid=10153966659098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cucapa brown ale ',
	pct:4.8,
	desc:'It’s not awful but I can’t really get into it ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12821335_10153966659288745_8654410515493028710_n.jpg?oh=03df17245c5a2a4f9b680e4aea3b6f30&oe=57AE17F3&__gda__=1470315749_5ba6636dd3d4dfb46cf4dc33d6c0f550',
	link:'https://www.facebook.com/photo.php?fbid=10153966659288745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Celebration ',
	pct:6.8,
	desc:'Not as fresh as I was hoping but still nice ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/942538_10153966659453745_8399119403482883132_n.jpg?oh=f3f63815a4f84b49072ad2e5e6ccc6b0&oe=57E71368&__gda__=1470099199_f57ad86717895d4b36e4ee8e0b09d151',
	link:'https://www.facebook.com/photo.php?fbid=10153966659453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jelen pivo ',
	pct:4.6,
	desc:'Has a strange smell and a kind of malty taste ',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10398353_10153966659598745_7866549484220940291_n.jpg?oh=0cf4481551b4c2c250d8371e618343a5&oe=57B9799E&__gda__=1471205985_6ba0c7109e8ad3751cde780972a42af9',
	link:'https://www.facebook.com/photo.php?fbid=10153966659598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six strings pale ale ',
	pct:4.8,
	desc:'The bitterness is a tad too harsh but it’s nicely hopped ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10570347_10153966659658745_1644353854355421040_n.jpg?oh=0face97d5b16e5168aa0cc56b6e19fb4&oe=57B940F8&__gda__=1470177031_8d539c5987b468087cdc58e891c023a2',
	link:'https://www.facebook.com/photo.php?fbid=10153966659658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lav ',
	pct:5.0,
	desc:'Standard malty european cheap lager ',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/934134_10153966659898745_3561780875401552010_n.jpg?oh=267b680e4827e36efa2e16def2afe5ec&oe=57AA873F&__gda__=1470711769_bac95f38bbcf5d727cbbe25a2984df6d',
	link:'https://www.facebook.com/photo.php?fbid=10153966659898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #1 Pale Ale',
	pct:null,
	desc:'A bit too much yeastyness which overrides the other flavours, this has reduced considerably as the beer has aged. Otherwise rather mild on flavour without much hop punch ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/13015479_10154072539743745_2413857034853958131_n.jpg?oh=360f56d364041fa2e210ad9538171ebf&oe=57B48E93&__gda__=1469818770_008cfd8a2705dec374b3703bf864b2b4',
	link:'https://www.facebook.com/photo.php?fbid=10154072539743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #2 Pale Ale ',
	pct:3.6,
	desc:'Has a bit of a yeasty smell but it’s covered up a bit by a mild hop aroma. Low on bitterness with a bit of sweetness and not too malty. All round quite drinkable ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/942882_10154072540043745_2361335499708872878_n.jpg?oh=d1b1b0b2c81d08dd3c9c5ed0866d0f71&oe=57A8D1C4&__gda__=1471778744_6d9b098ec92762c14686cc9a2ae2617b',
	link:'https://www.facebook.com/photo.php?fbid=10154072540043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duel Hoppy Lager ',
	pct:4.7,
	desc:'Nicer than I expected, quite a bit of hop aroma coming off this and a well rounded taste ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13015652_10154072540083745_7009465615847756409_n.jpg?oh=38b9633b9e69f8a3a238d429b8e8fbd6&oe=579DBFE1&__gda__=1470491223_50088d138b561238223f04a14d0b9647',
	link:'https://www.facebook.com/photo.php?fbid=10154072540083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'8bit ',
	pct:null,
	desc:'Really nice IPA, little strong but a good hop profile ',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13062107_10154072540318745_5259423050211336454_n.jpg?oh=64f16626854354362e1cf16b4715de71&oe=57AC9E97&__gda__=1474819116_ba659f9551fe20a446911a5d5028e627',
	link:'https://www.facebook.com/photo.php?fbid=10154072540318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chop shop pale ale ',
	pct:4.7,
	desc:'Lacks on every side. No hops and way too bitter ',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13010770_10154072540533745_222338390337149891_n.jpg?oh=a336d0e60080d423967556846c310841&oe=57A8846F&__gda__=1469926218_18d1ee21a5906a71a550e7fd7b8aac2c',
	link:'https://www.facebook.com/photo.php?fbid=10154072540533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington why so cereal ',
	pct:4.9,
	desc:'Really nice. Not too strong on flavour but well balanced. Give it a go if you\'re new to pale ales ',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/13062012_10154072540558745_5299069403089933354_n.jpg?oh=f862c1a6222cd85bc727dff2bca8ff13&oe=57B9BCAE&__gda__=1470583789_878f3839c710435a242bfe701062f844',
	link:'https://www.facebook.com/photo.php?fbid=10154072540558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yulli\'s seabass ',
	pct:4.2,
	desc:'Can\'t pick what the flavour is but I like it. Not as plain as I was expecting ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/13000118_10154072540778745_8031562595698025950_n.jpg?oh=6cf2ec32980b4cac695e2fb3c258b6d6&oe=57B7259B&__gda__=1469738350_757c432962477569d1df442cf8b88aed',
	link:'https://www.facebook.com/photo.php?fbid=10154072540778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant ',
	pct:5.4,
	desc:'Very little hop flavour, mostly just bitterness. Somewhere underneath there’s a nice flavour trying to break through ',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/13076528_10154072540798745_8824066737110537781_n.jpg?oh=cded838fe1c26453bdcfe0ccb1142601&oe=57B0FC29&__gda__=1469992257_f3eadc2a6c36688b071fc362db1a57eb',
	link:'https://www.facebook.com/photo.php?fbid=10154072540798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes mirror pond pale ale ',
	pct:5.0,
	desc:'Could be a little hoppier but it\'s still smooth and sweet with a nice hint of caramel ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13007147_10154072540863745_3547228142622250194_n.jpg?oh=9b82463088fb8bf9cd5230a8ab8b1af6&oe=579F4DA8&__gda__=1470356602_a21dcc5e87cae8beada99a257f89ad68',
	link:'https://www.facebook.com/photo.php?fbid=10154072540863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mont Blanc Génépi ',
	pct:5.9,
	desc:'Kind of tastes how it looks. Like a like cordial mixed with beer. The little bit of spice ties it together and makes for a nice sweet beer ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13001187_10154072541123745_7747103315223526141_n.jpg?oh=31cef6bcf2cd4ee0fac0dcfc0e61047e&oe=57AC4F28&__gda__=1472022778_437a692551fa92879d3a8a7676a5c39c',
	link:'https://www.facebook.com/photo.php?fbid=10154072541123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Evil twin Falco ',
	pct:7.0,
	desc:'A little more bitter than I was hoping but has a nice hop finish ',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13043371_10154072541163745_2624244242033439826_n.jpg?oh=0a51b9c9ae658c39ff9108b170e246ce&oe=57B2BE8F&__gda__=1470750004_b143772c238788ca8a5bde38466dc59b',
	link:'https://www.facebook.com/photo.php?fbid=10154072541163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes fresh squeezed IPA ',
	pct:6.4,
	desc:'Really citrusy, a little too bitter but still a great drink ',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/q85/p480x480/13015236_10154072541183745_1805235121131069529_n.jpg?oh=9a1bd36e56ea6620bef99a902ae25c18&oe=57B57574&__gda__=1471046134_30543ec2eb4ca3e32a0dd6bbe1bc47c5',
	link:'https://www.facebook.com/photo.php?fbid=10154072541183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liger ',
	pct:6.9,
	desc:'Fizzy and dark and sweet ',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/13012764_10154072541233745_130102072018590790_n.jpg?oh=a83565879b033d7ac9e8af38445cb80f&oe=57ACA1E2&__gda__=1470635849_61581785a73a455ff464295b7f103601',
	link:'https://www.facebook.com/photo.php?fbid=10154072541233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

return ret;
}
