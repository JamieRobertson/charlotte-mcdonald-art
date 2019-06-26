#!/usr/bin/env python

import yaml
from datetime import datetime, timedelta


TEMPLATE = """---
layout: post
title:  "{img_title}"
---
<div class="">
  <img src="{img_src}" title="{img_title}">
</div>
"""


def gen_posts():
    with open('_data/images.yml', 'r') as f:
        try:
            data = yaml.safe_load(f)
        except yaml.YAMLError as read_exc:
            print(read_exc)
            raise

    for index, d in enumerate(data):
        date = (datetime.today() + timedelta(days=index)).strftime('%Y-%m-%d')
        filename = '_posts/{date}-{title}.markdown'.format(date=date, title=d['title'].replace(' ', '-'))
        with open(filename, 'w') as f:
            try:
                print(TEMPLATE.format(
                    img_title=d['title'], img_src=d['src']), file=f)
            except Exception as write_exc:
                print(write_exc)
                raise


if __name__ == '__main__':
    gen_posts()
