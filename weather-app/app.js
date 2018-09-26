const yargs = require("yargs");
const geocode = require("./geocode");

const argv = yargs
  .options({
    a: {
      alias: "address",
      demand: true,
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
if (!argv.address) {
  console.error("No address!");
}
geocode.geoCodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
