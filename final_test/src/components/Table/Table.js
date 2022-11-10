import "./Table.css";

const Table = (props) => {
  const members = props.children;

  return (
    <table className="members-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member.id} onClick={props.createConfirmModal} id={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
