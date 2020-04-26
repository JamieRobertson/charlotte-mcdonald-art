Charlotte McDonald artist site
------------------------------

<a href="https://charlottemcdonaldart.com/" target="_blank">charlottemcdonaldart.com</a>  

A simple Jekyll site to showcase the paintings of the artist, Charlotte McDonald.  


### Development

To preview:  
``` bash 
    $ bundle exec jekyll serve  
```

To generate minified + autoprefixed css file for poduction:  
``` bash
    $ npm run css-main
```

To generate post files from yaml data (requires PyYAML and Python3):  
``` bash
    $ pip3 install pyyaml  
    $ python3 ./gen_posts.py  
```
(These posts pages were only intended to be used as a javascript fallback)
