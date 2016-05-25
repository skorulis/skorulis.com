require 'rubygems'
require 'json'

file = File.read('js/raw.json')
allBeers = JSON.parse(file)
existing = JSON.parse(File.read('js/extra.json'))


result = Hash.new


allBeers.each do |item|
	d = Hash.new
	d["untappd"] = Hash.new
	old = existing[item["name"]]
	
	if old != nil
		d["untappd"] = old["untappd"]
	end


	result[item["name"]] = d
end

File.open("js/extra.json","w") do |f|
  f.write(JSON.pretty_generate(result))
end

