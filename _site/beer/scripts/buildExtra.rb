require 'rubygems'
require 'json'
require 'net/http'
require 'httpclient'

ACCESS_TOKEN = "504CD86D79F7BC336C7A36EC0A97655DCF872857"

file = File.read('js/raw.json')
allBeers = JSON.parse(file)
existing = JSON.parse(File.read('js/extra.json'))

extraData = Hash.new

allBeers.each do |item|
	d = Hash.new
	d["untappd"] = Hash.new
	d["untappd"]["id"] = ""
	old = existing[item["name"]]
	
	if old != nil
		d["untappd"] = old["untappd"]
	end

	extraData[item["name"]] = d
end

count = 0

extraData.each do |item|
	hash = item[1]["untappd"]
	if hash["id"].length > 0 && hash["style"] == nil
		url = "https://api.untappd.com/v4/beer/info/" + hash["id"] + "?access_token=" + ACCESS_TOKEN
		clnt = HTTPClient.new;
		data = clnt.get_content(url)
		result = JSON.parse(data)
		beer = result["response"]["beer"]
		brewery = beer["brewery"]
		hash["style"] = beer["beer_style"]
		hash["IBU"] = beer["beer_ibu"]
		hash["score"] = beer["rating_score"]
		hash["brewery"] = brewery["brewery_name"]
		hash["country"] = brewery["country_name"]
		hash["name"] = beer["beer_name"]
		count = count + 1
		if count > 50
			break
		end
	end
end

File.open("js/extra.json","w") do |f|
  f.write(JSON.pretty_generate(extraData))
end

