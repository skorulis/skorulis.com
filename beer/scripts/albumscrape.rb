require 'rubygems'
require 'net/http'
require 'httpclient'
require 'json'

# Need to generate a new token every hour or so
@token = "EAACEdEose0cBAJZBPCEsZAf9MaoFZAuNkXPS5FOOBuGg1kGHic9Cfh3Au3oIj7OYvFjP2XPht9bwvXfqLOloe6WNwVt3d1uLIdCxIX6W8ChCxdGHsnTD0ZA4SY0DHL7L97Gp6Scc3UqCZCoUPDrlJLbT98zmQrd4q1mhA9eeZCswZDZD";
@albums = ["10151283325498745","10152534310003745"]
@allBeers = [];
@next = ""

puts @firstUrl

def urlForAlbum(albumId)
	return "https://graph.facebook.com/v2.5/"+albumId+"?access_token="+@token + "&fields=photos.limit(150)%7Bimages,created_time,name,id,link%7D"
end

def downloadChunk(url)
    #puts url
	clnt = HTTPClient.new;
	data = clnt.get_content(url)
	result = JSON.parse(data)
	#puts result
	
	if result["photos"] == nil
		photos = result["data"];
		paging = result["paging"]
	else
		photos = result["photos"]["data"];
		paging = result["photos"]["paging"];
	end
	

	@next = paging["next"];
	
	puts photos.count
	
	count = 0;
	photos.each{|value|
	    lines = value["name"].split(/\r?\n/);
	    pct = lines[0][/[0-9]?[0-9]?(\.[0-9]?)?%/]
	    if pct
	        lines[0][pct] = "";
	        pct = pct.chop
	    else
	        pct = "null"
	    end
	    
	    puts lines
	    score = lines[1][/[0-9].10/]
	    if score
	        lines[1][score] = "";
	        score = score.chop.chop.chop;
	    else
	        score = "null"
	    end


		hash = Hash[];
		hash["name"] = lines[0].gsub("'", "\\\\'");
		hash["desc"] = lines[1].gsub("'", "\\\\'");
		hash["img"] = value["images"][4]["source"];
		hash["pct"] = pct;
		hash["link"] = value["link"]

		hash["score"] = score;
		@allBeers.push(hash);
		count+=1;
	}
	
end

def dumpJSToFile(filename)
    ret = "function addAllBeers() {\n\n"
    ret+= "var ret = [];\n"
	@allBeers.each{|beer|
		ret+= "ret.push(App.Beer.create({\n"
		ret+= "\tname:'"+beer["name"]+"',\n"
		ret+= "\tpct:"+(beer["pct"]||"") +",\n";
		ret+= "\tdesc:'"+beer["desc"]+"',\n";
		ret+= "\tscore:"+(beer["score"]||"") +",\n";
		ret+= "\timg:'"+beer["img"]+"',\n"
		ret += "\tlink:'"+beer["link"]+"'\n"
		ret+= "}));\n\n"
	}
	ret+= "return ret;\n";
	ret+= "}\n"
	file = File.new("js/beer.js", "wb");
	file.write(ret);

end

def dumpPlainJS() 
	file = File.new("js/raw.json","wb");
	file.write(JSON.pretty_generate(@allBeers))
end

def downloadData(albumId)
	firstUrl = urlForAlbum(albumId)
	downloadChunk(firstUrl);
	while @next != nil do
		downloadChunk(@next)
		#@next = ""
	end
end

downloadData(@albums[0])
downloadData(@albums[1])

dumpJSToFile("beer.js");
dumpPlainJS()

puts "Successfully wrote " + @allBeers.length.to_s() + " beers";