import StatCard from "../components/StatCard";

import { members } from "../data/members";
import { teams } from "../data/teams";
import { news } from "../data/news";


function Dashboard() {
  return (
    <div className="admin-container">

      <div className="admin-header">
        <h1>
          Riftline Admin Dashboard
        </h1>

        <p>
          Overview of Riftline Esports
        </p>
      </div>


      <div className="dashboard-grid">

        <StatCard
          title="Total Members"
          value={members.length}
          description="Registered Riftline members"
        />


        <StatCard
          title="Total Teams"
          value={teams.length}
          description="Active Riftline divisions"
        />


        <StatCard
          title="News Posts"
          value={news.length}
          description="Published announcements"
        />


      </div>

    </div>
  );
}


export default Dashboard;