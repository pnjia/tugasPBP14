const prisma = require("../prisma/client");
const { validateInsert, validateUpdate } = require("../utils/validators");

const getAllFootballerLigabelanda = async () => {
  const footballersResponse = await prisma.ligabelanda.findMany();
  return { footballers: footballersResponse };
};

const getAllFootballerLigaingggris = async () => {
  const footballersResponse = await prisma.ligainggris.findMany();
  return { footballers: footballersResponse };
};

const getAllFootballerLigajerman = async () => {
  const footballersResponse = await prisma.ligajerman.findMany();
  return { footballers: footballersResponse };
};

const getAllFootballerLigaprancis = async () => {
  const footballersResponse = await prisma.ligaprancis.findMany();
  return { footballers: footballersResponse };
};

const getAllFootballerLigaspanyol = async () => {
  const footballersResponse = await prisma.ligaspanyol.findMany();
  return { footballers: footballersResponse };
};

const insertFootballer = async (
  liga,
  nama,
  umur,
  posisi,
  NA,
  KA,
  KSI,
  harga
) => {
  validateInsert(nama, umur, posisi, NA, KA, KSI, harga);
  const insertedFootballer = await prisma[liga].create({
    data: {
      nama,
      umur,
      posisi,
      NA,
      KA,
      KSI,
      harga,
    },
  });
  return { insertedFootballer };
};

const updateFootballer = async (
  id,
  liga,
  nama,
  umur,
  posisi,
  NA,
  KA,
  KSI,
  harga
) => {
  validateUpdate(nama, umur, posisi, NA, KA, KSI, harga);
  const updatedFootballer = await prisma[liga].update({
    where: { id: id },
    data: {
      nama,
      umur,
      posisi,
      NA,
      KA,
      KSI,
      harga,
    },
  });
  return { updatedFootballer };
};

const deleteFootballer = async (liga, id) => {
  const deletedFootballer = await prisma[liga].delete({
    where: { id: id },
  });
  return { deletedFootballer };
};

module.exports = {
  getAllFootballerLigabelanda,
  getAllFootballerLigaingggris,
  getAllFootballerLigajerman,
  getAllFootballerLigaprancis,
  getAllFootballerLigaspanyol,
  insertFootballer,
  updateFootballer,
  deleteFootballer,
};
