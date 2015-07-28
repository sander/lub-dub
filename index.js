import noble from 'noble';

if (process.argv.length != 3) {
	console.error('Provide a heart rate sensor UUID.');
	process.exit(1);
}

function onRead(val, _) {
  const rate = val.readUInt8(1);
  const n = (val.length - 2) / 2;
  let vals = [rate];
  for (let i = 0; i < n; i++)
    vals.push(val.readUInt16LE(2 + 2 * i));
  console.log(vals.join(','))}

noble.on('discover', p => {
  if (process.argv[2] != p.uuid) return;
  p.connect(_ =>
    p.discoverServices(['180d'], (_, ss) => {
      if (ss.length != 1) return;
      ss[0].discoverCharacteristics(['2a37'], (_, cs) => {
        if (cs.length != 1) return;
        cs[0].notify(true);
        cs[0].on('read', onRead)})}))});

noble.on('stateChange', state => {
  if (state == 'poweredOn') noble.startScanning();
  else noble.stopScanning()});
