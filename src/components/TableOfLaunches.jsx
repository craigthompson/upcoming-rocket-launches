import TableHeader from "./TableHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import AddLaunchButton from "./AddLaunchButton";

const TableOfLaunches = () => {
  const [launchesData, setLaunchesData] = useState([]);

  // TODO:
  const addLaunch = () => {};

  // TODO:
  const editLaunch = () => {};

  const deleteLaunch = async (id) => {
    const { data } = await axios.delete(`/launches/${id}`);
    setLaunchesData(data);
  };

  const rows = launchesData.map((launch) => (
    <TableRow
      initialIsEditing={launch.isEditing}
      initialMission={launch.mission}
      initialVehicle={launch.vehicle}
      initialLocation={launch.location}
      initialDaysTillLaunch={launch.days_till_launch}
      key={launch.id}
      editLaunch={editLaunch}
      deleteLaunch={() => deleteLaunch(launch.id)}
    />
  ));

  useEffect(() => {
    console.log("Use Effect");
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("/launches");
    setLaunchesData(data);
  };

  console.log(launchesData);

  return (
    <table>
      <TableHeader />
      <tbody>{rows}</tbody>
      <tfoot>
        <AddLaunchButton /> // TODO:
      </tfoot>
    </table>
  );
};

export default TableOfLaunches;
