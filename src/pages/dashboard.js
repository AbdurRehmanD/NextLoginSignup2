import React from "react";

import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const { email } = router.query;

  return (
    <div>
      <h1>Dashboard</h1>

      {email ? <p>Hello {email}, welcome to our portal!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
