const Mission = ({ isEditing, value, setMission }) => {
  if (isEditing) {
    return (
      <td>
        <input
          type="text"
          value={value}
          onChange={(e) => setMission(e.target.value)}
        />
      </td>
    );
  } else {
    return <td>{value}</td>;
  }
};

export default Mission;
