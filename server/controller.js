//////////////////////////////////////////////
//  Initial Launch Data
//////////////////////////////////////////////
let launchData = [
  {
    id: 0,
    mission: "Starlink 6-50",
    vehicle: "SpaceX Falcon 9",
    location: "FL, USA",
    days_till_launch: 5,
  },
  {
    id: 1,
    mission: "Cosmos 2576",
    vehicle: "Roscosmos Soyuz-2",
    location: "Russia",
    days_till_launch: 1,
  },
  {
    id: 2,
    mission: "Starlink 6-51",
    vehicle: "SpaceX Falcon 9",
    location: "CA, USA",
    days_till_launch: 4,
  },
  {
    id: 3,
    mission: "NS-25",
    vehicle: "Blue Origin New Shepherd",
    location: "TX, USA",
    days_till_launch: 3,
  },
];

let globalId = launchData.length;

//////////////////////////////////////////////
//  Handler Functions
//////////////////////////////////////////////
const handlerFunctions = {
  getLaunches: (req, res) => {
    res.status(200).send(launchData);
  },

  addLaunch: (req, res) => {
    req.body.id = globalId;
    globalId++;
    launchData.push(req.body);
    res.status(200).send(launchData);
  },

  deleteLaunch: (req, res) => {
    const indexToRemove = launchData.findIndex(
      (el) => el.id === +req.params.id // Coerce the id string to a number
    );
    launchData.splice(indexToRemove, 1);
    res.status(200).send(launchData);
  },

  editLaunch: (req, res) => {
    const indexToUpdate = launchData.findIndex(
      (el) => el.id === +req.params.id // Coerce the id string to a number
    );
    req.body.id = +req.params.id; // Coerce the id to a number for future comparison operations
    launchData.splice(indexToUpdate, 1, req.body);
    res.status(200).send(launchData);
  },
};

export default handlerFunctions;
