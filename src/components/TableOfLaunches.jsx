import TableHeader from "./TableHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import AddLaunchButton from "./AddLaunchButton";

const TableOfLaunches = () => {
  const [launchesData, setLaunchesData] = useState([]);

  const addLaunch = async () => {
    const newLaunch = {
      mission: "",
      vehicle: "",
      location: "",
      days_till_launch: 0,
      isEditing: true,
    };
    const { data } = await axios.post("/launches", newLaunch);
    setLaunchesData(data);
  };

  const editLaunch = async (id, body) => {
    const { data } = await axios.put(`/launches/${id}`, body);
    setLaunchesData(data);
  };

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
      id={launch.id}
    />
  ));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("/launches");
    setLaunchesData(data);
  };

  return (
    <table>
      <TableHeader />
      <tbody>{rows}</tbody>
      <tfoot>
        <AddLaunchButton addLaunch={addLaunch} />
      </tfoot>
    </table>
  );
};

export default TableOfLaunches;
