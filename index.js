var quotemeta = require('quotemeta')
var through = require('through')
var level = require('level')

var seperator
var colors = [
    'blue'
  , 'cyan'
  , 'green'
  , 'yellow'
  , 'red'
  , 'magenta'
]

module.exports = keys

function keys(loc, options) {
  var output = through()
  var c = colors.length
  var split

  if (!options) options = {}
  var delim = options.delimiter || 'ÿ'
  var pretty = options.pretty

  if (pretty) {
    require('colors')
    seperator = seperator || '::'.grey
    split = new RegExp(quotemeta(delim) + '{1,2}', 'g')
  }

  level(loc)
    .createKeyStream()
    .on('data', pretty
      ? fancy
      : plain)

  return output

  function plain(key) {
    output.queue(key + '\n')
  }

  function fancy(key) {
    var out = ''

    key = key.split(split)
    for (var i = 0, l = key.length - 1; i < l; i += 1) {
      if (i) out += seperator
      out += key[i][colors[i % c]]
    }

    output.queue(out)
    output.queue(seperator)
    output.queue(key[i])
    output.queue('\n')
  }
}
