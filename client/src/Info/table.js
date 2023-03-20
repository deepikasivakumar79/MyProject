const InfoTable = (props) => {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.getData.length > 0 ? (
            props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.Name}</td>
                <td>{e.Course}</td>
                <td>{e.Contact}</td>
                <td>{e.Email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(event) => {
                      props.setData(e);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      props.del(e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>No Data</tr>
          )}
        </tbody>
      </table>
    );
  };
  
  export default InfoTable;
  