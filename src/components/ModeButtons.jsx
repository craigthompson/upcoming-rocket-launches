const ModeButtons = ({
  isEditing,
  setEditMode,
  setNormalMode,
  deleteLaunch,
}) => {
  if (isEditing) {
    return (
      <td>
        <button onClick={setNormalMode}>Save</button>
      </td>
    );
  } else {
    return (
      <td>
        <button onClick={deleteLaunch}>Delete</button>
        <button onClick={setEditMode}>Edit</button>
      </td>
    );
  }
};

export default ModeButtons;
