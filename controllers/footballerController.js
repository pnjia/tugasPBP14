const footballersService = require("../services/footballersService");

const getHome = (req, res) => {
  try {
    res.render("pages/home");
  } catch (error) {
    next(error);
  }
};

const getAbout = (req, res) => {
  try {
    res.render("pages/about");
  } catch (error) {
    next(error);
  }
};

const getLigabelanda = async (req, res, next) => {
  try {
    const footballers = await footballersService.getAllFootballerLigabelanda();
    // res.status(200).json({ message: "Pemain berhasil diambil", footballers });
    console.log({ footballers });
    res.render("pages/index", { footballers, liga: "Liga Belanda" });
  } catch (error) {
    next(error);
  }
};
const getLigainggris = async (req, res, next) => {
  try {
    const footballers = await footballersService.getAllFootballerLigaingggris();
    // res.status(200).json({ message: "Pemain berhasil diambil", footballers });
    res.render("pages/index", { footballers, liga: "Liga Inggris" });
  } catch (error) {
    next(error);
  }
};
const getLigajerman = async (req, res, next) => {
  try {
    const footballers = await footballersService.getAllFootballerLigajerman();
    // res.status(200).json({ message: "Pemain berhasil diambil", footballers });
    res.render("pages/index", { footballers, liga: "Liga Jerman" });
  } catch (error) {
    next(error);
  }
};
const getLigaprancis = async (req, res, next) => {
  try {
    const footballers = await footballersService.getAllFootballerLigaprancis();
    // res.status(200).json({ message: "Pemain berhasil diambil", footballers });
    res.render("pages/index", { footballers, liga: "Liga Prancis" });
  } catch (error) {
    next(error);
  }
};
const getLigaspanyol = async (req, res, next) => {
  try {
    const footballers = await footballersService.getAllFootballerLigaspanyol();
    // res.status(200).json({ message: "Pemain berhasil diambil", footballers });
    res.render("pages/index", { footballers, liga: "Liga Spanyol" });
  } catch (error) {
    next(error);
  }
};

const insertFootballer = async (req, res, next) => {
  const liga = req.params.liga;
  const { nama, umur, posisi, NA, KA, KSI, harga } = req.body;

  try {
    const insertFootballer = await footballersService.insertFootballer(
      liga,
      nama,
      umur,
      posisi,
      NA,
      KA,
      KSI,
      harga
    );

    res.status(201).json({
      message: "Pemain berhasil ditambahkan ke liga " + liga,
      insertFootballer,
    });
  } catch (error) {
    next(error);
  }
};

const updateFootballer = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const liga = req.params.liga;

  const { nama, umur, posisi, NA, KA, KSI, harga } = req.body;

  try {
    const updateFootballer = await footballersService.updateFootballer(
      id,
      liga,
      nama,
      umur,
      posisi,
      NA,
      KA,
      KSI,
      harga
    );
    res.status(200).json({ message: "Data pemain berhasil diupdate!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteFootballer = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const liga = req.params.liga;
  try {
    const deleteUser = await footballersService.deleteFootballer(liga, id);
    res.status(202).json({ message: "Data pemain berhasil dihapus!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHome,
  getAbout,
  getLigabelanda,
  getLigainggris,
  getLigajerman,
  getLigaprancis,
  getLigaspanyol,
  insertFootballer,
  updateFootballer,
  deleteFootballer,
};
