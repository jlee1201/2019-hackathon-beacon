const BeaconScanner = require('node-beacon-scanner');
const timestamp = require('time-stamp');
const scanner = new BeaconScanner();

// Set an Event handler for becons
const registeredIds = [];
scanner.onadvertisement = (ad) => {

  if ((typeof ad.estimoteTelemetry !== 'undefined') || (typeof ad.estimoteNearable !== 'undefined')) {
    if (['8465e3df474aa835', '4dfbb838017f594a','abbf862efa4bb9c3'].includes(ad.estimoteTelemetry.shortIdentifier)) {
      console.log(`[${timestamp('HH:mm:ss')}]  -- ${ad.rssi}`);
    }
  }


  // if (!registeredIds.includes(ad.id)) {
  //   console.log(`new id: [${ad.id}]`);
  //   registeredIds.push(ad.id);
  // } else {
  //   console.log(`existing id: [${ad.id}]`);
  //   console.log(`total registered: ${registeredIds.length}`)
  // }
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.');
}).catch((error) => {
  console.error(error);
});
