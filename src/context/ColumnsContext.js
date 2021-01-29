import React from "react";

const columns = [
  {
    id: 1,
    name: "Pending",
    limit: 3,
  },
  {
    id: 2,
    name: "Analysis - Doing",
    limit: 2,
  },
  {
    id: 3,
    name: "Analysis - Done",
    limit: 2,
  },
  {
    id: 4,
    name: "Development - Doing",
    limit: 2,
  },
  {
    id: 5,
    name: "Development - Done",
    limit: 4,
  },
  {
    id: 6,
    name: "Test",
    limit: 6,
  },
  {
    id: 7,
    name: "Deploy",
    limit: 4,
  },
];

const ColumnsContext = React.createContext(columns);

ColumnsContext.displayName = "ColumnsContext";

export default ColumnsContext;
