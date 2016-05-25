require 'rubygems'
require 'json'

allBeers = JSON.parse(File.read('js/raw.json'))
extraInfo = JSON.parse(File.read('js/extra.json'))

ratings = Hash.new
words = Hash.new
for x in 0..10
	ratings[x] = 0
end
withoutRatings = Array.new
missingPct = Array.new
missingExtra = Array.new
missingUntappdId = Array.new

allBeers.each do |item|
	name = item["name"]
	if item["score"] == "null"
		withoutRatings.push(name)
	else
		s = item["score"].to_i;
		ratings[s] = ratings[s] + 1
	end
	
	nameWords = name.split
	nameWords.each do |w|
		if !words.has_key?(w)
			words[w] = 0
		end
		words[w] = words[w] + 1
	end
	if item["pct"] == "null"
		missingPct.push(name)
	end
	
	extra = extraInfo[name]
	if extra == nil
		missingExtra.push(name)
	end
	
	if extra["untappd"]["id"].length == 0
		missingUntappdId.push(name)
	end
	
end

puts "missing ratings " + withoutRatings.length.to_s
puts "missing pct " + missingPct.length.to_s
puts "missing extra " + missingExtra.length.to_s
puts "missing untappdId " + missingUntappdId.length.to_s