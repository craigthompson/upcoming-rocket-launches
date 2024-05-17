const Location = ({ isEditing, value, setLocation }) => {
  if (isEditing) {
    return (
      <td>
        <input
          type="text"
          value={value}
          onChange={(e) => setLocation(e.target.value)}
        />
      </td>
    );
  } else {
    return <td>{value}</td>;
  }
};

export default Location;
