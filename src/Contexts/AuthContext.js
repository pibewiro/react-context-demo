import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    firstname: "Prince",
    lastname: "Ibewiro",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODJjMTAxOTYyOTQ4NjI1OGNmYThkNSIsImlhdCI6MTYwNjQ0MTMxNSwiZXhwIjoxNjA5MDMzMzE1fQ.uZBadvU03RRcILBRfkmMzIGTa8rbL0aGDH2Fkuy4fDc",
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
