const DaysTillLaunch = ({ isEditing, value, setDaysTillLaunch }) => {
  if (isEditing) {
    return (
      <td>
        <input
          type="text"
          value={value}
          onChange={(e) => setDaysTillLaunch(e.target.value)}
        />
      </td>
    );
  } else {
    return <td>{value}</td>;
  }
};

export default DaysTillLaunch;
