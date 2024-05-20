import ModeButtons from "./ModeButtons";
import Mission from "./Mission";
import Vehicle from "./Vehicle";
import Location from "./Location";
import DaysTillLaunch from "./DaysTillLaunch";
import { useState } from "react";

const TableRow = ({
  initialIsEditing,
  initialMission,
  initialVehicle,
  initialLocation,
  initialDaysTillLaunch,
  editLaunch,
  deleteLaunch,
  id,
}) => {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const [mission, setMission] = useState(initialMission);
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [location, setLocation] = useState(initialLocation);
  const [daysTillLaunch, setDaysTillLaunch] = useState(initialDaysTillLaunch);

  const setEditMode = () => setIsEditing(true);
  const setNormalMode = () => {
    if (+daysTillLaunch + 1 && mission && vehicle && location) {
      setIsEditing(false);

      const editedLaunch = {
        id: id,
        mission: mission,
        vehicle: vehicle,
        location: location,
        days_till_launch: daysTillLaunch,
      };
      editLaunch(id, editedLaunch);
    } else {
      alert("Invalid values given. Please try again.");
    }
  };

  return (
    <tr>
      <ModeButtons
        isEditing={isEditing}
        setEditMode={setEditMode}
        setNormalMode={setNormalMode}
        deleteLaunch={deleteLaunch}
      />
      <Mission isEditing={isEditing} value={mission} setMission={setMission} />
      <Vehicle isEditing={isEditing} value={vehicle} setVehicle={setVehicle} />
      <Location
        isEditing={isEditing}
        value={location}
        setLocation={setLocation}
      />
      <DaysTillLaunch
        isEditing={isEditing}
        value={daysTillLaunch}
        setDaysTillLaunch={setDaysTillLaunch}
      />
    </tr>
  );
};

export default TableRow;
