const { PrismaClient } = require("@prisma/client");
const { model } = require("mongoose");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");

module.exports.GetAllSpeaker = async (req, res) => {
  try {
    const allSpeakers = await prisma.speaker.findMany();
    res.status(200).json(allSpeakers);
  } catch (error) {
    res.status(400).send("Fail to get Speakers...");
  }
};

module.exports.GetOneSpeaker = async (req, res) => {
  try {
    console.log(req.params.id);
    const OneSpeaker = await prisma.speaker.findUnique({
      where: {
        IdSpeaker: req.params.id,
      },
    });
    res.status(200).json(OneSpeaker);
  } catch (error) {
    res.status(400).send("Speaker doesn't exist...");
  }
};

module.exports.DeleteSpeaker = async (req, res) => {
  try {
    const DeleteOneSpeaker = await prisma.speaker.delete({
      where: {
        IdSpeaker: req.params.id,
      },
    });
    res.status(200).send("Speaker Deleted succussfuly...");
  } catch (error) {
    res.status(400).send("deleting operation failed...");
  }
};

module.exports.CreateSpeaker = async (req, res) => {
  try {
    console.log(req.body);
    const NewSpeaker = await prisma.speaker.create({
      data: {
        NameSpeaker: req.body.name,
        tel: req.body.telephone,
        NaSpeaker: req.body.nationality,
        img: faker.image.avatar(),
      },
    });
    res.status(200).json(NewSpeaker);
  } catch (error) {
    console.log(error);
    res.status(400).send("Speaker creation failed...");
  }
};
