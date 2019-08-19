#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

from pathlib import Path


AUTHOR = 'Luis Trinidad'
SITENAME = "Luis' Site"
SITEURL = ''
DOMAIN = 'luissaul.dev'

PATH = 'content'

STATIC_PATHS = [
    'images/xuxer.png',
    'images/favicon.ico',
    'images/portrait.png',
    'images/pireports.png',
    'data/experiences.json',
    'images/cloudreports.png',
    'files/Luis Resume.pdf',
]
EXTRA_PATH_METADATA = {
    'images/favicon.ico': {'path': 'favicon.ico'},
}

TIMEZONE = 'America/Santo_Domingo'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ('About', '/pages/about.html'),
)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

DEFAULT_CATEGORY = 'miscellaneous'
USE_FOLDER_AS_CATEGORY = True

THEME = Path.joinpath(Path.cwd(), 'themes/deep-sea')

DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = True

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

SOCIAL_LINKS = (
    ('CodePen', 'https://codepen.io/-str-/', f'{SITEURL}/theme/images/codepen.svg'),
    ('GitHub', 'https://github.com/str610/', f'{SITEURL}/theme/images/github.svg'),
    ('LinkedIn', 'https://www.linkedin.com/in/strinidad/?locale=en_US', f'{SITEURL}/theme/images/linkedin.svg'),
)

GITHUB_REPOSITORY_URL = 'https://github.com/str610/str610.github.io'
