function addAllBeers() {

var ret = [];
ret.push(App.Beer.create({
	name:'Black Sheep Ale',
	pct:4.4,
	desc:'Black and average',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/485855_10151283325868745_1357546171_n.jpg?oh=b5ab1093584fb7a6a1fa62d1a0b8780f&oe=57C8C85F&__gda__=1472931310_8ab23c50ee971a9836f0ecbca3c7fffd',
	link:'https://www.facebook.com/photo.php?fbid=10151283325868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg',
	pct:4.0,
	desc:'Standard British pub beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/536444_10151283326338745_1988442948_n.jpg?oh=c224f6a9671a563a1f5d17e76a6b52d8&oe=57D8C693&__gda__=1473207074_0530e68f648e751798f6fff9815c71b2',
	link:'https://www.facebook.com/photo.php?fbid=10151283326338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amstel',
	pct:5.0,
	desc:'Easier to drink and stronger than most beers you get in a British pub',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1027_10151283326853745_295569657_n.jpg?oh=2cc353f963aef285020736674c10d34d&oe=579AAD5B&__gda__=1473951502_5d48d7627a979f6d2c1f69eed4c76898',
	link:'https://www.facebook.com/photo.php?fbid=10151283326853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Webster\'s Bitter',
	pct:3.5,
	desc:'Shit bloke, shit beer',
	score:1,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/65588_10151283327318745_1619592085_n.jpg?oh=e56ced734ae38535441f81a50fe9827f&oe=57E24566&__gda__=1473956655_72f64be94c230c0e5637abd2d8e40ea0',
	link:'https://www.facebook.com/photo.php?fbid=10151283327318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hürlimann lager',
	pct:5.0,
	desc:'Rather good',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/375874_10151283327863745_1299694311_n.jpg?oh=a614a9cdcd59cd2a4c73fd924db5051d&oe=57D4F79D&__gda__=1474323244_8817f4a0721173d2ff8f83e8f4b48655',
	link:'https://www.facebook.com/photo.php?fbid=10151283327863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kronenbourg',
	pct:5.0,
	desc:'Standard fare',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/60247_10151283328373745_1855333949_n.jpg?oh=db52c27cca6a4df17138d9dcc1e2953e&oe=57D7F3F3&__gda__=1473453242_1bb89d49693691500c824b5cace4b901',
	link:'https://www.facebook.com/photo.php?fbid=10151283328373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Veltins',
	pct:4.8,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/32339_10151296241778745_603957055_n.jpg?oh=ff48fc8c30413beb6e6b8a891f8db107&oe=57CB68D7&__gda__=1469710064_6223bb5c7c3c0d776861b83fe8c5e7f6',
	link:'https://www.facebook.com/photo.php?fbid=10151296241778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Smith\'s Extra stout ',
	pct:4.5,
	desc:'Like Guinness with a taste of ashtray',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/317875_10151303867498745_1098897913_n.jpg?oh=8aa38717df3954e2035bc7881969b45f&oe=57E421E7&__gda__=1474480238_c941eeb32cf41eea08bb3a8c2816de5d',
	link:'https://www.facebook.com/photo.php?fbid=10151303867498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ALEXIOS',
	pct:4.0,
	desc:'The beer telling me to go back to the Greek Islands',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/16981_10151303885378745_1227406993_n.jpg?oh=bccc33886f9c8abd9f4eb62b66a5618c&oe=57D53B26&__gda__=1474601560_0d0fb11bab7e8d271c89137e196575a5',
	link:'https://www.facebook.com/photo.php?fbid=10151303885378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red stripe',
	pct:4.7,
	desc:'Brick lane special',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/378973_10151303950693745_516519003_n.jpg?oh=2734c10229c10d8b0e27d6efa1284eb1&oe=57D2BC56&__gda__=1473264424_2a15be72e490f87db9f2c93098860b61',
	link:'https://www.facebook.com/photo.php?fbid=10151303950693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'1892',
	pct:3.3,
	desc:'Warm, flat and nutty',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/3705_10151315682573745_1414196769_n.jpg?oh=e4efba61640bea756451092a3eef06ee&oe=57D0901E&__gda__=1473361441_c3b87825dc156c3fbc7d12eb7f72c3dd',
	link:'https://www.facebook.com/photo.php?fbid=10151315682573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra',
	pct:4.8,
	desc:'Indian restaurant special',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/557801_10151315682973745_793850180_n.jpg?oh=e25d783cb3dd2a73d0119767328b1dfd&oe=57DB9140&__gda__=1474821950_67bbeae0de9b82d288a2e1ae02a5b844',
	link:'https://www.facebook.com/photo.php?fbid=10151315682973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king ipa',
	pct:3.6,
	desc:'Just tastes a bit wrong',
	score:4,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/189043_10151315683658745_1443395751_n.jpg?oh=5a0e1838d7b16115d25009e2b11f52a8&oe=57DF91B3',
	link:'https://www.facebook.com/photo.php?fbid=10151315683658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grolsch',
	pct:5.0,
	desc:'Crisp, refreshing, easily overlooked',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/60758_10151315684663745_854245528_n.jpg?oh=9149fdd6ce7832b57959049bcd227af1&oe=579CEBA4&__gda__=1473004872_e46d30e6d66d3fe4f17548094faf9177',
	link:'https://www.facebook.com/photo.php?fbid=10151315684663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noble',
	pct:5.0,
	desc:'A confusing bunch of flavours',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/546983_10151331650653745_1841706536_n.jpg?oh=0a2499d54b16cf83cd2c0612403912bd&oe=57994DAC&__gda__=1474826172_ddf3e76e821a85d22a30967609dc580e',
	link:'https://www.facebook.com/photo.php?fbid=10151331650653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yankee',
	pct:4.3,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/550717_10151331657283745_2008475143_n.jpg?oh=179c70844d1c7e39bcd5dd919b648253&oe=57E15192&__gda__=1473836708_0902878d252ad2ca11f234ed2de3adb9',
	link:'https://www.facebook.com/photo.php?fbid=10151331657283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Dog\'s Bollocks',
	pct:5.9,
	desc:'Tastes just like the name',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/15111_10151331658713745_2003438525_n.jpg?oh=b6ef9179d2d4ee00afa14fc972d99fbb&oe=57C98712&__gda__=1474569680_e0b64fc9c917e35123300592d415e434',
	link:'https://www.facebook.com/photo.php?fbid=10151331658713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double maxim',
	pct:4.7,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/378563_10151331661023745_1836111728_n.jpg?oh=d10069e1ae1bc800af2e4cde927d4234&oe=579B7EB4&__gda__=1473968701_24ec289f21a2a3aa321d6894cfdc1873',
	link:'https://www.facebook.com/photo.php?fbid=10151331661023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Black',
	pct:4.7,
	desc:'',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/293855_10151331663163745_2099861357_n.jpg?oh=f76bdfe64f28d1759aebbe8656e3b214&oe=57DD8BC7&__gda__=1474044022_6512ecf9c69a4d30a72f3d0186dcb66d',
	link:'https://www.facebook.com/photo.php?fbid=10151331663163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Rev. James',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/542989_10151331668478745_1709226964_n.jpg?oh=3607c087b1674a62a0d5194ee2da28ed&oe=57C96E7E&__gda__=1474419151_e5f069bc2f9605a300aba9f3a7a1f03e',
	link:'https://www.facebook.com/photo.php?fbid=10151331668478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Double Dragon',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/148410_10151356728003745_1112766365_n.jpg?oh=c700029f4e3686df0a3e80908a856018&oe=579B4539&__gda__=1473583280_c173fda2aabd2a19ba81c9604f2ce84f',
	link:'https://www.facebook.com/photo.php?fbid=10151356728003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pride of Oxford',
	pct:5.0,
	desc:'Just a very average beverage',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/558943_10151356728198745_2042204432_n.jpg?oh=2f8af75341ae3c22b402e8fce0761ae7&oe=57DAFBA2&__gda__=1473457496_e92ea0c3be3cfc80b828703fd1257fce',
	link:'https://www.facebook.com/photo.php?fbid=10151356728198745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bishops finger',
	pct:5.4,
	desc:'Written on the back: At 5.4% It\'s near the knuckle. ',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/533497_10151356728563745_544345125_n.jpg?oh=c845988c881c7af3f85a877ece410d55&oe=579A8C91&__gda__=1472763585_2f3ac36156576c1f416164cbf9b999a7',
	link:'https://www.facebook.com/photo.php?fbid=10151356728563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Dark Ale',
	pct:4.5,
	desc:'Flavoursome',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/521606_10151396303973745_830089732_n.jpg?oh=5778de0d50a86e2d5e89155e2ee8bb2d&oe=57CC6976&__gda__=1473189734_c8bc6060634f05346de225bf90a340f4',
	link:'https://www.facebook.com/photo.php?fbid=10151396303973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Golden Ale',
	pct:4.5,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/480275_10151356728773745_1268031446_n.jpg?oh=15c5a81e2a51f9bd5d8c129ab199e965&oe=57C8EAD5&__gda__=1474151268_2ca4082c6065bba476fbfe4dea094b0c',
	link:'https://www.facebook.com/photo.php?fbid=10151356728773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply Stout',
	pct:4.5,
	desc:'Very smooth and mild with a hint of chocolate',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/16733_10151396304708745_66219487_n.jpg?oh=dbfc1b95e8ee4082e9f125686e2b18a9&oe=57E681A5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tesco Lager',
	pct:4,
	desc:'You get what you pay for',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/530426_10151368077248745_1651993820_n.jpg?oh=f3a5211ac06f88f4b20fd9c31389187a&oe=57CA01A0&__gda__=1474559322_348fc4420831683d7ef4e789af087874',
	link:'https://www.facebook.com/photo.php?fbid=10151368077248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Abbey Beer',
	pct:6.5,
	desc:'Cool bottle. Terrible taste',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/424785_10151368077728745_484320810_n.jpg?oh=0e5b548dcce51887309a15f089739483&oe=579D3C7F&__gda__=1469737519_de6077f17105c4971c2f9ffc13afb07a',
	link:'https://www.facebook.com/photo.php?fbid=10151368077728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S Belgian Lager',
	pct:5.0,
	desc:'Easy drinking',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/734776_10151461674018745_617552379_n.jpg?oh=df1582311f73691f7d8a5f19408d2277&oe=57E1C988&__gda__=1474176949_41039b0a0cd2078fe5bf7f28eb79665a',
	link:'https://www.facebook.com/photo.php?fbid=10151461674018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'M&S French Lager',
	pct:4,
	desc:'Not as good as the Belgian one',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/486557_10151563840963745_1674492557_n.jpg?oh=104209e1b2016849576eb2d5d6e3553d&oe=57D29481&__gda__=1473514800_698d9170b4e8af67e7f38ad212e41842',
	link:'https://www.facebook.com/photo.php?fbid=10151563840963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennant\'s super',
	pct:9.0,
	desc:'If you\'re really drunk but want to be mike Stuart drunk then this is the beer for you',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/524743_10151649176508745_61534800_n.jpg?oh=61e6f925d25672c92a9cc6017cb83e58&oe=57E1B030&__gda__=1469926347_399b29b1691371f5cc77405e3ab1d2e3',
	link:'https://www.facebook.com/photo.php?fbid=10151649176508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kestral Super lager',
	pct:9.0,
	desc:'Must be consumer quickly. Before the taste sets in',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/16679_10151428525733745_2106487431_n.jpg?oh=509bede85cc6a4230a362e8e6fe1ea9d&oe=57DCA3AA&__gda__=1474351098_955e3105047e0ed78138f5cbc92145ce',
	link:'https://www.facebook.com/photo.php?fbid=10151428525733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlsberg special',
	pct:9.0,
	desc:'Tennants super for the discerning bum',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/429525_10151356729088745_1307200238_n.jpg?oh=104f26263431c24e453a97eef8109963&oe=57D22612&__gda__=1473626531_fac3369eef392f7fe1813205c234086f',
	link:'https://www.facebook.com/photo.php?fbid=10151356729088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crest Super',
	pct:10,
	desc:'As much as I like being able to drink half a bottle of wine in a single can of beer, this is just foul',
	score:2,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/923052_10151649178723745_1627305958_n.jpg?oh=bfb13b8f192d1f9ba0113eefd0b7ba38&oe=57DFA314&__gda__=1474396332_8731f4cb2ebb25d9f024dfed26e77617',
	link:'https://www.facebook.com/photo.php?fbid=10151649178723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old empire',
	pct:5.7,
	desc:'Not at all an ipa ',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/73511_10151356728858745_1899006793_n.jpg?oh=42e4ed776a40b335283012c95de2f7a1&oe=57C6BF20&__gda__=1473446505_fb67e69604048e03f11f99ec17a4941e',
	link:'https://www.facebook.com/photo.php?fbid=10151356728858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wainwrights',
	pct:4.1,
	desc:'Not too bad at all',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/401229_10151356729468745_228573429_n.jpg?oh=2fd12711ecb5cfdf9daa30ff5970f2d7&oe=57E7F768&__gda__=1474437688_95eda38ad85aceff3575d9e677519dd6',
	link:'https://www.facebook.com/photo.php?fbid=10151356729468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hobgoblin',
	pct:5.2,
	desc:'An average ale',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484314_10151368077318745_996314221_n.jpg?oh=7e77204cfa1c7233c99a8c1f94461d1b&oe=57C6A40A&__gda__=1474792538_7b62a71f445ef696a6d4ab0163848153',
	link:'https://www.facebook.com/photo.php?fbid=10151368077318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'King goblin',
	pct:6.6,
	desc:'Better than the standard hobgoblin',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash4/v/t1.0-0/p480x480/1656157_10152293086848745_1506561898_n.jpg?oh=3e88d3de03a424910c558abf954d336c&oe=57D2BE8B&__gda__=1474117358_3d9e705079e9192ac0457738622fb366',
	link:'https://www.facebook.com/photo.php?fbid=10152293086848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocking Rudolph',
	pct:4.2,
	desc:'Makes me feel all Christmasy',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/481704_10151368077713745_2078288487_n.jpg?oh=13cb8081a1abfb7dd643d2ea7ba80d90&oe=57C8A590&__gda__=1474181665_2e0ae6e3d4296df480e030638c252b76',
	link:'https://www.facebook.com/photo.php?fbid=10151368077713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hopping Hare',
	pct:4.4,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/399346_10151380245588745_647361323_n.jpg?oh=d0c1c57a79ac052b4f9531bec1afc579&oe=57C677F3&__gda__=1474768547_2c2477fd4fe37e1f265d2c2d0e0719e6',
	link:'https://www.facebook.com/photo.php?fbid=10151380245588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Champion',
	pct:5.0,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/537673_10151380245638745_991276182_n.jpg?oh=79a33cd2fdb0280b7fb636c1a7e414fd&oe=57C8049D',
	link:'https://www.facebook.com/photo.php?fbid=10151380245638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Glory',
	pct:4.5,
	desc:'Peach flavoured beer',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/9160_10151380243323745_1001869256_n.jpg?oh=e00428c6f331513965275fe6806a8f5f&oe=57D894AC&__gda__=1473511401_562efafd5f052b54da7cd0ec8fc53be9',
	link:'https://www.facebook.com/photo.php?fbid=10151380243323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fursty Ferret',
	pct:4.4,
	desc:'The name is better than the taste',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/224528_10151303867818745_1700962680_n.jpg?oh=9ca0c976798b5b952f39d984f0532e7f&oe=57D21B8E&__gda__=1473293172_62aa6e571304fa1d857d7219017640df',
	link:'https://www.facebook.com/photo.php?fbid=10151303867818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Tangle Foot',
	pct:5,
	desc:'A standard beer',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/379340_10151461671708745_1194104860_n.jpg?oh=12ce90a098e9e0b97c1bfe5c5e5d628d&oe=579B1744&__gda__=1474777077_f05fd9cdb2b9f23071db827aaef05597',
	link:'https://www.facebook.com/photo.php?fbid=10151461671708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Firkin fox',
	pct:4.3,
	desc:'Firkin terrible',
	score:2,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/542858_10151563945898745_1345565555_n.jpg?oh=1fd1f00dd64bdce92b4cb3895cd5d071&oe=57D8B55F&__gda__=1473123689_9c670c6ece184714b9ab64d4e1c63c12',
	link:'https://www.facebook.com/photo.php?fbid=10151563945898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger Poacher\'s choice',
	pct:5.7,
	desc:'You can really taste the liquorice. Not sure why someone put liquorice in beer',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/555262_10151461672288745_1320726068_n.jpg?oh=193f69c4ffbe76c625e088a108ad538f&oe=57E63AF0&__gda__=1473876704_3dab85cafa2b1a15721f518f8ca702b9',
	link:'https://www.facebook.com/photo.php?fbid=10151461672288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger blandford flyer',
	pct:5.2,
	desc:'Mild ginger',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/74705_10151798802528745_954132420_n.jpg?oh=83f8f0ae0942cf3438085802e3e1fff1&oe=57CA43B0&__gda__=1469941554_8faae9f4a2f43b134e60d96bb0321d4c',
	link:'https://www.facebook.com/photo.php?fbid=10151798802528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badger First Gold',
	pct:4,
	desc:'Very hoppy. Too hoppy',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/995127_10151798803233745_1165661191_n.jpg?oh=f73aea3d82bf805545cf62be18bc2f09&oe=57C8067A&__gda__=1474416502_1e2c8ea1b67dcb34fa99d344638db611',
	link:'https://www.facebook.com/photo.php?fbid=10151798803233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot Ale',
	pct:5.0,
	desc:'A nice solid ale',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/261583_10151368077943745_1842191344_n.jpg?oh=63b01554a46276c09f702772e2fbf3fd&oe=57D14E1D&__gda__=1472810900_72df758417a85e708d4de92171755b9a',
	link:'https://www.facebook.com/photo.php?fbid=10151368077943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bass',
	pct:5.0,
	desc:'The smoothness of Guinness with a lager taste',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/18911_10151368078368745_1781250452_n.jpg?oh=66bc3fa19b35fe1ac9e618b0bb0e25bd&oe=579ADF5D&__gda__=1473553760_0f0cf71538cb4b1aeef8037ee53c1744',
	link:'https://www.facebook.com/photo.php?fbid=10151368078368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lech',
	pct:5.0,
	desc:'Just plain average',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/61451_10151380245533745_1375457790_n.jpg?oh=38ff413a81916f11392325e04c3ecaf4&oe=57E5F068&__gda__=1473416277_e7c37745ebe3b3a2718b921d1bb73c0c',
	link:'https://www.facebook.com/photo.php?fbid=10151380245533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tatra',
	pct:6.0,
	desc:'Surprisingly good',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/406821_10151315683338745_1515210431_n.jpg?oh=35cdaca2c000f045d8b554544bc78945&oe=57D5DFB0&__gda__=1472657114_2e3124db7adf1d28eb2bdabe63508e2f',
	link:'https://www.facebook.com/photo.php?fbid=10151315683338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zywiec',
	pct:5.6,
	desc:'Rather high on the list of polish beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/482554_10151563946353745_976172500_n.jpg?oh=bdde53998ecb517102aec4fb7188dddc&oe=57E38204&__gda__=1473257529_edd755ce8959ff4a5caf5ed60b52e709',
	link:'https://www.facebook.com/photo.php?fbid=10151563946353745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Debowe mocne',
	pct:7.0,
	desc:'A nice sweetness. Bogaty smak!',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/923169_10151649174868745_1394415362_n.jpg?oh=2c2ee2580c741d47506328b6dabd942a&oe=57DF6F6E&__gda__=1473701636_159ac0861ed2315f80a467c24eb068e6',
	link:'https://www.facebook.com/photo.php?fbid=10151649174868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Warka',
	pct:5.7,
	desc:'Standard polish garbage',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/522510_10151563946283745_279086474_n.jpg?oh=deea5abec8412e2e36796a826388934f&oe=57CFA26D&__gda__=1474436669_ce21f1c92492d6d0bc97d37680a0ac83',
	link:'https://www.facebook.com/photo.php?fbid=10151563946283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wojak mocny',
	pct:7.0,
	desc:'Smooth and mild',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/321669_10151649177583745_849913582_n.jpg?oh=536e2c9800b4ba09b30c94ad16b96a20&oe=57E27CEB&__gda__=1474484629_f2abc2444ef0a62941460f5b5a1339c6',
	link:'https://www.facebook.com/photo.php?fbid=10151649177583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tyskie klasyczne',
	pct:5.0,
	desc:'The best polish beer I\'ve tasted',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1235025_10151888670293745_2077557673_n.jpg?oh=92634957fcd4ed1775e657fe34109ea8&oe=57E5A1D2&__gda__=1473012871_bc5b8c5adcfe9cac0c35ac4bc7d71096',
	link:'https://www.facebook.com/photo.php?fbid=10151888670293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Whistable Bay organic Ale',
	pct:4.5,
	desc:'Leaves a horrible bitter after taste',
	score:2,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/282837_10151380245908745_185055294_n.jpg?oh=de4d5e1c9a45c41b191e82f5ff3af0e7&oe=57CE2949&__gda__=1474053401_77e5441b3670fd9bed7bf18a0675505c',
	link:'https://www.facebook.com/photo.php?fbid=10151380245908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Lager',
	pct:4.5,
	desc:'A decent Lager',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/547553_10151396304058745_42264123_n.jpg?oh=7cef9adfde7a13513be19f82a82b0c0b&oe=57DE85DD&__gda__=1469973352_f191b6376a45c3ab2ad1e798fe9ae8a8',
	link:'https://www.facebook.com/photo.php?fbid=10151396304058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Isle of Arran blonde',
	pct:5.0,
	desc:'No idea why anyone would buy this twice',
	score:2,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/29588_10151396304143745_1361559358_n.jpg?oh=6c2851657065cf4d3911fe867dd41e24&oe=57E400E1&__gda__=1473304540_94ac2a1cc157cbe0b3d377880063bd53',
	link:'https://www.facebook.com/photo.php?fbid=10151396304143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Edmunds',
	pct:4.5,
	desc:'A little bit too bitter',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/521840_10151396304393745_1554011177_n.jpg?oh=d012c62c90cf0268d9069ee9f58fc98e&oe=57E4F592&__gda__=1469899562_67821b75a9fef8b354e4d702931daf4d',
	link:'https://www.facebook.com/photo.php?fbid=10151396304393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs Back TEA',
	pct:4.2,
	desc:'Only has a hint of tea',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/282869_10151396304613745_908615539_n.jpg?oh=8f9ca1c2ec23149f0aa1fdfa9b801196&oe=57D99C82&__gda__=1472906687_c5732581c992c41cf6ef4d16463af92b',
	link:'https://www.facebook.com/photo.php?fbid=10151396304613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holsten Pils',
	pct:5.0,
	desc:'Ok when it\'s really cold, otherwise very average',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/581508_10151396304968745_547445318_n.jpg?oh=8d7ac915d38e35b0a1123d7813e44402&oe=57D6F96C&__gda__=1474332028_66109d7ccb5b3beed0eba2ecc9d2687c',
	link:'https://www.facebook.com/photo.php?fbid=10151396304968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Thumper',
	pct:5.6,
	desc:'Gave my taste buds a thumping',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/62117_10151396305243745_1878047628_n.jpg?oh=632db348811c422771514a36c4baaba4&oe=57CEFB6C&__gda__=1474222061_1af50df9017e20b911066341f58201f9',
	link:'https://www.facebook.com/photo.php?fbid=10151396305243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pacifico clara',
	pct:4.5,
	desc:'A fairly standard beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/382796_10151396306023745_1333802839_n.jpg?oh=fd3408b775102a195a984015485588f3&oe=57CB3F6B&__gda__=1473065821_6b9af9a00030cf7b7719553919e1515a',
	link:'https://www.facebook.com/photo.php?fbid=10151396306023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Christmas cracker',
	pct:4.2,
	desc:'Bitter and nutty',
	score:2,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/408606_10151428525743745_1997517717_n.jpg?oh=7bc21ded881361336aefb1203eebec34&oe=57C8883F&__gda__=1474521609_9032766357dca4ba7ad2bb2b36effddf',
	link:'https://www.facebook.com/photo.php?fbid=10151428525743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deuchars IPA',
	pct:4.4,
	desc:'Gets better after a few sips',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/603151_10151428525283745_670825446_n.jpg?oh=3b04d287d597305bc8128e0beac0c6cf&oe=57DA6AB0&__gda__=1473548173_79885ee975b0fce50df8d2946427b62f',
	link:'https://www.facebook.com/photo.php?fbid=10151428525283745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser',
	pct:4.8,
	desc:'Beer flavoured water',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/12558_10151356728378745_471931293_n.jpg?oh=878b2277e6a0f54eaf751e7b4a0a89a7&oe=57E47B19&__gda__=1469698988_9f59e52749c61ea74d759ec4eb729c99',
	link:'https://www.facebook.com/photo.php?fbid=10151356728378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada pale ale',
	pct:5.6,
	desc:'A quality strong flavour',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/23377_10151428526143745_898774029_n.jpg?oh=e69271e1698bec4fdd7ab3a0d3cd5f24&oe=579ADC1D&__gda__=1474006440_d566cad4d808828ed7f405c3abe97143',
	link:'https://www.facebook.com/photo.php?fbid=10151428526143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black chocolate stout',
	pct:10.0,
	desc:'Be ready for a kick',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1001078_10151798818383745_544568245_n.jpg?oh=1afbded5245a8b1bda0611d3a37c0a98&oe=57D3B98F&__gda__=1474169300_45a5545f0521c034c72444de03668db8',
	link:'https://www.facebook.com/photo.php?fbid=10151798818383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Miller 4',
	pct:66,
	desc:'Good for an American beer',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/603011_10151461681363745_1924966324_n.jpg?oh=e85614e86c9d3258bf9ccb37783e601b&oe=57DD3578&__gda__=1469729984_9ea0f7093e3b7ca53bff6ccc95fb486d',
	link:'https://www.facebook.com/photo.php?fbid=10151461681363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blue moon',
	pct:5.4,
	desc:'Tasty',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/603175_10151428525338745_1084934789_n.jpg?oh=b17788b3aaeb8b17670dbdeb1dc4ebb0&oe=57E14FE5&__gda__=1472986452_f1edc35bad7b5b42774417dcd70c2293',
	link:'https://www.facebook.com/photo.php?fbid=10151428525338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coors Light',
	pct:4.3,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/3398_10151428533958745_102290057_n.jpg?oh=42f9916050748e3b828ebf76e939b09b&oe=57C73BC4&__gda__=1474584675_548d22b1221061cd566e45586140b1b4',
	link:'https://www.facebook.com/photo.php?fbid=10151428533958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red pig ale',
	pct:5.0,
	desc:'Tastes more like an american beer than a mexican one',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/67811_10151368077158745_1890584013_n.jpg?oh=38087f7855b4739eb490eb5522bfc887&oe=57C896C3&__gda__=1474836362_d43445d95c90569d403f7693bf8c1b72',
	link:'https://www.facebook.com/photo.php?fbid=10151368077158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lemongrass Saison',
	pct:5.0,
	desc:'A wheat beer taste but a little more fresh',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/534376_10152147730388745_345071070_n.jpg?oh=a1db1d7612d268a849e9b607cb2e78e6&oe=57CCFECD&__gda__=1469769036_13e676ddb0ac81b31242009129dad134',
	link:'https://www.facebook.com/photo.php?fbid=10152147730388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coconut porter',
	pct:5.7,
	desc:'Can’t really taste the coconut and seems to curdle the stomach. Could just be fighting with the other beers. Or the fried rice',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1479322_10152147730723745_835775935_n.jpg?oh=9d0fdb55153c14d61895e753031e2d54&oe=57DD9F07&__gda__=1472788739_cb0cfc72372d9b1d8d0a1bfeeacf0b67',
	link:'https://www.facebook.com/photo.php?fbid=10152147730723745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed Root brew',
	pct:4,
	desc:'Tastes like a ginger beer. But it\'s not',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/184446_10151428525538745_507755493_n.jpg?oh=d2d3c9d01608d41e79a4ba3a6bc832ba&oe=57DDA106&__gda__=1474818902_653c955905fcacce785be3f3cbac92d2',
	link:'https://www.facebook.com/photo.php?fbid=10151428525538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jeremiah Weed',
	pct:4,
	desc:'Mike would drink this. It\'s not beer',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/409508_10151396305103745_1792863383_n.jpg?oh=759be1bb648b133fcf5f4dedb90d452e&oe=57E30DCF&__gda__=1474666233_ae03c90fc362852a640e1605960930f0',
	link:'https://www.facebook.com/photo.php?fbid=10151396305103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Guinness',
	pct:4.3,
	desc:'Cannot be rated',
	score:null,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/230829_10151296241408745_792356720_n.jpg?oh=aa76cc7fd064b335fa9aaed0ac57e6be&oe=57CAEBC4&__gda__=1474439519_7ce539b10e32e0cf0047273b3ea7bc7e',
	link:'https://www.facebook.com/photo.php?fbid=10151296241408745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gallway hooker',
	pct:4.3,
	desc:'A little bit off',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/542152_10151428526223745_595487151_n.jpg?oh=9c1cc656d0e3e7f0acceb867462d1b3c&oe=57E7DC9D&__gda__=1474659277_289fec667e4051ceb2f30d7e0ab828fc',
	link:'https://www.facebook.com/photo.php?fbid=10151428526223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harp',
	pct:5,
	desc:'Described as harpic toilet cleaner but has a much nicer taste',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/426781_10151428526053745_1807147542_n.jpg?oh=09c6eb6e9ba0223a4e85cc8d67abc659&oe=57CAF2AF&__gda__=1473021470_38a8ba3f1a1280a2e68144cff0cb69ea',
	link:'https://www.facebook.com/photo.php?fbid=10151428526053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Five lamps',
	pct:4.2,
	desc:'Bad to start, bad to finish',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/486257_10151428526493745_65566473_n.jpg?oh=d74ebb0f2918f8bea6b6434f1fbea8be&oe=57D11CFD&__gda__=1473804360_f57bedbfcd84f0f8d2903fa2b6432652',
	link:'https://www.facebook.com/photo.php?fbid=10151428526493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carrig',
	pct:4.3,
	desc:'An easy bev',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1238989_10151888668133745_55669060_n.jpg?oh=7c2a8d5878dbe7a866e6577e99e30acf&oe=579C18E2&__gda__=1474172572_7b196c34de5527ae6ed12cce5a08e6b6',
	link:'https://www.facebook.com/photo.php?fbid=10151888668133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kilkenny',
	pct:4.3,
	desc:'A little too bitter',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/603305_10151428526818745_310997790_n.jpg?oh=ea85cdeeca182b45ae02eb57ebe4b07f&oe=57999E47&__gda__=1473423673_7a5c77029e16cf6de06b7ab9c8545b04',
	link:'https://www.facebook.com/photo.php?fbid=10151428526818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Smithwicks',
	pct:4.5,
	desc:'A smooth ale',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/14944_10151428531923745_1130605177_n.jpg?oh=bcb39aab2656942e3eea12e3c98ab1f8&oe=57DF265F&__gda__=1472783126_17308602d6ec8e143209a2b0431221a4',
	link:'https://www.facebook.com/photo.php?fbid=10151428531923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caledonia smooth',
	pct:4.0,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/150976_10151428531978745_744791164_n.jpg?oh=a1313e994ea25430bd66c4f0cb93bc2a&oe=57D46631&__gda__=1473766497_57b356fcf5e04f1daec5c1045f92faad',
	link:'https://www.facebook.com/photo.php?fbid=10151428531978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'hara\'s Irish pale ale',
	pct:5.2,
	desc:'Kind of a mix between an IPA and a pale ale',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1233480_10151888666808745_111746617_n.jpg?oh=c163c149e8f17bad7c4c613ad75da917&oe=579BA3FC&__gda__=1474397728_97059565f954d88ee7cbdc1655100fc4',
	link:'https://www.facebook.com/photo.php?fbid=10151888666808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O\'haras Irish red',
	pct:4.3,
	desc:'Maybe the worst beer ever',
	score:1,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/150601_10151428532178745_1335701826_n.jpg?oh=c9d3ce84bc0f2b79b7cbfe9cb8d5a999&oe=57DFAC6C&__gda__=1473008730_d7101880247ca5dafc2e39115af619a9',
	link:'https://www.facebook.com/photo.php?fbid=10151428532178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cyclone IPA',
	pct:7.0,
	desc:'Nice but way too heavy right now',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1173698_10151888668208745_564925063_n.jpg?oh=02c6a99386ed3cea77d6737ec63debc5&oe=57CE01CC&__gda__=1472774004_620cfe9c87e91de2a9beb8aa2236c8aa',
	link:'https://www.facebook.com/photo.php?fbid=10151888668208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brahma',
	pct:4.3,
	desc:'Easy bevving',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/312335_10151428526733745_366386591_n.jpg?oh=7554deef981788db2ad803347d9fdd69&oe=57C8C19F&__gda__=1473727201_c78c761ff9c2e213c0065a5e8e717c0e',
	link:'https://www.facebook.com/photo.php?fbid=10151428526733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog Hardcore IPA',
	pct:9.2,
	desc:'A lot of flavour. Couldn\'t handle many',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/537412_10151428532378745_1195699464_n.jpg?oh=12bb965f3d6fe09f2b446e4d161c38d8&oe=57DCDD3A&__gda__=1473022438_08c9d8383b0446d2c8c2e54e89ce8bfd',
	link:'https://www.facebook.com/photo.php?fbid=10151428532378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punk IPA',
	pct:5.6,
	desc:'Quality IPA',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/954631_10151694534143745_666636865_n.jpg?oh=eac8feb8f7d8c63d434f6cecc33ac63d&oe=579D5EB6&__gda__=1474763639_b4a35f3bb05671a684653d0955667c22',
	link:'https://www.facebook.com/photo.php?fbid=10151694534143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Psycho',
	pct:10,
	desc:'This beer won\'t stop punching me in the face',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1236502_10151929072183745_392721452_n.jpg?oh=7502848ee5b30d6684c670be089a1ba3&oe=579E8063&__gda__=1474099097_9836800b4bd1868642dae7a55a8c9e95',
	link:'https://www.facebook.com/photo.php?fbid=10151929072183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewdog 5am saint',
	pct:5,
	desc:'Quality amber',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/970089_10151694532248745_1860752860_n.jpg?oh=4c84efa336e0c6e89735eb311e1ce975&oe=579A0505&__gda__=1474339212_8828acb834baddefd0b6ea77685068e9',
	link:'https://www.facebook.com/photo.php?fbid=10151694532248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Club',
	pct:3.8,
	desc:'A beer for anyone',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1003490_10151798796948745_2041837456_n.jpg?oh=9783b69be4064004fcc6a1c497352949&oe=57C72CD4&__gda__=1473353857_d515ab4d3c0e8294a8540b07c71362e4',
	link:'https://www.facebook.com/photo.php?fbid=10151798796948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crew IPA',
	pct:6.4,
	desc:'',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/63719_10151428532313745_813090694_n.jpg?oh=f4b8ce72e737c12cda08b585177ca9f6&oe=57D2908B',
	link:'https://www.facebook.com/photo.php?fbid=10151428532313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tennents',
	pct:4.0,
	desc:'The standard in Scotland',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/530689_10151428532548745_22366953_n.jpg?oh=2860e55e33fa3eb202f5a424cff3af7f&oe=57DAB39A&__gda__=1472942383_2cdee72babc13f63041fa8bfee140cf1',
	link:'https://www.facebook.com/photo.php?fbid=10151428532548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trouble brewing golden ale',
	pct:4.3,
	desc:'Very malty',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/397706_10151428533088745_22640063_n.jpg?oh=b35e27f7851aaef8b19574746db1766b&oe=57D74422&__gda__=1474648215_d5c30b612cc74b0cade1f46f70b694af',
	link:'https://www.facebook.com/photo.php?fbid=10151428533088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wold top against the grain',
	pct:4.5,
	desc:'Too harsh',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/555458_10151428533018745_1322698428_n.jpg?oh=554036470be0f4102449039cd4bdd389&oe=57D59A8C&__gda__=1473580956_642c88a0a67a9ddc24fc1aae06adcad5',
	link:'https://www.facebook.com/photo.php?fbid=10151428533018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ginger beard',
	pct:4.2,
	desc:'A tasty ginger beer',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/184456_10151428533288745_183483934_n.jpg?oh=4bf4506373e6598acf1b6c0b617fc95e&oe=57E40379&__gda__=1469704489_c2eea034eca2afa8226a8cd30c8e3f18',
	link:'https://www.facebook.com/photo.php?fbid=10151428533288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells banana bread beer',
	pct:5.2,
	desc:'You can really taste the banana',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/68598_10151428533853745_1576633844_n.jpg?oh=3a8b32512b105284f8aa534900e9abe3&oe=57D34D81&__gda__=1474446847_fdd25e9b5251cf601304a38b604288b0',
	link:'https://www.facebook.com/photo.php?fbid=10151428533853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'KEO',
	pct:4.5,
	desc:'Takes a bit to get used to',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/12605_10151428533818745_35949284_n.jpg?oh=682d12ba9a95f125af6f149e78ac9d3a&oe=57E5914D&__gda__=1473668074_a6460b1f093bf97d3e18c2e262caf61f',
	link:'https://www.facebook.com/photo.php?fbid=10151428533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mongoose',
	pct:5.0,
	desc:'Standard',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/429123_10151428534248745_2064241641_n.jpg?oh=ce8ad586bcb9eddf2fdaff1cf02fcbb0&oe=57DB12C1&__gda__=1474262007_b2ce2ffb1c0554a2e34f096aa3fc4414',
	link:'https://www.facebook.com/photo.php?fbid=10151428534248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flack Catcher',
	pct:4.4,
	desc:'Average',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/19223_10151428534118745_318984545_n.jpg?oh=264ebcf1c3c099da4f144fd24e0cfeb5&oe=57C75275&__gda__=1473521268_01323b33d373a731d26c892f51f88e82',
	link:'https://www.facebook.com/photo.php?fbid=10151428534118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedigree',
	pct:5,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/530655_10151461672258745_1106668421_n.jpg?oh=3b2ff26b4b11ba956fab2cbb348ff00e&oe=57E05BB4&__gda__=1473516293_fa138ca1835fbafc9efe202b15388d7e',
	link:'https://www.facebook.com/photo.php?fbid=10151461672258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fagins',
	pct:4.1,
	desc:'Gay',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/19212_10151461672388745_962581922_n.jpg?oh=2ad6b1ae8ab57bd01df8636cfe09de3e&oe=57CBA01B&__gda__=1474714854_c2ccfd9d5ff217be6f2eeef1a696ca11',
	link:'https://www.facebook.com/photo.php?fbid=10151461672388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London Pride',
	pct:4.1,
	desc:'The standard London Ale to measure against',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/734258_10151461672898745_380826809_n.jpg?oh=c69d210c30c1fe7bc0a46b42689f685b&oe=57E0A779&__gda__=1473667512_4fa45f0992ba370edb3d4cdfec50dfea',
	link:'https://www.facebook.com/photo.php?fbid=10151461672898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kent\'s best',
	pct:4.1,
	desc:'Would hate to see the worst',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/539055_10151461672828745_520276173_n.jpg?oh=443bbbefc67c31da0a4a2a005bdc57e6&oe=579B8E4A&__gda__=1473889626_d4cd894dfe99057421f9fa86ba5de434',
	link:'https://www.facebook.com/photo.php?fbid=10151461672828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Peroni',
	pct:5.1,
	desc:'Italian standard',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/37080_10151396305588745_415450314_n.jpg?oh=09ae2b73861df7a9e4a8465de11aee47&oe=57D16354&__gda__=1469812193_942ccda68a1eeb4ede5bbb0ce57706cf',
	link:'https://www.facebook.com/photo.php?fbid=10151396305588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Poretti',
	pct:5.4,
	desc:'Italian tasting',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/554278_10151461673508745_1407613949_n.jpg?oh=4f362db648daad5f3000522c95439a9d&oe=579961DD&__gda__=1473402988_638249bae85475008c7c21100905af18',
	link:'https://www.facebook.com/photo.php?fbid=10151461673508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra moretti',
	pct:4.6,
	desc:'Nice and tasty',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1187105_10151860442623745_1479905492_n.jpg?oh=17e8a325437250c7a7bd8ffc1f4b9362&oe=57D38CDB&__gda__=1474414374_7ac0da4e135d216dabca78468a41b8b8',
	link:'https://www.facebook.com/photo.php?fbid=10151860442623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tetley smooth',
	pct:3.7,
	desc:'I much prefer this to tea',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/394796_10151461673368745_1651974167_n.jpg?oh=eae15cf97bed4aaf01a32921d5ed9c90&oe=57D11395&__gda__=1473530275_1f243e739bde2c318049bd06a7d47994',
	link:'https://www.facebook.com/photo.php?fbid=10151461673368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jack Frost',
	pct:4.5,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/32180_10151461673683745_1033363252_n.jpg?oh=1fa1bdb7af8c5eefdd0d02ca9b694dbd&oe=57CA8971&__gda__=1473258511_1d07cb327ae149f3685be482c1435d86',
	link:'https://www.facebook.com/photo.php?fbid=10151461673683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staffordshire IPA',
	pct:5.5,
	desc:'A mild IPA',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/535438_10151461674053745_360684095_n.jpg?oh=2278b8c24b8e0aa253b280a06dffb740&oe=57D3B6C7&__gda__=1473623225_7c0cebdd8510f65f9782e2da7da73d67',
	link:'https://www.facebook.com/photo.php?fbid=10151461674053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John smiths extra smooth',
	pct:3.8,
	desc:'What it lacks in alcohol it makes up in foulness',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/598767_10151461673913745_877248330_n.jpg?oh=70c173e50b096586818abbc259a131fc&oe=579D8D64&__gda__=1473276717_de194c7535122ed2adb2427bfbc80e16',
	link:'https://www.facebook.com/photo.php?fbid=10151461673913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Pale Ale',
	pct:4.5,
	desc:'Tasty',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/549950_10151461681523745_1486815544_n.jpg?oh=52f7f0c72ea5e467843e4c52ba73b4eb&oe=57E475C6&__gda__=1474651511_16886b1910c5cdb87059f11b789530cc',
	link:'https://www.facebook.com/photo.php?fbid=10151461681523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers sparkling ale',
	pct:5.8,
	desc:'Not as good as the green, but has more kick',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/528845_10151602295348745_1649172027_n.jpg?oh=76c148f1ecacbd0c0a7055559706efa6&oe=57CA54D2&__gda__=1473602659_6f04c53cfdb94991a212bf905911935c',
	link:'https://www.facebook.com/photo.php?fbid=10151602295348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers extra stout',
	pct:6.3,
	desc:'Twice the stout taste of a regular stout',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/484705_10151602292338745_274952911_n.jpg?oh=45130b83d10e10afc59628c10388094b&oe=57D6ADB3&__gda__=1474449357_343bf19c3371fcd09dee58af5e77e240',
	link:'https://www.facebook.com/photo.php?fbid=10151602292338745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Lager',
	pct:4.8,
	desc:'Pretty average, but you get used to it',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p180x540/421878_10151563839458745_1540530586_n.jpg?oh=c6a809b25066f3e712358c2c8c2740b3&oe=57E6E0A3&__gda__=1474297237_d91d286f15eee82532d21807ef988e25',
	link:'https://www.facebook.com/photo.php?fbid=10151563839458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Resch\'s',
	pct:5.0,
	desc:'A bit harsh',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/484746_10151563946993745_129350151_n.jpg?oh=97cc44fc53686fe8f3b20d7496ee1c21&oe=57D68FDC&__gda__=1474352290_bdbedc7195ee5e5f672e3f5613b09372',
	link:'https://www.facebook.com/photo.php?fbid=10151563946993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little Creatures Pale Ale',
	pct:5.2,
	desc:'',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/543882_10151461681178745_1285845134_n.jpg?oh=c0059d5048287929267c3367798b0788&oe=57CC5EE5&__gda__=1474274537_b87e19fc702df452dbd9d94323db4675',
	link:'https://www.facebook.com/photo.php?fbid=10151461681178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boags',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/734606_10151461683093745_1782530484_n.jpg?oh=56e73eeb454bb15107a157c89af0622f&oe=57CC8833&__gda__=1473509209_a673e8123a244da5a95fa41585029206',
	link:'https://www.facebook.com/photo.php?fbid=10151461683093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys Extra Dry',
	pct:4.6,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/543796_10151461681748745_852056112_n.jpg?oh=3485e865bbad4a08b75e5754998bff88&oe=57DA61A0&__gda__=1473744929_8f1d2d24e6112c041c4166abef49c138',
	link:'https://www.facebook.com/photo.php?fbid=10151461681748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Victoria Bitter',
	pct:4.9,
	desc:'You either love it or hate it',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/521589_10151461681978745_514499327_n.jpg?oh=fa161f808586635a8ee138710f7ce85b&oe=57E2C198&__gda__=1473272089_a45bcc53b02f57baf06c07a501388687',
	link:'https://www.facebook.com/photo.php?fbid=10151461681978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown Lager',
	pct:4.9,
	desc:'A rich man\'s VB',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/537401_10151461682783745_431486220_n.jpg?oh=8e3576c1692acf0521a996aeb4ddc4bf&oe=57DF1EF6&__gda__=1474001611_44849681420e5ec6455d108cd0cfa914',
	link:'https://www.facebook.com/photo.php?fbid=10151461682783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys old',
	pct:4.4,
	desc:'Not a stout, not a lager. Some sort of strange crossbreed',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/644421_10151563947083745_12453002_n.jpg?oh=79749c358eb4169e1bf2549e26c6d18e&oe=57DB8730&__gda__=1473143905_859b96dbc437dcbbb9dc1873ef24372a',
	link:'https://www.facebook.com/photo.php?fbid=10151563947083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys New',
	pct:4.6,
	desc:'Not sure why I used to drink this all the time',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/74164_10151461683923745_699202545_n.jpg?oh=ebcaa0077a04baabb1df8f1dd5a593be&oe=57E0261B&__gda__=1473015526_869306862a998604cc1279542dde7cc9',
	link:'https://www.facebook.com/photo.php?fbid=10151461683923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:4.6,
	desc:'Decent',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/602093_10151563947313745_1098411203_n.jpg?oh=a641ff4f96f3a8fbe75a7cffd1307698&oe=579B8A79&__gda__=1472925827_bba025a2750328f31dad3bc4e02f9e4f',
	link:'https://www.facebook.com/photo.php?fbid=10151563947313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Platinum blonde',
	pct:4.6,
	desc:'Meh',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/576008_10151563947183745_1748647687_n.jpg?oh=4ecf640e058e9e6d8787c0f44858d654&oe=57DD3980&__gda__=1474091190_683005516be0eaf4d818ed0ea8540965',
	link:'https://www.facebook.com/photo.php?fbid=10151563947183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Three sheets Pale Ale',
	pct:4.9,
	desc:'A proper pale ale',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/431581_10151563947388745_1746265085_n.jpg?oh=80796741fd557b5dfac6a3d271d3a026&oe=57C7B260&__gda__=1473835350_f0b737ecf3434887c3d77be429582c44',
	link:'https://www.facebook.com/photo.php?fbid=10151563947388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hite',
	pct:4.5,
	desc:'Strange can, crisp taste',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/530584_10151461684393745_825973740_n.jpg?oh=560af40785d2ff5468343240d8af7076&oe=57CEBFC5&__gda__=1472948885_bf3ab59d48aed6bb33be342f934183b9',
	link:'https://www.facebook.com/photo.php?fbid=10151461684393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Helier',
	pct:5.0,
	desc:'Actually a cider, but it has a great name',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/480687_10151461682768745_502482125_n.jpg?oh=601a502645a886a13d30bf7fa67ae96a&oe=57DF82E2&__gda__=1472754354_a7969b7d3796d86a7d3ace3c4baaa370',
	link:'https://www.facebook.com/photo.php?fbid=10151461682768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cobra King',
	pct:7.5,
	desc:'Nicer, stronger and bigger than it\'s crappy cousin. That\'s why it\'s the king',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/374324_10151461684623745_844347532_n.jpg?oh=687180842819055c065fbf06b081aa54&oe=57E17434&__gda__=1474123108_4280814e2521cc1789d2507f4da66653',
	link:'https://www.facebook.com/photo.php?fbid=10151461684623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kingfisher',
	pct:4.8,
	desc:'The better Indian beer',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/733981_10151563846938745_1548720674_n.jpg?oh=2aa421dfae2f8f1e523899cfd0e07df4&oe=57CFC817&__gda__=1472607407_08915114613b6ae48d8ff5c75cb5e4b1',
	link:'https://www.facebook.com/photo.php?fbid=10151563846938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cambridgeshire Golden Ale',
	pct:4.2,
	desc:'Plain',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/541370_10151563840993745_1315027570_n.jpg?oh=9ca6928dc9bb1aa33695355752f770ca&oe=57D013B2&__gda__=1474542782_ff78d0668282756dbcdb1a3fad12b6a7',
	link:'https://www.facebook.com/photo.php?fbid=10151563840993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'March of the Penguins',
	pct:4.9,
	desc:'An average stout',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/75028_10151563841203745_1533936884_n.jpg?oh=7bcf6612fcd227e60e8ff841c5d48d0d&oe=57D948A9',
	link:'https://www.facebook.com/photo.php?fbid=10151563841203745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nils Oscar God Lager',
	pct:5.3,
	desc:'Not too bad',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/485993_10151563842368745_684144336_n.jpg?oh=1869f8fefb1a1e4361174da3669c9623&oe=57D833D8&__gda__=1473895334_ded63ed1d0ee80ee84f276e3bc795f55',
	link:'https://www.facebook.com/photo.php?fbid=10151563842368745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Star',
	pct:5.1,
	desc:'Smooth and cheap',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/601342_10151563843928745_511866900_n.jpg?oh=5cd20966399aa4974f3e36107587798c&oe=57E29DDD&__gda__=1469755341_cbb91aec1a38b13c1ccce3ea1ddaf18b',
	link:'https://www.facebook.com/photo.php?fbid=10151563843928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Worthingtons White Shield',
	pct:5.6,
	desc:'Flavoursome',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/380993_10151563843448745_1342021225_n.jpg?oh=c4afd19e896a1a470658e276e1e3f887&oe=57DEAC09&__gda__=1473587896_5dc5508ea6844f26288e272b2bab01d8',
	link:'https://www.facebook.com/photo.php?fbid=10151563843448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'British Bulldog',
	pct:4.3,
	desc:'Not bad for a bitter',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/479882_10151563844403745_1566533959_n.jpg?oh=63d76f4cd7dcd088ea720e98a419f099&oe=57D3C439&__gda__=1473649167_309211e7eda834627056cd9fbac71463',
	link:'https://www.facebook.com/photo.php?fbid=10151563844403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Newcastle Brown Ale',
	pct:4.7,
	desc:'Looks kind of like the runoff from some industrial process. Really makes me wonder what I\'m drinking. Amazingly it doesn\'t taste that bad',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/644361_10151563845228745_821469901_n.jpg?oh=473b269615f741529bc900b234914128&oe=57D13BB6&__gda__=1473572747_80d68814aa51d678514047251dee8fcc',
	link:'https://www.facebook.com/photo.php?fbid=10151563845228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrooks pale ale',
	pct:4.5,
	desc:'Another sock flavoured beer',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/545225_10151860439253745_1854856255_n.jpg?oh=806497fc2b9a7d4304c0a656856736b1&oe=57CA65FB&__gda__=1474092267_d0ca0d819e4320665fc5d60d8742c3b1',
	link:'https://www.facebook.com/photo.php?fbid=10151860439253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sambrook\'s Brewery Junction',
	pct:4.5,
	desc:'Not sure what taste they\'re going for here… Maybe socks',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/482628_10151563846178745_1536949417_n.jpg?oh=f2bcf9b2c04c9cd069713fab016ea084&oe=57E05936&__gda__=1474838330_c9dece22c4ce65506a8e81cf73aa15aa',
	link:'https://www.facebook.com/photo.php?fbid=10151563846178745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duff',
	pct:4.7,
	desc:'Not sure how Homer Simpson drinks this stuff',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/522569_10151563850998745_438604131_n.jpg?oh=cbabd96607a2293a4fc2ec4d554f6cda&oe=57DF1ADA&__gda__=1469935268_4db747b2fc19d8dd2a89c40b30d4dbfa',
	link:'https://www.facebook.com/photo.php?fbid=10151563850998745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Novomestsy Ležák',
	pct:4.5,
	desc:'A different taste',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/625446_10151563847698745_35732168_n.jpg?oh=e222279709b9dbb73467fb1cb62651c3&oe=57D99F69&__gda__=1474347666_28e1aacaf194c9f2737550323f506be8',
	link:'https://www.facebook.com/photo.php?fbid=10151563847698745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Branik',
	pct:5.5,
	desc:'Consumed in a room full of smoke. May have influenced the rating',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/486531_10151563848553745_1919030008_n.jpg?oh=43373008458be50de744d5c118e3c51c&oe=57DF60A7&__gda__=1474699286_d0231b1c8d2e5712d356f8840c0d84c1',
	link:'https://www.facebook.com/photo.php?fbid=10151563848553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'X33',
	pct:12.6,
	desc:'Too sweet. Have one and move on',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/578557_10151563849238745_550093869_n.jpg?oh=2961e473436f75f63a2be029f73b3721&oe=579C3BE4&__gda__=1474139237_4ae07d20a0dc4200be67d362a3b6659f',
	link:'https://www.facebook.com/photo.php?fbid=10151563849238745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oldgott',
	pct:5.2,
	desc:'A mild taste of honey',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/374397_10151563850303745_1875521604_n.jpg?oh=556865f362428d34420c3b440f0cf271&oe=57C7A675&__gda__=1474645188_158e2d0da77893a71068a42cc91124ad',
	link:'https://www.facebook.com/photo.php?fbid=10151563850303745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pilsner Urquell',
	pct:4.4,
	desc:'Actually one of the worse Czech lagers',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/544330_10151563851598745_2141597246_n.jpg?oh=06df57546152f300fd90d20bdfd1f09b&oe=57C66694&__gda__=1474234924_ccbf0ccf9cfa4d3e4950a26f58c5b426',
	link:'https://www.facebook.com/photo.php?fbid=10151563851598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser Budvar',
	pct:5.0,
	desc:'Far better than its american cousin',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/165000_10151428534173745_615410288_n.jpg?oh=2613ab807f0abe45033dda3d42db9fc9&oe=579AA62F&__gda__=1472619345_4f1fbbac249d5a36282d4cc2c441a284',
	link:'https://www.facebook.com/photo.php?fbid=10151428534173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel Dark',
	pct:3.8,
	desc:'Smooth and flavoursome',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/602178_10151563853043745_1776474012_n.jpg?oh=7d096b605e52a1692b35cf3d2b2de5d1&oe=57E7214F&__gda__=1473550839_c175709bbc7f9b5c0e7d0b5d0265bde4',
	link:'https://www.facebook.com/photo.php?fbid=10151563853043745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gambrinus',
	pct:5.0,
	desc:'A poor mans beer',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/226421_10151563853523745_546548236_n.jpg?oh=20471696ec0aea5f35029e0967e0c684&oe=57D177B4&__gda__=1473924605_60e34f7c9f7d7e0167322bb8f79c308b',
	link:'https://www.facebook.com/photo.php?fbid=10151563853523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bernard',
	pct:5.1,
	desc:'Even tastes good after the second opening',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/44464_10151563938373745_1447128785_n.jpg?oh=f0a3c4257aedf7206a135effe8b845bb&oe=579ABD88&__gda__=1472779701_92c3a734df631b381831c1ef66a4e394',
	link:'https://www.facebook.com/photo.php?fbid=10151563938373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fenix',
	pct:4.7,
	desc:'Wheat beer with a hint of orange',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/625502_10151563944728745_168727372_n.jpg?oh=24b759dad59258314669b2bdca9977be&oe=57E5E59B&__gda__=1474520602_2bb29d15c419ab4075940a446e6fbe9c',
	link:'https://www.facebook.com/photo.php?fbid=10151563944728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozel',
	pct:4.0,
	desc:'',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/533976_10151331665848745_1640769773_n.jpg?oh=2772d20c71871850cfda223253e5ecf2&oe=57CBFCD3&__gda__=1474033705_93b259fa1d151c44cd1ca48845b9ce24',
	link:'https://www.facebook.com/photo.php?fbid=10151331665848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crakonos',
	pct:5.1,
	desc:'I need to know who this old bever is',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/487632_10151563944693745_625226538_n.jpg?oh=e824a48d933bbab98ee92fa7deaf8e92&oe=57D184D4&__gda__=1474490282_a59b607809b1064bcee3fe687ebd150e',
	link:'https://www.facebook.com/photo.php?fbid=10151563944693745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birell 0',
	pct:49,
	desc:'Damn language barrier. I consider this a beer flavoured soft drink',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/733744_10151563944413745_394586851_n.jpg?oh=123a7df94edf9e53806ebf32b65c5a98&oe=57E7CA7F&__gda__=1474713086_6d2139b59b643f7e817357b6b416e0ac',
	link:'https://www.facebook.com/photo.php?fbid=10151563944413745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice 10',
	pct:4.2,
	desc:'Smooth with some sort of extra flavour. Caramel maybe',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/549300_10151563944628745_804920715_n.jpg?oh=9cde302f31774e107da9287280191266&oe=57D809E8&__gda__=1473867009_93e3c8059d081ccb6e067b75a82ad005',
	link:'https://www.facebook.com/photo.php?fbid=10151563944628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Staropramen',
	pct:5.0,
	desc:'A nice lager',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/59324_10151368078418745_874127613_n.jpg?oh=eea5d0f23dc36f200cf6e4bfc665afd4&oe=57CAABAC&__gda__=1469756555_078ddeeaa9ceb67d6fc8471589e0df97',
	link:'https://www.facebook.com/photo.php?fbid=10151368078418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice musketyr',
	pct:4.5,
	desc:'Very similar to their other beer. Just a tad stronger',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/480492_10151563944828745_302604960_n.jpg?oh=77ee4754bd37af95352f5b51da404781&oe=57D4E645&__gda__=1474407084_506e2851c864a805d63a6dede023b282',
	link:'https://www.facebook.com/photo.php?fbid=10151563944828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Krusovice cerne',
	pct:3.8,
	desc:'A nice amber ale',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/482349_10151563944993745_189404530_n.jpg?oh=58cdfb712ea17e3759e93f30eacc7120&oe=57E860E9&__gda__=1474573497_b53d6a983578f197da921f6eb155039c',
	link:'https://www.facebook.com/photo.php?fbid=10151563944993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Master',
	pct:5.3,
	desc:'The master bev',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484682_10151563945163745_604451899_n.jpg?oh=e47350c1c29a4542a66f7d2ab95b48b7&oe=57D254C0&__gda__=1473453456_4fe3a46ea45b27ac027cddc00090c2b5',
	link:'https://www.facebook.com/photo.php?fbid=10151563945163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timothy Taylor Landlord',
	pct:4.3,
	desc:'Orangey tasting',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/577972_10151563945378745_1586746946_n.jpg?oh=e95c75527f5bf4b59faf9a47da8db070&oe=57D31283&__gda__=1469667765_6400bf4583ec4cb9b641c31c17de7575',
	link:'https://www.facebook.com/photo.php?fbid=10151563945378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Goose',
	pct:4.2,
	desc:'A complete mismatch of flavours',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/555154_10151563945403745_1011654346_n.jpg?oh=7b9f5ddd60dfa38a7ecf02a09cca4514&oe=57D036EF&__gda__=1469844019_779361c698f3081529f9bb343e47ddaf',
	link:'https://www.facebook.com/photo.php?fbid=10151563945403745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oranjeboom',
	pct:5.0,
	desc:'Easy drinking fun',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/544204_10151563945568745_9282207_n.jpg?oh=ff53ecc44d96275d15ccb8076aa38984&oe=579B8A41&__gda__=1473845040_f9d0566b707e21e8a17ca5da88fad209',
	link:'https://www.facebook.com/photo.php?fbid=10151563945568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viru',
	pct:5.0,
	desc:'Smooth and malty',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/482859_10151563945748745_1320031993_n.jpg?oh=f3c75b01d846a534ca404d3c3acf3f93&oe=57D40DEF&__gda__=1474664665_33c6e480149228120490726503fb771e',
	link:'https://www.facebook.com/photo.php?fbid=10151563945748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saku original',
	pct:4.6,
	desc:'Why was I served Estonian beer in a Lithuanian club?',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/482209_10151602299593745_443741349_n.jpg?oh=5259e9afe7943a7aea30ad95465b0e02&oe=579BD7A3&__gda__=1474493171_6ba5e8dfad86cfa750d104ee6955ca41',
	link:'https://www.facebook.com/photo.php?fbid=10151602299593745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jaipur',
	pct:5.9,
	desc:'Like the bazar, needs to be removed from sale for public safety',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/582417_10151563946028745_982723381_n.jpg?oh=2bd26ae240d300c503b78e6c30af67e8&oe=57E3C5C5&__gda__=1474723259_f1b139559f2433498c6348806530e412',
	link:'https://www.facebook.com/photo.php?fbid=10151563946028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Almaza',
	pct:4.2,
	desc:'Tastes very familiar',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/2501_10151563946143745_340977146_n.jpg?oh=907a18bdf33f122570feb69d3c479613&oe=57E3A9CF&__gda__=1469853048_3d2fa4b1165f263bbf025ba254f5d35c',
	link:'https://www.facebook.com/photo.php?fbid=10151563946143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fire rock',
	pct:6.0,
	desc:'My first hawaiian beer. So far so good',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1002768_10151798817233745_47152190_n.jpg?oh=c536c25f81b761752d62ea91130a4c67&oe=57CFF797&__gda__=1474046599_7ce9103963c74a4106bf8ab4968a403b',
	link:'https://www.facebook.com/photo.php?fbid=10151798817233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lion lager',
	pct:4.8,
	desc:'Nothing special',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/75581_10151563946433745_1440605873_n.jpg?oh=d9667f349c244aa30420e960629af6d8&oe=57D5FDFE&__gda__=1473586871_33eb74228255557b43c4a6e850d7bd2d',
	link:'https://www.facebook.com/photo.php?fbid=10151563946433745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sol',
	pct:4.5,
	desc:'Much better than corona',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/556881_10151563946938745_1909714508_n.jpg?oh=38f921f8535c4a3448b9171081bcb434&oe=57CCEF94&__gda__=1473133896_6f39121dcd42d05512cd817a1953f790',
	link:'https://www.facebook.com/photo.php?fbid=10151563946938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arvo brew 51',
	pct:4.9,
	desc:'Like an IPA gone wrong',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/9699_10151602278498745_506265925_n.jpg?oh=df33d61b8121b0bd053a0a0c7cd392ca&oe=57DAF029&__gda__=1474820290_fc1c038a42e8b53f4cdde3aef8e99dbc',
	link:'https://www.facebook.com/photo.php?fbid=10151602278498745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson old admiral',
	pct:6.1,
	desc:'Too much bitterness',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/575759_10151602281008745_1009725075_n.jpg?oh=e6ea59b380df6419d3747a307e47ba7e&oe=57CC0D82&__gda__=1473362574_c90e1194aede57682f84ccd926c4eef9',
	link:'https://www.facebook.com/photo.php?fbid=10151602281008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Quayle ale',
	pct:4.0,
	desc:'Not as good as expected',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/602158_10151602281568745_1269833032_n.jpg?oh=bb2eaf3576ac3e71f19504699cefc7e7&oe=57D81650&__gda__=1473441420_b4c0db0d17c4fa5f9fb799fd13f83bc0',
	link:'https://www.facebook.com/photo.php?fbid=10151602281568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Trafalgar pale ale',
	pct:4.0,
	desc:'A nice tang',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/7969_10151602281553745_212370865_n.jpg?oh=e2101840d43c5416d61120d51c2d663e&oe=57E53771&__gda__=1474746880_a99198044bd434b220fef4c1600e9f08',
	link:'https://www.facebook.com/photo.php?fbid=10151602281553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Nelson\'s blood',
	pct:5.0,
	desc:'A nice stout taste',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/64391_10151602282878745_784297964_n.jpg?oh=516cf3ff9721613e430c9d4a4e647ae4&oe=57C63BAB&__gda__=1474412581_33ed9637937918092b4f6ac82fc33710',
	link:'https://www.facebook.com/photo.php?fbid=10151602282878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'VB pale lager',
	pct:4.4,
	desc:'Not quite as bad as regular VB',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/559250_10151602286458745_792577618_n.jpg?oh=7783da28df11f222ce5066ae1c70bfd9&oe=57CC1526&__gda__=1472673999_7b22991dc22e48066fe55e873f52b116',
	link:'https://www.facebook.com/photo.php?fbid=10151602286458745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds sunset ale',
	pct:4.6,
	desc:'Slightly fruity, have to get used to it before judgement',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484855_10151602282628745_1452325767_n.jpg?oh=d625ec66cbb80ac10a723ccd5b39e7f1&oe=57D92E5F&__gda__=1472619369_efe1e7b0c6cfa9a8927ebdd22694a9c9',
	link:'https://www.facebook.com/photo.php?fbid=10151602282628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale',
	pct:4.5,
	desc:'A slightly less fruity pale ale',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/599814_10151602286343745_870808186_n.jpg?oh=e5e6140330f8ceee7794cbd0f69dc463&oe=57DC5AD3&__gda__=1469679811_8a14155c99c9e9a29cc2dac150797206',
	link:'https://www.facebook.com/photo.php?fbid=10151602286343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew pilsner',
	pct:5.0,
	desc:'Rather nice',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/483798_10151602282778745_989104715_n.jpg?oh=d436009f163fb7046944dd56cc003768&oe=57DD71DB&__gda__=1474795173_eb6bc80547f9f07f825268d3548af6fd',
	link:'https://www.facebook.com/photo.php?fbid=10151602282778745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fat Yak',
	pct:4.7,
	desc:'A tasty bev',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/541362_10151602283703745_1951889238_n.jpg?oh=b820f0b5d2e7027f8c9b36aa91854a7d&oe=57E65488&__gda__=1474107070_14bc41609ea7f62ebf73c904fbfddd50',
	link:'https://www.facebook.com/photo.php?fbid=10151602283703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The boxer red ale',
	pct:4.1,
	desc:'A mild red ale',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/562244_10151602284348745_1238517334_n.jpg?oh=68896cc6d9d3e57992c2c4c7201ed6d4&oe=579D3EE3&__gda__=1469837650_41e7191849e558321ed88bad6919b2ba',
	link:'https://www.facebook.com/photo.php?fbid=10151602284348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hangman pale ale',
	pct:4.9,
	desc:'A tad bitter for a pale ale',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/581543_10151602284093745_555930895_n.jpg?oh=8f71222dd4ba270d25d2963faa26dda7&oe=57D66701&__gda__=1472627328_7963896c0a039584712b79200f2af092',
	link:'https://www.facebook.com/photo.php?fbid=10151602284093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The governor golden ale',
	pct:4.5,
	desc:'',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/488220_10151602285323745_1585387237_n.jpg?oh=d5783659da15ea0906eb07cf85cc95f7&oe=57CDF423&__gda__=1474776085_3795a07aadc8a69d25c6271194c15e19',
	link:'https://www.facebook.com/photo.php?fbid=10151602285323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red truck lager',
	pct:5.0,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/480840_10151602285148745_827571703_n.jpg?oh=a211b2335af2a3b5e3d3d7b0c5242e9f&oe=57CEF426&__gda__=1473133942_d06d40c8acfe59c65b0e07c96c6013d6',
	link:'https://www.facebook.com/photo.php?fbid=10151602285148745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict lager',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/526421_10151602285463745_410487487_n.jpg?oh=3cc69e6a7b18ebc1f697a2085c4f88e5&oe=57C6F485',
	link:'https://www.facebook.com/photo.php?fbid=10151602285463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bighead no carb beer',
	pct:4.2,
	desc:'Tastes like a rusty nail left in a glass of water',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/64725_10151602286543745_838192247_n.jpg?oh=28ebda877294b7235c53d93675665d0a&oe=57E2F8AC&__gda__=1473851694_e12cefc0e2db4127188bdcda3f110b53',
	link:'https://www.facebook.com/photo.php?fbid=10151602286543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire one fifty lashes',
	pct:4.2,
	desc:'A good session beer',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/482193_10151602292048745_375392297_n.jpg?oh=9e5a70389921208b67f0c7eed57cac8c&oe=57C906F4&__gda__=1472755082_26e39f5b3208839da8277f4437cb2779',
	link:'https://www.facebook.com/photo.php?fbid=10151602292048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire sun down',
	pct:4.4,
	desc:'A good amount of flavour but still easy to smash down',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/5556_10151602286983745_1392314300_n.jpg?oh=29538daa676ca753ac11038bfeb05d09&oe=57C73726&__gda__=1469750701_545b1585217f9839817a74fdc6a57d2b',
	link:'https://www.facebook.com/photo.php?fbid=10151602286983745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue',
	pct:4.9,
	desc:'Not as good as I remember',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/733866_10151602292633745_1103549106_n.jpg?oh=f89e8f66200612423d31ea9ba242d957&oe=579974A6&__gda__=1474208426_4882c7a49bfc4030a7df097561c00baa',
	link:'https://www.facebook.com/photo.php?fbid=10151602292633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bluetongue pilsner',
	pct:4.5,
	desc:'Doesn\'t really taste like a pilsner',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/149243_10151602295168745_1910196412_n.jpg?oh=24667b4e1a8c9c828367296512be25cd&oe=57E850C7&__gda__=1472620785_3cec69860cc38fae40b7a64b7a073169',
	link:'https://www.facebook.com/photo.php?fbid=10151602295168745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures bright ale',
	pct:4.5,
	desc:'Terrible photo, decent beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/488165_10151602292853745_953241846_n.jpg?oh=62ebad326714ce02f3d4aadd322962be&oe=579D6DC3&__gda__=1472706749_6de96dce44c1c06c685ddf42d8d26576',
	link:'https://www.facebook.com/photo.php?fbid=10151602292853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pepperjack hand crafted ale',
	pct:4.7,
	desc:'Takes a while to get used to, even then it\'s average',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/579182_10151602294478745_1578225000_n.jpg?oh=0dbe6da5cd0db230d55407eff6ca29b4&oe=57D63EE9&__gda__=1473352953_221e21f7757dd009401bca6414717b1d',
	link:'https://www.facebook.com/photo.php?fbid=10151602294478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ pure lager',
	pct:5.0,
	desc:'Something is wrong with this flavour',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/181067_10151602294978745_1842165802_n.jpg?oh=330e99f6a36b2ea7e4aff01c13e7e176&oe=579E8541&__gda__=1474814448_f7024d78225a9071685989c7f37f30e2',
	link:'https://www.facebook.com/photo.php?fbid=10151602294978745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Keller door',
	pct:5.0,
	desc:'Just a little bit extra flavour than a standard lager',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/527734_10151602296568745_390928601_n.jpg?oh=08621a69638f43ec5c8d37aee4f2f943&oe=57CF38B1&__gda__=1473230799_f9ece4d54cecb6249d8d460ddc87e76d',
	link:'https://www.facebook.com/photo.php?fbid=10151602296568745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate roadtrip ipa',
	pct:5.8,
	desc:'Mild for an american IPA, easier to get used to',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/7254_10151602296908745_1398508952_n.jpg?oh=43faf836043b100f177eb26cb93254f8&oe=579D0BF3&__gda__=1474161777_5142fb7d17ca4bd78befbb272d799b62',
	link:'https://www.facebook.com/photo.php?fbid=10151602296908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate mt Macedon ale',
	pct:4.5,
	desc:'Smooth and fruity',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/536215_10151602297528745_137791391_n.jpg?oh=300d41166d6503622f87064ad56ae4e8&oe=57CBC030&__gda__=1474790873_2d7f438ebcd3a651d6b54defce14edf2',
	link:'https://www.facebook.com/photo.php?fbid=10151602297528745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Millenium Falcon',
	pct:10.0,
	desc:'A mild IPA for the booze content',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/579366_10151602298783745_1455893061_n.jpg?oh=e55fdfc886fe2e478a68614927a88326&oe=57D49026&__gda__=1472982058_f22cee0a665bd9ebac3eb95115abd12a',
	link:'https://www.facebook.com/photo.php?fbid=10151602298783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew Belgo',
	pct:4.5,
	desc:'Very belgian without the alcohol content to match',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/522428_10151602297908745_1068926570_n.jpg?oh=01c500d42d7b96cc0809b53c70aa20f0&oe=57D52B43&__gda__=1474708051_0aa21dce3d6a27a81b682dd5639c0cd1',
	link:'https://www.facebook.com/photo.php?fbid=10151602297908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murrays icon 2IPA',
	pct:7.5,
	desc:'Too much IPA flavour',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/524217_10151602298053745_1174689076_n.jpg?oh=22733264fd0072cfa6a8a3846b77ecce&oe=57E4221B&__gda__=1474192865_278d8397e5f53209cd55dcf19725da4c',
	link:'https://www.facebook.com/photo.php?fbid=10151602298053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boa\'s bind',
	pct:5.0,
	desc:'A bit of an IPA flavour',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10102_10151602299658745_104134259_n.jpg?oh=7b136690e4102efa24705ff2c5a688a2&oe=57CE68AF&__gda__=1473884334_9c71f2f28a1fd836f328e725982f2541',
	link:'https://www.facebook.com/photo.php?fbid=10151602299658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Larks foot',
	pct:4.5,
	desc:'Pretty average',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10055_10151602300248745_313412556_n.jpg?oh=c18260310b790578c1f788902d0dd86b&oe=57E397FB&__gda__=1474696106_a49568358c62153d84b6973792ab026a',
	link:'https://www.facebook.com/photo.php?fbid=10151602300248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton dry',
	pct:4.5,
	desc:'Decent Aussie beer',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/600269_10151602300508745_808991925_n.jpg?oh=773f116be65c319058240753d2d026d2&oe=57D02843&__gda__=1473752659_e2d9ea336d17c7a61995db043c09cb46',
	link:'https://www.facebook.com/photo.php?fbid=10151602300508745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pure blonde',
	pct:4.6,
	desc:'Easy drinking',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/157044_10151602300683745_1270951956_n.jpg?oh=a107c40f040c9f35f070caf03d0c75dc&oe=579E3C0B&__gda__=1473964218_74bbd28205780486d0d56deb06d02889',
	link:'https://www.facebook.com/photo.php?fbid=10151602300683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The convict strong ale',
	pct:7.2,
	desc:'A strong and average flavour',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/581629_10151602301103745_358423449_n.jpg?oh=5ea941c0235a0a2954f9b86f8d15bee6&oe=57DC1586&__gda__=1472713622_e9ed7ec5d36d362c2e37a4775fdcd82d',
	link:'https://www.facebook.com/photo.php?fbid=10151602301103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier burning gold',
	pct:4.7,
	desc:'Boring',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/551487_10151649173073745_178044172_n.jpg?oh=3dfc5f76e87c5f5dbbce6d3670bf149e&oe=579CD778&__gda__=1472638504_fbf87e239178e16eb6043fc85087d3b6',
	link:'https://www.facebook.com/photo.php?fbid=10151649173073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Korev',
	pct:4.8,
	desc:'Like an off becks',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/48034_10151649174363745_1551458446_n.jpg?oh=663e6ec16f5b069b8a9e7afaeaf9a824&oe=57CB47F2&__gda__=1474650530_0d14092ed6852542aa07f0e8f59b98c3',
	link:'https://www.facebook.com/photo.php?fbid=10151649174363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Simply IPA',
	pct:5.0,
	desc:'Just awful. Not even an IPA',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/998582_10151860439493745_805468360_n.jpg?oh=b3f417db2adf46cfa96955af261e4696&oe=57DCA43D&__gda__=1473908269_4c493d0e4fd8dffe68588f19b659f52d',
	link:'https://www.facebook.com/photo.php?fbid=10151860439493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious Brew',
	pct:4.7,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/575573_10151649174188745_1546947418_n.jpg?oh=5b77c89915f0f072e40eafef1ace59d2&oe=57E083C5&__gda__=1473286681_8be7f4f91d6a18239a844d2c4303ad2f',
	link:'https://www.facebook.com/photo.php?fbid=10151649174188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven grand slam ale',
	pct:4.0,
	desc:'A mild and average flavour',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/644743_10151649174378745_793600072_n.jpg?oh=043beedb877b70cbfae8a43be2850d4d&oe=57D84F97&__gda__=1474594183_d21bddbda763f31bc7aa38cd9a7e3eff',
	link:'https://www.facebook.com/photo.php?fbid=10151649174378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old golden hen',
	pct:4.1,
	desc:'Wouldn\'t have another',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/48062_10151649174963745_1079824641_n.jpg?oh=72ecf5d332fa44eb847c88918394eee1&oe=57DE89AE&__gda__=1472880275_bd610f6efc0b8aba02a7f34e829e9366',
	link:'https://www.facebook.com/photo.php?fbid=10151649174963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spitfire Kentish ale',
	pct:4.5,
	desc:'Not too hard to drink',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/389000_10151649175308745_1470630421_n.jpg?oh=c63bcd8a9396294365e8e837364f08ca&oe=57E4BD15&__gda__=1473165732_911c26afdc016e56665d8f11b0e975fa',
	link:'https://www.facebook.com/photo.php?fbid=10151649175308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wells bombardier English',
	pct:4.7,
	desc:'I\'m a fan of this mild ale',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12402_10151649175493745_949451993_n.jpg?oh=d3fa26c4885e73f9799abea61dd6e718&oe=57C8609F&__gda__=1474827874_ff68f1d8471491b5b73e96a288017ede',
	link:'https://www.facebook.com/photo.php?fbid=10151649175493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murphy\'s draught',
	pct:4.0,
	desc:'Instantly gave me a headache and made my mouth taste like it was bleeding',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/310059_10151649175513745_267966869_n.jpg?oh=d9270a038991c3121026b44ba05b59f7&oe=57CB679E&__gda__=1473821920_f7fb7e1b97b0827d098f95eb41ad18cb',
	link:'https://www.facebook.com/photo.php?fbid=10151649175513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Frederic Robinson ginger ale',
	pct:6.0,
	desc:'The worst ginger beer I\'ve tasted',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/486778_10151649175643745_1984274110_n.jpg?oh=ebf7d287c2261f2f2057d094a1421820&oe=57E0B0D8&__gda__=1473785092_49f9390c1943013d0ea4216f2ff7a435',
	link:'https://www.facebook.com/photo.php?fbid=10151649175643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wiltshire rum beer',
	pct:5.0,
	desc:'Can\'t really taste the rum',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/935047_10151649176048745_1239205144_n.jpg?oh=8e08eaab096c5528eb5ce550e1ed8736&oe=579E7294&__gda__=1473374626_16839a3657a39a1f997f36b839418159',
	link:'https://www.facebook.com/photo.php?fbid=10151649176048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amigos',
	pct:5.5,
	desc:'Tastes like agave',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/58112_10151649175958745_191846166_n.jpg?oh=69b9aeaeaabe7dd3be89f98788d58a87&oe=57CCE8B3&__gda__=1474776910_34a371d62d2130128ba1f1758adfb5cc',
	link:'https://www.facebook.com/photo.php?fbid=10151649175958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Früli',
	pct:4.1,
	desc:'Not usually served in a martini glass',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/533653_10151396306263745_1857811158_n.jpg?oh=f638dec994c7dc1931f3dbd994a8621b&oe=57E4F50D&__gda__=1473019895_37b1a2aa94f646b6d43d259efce902c3',
	link:'https://www.facebook.com/photo.php?fbid=10151396306263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans peche lambic beer',
	pct:4.0,
	desc:'Tastes just like peach, not beer',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/71413_10151649176248745_1243782720_n.jpg?oh=6f12572a52d715002c0062897e7b1137&oe=57E2B3AA&__gda__=1473680099_a550fc20a1bceedb9bb2d26296727148',
	link:'https://www.facebook.com/photo.php?fbid=10151649176248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Timmermans strawberry lambic beer',
	pct:4,
	desc:'Not too much strawberry',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/537448_10151461684443745_989699337_n.jpg?oh=96aec7f4fbc119dd76d214624bbea89a&oe=57C8DA56&__gda__=1473829407_8e4da922b5e1c09ef1601d6e128068dd',
	link:'https://www.facebook.com/photo.php?fbid=10151461684443745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vratislav',
	pct:5.0,
	desc:'There\'s a reason I never saw this in the Czech Republic',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/923443_10151649176573745_311313356_n.jpg?oh=a8d6e172003545d4765ed1a8ebdf245f&oe=57D87DB3&__gda__=1469703395_fcf7a4678969eb1f85545112a1219ee1',
	link:'https://www.facebook.com/photo.php?fbid=10151649176573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Remus',
	pct:6.0,
	desc:'Pretty sure the guy on the label tea bagged this beer',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/401188_10151649176638745_2029777298_n.jpg?oh=8c9f320498d1d20da04acb789c4ccad0&oe=579CD8D7&__gda__=1474757222_d6310a2aec527b59b4d57591adea4bcf',
	link:'https://www.facebook.com/photo.php?fbid=10151649176638745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Green king light ale',
	pct:3.0,
	desc:'Weak and tasteless. Pretty much a waste of my time',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/67496_10151649177163745_1520090166_n.jpg?oh=eebaaf2a268fafa787136433ef8f5fbb&oe=57E36573&__gda__=1473522098_1b9625bb1506d2600ece6d495819bb0b',
	link:'https://www.facebook.com/photo.php?fbid=10151649177163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old salt quay',
	pct:3.9,
	desc:'An easy drinking ale',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/407150_10151649177363745_297706272_n.jpg?oh=bba0b8e8326a9f91d2cac4748ed62da6&oe=57E36AFE&__gda__=1474466432_78c86d7c99af1c724238dc1823f37f64',
	link:'https://www.facebook.com/photo.php?fbid=10151649177363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Budweiser 66',
	pct:4.0,
	desc:'Slightly fruity',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/62626_10151649177378745_981383908_n.jpg?oh=3d535a644032f923f2fca4f8304478ea&oe=57C89672&__gda__=1473320176_2f92589695d1c3e02854db8536cfe0a9',
	link:'https://www.facebook.com/photo.php?fbid=10151649177378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Okocim mocne',
	pct:7.0,
	desc:'Sweet and a little bit wrong',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/301917_10151649177953745_1459071565_n.jpg?oh=77b86255d3500d3ba2cedf73bb2b5b5c&oe=57D5EA45&__gda__=1473131508_70f08a41af6d920c41fb60f06fa910b2',
	link:'https://www.facebook.com/photo.php?fbid=10151649177953745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Desperados',
	pct:5.9,
	desc:'Kind of a girls beer',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/305829_10151649178053745_1663963670_n.jpg?oh=bf2fd16f0032767740123bc56adafb8f&oe=57DB4737&__gda__=1473994241_6be6de91461efdc04fd6663cd45d9a40',
	link:'https://www.facebook.com/photo.php?fbid=10151649178053745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corona',
	pct:4.5,
	desc:'Not sure why so many people drink this',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/484843_10151694516468745_911431623_n.jpg?oh=a035939ccbc1a02a0603ed6d9c8d1090&oe=57DE9582&__gda__=1473680338_ad289798dbb54eaac42f2531fed81eb2',
	link:'https://www.facebook.com/photo.php?fbid=10151694516468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cuvana rum beer',
	pct:5.5,
	desc:'Like an over sweet tequila beer',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/64844_10151798801973745_1700678415_n.jpg?oh=f890290e79061ca7e5cbfabc3a23beb8&oe=57E62FD4&__gda__=1474258333_63257be229704107c0cd614884093208',
	link:'https://www.facebook.com/photo.php?fbid=10151798801973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masquerido',
	pct:5.0,
	desc:'Yet another tequila beer',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/374702_10151649178783745_739073810_n.jpg?oh=eded17703f6e7f59c405a3483f86744c&oe=57DA8423&__gda__=1474784861_0fd3977102f461f57c560a3681405737',
	link:'https://www.facebook.com/photo.php?fbid=10151649178783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abbot ale',
	pct:5.0,
	desc:'London pride with a bit more cigarette flavour',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/484477_10151649178223745_1831233561_n.jpg?oh=ed52ef7f2bef1eece8b847806860a5d7&oe=57D2FD33&__gda__=1473132418_69231eddb7c35a208a923f4a878dbc67',
	link:'https://www.facebook.com/photo.php?fbid=10151649178223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wychwood brewery Goliath',
	pct:4.2,
	desc:'The beer to slay a mighty thirst',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/431886_10151649178733745_149102435_n.jpg?oh=51a0fd3b6838c2801fca1f0b6a4b6000&oe=579A85AE&__gda__=1473591087_464375aa8c8a62b1dc5d0a0dc08d5e27',
	link:'https://www.facebook.com/photo.php?fbid=10151649178733745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fuller\'s honey dew',
	pct:5.0,
	desc:'Needs more honey',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/969679_10151694516258745_1883640684_n.jpg?oh=13b937d58cb1c4a217462a4c9d63a301&oe=57D230A2&__gda__=1473744427_87eef7de5fc6996b79a3261c1d3e69de',
	link:'https://www.facebook.com/photo.php?fbid=10151694516258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales barnsey',
	pct:4.5,
	desc:'Not too bitter',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/923297_10151694519768745_611137307_n.jpg?oh=dba3a29f9ca6647c1a63c6b57c2c98f1&oe=57E08EBC&__gda__=1474260775_24a6a0ee7d383eca32d548f26632a5a6',
	link:'https://www.facebook.com/photo.php?fbid=10151694519768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales gem',
	pct:4.5,
	desc:'Not too bitter',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/423793_10151694518423745_774842906_n.jpg?oh=8a80c01ba2a2ea37459ec7277bcfb367&oe=57DCD7BF&__gda__=1469888751_9b41a2b00e71d8cc4fb49dd29a95bdb8',
	link:'https://www.facebook.com/photo.php?fbid=10151694518423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales wild hare',
	pct:5.0,
	desc:'Lovely and sweet',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/935469_10151694516713745_1078233688_n.jpg?oh=ae3b0a356e62f6df9ccb520508c006c9&oe=57DACE45&__gda__=1474437068_beee6b8bbea1f3b01aa2aaad19a56c98',
	link:'https://www.facebook.com/photo.php?fbid=10151694516713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bath ales Dark Side',
	pct:4.0,
	desc:'A smooth dark ale',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/933900_10151694517968745_176829546_n.jpg?oh=8a94b2e9fd7f791b20f95d4399bf4a88&oe=57C7BB05&__gda__=1474091244_e69608ba53401973b77ac59983133ab6',
	link:'https://www.facebook.com/photo.php?fbid=10151694517968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modelo',
	pct:4.5,
	desc:'Alright',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/430992_10151694517623745_238159373_n.jpg?oh=112af17120667c13cb0ba16ea66e23a0&oe=57C65CE2&__gda__=1473486258_1640ab29a34a61637bf7fd3d49ddaf61',
	link:'https://www.facebook.com/photo.php?fbid=10151694517623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Madog\'s ale',
	pct:3.7,
	desc:'Almost like a mild IPA',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/931430_10151694519728745_1221673086_n.jpg?oh=06bb11f611e83893048e6e0cf495162e&oe=57DFED99&__gda__=1473171472_6f617f921b16da4b229f1afd537c9033',
	link:'https://www.facebook.com/photo.php?fbid=10151694519728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ysgawen',
	pct:4.0,
	desc:'Flowery',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/935261_10151694519833745_1401778168_n.jpg?oh=938f14b31c95dddde24f26021616c997&oe=57D8A6B1&__gda__=1473195064_24f2ee598d41d600b7ce984c6c2d2e95',
	link:'https://www.facebook.com/photo.php?fbid=10151694519833745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faxe',
	pct:5.0,
	desc:'It would take a long time to get used to this',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/954667_10151694524273745_524236800_n.jpg?oh=0c043fbdfbe02493fc02174a63c4ef37&oe=57E7D935&__gda__=1474436084_f692f17c68fa685b85b5df663b57b1aa',
	link:'https://www.facebook.com/photo.php?fbid=10151694524273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cwrw gwledd celebration ale',
	pct:4.2,
	desc:'I could enjoy a few of those',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/954753_10151694532288745_1231818486_n.jpg?oh=30372ffb51227ed78bad7e07cfe73648&oe=57E41140&__gda__=1474708216_d3546fe7cd6f9ca815106249f5ff5190',
	link:'https://www.facebook.com/photo.php?fbid=10151694532288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields Unfiltered lager',
	pct:4.1,
	desc:'A flavour I can\'t pick',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/931410_10151694532138745_1297410335_n.jpg?oh=070f3b3f356f4e86ae449426a606c6ca&oe=57D7EE76&__gda__=1473818879_14a30ebf7a52b9b857a8a98f6e8c45e5',
	link:'https://www.facebook.com/photo.php?fbid=10151694532138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields wheat beer',
	pct:4.7,
	desc:'Very wheaty',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/947193_10151694532673745_349270642_n.jpg?oh=f674464ab33a798a7cb90519750318d7&oe=57E40122&__gda__=1469751755_943aa60a8b3d60420b34167214e6394e',
	link:'https://www.facebook.com/photo.php?fbid=10151694532673745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam',
	pct:4.8,
	desc:'Like a mild IPA. Tasty',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/983676_10151694533228745_78503103_n.jpg?oh=937ed1564e60634235e399de2f8df72c&oe=57E4AFBF&__gda__=1474197742_1c3e1d2a7207b7b409a44688dfc1d91e',
	link:'https://www.facebook.com/photo.php?fbid=10151694533228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'London fields hackney hopster',
	pct:4.2,
	desc:'I should not have ordered this beer with only 15 minutes to drink it. Would be nice if I had more time to enjoy it',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1480719_10152147735493745_924183769_n.jpg?oh=aa1f6b9751c1a22f6b9b346456875f8e&oe=57CC15D1&__gda__=1473827853_02b0eb45f7e2198c90033645e1cbec03',
	link:'https://www.facebook.com/photo.php?fbid=10152147735493745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dragon stout',
	pct:7.5,
	desc:'So bad I can\'t believe they bottle this',
	score:2,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/968780_10151694532678745_1443848773_n.jpg?oh=1f3fdfc64e3add3448b2ed427a28d02c&oe=57C8D9A0&__gda__=1474016041_627ec3a1834627a260bc9a4a2c6495ca',
	link:'https://www.facebook.com/photo.php?fbid=10151694532678745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St mungo',
	pct:4.9,
	desc:'Sweet sweet lager , but terrible warm',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/942794_10151694532513745_577368504_n.jpg?oh=9907b07bf5614ff0eed52de388338a70&oe=57E45EB1&__gda__=1473326404_817fa6a0751f7ef0acbd3dfe20aff377',
	link:'https://www.facebook.com/photo.php?fbid=10151694532513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogs back hop',
	pct:4.4,
	desc:'Throw up kind if awful',
	score:1,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/308392_10151694533218745_306927282_n.jpg?oh=297cde618fd52f00e1be65603b11b35d&oe=57DCECC8&__gda__=1473818806_b9804ff8e0498db8864f739a97ec38b9',
	link:'https://www.facebook.com/photo.php?fbid=10151694533218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham citra',
	pct:4.6,
	desc:'Nice hops but otherwise average',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/1237019_10151929068538745_647712352_n.jpg?oh=dd6bc5ddf326ece78310214235aa97f6&oe=57DF2EA5&__gda__=1474519282_a7d7912b510674c0c82ecbc39d4ad55f',
	link:'https://www.facebook.com/photo.php?fbid=10151929068538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham scarlet macaw',
	pct:4.8,
	desc:'Taught me the meaning of pugnacious',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1238244_10151929068473745_105586790_n.jpg?oh=4c0c58cbba5636a67ce0596b3fbfdb1f&oe=57D42E4E&__gda__=1473447500_fec344b65c7bdb2c10a59de15fd9a927',
	link:'https://www.facebook.com/photo.php?fbid=10151929068473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oakham ales inferno',
	pct:4.4,
	desc:'I think a beer called inferno needs chilli',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/942020_10151694533608745_2056877210_n.jpg?oh=171077a6fd750664d28067e0986c2a0b&oe=57E00AD1&__gda__=1474716637_2c8ff205f9ce1bc59c43239d45228be7',
	link:'https://www.facebook.com/photo.php?fbid=10151694533608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floris chocolat',
	pct:4.2,
	desc:'Fizzy bad chocolate',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/945065_10151694533818745_1511619525_n.jpg?oh=bce387f9a15f65670c6002a50b6def08&oe=57CE12B7&__gda__=1474277453_6a2a1130497035e9a299bb365085dbd3',
	link:'https://www.facebook.com/photo.php?fbid=10151694533818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Williams joker IPA',
	pct:5,
	desc:'Surprisingly good',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/935627_10151694535958745_491079820_n.jpg?oh=7a23b35cc18028ef116bbfeae95c8ca9&oe=57E3ECBA&__gda__=1473972892_e8f15d0044dd96cf4118208b383613d6',
	link:'https://www.facebook.com/photo.php?fbid=10151694535958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber rambler',
	pct:4.8,
	desc:'Sweet, hoppy, average',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/969003_10151694535793745_176698104_n.jpg?oh=dc5656d7792ec1487c6399f768a2af58&oe=579BACA9&__gda__=1472770880_0ca024ce18bdb7313a4676a08187cb3b',
	link:'https://www.facebook.com/photo.php?fbid=10151694535793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruddles',
	pct:3.7,
	desc:'Never again',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/263308_10151694535858745_1991147618_n.jpg?oh=d43b4247f9f025cf28ac4efa66ab33d2&oe=57CF0DF0&__gda__=1474373697_567c94122a3e9d2751187564c5445660',
	link:'https://www.facebook.com/photo.php?fbid=10151694535858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great bustard',
	pct:4.8,
	desc:'Black and vomity',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/485453_10151694536548745_106155626_n.jpg?oh=e26d1b5178482dc78d82a3ee869aaa1d&oe=57E5DFA1&__gda__=1474844828_e444febb35b1522e90127145830644e9',
	link:'https://www.facebook.com/photo.php?fbid=10151694536548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Efes',
	pct:5.0,
	desc:'The best turkey has to offer?',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/261692_10151694536343745_1620675105_n.jpg?oh=f7d104e5d804a12bb880e0db45b2af9b&oe=57DD8E98&__gda__=1474062254_3091cd3fcb147d8487c03d70911e29e1',
	link:'https://www.facebook.com/photo.php?fbid=10151694536343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perge',
	pct:5.0,
	desc:'Much better than efes',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1005742_10151798801533745_634899063_n.jpg?oh=7d18043fbc6e299c26a5fc7fa25d1fed&oe=579E589F&__gda__=1474013865_04b31207cbc75fa7e62a263ba36fe3f8',
	link:'https://www.facebook.com/photo.php?fbid=10151798801533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Voll-damn doble Malta',
	pct:7.2,
	desc:'Quite malty',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/293097_10151694536623745_633779128_n.jpg?oh=a729b6ff1e4aa2b2adfc59cd70a6ef91&oe=57CD2C65&__gda__=1474426651_974673dc0d17b734b8057d834f4fcb4e',
	link:'https://www.facebook.com/photo.php?fbid=10151694536623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo',
	pct:4.8,
	desc:'Easy drinking',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/264403_10151694536708745_1298889096_n.jpg?oh=822a1ecbf80871d69af17a01239fd469&oe=57E595E3&__gda__=1473219410_0b624a2656278aef19857d8370d0e7c7',
	link:'https://www.facebook.com/photo.php?fbid=10151694536708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella Galicia',
	pct:5.5,
	desc:'A bit more malty than the regular',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/988265_10151798820448745_1825630126_n.jpg?oh=0305abe2bc655f41d681a3dbbe54361a&oe=57D42143&__gda__=1474606794_1fe0f429c2e77792ae1ec3f18999b00c',
	link:'https://www.facebook.com/photo.php?fbid=10151798820448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Estrella',
	pct:5.4,
	desc:'Tastes a little bit burnt',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/248044_10151694532898745_1441204919_n.jpg?oh=3670bdbd427655fa34ac4b4b6e444c89&oe=579B111A&__gda__=1474711340_3eecd94bfca48b977b9dfd1d379b58d1',
	link:'https://www.facebook.com/photo.php?fbid=10151694532898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mahou',
	pct:5.5,
	desc:'A very tasty lager. Could drink these all day',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/150945_10151461683838745_503756954_n.jpg?oh=c246fc18f05a2d6d3f24c11c261399c0&oe=57E2D678&__gda__=1472890630_dca9ce35f8b69841fef6588876c445fe',
	link:'https://www.facebook.com/photo.php?fbid=10151461683838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel',
	pct:5.4,
	desc:'A beer for all occasions',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/22402_10151315677898745_961047009_n.jpg?oh=ca18ec0126ae75f08c37ef3f2fdd05a4&oe=57E80F54&__gda__=1473792470_e2971ff9e5376d1a7f46eebd3885c13c',
	link:'https://www.facebook.com/photo.php?fbid=10151315677898745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keler',
	pct:null,
	desc:'Fantastic after a long day',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/64607_10151798820233745_1697119288_n.jpg?oh=e0849f8e678b131813e4e3b7071c3ab3&oe=579C1BCF&__gda__=1469887878_5b832591c02c0428c966d9b08b3c2658',
	link:'https://www.facebook.com/photo.php?fbid=10151798820233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ambar',
	pct:5.2,
	desc:'Session beer',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/540216_10151798819258745_1593913527_n.jpg?oh=4bfaf3ec850b63327e3fbf81b2625a2c&oe=57E7A584&__gda__=1469684372_d9635c4259ab84ae4b97d67ae756a506',
	link:'https://www.facebook.com/photo.php?fbid=10151798819258745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cruzcampo gran reserva',
	pct:6.4,
	desc:'A bit malty but mostly smooth',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/944493_10151798819313745_233015169_n.jpg?oh=4bf76997f9ba0ca0e893a9c71cfeb6fe&oe=57D56612&__gda__=1472950018_31e0570ad2c78ddce1635d02f30056d3',
	link:'https://www.facebook.com/photo.php?fbid=10151798819313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koenigsbier',
	pct:4.2,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/983885_10151694536943745_1632093000_n.jpg?oh=119fc406346c23ef52327f151696c128&oe=57DFCC12&__gda__=1473459236_6d97d75741d6a4a4a9331021a62162ee',
	link:'https://www.facebook.com/photo.php?fbid=10151694536943745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quilmes',
	pct:4.9,
	desc:'Average',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/65636_10151694536878745_1850782094_n.jpg?oh=8a7835233706f612d3c261f19a76b227&oe=57DBC477&__gda__=1473388839_7561308de29408687441e331827ee1e7',
	link:'https://www.facebook.com/photo.php?fbid=10151694536878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blas trigo',
	pct:6.0,
	desc:'A strange taste. Almost like a lambic. Even enjoyed by non beer drinkers',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1011466_10151798821318745_54743244_n.jpg?oh=14c298dff185941153262ceb32a04133&oe=57DDBA8C&__gda__=1474720498_0577a45002053b3d2cb650a26106b21b',
	link:'https://www.facebook.com/photo.php?fbid=10151798821318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Faro Lambic',
	pct:4.5,
	desc:'A kind of tangy flavour',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/252348_10151694537033745_65345877_n.jpg?oh=5e9cfe09e01612f8d9976864d97d68a0&oe=579E6CDA&__gda__=1472733217_7a39841b700af6964c1402f68c5687bb',
	link:'https://www.facebook.com/photo.php?fbid=10151694537033745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skull splitter',
	pct:8.5,
	desc:'Every mouthful is like being punched in the neck. A mans bev',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/292440_10151694537253745_171550675_n.jpg?oh=562017f2bca2895b1bea6f4574db75ae&oe=57E5C790&__gda__=1474060014_0cb40af3dea5d33b61cb337326535306',
	link:'https://www.facebook.com/photo.php?fbid=10151694537253745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sagres Bohemia',
	pct:6.2,
	desc:'Easy drinking for the strength',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/261740_10151694537308745_1696408161_n.jpg?oh=6527f6334e8bf5aa47b3900e323f0af3&oe=57DDDE75&__gda__=1473493956_a49855ad20a550123cd7d762271f54b4',
	link:'https://www.facebook.com/photo.php?fbid=10151694537308745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Curious original pale ale',
	pct:3.9,
	desc:'Flowery',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/943639_10151798797268745_543942826_n.jpg?oh=f908f0733e7a5a269d17dc140a718cc8&oe=57E3BEF5&__gda__=1474266652_98e1ae9ba09c68a7f87a9e04fd6f6794',
	link:'https://www.facebook.com/photo.php?fbid=10151798797268745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Centennial IPA',
	pct:7.2,
	desc:'Slightly too strong',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1070104_10151798797103745_60498930_n.jpg?oh=07c53a58349868838251c86337348bc2&oe=579E749F&__gda__=1473593762_fcd1d955a306bd15bcfd1f0423f0ce0a',
	link:'https://www.facebook.com/photo.php?fbid=10151798797103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wild beer epic saison',
	pct:5.0,
	desc:'Different but not very good',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/73345_10151798799468745_1877528478_n.jpg?oh=686c6e76151d2c924d39ba8541e8e542&oe=579D51B0&__gda__=1474665209_53f52bb874562a8bd6e28728d73892b3',
	link:'https://www.facebook.com/photo.php?fbid=10151798799468745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The wild beer co Bliss',
	pct:6.0,
	desc:'Weird as hell. Is that ginger ?',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1001179_10151798797773745_1783696922_n.jpg?oh=e6cd40741ff143c7906afd35f4af97f3&oe=57E197F3&__gda__=1473044292_d8c9fa07aa647f6d917b229d37a5de47',
	link:'https://www.facebook.com/photo.php?fbid=10151798797773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Porter',
	pct:6.5,
	desc:'Unexpectedly smooth',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1075890_10151798799218745_348684892_n.jpg?oh=ff598183fa86841a230dc220baed7785&oe=579B9AE6&__gda__=1472775262_c42f77f528efd672eee30c1d0ecdf5ca',
	link:'https://www.facebook.com/photo.php?fbid=10151798799218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'01|02',
	pct:5.4,
	desc:'Plain',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/64066_10151798799093745_1495677337_n.jpg?oh=a161f195311bd674f9fa3c940c380a04&oe=57E12083&__gda__=1473072893_1955f13ac73ec7249fd950ae413178de',
	link:'https://www.facebook.com/photo.php?fbid=10151798799093745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu winterbier',
	pct:5.5,
	desc:'Not sure what it has to do with winter',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/74388_10151428532683745_883935005_n.jpg?oh=5c618f2883d2802038dadee35655a9f7&oe=57E0D8C3&__gda__=1473091649_5a244ea14f2f28f2c3c5003eaede98cf',
	link:'https://www.facebook.com/photo.php?fbid=10151428532683745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Benediktiner',
	pct:5.4,
	desc:'',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/598459_10151331653573745_57128822_n.jpg?oh=79640c3801cf2ab128261032c8bf6937&oe=57DA80BC&__gda__=1474845705_3f394d1100a672ce46fcab3ab452c545',
	link:'https://www.facebook.com/photo.php?fbid=10151331653573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Spaten',
	pct:5.2,
	desc:'Average German beer',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/602999_10151798820463745_26311115_n.jpg?oh=fb616b20430ac47f53a38486d55a3806&oe=57DE7C69&__gda__=1473716444_538ba7d62f708406313dc15fbfdc313e',
	link:'https://www.facebook.com/photo.php?fbid=10151798820463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paulaner',
	pct:4.5,
	desc:'Still not a fan of wheat beer. Also not happy when this doesn\'t come in a stein',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/542113_10151428531848745_1285156274_n.jpg?oh=6eb487d76561ca45ffc3cb47b1cf024b&oe=57E0E1B0&__gda__=1474045953_f9725c2b093c6813dd5216e3c1366679',
	link:'https://www.facebook.com/photo.php?fbid=10151428531848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Erdinger',
	pct:5.3,
	desc:'A German classic',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/312687_10151396304703745_1460506547_n.jpg?oh=7310ec7946ed30023b82d66490e734f6&oe=57D4D1A4&__gda__=1473081365_70b0300bc6e695403975cff14c8a0cc5',
	link:'https://www.facebook.com/photo.php?fbid=10151396304703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lowenbräu',
	pct:5.2,
	desc:'An old favourite',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1006322_10151854990003745_1367385970_n.jpg?oh=abae476262ac3d74bdd57d03f57320ff&oe=57D0182B&__gda__=1473292411_65b174472d4f22dc191134167e6d4997',
	link:'https://www.facebook.com/photo.php?fbid=10151854990003745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grafenwalder',
	pct:4.8,
	desc:'Plain and easy to drink. Also cheap',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/72182_10151649174918745_777169044_n.jpg?oh=b08ad5b4fd0fe17ffb420cff67c34885&oe=57D00D43&__gda__=1469944898_2e22851860e17f1f50167e96ca6421f9',
	link:'https://www.facebook.com/photo.php?fbid=10151649174918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Köstritzer schwarzbier',
	pct:4.8,
	desc:'Milder than a dark beer normally is',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1920083_10152293088098745_591597385_n.jpg?oh=570a2fb78c12b7a6bb7e65f36cfc2cea&oe=57D9DA1A&__gda__=1474229256_fad0a573fb5736e378601464f48a5838',
	link:'https://www.facebook.com/photo.php?fbid=10152293088098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rheinbacher',
	pct:4.8,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/644125_10151296241128745_1291306382_n.jpg?oh=e16f64986f9ccf2a75e15fc4ecf784b1&oe=57E20A36&__gda__=1473465382_584221ae496f9e0641ee144c86615d0f',
	link:'https://www.facebook.com/photo.php?fbid=10151296241128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hogaarden blanche',
	pct:4.9,
	desc:'Not a white beer fan',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/312594_10151396305888745_722386464_n.jpg?oh=deb7be09a18f72b90b32435a16fca229&oe=57CC885A&__gda__=1472642314_1a8000429469ddc94f7bf9fadaf2ebde',
	link:'https://www.facebook.com/photo.php?fbid=10151396305888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bitburger',
	pct:4.8,
	desc:'Not my favourite 1L beer',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/45381_10151798800163745_1715529842_n.jpg?oh=a39b1289e8e0c116cd44a1c0850303d4&oe=57E0FF56&__gda__=1474185175_6dd3e0dc318017a5ffce8e0c59af8a9f',
	link:'https://www.facebook.com/photo.php?fbid=10151798800163745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fischer\'s stiftungbräu helles',
	pct:5.1,
	desc:'Could drink this all day',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1016879_10151798800588745_1406598038_n.jpg?oh=2f44102675b2cf89d99c9b30560bc6f5&oe=57D7E922&__gda__=1469977513_0d96b8b144cb4105b9a7ed27173b2cab',
	link:'https://www.facebook.com/photo.php?fbid=10151798800588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rothaus Pils',
	pct:5.1,
	desc:'',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/263281_10151428533418745_1142185316_n.jpg?oh=6d452eade718b75d861d226904d3c5a8&oe=57CAA480&__gda__=1473545009_a96c0257fcd3ebf765fdb9f1dfa45fc6',
	link:'https://www.facebook.com/photo.php?fbid=10151428533418745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Konig pils',
	pct:4.9,
	desc:'Standard German',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1743537_10152293088048745_37653094_n.jpg?oh=a3ed53aad77f1da7f45b6e54d737e3c4&oe=57CCDD87&__gda__=1474778042_2c8eba5abf64095b7cb4509680519f0b',
	link:'https://www.facebook.com/photo.php?fbid=10152293088048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau',
	pct:5.1,
	desc:'Oktoberfest goodness',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/2771_10152001625293745_732438079_n.jpg?oh=7a01409417bc105a47ed9585a479939b&oe=57D0E755&__gda__=1474652914_27f020043caf729d99b4290678153e81',
	link:'https://www.facebook.com/photo.php?fbid=10152001625293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hacker-Pschorr',
	pct:5.8,
	desc:'Oktoberfest goodness',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1376515_10152001625798745_1787795583_n.jpg?oh=c1ed5a6bbd9b45364d5a325ffb497641&oe=57D82F4A&__gda__=1474738547_d97a80247a31291bfdbe148e89aef5c0',
	link:'https://www.facebook.com/photo.php?fbid=10152001625798745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'DAB',
	pct:5.0,
	desc:'Disappointing',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/525742_10151860439343745_1260154559_n.jpg?oh=6fd21d7f165e2885bbf6e28516d59120&oe=57CB28B5&__gda__=1469915727_8dda053e1367ae83f586dab0d234c48f',
	link:'https://www.facebook.com/photo.php?fbid=10151860439343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Augustinerbrau',
	pct:5.2,
	desc:'Alright',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1375936_10152001624743745_1619318099_n.jpg?oh=fabc4eafe3d1a6cfdb2f86a06f464627&oe=57DE0392&__gda__=1474096043_7ceecffe4627de38cbf02cb5bdcaaaba',
	link:'https://www.facebook.com/photo.php?fbid=10152001624743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxlrainer',
	pct:5.3,
	desc:'Not too bad',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1385612_10152001625738745_155180417_n.jpg?oh=fa901e3f316d5ead0c6301e1c53aa38b&oe=57D63B9F&__gda__=1473779557_b9749085cbba5c9a3dbf4fbe1c60a947',
	link:'https://www.facebook.com/photo.php?fbid=10152001625738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Yakima Red',
	pct:4.1,
	desc:'Pleasant',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/992917_10151798801088745_1382376594_n.jpg?oh=13af60ccc30316aaf4d91fbd3e69ab84&oe=57D274EA&__gda__=1473718011_de70bbe633a961979274855b722f7b43',
	link:'https://www.facebook.com/photo.php?fbid=10151798801088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime London Stout',
	pct:4.5,
	desc:'I could have another',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1069371_10151798801138745_1255664168_n.jpg?oh=44e6919343b31309a198f34e261fcbb3&oe=579BD105&__gda__=1472671036_7fd3854457dbd7b07b5fda8c79ed053f',
	link:'https://www.facebook.com/photo.php?fbid=10151798801138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meantime Pilsner',
	pct:4.4,
	desc:'Not my favourite pilsner',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/999024_10151798817478745_821421302_n.jpg?oh=026f184ac35c8885fe5d82a339d1c514&oe=57DEF348&__gda__=1474750744_651b499eb49b0f242ddc70eb03a5fcb7',
	link:'https://www.facebook.com/photo.php?fbid=10151798817478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Charlie\'s',
	pct:5.0,
	desc:'I think charlie may be homeless',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/374377_10151798802143745_204094323_n.jpg?oh=97d8797ae4b2c192e300696304b4ddb2&oe=57E85725&__gda__=1473605467_92b6532f68e99659345ca3fca867b057',
	link:'https://www.facebook.com/photo.php?fbid=10151798802143745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Spindrift',
	pct:5.0,
	desc:'Kind of a pale ale taste. The first time I\'ve seen a beer in a blue bottle',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1069901_10151798803058745_68050022_n.jpg?oh=075e4687449e2638b86eccfdecdaab7d&oe=57E25B87&__gda__=1473003982_e08ef6ad49b521e49f70ce04ae0cb12f',
	link:'https://www.facebook.com/photo.php?fbid=10151798803058745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hook pilsner',
	pct:5.3,
	desc:'A mild flavour',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1069935_10151798817208745_1577449594_n.jpg?oh=61a0f7bcffccba61cee99601445019b7&oe=57CC93DB&__gda__=1473584668_17ce0574051b75d66234bb1228e66319',
	link:'https://www.facebook.com/photo.php?fbid=10151798817208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark Lord',
	pct:5.0,
	desc:'Really needs a lord of the rings reference on the label',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/935039_10151798818428745_2074781709_n.jpg?oh=4ddbcdb329e168aa9a257f1de55fffa2&oe=57C62294&__gda__=1474757925_f552dd24b8f84bae39a8c14d6a5624af',
	link:'https://www.facebook.com/photo.php?fbid=10151798818428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moosehead',
	pct:5.0,
	desc:'Would take some getting used to',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1000219_10151798818558745_1372926994_n.jpg?oh=cb22ec63077f543c24fe68c5c8f27b52&oe=57D361AC&__gda__=1469875495_c64ba49921824ea999e653dbcd196702',
	link:'https://www.facebook.com/photo.php?fbid=10151798818558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams Broadside',
	pct:4.7,
	desc:'The bitterness takes some time to get used to',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1006000_10151798819328745_2080424026_n.jpg?oh=96378974df185aab3d2a1570a14ee7fc&oe=57DB31E6&__gda__=1474468433_08a62b952ac4dbac0135474f6deae4de',
	link:'https://www.facebook.com/photo.php?fbid=10151798819328745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstök Pale ale',
	pct:5.6,
	desc:'A nice pale ale with a hint of volcano',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/559118_10151798821313745_705644987_n.jpg?oh=538b0b944621f852b157869887fbf419&oe=57CE7E5E&__gda__=1473497422_c4b67c4dfcefabae2069ba851c1c8c1e',
	link:'https://www.facebook.com/photo.php?fbid=10151798821313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Einstok toasted porter',
	pct:6.0,
	desc:'A good morning beer. With bacon and eggs. Also beer #300!',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1069403_10151798927653745_683815255_n.jpg?oh=05f4e8673b13278ce576062b041d41e5&oe=57DADF16&__gda__=1473901742_4c044d491bbe29eb9503603ba1fa5af6',
	link:'https://www.facebook.com/photo.php?fbid=10151798927653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leo',
	pct:5.0,
	desc:'Easy drinking, great in hot weather',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1947644_10152280801063745_1171315228_n.jpg?oh=b8b19402ae9d10c4b48fe65b27ba068a&oe=57E2BEBB&__gda__=1472770677_ed80026ffc91cb4e01816a6484ddf9d2',
	link:'https://www.facebook.com/photo.php?fbid=10152280801063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tiger',
	pct:5.0,
	desc:'A good choice',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/549260_10151563946038745_1772775906_n.jpg?oh=4bc108ea2205f44f85c363f7960c03bd&oe=57D585AE&__gda__=1473495380_325fd41e706558943b370d114eeb4b35',
	link:'https://www.facebook.com/photo.php?fbid=10151563946038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chang export',
	pct:5.0,
	desc:'Take the regular low quality chang and add way too much malt',
	score:2,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1969273_10152280801073745_1139224814_n.jpg?oh=2183913d3aefbd9a3557bd926bd265f7&oe=57C958E5&__gda__=1473724689_3d08e88059537d64d2bfa06ba0d84af2',
	link:'https://www.facebook.com/photo.php?fbid=10152280801073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Singha 5',
	pct:05,
	desc:'Served in the authentic Thai way. With a glass filled with ice',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/522410_10151602279523745_2144170744_n.jpg?oh=ee36535f7ab7da609044abf588fb8c42&oe=57DB5993&__gda__=1472947561_7179c0362681b822aa1a67a97d0d4142',
	link:'https://www.facebook.com/photo.php?fbid=10151602279523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao',
	pct:5.0,
	desc:'Fairly standard lager',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/553908_10152001638218745_428160786_n.jpg?oh=eeec9749c8b950eae88517d7bb69cb1a&oe=57E285BD&__gda__=1474088788_8f9236df6440593bd84b953945e30122',
	link:'https://www.facebook.com/photo.php?fbid=10152001638218745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tsingtao',
	pct:4.7,
	desc:'China standard',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/968819_10151798821173745_1903896463_n.jpg?oh=0255cbdc9fc0b945c54e447ee4e685e6&oe=57D05A3B&__gda__=1474025665_55208eed6afc676f001bd8ab361b5b8e',
	link:'https://www.facebook.com/photo.php?fbid=10151798821173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sapporo',
	pct:5.0,
	desc:'Solid can, solid beer',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1002989_10151798803018745_1022069808_n.jpg?oh=e2585fd9bb1545e35b6f8a3e6d2d0eb4&oe=57D3AA27&__gda__=1474365072_ca1d23c27d0c1f707411f050c83f9680',
	link:'https://www.facebook.com/photo.php?fbid=10151798803018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino red rice',
	pct:7.0,
	desc:'A strange taste, takes a bit to get used to',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/q82/p480x480/1157401_10151888670423745_99231248_n.jpg?oh=f7ef8302977d06075a246be3703be880&oe=579E4BEB&__gda__=1474722441_d3b4e6ece7da41f62e36281a9bda7132',
	link:'https://www.facebook.com/photo.php?fbid=10151888670423745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Ginger ale',
	pct:8.0,
	desc:'A mild ginger taste. The warming sensation makes me think this isn\'t meant for summer',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/942413_10151798927708745_1675671077_n.jpg?oh=2cbe9507c6766268efd05d3d0f65db5a&oe=57D02FBD&__gda__=1473883141_a8ff750cc452e9f998b2195945323911',
	link:'https://www.facebook.com/photo.php?fbid=10151798927708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino pale ale',
	pct:5.5,
	desc:'Surprisingly good. Wish I bought more than one',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1011658_10151854990103745_2038671130_n.jpg?oh=7cde28275c20867cb632f2be851c01d0&oe=57E4CC08&__gda__=1474001871_f30759a2d5f5f674b46f920a21e073dc',
	link:'https://www.facebook.com/photo.php?fbid=10151854990103745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi',
	pct:5.0,
	desc:'A classic',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/537524_10151563945728745_1100203805_n.jpg?oh=df12d288e853babe3306d562a6f21389&oe=57D36DF4&__gda__=1472713922_2a66b12e910f4765d2a7faab53d5dcf6',
	link:'https://www.facebook.com/photo.php?fbid=10151563945728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino japaneses classic ale',
	pct:7.0,
	desc:'Such a letdown after the pale ale',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185821_10151854990343745_429136882_n.jpg?oh=ad745bff56994d28b398a69f0c4d3ba2&oe=57DA3B05&__gda__=1474619097_e7e0408550c938514dba096ceffb46fb',
	link:'https://www.facebook.com/photo.php?fbid=10151854990343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hitachino Nest Commemorative Ale',
	pct:8,
	desc:'The perfect beer for new years. Or any other time',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/970685_10151854991538745_1076029058_n.jpg?oh=728ac1bb7994fc3cce8ba8d1400470a8&oe=57C93CD0&__gda__=1473743884_78e3be7d2f8a37623bb681467cb744ae',
	link:'https://www.facebook.com/photo.php?fbid=10151854991538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hoopers Ginger brew',
	pct:4.0,
	desc:'Exactly how a ginger beer should taste',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185949_10151854991548745_379811355_n.jpg?oh=6b53354220589c1aa767e52312018876&oe=57CF9913&__gda__=1472784847_10894335dc24186dd40de108c27ade01',
	link:'https://www.facebook.com/photo.php?fbid=10151854991548745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Strongroom dark',
	pct:4.5,
	desc:'Rather creamy',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1175248_10151860440378745_2027227367_n.jpg?oh=df68ec01129eafd704ab40eadf5aa73f&oe=57E135B4&__gda__=1473800307_3941be38d53a832cc5f414990502e38a',
	link:'https://www.facebook.com/photo.php?fbid=10151860440378745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Boondoggle blonde ale',
	pct:5.0,
	desc:'Some sort of quasi good beer',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/970910_10151860440438745_1474360215_n.jpg?oh=11bb029f5ed7b2cb5cae3a9e7e5b46f3&oe=579DD103&__gda__=1472743818_5dfca89856a08636727c869bed4fdcac',
	link:'https://www.facebook.com/photo.php?fbid=10151860440438745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Banks caribbean lager',
	pct:4.7,
	desc:'Mild and smooth',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1157507_10151860440488745_679128594_n.jpg?oh=6afa6d6979119a42da1c76aac7554b9e&oe=57DE7391&__gda__=1474715433_fc81f841076b6faa1e89fe036e3c8360',
	link:'https://www.facebook.com/photo.php?fbid=10151860440488745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nutty black',
	pct:3.9,
	desc:'Not as awful as expected',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1173809_10151860441013745_1894761382_n.jpg?oh=fd71ed3f157697aaf3a794445cdeedce&oe=57CC0123&__gda__=1473653833_c9b7b3acfd4edf118ee186978dd06981',
	link:'https://www.facebook.com/photo.php?fbid=10151860441013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ESB',
	pct:5.5,
	desc:'A tangy off flavour. Like someone dipped their balls in the keg',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/999589_10151860441473745_1970036928_n.jpg?oh=47e0926a74920c311c441a0d705af87e&oe=57D0D9EA&__gda__=1473374458_0077a506d302a0a15bf122cffefd1e5e',
	link:'https://www.facebook.com/photo.php?fbid=10151860441473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hylder Blonde',
	pct:4.2,
	desc:'A little bit too much flower',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/542217_10151860441663745_480799893_n.jpg?oh=bc5dcd8a617aa255db01e1aa5adcb7ef&oe=57DD601D&__gda__=1473362076_2b87b484e56f05eeecf2717c1a391e15',
	link:'https://www.facebook.com/photo.php?fbid=10151860441663745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The big inflatable cowboy hat',
	pct:10.5,
	desc:'Flavourful without being too strong',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/970683_10151860442323745_1389595186_n.jpg?oh=89e5a21555b11f96242866f5747fe5c6&oe=57CD5A51&__gda__=1474035928_a0ee49363f6cae2c862a978711c472e5',
	link:'https://www.facebook.com/photo.php?fbid=10151860442323745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Long hammer IPA',
	pct:5.9,
	desc:'Smash the hammer!',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1173745_10151860442463745_736142328_n.jpg?oh=e935d791f95aae519dd4e18bb5d58456&oe=57E4B574&__gda__=1469932712_01e49ba838566c9f5ba87eb6eaaf85ea',
	link:'https://www.facebook.com/photo.php?fbid=10151860442463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage light ale',
	pct:3.2,
	desc:'Why did I even buy this tiny weak beer?',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1003533_10151860443063745_1669379479_n.jpg?oh=1825079298671433ffc9091e58dbab29&oe=57CF7AA9&__gda__=1474659580_63a44e3dcecd537242bab2a156ffc445',
	link:'https://www.facebook.com/photo.php?fbid=10151860443063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden Hells',
	pct:4.6,
	desc:'Not too bad',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1469967_10152147735243745_1919940570_n.jpg?oh=08bb8f3d30f5e6866935c098993b2e64&oe=57E6ECA0&__gda__=1469783193_40914708d11ec3168f4229d7d7b209f2',
	link:'https://www.facebook.com/photo.php?fbid=10152147735243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camden gentlemans wit',
	pct:4.3,
	desc:'I remember nothing about this beer. Must have been a good night',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1176312_10151860443023745_856797078_n.jpg?oh=4aca64ec752d26c5b7cda61c2ca66f6f&oe=57E2B39D&__gda__=1473770641_971d8030a2af948bbffdb72eced4b167',
	link:'https://www.facebook.com/photo.php?fbid=10151860443023745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point pale ale',
	pct:5.4,
	desc:'Pretty mundane',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185998_10151860443158745_158593717_n.jpg?oh=5f8d587e9cf19c18a19e74e6a830a371&oe=57E29EE9&__gda__=1474431797_edca1b112adcff0e228b4cb2755f71eb',
	link:'https://www.facebook.com/photo.php?fbid=10151860443158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Caribbean scene',
	pct:null,
	desc:'Not worth getting a second one',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185783_10151860443868745_1132451963_n.jpg?oh=1c0d8535f0d87ef368349f85af7af64c&oe=57E32881&__gda__=1474137272_2fab3b78b34370f6bc7aa212f4e97484',
	link:'https://www.facebook.com/photo.php?fbid=10151860443868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cusquena',
	pct:5.0,
	desc:'Goes badly with fajitas',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/555522_10151860443808745_1012342431_n.jpg?oh=7315502e17d582350ffbf2f64059d600&oe=57DA2791&__gda__=1474537752_d9fb97fca2e38824ad86b15cb835542a',
	link:'https://www.facebook.com/photo.php?fbid=10151860443808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Utenos classic',
	pct:5.2,
	desc:'Stock standard beer',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1175115_10151860444553745_1702342354_n.jpg?oh=7f65c34db57c6b58760b6c9070c42aac&oe=579C322F&__gda__=1473363269_abf8da59534e736992cabace53101d44',
	link:'https://www.facebook.com/photo.php?fbid=10151860444553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk',
	pct:4.8,
	desc:'An all round average beer. But with a cool bottle',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185029_10151860445333745_1637600629_n.jpg?oh=2eb6f0dd35eb3e238988edce421a0f29&oe=57DC4378&__gda__=1472809793_ef7912d024f3dcdcf839eaa816eed835',
	link:'https://www.facebook.com/photo.php?fbid=10151860445333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu',
	pct:4.3,
	desc:'Windmills are awesome',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1235059_10151929073993745_1887796007_n.jpg?oh=47500d0263366fb9decadd038b4b56ab&oe=57E2DAE4&__gda__=1474618545_d5f03a00e16e27e5424a8b230d0dbdb4',
	link:'https://www.facebook.com/photo.php?fbid=10151929073993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Baltika 7',
	pct:5.5,
	desc:'Really hard to drink',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/65647_10151694536248745_526286442_n.jpg?oh=95613a8472b4dfd70d7a11826a77f140&oe=57E3C7AD&__gda__=1472856879_2b7e8356dc99b74330b3b459dea615b0',
	link:'https://www.facebook.com/photo.php?fbid=10151694536248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cmapbiu Menbhuk Temhoe',
	pct:4.7,
	desc:'The purple label made me expect poison. But it\'s actually a decent beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1390556_10152001638343745_1466512598_n.jpg?oh=8187f589faed7af941b0e7acb8095f5a&oe=579CADE6&__gda__=1472981238_b024f14f003d4318ae25fb7eef6f3011',
	link:'https://www.facebook.com/photo.php?fbid=10152001638343745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'злашен даб',
	pct:4.5,
	desc:'An interesting flavour, but not one I really like',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/9699_10151602279038745_1469910721_n.jpg?oh=58750dee2b765cf754d5ea817aa850fd&oe=579D0CC9&__gda__=1474345416_a93aa7f089b26dea95796870aa3486f3',
	link:'https://www.facebook.com/photo.php?fbid=10151602279038745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zelta premium',
	pct:5.2,
	desc:'I like where this beer is going',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1151012_10151888666008745_854242907_n.jpg?oh=bd3e4b3b9d5b73535301bce8a0099069&oe=57D7E5D1&__gda__=1473725033_249ebca8aa2c637fbb6167eec70a6f2e',
	link:'https://www.facebook.com/photo.php?fbid=10151888666008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cesu premium',
	pct:5.2,
	desc:'A bit wrong',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1174664_10151888665988745_1905015784_n.jpg?oh=128cf6cc65db289ccaa2b22db4def119&oe=57CC9702&__gda__=1469931112_d8d632255f9ba3e175f218588e036e3c',
	link:'https://www.facebook.com/photo.php?fbid=10151888665988745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Adnams southwold innovation',
	pct:6.7,
	desc:'A nice pale but just a bit of wrongness',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1238809_10151888666788745_1212313484_n.jpg?oh=b703033e4c4e3d7e85a642139f17c81e&oe=57E3B473&__gda__=1474092106_d4a5361bfb906f829169440d9ddaf634',
	link:'https://www.facebook.com/photo.php?fbid=10151888666788745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Czech Norris',
	pct:6.7,
	desc:'Not the roundhouse kick of awesome I expected',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1176212_10151888667313745_1242801185_n.jpg?oh=17e1ef4fe662421b7ad748109e5bfef8&oe=57E5876A&__gda__=1474172077_c8867f988f2db6962561c7945b1a89e5',
	link:'https://www.facebook.com/photo.php?fbid=10151888667313745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'F.X. Buckley',
	pct:3.8,
	desc:'Ges ugly really quick',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1174601_10151888668333745_2024277149_n.jpg?oh=c8e76a1e2cc57c7ebe2a6fd1546b295b&oe=57E2664D&__gda__=1473776664_d69baff8f3cc837b0d6d39d8768b4a7f',
	link:'https://www.facebook.com/photo.php?fbid=10151888668333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris pilzens',
	pct:4.2,
	desc:'Lacks any real flavour',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/1238101_10151888670483745_714083820_n.jpg?oh=c1f80e8c485a31e55c7f4550e600169c&oe=57CBD64A',
	link:'https://www.facebook.com/photo.php?fbid=10151888670483745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Butauty',
	pct:5.5,
	desc:'Malty crapness. Why make such a big bottle for a crap beer',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1185491_10151888671543745_1781451969_n.jpg?oh=8b400aa838b82b61338adfc299c78f80&oe=57C91A66&__gda__=1473162614_01b3f89b8528960a95890d1aadcf3f24',
	link:'https://www.facebook.com/photo.php?fbid=10151888671543745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brakspear Oxford gold',
	pct:4.6,
	desc:'Did not deliver what the label promised',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/76895_10151929068333745_1039559147_n.jpg?oh=5cdd0e0610bfc0b2debb982babd6b9e4&oe=57DB6357&__gda__=1473274316_0a1d663b723a3e0ee60c9184e218b3e0',
	link:'https://www.facebook.com/photo.php?fbid=10151929068333745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Betty Stogs',
	pct:4.0,
	desc:'Tastes pretty much as you would expect from the name',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13890_10151929069588745_726766227_n.jpg?oh=b90a5f713e32d3deefb8ed28fc9b081d&oe=57D7DFF6&__gda__=1474331635_f8b249424406ee2d930e8ff6f8c35d4f',
	link:'https://www.facebook.com/photo.php?fbid=10151929069588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Golden Ale',
	pct:4.7,
	desc:'One of those brewing companies that thinks traditional means better',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/37805_10151929069633745_1476415530_n.jpg?oh=034078086e32ca8344cf654812f294c8&oe=57CB6895&__gda__=1473664168_e70dadf1c61d16dfc0111249829fe916',
	link:'https://www.facebook.com/photo.php?fbid=10151929069633745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Best Bitter',
	pct:3.7,
	desc:'I\'ll never understand what people see in a bitter',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1233387_10151929070703745_1019382535_n.jpg?oh=917ec2b373ef115f92a23fbd69c551a3&oe=579B61BB&__gda__=1474449282_1d933ba5a6b449311d1d978c94dbdd48',
	link:'https://www.facebook.com/photo.php?fbid=10151929070703745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s Mild',
	pct:3.7,
	desc:'This company seems incapable of making a good beer',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1185966_10151929070968745_2126426266_n.jpg?oh=aa86647814e1c30ac8c1e778cc8033d9&oe=57E7D01D&__gda__=1472711204_f1f436c6617dfebab2ce93331d125529',
	link:'https://www.facebook.com/photo.php?fbid=10151929070968745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St Peter\'s ruby red ale',
	pct:4.3,
	desc:'Probably the best of a bad bunch',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1233970_10151929073588745_1740349447_n.jpg?oh=ee94ffb4820fbe41c5e621d266ae21a7&oe=57CE17E8&__gda__=1472879948_e22e9881ce9a218037dc989ed0b5759a',
	link:'https://www.facebook.com/photo.php?fbid=10151929073588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys ekstra',
	pct:5.2,
	desc:'So much better than expected considering it\'s an extra',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1146736_10151860444768745_544406358_n.jpg?oh=cbb18bcae5d5601579b1997a82d96e24&oe=57D235FF&__gda__=1473041223_04f6024883838413ce5864164b6794b6',
	link:'https://www.facebook.com/photo.php?fbid=10151860444768745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys',
	pct:4.6,
	desc:'Finally found some Lithuanian beer. A very smooth lager',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1185772_10151860443958745_1792378907_n.jpg?oh=99de04f768c03e9c9e077363dba7c824&oe=57D24D58&__gda__=1469837618_b62fffa238c9449f460b55438df6ecc7',
	link:'https://www.facebook.com/photo.php?fbid=10151860443958745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltijos',
	pct:5.8,
	desc:'A little bit too bitter for my taste',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1208565_10151929069708745_1120619541_n.jpg?oh=84fe35f7e556d1afda74207008216c42&oe=57D3D3E9&__gda__=1474403459_5f32f2f904f1aa36621d1ec872db0656',
	link:'https://www.facebook.com/photo.php?fbid=10151929069708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys Baltas white',
	pct:5.0,
	desc:'Can\'t get over the bite of wheat beers',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/563535_10151929074098745_379750960_n.jpg?oh=6c5ca518ead6937ac7cb754f47040182&oe=57D33382&__gda__=1473097106_ce4a47a2178b28b58253e94ba20a9823',
	link:'https://www.facebook.com/photo.php?fbid=10151929074098745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Svyturys old port ale',
	pct:5.6,
	desc:'A lot smoother than expected',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1234836_10152293116538745_626754395_n.jpg?oh=398ff1bc10491a32cb397ca2b977ce8e&oe=57E31E42&__gda__=1472678046_d33d40e15b7d47b014904f7c4a0a9255',
	link:'https://www.facebook.com/photo.php?fbid=10152293116538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Luksus',
	pct:5.2,
	desc:'Yep, it’s a lager',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1484218_10152147730358745_1572080029_n.jpg?oh=e710bc141881793952487a2c8275da95&oe=57D7D047&__gda__=1469888813_97710eea69bcbdf22586d0af7302180c',
	link:'https://www.facebook.com/photo.php?fbid=10152147730358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kanapinis',
	pct:5.3,
	desc:'Malty goodness in a great bottle',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1186120_10151860445063745_1601572346_n.jpg?oh=7a2726f3340d1f442b01b205f1307ac5&oe=57CF134E&__gda__=1473275675_3f7f693883cdb1bfd701985a5f1643a6',
	link:'https://www.facebook.com/photo.php?fbid=10151860445063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Keptinis',
	pct:5.7,
	desc:'Not at all excited by this. Not even a semi',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1240201_10151929073793745_2035177594_n.jpg?oh=bab8cff8fdf6558bdae4760b753b2bb9&oe=57D5DE5A&__gda__=1474528015_da6a0c0598cf00e5b216817be94d80d2',
	link:'https://www.facebook.com/photo.php?fbid=10151929073793745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aladaris Gaisais',
	pct:5.0,
	desc:'Another quality baltic beer',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/603023_10152001619908745_1091913425_n.jpg?oh=1cf940c53469faa54c245542545ccf74&oe=57D30F02&__gda__=1469734878_e4fa5ef19fb13c4fd35b5d037b18d741',
	link:'https://www.facebook.com/photo.php?fbid=10152001619908745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Porteris',
	pct:6.8,
	desc:'Not a bad porter',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1891209_10152293116448745_1394991978_n.jpg?oh=241689c5c2ed31034aab2e4352a7f816&oe=579DE1FD&__gda__=1473353225_66f1acc4eb3a566837c9ad500bc87c2d',
	link:'https://www.facebook.com/photo.php?fbid=10152293116448745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas engleman',
	pct:5.2,
	desc:'Unimpressive',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1176307_10151888665863745_1280335301_n.jpg?oh=db4c5348328d6bdff3b86e1fbb8cc7ab&oe=57E7C5F2&__gda__=1474362338_85c6d32b589b801fca2127d1254c4d42',
	link:'https://www.facebook.com/photo.php?fbid=10151888665863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Bravoro',
	pct:5.2,
	desc:'A little bit wrong',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1236122_10151929070963745_949716381_n.jpg?oh=767159046a1abd243c65b86868132fa4&oe=57E058FD&__gda__=1474633197_0b29907b1b84b1abc651c1226b7b7607',
	link:'https://www.facebook.com/photo.php?fbid=10151929070963745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volfas Engelman Jubiliejinis 160',
	pct:5.3,
	desc:'Nice and smooth, and in a cool bottle',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1385338_10152001620008745_462276383_n.jpg?oh=196a56dd278dfe75ec5397c249008b59&oe=57D023EC&__gda__=1473907504_c3039c1de4c488d83e472b02f9b7d89d',
	link:'https://www.facebook.com/photo.php?fbid=10152001620008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deviant dales pale ale',
	pct:8,
	desc:'Light for the strength',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/526556_10151929072623745_428217529_n.jpg?oh=8d1d8dac110cf0d98ebd6f47c4214fff&oe=57DB8118&__gda__=1472740433_80e800a65f26e48573bc2585002d9167',
	link:'https://www.facebook.com/photo.php?fbid=10151929072623745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mama\'s Little Yella Pils',
	pct:5.3,
	desc:'An easy drinking pils',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1187248_10151929072773745_1085795541_n.jpg?oh=053edb867f0257c5dda35ec92e352793&oe=57E4A1D7&__gda__=1473981678_3e18c8eb87ede26270a516f13a1aef13',
	link:'https://www.facebook.com/photo.php?fbid=10151929072773745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'McEwans Export',
	pct:4.5,
	desc:'Not as rubbish as the the can looks',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1384073_10152001619653745_1344996131_n.jpg?oh=9fdc18c6d253c3a2275e4d34f65d7bfd&oe=57D5CF38&__gda__=1473003777_23556240069a35f74f8bbdd58f62d2c2',
	link:'https://www.facebook.com/photo.php?fbid=10152001619653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cave creek chill beer',
	pct:4.2,
	desc:'A nice balance of chilli and beer. And yes that is a whole chilli in the bottle',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1378394_10152001620853745_543682046_n.jpg?oh=9beba9a914e58e447f3f6b7769db9163&oe=57E793D7&__gda__=1474616460_6b1880fec627f6c9e59ed3b187d605c4',
	link:'https://www.facebook.com/photo.php?fbid=10152001620853745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan dubbel',
	pct:6.4,
	desc:'Strong chocolate taste but takes a while to get used to',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/563194_10152001621188745_696002352_n.jpg?oh=277e2720963293252f3f3c4e855cfa99&oe=57D65F4A&__gda__=1474204506_b50875bc1d677cad8060f22cdd4c2c4d',
	link:'https://www.facebook.com/photo.php?fbid=10152001621188745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan strong golden belgian ale',
	pct:8.0,
	desc:'A bit harsh for what I would call a golden ale',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1497799_10152147732653745_1203656587_n.jpg?oh=344a3872a2f89827d464045e1111b99e&oe=57D6B141&__gda__=1473278095_37b0d92f0952645dd8d755992470f2f2',
	link:'https://www.facebook.com/photo.php?fbid=10152147732653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan Quad',
	pct:11.2,
	desc:'One of the strangest beers I’ve tasted. Like trying to cross a lambic with a stout',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1486770_10152147730063745_1162438061_n.jpg?oh=5438182d01edff045fdcb42470f72494&oe=57D868FD&__gda__=1473552068_9d49645c204ad599c09e71e15dc3101a',
	link:'https://www.facebook.com/photo.php?fbid=10152147730063745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Partizan single',
	pct:4.8,
	desc:'Nice label, shit beer',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1376370_10152001622893745_406801645_n.jpg?oh=23448de78af23565ddaa9cb5ed5a2420&oe=57D5E474&__gda__=1474577661_229613fa13e5537ca8dd8616cc11bb40',
	link:'https://www.facebook.com/photo.php?fbid=10152001622893745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The norseman',
	pct:5.0,
	desc:'An average ale',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1379331_10152001623128745_1319626583_n.jpg?oh=b5eff2d8a99d45fce6ada36af590c2da&oe=57D0D628&__gda__=1474740241_27857db51d69c95bc414f3bded98590a',
	link:'https://www.facebook.com/photo.php?fbid=10152001623128745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trident',
	pct:5.0,
	desc:'Like a red Guinness gone wrong',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1381987_10152001622888745_1624478487_n.jpg?oh=1836219b583e5f4bf2ad4c466b2582f2&oe=579A8CBF&__gda__=1469826031_bab83c7c07397d8b788de29809ab4516',
	link:'https://www.facebook.com/photo.php?fbid=10152001622888745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis Grand Select',
	pct:5.4,
	desc:'A bit of a hobo taste, but not terrible',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1381183_10152001624088745_284273692_n.jpg?oh=62a6a0d080b2d9292ce59a73f4c04198&oe=57CC457F&__gda__=1474064547_33c1c913871912c6974d7671cf5d1e29',
	link:'https://www.facebook.com/photo.php?fbid=10152001624088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batemans Combined Harvest',
	pct:4.7,
	desc:'I\'m amazed that this doesn\'t taste like an absolute mess',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1383443_10152001624583745_873432820_n.jpg?oh=30a0e4dc3b523829d01ec9293cbfa6d7&oe=579AA852&__gda__=1474794408_dde5b89cb7b42090170333928f74d2aa',
	link:'https://www.facebook.com/photo.php?fbid=10152001624583745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Aldaris Dumaku',
	pct:null,
	desc:'Pretty nice',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1381516_10152001638348745_1868079701_n.jpg?oh=6e3e515e297fc24978de46a79d1ba5e8&oe=57D154AC&__gda__=1469827526_31a896caf76e4245b45627b96f3fa18f',
	link:'https://www.facebook.com/photo.php?fbid=10152001638348745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Post road pumpkin ale',
	pct:5.0,
	desc:'Tastes like christmas',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1512830_10152147731138745_971828677_n.jpg?oh=2ba32db36f32c72ead104c1e7f044ec3&oe=579AF30A&__gda__=1474136533_ab1034df54bc095566026a7a540fcbc0',
	link:'https://www.facebook.com/photo.php?fbid=10152147731138745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burning Sky Aurora',
	pct:5.6,
	desc:'Not too bitter with a mild hoppy taste',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1476223_10152147732298745_333484722_n.jpg?oh=9ddd5c1db6ab800ab497c44ee81ff24e&oe=579AAC07&__gda__=1472677637_b3a857c306df3a4562b5f4676b483354',
	link:'https://www.facebook.com/photo.php?fbid=10152147732298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewmeister Armageddon',
	pct:65,
	desc:'Was supposedly the strongest beer in the world but that is a complete lie. This beer is max 20% abv. I\'ve never been lied too this badly in my life',
	score:0,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1521885_10152147732818745_1092668016_n.jpg?oh=3c745a110d830dfad4c4f2dfa6ed5bfb&oe=57CD36C3&__gda__=1474837929_e6a33cfeaea768e706da580f0cb401f4',
	link:'https://www.facebook.com/photo.php?fbid=10152147732818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Blonde',
	pct:4.8,
	desc:'Kind of tasty lager',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/579360_10152147733223745_1201965133_n.jpg?oh=92cc796fb5891237c99f242c5983b6bb&oe=57D46014&__gda__=1474763800_d2b1f46cabdf79218fae6c095a3fca71',
	link:'https://www.facebook.com/photo.php?fbid=10152147733223745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harvey\'s Kiss',
	pct:4.8,
	desc:'Kind of warming. Better than the label suggests',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1482844_10152147733228745_1616012407_n.jpg?oh=b3001a3a0fb5e9dd943fcfd88854eec2&oe=57C92E8B&__gda__=1469863070_f7cb6aa2b8994d13f14f283320cbed09',
	link:'https://www.facebook.com/photo.php?fbid=10152147733228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arany Aszok',
	pct:4.3,
	desc:'Easy drinking lager',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1458701_10152147733363745_127688331_n.jpg?oh=0da1cb978c1ab8e9acb2cb5ea6bd0bb2&oe=579E773A&__gda__=1469873843_00aba16090354abf38577c4f8a157336',
	link:'https://www.facebook.com/photo.php?fbid=10152147733363745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Borsodi',
	pct:4.6,
	desc:'Not much flavour at all',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1513298_10152147733513745_1123080804_n.jpg?oh=fde03a63bea7ad4f98b403db5491fd17&oe=57C766D7&__gda__=1473421183_4f334dfa542dff0d427156727260969a',
	link:'https://www.facebook.com/photo.php?fbid=10152147733513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dreher',
	pct:5.2,
	desc:'Hungarian standard',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1479455_10152147733863745_266822035_n.jpg?oh=eb6494b1b0cf68f81f3da48eaa4b86bb&oe=57CCFB68&__gda__=1473132920_dbd05cdebcc9dd7af6aa2e476d627577',
	link:'https://www.facebook.com/photo.php?fbid=10152147733863745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zlaty bazant',
	pct:5.0,
	desc:'A tasteless Slovakian lager',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1507155_10152147733883745_1859906756_n.jpg?oh=0c0776ceafad8aaccb32c46bf306151e&oe=57D559D8&__gda__=1473671304_ebd4eba0f261dcb940a499441a8ae2f1',
	link:'https://www.facebook.com/photo.php?fbid=10152147733883745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Soproni',
	pct:4.5,
	desc:'Lager. Nothing more to say',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1513718_10152147734013745_2012942673_n.jpg?oh=3a78880ed8781569765570e306ee5d38&oe=57CB351A&__gda__=1473873531_fa18dfecf5976dd1dc1ffbe2663ec814',
	link:'https://www.facebook.com/photo.php?fbid=10152147734013745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel smieth organic lager',
	pct:5.0,
	desc:'Nothing special',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1526342_10152147734658745_1378507161_n.jpg?oh=9bd2f8ae416b216bd4a59300878dab5e&oe=57D92BBD&__gda__=1473165015_25539f269296d597c2ca33b6036a4aae',
	link:'https://www.facebook.com/photo.php?fbid=10152147734658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nicholson\'s pale ale',
	pct:4.0,
	desc:'A slightly tangly pale ale',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1513323_10152147734918745_1271199559_n.jpg?oh=8e8305480b5c5f713c190512b6d6d885&oe=57DBCD65&__gda__=1473499996_ce6ae781aa02988f06a42c7fac637f11',
	link:'https://www.facebook.com/photo.php?fbid=10152147734918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Meteor',
	pct:4.0,
	desc:'Normal London lager',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1012810_10152147735373745_584437479_n.jpg?oh=64b4fd6870f3b6d3977bea376406c08d&oe=57D2293F&__gda__=1473508805_cd696de981004de124de828a3e65ae90',
	link:'https://www.facebook.com/photo.php?fbid=10152147735373745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brighton Best',
	pct:4.0,
	desc:'Plain lager. Easy drinking',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1520804_10152147735848745_1884810076_n.jpg?oh=63223c2ba81444918702c475c8d8e044&oe=57D271F4&__gda__=1474318795_4d1f7c8570eb915703b4d1c31740834c',
	link:'https://www.facebook.com/photo.php?fbid=10152147735848745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknot Queboid',
	pct:8.0,
	desc:'A nice strong flavour',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1520670_10152147736383745_1604295852_n.jpg?oh=29bff471ad6a93b8a977b5ad9e3bc79b&oe=57D66617&__gda__=1473401469_36236ed9f896246b4f61a06827d6dca0',
	link:'https://www.facebook.com/photo.php?fbid=10152147736383745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Harveys Georgian Dragon',
	pct:4.7,
	desc:'A mild ruby ale with a slightly sweet taste',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1531869_10152147736428745_246396192_n.jpg?oh=2b083c6e42613262adf4dcb8b1987733&oe=57D5C1D8&__gda__=1474602244_8593f3f7fc90d1ce877d1bc4eb823289',
	link:'https://www.facebook.com/photo.php?fbid=10152147736428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monty\'s ding dong',
	pct:4.4,
	desc:'Light and festive and drinkable',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1911822_10152280800298745_1797219050_n.jpg?oh=1b1e350d77b0883c9f66d652faf37e6e&oe=57CA285D&__gda__=1473001430_42543b05f468c98a073f07c46b07b4e1',
	link:'https://www.facebook.com/photo.php?fbid=10152280800298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The Hop Studio Noel',
	pct:4.5,
	desc:'Some very strange hoppy flavour',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1618610_10152280800288745_1862858046_n.jpg?oh=18cc2c8491d790fd624014dddafc5f2b&oe=57E2F345&__gda__=1469984303_aff1497eb5a477c08fe896046cc7379f',
	link:'https://www.facebook.com/photo.php?fbid=10152280800288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Woodlands Christmas special',
	pct:4.8,
	desc:'Very good for a British ale',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1623661_10152293086658745_850862784_n.jpg?oh=2a3531fbf2eca2005775e86323513f68&oe=57E4F777&__gda__=1474480940_7a9d306e6ddad73288d7f4d00bc42250',
	link:'https://www.facebook.com/photo.php?fbid=10152293086658745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Uncle Scrooge',
	pct:4.5,
	desc:'No one was being cheap when making this one',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1966869_10152293086653745_1230920015_n.jpg?oh=a79c40468e5d0a5cef842b7a7d0647c8&oe=57E2E628&__gda__=1472905016_8b0ba5c1ce41552612f88ba70e9f7c11',
	link:'https://www.facebook.com/photo.php?fbid=10152293086653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheddar ales festive totty',
	pct:4.7,
	desc:'Not sure how totty applies in this context',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/988380_10152293086573745_484773090_n.jpg?oh=172754ce56d46405f53d6215a55005f5&oe=57CFE6A3&__gda__=1473937250_1d155ba4112df9183d2775982e6014de',
	link:'https://www.facebook.com/photo.php?fbid=10152293086573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hardknott azimuth IPA',
	pct:5.8,
	desc:'An ok IPA',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1621734_10152293086743745_608289512_n.jpg?oh=6911c69bfc7337842c6a21903a0de2ea&oe=57D248D1&__gda__=1473835278_1de9fc67a485053518a9a4e806fd0dd0',
	link:'https://www.facebook.com/photo.php?fbid=10152293086743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog Atlantic lager',
	pct:4.7,
	desc:'Fruity and mild',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/993032_10152293086873745_958885686_n.jpg?oh=98bd3e5b30849b8a091cd085356ac2ba&oe=57995628&__gda__=1473757205_30713f1bf6eedd36c6436e95475afecc',
	link:'https://www.facebook.com/photo.php?fbid=10152293086873745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Flying dog snake dog',
	pct:7.1,
	desc:'A little harsh',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/1982179_10152293086923745_434038155_n.jpg?oh=7c961f498155a89f914b41c19edfd0dd&oe=57CF2695&__gda__=1474098666_9505ee0052d7038f56fbabfb54a27cda',
	link:'https://www.facebook.com/photo.php?fbid=10152293086923745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe Triple',
	pct:8.5,
	desc:'Stronger and nicer than the standard',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1625649_10152280800668745_1746325328_n.jpg?oh=b5da082472270322b45617c9feddb9ab&oe=57E4D386&__gda__=1473255729_a112a0895158abda155d2fb4f34e0bcd',
	link:'https://www.facebook.com/photo.php?fbid=10152280800668745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe dark',
	pct:7.5,
	desc:'More of a fuller Leffe than a dark beer',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1902725_10152293087758745_569610046_n.jpg?oh=ff6fda797d16a9071d2f2e3abadf97ea&oe=57CC6361&__gda__=1474241000_7bfa58fe45c264d08859a90dc8c063b6',
	link:'https://www.facebook.com/photo.php?fbid=10152293087758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Leffe',
	pct:null,
	desc:'A strong Belgian taste',
	score:6,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/398737_10151396305948745_940904591_n.jpg?oh=ceb00a5ae86f20b47d71df81f2dded20&oe=57CDEB1C',
	link:'https://www.facebook.com/photo.php?fbid=10151396305948745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steen Brugge',
	pct:5.0,
	desc:'Not the biggest fan of this wheat beer',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1911696_10152280800918745_1929684638_n.jpg?oh=1b044fa75d039ba79de308b25fa03c79&oe=57E74D9F&__gda__=1472636815_3bf8c5b2b185358e935b158ef69953c3',
	link:'https://www.facebook.com/photo.php?fbid=10152280800918745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium Christmas',
	pct:10.0,
	desc:'Stronger than the originals and a little less unique',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1623626_10152280800643745_1481530083_n.jpg?oh=42a239459b3f0ff0c4f0e63fb035dee0&oe=57C6FB3C&__gda__=1469952439_542f07cf905a184f827aece4afd20158',
	link:'https://www.facebook.com/photo.php?fbid=10152280800643745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delerium nocturnum',
	pct:8.5,
	desc:'Not as nice as the tremens',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1901197_10152280800558745_1902963784_n.jpg?oh=ee041bbdb1ebb66fcb7561186114ce95&oe=57D816B5&__gda__=1473287357_ef8bdbb6b86a500389df31e6aaa64d2d',
	link:'https://www.facebook.com/photo.php?fbid=10152280800558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Passchendaele',
	pct:5.1,
	desc:'A lager with a Belgian ale flavour. Very strange',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/13244_10152293087118745_389678283_n.jpg?oh=eb8392b7652d333b18191ed1fcdf30a4&oe=57E32C10&__gda__=1474071105_2dc4a7b4a853697fef9f8c7a2321f9bb',
	link:'https://www.facebook.com/photo.php?fbid=10152293087118745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Qantelaar',
	pct:9.0,
	desc:'Very flavoursome but not too sweet. Not worth the €18 I paid though',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1924797_10152293087133745_1742289591_n.jpg?oh=91582b04f4cf77055a4e2790fe1707bc&oe=57DDF9CC&__gda__=1473687367_87c5f5cc6156f2d6271672b033023976',
	link:'https://www.facebook.com/photo.php?fbid=10152293087133745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cookie Beer',
	pct:8.0,
	desc:'Not as much cookie flavour as I was hoping',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1932219_10152280800273745_138064221_n.jpg?oh=6f0e1322cbb08f33173f10d9fb76de64&oe=57D90BA5&__gda__=1474222377_000c314d99c8ec4651f8a1339205974a',
	link:'https://www.facebook.com/photo.php?fbid=10152280800273745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St bernardus',
	pct:10,
	desc:'Takes a bit to get used to but smooth after that',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/1902068_10152293087213745_1501844823_n.jpg?oh=90efbf7b70140502b13c52cbe6c3a0a0&oe=57D0A4B9&__gda__=1474541036_321a39c97083c76740f1ddd19bfcc33c',
	link:'https://www.facebook.com/photo.php?fbid=10152293087213745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm',
	pct:5.4,
	desc:'A mild Belgian beer',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/988803_10152293087318745_73934001_n.jpg?oh=4b1d485b6bf10132ce34557d0c91552c&oe=57E0D8EB&__gda__=1474690147_aca95a65e4874106462bf05a6c90fd39',
	link:'https://www.facebook.com/photo.php?fbid=10152293087318745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grimbergen blonde',
	pct:6.7,
	desc:'An ok Trappist',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1517454_10152293087538745_1520731799_n.jpg?oh=a01da85c3762fd94fadf9b15d59455e7&oe=57E6EAC6&__gda__=1473960305_377408f9bbfe293ef1b56ff186899652',
	link:'https://www.facebook.com/photo.php?fbid=10152293087538745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chouffe',
	pct:8.0,
	desc:'Well rounded',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1911857_10152293087523745_1264067765_n.jpg?oh=9a370da2e1a6731f99418cb37a5decd3&oe=57E494C8&__gda__=1474544707_65a8700429c021e43cd15ef84fb95c8f',
	link:'https://www.facebook.com/photo.php?fbid=10152293087523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brugge tripel',
	pct:8.7,
	desc:'Like a lager that warms you up',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1662198_10152293087613745_1851257445_n.jpg?oh=94bac0fb29a5fcc439bc45ec47d9b22f&oe=57E4A4BB&__gda__=1474484715_0626983de403df67c74b6c72a1a832d9',
	link:'https://www.facebook.com/photo.php?fbid=10152293087613745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Corsendonk',
	pct:7.5,
	desc:'Not as easy to drink as I was hoping',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1534405_10152147734558745_724921108_n.jpg?oh=34056fc816b516bda07cd463452249fe&oe=57D0BFD5&__gda__=1473775469_f9bc2a992c026221e0a7faacec88ea5d',
	link:'https://www.facebook.com/photo.php?fbid=10152147734558745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fonteinen oude geuze',
	pct:6.0,
	desc:'Not a particularly nice lambic',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1382815_10152001621173745_208469765_n.jpg?oh=4495379808ff427a87340900c00057b3&oe=57D76125&__gda__=1472724473_e91def160ad797062eda350081bbae0f',
	link:'https://www.facebook.com/photo.php?fbid=10152001621173745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vedett',
	pct:5.2,
	desc:'',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/486956_10151296240913745_1196071675_n.jpg?oh=cc6a3c1be26e48575330869cf7d13819&oe=57CF5B62&__gda__=1469908564_274a2b4a6c39edfd45d9fcf584e1f696',
	link:'https://www.facebook.com/photo.php?fbid=10151296240913745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carolus classic',
	pct:8.5,
	desc:'Dark but not heavy',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1782108_10152293087803745_1558065696_n.jpg?oh=c2d1be83e36e2d9da8d48083e1c2c5f6&oe=579E2385&__gda__=1474084622_1250decce74c434033e301bca4fa2547',
	link:'https://www.facebook.com/photo.php?fbid=10152293087803745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Orval',
	pct:6.2,
	desc:'A bit too harsh',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/603000_10151798800068745_508626500_n.jpg?oh=e3a6faa92a731c7d329543e50c22186d&oe=57DF6703&__gda__=1474607443_20acd1eb908e137da9367f601a4d03b1',
	link:'https://www.facebook.com/photo.php?fbid=10151798800068745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pauwel Kwak',
	pct:8,
	desc:'A mild Belgian beer. +1 for the sweet glass',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1521828_10152147734533745_969043237_n.jpg?oh=a84a62c076755f9e5b07381fd576fcec&oe=57D0A19E&__gda__=1474801832_ec3413b84e0ebd3d7be5fbebcfe4193f',
	link:'https://www.facebook.com/photo.php?fbid=10152147734533745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duvel',
	pct:8.5,
	desc:'Not as good as when you buy it in Belgium',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/6394_10151428524928745_265167117_n.jpg?oh=ad20effe6f84646769b8ecb4b20b29eb&oe=57E6DA7A&__gda__=1474798885_156d0742149b80f558fba74448d368f3',
	link:'https://www.facebook.com/photo.php?fbid=10151428524928745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Triple karmeliet',
	pct:8.4,
	desc:'I choose this above Delerium',
	score:10,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/1654211_10152293087868745_1642505899_n.jpg?oh=71957cd3e944a528cc78e7f608b4ddc2&oe=579CA623&__gda__=1474771558_f476271c530fdc56d1df9aa649134e86',
	link:'https://www.facebook.com/photo.php?fbid=10152293087868745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Co-operative Czech lager',
	pct:5.0,
	desc:'Piss water',
	score:3,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1976956_10152293116608745_971300903_n.jpg?oh=37cf50543038b83960d77a8dc03e554c&oe=57D4CE75&__gda__=1473697220_84572a1f3cef4daef886751450bfd538',
	link:'https://www.facebook.com/photo.php?fbid=10152293116608745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fullers Bengal lancer',
	pct:5.3,
	desc:'A mild IPA',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1902717_10152293116728745_604384062_n.jpg?oh=4519c6d0c5f25a6e09033fbd28143707&oe=57CAFF65&__gda__=1473510974_c659f5c308746fb35bcc7f4f667e8f1f',
	link:'https://www.facebook.com/photo.php?fbid=10152293116728745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rivet lager',
	pct:4.7,
	desc:'Cheap Aldi lager',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1654215_10152293132398745_1156319319_n.jpg?oh=d244e7d2fc52fc4f8bc48b29f54cbcb8&oe=579DFDD8&__gda__=1473831346_2a2425467686d9fd7895b7b6d85a3ba5',
	link:'https://www.facebook.com/photo.php?fbid=10152293132398745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Itchy green pants cloudy ale',
	pct:4.7,
	desc:'A citrusy ale',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/14516_10152293132388745_1804956545_n.jpg?oh=f8c19f1c0e2c621b63a5eb58c902a25f&oe=57D0ECB6&__gda__=1473004518_5cb8ca37635b5a99a9b0568883f4775b',
	link:'https://www.facebook.com/photo.php?fbid=10152293132388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beez neez',
	pct:4.7,
	desc:'Nicer than other wheat beers',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1689028_10152293132393745_2076387915_n.jpg?oh=a1bd62b33a4f27fed7de1c8ce54adaff&oe=57C9844F&__gda__=1469780261_a752e5d3caa4baa53af1810242959ff1',
	link:'https://www.facebook.com/photo.php?fbid=10152293132393745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big helga',
	pct:4.7,
	desc:'Not at all like a Munich beer',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/1911736_10152293132828745_389724707_n.jpg?oh=52766cf4fa61ee0e3105209831fa0cf2&oe=57CF6305&__gda__=1474131819_f2feb233c45cbb82696f99d3a6e2dc66',
	link:'https://www.facebook.com/photo.php?fbid=10152293132828745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures original pilsner',
	pct:null,
	desc:'Doesn\'t have the flavour of their other brews',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1959613_10152293132738745_13261275_n.jpg?oh=9554dce387fef1e0db5d8d8621613519&oe=57E678A0&__gda__=1473339209_84c9aac626f41268c2d0df6eaf0b9d12',
	link:'https://www.facebook.com/photo.php?fbid=10152293132738745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s real ale',
	pct:null,
	desc:'Strong ale flavour in a lager',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1797480_10152293132838745_183692179_n.jpg?oh=243563e79d9928ce67a5009021e46c89&oe=57E30EE7&__gda__=1469730890_030c8d6581c60f0c3b0b2df8b4164644',
	link:'https://www.facebook.com/photo.php?fbid=10152293132838745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone and wood pacific ale',
	pct:null,
	desc:'Very nice',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1947926_10152293132973745_485396127_n.jpg?oh=f325564bc20f1ab06a026edafd8fcb9d&oe=57CDE421&__gda__=1469742811_5fc82763bc41080b2b893f7c3fcae64e',
	link:'https://www.facebook.com/photo.php?fbid=10152293132973745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s angry man',
	pct:5.0,
	desc:'Pretty good',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1975034_10152293133088745_313669023_n.jpg?oh=e0d961de25786d8e25978f2044829814&oe=57DF71B4&__gda__=1473997829_bc49fa3a9d4cb0928655283f0a4720d3',
	link:'https://www.facebook.com/photo.php?fbid=10152293133088745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray\'s whale ale',
	pct:4.5,
	desc:'The smell seems wrong to me since it\'s a wheat beer but the flavour is ok',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1622815_10152293133083745_1090580214_n.jpg?oh=ac7d32c006ec7a25c86026069f42d0a7&oe=57CF6550&__gda__=1473852635_6bde3ceaad91a19fc914b9c99962a7fe',
	link:'https://www.facebook.com/photo.php?fbid=10152293133083745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate hopinator',
	pct:7.5,
	desc:'Hoppy as promised',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/577380_10152293133158745_1128439575_n.jpg?oh=9fa49dd1c4824769c21f1d87154a9d58&oe=57CC5BB5&__gda__=1473222505_041c3d3f0e003c560cdd75eb9bcb2ae0',
	link:'https://www.facebook.com/photo.php?fbid=10152293133158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brookvale union ginger beer',
	pct:null,
	desc:'Sweet sweet ginger',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1796708_10152293133278745_1592031312_n.jpg?oh=bb01ef025482dee9be1f3efaed4c2e94&oe=57D91205&__gda__=1473590962_1934572e6248c0a6d9fd6df742e7032d',
	link:'https://www.facebook.com/photo.php?fbid=10152293133278745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bakalar',
	pct:null,
	desc:'A mild beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1620416_10152293133463745_1571056383_n.jpg?oh=efc5e2c25f777d2147b2a319ff578d04&oe=57D24C0A&__gda__=1473406141_898ab52134b57458bee16e36e858df0d',
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
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1962592_10152293133843745_1037481465_n.jpg?oh=02c2c41b97da0ae8407e66ca4f684264&oe=57D03E9C&__gda__=1474187427_9b4cc5f059f1f64e1aaa97cb823a9bfb',
	link:'https://www.facebook.com/photo.php?fbid=10152293133843745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The grifter pale ale',
	pct:null,
	desc:'A nice pale',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1939940_10152293133933745_1195913989_n.jpg?oh=f1b8f381c17f18eb4ebb209685a22a06&oe=57DCCCF7&__gda__=1469953856_e54d7143b7192ab126ff8c2ca8a0f5b9',
	link:'https://www.facebook.com/photo.php?fbid=10152293133933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s pale ale',
	pct:4.6,
	desc:'Not at all a pale ale, just a crappy lager',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1234276_10152327616288745_1383768960_n.jpg?oh=603f8b29757b04c0ad28d324a44ebdb2&oe=57C94F21&__gda__=1472729733_67ea52a8497fd3f91cad97522a3d1e1b',
	link:'https://www.facebook.com/photo.php?fbid=10152327616288745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale ale IPA',
	pct:5.5,
	desc:'Sweater than a normal IPA',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1601320_10152327616293745_1926213057_n.jpg?oh=d41cb48e9e68eb0a18f59c231a1b2bd8&oe=57CC0BC4&__gda__=1473583987_e126b89accbdf23c4fa5f6a9b35fa8eb',
	link:'https://www.facebook.com/photo.php?fbid=10152327616293745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Zamkowe',
	pct:5.6,
	desc:'An average polish beer',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1148905_10152327616358745_1369255120_n.jpg?oh=517581a0fb39e89263db81c44fc63354&oe=57DE6C9B&__gda__=1469775601_b6621f5d504accb9072da53ab4e93d96',
	link:'https://www.facebook.com/photo.php?fbid=10152327616358745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road beechworth pale ale',
	pct:4.8,
	desc:'a nicely hopped pale ale',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1920508_10152327616563745_674556830_n.jpg?oh=2a88a79fe3148b86e3c81e4784d623e5&oe=57C641C8&__gda__=1474354482_c23cdd219f8c2d24f2d98dff29db5d98',
	link:'https://www.facebook.com/photo.php?fbid=10152327616563745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lucky',
	pct:4.8,
	desc:'A little bit metallic',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1240436_10152327616598745_898539470_n.jpg?oh=e7d849c38ad4dbff9a88b683e861c988&oe=57D797E7&__gda__=1473657454_821fe8f2f6b55cfbd8feb8d19bad83ed',
	link:'https://www.facebook.com/photo.php?fbid=10152327616598745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Murray’s rudeboy',
	pct:4.8,
	desc:'Not quite sure what this beer is going for',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1506399_10152327616573745_36221798_n.jpg?oh=b8f7a144a39a9403677902c2b00a2d6a&oe=57CD6CB5&__gda__=1473379475_598408876a8a46f8798cc5c1f1cf5226',
	link:'https://www.facebook.com/photo.php?fbid=10152327616573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Viking',
	pct:4.4,
	desc:'An ok pilsner',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/1948233_10152327616743745_932399934_n.jpg?oh=f3d8c923a9919932b49135e41961227a&oe=57D29A88&__gda__=1473732722_7f2069b958e03c874f23b9a391866ac6',
	link:'https://www.facebook.com/photo.php?fbid=10152327616743745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines stout',
	pct:5.1,
	desc:'A mild easy drinking stout',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1503434_10152327617153745_1770406360_n.jpg?oh=47e933cae66dfeb7a812e62b622cd827&oe=57D1D583&__gda__=1473231292_51976be88831112b8dd1a27cb1ef5971',
	link:'https://www.facebook.com/photo.php?fbid=10152327617153745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tui',
	pct:4.0,
	desc:'A cheap NZ lager without much flavour',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/971710_10152327616993745_1470932463_n.jpg?oh=4cf0077a32e108db50077eb7a7c8efd8&oe=57DDF049&__gda__=1474542627_94f1444349093be73971228ce5d21923',
	link:'https://www.facebook.com/photo.php?fbid=10152327616993745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ruby Tuesday',
	pct:4.7,
	desc:'A nice well balanced amber',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10003998_10152327617233745_190591734_n.jpg?oh=e3b99a238323c130f22b0de950d75ddd&oe=57CAE4AC&__gda__=1473865354_2c0d02218c3253e4c22c98cfb82ff9a6',
	link:'https://www.facebook.com/photo.php?fbid=10152327617233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little ripper',
	pct:4.7,
	desc:'A slightly zesty lager',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1958010_10152327617388745_1928464789_n.jpg?oh=c374023d3d2444696514cd74aba2d53d&oe=57CAF198&__gda__=1474259193_6713d7f07df2c835425221c71a792165',
	link:'https://www.facebook.com/photo.php?fbid=10152327617388745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carlton mid',
	pct:3.5,
	desc:'Not quite as nice as a draught and with less alcohol',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1509668_10152327617473745_370150087_n.jpg?oh=16643ccbaeafde7f7ac642bd2b492ee0&oe=579D4C3D&__gda__=1472952889_78c1244cab68b85877b1965794d60129',
	link:'https://www.facebook.com/photo.php?fbid=10152327617473745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord nelson Anileation',
	pct:5.4,
	desc:'A beer crossed with a coffee',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10003507_10152327617578745_898249905_n.jpg?oh=9ef64d9da2105a168dd5c4d21ddcad7a&oe=57E45C50&__gda__=1473641024_e055a0ff7583a1376f88367cf39390ac',
	link:'https://www.facebook.com/photo.php?fbid=10152327617578745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Hop Thief',
	pct:null,
	desc:'Well hopped',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/1898087_10152327617588745_1756511326_n.jpg?oh=5adaf6e4187f9597275e7c3dc91f344a&oe=579C0FEB&__gda__=1472975821_7e9525b603429f76b5a412fd1a0bf9ae',
	link:'https://www.facebook.com/photo.php?fbid=10152327617588745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire The Constable',
	pct:null,
	desc:'Like a lovely lightly hopped IPA',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1239035_10152327617748745_242091326_n.jpg?oh=71577bad4f1a6af80fc67a5be10b5ab5&oe=57D98AB0&__gda__=1472888500_974874cae9c220c173b085b9c86619fd',
	link:'https://www.facebook.com/photo.php?fbid=10152327617748745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Australian brewery pale ale',
	pct:4.8,
	desc:'A slightly bitter pale ale',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/10341507_10152425240228745_8265904163887562785_n.jpg?oh=88c227a967fff53a82d73a7583bd0ea3&oe=57CD9B3F&__gda__=1473880302_47eec0e357af14651b798becfe40ba43',
	link:'https://www.facebook.com/photo.php?fbid=10152425240228745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Supa fly rye IPA',
	pct:5.8,
	desc:'A mild and interesting IPA',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/1506594_10152425240263745_7813835679026139769_n.jpg?oh=88af9748645de55c63439b14e9149bd4&oe=579A2873&__gda__=1472689878_a6caa2f5bb15ac19b82799a4a0a772af',
	link:'https://www.facebook.com/photo.php?fbid=10152425240263745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holland import',
	pct:4.8,
	desc:'A cheap lager',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10154146_10152425240233745_4967152943053850733_n.jpg?oh=83d22ea75db7610eeae12bd8dde68935&oe=57CA3460&__gda__=1474347612_b2988a2a82db7ab457576e045ebc52b2',
	link:'https://www.facebook.com/photo.php?fbid=10152425240233745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh brewing Co 28 Pale Ale',
	pct:4.8,
	desc:'A little bit too bitter for a pale ale',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10304714_10152425240513745_4080589260215688130_n.jpg?oh=0f4e9fd0be9dbfe0b57f9f625970e293&oe=57DE4B79&__gda__=1473837351_72299e4c3aa093849cf66b80b2c654b6',
	link:'https://www.facebook.com/photo.php?fbid=10152425240513745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Redtrolley ale',
	pct:5.8,
	desc:'A malty ale',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10314565_10152425240463745_1300237400658400717_n.jpg?oh=d95564b6e47bb7acd88193ee7a577145&oe=57D69858&__gda__=1473747111_27a34955ab2969cec45f899578039717',
	link:'https://www.facebook.com/photo.php?fbid=10152425240463745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Opera bar pale ale',
	pct:null,
	desc:'Flavourless',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10154926_10152425240573745_3819970704734320665_n.jpg?oh=ec45b540ea2de3140304a268eca1514d&oe=57DCF6CD&__gda__=1469802387_c2e473ab49de1cb3d6061d4a2ab066f8',
	link:'https://www.facebook.com/photo.php?fbid=10152425240573745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bingo wings',
	pct:5.0,
	desc:'A zesty wheat beer',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10155860_10152425240628745_5749004272951603123_n.jpg?oh=f94b6032b48b686d09410fb31e0ceb19&oe=579B5E92&__gda__=1474273127_ff726051f51b0fed7ad7ef30be70ec99',
	link:'https://www.facebook.com/photo.php?fbid=10152425240628745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dundee India Pale Ale',
	pct:6.3,
	desc:'Not a bad IPA',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10342507_10152425240783745_250399849084331418_n.jpg?oh=5c811995bccc756c099041594ea0d8ad&oe=57D4AE9A&__gda__=1472832273_84cfb5c53534c4dfc14f2684c2f7780e',
	link:'https://www.facebook.com/photo.php?fbid=10152425240783745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bee Sting',
	pct:5.0,
	desc:'A nice level of sweetness',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10168130_10152425240878745_5742462968298954155_n.jpg?oh=032fc7eaa95a4112534fa9c1585a3a11&oe=57E4B52A&__gda__=1473242257_899b36d3f687552035577a01e101eddd',
	link:'https://www.facebook.com/photo.php?fbid=10152425240878745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stefano’s pilsner',
	pct:4.7,
	desc:'A good pilsner but far from perfect',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-ash4/v/t1.0-0/p480x480/10301357_10152425240938745_5491397456344059410_n.jpg?oh=223932370db43d730281eaf487526f20&oe=57CFAA00&__gda__=1473690822_dfa0d9e089d4a9c70e1a43469bbe4900',
	link:'https://www.facebook.com/photo.php?fbid=10152425240938745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Stow Away IPA',
	pct:5.6,
	desc:'A fairly mild IPA',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/10330353_10152425241028745_6945284873150801200_n.jpg?oh=3345aff6bbd7af15f85c0376c47cafef&oe=57D962F4&__gda__=1469858666_09d18e3c0a36d149f9ac209c8df41c82',
	link:'https://www.facebook.com/photo.php?fbid=10152425241028745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Mango Beer',
	pct:4.5,
	desc:'Kind of tangy but can’t taste the mango',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10294225_10152425241078745_7192155480482123122_n.jpg?oh=6d48c20512d02fc5e4f9a24ca2934faa&oe=57D429A3&__gda__=1473224117_d915bda45a9d3eed8992ee6dc028242a',
	link:'https://www.facebook.com/photo.php?fbid=10152425241078745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s pearlers pale ale',
	pct:4.5,
	desc:'A very well balanced pale ale',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10459893_10152534289713745_6169618167007300448_n.jpg?oh=22e87d797143c0a7c342be0959618f73&oe=57DD13ED&__gda__=1472878185_6fef135e6281dba5dc21bd2d5a3b76de',
	link:'https://www.facebook.com/photo.php?fbid=10152534289713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos equis lager especial',
	pct:4.5,
	desc:'A very easy drinking lager. Good for a hot day',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10433892_10152534289243745_2400323308581320924_n.jpg?oh=d46268dc7aa6fe87c3e75eebc380b637&oe=57DDD40B&__gda__=1472845554_75536f09f2fa368ce5934273ce80ea3a',
	link:'https://www.facebook.com/photo.php?fbid=10152534289243745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale Drk',
	pct:4.5,
	desc:'Quite mild for a dark ale',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/10373527_10152534289553745_1636959852017465130_n.jpg?oh=8a5007192993ffa924fa215f802c0bcd&oe=57DCC396&__gda__=1469897187_340736ae24869d791ef5a81b372d4082',
	link:'https://www.facebook.com/photo.php?fbid=10152534289553745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Suntory MD',
	pct:5.0,
	desc:'A slightly strange lager',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10426644_10152534289858745_1229530734473771808_n.jpg?oh=236d86ad807ddee2c002c3307668cf1d&oe=57E1DB73&__gda__=1469967048_2f0e557ec141ad16e7231e65ab343aaa',
	link:'https://www.facebook.com/photo.php?fbid=10152534289858745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s bohemian pilsner',
	pct:5.0,
	desc:'Smooth with a nice finish',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10462530_10152534290193745_4497356221968859858_n.jpg?oh=bfa0fcd40a7a2b496f1f20ebdd8a54b5&oe=57E2302A&__gda__=1473073287_6908f4bb1f6f89c138f70a4a57930c0f',
	link:'https://www.facebook.com/photo.php?fbid=10152534290193745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redback beer',
	pct:4.7,
	desc:'Reminds me of some belgian beers but not nearly as good',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10488390_10152534290478745_4494982556291999381_n.jpg?oh=88c20222ee04bd94e2ebcb9050ee1e39&oe=57E703D8&__gda__=1473385308_7c949cff98f043354883105c53f9dc5b',
	link:'https://www.facebook.com/photo.php?fbid=10152534290478745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bintang',
	pct:null,
	desc:'Just like other easy drinking beers from the region',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10398080_10152534290653745_1374069162252942719_n.jpg?oh=d9b263c634fd6c04fec0cf65eafd546d&oe=57E4C427&__gda__=1472658225_a9a65b9a834b00db7d270052925b38d8',
	link:'https://www.facebook.com/photo.php?fbid=10152534290653745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cats shank kolsch',
	pct:4.6,
	desc:'Good all round',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10491226_10152534290818745_8400776013361245843_n.jpg?oh=d629c5352515d92f33506240216e8aae&oe=57DF181F&__gda__=1473540417_b5c481ad6319a9a9ff1dfc1452bed468',
	link:'https://www.facebook.com/photo.php?fbid=10152534290818745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura brewery honey wheat',
	pct:4.5,
	desc:'A fairly standard beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10393575_10152534291018745_4203149759533116955_n.jpg?oh=de214951fc3e4c73d23a5407b78195ef&oe=57D3AABF&__gda__=1474201930_05d35791699f82304cd27b66f567bc6b',
	link:'https://www.facebook.com/photo.php?fbid=10152534291018745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Roger\'s beer',
	pct:3.8,
	desc:'A lager with a bit of a tang',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10482595_10152534291158745_997791426307345458_n.jpg?oh=06230ffcf7430fd09c3c174be1758db0&oe=57E32277&__gda__=1472846715_aeb99c3e4a2796dca276793473717582',
	link:'https://www.facebook.com/photo.php?fbid=10152534291158745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'99 not out',
	pct:5.0,
	desc:'Not my kind of beer',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10441315_10152534300648745_3725590372701097829_n.jpg?oh=90bb46aa0513544c9438229f5f836b24&oe=57CDCE87&__gda__=1469791961_7ef3d0456fd022621cb9261ea1050557',
	link:'https://www.facebook.com/photo.php?fbid=10152534300648745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral sly fox',
	pct:4.7,
	desc:'A nice pale ale',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/10470597_10152534300708745_7685915012921086968_n.jpg?oh=49a72cefaf0ca4e13d231179a67428eb&oe=579C858A&__gda__=1473458869_7daff0be1c3cbc72f115695567b5bda6',
	link:'https://www.facebook.com/photo.php?fbid=10152534300708745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat steam ale',
	pct:4.5,
	desc:'Could go for a case is this',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10390115_10152534300713745_5030138459822932747_n.jpg?oh=c075a01a3391e4b5780aefba6774c604&oe=57C8DA1F&__gda__=1472892451_0e82c657dc28038ccbfc8bc8563b31e5',
	link:'https://www.facebook.com/photo.php?fbid=10152534300713745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s golden lager',
	pct:5.0,
	desc:'What you want on a summer afternoon',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10456077_10152534300758745_7454080799516274626_n.jpg?oh=400770aa6eb080881c2eaad3edd6dee4&oe=57DA890B&__gda__=1473824911_2be1b82b7c1512fd24af10fbb108529a',
	link:'https://www.facebook.com/photo.php?fbid=10152534300758745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf porter',
	pct:6.2,
	desc:'A little bit harsh for me',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10488349_10152534301008745_8348994823778686167_n.jpg?oh=d0a9885c1085ce9112b4263bcc888360&oe=57CBEBBE&__gda__=1473240800_008a2b05394bf6a60148b7a0881db61e',
	link:'https://www.facebook.com/photo.php?fbid=10152534301008745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms lager',
	pct:4.6,
	desc:'Wasn\'t expecting much',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10489819_10152534301208745_6098643900831599392_n.jpg?oh=7666192fb0a051ecce2b35f9e92737cf&oe=57D91EF6&__gda__=1472741234_3d2544be76fc53490333b8da70a8eef3',
	link:'https://www.facebook.com/photo.php?fbid=10152534301208745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'O.k beer Okocim',
	pct:5.6,
	desc:'It\'s ok',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10300636_10152534301428745_4348861457784870364_n.jpg?oh=3129b62ea026fb2f6c9cbba85208171b&oe=57DA4813&__gda__=1469898061_7db9f40fcea44cd80c83358e8a3a1a21',
	link:'https://www.facebook.com/photo.php?fbid=10152534301428745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood lager',
	pct:4.7,
	desc:'Such a letdown after the pale ale',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10408527_10152534301523745_6253327536631057603_n.jpg?oh=ef1608bdfec77ae71d33b96d249c8d7a&oe=57D78B7B&__gda__=1473114730_0d5975767e68a3c7c34aa88f0901df19',
	link:'https://www.facebook.com/photo.php?fbid=10152534301523745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogbolter',
	pct:5.2,
	desc:'A very nice malty flavour',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-0/p480x480/10409678_10152534301618745_7574186216754130853_n.jpg?oh=bbd563750352d7fab4431d540e5a51d9&oe=57CB4304&__gda__=1469686976_60b9d40aa7be5510f7328e343713c212',
	link:'https://www.facebook.com/photo.php?fbid=10152534301618745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saranac pumpkin ale',
	pct:5.1,
	desc:'Not that pumkiny',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10262192_10152534301808745_668535654445517750_n.jpg?oh=e9126b14fec9890902a24a4aa89628d8&oe=57E277C4&__gda__=1469793736_e9675fb22be34f2c3a5f6a68d124e1b8',
	link:'https://www.facebook.com/photo.php?fbid=10152534301808745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada kellerweis',
	pct:4.8,
	desc:'A true weisbeer. I don\'t like it',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10411228_10152534305933745_5912326499497887080_n.jpg?oh=3772359663c35be95a172fa8b3a66623&oe=579BCC0D&__gda__=1473946001_c4a2a3d9461988c7d2a58090ad4a3249',
	link:'https://www.facebook.com/photo.php?fbid=10152534305933745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hayward 5000',
	pct:8.0,
	desc:'Cheap and malty',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10260031_10152534306073745_6457168517247456226_n.jpg?oh=92905963d6c55f17ff817d79420b2e23&oe=57D4FB56&__gda__=1474248658_9719ab6c985d165c8cce276d55df5bea',
	link:'https://www.facebook.com/photo.php?fbid=10152534306073745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cass fresh',
	pct:4.5,
	desc:'A very refreshing lager',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10463933_10152534306048745_557216881289649027_n.jpg?oh=e40a6cade56effc1024557b6c390575e&oe=57E0D0AC&__gda__=1473116832_02082f339f66932a4aa0eb00fc391a38',
	link:'https://www.facebook.com/photo.php?fbid=10152534306048745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade bright ale',
	pct:null,
	desc:'An all round good beer',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10462761_10152534306183745_7006650351412791308_n.jpg?oh=f75f993427ec6eb1d01ee4a335f60dd0&oe=57E6AA75&__gda__=1472601417_8fc3d63b50f78e6f825682a6d984f5aa',
	link:'https://www.facebook.com/photo.php?fbid=10152534306183745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s ginger beer',
	pct:3.5,
	desc:'Very gingery but a little bit too fizzy',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10390539_10152534306248745_2125625178149511710_n.jpg?oh=71a706f85dceea40be853d9f09ea7034&oe=57DC6146&__gda__=1473928944_81b7f474a71c031bbbb23152fc80cc49',
	link:'https://www.facebook.com/photo.php?fbid=10152534306248745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pintail pale ale',
	pct:5.3,
	desc:'Kind of a Pale crossed with an IPA',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10454293_10152534306298745_7768963216409422880_n.jpg?oh=d995b2737f9963e19a822716f4d92e0b&oe=57D86E83&__gda__=1474776929_963d946750ce979f813d800a5152461b',
	link:'https://www.facebook.com/photo.php?fbid=10152534306298745&set=a.10151283325498745.519514.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked elf pale ale',
	pct:5.4,
	desc:'A little bit stouty',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10464035_10152534310338745_1731994487341714039_n.jpg?oh=f53749fbe4167edf319dbe9cbf4a7f91&oe=57D37272&__gda__=1474330768_ede040b8830a90ab096d7b186674ed0e',
	link:'https://www.facebook.com/photo.php?fbid=10152534310338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stiegl',
	pct:4.9,
	desc:'A nice light Austrian beer',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q87/p480x480/10492027_10152534310618745_1648790094042442309_n.jpg?oh=e14cc4b795b96f0caed84b9acb532d0e&oe=579C916F&__gda__=1472609422_f59a196670bc33f52c0a49cbdbc919f4',
	link:'https://www.facebook.com/photo.php?fbid=10152534310618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hofbrau dark',
	pct:5.5,
	desc:'Tastes really metallic. Might just have been the taps',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/q81/p480x480/10462761_10152534310558745_1029523877930371907_n.jpg?oh=07918cf12f16f3c64166c38db18f7882&oe=57E59021&__gda__=1473349257_d88af52410db65d3f1d3b98e82a734de',
	link:'https://www.facebook.com/photo.php?fbid=10152534310558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cantina',
	pct:4.6,
	desc:'A refreshing drink',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10475339_10152534310788745_8903624356648511173_n.jpg?oh=c68c0a100ae89ad434123680769810dc&oe=57CC5D83&__gda__=1473696007_335cb5c5fe853e0e397ee6192c5503ca',
	link:'https://www.facebook.com/photo.php?fbid=10152534310788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kozlak',
	pct:6.5,
	desc:'Malty',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10264926_10152534310928745_6694007916577152263_n.jpg?oh=43865add9cf3b4cf21541879846d890c&oe=57DFF860&__gda__=1473794396_32b240982ce7edb76359b18785ac155c',
	link:'https://www.facebook.com/photo.php?fbid=10152534310928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grain lager',
	pct:null,
	desc:'Like a really mild pale ale',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10448190_10152534314748745_6480384213227978387_n.jpg?oh=4a19bea1ebc72528affb5e97e9cec814&oe=57E06CA4&__gda__=1473671712_c0540612651d3495440ef7a919144bfb',
	link:'https://www.facebook.com/photo.php?fbid=10152534314748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Hog IPA',
	pct:5.8,
	desc:'A fairly plain IPA. A good choice if you’ve never had one before',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10411207_10153053839443745_1628460253644107712_n.jpg?oh=b2cb7bde356c3d2c7a2f8688d9c02af2&oe=57C7868D&__gda__=1472976928_c86ce24a3329d2816a199aebfa39eaa9',
	link:'https://www.facebook.com/photo.php?fbid=10153053839443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA blanc',
	pct:5.0,
	desc:'Not really sure what this beer is supposed to be. But it’s for olympians',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10410984_10153053839163745_7731660578628364886_n.jpg?oh=76edbf09ff162e962e842d3af5f1824c&oe=579BFA74&__gda__=1474422157_e08c7c721eb18989be96d9f971cd062e',
	link:'https://www.facebook.com/photo.php?fbid=10153053839163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redoak organic pale ale',
	pct:4.6,
	desc:'A tasty bev',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10349001_10153053839393745_466238167460813515_n.jpg?oh=dca2b12f75cc91261e81f7b74de1648a&oe=579D866C&__gda__=1470003800_6314d5a919466237356c9187976efc28',
	link:'https://www.facebook.com/photo.php?fbid=10153053839393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Nail Hoppy Summer Ale',
	pct:5.0,
	desc:'Nicely hoppy',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10945677_10153053839853745_7181309439289874351_n.jpg?oh=8e475a28b2c6eb6e46cc7cf4970ae638&oe=57E4113E&__gda__=1474755368_f00b879b12576011812e94951773640d',
	link:'https://www.facebook.com/photo.php?fbid=10153053839853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Astor Ale',
	pct:4.5,
	desc:'Pretty average',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10945640_10153053840143745_2674301376011904832_n.jpg?oh=7458219580dbd53ba7ab29b4bc961396&oe=57D50623&__gda__=1474576253_10a5399caeced6741c09d67ffa560832',
	link:'https://www.facebook.com/photo.php?fbid=10153053840143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour bright ale',
	pct:4.2,
	desc:'Not really worth getting again',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10696283_10153053840278745_1486083629761267822_n.jpg?oh=0922cf5621dcd0aaa8c500eacca5b78e&oe=57DFBBB3&__gda__=1473957298_90236e6431b10e063edae538b3f74a75',
	link:'https://www.facebook.com/photo.php?fbid=10153053840278745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso\'s Smokey Bishop',
	pct:4.7,
	desc:'Not one to rush, not too smokey either',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1601397_10153053840403745_751081432725627058_n.jpg?oh=4068aaad319d5e1151955dcd61327c65&oe=57D1484F&__gda__=1473043549_dabb06c5b89b8e3a8b77d337e3c1e02f',
	link:'https://www.facebook.com/photo.php?fbid=10153053840403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hooten',
	pct:4.6,
	desc:'Standard easy drinking lager',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1606916_10153053840543745_4428133737928836956_n.jpg?oh=829c7f3cda4b7cd693f42195d954ce21&oe=57C77655&__gda__=1469976574_2acc0d9488cf31d7ca542a1bf1fb7f0d',
	link:'https://www.facebook.com/photo.php?fbid=10153053840543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jenlain Ambre',
	pct:7.5,
	desc:'Was hoping for so much more than with this giant beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10955719_10153053840738745_4377010572225479820_n.jpg?oh=4e031749b8314c7d0db3c16ccfc5fad1&oe=57CBDFE6&__gda__=1473284024_2a98a217cdc5ae24896e1c3fc26ce28a',
	link:'https://www.facebook.com/photo.php?fbid=10153053840738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snaatch lager',
	pct:null,
	desc:'Probably just a rebrand of some other generic beer',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/1044239_10153053840773745_1317709767507240437_n.jpg?oh=7c88036d3df82fdfdd178daeacc9380f&oe=57E43FF4&__gda__=1474449868_4d03f7707fd83915f4e4fcb400e66fc6',
	link:'https://www.facebook.com/photo.php?fbid=10153053840773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mexicali',
	pct:4.6,
	desc:'Not giving me what expected',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/10955710_10153053851408745_4260669585339690789_n.jpg?oh=559f9c3cf1462310beed1c77082519b0&oe=57D3B863&__gda__=1473025179_a75494503dcc2801e589ece7315092a6',
	link:'https://www.facebook.com/photo.php?fbid=10153053851408745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Crown golden ale',
	pct:4.5,
	desc:'Not my favourite golden ale. Only slightly better than regular crown',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10942454_10153053851308745_7500988424962232002_n.jpg?oh=3458649e3b58a09a53eaf6ac7ebb6f1c&oe=57E6005E&__gda__=1474343841_3147ace5d347e56eefe9f8ec0ce86388',
	link:'https://www.facebook.com/photo.php?fbid=10153053851308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Knappstein',
	pct:5.6,
	desc:'A little bit harsh. Wouldn\'t buy again',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/q84/p480x480/10941856_10153053851368745_8703876646395783250_n.jpg?oh=2ebd0e75229210e08fffb7b3635c5a3f&oe=57D46406&__gda__=1473801755_0ae63daed5a80e1b597304e59b6d5c2e',
	link:'https://www.facebook.com/photo.php?fbid=10153053851368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Surry hills pils',
	pct:null,
	desc:'Doesn\'t really taste like a pils',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10428481_10153053851498745_4687849967086253708_n.jpg?oh=e88894eb8d1c6309c8436b1532e3cfff&oe=57D466C5&__gda__=1474798913_9b6ecc3601b70a64fe64876de052fb10',
	link:'https://www.facebook.com/photo.php?fbid=10153053851498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rio bravo',
	pct:4.0,
	desc:'A fairly tasteless session beer',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/q84/p480x480/1920513_10153053851643745_6150367775548290022_n.jpg?oh=b6d3d2a097a38d28bd99aa8921b2f549&oe=57DA52E6&__gda__=1469672933_2fffd67bc4dc282f2e7095e193587d32',
	link:'https://www.facebook.com/photo.php?fbid=10153053851643745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks American pale ale',
	pct:null,
	desc:'A good level of hops',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10954539_10153053851753745_8342401209754067322_n.jpg?oh=019c12d81f5c2e297da632b4547bfd1e&oe=57D5E25C&__gda__=1474565095_dd47c82d1b08179eca163228991abaab',
	link:'https://www.facebook.com/photo.php?fbid=10153053851753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s black beer',
	pct:5.2,
	desc:'Just a bad tasting beer',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/1979678_10153053851808745_6926811721676931401_n.jpg?oh=c02af01ad70eba56e8b1d8c649aeacc3&oe=57D89DB8&__gda__=1473406619_7a0db99ffeccfcaac139ac4d4c8a8bc0',
	link:'https://www.facebook.com/photo.php?fbid=10153053851808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cthulhu',
	pct:null,
	desc:'A little bit too bitter',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10956041_10153053851963745_7126060138864736213_n.jpg?oh=ce139dc675a9c1502cb7ae602ea40f4f&oe=57CEC7D9&__gda__=1473029487_a45b61f14861b9ab66ac04ee1ac763ce',
	link:'https://www.facebook.com/photo.php?fbid=10153053851963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone & wood jasper',
	pct:null,
	desc:'Rich but not right',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10955201_10153053852088745_6663961286785907822_n.jpg?oh=462673576bcd8cc591b01195ba1e9adc&oe=57E1E2DF&__gda__=1469927369_918904695be8a64afc90c03d1563c4fc',
	link:'https://www.facebook.com/photo.php?fbid=10153053852088745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat summer ale',
	pct:4.7,
	desc:'A great beer for a nice day',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/16797_10153053852143745_3087580206529630401_n.jpg?oh=d2e2465ed98fa6a173fbb7f883f9701c&oe=57E805D1&__gda__=1472692046_745a0d448a411e62420134895ab55623',
	link:'https://www.facebook.com/photo.php?fbid=10153053852143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pearl river beer',
	pct:5.3,
	desc:'So so bland',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10945514_10153053852213745_6703947153036432278_n.jpg?oh=75eabdf145fa2c67eb0d9895685222a9&oe=579C454D&__gda__=1474336952_2140192de26d2b5b485caa53ff8a2191',
	link:'https://www.facebook.com/photo.php?fbid=10153053852213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kaiserdom',
	pct:4.5,
	desc:'Just a standard cheap german Lager. But such an awesome can',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p320x320/10931372_10153055725393745_7415839926658912556_n.jpg?oh=0d05a97dc046e7b41078e2e0eaf026a6&oe=57DB912B&__gda__=1474047700_bd0edcd6ca5cee61a8ef7633e853dfcd',
	link:'https://www.facebook.com/photo.php?fbid=10153055725393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN 5.0',
	pct:5.0,
	desc:'Not as bad as I expected from the price',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/1560725_10153055725613745_6302115246934015090_n.jpg?oh=402a72091c6108920a03e32c2a171f54&oe=579A0C2F&__gda__=1474144932_2be05bc23208dd7cbfa896703863988a',
	link:'https://www.facebook.com/photo.php?fbid=10153055725613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade IPA',
	pct:null,
	desc:'A nice balanced IPA',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10882109_10153055725553745_9030008793027639075_n.jpg?oh=4cdf9c93fa0821e75b5aa5346cd43b98&oe=57D655CC&__gda__=1474725934_621000dec0e5ae99b9ed8552424f8d3f',
	link:'https://www.facebook.com/photo.php?fbid=10153055725553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six string Hefeweizen',
	pct:null,
	desc:'One of the nicer wheat bears I\'ve tasted',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/10957577_10153055725708745_5392401214475659109_n.jpg?oh=9874c6ee1690bfaea599e434da399a88&oe=57CF5903&__gda__=1472757242_8379dcb492ce53ed3a529e0671f23908',
	link:'https://www.facebook.com/photo.php?fbid=10153055725708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hook norton Twelve days',
	pct:5.5,
	desc:'A little bit nutty',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1924574_10153055725888745_6113742952542006972_n.jpg?oh=ea5ee3af5f2e35cc1948157ec3acb2c8&oe=579AF8B3&__gda__=1474744226_9d017af13c356d23d5a49878d79027c9',
	link:'https://www.facebook.com/photo.php?fbid=10153055725888745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Edge angry pirate',
	pct:6.8,
	desc:'Rum flavour in beer is no good for anybody',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/t31.0-0/p480x480/10911454_10153055725923745_4540481012810101778_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055725923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA methode',
	pct:5.0,
	desc:'Tastes way too metallic',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q86/p480x480/10464194_10153055726008745_3155144376465393693_n.jpg?oh=a577f83106fe00ff2e8df8c29131ea9d&oe=57CB5582&__gda__=1473646947_8d23b35fcc1c022049174637ce6c749b',
	link:'https://www.facebook.com/photo.php?fbid=10153055726008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road India Saison',
	pct:7.5,
	desc:'Too much of a white beer flavour for me',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/t31.0-0/p480x480/10955774_10153055726098745_2456265276299415480_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay The ducks',
	pct:4.2,
	desc:'Not at all a pale ale. Matilda bay lets me down once again',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/t31.0-0/p480x480/1492370_10153055726208745_5026667878902117342_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055726208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dr Tims',
	pct:4.5,
	desc:'Could do with a bit more punch',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1619547_10153055749173745_8508511661850848187_n.jpg?oh=9d6dc132310f82e7667f41d664d6bfc1&oe=57E383AA&__gda__=1472999590_7d6adae15d969cf35f4b789ad54b8266',
	link:'https://www.facebook.com/photo.php?fbid=10153055749173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden Age The Celt Experience',
	pct:4.2,
	desc:'Not really much of an experience',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/10947196_10153055749403745_4812053214327954894_n.jpg?oh=b5748f3e15f7ea47aed3b39f972b5cf5&oe=57E37819&__gda__=1472839718_f3515108642f0854f12c0010c3f95b69',
	link:'https://www.facebook.com/photo.php?fbid=10153055749403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bling Bling Imperial IPA',
	pct:8.5,
	desc:'Lots of flavour, couldn’t have many',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10806453_10153055749418745_7326451586089018048_n.jpg?oh=0093fcbd2252de2d37e2451142ad1095&oe=57DD5A71&__gda__=1473150172_831279fd9c606f100b2163883bede6af',
	link:'https://www.facebook.com/photo.php?fbid=10153055749418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bandit Killer Sprocket',
	pct:4.8,
	desc:'Way too much of a smokey flavour',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10711_10153055749528745_1705580902509688757_n.jpg?oh=c8cab496b19fd955f2270de6bc4dde84&oe=57DEC8A7&__gda__=1469957774_b0cc89e4b576c93bbfdd688491355bca',
	link:'https://www.facebook.com/photo.php?fbid=10153055749528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monkey’s Fist',
	pct:4.9,
	desc:'Not sure why these are always reduced to clear at Dan Murpheys',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t31.0-0/p480x480/10257018_10153055749583745_4285986054653809975_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749583745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Punch & Judy’s Ale',
	pct:3.9,
	desc:'Not much flavour or alcohol content',
	score:null,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10922862_10153055749673745_210519337780800601_n.jpg?oh=195b8b1551fe30b9b73d6f7ccf799754&oe=57DF5ABC&__gda__=1469761968_1feff8c35f1667fbd22866374ae8edc2',
	link:'https://www.facebook.com/photo.php?fbid=10153055749673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hassle Hop',
	pct:5.5,
	desc:'A pale with a bit of a strong ale flavour',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/t31.0-0/p480x480/10942330_10153055749753745_4423283376777303913_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The point pale ale',
	pct:4.2,
	desc:'Not my favourite pale ale',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/t31.0-0/p480x480/10955559_10153055749933745_9217798578543309687_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055749933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Tom Chocolate',
	pct:6.0,
	desc:'A slight hint of chocolate',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-frc1/v/t1.0-0/p480x480/10891448_10153055770573745_4712183690457686836_n.jpg?oh=3aa13732f6f86c8cd544934f12ef4b55&oe=57E11263&__gda__=1474589646_42ad50241ed4322ee9ed6b242789319f',
	link:'https://www.facebook.com/photo.php?fbid=10153055770573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'John Boston Golden ale',
	pct:4.2,
	desc:'I do like an easy drinking golden ale',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10690124_10153055770718745_5622367894684528293_n.jpg?oh=18e6dedd325d505683bc3afd9451b438&oe=57D582E0&__gda__=1473522774_80c3cefe6a78a50b6ff687c2654c034d',
	link:'https://www.facebook.com/photo.php?fbid=10153055770718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Selezione 19',
	pct:5.0,
	desc:'Goes well with a nice Italian meal',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10958542_10153055770443745_1738110291091509447_n.jpg?oh=efe8f4e9cb642489b0b0d654f6533ced&oe=579DEDF8&__gda__=1473814851_f781db93175558f47affb45fc00a730e',
	link:'https://www.facebook.com/photo.php?fbid=10153055770443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hipster ale',
	pct:5.5,
	desc:'Just not really hitting the spot tonight',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10953214_10153055770813745_8713996460827737605_n.jpg?oh=572aa129164136b197c796e4fde30f7d&oe=57E232D1&__gda__=1473053802_ec320f02abdc6111d94b55fed4cf1005',
	link:'https://www.facebook.com/photo.php?fbid=10153055770813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Trumer pils',
	pct:4.9,
	desc:'An ok pilsner',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/10953955_10153055770883745_7624310153191779880_n.jpg?oh=fa195ad2a9dd431b97a2ba6c9d3a0604&oe=57DAD65C&__gda__=1473639552_3f891cd4b4b7b735313e1ac467d3337d',
	link:'https://www.facebook.com/photo.php?fbid=10153055770883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers 62 pilsner',
	pct:5.0,
	desc:'Coopers seem to have a huge range of random beers, sadly the quality varies quite a bit',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10942756_10153055770968745_4182424304505127141_n.jpg?oh=166d71185bd9885785d3143f44a70eb2&oe=57DB9D0B&__gda__=1473984522_d3c905e8287a4530a8effc362f22b1d3',
	link:'https://www.facebook.com/photo.php?fbid=10153055770968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders All Day IPA',
	pct:4.7,
	desc:'Could literally drink this all day. Another from the great selection at Parsons',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/10955163_10153055771108745_5413724920939008977_n.jpg?oh=ba1e087366b053c6c4c18e3ce68fb9ff&oe=57D02216&__gda__=1473384711_e02f42a4853520db383525a9fcd6f68d',
	link:'https://www.facebook.com/photo.php?fbid=10153055771108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Torpedo extra IPA',
	pct:7.2,
	desc:'So much flavour, so much booze. What’s not to love',
	score:9,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10686865_10153055771228745_3010927456136598269_n.jpg?oh=240b6f7569450d54190334a8df658557&oe=57D2838E&__gda__=1474475116_64194e83e166cbeb24ccec2d35f07f6f',
	link:'https://www.facebook.com/photo.php?fbid=10153055771228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Henninger',
	pct:4.8,
	desc:'Very bland',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10955215_10153055772023745_950968910298192775_n.jpg?oh=91f4a5315c92f7b90da25ca76be7e3e5&oe=57CEA858&__gda__=1473641044_fe722e68529261413850b7f8bde3a6cb',
	link:'https://www.facebook.com/photo.php?fbid=10153055772023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian blue',
	pct:4.5,
	desc:'Ok for a wheat beer',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1920181_10153055771283745_6859710748033343904_n.jpg?oh=63ec5a614a1769663edea5e084078a09&oe=57D1B428&__gda__=1472832464_f4175add2f1289d1cb086268bc77b641',
	link:'https://www.facebook.com/photo.php?fbid=10153055771283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kosciusko Pale ale',
	pct:4.5,
	desc:'Never heard of this, was hoping for something better',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-0/p480x480/10492453_10153055771438745_3655493043304213188_n.jpg?oh=e3165b094c602ff257debba58b441d57&oe=57D607A6&__gda__=1473605530_e7d71fe063439627eea2e45332e79b27',
	link:'https://www.facebook.com/photo.php?fbid=10153055771438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Blond',
	pct:6.5,
	desc:'Not as good or as strong as the Quadrupel',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10491123_10153055791238745_951076558234575000_n.jpg?oh=d433a1e6cb2819a66aca2af041c1388f&oe=57DA62FF&__gda__=1474514887_7bc6cd99a9cf105ba611c431db86a79b',
	link:'https://www.facebook.com/photo.php?fbid=10153055791238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Halifter Stout',
	pct:4.9,
	desc:'A fairly mild stout',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10945766_10153055791503745_8417455299148358450_n.jpg?oh=52bfb026ddc89f1e11ad04c96f340dbc&oe=57DDEBC7&__gda__=1470000252_d396b936e33a5a66d8e0c6a1f5d0c955',
	link:'https://www.facebook.com/photo.php?fbid=10153055791503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Menabrea 1846',
	pct:4.8,
	desc:'Slightly above average Italian beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10945561_10153055791438745_6706555972975228314_n.jpg?oh=fff99bc37dfa822de32a01c385b517a1&oe=57C678B3&__gda__=1474194440_e477bdac5f416ec618bf30861d077d4a',
	link:'https://www.facebook.com/photo.php?fbid=10153055791438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Doppelbock Winter ale',
	pct:6.0,
	desc:'I need to sample some more doppelbocks',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/1798753_10153055791623745_8735243396794406846_n.jpg?oh=173f7374c7bd715784f70cc2221fe577&oe=57D127C0&__gda__=1472946795_f2bc0cc5e677499e8d7bf86824d7ae38',
	link:'https://www.facebook.com/photo.php?fbid=10153055791623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Old Hooky',
	pct:4.6,
	desc:'There are just so many bad english beers',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10806242_10153055791708745_8168997172530304317_n.jpg?oh=4315edbce42fba8beeee5b267058aa2e&oe=57C9689D&__gda__=1473595161_d902ee03110a6ed12fc8d487135cb1f2',
	link:'https://www.facebook.com/photo.php?fbid=10153055791708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mildura Brewery Stefano’s',
	pct:5.0,
	desc:'A middle of the road kind of beer',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10945738_10153055791798745_8584137532392564439_n.jpg?oh=581def6fa97463ab76957df7846934eb&oe=57E41242&__gda__=1473945789_95c72cc654ef11140e1c76384888a147',
	link:'https://www.facebook.com/photo.php?fbid=10153055791798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cascade Stout',
	pct:5.8,
	desc:'Not a very nice stout',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10501746_10153055791938745_8029415469669135648_n.jpg?oh=077013d8e59988bc2cc6f30ff216930c&oe=57CCF8C9&__gda__=1469806396_e6c35deeeb393eeb43c95bd41b57e2b3',
	link:'https://www.facebook.com/photo.php?fbid=10153055791938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mallee Bull',
	pct:5.6,
	desc:'Enjoyed this more than I expected',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10929144_10153055792013745_3943691173139596791_n.jpg?oh=2494004a3f070072e615ffb82700d5ba&oe=57E63A7C&__gda__=1472698749_666b990f1475316aa5cb89558b59ed44',
	link:'https://www.facebook.com/photo.php?fbid=10153055792013745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Floreffe Prima Melior',
	pct:8.0,
	desc:'Just an awful flavour combination',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-0/p480x480/10940507_10153055792123745_6951460612562111481_n.jpg?oh=9241630c564bb2ee884119d3bcb4aa5f&oe=57CCF090&__gda__=1474003476_7f07ed4243a90abf47f6803ba8b306fc',
	link:'https://www.facebook.com/photo.php?fbid=10153055792123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oettinger Pils',
	pct:4.7,
	desc:'This beer has never been good, but at least it has always been cheap',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10952861_10153055792233745_5985463992710631340_n.jpg?oh=0b5efdd54b6bee253fb3c5461c57e08a&oe=57CF8445&__gda__=1473402042_810c0a47e9031ccdf6e568f52d94ed3c',
	link:'https://www.facebook.com/photo.php?fbid=10153055792233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La Trappe Quadrupel',
	pct:10,
	desc:'Such a lovely beer all round. Makes me want to go back to Belgium',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t31.0-0/p480x480/10838255_10153055792378745_3160802427352478420_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153055792378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms captain\'s IPA',
	pct:5.8,
	desc:'A very mild IPA. Easy drinking but not what I want from an IPA',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10995650_10153118627158745_3441161072765169256_n.jpg?oh=6c4c37b8a6fc3f68cb0a9a7208dbe05d&oe=57E83696&__gda__=1473120800_b4939277838b0d2854c59519d4d664cb',
	link:'https://www.facebook.com/photo.php?fbid=10153118627158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mythos',
	pct:4.7,
	desc:'I don\'t remember ever seeing another type of beer in Greece',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/t31.0-0/p480x480/10865944_10153118627183745_3452701286868348707_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118627183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Byron bay pale lager',
	pct:4.8,
	desc:'Plain and boring',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/17811_10153118627228745_8196338202734334456_n.jpg?oh=d7fc5234c9fd80ad571f2208c6481dad&oe=57C6B199&__gda__=1474186062_a52475258c164a4d27a15e8b980f2d64',
	link:'https://www.facebook.com/photo.php?fbid=10153118627228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Great northern lager',
	pct:4.2,
	desc:'A little bit metallic. Not sure why this was recommended to me',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11025812_10153118627363745_3879639136439752978_n.jpg?oh=957eaedb09cf428e955e2be1d241775d&oe=57D65D3D&__gda__=1474664927_e266ac06a55c19ce3af99e565d56f936',
	link:'https://www.facebook.com/photo.php?fbid=10153118627363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sirling castle',
	pct:6.5,
	desc:'Strong on alcohol, mild on flavour. Perfect for getting drunk quickly',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11024597_10153118627558745_640038091949927094_n.jpg?oh=62f69c4fc76d34ec1ae10e338734fc22&oe=57C73B9A&__gda__=1473540799_c99bc4c7080590e629d00c3977c89e5d',
	link:'https://www.facebook.com/photo.php?fbid=10153118627558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Red Trolley Ale',
	pct:5.8,
	desc:'Not really my kind of beer',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11035307_10153118666928745_8142017152048186664_n.jpg?oh=44679af1e559a783bf85d828520e3d1c&oe=57CB7AE3&__gda__=1474344381_c34b5d289eda3a638c7998319b1f0783',
	link:'https://www.facebook.com/photo.php?fbid=10153118666928745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bolt',
	pct:4.6,
	desc:'Very easy drinking. Very close to water',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11037326_10153118666923745_5159572374416519952_n.jpg?oh=687896e2c0d452c8d8c26bc4cdff6da2&oe=57E43DD5&__gda__=1473535883_98180bd4b96db5780ec29e77491c2e14',
	link:'https://www.facebook.com/photo.php?fbid=10153118666923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Copycat A.I.P.A',
	pct:6.8,
	desc:'A nice floral aroma but a little bit harsh',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/1797322_10153118666983745_5915201915827958878_n.jpg?oh=bb2d4c0928881b21745ef66221cb50ab&oe=57D549BD&__gda__=1474526934_806dc4c12570f5381edf50980a4fe010',
	link:'https://www.facebook.com/photo.php?fbid=10153118666983745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Black Death Beer',
	pct:5.8,
	desc:'Like a crappy lager but black',
	score:null,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10437609_10153118667103745_274358326202189719_n.jpg?oh=322333c8bab3d5bdafe93b49182e2200&oe=57D198D0&__gda__=1474543592_c4665209a97bb05babdf5fce957d56ff',
	link:'https://www.facebook.com/photo.php?fbid=10153118667103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant IPA',
	pct:5.4,
	desc:'Mild but well rounded',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11036670_10153118667448745_2676066066178360898_n.jpg?oh=1262f0491fb19985829d302def1e1e0a&oe=57D8B806&__gda__=1473074931_17e9b8299cb973fdb4e71145aa1c10b9',
	link:'https://www.facebook.com/photo.php?fbid=10153118667448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s summer ale',
	pct:5.0,
	desc:'Surprisingly this is a ginger beer. And while I do like ginger beers this isn’t one of the better ones',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10358559_10153118667468745_6994245863309298252_n.jpg?oh=8ffa5761ac3fe0f95cc013950d4d8367&oe=57E02C3C&__gda__=1473594313_7b7653530fb714c6fc069daf6064e0d5',
	link:'https://www.facebook.com/photo.php?fbid=10153118667468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vale IPA',
	pct:5.5,
	desc:'Always slightly disappointed by the vale range not being as good as vale ale',
	score:null,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10557224_10153118667568745_7444873751997956052_n.jpg?oh=b6af37b0086ffe9f0b774e411aa3d75a&oe=579AB1B3&__gda__=1473838639_d2bc57d15a2cf642a8e66fefa571b6ab',
	link:'https://www.facebook.com/photo.php?fbid=10153118667568745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wicked Elf WitBier',
	pct:5.0,
	desc:'Fairly mild for a wheat beer',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10292286_10153118667738745_8355190794765320413_n.jpg?oh=47e9474d5730ec65c2a03ed564fbafec&oe=57DE0C8C&__gda__=1472721523_e3da2723a8c5c47b535e9ce8ce0efd48',
	link:'https://www.facebook.com/photo.php?fbid=10153118667738745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lander Brau',
	pct:4.7,
	desc:'Seems like it\'s a cheap flavourless wheat beer but since I don\'t like wheat beer I\'m ok with that',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11000604_10153118667938745_2598821758352900098_n.jpg?oh=40de0bd1bd607671d8d42ea3783bc00a&oe=57E3C6E9&__gda__=1474204956_a07583d9b52f3b51b53419af7d1c889b',
	link:'https://www.facebook.com/photo.php?fbid=10153118667938745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'TUN Bitter',
	pct:4.0,
	desc:'Tastes the same as the green one but not as strong',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/10450836_10153118667958745_9176447944373645082_n.jpg?oh=a51dbc1823fd2f9dd467fc36751c8027&oe=57DB7CFF&__gda__=1473142782_7db03daa0af96b2277988b13ed6629ac',
	link:'https://www.facebook.com/photo.php?fbid=10153118667958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers Clear',
	pct:4.5,
	desc:'Tastes like water',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10151181_10153118668273745_149724940762965990_n.jpg?oh=96f695a9eecc99e5ea384ee701b3d5a5&oe=57C78319&__gda__=1473288850_cd738e3f398f05adb4a1331f008d088c',
	link:'https://www.facebook.com/photo.php?fbid=10153118668273745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Johannes',
	pct:6.5,
	desc:'Slightly too sweet but ok',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10471235_10153118668688745_4443326077354329396_n.jpg?oh=8ee61f08188e50695fb57ef5889d781f&oe=57D3C884&__gda__=1474122642_197831a5c0e5460b4f7ba9c95d4bbfcb',
	link:'https://www.facebook.com/photo.php?fbid=10153118668688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Amber pils',
	pct:5.0,
	desc:'Not exciting',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1902891_10153118668708745_4563543533450469126_n.jpg?oh=7c5ad0c80ae4afacbe48382694ea2342&oe=57E70C57&__gda__=1474738310_1ea82fb49a7972f0c44b30b644f3442a',
	link:'https://www.facebook.com/photo.php?fbid=10153118668708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ballast Point Big Eye',
	pct:7,
	desc:'A nice tasty IPA. I like the lack of a bitter aftertaste',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10389593_10153118668748745_5666950047802645873_n.jpg?oh=f68e99df911771b2e0be7f5e0ea6bcdc&oe=57CB4363&__gda__=1473547932_98dd0f7c6132a2fc5d60974e96a7aea5',
	link:'https://www.facebook.com/photo.php?fbid=10153118668748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad long trip Saison',
	pct:6.6,
	desc:'Very tasty, but the fizz is a bit strange. Sits in such a strange middle ground but I want more',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10986616_10153118669198745_2610490748271486451_n.jpg?oh=5e9c27d4b73fe50c9485c69ce87d1341&oe=5799CEC3&__gda__=1474513272_8f1e87fa61a2d1072f880df9b8415605',
	link:'https://www.facebook.com/photo.php?fbid=10153118669198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Perla Midowa',
	pct:6.0,
	desc:'A nice hint of honey. Sweeter than most beers',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11018324_10153118669153745_6177767464748408498_n.jpg?oh=ef5f82365a905dc8d46c904566658ec3&oe=57C70742&__gda__=1473268128_11b86ec1fbbcf9aeb73e9d43547a388a',
	link:'https://www.facebook.com/photo.php?fbid=10153118669153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Storm Super Dry Beer',
	pct:5.0,
	desc:'Your regular plain cheap lager',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11038700_10153118669473745_5502916115063582938_n.jpg?oh=769ad274851c82f871e8874967a9c0fd&oe=57D9C24B&__gda__=1472969480_27086efdc89360d51019a1da7a2fc6a4',
	link:'https://www.facebook.com/photo.php?fbid=10153118669473745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden lion beer',
	pct:5.6,
	desc:'A nicely rounded flavour',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11021223_10153118669773745_8881697342781962806_n.jpg?oh=0d7033ce6fccd60032a0d997e0cea4ba&oe=579AE46E&__gda__=1472695451_45d12fac7a3ed10e4a50c0fb55efd8ef',
	link:'https://www.facebook.com/photo.php?fbid=10153118669773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love Dale Lager',
	pct:4.7,
	desc:'Quite a smooth lager. Or could just be that it’s the first beer on Friday',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/t31.0-0/p480x480/10687355_10153118669793745_4229208713620347909_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain Pilsner',
	pct:4.5,
	desc:'Pretty plain, time to move onto something stronger today',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/t31.0-0/p480x480/10845763_10153118669868745_3771962632087142041_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153118669868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Barossa Valley Milk Stout',
	pct:7.0,
	desc:'Was expecting this to taste like milk but it’s just a creamy stout',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11034204_10153118792398745_930727431364883158_n.jpg?oh=c2c337662b9ed3b74539d9831e7441c8&oe=57DCBACA&__gda__=1472963208_10905cb4245d81fffd8bf066864d863e',
	link:'https://www.facebook.com/photo.php?fbid=10153118792398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Lychee Beer',
	pct:4.5,
	desc:'Too sweet for me, just doesn’t take like a beer anymore',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10311768_10153118792388745_7466271610444299802_n.jpg?oh=31b011ec7df970c826e52fb97241d2d2&oe=579DB0E1&__gda__=1473898175_203108bf1befb5d470ab184db7a69d06',
	link:'https://www.facebook.com/photo.php?fbid=10153118792388745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Past Blue Ribbon',
	pct:5.0,
	desc:'Not sure why this gets branded as a hipster beer. It’s just a bland lager',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/1926933_10153118792373745_471015037580664056_n.jpg?oh=f4241d09ae1b7465a7d455dd18e6368c&oe=57CA38BB&__gda__=1473825157_68a20c758543e72935a9b3ba19d9ec5b',
	link:'https://www.facebook.com/photo.php?fbid=10153118792373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s Chilli Beer',
	pct:4.2,
	desc:'Has a really strong hit of chilli but I like that. You get the coolness of a beer mixed with the heat of chilli',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11034166_10153118792613745_1685865302807726235_n.jpg?oh=bff86be1efc39f626114b52798ba828f&oe=57D3007F&__gda__=1473784714_7c20772ca1511377e426666e9dd9b4a6',
	link:'https://www.facebook.com/photo.php?fbid=10153118792613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 pines Pale ale',
	pct:5.1,
	desc:'A well balanced pale ale',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11017023_10153118792808745_2253924034975828582_n.jpg?oh=5262ff73fc1f045bb6e943e96860cc45&oe=57CE4FC8&__gda__=1473360938_e20bce8ad0f47cb85a803f99b03bd155',
	link:'https://www.facebook.com/photo.php?fbid=10153118792808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lick Pier Ginger Beer',
	pct:4.0,
	desc:'A little bit too fizzy but nice otherwise',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10988914_10153118793028745_6211347906406183583_n.jpg?oh=6a37b297180e6c4c9d1340d1cb9d416d&oe=57D87CC4&__gda__=1474478886_41a7908cd9f44ea323d488e1b915cfa4',
	link:'https://www.facebook.com/photo.php?fbid=10153118793028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Samuel Adams Boston Lager',
	pct:4.7,
	desc:'A classic. Need to find this on tap somewhere',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11025711_10153118793008745_157967989601698522_n.jpg?oh=6293e1284686b4c0855636bc3d57e2b4&oe=57E14D14&__gda__=1474426966_e8a4430292113d63a14d0a7580967201',
	link:'https://www.facebook.com/photo.php?fbid=10153118793008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines Kolsch',
	pct:4.6,
	desc:'Makes me want to try more kolsch beer',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/10452382_10153118793263745_8541367164944833885_n.jpg?oh=802857a1424d6856ed30ea055c3e6d47&oe=57CA5302&__gda__=1472668638_c9f706be2e32d2c5a9879bee7e0c9b65',
	link:'https://www.facebook.com/photo.php?fbid=10153118793263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit Pale Ale',
	pct:4.9,
	desc:'I’m a fan',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11024705_10153118793433745_1941343873752633305_n.jpg?oh=36561a0d702389780fef21245cf218c9&oe=57E2CEE3&__gda__=1473092634_8f5a22b30a4b82e65b4d131f4235212b',
	link:'https://www.facebook.com/photo.php?fbid=10153118793433745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'BROK export',
	pct:5.2,
	desc:'Too malty. One of the worse polish beers I’ve had',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11150982_10153225352773745_2645273460851977484_n.jpg?oh=e029e29711374cbe955ff6393ce7a6fc&oe=57DAE79F&__gda__=1473413569_4a360fbe10359bb9d93ec075941ac848',
	link:'https://www.facebook.com/photo.php?fbid=10153225352773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cavalier courage',
	pct:4.5,
	desc:'A bit plain for me but very good for what it is',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11077960_10153225352783745_1418047245676555322_n.jpg?oh=ef21fa73ff6b992571e980acdf02c0cd&oe=57E76C56&__gda__=1473055156_76f475ac8846003c1509e065000be01a',
	link:'https://www.facebook.com/photo.php?fbid=10153225352783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dutch windmill',
	pct:4.6,
	desc:'Standard lager',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11140753_10153225352778745_8798373029749618991_n.jpg?oh=b69e68f8537a20b8fcfe75ab438c41f1&oe=57E7F45A&__gda__=1473531298_3ca8a51ffd39a29bfc97bcb646b66ff5',
	link:'https://www.facebook.com/photo.php?fbid=10153225352778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pony fish unlikely lager',
	pct:4.7,
	desc:'Lager with something extra but nothing special',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11096283_10153225353503745_2273426521907233162_n.jpg?oh=8b0b80bd71577e6ceee4ae92d14f78d2&oe=57D6EB78&__gda__=1473661390_0494c849f24a7ce4a14639c6abdb15f0',
	link:'https://www.facebook.com/photo.php?fbid=10153225353503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures IPA',
	pct:6.4,
	desc:'Little creatures is like a baseline for a type of drink',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/17298_10153225353618745_5211021832992114282_n.jpg?oh=d5a7052b8f9b1a5fca1ee907efc69378&oe=57D11104&__gda__=1469811667_d0de0b5d2f6c9576960e7d42a962d97d',
	link:'https://www.facebook.com/photo.php?fbid=10153225353618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sainte etienne',
	pct:4.8,
	desc:'Average Aldi lager',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10410488_10153225353563745_8285613091047049802_n.jpg?oh=ee8c6df9009d43b22daaefa051a49f32&oe=57E8079E&__gda__=1472997416_876110abc110b99670d3ad70601fa468',
	link:'https://www.facebook.com/photo.php?fbid=10153225353563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'My Antonia',
	pct:7.5,
	desc:'Surprisingly this tastes better after I brushed my teeth',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/1473040_10153225353703745_3939681785801200434_n.jpg?oh=a3a99eaef01b91c4b8b80a3283d6c132&oe=57CE80B3&__gda__=1473828376_181611f582262e0a5c37e10bb348eb9c',
	link:'https://www.facebook.com/photo.php?fbid=10153225353703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pan head Pilsner',
	pct:5.2,
	desc:'A little bit metallic. Not my favourite',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/17127_10153225353823745_2917311890568592350_n.jpg?oh=debcedd9d23cf10c5fe46c38c719b66a&oe=57E35E9B&__gda__=1474254259_69a0245c9e45c1cd074513903961acab',
	link:'https://www.facebook.com/photo.php?fbid=10153225353823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young\'s double chocolate stout',
	pct:5.2,
	desc:'A nice chocolate flavour',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11146531_10153225353988745_3855298969416355875_n.jpg?oh=598cbd082cc0f2a5be156b8ee72327ea&oe=57E75243&__gda__=1474189341_795c9e53d3364e32b0d91e2d450aa6d4',
	link:'https://www.facebook.com/photo.php?fbid=10153225353988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point resin',
	pct:9.1,
	desc:'Very bitter but without any sort of floral hop taste to balance it out',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11053047_10153225354168745_5695677735113264681_n.jpg?oh=e466a04728e48f39c43c35fe665cd778&oe=57CE0C0B&__gda__=1472899925_4fb487bb71ba2b0bbdbd3be112cc3114',
	link:'https://www.facebook.com/photo.php?fbid=10153225354168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Bengali',
	pct:6.5,
	desc:'Lots of subtle character',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11148760_10153225354163745_4060898664025313434_n.jpg?oh=5808be552ca69dc4d493f7b4688d52ea&oe=57CFF2F0&__gda__=1474346419_bfc58acf189a5d33367670003bb2dfe8',
	link:'https://www.facebook.com/photo.php?fbid=10153225354163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon dog watermelon weizen',
	pct:5.3,
	desc:'Really subtle watermelon taste. Takes a while to get used to',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11136648_10153225354308745_6098979194311010987_n.jpg?oh=ddd12e88da624f60264a8bd37921e666&oe=57CA2BF2&__gda__=1473430791_f06a72fbc209a8b7cc2c48cfc488c9ff',
	link:'https://www.facebook.com/photo.php?fbid=10153225354308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade rebel ale',
	pct:4.7,
	desc:'A little stronger than a lager',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10494628_10153225354518745_289668608818495871_n.jpg?oh=1a6a7ace5d2d0e6cc67eec8ecc8a6b1a&oe=57E540EF&__gda__=1473034723_ce8361d2c2d67d47ba55559de990bb38',
	link:'https://www.facebook.com/photo.php?fbid=10153225354518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Immortal beloved Hefeweizen',
	pct:5.5,
	desc:'Basic wheat beer',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/11159507_10153225354628745_6658479749281312928_n.jpg?oh=91d71c4ba9b60abd22c38398262f4af3&oe=57E643D2&__gda__=1473458435_f5177ed7f5d261339962a031c5330f22',
	link:'https://www.facebook.com/photo.php?fbid=10153225354628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Tank nine',
	pct:4.6,
	desc:'Nicely hopped',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11148511_10153225354708745_902540998621637913_n.jpg?oh=fb2d736ead96d6418b969beced1c6b2d&oe=57C9D46B&__gda__=1473098599_ecbce0e746e823eda1c2525260bd74e6',
	link:'https://www.facebook.com/photo.php?fbid=10153225354708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire jack of spades',
	pct:5.0,
	desc:'A very nice chocolate flavour',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11130116_10153225365978745_2851210165116478542_n.jpg?oh=4e60955e76b643120c5848dd8aed491f&oe=57E68E98&__gda__=1473131718_38a78bbfbee523a856d93bbb388264e5',
	link:'https://www.facebook.com/photo.php?fbid=10153225365978745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Crisp',
	pct:5.4,
	desc:'More harsh than crisp. A little bit more bitter than it should be',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11084248_10153225365988745_6811395875070848425_n.jpg?oh=383c2b63104aaf33e4c7c6f945e373a0&oe=57E23A69&__gda__=1473701020_db6562f1eeb11607fb560af001673aee',
	link:'https://www.facebook.com/photo.php?fbid=10153225365988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Globe Premium Draught',
	pct:4.6,
	desc:'Standard lager. Like the can though',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/14716_10153225365973745_9134185236353368363_n.jpg?oh=e42a6d12c373c32d20b245246481768e&oe=57E085E7&__gda__=1474509774_efa12d8b15c7e21c0fe6ad4451cd3aea',
	link:'https://www.facebook.com/photo.php?fbid=10153225365973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sixpoint Sweet action',
	pct:5.2,
	desc:'Nice sweet hoppy taste',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11149483_10153225366508745_5535316799902667426_n.jpg?oh=72a6f5ab90444cc12e739e22e72d8b98&oe=57DDE3A7&__gda__=1473919225_8fd2d6a710181bae8c94ceed351ddf30',
	link:'https://www.facebook.com/photo.php?fbid=10153225366508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'NZ single hop nelson',
	pct:8.0,
	desc:'Perfect level of bitterness',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11130263_10153225366548745_4430696674965972638_n.jpg?oh=a2b8ab5bf2af90cdf7a897857c3679c2&oe=57D7B345&__gda__=1473319963_23923133e32c1abcceb053a4e0fc8795',
	link:'https://www.facebook.com/photo.php?fbid=10153225366548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'La guillotine',
	pct:8.5,
	desc:'Absolutely amazing',
	score:10,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11156123_10153225366453745_4053445365399151631_n.jpg?oh=e623c00247bbfc3e29a5430a72cfa1ed&oe=57D96378&__gda__=1474273318_bccb08d5288ae15a20e7da33166d6c7c',
	link:'https://www.facebook.com/photo.php?fbid=10153225366453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White choc & raspberry pils',
	pct:5,
	desc:'Really mild on the choc and raspberry so the beer flavour isn\'t overwhelmed',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11027435_10153225366763745_2151282598672247864_n.jpg?oh=ffd9b3900dbb8a365cd0f059dec5ec98&oe=57CBA28B&__gda__=1474010226_ba0cd7f5476b17371aa31b784ce3e237',
	link:'https://www.facebook.com/photo.php?fbid=10153225366763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hargreaves hill pale ale',
	pct:4.9,
	desc:'Like a winery pretending to make a beer',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/247107_10153268256703745_3742881335896716752_n.jpg?oh=ced02865319acffb36be026ec4dc00da&oe=57DA5C2C&__gda__=1469847806_0243b4f6865c14b930232ab28d394b3e',
	link:'https://www.facebook.com/photo.php?fbid=10153268256703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six point Global Warmer',
	pct:7.0,
	desc:'Tangy, strong',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11196336_10153268256713745_6680283658542121771_n.jpg?oh=9ba7e7b452b6699ba1c11cf33f2450b4&oe=57D4DEED&__gda__=1473007795_f0bf36d240d23adaa6c0d3eb06ca5712',
	link:'https://www.facebook.com/photo.php?fbid=10153268256713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cristal',
	pct:4.9,
	desc:'A beer that goes down easy when you’re in a rush',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11206000_10153268256698745_6063621327290165780_n.jpg?oh=4f30098f3037c6f30ca289b2ec51c841&oe=57E654FD&__gda__=1474215755_2c661e3040da7aded362819c849d99ff',
	link:'https://www.facebook.com/photo.php?fbid=10153268256698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Birra Italia 1906',
	pct:4.8,
	desc:'mild and refreshing',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/11205086_10153268257048745_439269609069418781_n.jpg?oh=25bcf66a993a25116edcf9338af2684e&oe=579B9A19&__gda__=1474645862_e0a9105950b34af74de7d459acf13c64',
	link:'https://www.facebook.com/photo.php?fbid=10153268257048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat fancy pants',
	pct:5.2,
	desc:'Really tasty but also easy to drink',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/603733_10153268257103745_7684396821090282649_n.jpg?oh=78e9450b41f1ccff1ac8a7be39a83f00&oe=57E16F08&__gda__=1469897083_23dd4c5c08c2a75247ab14125d62ee56',
	link:'https://www.facebook.com/photo.php?fbid=10153268257103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Coopers premium lager',
	pct:4.8,
	desc:'Not nearly as good as their other offerings',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/11178189_10153268257113745_2486098126429601238_n.jpg?oh=bd0f7b969e5605e237feac6ccbe1f55e&oe=57E79228&__gda__=1472925760_23a5a1c63b2ac29421be8aa8fe4315e8',
	link:'https://www.facebook.com/photo.php?fbid=10153268257113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pixel 480p',
	pct:4.8,
	desc:'Pretty good all round',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11209719_10153268257203745_8370119320216109443_n.jpg?oh=7042a3cee4a29229d17d6fc6bedaf2b2&oe=57DBCF2D&__gda__=1474674648_4dae7cef70e50012dcdd71499d360cd9',
	link:'https://www.facebook.com/photo.php?fbid=10153268257203745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matilda bay alpha pale ale',
	pct:5.2,
	desc:'Standard Matilda bay beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10659329_10153268257393745_1308545288385225140_n.jpg?oh=eae586bb777a8f2e296c2a246aa35aa7&oe=57C64F9E&__gda__=1473344808_9928a031ca818b3e061ecf25e584ab93',
	link:'https://www.facebook.com/photo.php?fbid=10153268257393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Quiet deeds white ipa',
	pct:6,
	desc:'A strange combination. Maybe not quite one I could get used to',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/q84/p480x480/11053929_10153268257438745_724512553237905656_n.jpg?oh=0bcaccdc965f442d7898deb6c5b32a4d&oe=579B8915&__gda__=1473594539_0f2113ce75a262ced4d5e821b36a0333',
	link:'https://www.facebook.com/photo.php?fbid=10153268257438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Foo brew',
	pct:5.0,
	desc:'Not a thing right with this drink except that it\'s beer',
	score:2,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11182107_10153268257443745_4399139666821958419_n.jpg?oh=6b256e9f2deee624202e5d43f90219c0&oe=57DB8F73&__gda__=1473984557_7f29182998646eee6efe5181c9f3ad47',
	link:'https://www.facebook.com/photo.php?fbid=10153268257443745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo Brew Hefeweizen',
	pct:5.1,
	desc:'Wouldn’t want another',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11182307_10153268257633745_3691539250579390263_n.jpg?oh=02628b25ba8da2a32fbb8c0c22bc1892&oe=57DA6A15&__gda__=1473222624_86642cd9c8727ca00d1f8773523995eb',
	link:'https://www.facebook.com/photo.php?fbid=10153268257633745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Innis & Gunn original',
	pct:6.6,
	desc:'Not what I expected. Sweet and strange',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11196243_10153268257703745_5034055497574956739_n.jpg?oh=810ce3199dfdcb1cc3075394cd7dc307&oe=57C7C201&__gda__=1472953695_3b8ceb6d869e38223177c5685e201413',
	link:'https://www.facebook.com/photo.php?fbid=10153268257703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn golden ale',
	pct:4.5,
	desc:'Not one you see around very often',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/11178208_10153268265353745_1241728649667354734_n.jpg?oh=bb34f1cd44a88b1e0453dfabaf59ecb8&oe=57CFD6AB&__gda__=1472890538_c28e1ead31ac3536be559238c805b899',
	link:'https://www.facebook.com/photo.php?fbid=10153268265353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pikes pilsner lager',
	pct:4.5,
	desc:'No fish taste at all',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11205492_10153268265378745_5159414108787972846_n.jpg?oh=af289f2feee8cb473fb684f8ea0a60bf&oe=57E6AA41&__gda__=1473784249_527d247497b27cc194c6499144e5207f',
	link:'https://www.facebook.com/photo.php?fbid=10153268265378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Altenmünster',
	pct:4.9,
	desc:'Such a cool name and bottle',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11182040_10153268265373745_4318030430351182427_n.jpg?oh=91e6d6e020b93a743bf63248bd88dc88&oe=57CBB3D9&__gda__=1473926535_8fc3c139a0087787ce13bbc179910c68',
	link:'https://www.facebook.com/photo.php?fbid=10153268265373745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Love tap double lager',
	pct:5.9,
	desc:'Have to love a nice strong lager',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11206105_10153268265533745_1005147961464463270_n.jpg?oh=6345f88c92323f007425ba03f401ccc1&oe=57D71AAA&__gda__=1472971871_3a98f400592bf7ef45ce6026ef0a91ee',
	link:'https://www.facebook.com/photo.php?fbid=10153268265533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arcobräu schloss hell',
	pct:4.9,
	desc:'Got it from Aldi, wasn’t expecting much',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10356419_10153268265598745_7305179253101068466_n.jpg?oh=0c74b223b11cec8f6fcce218077ccd2c&oe=57E2E8C3&__gda__=1473925686_f32eaa97b1d4515f962920d684fdab19',
	link:'https://www.facebook.com/photo.php?fbid=10153268265598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pistonhead lager',
	pct:4.6,
	desc:'Pretty average lager',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11149264_10153268265618745_5697774882754067421_n.jpg?oh=06e3b4630f90e9bffcf02eb8a397740a&oe=57DCBC0A&__gda__=1474453076_571adc0e9a8d171ffa2864779ce44c2e',
	link:'https://www.facebook.com/photo.php?fbid=10153268265618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads break water',
	pct:4.5,
	desc:'Slightly better than your standard',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11178233_10153268265658745_1088283222834381460_n.jpg?oh=8f3c3fd8aa92334645f3fd0393a8b1de&oe=57C87D6C&__gda__=1474144654_33d93a89e3d95e4ce03b210d6e2910ec',
	link:'https://www.facebook.com/photo.php?fbid=10153268265658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dos Equis Ambar',
	pct:4.5,
	desc:'Has more of a Polish flavour than Mexican',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q81/p480x480/10421550_10153268279173745_3566359759975585153_n.jpg?oh=0d2922eb310a7462926ad58a40b0d962&oe=57E4BD4A&__gda__=1469865387_07caba83da4c3fd9006679ff27916ce4',
	link:'https://www.facebook.com/photo.php?fbid=10153268279173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington pale ale',
	pct:4.7,
	desc:'One of the best all round beers I’ve tasted',
	score:9,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11188184_10153268279118745_1035950770576096625_n.jpg?oh=35ae7650051fb38620719f8b0bc821c4&oe=57CCB291&__gda__=1474562511_d3ea9e792e357813ca57847bcc63387f',
	link:'https://www.facebook.com/photo.php?fbid=10153268279118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'El Loco',
	pct:4.6,
	desc:'Even worse than Corona',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11017350_10153268279168745_6892560688839392935_n.jpg?oh=3cda522aad7ff001ee408b2ee96e1b2e&oe=57DD6350&__gda__=1474253843_52aa5a1012167665c629aa8f28599908',
	link:'https://www.facebook.com/photo.php?fbid=10153268279168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Melbourne bitter',
	pct:4.6,
	desc:'Of the standard Australian beers this one ranks pretty low',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13530_10153268279263745_7432093397688380903_n.jpg?oh=6d6f0ed3788fa2e5507bccc02ecc6aaa&oe=57D68FE4&__gda__=1474749133_b22181dbb2c5857062a691291feb0534',
	link:'https://www.facebook.com/photo.php?fbid=10153268279263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Saint-Mihal',
	pct:4,
	desc:'Pretty mild but overall ok. Better than expected',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10985916_10153268279573745_5444654809518299041_n.jpg?oh=acede345c58aced5b1535a73def55ba2&oe=57CA87DF&__gda__=1474693930_ebec6886214e1d5bb8480643dd8f7958',
	link:'https://www.facebook.com/photo.php?fbid=10153268279573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit White Ale',
	pct:4.5,
	desc:'One of the nicest white beers I’ve had. Another winner from White Rabbit',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/1932304_10153268279663745_7818150974405781457_n.jpg?oh=2f5bb9c66d666ff0b41d4cb84d9c13bf&oe=57DF8A9B&__gda__=1469860759_f8f9f076f126839c794b7a9bbfa80ae8',
	link:'https://www.facebook.com/photo.php?fbid=10153268279663745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Endeavour reserve amber ale',
	pct:5.2,
	desc:'This tastes like a dark ale but isn’t supposed to. The taste is ok but I’m worried by how badly this is labeled',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/q82/p480x480/10403262_10153268279703745_1182589880637374526_n.jpg?oh=76c19910dce4bad352c34b710dcfc7ae&oe=57D48619&__gda__=1472839962_ad01407e2d306d14c087763383e8ab7f',
	link:'https://www.facebook.com/photo.php?fbid=10153268279703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Pale ale',
	pct:4.5,
	desc:'A really mild pale ale but with a great smooth flavour',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10421490_10153268279843745_9177649199173204206_n.jpg?oh=29063ce9cc515d8d60b587095c9adda7&oe=57DE5712&__gda__=1469889700_87e530037bfa4f8807252cf1dffb7b1c',
	link:'https://www.facebook.com/photo.php?fbid=10153268279843745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail Summer ale',
	pct:4.5,
	desc:'Another winner from steamrail but not as nice as the pale',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11062864_10153268279933745_3157338283510709307_n.jpg?oh=3a12dec499891c284a3c6f73e2688fc5&oe=579E1572&__gda__=1474162276_58935f2689345310cc643e1dca65de4c',
	link:'https://www.facebook.com/photo.php?fbid=10153268279933745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail amber',
	pct:4.5,
	desc:'Not as good as the rest of the range',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11109179_10153268279943745_3245706738598167550_n.jpg?oh=571219fe760301851bfb286df12e0c92&oe=57E63D2D&__gda__=1473710287_0ff68b354c4fcc6afde87fa61d0f50b2',
	link:'https://www.facebook.com/photo.php?fbid=10153268279943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s southern pale ale',
	pct:4.6,
	desc:'Like a very mild pale ale. Refreshing',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/t31.0-0/p480x480/10498559_10153268294398745_8634108256899324103_o.jpg',
	link:'https://www.facebook.com/photo.php?fbid=10153268294398745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grand ridge Moonshine',
	pct:8.5,
	desc:'The description on the bottle makes this sound awful but it’s not too bad. Could be a little bit smoother but the overall flavour is really nice',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/10462829_10153268294448745_4601669711477307040_n.jpg?oh=a13975f74e28274a7415b925c6cb8c87&oe=57D988F2&__gda__=1473918020_4fa0705a4ca6ffb4d5035e5c56b85b39',
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
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/11204930_10153268294698745_7123736277636761157_n.jpg?oh=bbb510752b604d02a9e75953e8242a80&oe=57E67CDE&__gda__=1474052610_aeea0ebcc8a1f0ba4f360f4d213cbb19',
	link:'https://www.facebook.com/photo.php?fbid=10153268294698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'’69’ Summer Ale',
	pct:4.6,
	desc:'Surprisingly happy with this one',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/11148611_10153268294718745_4388827143167133097_n.jpg?oh=dbf2849cebc6e05148f865cd44517cd1&oe=57CA5BA9&__gda__=1473826472_11b2635524474217e115ff28836f3141',
	link:'https://www.facebook.com/photo.php?fbid=10153268294718745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'New Englander Hop Cannon IPA',
	pct:6.6,
	desc:'Perhaps a few too many hops for me',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11202600_10153268294733745_5223220854392756415_n.jpg?oh=9a86b7a9ec25da14ce81b08884578ca8&oe=579B6E37&__gda__=1474156137_48361ee32f4cb7ae7bf8da070ac03c2c',
	link:'https://www.facebook.com/photo.php?fbid=10153268294733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ÜberBräu',
	pct:4.0,
	desc:'Standard cheap beer',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10346275_10153268294828745_7444781895935179067_n.jpg?oh=3a332b60881d744722d15ffbf905c41d&oe=57CD3880&__gda__=1473963998_5fca2a7d772432c52d69e5ad7486009f',
	link:'https://www.facebook.com/photo.php?fbid=10153268294828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Balmain pale ale',
	pct:4.9,
	desc:'Mmm, pale ale',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11173400_10153268295048745_1794514503671401328_n.jpg?oh=3b14fe241e11efb35b698e431463b0ba&oe=57D7709E&__gda__=1473746725_09a90b503c18a82df9953fcf91790ede',
	link:'https://www.facebook.com/photo.php?fbid=10153268295048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA St Josephs',
	pct:9.5,
	desc:'Not the best triple but a nice flavour none the less',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/11025707_10153268294958745_151299719186905005_n.jpg?oh=e933956b6d160487b1c0f86e3b601ec2&oe=57E70A6D&__gda__=1469765766_250aa7318f48f8e520cd6951beb611da',
	link:'https://www.facebook.com/photo.php?fbid=10153268294958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rogue Santa’s private reserve ale',
	pct:6.0,
	desc:'A hearty beverage',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11149464_10153268295053745_1257589284621380857_n.jpg?oh=2e451ec306f44e17662a55b108325d6b&oe=57DCE99E&__gda__=1472936640_db7b93eb7b20b4b1fb60772fe44880ff',
	link:'https://www.facebook.com/photo.php?fbid=10153268295053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lord Nelson Brewery Seasonal Ale',
	pct:4.7,
	desc:'Not up to the normal lord nelson standard',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11150609_10153268295143745_4412554411779312688_n.jpg?oh=93895b2052ab8bca59a6814edc0a5734&oe=57CF14A2&__gda__=1472622679_0431118a907905ca298c6758c23413c6',
	link:'https://www.facebook.com/photo.php?fbid=10153268295143745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Ale house pale draught',
	pct:4.2,
	desc:'Too much like a lager',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11212761_10153268295198745_2192040651986082448_n.jpg?oh=8584224f384d16f3e5f5ee93605f6769&oe=57D67915&__gda__=1474324960_dfabd8069264892c85a0c18187d75fad',
	link:'https://www.facebook.com/photo.php?fbid=10153268295198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers growler',
	pct:4.7,
	desc:'Mild sweet brown ale. Surprisingly easy drinking',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11148587_10153268299343745_976562173073925737_n.jpg?oh=55aab7c0843a9cedce817196dfab56e7&oe=57DBA239&__gda__=1473882625_1400ed671b4797a7f84d3ccb495df820',
	link:'https://www.facebook.com/photo.php?fbid=10153268299343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith\'s American pale ale',
	pct:5.7,
	desc:'Was hoping for a hoppier taste. More of a pale ale for getting smashed',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/22311_10153268299368745_777193479112346497_n.jpg?oh=095384988d91498fc3a14b55db0f439c&oe=579C5572&__gda__=1473534407_76a9db27368f03ab07db0a7ef30e5f81',
	link:'https://www.facebook.com/photo.php?fbid=10153268299368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 brothers Kung foo lager',
	pct:4.5,
	desc:'Like a tangy lager',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10428667_10153268299353745_7595281458401637305_n.jpg?oh=48f5dbf4b9b2139cf3f13d764094d2e7&oe=57E2B4DD&__gda__=1473557311_5208a5a6aae57d443f5ebc392d0a16bc',
	link:'https://www.facebook.com/photo.php?fbid=10153268299353745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rising sun pale ale',
	pct:5.0,
	desc:'Was expecting more from this. It’s the nice pale flavour but with too much harshness',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10985454_10153268299563745_9155074984245162225_n.jpg?oh=fd761741045f4956ccee0fad2a731eb0&oe=579E2D13&__gda__=1473370086_257683f6943d3a469e9e1f3a3bea27d3',
	link:'https://www.facebook.com/photo.php?fbid=10153268299563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maximus',
	pct:5.8,
	desc:'Good towards the end',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11182152_10153268299603745_965318376264137516_n.jpg?oh=bd86f7c1bd9d48210889779d73b32e90&oe=57CEA511&__gda__=1473000477_f06918388731480af21f77df90caccc5',
	link:'https://www.facebook.com/photo.php?fbid=10153268299603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms journeyman',
	pct:3.5,
	desc:'Nice and easy drinking, but still a mid strength',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11200596_10153268299613745_30462160346726619_n.jpg?oh=887837083f0af18f0c9ecf0add1c72d4&oe=57D6FDBE&__gda__=1474548825_f8fd0e6a3550347da1ee620a918ef3ae',
	link:'https://www.facebook.com/photo.php?fbid=10153268299613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'White Rabbit dark ale',
	pct:4.9,
	desc:'Not what I usually expect from a dark ale',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/q81/p480x480/11168124_10153268299693745_7328518567704258929_n.jpg?oh=beb6379953aa6ccd9c4df09f9319cf87&oe=57E69069&__gda__=1473924843_6a72148233b0066e4a85ee382a9d7579',
	link:'https://www.facebook.com/photo.php?fbid=10153268299693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liberty ale',
	pct:5.9,
	desc:'Very nicely done. Great for a session beer',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11210416_10153268299813745_8323582624602808812_n.jpg?oh=33fd901b2c3b353cf2ca36d99af87db8&oe=57DA948B&__gda__=1473235838_977af48d1b5c8950e126c55659ce956e',
	link:'https://www.facebook.com/photo.php?fbid=10153268299813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor steam lager',
	pct:4.9,
	desc:'A very flavourful lager',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11174764_10153268299828745_5386835742329909663_n.jpg?oh=c8177807f8539bcd9f057670a3b4f98d&oe=57D6012E&__gda__=1473281238_daf7190055eb8724e892e1ebe06b341e',
	link:'https://www.facebook.com/photo.php?fbid=10153268299828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Boag XXX Ale',
	pct:4.8,
	desc:'A solid flavour',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/q81/p480x480/11666075_10153438034333745_2014329694046827935_n.jpg?oh=c2ebfef51ce30d98d68619b8984cb08b&oe=57E3ECB2&__gda__=1469718393_adc86f4ace1a24b90bbbc85b1a4f723f',
	link:'https://www.facebook.com/photo.php?fbid=10153438034333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Žatec',
	pct:4.6,
	desc:'Tastes more polish than Czech',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/11692789_10153438034343745_2933345002405640949_n.jpg?oh=31a5d77f02c81bce2455a02393983989&oe=57D0CD44&__gda__=1473237292_5f8b3b35c68019f6f5994ba5fa1b8adc',
	link:'https://www.facebook.com/photo.php?fbid=10153438034343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fiji Bitter',
	pct:4.6,
	desc:'Has a slight tang to it that you don’t get with Australian bitters',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11698631_10153438034358745_1791286718120294864_n.jpg?oh=83e0f0de8ed999a905805d2cfaf0d40c&oe=57D1DD14&__gda__=1473619631_d524e8da0e99590833ea07a1b25f4af4',
	link:'https://www.facebook.com/photo.php?fbid=10153438034358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Noble Pale ale',
	pct:5.2,
	desc:'Was expecting much more. Just a plain lager',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11202109_10153438034543745_2281064819509080771_n.jpg?oh=372f18795d8e04c8c02fac66ce6140bc&oe=57E2A49E&__gda__=1469917989_716c079330fcfcf0eea6438ebfdc87fa',
	link:'https://www.facebook.com/photo.php?fbid=10153438034543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Steamrail pilsner',
	pct:4.5,
	desc:'A bit too much like a standard lager',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/11667503_10153438034893745_6099533991518812550_n.jpg?oh=de7778a55f0c3a4ce257a3165db7c68f&oe=579C1124&__gda__=1473639157_442cd9b995a9a1f5a4b180b99e13f99f',
	link:'https://www.facebook.com/photo.php?fbid=10153438034893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds taco',
	pct:5.2,
	desc:'The best wheat beer I\'ve ever tasted',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/11693950_10153438034793745_2993920563621018004_n.jpg?oh=71fe5500139b8ad1102da1cb1c0341a1&oe=57E1C33D&__gda__=1474814524_d7e4479e774c235afa6c0c76fc69fd90',
	link:'https://www.facebook.com/photo.php?fbid=10153438034793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Norman Australian ale',
	pct:5.1,
	desc:'The logo looks dodgy but it\'s actually a nice mild pale ale',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11403010_10153438034973745_575409467690114271_n.jpg?oh=969bf84aade3460133ff947becdb6ac6&oe=57D32BEB&__gda__=1473462830_d9e5cc7469938e4e3e781709087964e5',
	link:'https://www.facebook.com/photo.php?fbid=10153438034973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Blonde',
	pct:4.6,
	desc:'As I expected a plain flavourless lager',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11703056_10153438035233745_914090365741131285_n.jpg?oh=59ce065730a8101cb3a38e3389b9805b&oe=57D9B693&__gda__=1472641695_f7fffcfd04916975e3467bd2a0907b03',
	link:'https://www.facebook.com/photo.php?fbid=10153438035233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vonu Pure lager',
	pct:4.6,
	desc:'Surprisingly good and well rounded',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11707520_10153438035303745_142890088110404042_n.jpg?oh=e87d09355b5517428b1e2109399566a9&oe=57C8EE91&__gda__=1472877114_0e3d8c3e802476399341da2400c5cc80',
	link:'https://www.facebook.com/photo.php?fbid=10153438035303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'OB golden lager',
	pct:4.8,
	desc:'A little more flavourful than normal german beer',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11665626_10153438035338745_1942830826260024445_n.jpg?oh=a7639a1a188f900d1e97ace4a573ddfd&oe=57D8EA90&__gda__=1473710379_7906544b68dded8e9769946b9921f279',
	link:'https://www.facebook.com/photo.php?fbid=10153438035338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kirin first press',
	pct:5.0,
	desc:'A little better than a standard lager',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11026787_10153438035418745_3190886247129001905_n.jpg?oh=13dd1328c07d5fdef59673da0144ef10&oe=57E1A720&__gda__=1469969090_f2c3f6446a39394d51d8736b1e7d037e',
	link:'https://www.facebook.com/photo.php?fbid=10153438035418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Černovar  Svetlé',
	pct:4.9,
	desc:'A bit too malty',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11403435_10153438035523745_1440324413921244933_n.jpg?oh=a0db8c9df282ca4143354d5a08742936&oe=57D0760F&__gda__=1473678071_03e9d9384e85b7c30c4aa58fd4233b43',
	link:'https://www.facebook.com/photo.php?fbid=10153438035523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage Roads Single Fin',
	pct:4.5,
	desc:'Floral and tangy. Much better than expected',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11737813_10153438035548745_1721256026335429959_n.jpg?oh=fe4f1ba2680b8a8e84f44f21abdb8837&oe=57DF5E03&__gda__=1474187770_e6de276c08a9aaa61e39af80a39b2682',
	link:'https://www.facebook.com/photo.php?fbid=10153438035548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vailima',
	pct:4.9,
	desc:'An all round terrible beer',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11140143_10153438035598745_277263619216109713_n.jpg?oh=7a6435450a7d90eb036f071c8992dd6c&oe=57CE1651&__gda__=1469822868_05989444e0f3bc180e62c957bf4a1cf5',
	link:'https://www.facebook.com/photo.php?fbid=10153438035598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dry Hopped Pale Ale',
	pct:5.4,
	desc:'Much hoppier than a normal pale',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/11693847_10153438035713745_940540476039083000_n.jpg?oh=c08eabcc7125d5fc757f52ba58f3e15a&oe=57CF6E63&__gda__=1473849010_0cd57e94ef438a75348b03ea9a754efd',
	link:'https://www.facebook.com/photo.php?fbid=10153438035713745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Breaking the cardinal Rule',
	pct:9.5,
	desc:'Not much of an IPA but a nice Belgian tripel',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/11063592_10153438035963745_4745705285004081483_n.jpg?oh=74e1f5836289a455b9ac7b5f2f6e724d&oe=57E63BE7&__gda__=1473000273_ab0fc39555a6c2ff4767cafc23669213',
	link:'https://www.facebook.com/photo.php?fbid=10153438035963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Paddo pale',
	pct:5.0,
	desc:'No idea how this can be called a pale ale',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11665515_10153438035968745_4205414644516816644_n.jpg?oh=8adf0faedf2a6f95e4611339b287b6fb&oe=57DC50CD&__gda__=1472787854_38285c42a7f0d24787fbfc8aeebfdd69',
	link:'https://www.facebook.com/photo.php?fbid=10153438035968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belgian Royal Premium lager',
	pct:5.1,
	desc:'Nothing premium about this',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11742655_10153438036023745_7783155327321003667_n.jpg?oh=eda8d1399d31aedd2d7af823c0356e4f&oe=57E5CB04&__gda__=1472797169_c8e8072fd3ece8ad4cfc7cc86a1d6206',
	link:'https://www.facebook.com/photo.php?fbid=10153438036023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'William’s organic pale ale',
	pct:4.5,
	desc:'A slightly bitter but well rounded pale ale',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/11234818_10153438036188745_6157946174058205755_n.jpg?oh=6c27e2e447d759cd8daf68a80f90834e&oe=57E144A3&__gda__=1473816732_d0b072f3b0eb3e5d331a84f71e502d9c',
	link:'https://www.facebook.com/photo.php?fbid=10153438036188745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses Chardonnay IPA',
	pct:6.0,
	desc:'A mild IPA that really hits the spot. Nice floral aroma',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11071649_10153438036343745_3147415906093292508_n.jpg?oh=7a0591e856ea7929d7fb2324f7dbc192&oe=57CACC34&__gda__=1473267831_94663c5d6336a03f602094fd29629c44',
	link:'https://www.facebook.com/photo.php?fbid=10153438036343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Oatis',
	pct:6.5,
	desc:'A little bit too sharp for me',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11667294_10153438036333745_6944136313097119915_n.jpg?oh=0b8605eaa690aa08b9ccc53882b4e8fc&oe=57D0547A&__gda__=1473214521_9880dd348e6a6080962afdfaf7dfb056',
	link:'https://www.facebook.com/photo.php?fbid=10153438036333745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bruce Malone',
	pct:6.2,
	desc:'Ok, but something is just wrong',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p320x320/11665530_10153438036328745_3370491198453159853_n.jpg?oh=c98bbc6f1a874da9e13c433f9c5452ca&oe=57DE90AD&__gda__=1473310040_e89dc3a45da02814905d4b95d6b92dfc',
	link:'https://www.facebook.com/photo.php?fbid=10153438036328745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big smoke wet hop IPA',
	pct:null,
	desc:'Like the wet hop, need to find more',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11233171_10153438036778745_7460779125459519208_n.jpg?oh=af93299b2a6bd0d031c8070397a4757c&oe=57E52056&__gda__=1474057897_bcfaf09cb5ebb241ad56f201e28a08a1',
	link:'https://www.facebook.com/photo.php?fbid=10153438036778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Camel\'s beard black sour',
	pct:4.3,
	desc:'Like mixing black current juice with a beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10404258_10153438036873745_1054335218755238006_n.jpg?oh=6e735580de1299d52025ce3841bd0b64&oe=57CDBB6C&__gda__=1469781975_244ae7642336f7af9c61b29844bd63d8',
	link:'https://www.facebook.com/photo.php?fbid=10153438036873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rocks brewing ESB',
	pct:5.1,
	desc:'Bitter like an IPA but without the floral hoppiness',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11709549_10153438036878745_3892385374192512736_n.jpg?oh=2594be1647a0e98ddfd13050e3a59ea9&oe=579B1EB9&__gda__=1469923074_e0fe78f25cf58c255fd4b2d7368eb244',
	link:'https://www.facebook.com/photo.php?fbid=10153438036878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Koshihikari rice beer',
	pct:5.0,
	desc:'Amazing how similar this is to a normal lager',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11665487_10153438037018745_87412937068060294_n.jpg?oh=f70ef77866963cb113822a496bb6b4d7&oe=57D2EF50&__gda__=1474251278_9d28b3637559505dfc25c742590071a0',
	link:'https://www.facebook.com/photo.php?fbid=10153438037018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bastard son pale ale',
	pct:4.8,
	desc:'Cross between a pale and an IPA',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/11039309_10153438037053745_1453835514615000872_n.jpg?oh=171e32877ec0d53edf62d19926791566&oe=57999D9E&__gda__=1473341030_a1458aefab2876e301a551f9d6ce5068',
	link:'https://www.facebook.com/photo.php?fbid=10153438037053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river red ale',
	pct:6.5,
	desc:'A bit harsh for me',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/11403190_10153438037108745_3712451184954693803_n.jpg?oh=d9a8b408372ad37a17b1720391e57d8a&oe=57C88FB5&__gda__=1472943284_8001d3970d1f23ada5fe3d91427b28bb',
	link:'https://www.facebook.com/photo.php?fbid=10153438037108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Founders Dirty Bastard',
	pct:8.5,
	desc:'A lot of flavour in this beer but it’s not quite right',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11707850_10153438037263745_7444067883763013637_n.jpg?oh=b21bd49e9e2b08483100bac52985b0cf&oe=57D3C9D0&__gda__=1472816178_713d98d93db000dcad5aa2dba7ebe6b7',
	link:'https://www.facebook.com/photo.php?fbid=10153438037263745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hahn superdry',
	pct:3.5,
	desc:'A crappier version of the regular superdry',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11214280_10153438037523745_4286815657184147844_n.jpg?oh=1bb9d0a5b10bc58ab9546c398aaa2b1a&oe=57DE7531&__gda__=1472931022_123a8bacaf3948fd61fd6fae98476ebf',
	link:'https://www.facebook.com/photo.php?fbid=10153438037523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kooinda hop transfusion ipa',
	pct:7.5,
	desc:'A very well balanced and floral IPA',
	score:9,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11659318_10153438037553745_8784383877969678894_n.jpg?oh=60d4cda5c3d13c01d0aef4927b136f37&oe=57C9F9EB&__gda__=1473443348_9db7c3f217fbad6164a093df7a5adc37',
	link:'https://www.facebook.com/photo.php?fbid=10153438037553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cricketers arms spearhead pale ale',
	pct:5.2,
	desc:'A bit of a let down. Doesn’t have what I expect from a pale ale',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11709660_10153438037763745_2498650749121162924_n.jpg?oh=540042d5c925a08f83f11d05207ef9a7&oe=579A7C5D&__gda__=1473019810_80a560a0e93d4f2f3d7dda455946b41d',
	link:'https://www.facebook.com/photo.php?fbid=10153438037763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dead Pony Pale Ale',
	pct:3.8,
	desc:'Really mild for a pale ale but also really mild on alcohol as well. Guess it would be good if you’re just getting into beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/11666224_10153438038048745_8968016209259531630_n.jpg?oh=f4e6ee37ecb74ea3d0f4e49ec88fb604&oe=57CCDD42&__gda__=1474005497_88b38fc4d0c0fd6b4f77cac206d8851c',
	link:'https://www.facebook.com/photo.php?fbid=10153438038048745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Matso’s session ale',
	pct:3.5,
	desc:'Another good beer from Matso’s but still a mid strength',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/11709463_10153438038063745_514405702449925285_n.jpg?oh=caf4b293e34cf20d2c2d67c8ed9cbe24&oe=57CCA9E0&__gda__=1469957375_5c1a047a8ab159a922a5fe7c6c82dc10',
	link:'https://www.facebook.com/photo.php?fbid=10153438038063745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Golden ale',
	pct:4.2,
	desc:'Zesty as promised. Really high quality all round',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/11742900_10153438038123745_9100299621440264544_n.jpg?oh=e8357f727545f0650f7a3f2e2485e6eb&oe=5799A24E&__gda__=1473980859_19fc9bdf51ddf457ac5988e4d19fcd13',
	link:'https://www.facebook.com/photo.php?fbid=10153438038123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Courage Directors',
	pct:4.8,
	desc:'Pretty run of the mill english ale',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/11038987_10153438038293745_6155510821012537170_n.jpg?oh=0d06baabc8effb03662c38859d4908c8&oe=5799EE90&__gda__=1474520454_28c384c07e72615a4234d2f29b52697b',
	link:'https://www.facebook.com/photo.php?fbid=10153438038293745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yenda Pale ale',
	pct:4.5,
	desc:'A really nice sweet hit of flavour',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/11251267_10153438038418745_6850868855690668787_n.jpg?oh=4e1785e575af43a7a81bb611398a17b3&oe=57D256F4&__gda__=1469854391_e23c5f25e39e75cce3430973af975909',
	link:'https://www.facebook.com/photo.php?fbid=10153438038418745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'4 Pines ESB',
	pct:5.4,
	desc:'One of the nicer ESBs that I’ve had. But perhaps I just don’t know what an ESB is supposed to taste like',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/11666089_10153438038438745_5192310955658972737_n.jpg?oh=d88a81e581df925804362f418a9413bb&oe=57E27AB4&__gda__=1472696298_0e4b97e021f101bf044b7b698edbd820',
	link:'https://www.facebook.com/photo.php?fbid=10153438038438745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nomad Sideways Pale ale',
	pct:4.0,
	desc:'This beer is just all wrong. Tastes more like an IPA than a pale and the fizz is just strange',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/11692763_10153438038563745_2254106052941195483_n.jpg?oh=0a5c96e05d661daa84b141253c39e502&oe=57E1AE35&__gda__=1474022871_84cc86c6b3eb507924c7bbafe1031574',
	link:'https://www.facebook.com/photo.php?fbid=10153438038563745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Carter premium lager',
	pct:4.0,
	desc:'Nothing premium about this',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11707555_10153438038703745_5816121848155003948_n.jpg?oh=deb4a067f83b4efa4d9eac5d3e0b433b&oe=57E46E45&__gda__=1472692922_05a717f022683b0cb4b7bc69e7c0cfa6',
	link:'https://www.facebook.com/photo.php?fbid=10153438038703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Claro',
	pct:4.6,
	desc:'A kind of sweet Mexican lager',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11694866_10153438038743745_8578021989993223626_n.jpg?oh=e6fff6b00f8c01497265d311cdc0ffd7&oe=57DF9840&__gda__=1473085887_4dc71fdb0058fe8bae509b1d4e4535de',
	link:'https://www.facebook.com/photo.php?fbid=10153438038743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Five hop',
	pct:6.2,
	desc:'I really wanted to like this beer because of the cool bottle but the flavour just isn’t right',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12105748_10153656863078745_1274782812792168869_n.jpg?oh=8fe9f32cbb196e499c063519d3b56471&oe=57CF0770&__gda__=1469669729_58e88b159c217eb212c19545830873f4',
	link:'https://www.facebook.com/photo.php?fbid=10153656863078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands pale',
	pct:4.6,
	desc:'Missing the boxes it\'s trying to tick',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12109067_10153656863173745_3852359078129229777_n.jpg?oh=c849fedb19c5e5b968765b0586ac8c96&oe=579DC5FA&__gda__=1473956587_c20bd23fb8d07cabb4713ca4d6ae7e52',
	link:'https://www.facebook.com/photo.php?fbid=10153656863173745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Badlands IPA',
	pct:5.2,
	desc:'Nicer than the pale',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/q83/p480x480/12065989_10153656863158745_690647153577625477_n.jpg?oh=0d5eac70315c69d7bffcfa25f4e2b08a&oe=57E7A822&__gda__=1472924428_c3ff8f085a42326d5ebdddaefe5ab52b',
	link:'https://www.facebook.com/photo.php?fbid=10153656863158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bellerose Blanc',
	pct:6.5,
	desc:'A fairly mild Belgian beer',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q83/p480x480/12141679_10153656863378745_27632216009951724_n.jpg?oh=79e2de257d098e7e01ec83b9492f68f9&oe=57D07E92&__gda__=1473699247_c03276ae55c784a8e0cb14211e9854f7',
	link:'https://www.facebook.com/photo.php?fbid=10153656863378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fred Murrays IPA',
	pct:5.6,
	desc:'Nothing special but nothing wrong with it',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q86/p480x480/11988711_10153656863543745_374129198357931998_n.jpg?oh=c517dcdb528595a30de82a0432d1926d&oe=57DEE0BF&__gda__=1473746594_ad07c31572dcc5c178d455859cf8167d',
	link:'https://www.facebook.com/photo.php?fbid=10153656863543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Burleigh Brewing Co FIG JAM IPA',
	pct:7.0,
	desc:'Has a strange aftertaste that completely ruins the beer',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/10393668_10153656863593745_2358385457397680268_n.jpg?oh=498ee287ddeeec28acbdd49ce56a9033&oe=57E04F5C&__gda__=1473950466_848428f5f2bb3629eb6182fc02bd26ef',
	link:'https://www.facebook.com/photo.php?fbid=10153656863593745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDevil IPA',
	pct:6.7,
	desc:'A pretty average IPA which slightly misses the mark',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/12072602_10153656863733745_7824943187452200119_n.jpg?oh=93fb45bc168d3329dd4d66da879fd0a9&oe=57C94194&__gda__=1472650054_e582d4e7681747c58cb9a98770f86718',
	link:'https://www.facebook.com/photo.php?fbid=10153656863733745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada 2015 Beer Camp',
	pct:7.0,
	desc:'Not a favourite but a well rounded flavour',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12105717_10153656863923745_5748636982943209878_n.jpg?oh=cc96e2f4d661910280053251a7c3101f&oe=5799BCD7&__gda__=1473009878_2c93e2675a7d770ec40bf170c996795b',
	link:'https://www.facebook.com/photo.php?fbid=10153656863923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wahoo summer lager',
	pct:4.2,
	desc:'Water with a hint of beer. Good for a summer day',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115651_10153656864028745_2911616261438807210_n.jpg?oh=236526ce0bd97b9269fec3f3217018f7&oe=57DCE33C&__gda__=1474012894_b9839730e64bae33df8414455b65beb2',
	link:'https://www.facebook.com/photo.php?fbid=10153656864028745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy yak',
	pct:4.2,
	desc:'I think the creators were lazy',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12096246_10153656864118745_718405220444766067_n.jpg?oh=5cd172591676af1ada3aa1fc698144f1&oe=57C70DAE&__gda__=1474538902_4d67b6bb63d848cfb6e4267698b2da54',
	link:'https://www.facebook.com/photo.php?fbid=10153656864118745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tooheys darling pale ale',
	pct:4.4,
	desc:'Not that different from a new',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12107775_10153656864253745_3676978926907656134_n.jpg?oh=ce892f6defb19ebcb3334abe8e61f498&oe=57D33F73&__gda__=1473532305_beb91a799edcb1fb7e4f896db5a8c9f3',
	link:'https://www.facebook.com/photo.php?fbid=10153656864253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn Pale Ale',
	pct:4.7,
	desc:'Decent but there’s just a little something wrong',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12112425_10153656864393745_4992271544321247491_n.jpg?oh=a8817f1006dccba4f788d0581814e92f&oe=57DB1148&__gda__=1473235626_d45d1ae252dde4f6253d52a1d9bf85e6',
	link:'https://www.facebook.com/photo.php?fbid=10153656864393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad river Jamaica Ale',
	pct:5.6,
	desc:'Mild but with an underlying taste that’s really nice',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12112175_10153656864428745_274214784974027443_n.jpg?oh=635a94068e6b60c7c1ac4390edb6f0e1&oe=57CCE3A7&__gda__=1469833688_4f1f3a10aac6363123b45e436d41f56c',
	link:'https://www.facebook.com/photo.php?fbid=10153656864428745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Hop Hunter IPA',
	pct:6.2,
	desc:'Very hoppy with a nice finish',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12115843_10153656864518745_6379524063255293794_n.jpg?oh=ecb26d3579e3a0dff676fe166dbecb56&oe=57C8C475&__gda__=1473507267_f40a48586df017f459efa5ff7a5fb881',
	link:'https://www.facebook.com/photo.php?fbid=10153656864518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat surefoot stout',
	pct:5.0,
	desc:'A fairly mild stout',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12115556_10153656864648745_1260864511539950726_n.jpg?oh=9e05a54ac43aeab2cf6d681936393f8d&oe=57E07DD5&__gda__=1473728212_7798852b1a851e1c64c4ac343f641ee5',
	link:'https://www.facebook.com/photo.php?fbid=10153656864648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge Road Bling IPA',
	pct:5.8,
	desc:'Lacking the rounded finish that I was hoping for, but not too bad',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/10350421_10153656864623745_1423000334986932771_n.jpg?oh=857349671d3673ff1a1d88598e99d66f&oe=57E27E48&__gda__=1469988727_e86af5b6b448498ceb3905b1a9e714f8',
	link:'https://www.facebook.com/photo.php?fbid=10153656864623745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moon boy golden ale',
	pct:4.5,
	desc:'Has a little bit of paleness to it',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12112481_10153656864773745_7414480192728397600_n.jpg?oh=13adf1f831668c004298c187fd99a0ed&oe=57D9A745&__gda__=1474266436_2f443dee089c0910d609c476df854f01',
	link:'https://www.facebook.com/photo.php?fbid=10153656864773745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Original special blonde beer',
	pct:8.6,
	desc:'Super strong, comes in a giant can and tastes better than normal lager. An all round winner',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12079418_10153656865038745_406494349310437104_n.jpg?oh=6c15b6e93da2457e5537466274d03622&oe=57CED526&__gda__=1469674282_e824b4ebb457c98ee9f30242b9572e98',
	link:'https://www.facebook.com/photo.php?fbid=10153656865038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s hop ale',
	pct:6.0,
	desc:'Strong and bitter, could do to be a bit more floral',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12143171_10153656865058745_383441333102974608_n.jpg?oh=0a3a75efc8eb11dfbc216f58a8f0026f&oe=57D00E19&__gda__=1474689557_7333533871204b536777a8a1561083cb',
	link:'https://www.facebook.com/photo.php?fbid=10153656865058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers',
	pct:5.0,
	desc:'The same as all the other thai beers',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q81/p480x480/12106825_10153656865098745_7827402413417902820_n.jpg?oh=04c954a31ddb66ef78dcfb1e13908d8f&oe=57CBE271&__gda__=1472920208_f9a3023f41e452642c0027825a6e7a13',
	link:'https://www.facebook.com/photo.php?fbid=10153656865098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Federbräu',
	pct:4.7,
	desc:'Has the flavour of a german beer but the quality is slightly lacking',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/q86/p480x480/12115906_10153656865258745_5285972944996147053_n.jpg?oh=1f3784f7c0b5049a987619b5ae8488e1&oe=57E4E336&__gda__=1473156823_aa0223c834f6203aad398bc6e6584c97',
	link:'https://www.facebook.com/photo.php?fbid=10153656865258745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'ICing grapefruit',
	pct:4.0,
	desc:'Not sure how this qualifies as a beer but it\'s pretty nice regardless',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12109080_10153656865268745_8515065510187069262_n.jpg?oh=05af7b4fe11471454b15c942e3460f03&oe=57D5C5AF&__gda__=1469894937_89dce9efed372a828778f97e9f3e11e9',
	link:'https://www.facebook.com/photo.php?fbid=10153656865268745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Phuket',
	pct:5.0,
	desc:'A little bit more tangy than other Thai beers',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q81/p480x480/12118934_10153656865338745_4802874236575690852_n.jpg?oh=4330e8478abff94937d047f7730475ca&oe=57D857AB&__gda__=1474535227_707aeb8f9021408720a3823afe0b927f',
	link:'https://www.facebook.com/photo.php?fbid=10153656865338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beerlao dark lager',
	pct:6.5,
	desc:'Doesn’t really taste like a dark lager, just a really crisp and clean lager',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10888489_10153656865543745_7177566089678444243_n.jpg?oh=93c7fd9f7b488316f52b79c1b18bd428&oe=57CCAA29&__gda__=1472738518_a38ae69d98695943e25ec379576161be',
	link:'https://www.facebook.com/photo.php?fbid=10153656865543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheers X-tra',
	pct:6.0,
	desc:'A slightly stronger and nicer version of the regular cheers',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/11201812_10153656865613745_2836886776655090085_n.jpg?oh=ba2e3ab2bad4b4a3a21c52f1e2c2ffd4&oe=57CAE738&__gda__=1469999657_f00cd1845e67c1bb63d3e88a089ade7d',
	link:'https://www.facebook.com/photo.php?fbid=10153656865613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'San Miguel Pale Pilsen',
	pct:5.0,
	desc:'Filipino version of San Miguel. Not nearly as nice as the Spanish version',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/q86/p480x480/12108847_10153656865618745_952249772663413561_n.jpg?oh=9ee1aafef861ca975ffa1e91b7c911ad&oe=57E7E0C7&__gda__=1469685737_8bcba16a24074bf28c51b70b535d48d6',
	link:'https://www.facebook.com/photo.php?fbid=10153656865618745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'The fox mid ale',
	pct:null,
	desc:'A microbrew copy of every other tasteless mid strength lager out there',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12096074_10153656865793745_4213334596574344775_n.jpg?oh=ae83f1fb72e91e01e4bf6265bf6938f1&oe=57E57C71&__gda__=1469921632_c05f3145141fa568b6f6db078a760338',
	link:'https://www.facebook.com/photo.php?fbid=10153656865793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XXXX bitter',
	pct:4.6,
	desc:'So hard to find the full strength XXXX even in QLD. And it\'s easy to see why. Needs a shot of vodka like in the old days',
	score:3,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12108168_10153656865913745_802278422732824770_n.jpg?oh=c4f59280b01f66743a47fe8a9362e754&oe=57C93A8A&__gda__=1469716513_b29f10f44f03a0d70bb5a147f208b288',
	link:'https://www.facebook.com/photo.php?fbid=10153656865913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės vyšniu kriek',
	pct:5.0,
	desc:'A cherry beer. A little bit too see to drink much but nice in small doses',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12116003_10153656865943745_8818428390735256762_n.jpg?oh=42c7dba6f022198ee9d7ced3b940ec1b&oe=57E5731E&__gda__=1474288415_c347ddb06ed35ed42612bf97a681038e',
	link:'https://www.facebook.com/photo.php?fbid=10153656865943745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Kalnapilis grand select',
	pct:5.4,
	desc:'Standard lager',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115501_10153656866208745_1270989772264309732_n.jpg?oh=7d88b0cc4c25da3040a4392c4f428bb2&oe=579D59A3&__gda__=1474512705_a6049250a18f6d28d79a684253acb35e',
	link:'https://www.facebook.com/photo.php?fbid=10153656866208745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Point the way IPA',
	pct:5.9,
	desc:'Really good example of an IPA',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12088452_10153656866578745_7251403189729284400_n.jpg?oh=4e5fb0fd01990458d5d4d6473913e2d5&oe=57DAF212&__gda__=1473362928_9400e7df6d66aba1fa58cad38f7cdd45',
	link:'https://www.facebook.com/photo.php?fbid=10153656866578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Thanks captain obvious IPA',
	pct:5.8,
	desc:'Gotta love citra hops',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12112199_10153656866448745_6538817725943333095_n.jpg?oh=b31072e6eeeb6754ade5818ce56d6193&oe=57D0C632&__gda__=1472854835_1a8e7efb75e6041143485edda36fed6e',
	link:'https://www.facebook.com/photo.php?fbid=10153656866448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner kristallweissbier',
	pct:5.4,
	desc:'Very crisp for a wheat beer',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115843_10153656866648745_4612566258079331508_n.jpg?oh=90a1e0d5982103df6cb1f98996a24c68&oe=579A197C&__gda__=1473433758_744001263b62dc8184684fd1a79c934e',
	link:'https://www.facebook.com/photo.php?fbid=10153656866648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Noisy minor anzus IPA',
	pct:6.0,
	desc:'A bit of a let down, just too bitter',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/12088432_10153656866828745_7848120632268756477_n.jpg?oh=c2bbb5558e590a675219659d2ea0a418&oe=579B95B6&__gda__=1472802471_8fae31966d14ee3887305d8343de050d',
	link:'https://www.facebook.com/photo.php?fbid=10153656866828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Martens Pils',
	pct:5.0,
	desc:'A good session beer',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12072622_10153656866868745_684969190381396266_n.jpg?oh=7f4475caea487d61c5e7a5e65eeab07c&oe=57D6B52A&__gda__=1474640422_5844683e46e5c9b166168eb48e6373ab',
	link:'https://www.facebook.com/photo.php?fbid=10153656866868745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chimay red',
	pct:7.0,
	desc:'Well known but not the best example of a belgian dubbel',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1554374_10153656866968745_899111329413653237_n.jpg?oh=0dcdd9a1f6bb912ca810925c58d3b247&oe=579A927E&__gda__=1469771372_814694761bc8724c5b8bc10049cfdf12',
	link:'https://www.facebook.com/photo.php?fbid=10153656866968745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Two birds bantam IPA',
	pct:4.7,
	desc:'My biggest disappointment so far from two birds',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12115580_10153656867073745_1898684720680152438_n.jpg?oh=b2498bbfce603d50e777fcb02728d90a&oe=57CCAEFA&__gda__=1473558040_72f07047284ea3985831986f5322dd9f',
	link:'https://www.facebook.com/photo.php?fbid=10153656867073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew cult hop zone',
	pct:5.0,
	desc:'Very good IPA but not sure if it\'s a good session beer',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12079324_10153656867078745_2445263991582775788_n.jpg?oh=4b3bb9a8adeac0048a583266a59f3a26&oe=57E34A84&__gda__=1473905019_aba8c8ff81448e96df4d049988bd4d9e',
	link:'https://www.facebook.com/photo.php?fbid=10153656867078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult spoiler alert',
	pct:4.5,
	desc:'A little bit of a let down from the IPAs',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12107838_10153656867113745_341030388742417750_n.jpg?oh=c8e72191399c7c27918eaf965f064729&oe=57CFD13A&__gda__=1473829265_6c7e919c1f81ee2e18b050afd59c439e',
	link:'https://www.facebook.com/photo.php?fbid=10153656867113745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stockade pale ale',
	pct:4.7,
	desc:'A regular beer pretending to be something more',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12140701_10153656867523745_8057771070522060863_n.jpg?oh=8a00ab2a7eccb551507496363bfa3ebd&oe=57C7932C&__gda__=1473386797_40acdc3acd53fd4d8e80bba641a24715',
	link:'https://www.facebook.com/photo.php?fbid=10153656867523745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James squire nine tails',
	pct:5.0,
	desc:'Pretty good all round',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/12074484_10153656867603745_6432235869019497791_n.jpg?oh=901507edb9b4713a533259d2e4b9dba0&oe=57D16052&__gda__=1473011751_c2c0ddeccfb3ba7ee9991aefc826ca39',
	link:'https://www.facebook.com/photo.php?fbid=10153656867603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Celia',
	pct:4.5,
	desc:'Slightly bad czech lager. But at least it’s gluten free',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12119170_10153656873518745_1645193236829467007_n.jpg?oh=9251415f6137916aadc446cf419552b8&oe=57998CD6&__gda__=1473893847_d96d48109a1efb6257a3cf9a567ae33e',
	link:'https://www.facebook.com/photo.php?fbid=10153656873518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Maxx dry',
	pct:5.0,
	desc:'Standard',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12107835_10153656873528745_2876365020596691425_n.jpg?oh=cebb5281d848a97dfd6a2e5eae504ff8&oe=57D7B99B&__gda__=1474474394_4dbe5b9cd45a93c6a5fcaf589834b360',
	link:'https://www.facebook.com/photo.php?fbid=10153656873528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn amber ale',
	pct:4.7,
	desc:'A bit too bitter',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12109019_10153656873578745_8374191481709518736_n.jpg?oh=25bf28c4f857d17904bea81a547d4501&oe=57C6B96E&__gda__=1472871023_48e31474685d1f819abebfbf8194bc74',
	link:'https://www.facebook.com/photo.php?fbid=10153656873578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Monteith’s Pointers pale ale',
	pct:4.2,
	desc:'A very well rounded pale ale but not that much flavour',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12119151_10153656873648745_4254619746116923719_n.jpg?oh=bf00cb65cae792513713b85b148f7a62&oe=579CBF87&__gda__=1474748294_6ba828c1e566a4ee8f0fa1d31490a1df',
	link:'https://www.facebook.com/photo.php?fbid=10153656873648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner helfe weissbier',
	pct:5.4,
	desc:'A very mild flavoured wheat beer',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12509736_10153811610538745_2189727718735863015_n.jpg?oh=315a43e7d10748f06f4f18b76ebe1d32&oe=57C7481B&__gda__=1473394189_5e24b48fca6a01686ea7f5d18d43dc0d',
	link:'https://www.facebook.com/photo.php?fbid=10153811610538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Downtown Brown',
	pct:5.0,
	desc:'A fairly unsweet brown',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12400634_10153811610548745_7658175171400136673_n.jpg?oh=5912548ad54a27d5cd0972e852614f1e&oe=579E1455&__gda__=1469686954_1e898c7911cb699ab8f0cdfda8d79819',
	link:'https://www.facebook.com/photo.php?fbid=10153811610548745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans Hoppy Gonzales',
	pct:5.9,
	desc:'Really mild and nice chilli flavour but there\'s a little too much bitterness',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1935435_10153811610483745_7535392188033528320_n.jpg?oh=59f51a972d4b4e672be0d209bc790c49&oe=57DC924F&__gda__=1472677470_7467060a261360381ff380c8e3b43274',
	link:'https://www.facebook.com/photo.php?fbid=10153811610483745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans red sky IPA',
	pct:6.5,
	desc:'I great IPA for people who are new to beers with flavour. Mild but really well done',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/12510233_10153811610863745_3262758970154145170_n.jpg?oh=237c6a275a7edbafa6cccd9fe400f1bf&oe=579E863E&__gda__=1473697954_ff146c7c888f6b8ec099901e4b1884ee',
	link:'https://www.facebook.com/photo.php?fbid=10153811610863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans white Sky',
	pct:6.5,
	desc:'Never quite tasted right but perhaps I was having an off day',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/10561728_10153811610893745_8053139554847988051_n.jpg?oh=40d65784a98cc9326c2ed65bd6cfb11f&oe=5799CF07',
	link:'https://www.facebook.com/photo.php?fbid=10153811610893745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Young Henry\'s newtowner',
	pct:4.8,
	desc:'A fairly plain lager',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12376181_10153811610908745_3920511327334452329_n.jpg?oh=55d2faf4a6bbaf7a99b48ee2ea199484&oe=57CFB983&__gda__=1469998716_c8406bba9721b0a6fb909be8064e9ae9',
	link:'https://www.facebook.com/photo.php?fbid=10153811610908745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Redds Apple-Ale',
	pct:4.0,
	desc:'Really mild apple flavour, like a cider without all the sugar',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12507414_10153811611358745_6320534595559779603_n.jpg?oh=8c2cd3762e9ee08455721ef5feaf7ab2&oe=57D61EAF&__gda__=1472740438_5d969f36fe3bd2fa3372815204861a9a',
	link:'https://www.facebook.com/photo.php?fbid=10153811611358745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red hill Scotch ale',
	pct:5.8,
	desc:'Fizzed for about 10 minutes and then just tasted a little blemished',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12495170_10153811611453745_4249513101009687446_n.jpg?oh=d67aca97f7680e1e02f968c28177d73c&oe=57D2DD73&__gda__=1474567781_9c23be9fbc22050855d8ddaebaf3f440',
	link:'https://www.facebook.com/photo.php?fbid=10153811611453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brewcult Reset Robot',
	pct:3.5,
	desc:'A little on the weak side but a really good pale flavour',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12417859_10153811611533745_6524426791759855644_n.jpg?oh=2da03d24d604109d7e6430fe594c0ade&oe=57D1B541&__gda__=1473176896_393cf496b9545f4ae401513154dc7276',
	link:'https://www.facebook.com/photo.php?fbid=10153811611533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garagista IPA',
	pct:5.8,
	desc:'Really nice colour but the flavour misses the mark',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/12439242_10153811611693745_5295129091092363707_n.jpg?oh=c4a42733d7fddf67fcf63478bb8939e8&oe=57D2D893&__gda__=1472656614_fd07f903ecaf8e2dea60b1a007649741',
	link:'https://www.facebook.com/photo.php?fbid=10153811611693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Alice Porter',
	pct:5.2,
	desc:'A fairly nice porter, but nothing great',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1227_10153811611783745_4791320626770283018_n.jpg?oh=aa526f96a62f2f3c27a16381ea6aebc6&oe=579B11D0&__gda__=1473643109_334dbdf1c9246ef460f9962b9e45a3f3',
	link:'https://www.facebook.com/photo.php?fbid=10153811611783745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Volkan Santorini blonde',
	pct:5.0,
	desc:'Has a kind of silty texture to it and an Eastern European tang',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12510230_10153811618053745_1537940753105870983_n.jpg?oh=3c09afcec1321937b9ef5034c30da8bd&oe=57C6F722&__gda__=1473126041_a1faa33dfa28d542ad0099ebd41fb830',
	link:'https://www.facebook.com/photo.php?fbid=10153811618053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing company citra IPA',
	pct:6.5,
	desc:'Really nice floral flavour. Gotta love citra hops',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12510389_10153811618073745_2543157782800791845_n.jpg?oh=36c75a4d2a75511b1bfd511f89db1db5&oe=57D126A7&__gda__=1469956190_39f18d52b0be1ec1e90592537edd716d',
	link:'https://www.facebook.com/photo.php?fbid=10153811618073745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch voyage of the Galaxy',
	pct:3.9,
	desc:'Just can\'t get into this. It\'s heavy without a nice flavour behind it',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/12523010_10153811617993745_3799427315794683212_n.jpg?oh=02c52cd65a19367e1b9159f395790aed&oe=57DB99BF&__gda__=1473201223_70cffbcb44eb1cc8013ea4811cebd5e4',
	link:'https://www.facebook.com/photo.php?fbid=10153811617993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Merchant three toe',
	pct:5.6,
	desc:'Has some sort of wrong tinge to it and nothing to redeem that',
	score:5,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/12523010_10153811618698745_8674316170585442130_n.jpg?oh=c87af1c11d16274e3894117386963e0f&oe=57E56FEE',
	link:'https://www.facebook.com/photo.php?fbid=10153811618698745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch west coast IPA',
	pct:5.8,
	desc:'Mild but very tasty. One of the first from batch that I really like',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/12510395_10153811618823745_3574564297259479731_n.jpg?oh=57b25f2de8f25db5c08b20966ee9caae&oe=57C62DF2&__gda__=1469998188_cc0b81c2825717bd2937564a11463833',
	link:'https://www.facebook.com/photo.php?fbid=10153811618823745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Modus cream of the hop #3',
	pct:5.6,
	desc:'Actually more creamy than a normal beer. Really nice',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12509647_10153811618828745_7009333713246897313_n.jpg?oh=a39297f16bbb31f441b256955bdab479&oe=57DAF4C6&__gda__=1469709181_1af94f37bb8345e80af3cffe28cef265',
	link:'https://www.facebook.com/photo.php?fbid=10153811618828745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie kolsch',
	pct:4.6,
	desc:'Really well balanced but a little lacking in flavour',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/12509088_10153811619033745_702562891235220957_n.jpg?oh=31b916e0aa5fea30687959d308d7a79b&oe=57D2E1AF&__gda__=1473931683_a07720ef7924b774f237c7688bdec008',
	link:'https://www.facebook.com/photo.php?fbid=10153811619033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cheeky Charlie artisan ale',
	pct:4.4,
	desc:'A bit of a harsh flavour. Disappointing after the kolsch',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/12509407_10153811619193745_3070555167581402785_n.jpg?oh=93d8d6a9e2833b4522f47cc54d044804&oe=579B7900&__gda__=1474332661_b9bb0bfb77d92aa611d71fedb596e684',
	link:'https://www.facebook.com/photo.php?fbid=10153811619193745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gulden draak 9000',
	pct:10.5,
	desc:'A little harsh all round without any real nice flavour to back it up. You get used to it but why bother',
	score:3,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/q81/p480x480/580376_10153811619198745_8101596644532309757_n.jpg?oh=bd76e48ce79a42becfb902ca84b56779&oe=57DE619E&__gda__=1469812131_38f2232a024dac034f04bd4e191bcc09',
	link:'https://www.facebook.com/photo.php?fbid=10153811619198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Arrogant bastard barrel aged',
	pct:8.1,
	desc:'Really nice secondary flavour. Could drink a lot of these',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/12508899_10153811619303745_6510580439583908445_n.jpg?oh=14ca8ffb3834dfcca5fad9604e63f1f6&oe=57C8EB2D&__gda__=1472981937_fe123af5eb461123fed42adeea47481a',
	link:'https://www.facebook.com/photo.php?fbid=10153811619303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pinedrops IPA',
	pct:6.5,
	desc:'A solid IPA, better than I expected',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/581926_10153811639323745_2485735585097388298_n.jpg?oh=cfc013d7e4b6701454a22a88974f643e&oe=5799D1F4&__gda__=1473914664_9af601684618cc85087ba120911d6ff8',
	link:'https://www.facebook.com/photo.php?fbid=10153811639323745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Killer Sproket Rye IPA',
	pct:6.2,
	desc:'I haven’t had many rye IPAs but so far they’ve all been great beers',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1660722_10153811639283745_5357595767484756321_n.jpg?oh=16d25c13e68a6d76bb92fab33a51fc2f&oe=57CCEA99&__gda__=1473138012_c6da000f12e1149229ea4a5ba74dd0b9',
	link:'https://www.facebook.com/photo.php?fbid=10153811639283745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anderson Valley Wild Turkey Bourbon Barrel Stout',
	pct:6.9,
	desc:'Better than I expected, but then I was pretty worried about this one',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/6841_10153811639248745_4589085530063719353_n.jpg?oh=552ec7d54519eed2542192a32833a8a2&oe=57D4CC07&__gda__=1473919456_269a2091d5518d8d3af23199ac5a8f6d',
	link:'https://www.facebook.com/photo.php?fbid=10153811639248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington IPA',
	pct:6.4,
	desc:'Another winner from Mornington. Really strong on flavour but without any harshness',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/1933914_10153811639743745_2943766557036716002_n.jpg?oh=5a0da760365fa0197ebf095d82182890&oe=57DE7C01&__gda__=1473212030_f944f1c93f8fe220612cd696a14c5ed6',
	link:'https://www.facebook.com/photo.php?fbid=10153811639743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures Furphy',
	pct:4.4,
	desc:'Saw this a lot in Melbourne and wish it would start showing up in Sydney. Glad to see some more brewers making Kölschs',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12509006_10153811639708745_4922522512256088245_n.jpg?oh=7c1f0f32e901b0d35d6b562855239dc3&oe=57E6C615&__gda__=1474371235_824a673250a3157be787e5c1a126ed10',
	link:'https://www.facebook.com/photo.php?fbid=10153811639708745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Eelriver Amber Ale',
	pct:4.5,
	desc:'Nothing much to say about this one',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/1930332_10153811639763745_6829727140926050001_n.jpg?oh=4380145f2ec3c258071d1351e0f0daf7&oe=57DCDA72&__gda__=1474417854_2ba5292a232d44bf9b43ee93a9a33014',
	link:'https://www.facebook.com/photo.php?fbid=10153811639763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pedlars Pale',
	pct:5.3,
	desc:'All round decent pale ale',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10649831_10153811640038745_8117596568326792946_n.jpg?oh=9bfc168847f8a13da8a61ea50cc37885&oe=57E40484&__gda__=1474425446_e9f5046cb3b940849b13fcb579adb636',
	link:'https://www.facebook.com/photo.php?fbid=10153811640038745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'2 Sorelle',
	pct:5.5,
	desc:'A strange looking beer but has a lovely mild Belgian taste',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/q85/p480x480/12509130_10153811640153745_7506807419110071415_n.jpg?oh=19b2478834c4eacc7507a75ddd3cf1d4&oe=579C40E3&__gda__=1469938216_391131b92e1ba9c24f5631c5d553e1bd',
	link:'https://www.facebook.com/photo.php?fbid=10153811640153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pact pale ale',
	pct:5.2,
	desc:'Another pale ale that falls short. Seems like too many Australian pales are targeting the lager audience',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/1923172_10153811640033745_626679474657757195_n.jpg?oh=cc04f63c926501c145a447989ed71aac&oe=57E2B17B&__gda__=1473977705_adc86b8734f36ecd21226dbf8410fe50',
	link:'https://www.facebook.com/photo.php?fbid=10153811640033745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita Amber',
	pct:4.5,
	desc:'An ok beer but there was a slight tang that I didn’t like. I feel like this brewery has so much more to offer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1434_10153811640518745_1774691229893967268_n.jpg?oh=f7c5f9822df608ea906de14953cc1b9d&oe=57E1D9EF&__gda__=1472832324_d4f4cc933efba50b56d884e3f7f3e0c1',
	link:'https://www.facebook.com/photo.php?fbid=10153811640518745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Scorcher Summer Ale',
	pct:4.6,
	desc:'Fairly inoffensive lager. Can’t complain',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1929791_10153811640558745_2017001779885811496_n.jpg?oh=0fd54229a02695adfad43c702c2ac8b2&oe=5799D401&__gda__=1474226851_5e2a2a56d8d16e7c90c307ae60396766',
	link:'https://www.facebook.com/photo.php?fbid=10153811640558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Royal Dutch Post Horn Lager',
	pct:4.3,
	desc:'It’s beer',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-0/p480x480/1936964_10153811640493745_4599335124953015175_n.jpg?oh=0d98bb7d7b757869c34b5a6b7eb0d1b6&oe=57D5A599&__gda__=1473237640_bf9e925886fe7f5b26c1ac99439aa1cd',
	link:'https://www.facebook.com/photo.php?fbid=10153811640493745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mad Abbot Christmas Ale',
	pct:11.5,
	desc:'Slightly syrupy. Gives that nice warmth that makes sense at Christmas. Just not in Australia. Still great flavour all round',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717228_10153890412513745_5272405049843729399_n.jpg?oh=3f025efca28a62073e363841ca7f1f7d&oe=57C9AE1A&__gda__=1472866019_a1ac6081ce21f43b6cd1fdc1b45ecc1e',
	link:'https://www.facebook.com/photo.php?fbid=10153890412513745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sunburnt Irish red ale',
	pct:5.0,
	desc:'There’s a fair bit of flavour but it’s just harsh. Not my cup of tea',
	score:4,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12734008_10153890412458745_3823076669808581993_n.jpg?oh=29566dcc614fedb6078fa31bc8dbd6b6&oe=57E477D6&__gda__=1473730863_03963608099ffc3e3260dc44d5e1f613',
	link:'https://www.facebook.com/photo.php?fbid=10153890412458745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Garage Project La Calavera Catrina',
	pct:6.9,
	desc:'I may be unique in that I find that chilli and beer are a perfect combination; and this is the best one I’ve had so far',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12705503_10153890412498745_7528959077834200322_n.jpg?oh=4aea665b90074621de35ec20c0b2970e&oe=57C87022&__gda__=1473986779_9c4a046d29ee7b1c7a36d4398e3696f8',
	link:'https://www.facebook.com/photo.php?fbid=10153890412498745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'MOA Session pale ale',
	pct:4.7,
	desc:'A little bit harsh for a session beer',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717761_10153890412778745_1469082473536049223_n.jpg?oh=6d6db35b9a2781b338c1550474aee7fc&oe=57C70F3D&__gda__=1474606532_8149a74bb09189673e871b41dcd03dee',
	link:'https://www.facebook.com/photo.php?fbid=10153890412778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Nail Golden IPA',
	pct:7.0,
	desc:'A little too much bitterness without the flavour to back it up',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12733411_10153890412873745_394127344743781782_n.jpg?oh=59ac2f20d37282c518aaa90c2637f48c&oe=57D8F817&__gda__=1469779739_5de4aef02698cdbd1784fbc3ef09904b',
	link:'https://www.facebook.com/photo.php?fbid=10153890412873745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lazy Yak',
	pct:4.2,
	desc:'Pretty standard',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/12494917_10153890412913745_8466195884285998669_n.jpg?oh=88446710751a953b652e9caac9b117d7&oe=57DF384F&__gda__=1473688313_7b8b4073770ecfd113d423d8370d69b6',
	link:'https://www.facebook.com/photo.php?fbid=10153890412913745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'St-ambroise Apricot wheat ale',
	pct:5.0,
	desc:'The apricot is very faint but kind of interferes with the other flavours in an unpleasant way',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/12687816_10153890413098745_7756341127358562624_n.jpg?oh=f604a890796c40b8feb0e777f8200b1d&oe=57C78C29&__gda__=1474358731_c684717ef3d134199d73490d5b092fb8',
	link:'https://www.facebook.com/photo.php?fbid=10153890413098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rye hard IPA',
	pct:6.3,
	desc:'Super bitter without a bold IPA flavour. Sadly the awesome name doesn\'t translate into flavour',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12717260_10153890413303745_2949419762809562441_n.jpg?oh=a0e1d014eca0e0b495c96cb3019e0f68&oe=57CAEB79&__gda__=1469802863_cf91981383355eb248eacdc9225e4c30',
	link:'https://www.facebook.com/photo.php?fbid=10153890413303745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Windhoek',
	pct:4.0,
	desc:'Eastern European maltyness. Ok for a cheap beer',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12715222_10153890413318745_2007894643886260840_n.jpg?oh=80a1a2c1e62133c5fe5c6725cddeae1a&oe=57D2AFB1&__gda__=1472684616_a199963818f2b3cf85f7fdaab86165a5',
	link:'https://www.facebook.com/photo.php?fbid=10153890413318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke sprocket',
	pct:6.6,
	desc:'Really nice hop profile for a flavoursome IPA',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/q83/p480x480/12743992_10153890413553745_2836285406574144058_n.jpg?oh=1402879f2894fb29ffc8caaf2c65e117&oe=57E5CB9B&__gda__=1474635880_0ae25027b39ee2323841418af3e04e16',
	link:'https://www.facebook.com/photo.php?fbid=10153890413553745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Crankshaft',
	pct:6.0,
	desc:'Really strong on the hops, just a little too bitter',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12744268_10153890413753745_5060146557255132828_n.jpg?oh=37a2a4f0227b604e8171d9e1e31333b9&oe=57E6BF99&__gda__=1472788111_d0e31cee496b7f88daf97f3fd199e279',
	link:'https://www.facebook.com/photo.php?fbid=10153890413753745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke PSI',
	pct:10.0,
	desc:'Very sour and bitter. Not for me',
	score:3,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/11229820_10153890413723745_4413328230475725119_n.jpg?oh=a68afe2e6fd6a16687322371ae31278b&oe=57CEEE11&__gda__=1472636398_91a3629c4dc19b3799b2b4fe2aa08118',
	link:'https://www.facebook.com/photo.php?fbid=10153890413723745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bentspoke Cluster 16',
	pct:16.2,
	desc:'Like a normal IPA distilled into a super potent form. Too much for me right now but I should retry',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12741979_10153890413793745_6934869662046573410_n.jpg?oh=f9a661fb9057432a283b9dbedb78ab84&oe=57D3028E&__gda__=1474719607_d673eabfe210cf295293ac0d43609185',
	link:'https://www.facebook.com/photo.php?fbid=10153890413793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed californicator IPA',
	pct:7.5,
	desc:'A textbook IPA. Bitter with a strong hop flavour. I just picked it because of the bears having sex on the label',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717177_10153890413993745_4407733928412012176_n.jpg?oh=ddee3caed737764c9e65f1b03c8839bd&oe=57DC3AB9&__gda__=1473489984_341fa5fe1ec4907c9b7b1b3bff7baf19',
	link:'https://www.facebook.com/photo.php?fbid=10153890413993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little brewing Galaxy IPA',
	pct:6.5,
	desc:'Low on bitterness, high on aroma. Can\'t decide between this and the citra',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12688166_10153890414098745_93931054277212370_n.jpg?oh=e49cbde64c8a52b3f9c207776349c031&oe=57DF00FC&__gda__=1474793537_9f4d8f78a8f3ff1eb7fae806b224de54',
	link:'https://www.facebook.com/photo.php?fbid=10153890414098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen from the vault',
	pct:5.4,
	desc:'Such an amazing sour lambic. The nerd reference is just a bonus',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/12687895_10153890414198745_3642229716769396500_n.jpg?oh=71a1aca333f6bdb59abb262d49ae78d9&oe=57D08649&__gda__=1469960434_cd3346c299962460d37c7293cff25eda',
	link:'https://www.facebook.com/photo.php?fbid=10153890414198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen sequoia',
	pct:6.2,
	desc:'Listed as an amber but kind of like an IPA but a little smoother',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12733610_10153890414378745_2084592148299538325_n.jpg?oh=1b1405c1f7dbb63598c798934aa0c3fd&oe=57CA43F6&__gda__=1474656265_3403f483adfb895044b250b960e62a9b',
	link:'https://www.facebook.com/photo.php?fbid=10153890414378745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen velvet cream',
	pct:6.6,
	desc:'Like a Guinness with a little more coffee flavour',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12705540_10153890414573745_7427353905568782339_n.jpg?oh=5bf0baa312dd76b75cd8024a158e0692&oe=57D45906&__gda__=1473658879_879e679a46f396665fb9dbf0a5316b84',
	link:'https://www.facebook.com/photo.php?fbid=10153890414573745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wig & pen Duncan',
	pct:3.4,
	desc:'Perhaps one of the mildest beers I\'ve ever had but has a great balance between sour and salty. Deducting points because it\'s a mid strength',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12733543_10153890414603745_2708879129886926163_n.jpg?oh=4cb22726fceb206b8699c98bbec0338f&oe=57D12DCD&__gda__=1474160948_b5ea6d146e6be7a361444a2e5fc59ed0',
	link:'https://www.facebook.com/photo.php?fbid=10153890414603745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Asahi dry black',
	pct:5.5,
	desc:'A rather sweet taste compared to the regular asahi',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/942864_10153890414673745_1846063327846189238_n.jpg?oh=0d117206182f0a941e10a061426e8d50&oe=57C81E80&__gda__=1473180006_dd8db81c30d30c9f59f293ac5c0c1c9b',
	link:'https://www.facebook.com/photo.php?fbid=10153890414673745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wet hopped oatmeal ale',
	pct:4.3,
	desc:'A lot more plain than I expected. There\'s a really slight oat aftertaste but I was hoping for it to dominate the beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12742769_10153890414963745_1738049076033297377_n.jpg?oh=fa4cc60f80e6c0e4c46d48897674714c&oe=57D52EDC&__gda__=1474553034_05cfc99be1dcb30b10511a9f693c9dd9',
	link:'https://www.facebook.com/photo.php?fbid=10153890414963745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Single-take session ale',
	pct:4.5,
	desc:'Perhaps not the best beer at 10am. The Belgian flavour seemed a bit too wheaty',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12715222_10153890415008745_8479217372208836383_n.jpg?oh=c778cae3084bc5bf1630372451984e92&oe=57D28F77&__gda__=1474494862_1886b9cea3de999609d19463d9eea60b',
	link:'https://www.facebook.com/photo.php?fbid=10153890415008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tecate',
	pct:4.5,
	desc:'Pretty plain lager, easy drinking. +1 because of the giant can',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12728804_10153890415018745_4089268131902727213_n.jpg?oh=b40a35091e3b8d1bf18fb00e05c2e6c2&oe=57D919F4&__gda__=1473655053_29d408870044ed448c046d0ef8b2b5d7',
	link:'https://www.facebook.com/photo.php?fbid=10153890415018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie boys gunnamatta',
	pct:6.5,
	desc:'Amazingly floral but with so little bitterness. Has a slight spicyness as well which balances perfectly',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12646945_10153890415153745_1313474125480375485_n.jpg?oh=8a44f3f59584f9ac5eafd6f6debb2275&oe=57E34831&__gda__=1474701768_aacf72cd030aee171fe79ae78a7fad45',
	link:'https://www.facebook.com/photo.php?fbid=10153890415153745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum capital pale ale',
	pct:4.7,
	desc:'A little tangy for a pale but still nice. Though on further tasting I\'ve found some bottles to be a little bit too tangy and tastes more like an imperfection than a feature',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717222_10153890415308745_1813544797541172385_n.jpg?oh=370587ab659918abd33feb6bb8156ff8&oe=57E63200&__gda__=1474540537_328fa526b63639c568bba1c75cd9507c',
	link:'https://www.facebook.com/photo.php?fbid=10153890415308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Little creatures dog days',
	pct:4.4,
	desc:'Surprisingly flavourful for a summer beer. Nice little tang to it',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12717186_10153890415423745_6451428281725925044_n.jpg?oh=db3114a59df838da6a3899eb1ca9e6c0&oe=57C90D32&__gda__=1473564452_2e3348511af6a028b2f64712e648d0e1',
	link:'https://www.facebook.com/photo.php?fbid=10153890415423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tradewind lager',
	pct:4.4,
	desc:'Easy drinking lager. Good for an all day drink',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717308_10153890415688745_8114544610484440853_n.jpg?oh=97b4384fb5f861422e17c35621b6940c&oe=579D0F93&__gda__=1469945962_dced2061ac64f95a2ba790fc92f8d23d',
	link:'https://www.facebook.com/photo.php?fbid=10153890415688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Big shed Kol schisel',
	pct:4.2,
	desc:'Fairly plain and easy drinking',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12715804_10153890415748745_782298131807112307_n.jpg?oh=939362a062758b72dd8488a3b039ea59&oe=57D39515&__gda__=1469961668_cea7e48efe56d6eb3550f80d3b0bdab4',
	link:'https://www.facebook.com/photo.php?fbid=10153890415748745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tortured gum stinger',
	pct:4.8,
	desc:'kind of tart but sits in a strange place like it can\'t decide what to be',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12717321_10153890415758745_9148183600742438871_n.jpg?oh=ded0c6b3fc207e0d6ff5e8ee05ecadeb&oe=57D33552&__gda__=1473623467_f51b9778afcb17e7ace6c73590cdafcd',
	link:'https://www.facebook.com/photo.php?fbid=10153890415758745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bristol beer factory independence',
	pct:4.6,
	desc:'The description sounded good but didn\'t quite hit that mark',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12741906_10153890416078745_2509646553682533650_n.jpg?oh=c395a8d2b9aff45614bd043d0ee2cb0b&oe=57E0B8FF&__gda__=1469837545_ab2b0904308d892e568b9a17e4a402d9',
	link:'https://www.facebook.com/photo.php?fbid=10153890416078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'HopDog cosmic highway',
	pct:4.8,
	desc:'Well named, you can\'t quite pick what you\'re drinking. Not bad but fails to master any category',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12744551_10153890416133745_1898256782764708907_n.jpg?oh=6188e44f5073c7fd01ca603b78779907&oe=57E5CA9E&__gda__=1474199432_e1786479e1f70075ec15c85fb72faffc',
	link:'https://www.facebook.com/photo.php?fbid=10153890416133745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Palm hop select',
	pct:6.0,
	desc:'I expected more, there\'s a slight metallic taste which shouldn\'t be in a nice beer',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12742633_10153890416108745_3638813966682726331_n.jpg?oh=36d8b115b3c46aecf53684cad53168ec&oe=57E17BED&__gda__=1474147092_4464be5cec121ff588669a6c79f8c3aa',
	link:'https://www.facebook.com/photo.php?fbid=10153890416108745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside othello\'s curse',
	pct:9.0,
	desc:'Too harsh on the tongue. The one time I\'ve wanted a smaller bottle',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12733449_10153890416838745_3402335338987277776_n.jpg?oh=0fdc84893e99672513eb9d58183c8b6c&oe=57E49DC1&__gda__=1473521976_17dfe236b9ae55ee31a8650090b15378',
	link:'https://www.facebook.com/photo.php?fbid=10153890416838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Abita jockamo',
	pct:6.5,
	desc:'Too harsh, this brewery is still yet to win me over',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/12718283_10153890416898745_6096850790027178927_n.jpg?oh=3a5afcd913503eb54414d7dfc54f4dee&oe=57E29646&__gda__=1472722041_a1a0a2483584f3b71e20f1d80c719b6b',
	link:'https://www.facebook.com/photo.php?fbid=10153890416898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brontide smooth black ale',
	pct:5.0,
	desc:'Started off a bit harsh but was a lot better than other black ales. Makes me want to try more dark beers',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12734008_10153890416878745_633217613773642603_n.jpg?oh=1af5c5b071d0ac84f19b03c99148ad08&oe=57999A09&__gda__=1469976536_779ed19eef81badb5b4eebbac0adfce2',
	link:'https://www.facebook.com/photo.php?fbid=10153890416878745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rodenbach',
	pct:5.2,
	desc:'Surprisingly tangy with very little bitterness. Worth a try',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12715222_10153890417253745_2655298397910190348_n.jpg?oh=125c733a4e1d1e763d40e58f483c1c7a&oe=579DB1FA&__gda__=1472791020_c3dcdeec82d3d5126659086df77ca8aa',
	link:'https://www.facebook.com/photo.php?fbid=10153890417253745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weihenstephaner pils',
	pct:5.1,
	desc:'Refreshing but not my favourite flavour',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12717710_10153890417503745_4345190063055237739_n.jpg?oh=61c43302d70004fff504f458b162849c&oe=57CCFF09&__gda__=1469666335_0237859862d47eba4fd0bcced57b7681',
	link:'https://www.facebook.com/photo.php?fbid=10153890417503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shepherd Neame IPA',
	pct:6.1,
	desc:'I’m always disappointed by English IPAs since the flavour I want from an IPA is more akin to the American interpretation with much more floral hops',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12729064_10153890417368745_6907793566119928582_n.jpg?oh=3534af2756e7b6320ca75d89e5bb90fa&oe=57CC96E5&__gda__=1473196787_abebb711f514b9736163c922a33b3f8b',
	link:'https://www.facebook.com/photo.php?fbid=10153890417368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Red horse beer',
	pct:7.0,
	desc:'Nicer than expected. Has a slightly spicy finish',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12744494_10153890418648745_513314091064162487_n.jpg?oh=db5bafce1f1864628a27d92e14a2e0da&oe=57CBDBEB&__gda__=1469687866_dd6fffd4954b90134b1ebdd3832b7933',
	link:'https://www.facebook.com/photo.php?fbid=10153890418648745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Bridge road little bling',
	pct:3.4,
	desc:'Not tasty enough to justify the low alcohol',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/12744494_10153890418973745_1506888197203194129_n.jpg?oh=487b74e94bc599da5f8c6a570238f50d&oe=57E2F452&__gda__=1472635404_779d7343137b06adfc8587fbfe49066a',
	link:'https://www.facebook.com/photo.php?fbid=10153890418973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Molson Canadian',
	pct:5.0,
	desc:'Crisp and refreshing but nothing special',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12728991_10153890418838745_7409486003049273062_n.jpg?oh=58f284bd116c183bdad52a21512388de&oe=57CFB478&__gda__=1473542510_e90fc778088aab5d246a733fed1e0b4b',
	link:'https://www.facebook.com/photo.php?fbid=10153890418838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeasty boys hud-a-wa strong',
	pct:6.8,
	desc:'An interestingly strong flavour but it maintains a smooth finish',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/q81/p480x480/12729183_10153890419403745_8807635240820254136_n.jpg?oh=d48215c7641976edb6cdf8ac7921afa8&oe=57E1A683&__gda__=1472955520_aa95fc3a6e537d62c825b489d420f2fd',
	link:'https://www.facebook.com/photo.php?fbid=10153890419403745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont kölsch',
	pct:4.6,
	desc:'I love a good kolsch. So easy drinking but without being flavourless',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/q81/p480x480/12745536_10153890419543745_6014336509869834605_n.jpg?oh=0138ca1d1c97900e3161427ce949a389&oe=57D89C35&__gda__=1473504198_bebcba5f60b032d50f74e8e068337cb7',
	link:'https://www.facebook.com/photo.php?fbid=10153890419543745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Blackfont copper ale',
	pct:4.0,
	desc:'The final sip of this beer made me sad that it was gone',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12715379_10153890419508745_5707512389210281014_n.jpg?oh=c16b4fae21e8fffc5e160d57401e9870&oe=57E10BC2&__gda__=1469765844_561ace1df6b7dc21dd2ee671aae35892',
	link:'https://www.facebook.com/photo.php?fbid=10153890419508745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch big Paul\'s mango IPA',
	pct:6.1,
	desc:'The mango flavour doesn\'t overpower what is already a fantastic IPA',
	score:9,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12728900_10153890419808745_8114701954738943189_n.jpg?oh=a9569dcdbb31941de0de078e9543e4cd&oe=57DB719B&__gda__=1469699981_389d1fa2ce3d5ccd812b2272163aece6',
	link:'https://www.facebook.com/photo.php?fbid=10153890419808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman Albo corn ale',
	pct:5.5,
	desc:'Pretty much a lager. Much less exciting than I thought',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12728843_10153890420703745_1906734589373356822_n.jpg?oh=d87b5cbddfccdbfef425dcefd331d312&oe=57C983FB&__gda__=1473487341_370f10dc81074fd8846e75ce231f8641',
	link:'https://www.facebook.com/photo.php?fbid=10153890420703745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Willie the boatman old salty gose',
	pct:4.9,
	desc:'Perhaps the saltiest beer I\'ve ever tasted. But once the initial salt is gone there\'s a really pleasant flavour without the normal beer bitterness',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12745969_10153890420683745_2326162512188830203_n.jpg?oh=63a3311953561d8d39dd26a855253533&oe=57E28439&__gda__=1473565999_4a1a95331f4111b95f2314ea238f9d1a',
	link:'https://www.facebook.com/photo.php?fbid=10153890420683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven Twisted Thistle IPA',
	pct:5.6,
	desc:'Started off with a bit of a tang but seemed to lose it towards the end',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/943951_10153890422103745_2064605675608289445_n.jpg?oh=6cf6fa932a0a58312f21f2e693dd0a2f&oe=57E2D810&__gda__=1469751395_8ae837df1b95fa3bcc7d549a73fd15a7',
	link:'https://www.facebook.com/photo.php?fbid=10153890422103745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington brown',
	pct:5.0,
	desc:'Nicely rounded. Another winner from Mornington',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12688382_10153890449953745_3980101759747984162_n.jpg?oh=3bbf64daa1d79e6fc43611c3bb184df1&oe=57D75F45&__gda__=1473672531_7cacff5fba562dc9da172b124ef08590',
	link:'https://www.facebook.com/photo.php?fbid=10153890449953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat pale ale',
	pct:5.2,
	desc:'Really refreshing with the right amount of hop flavour for a pale ale',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12814792_10153966648923745_359987341393808655_n.jpg?oh=a17262e4790c56a74c54a7e00b477fcb&oe=57E7BEB5&__gda__=1469768478_bbcacef1dd2a86813303737eec27c8e1',
	link:'https://www.facebook.com/photo.php?fbid=10153966648923745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'James Squire Swindler',
	pct:4.2,
	desc:'Disappointingly plain',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/936555_10153966649228745_7093539391186290992_n.jpg?oh=6cec3f8f8571f8bfb3f8a3e82a9c061f&oe=57E2B5C2&__gda__=1474796523_89392d349125391ade1c79f6240d332b',
	link:'https://www.facebook.com/photo.php?fbid=10153966649228745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mountain goat hightail ale',
	pct:4.5,
	desc:'Still yet to have a bad beer from mountain goat though they are a bit too similar',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/970226_10153966649058745_8469352202645792973_n.jpg?oh=72ee3dd20eeeee63ea0b167db46f5c53&oe=57E8041B&__gda__=1474721481_4b4877bb1636a2a6a42e18d64fbcc67b',
	link:'https://www.facebook.com/photo.php?fbid=10153966649058745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Karl Strauss Tower 10 IPA',
	pct:7.0,
	desc:'An IPA with a sweet finish',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/12036567_10153966649818745_3762140237584842223_n.jpg?oh=83370eba6ca225000b1f0d953906d785&oe=57D8758B&__gda__=1469687668_a73655196ad05cf6d0aec7bdb2ecb8cc',
	link:'https://www.facebook.com/photo.php?fbid=10153966649818745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Belhaven scottish ale',
	pct:5.2,
	desc:'Scottish ale isn’t one of my favourite styles so I can’t give it a top rating',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/10342506_10153966649853745_2082231274376560811_n.jpg?oh=4fc680fbf24e0ebfd3daf3bab2b57ab3&oe=57D2D036&__gda__=1474181827_10940bc62e790a23f2f11ea420728ee1',
	link:'https://www.facebook.com/photo.php?fbid=10153966649853745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Fóti',
	pct:4.6,
	desc:'Has a really mild ginger taste. The smell is a little strange but the flavour really grows on you',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1918614_10153966650093745_125776627995891948_n.jpg?oh=ddab2ed879e7d4f3085ae37a6da2def6&oe=57C9A572&__gda__=1473675092_07f6e8e9016ff50ed44c1ccc8a640727',
	link:'https://www.facebook.com/photo.php?fbid=10153966650093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante trigo',
	pct:5.0,
	desc:'Surprisingly this cheap beer is one of the better wheat beers that I’ve had. The tang is really well balanced. That said it is a bit light on flavour',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/535112_10153966650528745_107085668519640662_n.jpg?oh=416a4f755523485e28b8da02d3b397d8&oe=579C0AE7&__gda__=1473211529_6748f6180ec4d00c0c3e617b45ada54e',
	link:'https://www.facebook.com/photo.php?fbid=10153966650528745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Westvleteren Blond',
	pct:5.8,
	desc:'A lot lighter on flavour than I expected but then the bottle I have is older than it should be. That said it is perfectly balanced down to the last drop and there’s a hint of some deliciousness there. Not worth the price you pay in this country but I would love to get a fresh case of this',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xal1/v/t1.0-0/p480x480/1625546_10153966650393745_441647493230179601_n.jpg?oh=2e380a83f45249be078af7fb619e33f4&oe=579C89A9&__gda__=1474777562_4ba58bd0a3aa55803cfedb49aacce1db',
	link:'https://www.facebook.com/photo.php?fbid=10153966650393745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Anchor IPA',
	pct:6.5,
	desc:'I can’t enjoy this while eating. The bitterness difference is just too large for my taste buds to cope. Outside of that the bitterness is still a little too strong for the hop aroma',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/75534_10153966650468745_295000144566915941_n.jpg?oh=ab67cd01b187878080c256494734365b&oe=57DCB524&__gda__=1472630524_60c8b516ed9bf0270a1be12ce75ac243',
	link:'https://www.facebook.com/photo.php?fbid=10153966650468745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brew dog Jack Hammer',
	pct:7.2,
	desc:'So much floral and citrus aroma. More bitterness than I would like but once you get used to it the flavour is amazing',
	score:9,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1507888_10153966650763745_3858788343816093746_n.jpg?oh=2584af2c092e8058b04f5369f56b9927&oe=57D10955&__gda__=1473365495_587721ad38f8f1579198818fbedd9f37',
	link:'https://www.facebook.com/photo.php?fbid=10153966650763745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yeastie Boys Dark Matta',
	pct:7.5,
	desc:'Pretty good for a dark beer. Fairly smooth and rich but perhaps a little too bitter',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10347498_10153966651168745_482800618815663484_n.jpg?oh=0646af7da32ffc37cdafef0765c134f0&oe=57CC6FEC&__gda__=1473830612_35c8baa48db33d5b872d8a9e0edad550',
	link:'https://www.facebook.com/photo.php?fbid=10153966651168745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Masters Finest',
	pct:4.5,
	desc:'No flavour except some bitterness',
	score:4,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/10368217_10153966651078745_5301100254520843348_n.jpg?oh=f55b912a3aa2ffc86d64a9dede388c43&oe=57DA36B9&__gda__=1473676583_6fcb62e1a16c4efcfa9ba4176ea32a6a',
	link:'https://www.facebook.com/photo.php?fbid=10153966651078745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Throwback IPA',
	pct:3.5,
	desc:'Great smell but a bit lacking on flavour. A nice session IPA',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/10169445_10153966651248745_4831098313362630542_n.jpg?oh=9b36735beedeb0e83342a9124b7c71e5&oe=5799CC11&__gda__=1473198835_86988c2f037647270e3c55d888511e6d',
	link:'https://www.facebook.com/photo.php?fbid=10153966651248745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Vilkmergės kvietinis',
	pct:5.2,
	desc:'Pretty standard wheat beer',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/10356398_10153966651813745_6716954315521047307_n.jpg?oh=e5cf925c126d54a672fdedf79f868029&oe=57E4E10F&__gda__=1473781785_aecb8dd05dc17c75cba68294492922d3',
	link:'https://www.facebook.com/photo.php?fbid=10153966651813745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Houblon Chouffe Double IPA Triple',
	pct:9.0,
	desc:'Doesn’t really taste much like an IPA, nor is it the best Belgian blonde',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/12494908_10153966651838745_649551942505437131_n.jpg?oh=04abc3ba99e9dd9ad24ab7cafe4ec95e&oe=57D8004D&__gda__=1469731558_7adeffb5ba566a15a76fa627cc08c68a',
	link:'https://www.facebook.com/photo.php?fbid=10153966651838745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lupulus Pale ale',
	pct:4.7,
	desc:'Fantastically flavoured pale ale. Still mild though',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/600415_10153966651858745_4717804169564084978_n.jpg?oh=8735bbf6b1fcf502bbb2d1b6457653c0&oe=57E14B98&__gda__=1473423487_e35238eee2790aaf32a749049eb29076',
	link:'https://www.facebook.com/photo.php?fbid=10153966651858745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head indian brown ale',
	pct:7.2,
	desc:'One of the nicer browns I’ve had',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1545766_10153966653998745_8815895665252384924_n.jpg?oh=23ce21bd4771906c55d9824c918f76c7&oe=57C9701C&__gda__=1473097421_e1b416b9f30f8b8ba2d4a306c82178ad',
	link:'https://www.facebook.com/photo.php?fbid=10153966653998745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Imperial IPA',
	pct:8.8,
	desc:'Hugely fragrant and really tasty',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/62366_10153966653993745_718097065966967009_n.jpg?oh=fecf43dc01d9bd649d42ea8bb248dc9a&oe=57CF7B8D&__gda__=1473784378_75477b640bb646f1a1b58ae0a375ad45',
	link:'https://www.facebook.com/photo.php?fbid=10153966653993745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dogfish head 90 minute IIPA',
	pct:9.0,
	desc:'Really nice flavour. Solid beer all the way',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/1010314_10153966653958745_5103605884788995211_n.jpg?oh=a208843b2fcc01f41e22bca7d8a66a52&oe=57D44517&__gda__=1473386523_5716ceccbd7670a368a4f0789c020b13',
	link:'https://www.facebook.com/photo.php?fbid=10153966653958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Forester bitter amber ale',
	pct:5.2,
	desc:'A little sour but not in a bad way',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/1936970_10153966655368745_7839777973772364383_n.jpg?oh=95fb6910a8252d98c8565a31c8782e7c&oe=57DF632B&__gda__=1472692873_4e6012ab3a299f03a8ae0e3906c1d93d',
	link:'https://www.facebook.com/photo.php?fbid=10153966655368745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Emelisse rye smoked IPA',
	pct:6.2,
	desc:'To me the smokiness gives it some harshness that I don’t like',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/10004059_10153966655363745_2943533530938025216_n.jpg?oh=820cb301cdda652c7f60c085af851cc6&oe=579E1765&__gda__=1473646329_afca2bae2ff0e9444e0c05078f5c4751',
	link:'https://www.facebook.com/photo.php?fbid=10153966655363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life Pale Ale',
	pct:5.4,
	desc:'Had more flavour than anticipated, it’s actually a lot like the IIPA but with less bitterness',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10401879_10153966655348745_3642236879798361206_n.jpg?oh=798c4aa09e8dcb9dd118d04bba5ae0b6&oe=57CFF39E&__gda__=1474695777_6ef5c687733267c8252decd7d3efd73b',
	link:'https://www.facebook.com/photo.php?fbid=10153966655348745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hop Federation Pale ale',
	pct:5.1,
	desc:'Don’t have the best memory of drinking this but it was ok',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/1782025_10153966655578745_4664850473670279145_n.jpg?oh=166e4d9d3fcb1f39149c85c3a55aa20f&oe=57E179EC&__gda__=1474428192_6a89fcec1c9014bd9c20d18761461a3f',
	link:'https://www.facebook.com/photo.php?fbid=10153966655578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Rockpool Pilsner',
	pct:5.0,
	desc:'Crisp but ultimately flavourless. Perhaps I\'ve been having too many IPAs recently',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/1936522_10153966655918745_1071656518415804472_n.jpg?oh=22fabfbd68291f1aef5a7ccbf29370b5&oe=57D68E10&__gda__=1473857749_a9b68874c9f3908983dd7398c1cfbfb7',
	link:'https://www.facebook.com/photo.php?fbid=10153966655918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Hawthorn IPA',
	pct:5.8,
	desc:'Delicious. A little bitter but lots of hoppy flavour',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/580369_10153966656363745_4315787602585071997_n.jpg?oh=655d086cdcfaf164143f092f96af1f89&oe=579D8E7D&__gda__=1472720897_c66c18e7968c2ee7d91ff6f04196f5a0',
	link:'https://www.facebook.com/photo.php?fbid=10153966656363745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prancing pony Amber Ale',
	pct:5.0,
	desc:'Overly bitter and without much malt flavour. Still yet to find a great amber',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/12821411_10153966656918745_380719159889184662_n.jpg?oh=61f45a1a5ba5caf12165dad310515b38&oe=57E7B2FE&__gda__=1473990741_07f922d38f51cd24b5cb6f7fadc235fa',
	link:'https://www.facebook.com/photo.php?fbid=10153966656918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington Imperial Amber',
	pct:7.5,
	desc:'So thick coming out of bottle. The initial taste is bitter but behind that is a strong and sweet flavour that while not what I normally go for is still really nice',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-0/p480x480/10478660_10153966656973745_8240271036615712554_n.jpg?oh=c45e5ab3bfba6e3d0e99975c78848668&oe=579E76E0&__gda__=1473975601_53d2f0f063e3a1f7ae87cae30135474e',
	link:'https://www.facebook.com/photo.php?fbid=10153966656973745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Snow',
	pct:4.5,
	desc:'Almost no bitterness. It\'s got quite a lot of malt flavour as if it wasn\'t left long enough to ferment. Perfect with a spicy dish',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/600298_10153966657628745_4870073187001041055_n.jpg?oh=64ba2f8e307a8ba9cfc83a08d2c9a2c5&oe=57DED0D8&__gda__=1474126346_26154d8e80a9e501e5e08fd93251a1fa',
	link:'https://www.facebook.com/photo.php?fbid=10153966657628745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha freshwater pale ale',
	pct:5.2,
	desc:'Mild on hops but also low on bitterness',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/1934561_10153966658683745_1961182541822640883_n.jpg?oh=8fc202485662456e260d10243889ec5c&oe=57DD50D2&__gda__=1472838915_82036f1ed8591d2362eee253f27502c8',
	link:'https://www.facebook.com/photo.php?fbid=10153966658683745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Extra Bitter Type',
	pct:5.4,
	desc:'It’s bitter and a little malty',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/10403247_10153966658678745_4947349393995850106_n.jpg?oh=194da653db20215c079f15e48fd5e575&oe=579E2D22&__gda__=1469794634_fa3a536fbbcdae758751491d9773ed17',
	link:'https://www.facebook.com/photo.php?fbid=10153966658678745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Weidmann',
	pct:4.2,
	desc:'A little bit more malty than most German lagers',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/10639498_10153966658918745_2502060406104500926_n.jpg?oh=2ea293497a7142d51b8673a998ca8862&oe=57CAA313&__gda__=1472838312_119805c5971875959b1865928f0e928b',
	link:'https://www.facebook.com/photo.php?fbid=10153966658918745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Queen’s Ale Blonde Type',
	pct:5.4,
	desc:'Supposed to be hoppy but it’s just bitter. Feels like it’s missing something',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12832355_10153966659053745_5547402226284326278_n.jpg?oh=c1684a4336969284f33311ca83bebe6e&oe=57D019D5&__gda__=1473519404_d224cdb9dad02c92dcc25f53300652d6',
	link:'https://www.facebook.com/photo.php?fbid=10153966659053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Rye IPA',
	pct:6.0,
	desc:'Smells really good but the taste is a little harsh',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/9185_10153966659098745_8275916423969475463_n.jpg?oh=ac5d0a658ecc4b0ca97e2f19b6f0f21a&oe=57CBA979&__gda__=1473782560_32cb4ade45fbd04de616d1ec8ccff20e',
	link:'https://www.facebook.com/photo.php?fbid=10153966659098745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Cucapa brown ale',
	pct:4.8,
	desc:'It’s not awful but I can’t really get into it',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/12821335_10153966659288745_8654410515493028710_n.jpg?oh=de1565ef2b39057e0dd3fad90d926620&oe=57D5A4F3&__gda__=1473961482_0da9cb4854f9b88b31869489bf613b30',
	link:'https://www.facebook.com/photo.php?fbid=10153966659288745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Sierra Nevada Celebration',
	pct:6.8,
	desc:'Not as fresh as I was hoping but still nice',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/942538_10153966659453745_8399119403482883132_n.jpg?oh=f3f63815a4f84b49072ad2e5e6ccc6b0&oe=57E71368&__gda__=1474498102_592a357b3fa71e5c0f36b116a8b4c3ad',
	link:'https://www.facebook.com/photo.php?fbid=10153966659453745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Jelen pivo',
	pct:4.6,
	desc:'Has a strange smell and a kind of malty taste',
	score:5,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/10398353_10153966659598745_7866549484220940291_n.jpg?oh=27a10f7d782f3e839b43957e5f74fc54&oe=57E1069E&__gda__=1474399723_c496b1731a68423760dd4add0e37157f',
	link:'https://www.facebook.com/photo.php?fbid=10153966659598745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Six strings pale ale',
	pct:4.8,
	desc:'The bitterness is a tad too harsh but it’s nicely hopped',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/10570347_10153966659658745_1644353854355421040_n.jpg?oh=c8286cbc996d7dd70c011ed4af385aa6&oe=57E0CDF8&__gda__=1472769031_c607e7b73f01ca1e806f4694836c91d2',
	link:'https://www.facebook.com/photo.php?fbid=10153966659658745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Lav',
	pct:5.0,
	desc:'Standard malty european cheap lager',
	score:5,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/934134_10153966659898745_3561780875401552010_n.jpg?oh=58a0f036847b20283b0636e2b010182c&oe=57D2143F&__gda__=1473303769_f26cb374758c76c9db1174c84f88f17d',
	link:'https://www.facebook.com/photo.php?fbid=10153966659898745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #1 Pale Ale',
	pct:null,
	desc:'A bit too much yeastyness which overrides the other flavours, this has reduced considerably as the beer has aged. Otherwise rather mild on flavour without much hop punch',
	score:4,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/13015479_10154072539743745_2413857034853958131_n.jpg?oh=890da41cf90912eeaf025f76bc33f240&oe=57DC1B93&__gda__=1469818770_87c74907634b03233ba135f454d7a97b',
	link:'https://www.facebook.com/photo.php?fbid=10154072539743745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #2 Pale Ale',
	pct:3.6,
	desc:'Has a bit of a yeasty smell but it’s covered up a bit by a mild hop aroma. Low on bitterness with a bit of sweetness and not too malty. All round quite drinkable',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/942882_10154072540043745_2361335499708872878_n.jpg?oh=4e2d6208a36d7cffe24b78377455910f&oe=57D05EC4&__gda__=1474370744_e3b5291bdf1c0727dd9ab1daa343d139',
	link:'https://www.facebook.com/photo.php?fbid=10154072540043745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Duel Hoppy Lager',
	pct:4.7,
	desc:'Nicer than I expected, quite a bit of hop aroma coming off this and a well rounded taste',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13015652_10154072540083745_7009465615847756409_n.jpg?oh=38b9633b9e69f8a3a238d429b8e8fbd6&oe=579DBFE1&__gda__=1473083223_24d6f4b726fd4c06d5f9b5ec193cf675',
	link:'https://www.facebook.com/photo.php?fbid=10154072540083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'8bit',
	pct:6.5,
	desc:'Really nice IPA, little strong but a good hop profile',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13062107_10154072540318745_5259423050211336454_n.jpg?oh=f1ca0612aefe139b012d0aa111fcc45d&oe=57D42B97&__gda__=1474819116_9ef5d06bce24f364e076576afa3cd543',
	link:'https://www.facebook.com/photo.php?fbid=10154072540318745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Chop shop pale ale',
	pct:4.7,
	desc:'Lacks on every side. No hops and way too bitter',
	score:5,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13010770_10154072540533745_222338390337149891_n.jpg?oh=92930ccbecadd5c68970cb0ad5eab40d&oe=57D0116F&__gda__=1469926218_6eeb480710140d483d4c85d2ef9dca53',
	link:'https://www.facebook.com/photo.php?fbid=10154072540533745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mornington why so cereal',
	pct:4.9,
	desc:'Really nice. Not too strong on flavour but well balanced. Give it a go if you\'re new to pale ales',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/13062012_10154072540558745_5299069403089933354_n.jpg?oh=34368168ed75ae09a71d9241fe18b7f6&oe=57E149AE&__gda__=1473175789_7d579f3ca706f68309f0367d4b4b80f5',
	link:'https://www.facebook.com/photo.php?fbid=10154072540558745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Yulli\'s seabass',
	pct:4.2,
	desc:'Can\'t pick what the flavour is but I like it. Not as plain as I was expecting',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/13000118_10154072540778745_8031562595698025950_n.jpg?oh=1935c91d2b771642d30bf7801d62f95e&oe=57DEB29B&__gda__=1469738350_9fb1fc49b6d8eaf6cd1d11e0571beffd',
	link:'https://www.facebook.com/photo.php?fbid=10154072540778745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Gage roads sleeping giant',
	pct:5.4,
	desc:'Very little hop flavour, mostly just bitterness. Somewhere underneath there’s a nice flavour trying to break through',
	score:6,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/p480x480/13076528_10154072540798745_8824066737110537781_n.jpg?oh=3e81b8b6736eb885accea4fed3485585&oe=57D88929&__gda__=1469992257_a7506c1eb30573a6adcba3c9b2fe6502',
	link:'https://www.facebook.com/photo.php?fbid=10154072540798745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes mirror pond pale ale',
	pct:5.0,
	desc:'Could be a little hoppier but it\'s still smooth and sweet with a nice hint of caramel',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13007147_10154072540863745_3547228142622250194_n.jpg?oh=e3d3540839421015cd19b3cb34af7429&oe=57C6DAA8&__gda__=1472948602_7a0c690099fe50e815bf750c2b92c1dd',
	link:'https://www.facebook.com/photo.php?fbid=10154072540863745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Mont Blanc Génépi',
	pct:5.9,
	desc:'Kind of tastes how it looks. Like a like cordial mixed with beer. The little bit of spice ties it together and makes for a nice sweet beer',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13001187_10154072541123745_7747103315223526141_n.jpg?oh=9c661c278e429bd8597be023417f9b51&oe=57D3DC28&__gda__=1474614778_753e4fdd4d61e420d4b8dbb12b84d689',
	link:'https://www.facebook.com/photo.php?fbid=10154072541123745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Evil twin Falco',
	pct:7.0,
	desc:'A little more bitter than I was hoping but has a nice hop finish',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13043371_10154072541163745_2624244242033439826_n.jpg?oh=4533ec8911f2f410080a440bb8155253&oe=57DA4B8F&__gda__=1473342004_19733b3f52d8fc8e6fb758e0cdb5c1c7',
	link:'https://www.facebook.com/photo.php?fbid=10154072541163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Deschutes fresh squeezed IPA',
	pct:6.4,
	desc:'Really citrusy, a little too bitter but still a great drink',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/q85/p480x480/13015236_10154072541183745_1805235121131069529_n.jpg?oh=5eb60fdb63d06ba0d8c0cf5fe6457af1&oe=57DD0274&__gda__=1473638134_ccf5f3612c5b266659bd19bcabca029a',
	link:'https://www.facebook.com/photo.php?fbid=10154072541183745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Liger',
	pct:6.9,
	desc:'Fizzy and dark and sweet',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/13012764_10154072541233745_130102072018590790_n.jpg?oh=64db615743f057b41160a1042e0a330c&oe=57D42EE2&__gda__=1473227849_4cd0eee3e52508b3e8d366aa7350db78',
	link:'https://www.facebook.com/photo.php?fbid=10154072541233745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Tuatara Ardennes',
	pct:6.5,
	desc:'The Belgian flavour makes it taste stronger than it is. It’s fairly good but there are so many better Belgian beers out there that it’s not doing enough to bring me back',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/13239986_10154147273578745_3214682018646558241_n.jpg?oh=b71c51f51f87ad973a4e112bd75b511d&oe=57D4EDA7&__gda__=1473236562_cd753ae1979cb866c5ae8d0b0ec0f6b7',
	link:'https://www.facebook.com/photo.php?fbid=10154147273578745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Panhead APA',
	pct:5.7,
	desc:'Interesting smell but the taste is covered up too much by the bitterness',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/13239385_10154147273588745_8270989544774283167_n.jpg?oh=06ed7ee8df0a73eaa790d16d9edf71a5&oe=57E3DA57&__gda__=1473974946_a23b3530de71f40c195876010ff1d195',
	link:'https://www.facebook.com/photo.php?fbid=10154147273588745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew #3',
	pct:4.6,
	desc:'Pretty good all round. Has a nice sweetness which balances well against the slight citrus hop profile',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/13221450_10154147273613745_1009157283682000956_n.jpg?oh=a25c9683ecc50c1e7dc1cf08b2ebc4dc&oe=57CDCBDB&__gda__=1474047690_b44834a2674322295c17329aad4518b6',
	link:'https://www.facebook.com/photo.php?fbid=10154147273613745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beirut beer',
	pct:4.6,
	desc:'Tastes like a cheap Eastern European beer',
	score:5,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/13230125_10154147273808745_8826087779815602957_n.jpg?oh=7d475941821053064cfb9ae0f497f779&oe=57DBAC87&__gda__=1473514011_1b3bfbc2413580152bf85f5387dba3d8',
	link:'https://www.facebook.com/photo.php?fbid=10154147273808745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate life Hopco NZ pale ale',
	pct:4.8,
	desc:'Doesn’t have the same floral taste that their other beers have. It’s still hoppy but more of the bitterness is coming through',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-0/p480x480/13238891_10154147274018745_2218348989364359233_n.jpg?oh=7480682d024fd05efe7840a10fb19dab&oe=57DB4FC2&__gda__=1474738720_f6885655556a62e88a5b659f3b43c00d',
	link:'https://www.facebook.com/photo.php?fbid=10154147274018745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone coffee milk stout',
	pct:5.0,
	desc:'Creamy, rich and oh so dark. The coffee flavour is mild enough for me to enjoy',
	score:8,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xpl1/v/t1.0-0/p480x480/13241124_10154147274053745_6203121244694342567_n.jpg?oh=dab269f30607046db030cf2f667bff70&oe=57DD754E&__gda__=1474642801_e34cb4df4178d61e60598bf40320f92c',
	link:'https://www.facebook.com/photo.php?fbid=10154147274053745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Golden road ride on IPA',
	pct:6.4,
	desc:'Huge floral hop aroma. Perhaps just a tad too bitter but very enjoyable',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p480x480/13237689_10154147274093745_5794071140903192166_n.jpg?oh=b09d5cfd0cb0931d1be03892fe2060cc&oe=57CDBBB7&__gda__=1472904886_a842f3820660f4d09545f47a3352ebfa',
	link:'https://www.facebook.com/photo.php?fbid=10154147274093745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Pirate Life IPA',
	pct:6.0,
	desc:'Another great beer from Pirate Life. Nicely hoppy',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xlf1/v/t1.0-0/p480x480/13239358_10154147274213745_2832924558842747402_n.jpg?oh=317a7c856463012b1350253ff4ba5596&oe=57DC755C&__gda__=1473041344_a4e35a3acd9a1e83a154a9a989a828cb',
	link:'https://www.facebook.com/photo.php?fbid=10154147274213745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Delirium Argentum',
	pct:7.0,
	desc:'Had a slightly metallic taste to start but otherwise it’s a really clean and crisp beer. Much milder in taste than other Belgian beers. I’m beginning to get the feeling that Belgian IPAs don’t have the hop profile that I expect',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-0/p480x480/13256284_10154147274343745_1195107616388760793_n.jpg?oh=29b5cb46a26fc3627816229f8bf02a1f&oe=57CFB88C&__gda__=1474841694_864cdcbdcfbfd826902ccbf4b438729b',
	link:'https://www.facebook.com/photo.php?fbid=10154147274343745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Wayward brewing rose kölsch',
	pct:5.1,
	desc:'Great kölsch. Crisp and clean but keeps you coming back',
	score:7,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/13240606_10154147274448745_3348024943795201690_n.jpg?oh=bb213f1bce1b88fe6c088baaa3f76d55&oe=57D7B8AF&__gda__=1473681388_acb9a75ad455573269f09cad33330d57',
	link:'https://www.facebook.com/photo.php?fbid=10154147274448745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Prickly Moses harvest ale',
	pct:5.8,
	desc:'Pretty plain ale',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfl1/v/t1.0-0/p480x480/13265938_10154147274608745_6314635329318943118_n.jpg?oh=764588d617732dcd45a6607b341496d7&oe=57D8549D&__gda__=1473279235_30e20b78bdadcfc5a6bc1e8b3eb3fe45',
	link:'https://www.facebook.com/photo.php?fbid=10154147274608745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Holgate Norton lager',
	pct:4.3,
	desc:'A very sweet lager with much more flavour than your average lager',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/13232982_10154147274688745_9124860390189621549_n.jpg?oh=871608d9c206bd291e7f064410b13369&oe=57E74237&__gda__=1474608840_8410380cd84dd47961a179b2dc94e3c6',
	link:'https://www.facebook.com/photo.php?fbid=10154147274688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Skorubrew stout #4',
	pct:5.4,
	desc:'Has a yeasty and hoppy smell like my other beers but with a mild stout smell. The stout taste is milder than when I bottled it. To me it’s a great because it doesn’t have the kick like other stouts but this may disappoint those who look for that in a stout',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/13244856_10154147274693745_6588882774543071375_n.jpg?oh=bb225c0fc619a26b993a9e62356774fc&oe=57CCF607&__gda__=1472698878_9ee23745f2920ade81fae9dbbfe92ae6',
	link:'https://www.facebook.com/photo.php?fbid=10154147274693745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch smoking Russian party guy',
	pct:3.2,
	desc:'Quite mild on the stout flavour, sweet and tasty',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13256284_10154147274788745_4004743103375627628_n.jpg?oh=1594644fa54490c52433dbeafb8193c7&oe=57CB032C&__gda__=1474475415_e4b53bc916337d35130a3b231fd74edd',
	link:'https://www.facebook.com/photo.php?fbid=10154147274788745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch American pale ale',
	pct:5.2,
	desc:'Pretty good pale ale. Nothing super exciting',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13254124_10154147274953745_3000260124675662961_n.jpg?oh=6d01869fc2ffce7054ecf00b93549809&oe=57E404C7&__gda__=1473797745_6c54b5e3f6b2fdd52f9eb1c4f04fba81',
	link:'https://www.facebook.com/photo.php?fbid=10154147274953745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch in a pickle',
	pct:4.2,
	desc:'My first cucumber beer. Tastes a lot like pickles. It\'s interesting but it wouldn\'t bring me back',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xlt1/v/t1.0-0/q81/p480x480/13233015_10154147274988745_881393278262650589_n.jpg?oh=20698abae5ff2ad5b0267bc26f1e704b&oe=57D92D6B&__gda__=1469883424_8ddc73f17d465e3eabf6c80f8d90318c',
	link:'https://www.facebook.com/photo.php?fbid=10154147274988745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Batch seeing red IRA',
	pct:7.1,
	desc:'Pretty much a red IPA. Nice flavour but doesn\'t have as much floral aroma as I like',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/12871500_10154147275008745_8435099638862141389_n.jpg?oh=e4d21bf0dc52262b2b0961dea67c3800&oe=57C99546&__gda__=1473279000_f62835e71c3f7f868e736fdf9f217b6e',
	link:'https://www.facebook.com/photo.php?fbid=10154147275008745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter Marnie\'s majority ale',
	pct:6.4,
	desc:'Nicely floral, not too bitter. All round good IPA',
	score:8,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13241213_10154147275538745_4637541751661074474_n.jpg?oh=d336e86034a209df217107e1c4adc087&oe=57E43A4E&__gda__=1469719544_b28727d2eacbc6f0f539ad9e32ef0660',
	link:'https://www.facebook.com/photo.php?fbid=10154147275538745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter big sur',
	pct:6.7,
	desc:'Strong on flavour, big on hops',
	score:8,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/13230238_10154147276023745_1973175567688158306_n.jpg?oh=ab091aa4793ae4da9dd8e78c78216a32&oe=57D0834E&__gda__=1472620987_f6532ea21ed12d3940bea335a3d6a659',
	link:'https://www.facebook.com/photo.php?fbid=10154147276023745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Shenanigans flight path',
	pct:6.0,
	desc:'Smells like and IPA, tastes like a stout. But still pretty good',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/13239234_10154147275958745_6647175011009867398_n.jpg?oh=eab61d542b18d2d21525a546b5661fee&oe=57999E9C&__gda__=1474366914_909b863267c49730ab73b06a97397b3e',
	link:'https://www.facebook.com/photo.php?fbid=10154147275958745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'XX bitter',
	pct:6.0,
	desc:'Not as hoppy as the label indicates,  almost European in the maltyness',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13245387_10154147276163745_6894115153068596063_n.jpg?oh=ea87dcbc01e8dc6ec603633f88d1f037&oe=57DA4623&__gda__=1473208216_be788e233b32381c02eb1d07568eb164',
	link:'https://www.facebook.com/photo.php?fbid=10154147276163745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Riverside brewing 88 robust porter',
	pct:6.0,
	desc:'One of the less sweet porters I’ve had but still not bitter. Not my favourite',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/13230311_10154147276338745_1922289556115965636_n.jpg?oh=f5a5f59410d12f4d381d57b210def0d8&oe=57E4DC61&__gda__=1473922423_b4ea283e0e672de2c5846b753fd50e1a',
	link:'https://www.facebook.com/photo.php?fbid=10154147276338745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Pale ale #1',
	pct:4.6,
	desc:'Tastes like a Belgian ale. It’s alright',
	score:6,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-0/p480x480/13267730_10154147276308745_5674622146165558080_n.jpg?oh=a6c58db7e6affced6759c0eab5c07efc&oe=57CD532A&__gda__=1472728636_73eb6b7f101a567aaf9c4e950edfcec0',
	link:'https://www.facebook.com/photo.php?fbid=10154147276308745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Belgian IPA #2',
	pct:5.5,
	desc:'Like other Belgian IPAs it’s not very hoppy',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/p480x480/13238891_10154147276503745_6482757969464081061_n.jpg?oh=8bb5cadbeb0b70b3b8fbbdb538f6fb68&oe=57DA15C2&__gda__=1474309748_decde7766a64369e725affc922a76bba',
	link:'https://www.facebook.com/photo.php?fbid=10154147276503745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dad & Dave’s Pils #3',
	pct:4.4,
	desc:'Pretty good pilsner',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/13254038_10154147276793745_7322916825370233688_n.jpg?oh=1f28d3a7b04db199e6a9bf8a028eeafb&oe=57E23C5C&__gda__=1473594021_d20992b887daf52c1633d7d00905e5e9',
	link:'https://www.facebook.com/photo.php?fbid=10154147276793745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Beachwood road dark harvest',
	pct:6.6,
	desc:'Smells hoppy but tastes stouty',
	score:6,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p480x480/13265923_10154147277158745_2404573365022025413_n.jpg?oh=5620daed42f4d1b999b1f882b93f61dc&oe=579BF87B&__gda__=1474689422_3ce8aa075bb4546b4f5fe1269df0b753',
	link:'https://www.facebook.com/photo.php?fbid=10154147277158745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha fire within',
	pct:5.8,
	desc:'Pretty spot on for what I expect from an amber ale but doesn\'t have a flavour I love',
	score:7,
	img:'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p480x480/13254029_10154147277223745_2166868226944171155_n.jpg?oh=6835666eba61abe6a97cbfd49f6c2514&oe=57E39B48&__gda__=1473854707_f2c655ff409e6b9fb9eade59083ddf79',
	link:'https://www.facebook.com/photo.php?fbid=10154147277223745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Derwent aromatic spelt ale',
	pct:5.9,
	desc:'Only slightly sour and it all comes together well. It\'s not a style that I\'m used to but I do enjoy it',
	score:8,
	img:'https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-0/p480x480/13221636_10154147277423745_6025488422010352804_n.jpg?oh=3c025481ccb3b451dda0211a114865a4&oe=579B5488&__gda__=1472896887_a19c29cd3dfa956dfe5a3afe7127104a',
	link:'https://www.facebook.com/photo.php?fbid=10154147277423745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Grifter Serpents kiss',
	pct:4.4,
	desc:'The slight watermelon taste makes it hard to enjoy the beer. You get used to it but there\'s not a lot of reason to',
	score:4,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-0/p480x480/13256027_10154147277688745_7034538653078229756_n.jpg?oh=f6b088ac2f455544a72bf4304bde4491&oe=57C7F478&__gda__=1474051387_37c29a631d218232c1838f5c6106abb0',
	link:'https://www.facebook.com/photo.php?fbid=10154147277688745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Dark knight porter style',
	pct:4.5,
	desc:'Mild and sweet. Nice easy drinking porter',
	score:7,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/13263768_10154147277768745_7051226245324032886_n.jpg?oh=be95271b171f04f77e38924a39ac2983&oe=57E09606&__gda__=1469955071_260f889b358495bbd4d0c1bdca386053',
	link:'https://www.facebook.com/photo.php?fbid=10154147277768745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Feral karma citra',
	pct:5.8,
	desc:'A little bit too stouty and bitter for me but otherwise good',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-0/p480x480/13241326_10154147277883745_7683110725231850309_n.jpg?oh=de2e28c9d5aae46349ecf1381edbff37&oe=57E732D2&__gda__=1472725900_802598488b3b2b83b0e6f960dbafab0e',
	link:'https://www.facebook.com/photo.php?fbid=10154147277883745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Moo brew single hop',
	pct:4.8,
	desc:'A little bit lacking on the hop side but well rounded. Kind of want to know what hop and malt they use',
	score:8,
	img:'https://scontent.xx.fbcdn.net/v/l/t1.0-0/p480x480/13226775_10154147278083745_8353755751636156502_n.jpg?oh=057447d04e7322626ddfb0000f07393a&oe=57D86EC2',
	link:'https://www.facebook.com/photo.php?fbid=10154147278083745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Brabante lager',
	pct:5.2,
	desc:'Pretty plain lager, slightly better than your standard Australian beers',
	score:6,
	img:'https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/p480x480/13256370_10154147278128745_521618674616706499_n.jpg?oh=30d66c118299698584af6f9ce25dd6a4&oe=57E3BFF7&__gda__=1473709606_a32f8de91af43b3cc0d47192e4ab0dc9',
	link:'https://www.facebook.com/photo.php?fbid=10154147278128745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Stone IPA',
	pct:6.9,
	desc:'Very bitter and lacking in hops but ok',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xla1/v/t1.0-0/p480x480/13244720_10154147278198745_7466060435592720847_n.jpg?oh=58d0cda42ec2c056176e7387e9f2b096&oe=57D0DACF&__gda__=1474835642_bef9a92e2d9e170ae78f48dd2f570d55',
	link:'https://www.facebook.com/photo.php?fbid=10154147278198745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

ret.push(App.Beer.create({
	name:'Akasha water buffalo',
	pct:6.6,
	desc:'Has a few flavours which are hard to pin down but it works well. Has a nice amount of sweetness',
	score:7,
	img:'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-0/p480x480/13245472_10154147280238745_5349990342920915596_n.jpg?oh=481c9891ccbcf08a41748ae1d011a8d0&oe=57CD7DFF&__gda__=1469930478_97efecd14a97255b047eeda427576271',
	link:'https://www.facebook.com/photo.php?fbid=10154147280238745&set=a.10152534310003745.1073741825.578408744&type=3'
}));

return ret;
}