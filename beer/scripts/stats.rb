require 'rubygems'
require 'json'

file = File.read('js/raw.json')
allBeers = JSON.parse(file)


ratings = Hash.new
words = Hash.new
for x in 0..10
	ratings[x] = 0
end
withoutRatings = 0

allBeers.each do |item|
	if item["score"] == "null"
		withoutRatings = withoutRatings + 1
	else
		s = item["score"].to_i;
		ratings[s] = ratings[s] + 1
	end
	
	nameWords = item["name"].split
	nameWords.each do |w|
		if !words.has_key?(w)
			words[w] = 0
		end
		words[w] = words[w] + 1
	end
	if item["pct"] == "null"
		puts item["name"] + " missing pct"
	end
	
end

puts "missing ratings " + withoutRatings.to_s
puts ratings
puts words