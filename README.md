# level-key-list [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/level-key-list&title=level-key-list&description=hughsk/level-key-list%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Command-line tool for quickly printing a list of keys in a leveldb
database. Also includes a pretty-print mode that plays nice with
[level-sublevel](http://github.com/dominictarr/level-sublevel).

![screenshot](http://i.imgur.com/1pPRnAA.png)

## Usage ##

[![level-key-list](https://nodei.co/npm/level-key-list.png?mini=true)](https://nodei.co/npm/level-key-list)

``` bash
Usage level-key-list database(s...) -d [delimeter] --pretty

Options:
  -p, --pretty     Print the database keys in a more legible format
  -d, --delimiter  The level-sublevel delimiter to expect when pretty printing  [default: "ÿ"]
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/level-key-list/blob/master/LICENSE.md) for details.
