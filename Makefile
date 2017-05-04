all: build

clean:
	rm -rf _site

build:
	bundle exec jekyll build --incremental

serve: 
	bundle exec jekyll serve --incremental

deploy-test: build
	s3cmd sync --delete-removed _site/ s3://sincetownhall-test --add-header='Cache-Control: public, max-age=300' --acl-public

deploy-production: build
	s3cmd sync --delete-removed _site/ s3://www.sincetownhall.com --add-header='Cache-Control: public, max-age=300' --acl-public
