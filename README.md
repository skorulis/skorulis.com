Skorulis.com
===============

This website is simply a collection of the many bits and pieces I've worked on over the years.

It is a [Jekyll](https://jekyllrb.com/) site. Ruby **3.4.9** is pinned in `.ruby-version`.

## Running locally

1. Install Ruby 3.4.9 (e.g. via [rbenv](https://github.com/rbenv/rbenv) or [asdf](https://asdf-vm.com/)).
2. Install dependencies:

```sh
bundle install
```

3. Start the local server:

```sh
bundle exec jekyll serve
```

4. Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

Live reload is on by default; the site rebuilds when you change files. Restart the server if you edit `_config.yml`.

### Useful options

```sh
# Rebuild on change and open the browser
bundle exec jekyll serve --livereload

# Bind to all interfaces (useful on a LAN)
bundle exec jekyll serve --host 0.0.0.0
```

## Updates

After changes are made, run `bundle exec jekyll build` before pushing changes.

## Notes

There are some issues with FFI and running Jekyll. Follow https://www.shouvikbasak.net/website/jekyll-on-macos-apple-m1-solved/ to fix.
