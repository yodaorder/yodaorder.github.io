import Dashboard from "../admin/Dashboard";
import ManageMembers from "../admin/ManageMembers";
import ManageTeams from "../admin/ManageTeams";
import ManageNews from "../admin/ManageNews";
import Analytics from "../admin/Analytics";

function Admin() {
  return (
    <div>
      <Dashboard />

      <hr />

      <ManageMembers />

      <hr />

      <ManageTeams />

      <hr />

      <ManageNews />

      <hr />

      <Analytics />
    </div>
  );
}

export default Admin;