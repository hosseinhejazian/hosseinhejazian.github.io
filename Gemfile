source "https://rubygems.org"

# The `github-pages` gem pins Jekyll and every plugin to exactly the versions
# GitHub Pages runs, so a local preview matches the deployed site.
#
#   bundle install
#   bundle exec jekyll serve   # http://127.0.0.1:4000
#
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
end

# Gems no longer bundled with Ruby 3.4+.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "ostruct"

gem "webrick", "~> 1.8"
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]
