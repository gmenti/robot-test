const robotjs = require('robotjs');

setTimeout(async () => {

  robotjs.keyTap('command');
  robotjs.typeString('chrome');
  robotjs.keyTap('enter');
  await sleep(2000);
  robotjs.typeString('baleia praia do rosa');
  robotjs.keyTap('enter');
});





















var sleep = time => new Promise(resolve => setTimeout(resolve, time));