all: build

clean:
	rm -rf _site

build:
	bundle exec jekyll build

deploy-test: build
	s3cmd sync --delete-removed _site/ s3://sincetownhall-test --mime-type 'text/html' --add-header 'Content-Encoding: gzip' --add-header='Cache-Control: public, max-age=300' --acl-public

deploy-production: build
	s3cmd sync --delete-removed _site/ s3://sincetownhall --mime-type 'text/html' --add-header 'Content-Encoding: gzip' --add-header='Cache-Control: public, max-age=300' --acl-public
