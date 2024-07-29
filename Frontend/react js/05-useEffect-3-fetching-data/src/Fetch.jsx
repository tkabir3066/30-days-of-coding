import React, { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <h2>Fetching Github Users Data</h2>
      <ul>
        {users.map((user) => (
          <li key={user?.id}>
            <a href={user.html_url} target="_blank">
              {user?.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
