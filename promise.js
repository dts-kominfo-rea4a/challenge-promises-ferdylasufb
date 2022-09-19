const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  let outputIXX = await promiseTheaterIXX();
  let allData = outputIXX.concat(await promiseTheaterVGC());

  let hitungEmosi = 0;
  allData.forEach(perasaan => {
    if (perasaan.hasil == emosi) {
      hitungEmosi++;
    }
  });
  return hitungEmosi;
}

module.exports = {
  promiseOutput,
};
