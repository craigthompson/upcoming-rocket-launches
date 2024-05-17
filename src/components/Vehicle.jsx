const Vehicle = ({ isEditing, value, setVehicle }) => {
  if (isEditing) {
    return (
      <td>
        <input
          type="text"
          value={value}
          onChange={(e) => setVehicle(e.target.value)}
        />
      </td>
    );
  } else {
    return <td>{value}</td>;
  }
};

export default Vehicle;
