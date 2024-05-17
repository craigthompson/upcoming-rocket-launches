const AddLaunchButton = ({ addLaunch }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4}>
        <button onClick={addLaunch}>Add Launch</button>
      </td>
    </tr>
  );
};

export default AddLaunchButton;
