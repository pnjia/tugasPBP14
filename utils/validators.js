const { BadRequestError } = require("./errors");

const validateInsert = (nama, umur, posisi, NA, KA, KSI, harga) => {
  if (!(nama && umur && posisi && NA && KA && KSI && harga)) {
    throw new BadRequestError(
      "Nama, umur, posisi, NA, KA, KSI, dan harga harus diisi!"
    );
  }
};
const validateUpdate = (nama, umur, posisi, NA, KA, KSI, harga) => {
  if (!(nama && umur && posisi && NA && KA && KSI && harga)) {
    throw new BadRequestError(
      "Nama, umur, posisi, NA, KA, KSI, dan harga harus diisi!"
    );
  }
};

module.exports = { validateInsert, validateUpdate };
