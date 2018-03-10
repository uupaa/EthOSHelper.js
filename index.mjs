#!/usr/bin/node --experimental-modules

import EthOSWatch from "./lib/EthOSWatch";

const watch = new EthOSWatch({
  notifyURL: "", // Slack WebHookURL: "https://hooks.slack.com/services/T00000000/B00000000/xxxxxxxxxxxxxxxxxxxxxxxx";
  verbose: 0,
});

setTimeout(() => {

  console.log("EthOSHelper start watch");
  watch.start();

}, 1000 * 60 * 5); // 5 min after

console.log("EthOSHelper running");

