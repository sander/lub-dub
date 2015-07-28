#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _noble = require('noble');

var _noble2 = _interopRequireDefault(_noble);

if (process.argv.length != 3) {
  console.error('Provide a heart rate sensor UUID.');
  process.exit(1);
}

function onRead(val, _) {
  var rate = val.readUInt8(1);
  var n = (val.length - 2) / 2;
  var vals = [rate];
  for (var i = 0; i < n; i++) {
    vals.push(val.readUInt16LE(2 + 2 * i));
  }console.log(vals.join(','));
}

_noble2['default'].on('discover', function (p) {
  if (process.argv[2] != p.uuid) return;
  p.connect(function (_) {
    return p.discoverServices(['180d'], function (_, ss) {
      if (ss.length != 1) return;
      ss[0].discoverCharacteristics(['2a37'], function (_, cs) {
        if (cs.length != 1) return;
        cs[0].notify(true);
        cs[0].on('read', onRead);
      });
    });
  });
});

_noble2['default'].on('stateChange', function (state) {
  if (state == 'poweredOn') _noble2['default'].startScanning();else _noble2['default'].stopScanning();
});

