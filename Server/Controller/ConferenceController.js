const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.GetAllConf = async (req, res) => {
  try {
    const allConferences = await prisma.conference.findMany();
    res.status(200).json(allConferences);
  } catch (error) {
    res.status(400).send("Couldn't find any conference...");
  }
};

module.exports.GetOneConf = async (req, res) => {
  try {
    const OneConference = await prisma.conference.findUnique({
      where: {
        IdConf: req.params.id,
      },
    });
    res.status(200).json(OneConference);
  } catch (error) {
    res.status(400).send("Couldn't find this conference...");
  }
};

module.exports.DeleteConf = async (req, res) => {
  try {
    const deleteConf = await prisma.conference.delete({
      where: {
        IdConf: req.params.id,
      },
    });
    console.log({ deleteConf });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      console.log("Author not found");
      res.status(400).send("Author not found");
    } else console.error(error);
  }
};

module.exports.UpdateConf = async (req, res) => {
  try {
    const UpdatedConf = await prisma.conference.update({
      where: {
        IdConf: req.params.id,
      },
      data: {
        NameConf: req.body.nameConf,
        Location: req.body.location,
      },
    });
    res.status(200).json(UpdatedConf);
  } catch (error) {
    res.status(400).send("Update failed ... ");
  }
};

module.exports.CreateConf = async (req, res) => {
  try {
    const { name_conf, location, date, Code_conduct, Ticket_price, idSpeaker  , img} =
      req.body;
    const NewDate = new Date(date);
    console.log(NewDate)
    const newConf = await prisma.conference.create({
      data: {
        NameConf: name_conf,
        Location: location,
        CodeConduct: Code_conduct,
        SpeakerId: idSpeaker,
        cost: Ticket_price,
        date: NewDate,
        Img:img
      },
    });
    res.status(200).json(newConf);
  } catch (error) {
    console.log(error)
    res.status(400).send("Creation failed ...");
  }
};
