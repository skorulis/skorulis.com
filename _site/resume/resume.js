var sections = new Array("yoltSecU","expU","trSecU","apsmartSecU", "miaSecU","aiU","woolU","parU","eduU","refU","perU","proU");
var items = new Array();

function Job() {
	
}

function addAll(old,add) {
	for(var i=0; i < add.length; ++i) {
		old.push(add[i]);
	}
}

function printable() {
	var pb = document.getElementById('printButton');
	var mc = document.getElementById('contentDiv');
	var exp = document.getElementById('expU');
	if(pb.innerHtml==undefined) {
		pb.innerHtml='Printable version';
	}
	
	
	var pv = (pb.innerHtml == "Printable version");
	if(pv==true) {
		pb.innerHtml = "Interactive version";
		pb.innerText = "Interactive version";
		exp.style.display = 'none';
	} else {
		pb.innerHtml = 'Printable version';
		pb.innerText = 'Printable version';
		/*if(supports_canvas()) {
			exp.style.display = 'block';
		}*/
	}

	
	var bodyStyle = document.body.style;
	for(var i=0; i < items.length; ++i) {
		if(pv) {
			items[i].style.backgroundColor = '#FFFFFF';
		} else {
			items[i].style.backgroundColor = '#E5E5E5';
		}
		
	}
	
	
	
	for(var i=0; i < sections.length; ++i) {
		expandId(sections[i]);
	}
}



function Exp(name,val,wid,hgt) {
	this.tech = name;
	this.val = val*100;
	this.x = this.val+Math.random()*(wid-this.val*2);
	this.y = this.val+Math.random()*(hgt-this.val*2);
	this.color = "rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",0.5)";
	//this.color = "rgb("+Math.floor(Math.random()*255)+",0,0)";
}

function toggle(item) {
	var x =item.id.substring(0,item.id.length-1);
	if(item.getElementsByTagName("p")[0].innerHTML=='+') {
		item.getElementsByTagName("p")[0].innerHTML = "-";
		document.getElementById(x).style.display = 'block';
	} else {
		item.getElementsByTagName("p")[0].innerHTML = "+";
		document.getElementById(x).style.display = 'none';
	}
}

function expand(item) {
	var x =item.id.substring(0,item.id.length-1);
	if(item.getElementsByTagName("p")[0].innerHTML=='+') {
		item.getElementsByTagName("p")[0].innerHTML = "-";
		document.getElementById(x).style.display = 'block';		
	} 
}

function expandId(id) {
	expand(document.getElementById(id));
}

function toggleId(id) {
	toggle(document.getElementById(id));
}

function init() {
	//setupJobs();
	
	for(var i=0; i < sections.length; ++i) {
		toggleId(sections[i]);
		items.push(document.getElementById(sections[i]));
	}
	if(!supports_canvas()) {
		document.getElementById('expU').style.display = 'none';
	}
	
	setupExperience();
}

function setupExperience() {
	var c1 = document.getElementById('expCanvas');
	var c2 = document.getElementById('frameCanvas');
	var exps = new Array();
	exps.push(new Exp("C#",0.5,c1.width,c1.height));
	exps.push(new Exp("Java",0.85,c1.width,c1.height));
	exps.push(new Exp("Objective C",0.7,c1.width,c1.height));
	exps.push(new Exp("C/C++",0.6,c1.width,c1.height));
	exps.push(new Exp("Actionscript 3",0.7,c1.width,c1.height));
	exps.push(new Exp("Javascript",0.5,c1.width,c1.height));
	
	createCircles(c1,exps);
	
	var frames = new Array();
	frames.push(new Exp("iOS",0.7,c2.width,c2.height));
	frames.push(new Exp("Android",0.7,c2.width,c2.height));
	frames.push(new Exp("Blackberry",0.2,c2.width,c2.height));
	frames.push(new Exp("WP7",0.5,c2.width,c2.height));
	frames.push(new Exp("HTML5",0.3,c2.width,c2.height));
	frames.push(new Exp("Winforms",0.4,c2.width,c2.height));
	frames.push(new Exp("OpenGL",0.3,c2.width,c2.height));
	
	createCircles(c2,frames);
	
}

function createCircles(canvas,list) {
	if(!supports_canvas()) {
		return;
	}

	var e;
	var ctx = canvas.getContext('2d');
	for(var i=0; i < list.length; ++i) {
		e = list[i];
		ctx.fillStyle = e.color;
		ctx.beginPath();
		ctx.arc(e.x,e.y,e.val,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.font = 'italic 20px sans-serif';
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillText(e.tech,e.x,e.y);
	}
}

function setupJobs() {
	var jobs = new Array();
	var j = new Job();	
	j.start = new Date(2002,5,1);
	j.end = new Date(2004,0,1);
	j.name = "Parallax Corporate";
	j.color = "#DD5555";
	jobs.push(j);
	
	j = new Job();	
	j.start = new Date(2003,10,1);
	j.end = new Date(2006,10,1);
	j.name = "Woolworths";
	j.color = "#55DD55";
	jobs.push(j);
	
	j = new Job();	
	j.start = new Date(2006,10,1);
	j.end = new Date(2009,4,1);
	j.name = "Asset Insure";
	j.color = "#DD5555";
	jobs.push(j);
	
	j = new Job();	
	j.start = new Date(2009,11,1);
	j.end = new Date();
	j.name = "MIA International";
	j.color = "#55DD55";
	jobs.push(j);
	
	
	
	
	var totalTime = jobs[jobs.length-1].end-jobs[0].start;
	
	
	var element = document.getElementById('timerow');
	var p;
	for(var i=0; i < jobs.length; i++) {
		j = jobs[i];
		var lenpct = 100*(j.end-j.start)/totalTime;
		console.log(lenpct);
		p = '<td class="timeSection" style="width:'+lenpct+'%;background-color:'+j.color+'">'+j.name+'</td>';
		element.innerHTML+=p;
		
	}
	
}

function buildTimeline() {
	var dates = new Array();
	dates.push(new Date(2002,5,1));
	dates.push(new Date(2004,0,1));
	
	dates.push(new Date(2003,10,1));
	dates.push(new Date(2006,10,1));
	
	dates.push(new Date(2006,10,1));
	dates.push(new Date(2009,4,1));
	
	dates.push(new Date(2009,11,1));
	dates.push(new Date());
	
	var totalTime = dates[dates.length-1]-dates[0];
	console.log(totalTime);
	var element = document.getElementById('timeline');
	var p;
	for(var i=0; i < dates.length; i+=2) {
		var lenpct = 100*(dates[i+1]-dates[i])/totalTime;
		p = '<p class="timeSection" style="width:'+lenpct+'%">TEST</p>';
		element.innerHTML+=p;
		
	}
}

/*
	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/	
var getElementsByClassName = function (className, tag, elm){
	if (document.getElementsByClassName) {
		getElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\\b" + tag + "\\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return getElementsByClassName(className, tag, elm);
};

function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}