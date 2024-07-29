import React, { useEffect, useState } from "react";

function MultipleReturn() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    try {
      //   setIsLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Data is Loading...</p>}
      <ul>
        {users && users.length > 0
          ? users.map((user) => (
              <li key={user?.id}>
                {user?.firstName} {user?.lastName}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default MultipleReturn;
