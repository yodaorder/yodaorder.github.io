import { useEffect, useState } from "react";

import {
  getItems,
  addItem,
  removeItem
} from "../services/database";


function ManageMembers() {

  const [memberList, setMemberList] = useState([]);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");


  async function loadMembers() {

    const data = await getItems("members");

    setMemberList(data);

  }


  useEffect(() => {

    loadMembers();

  }, []);



  async function createMember() {

    if (!name || !username || !role) {
      return;
    }


    await addItem(
      "members",
      {
        name,
        username,
        role,
        team
      }
    );


    setName("");
    setUsername("");
    setRole("");
    setTeam("");

    loadMembers();

  }



  async function deleteMember(id) {

    await removeItem(
      "members",
      id
    );


    loadMembers();

  }



  return (
    <div className="admin-section">

      <h1>
        Manage Members
      </h1>


      <div className="admin-card">

        <h2>
          Add Member
        </h2>


        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />


        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />


        <input
          placeholder="Team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />


        <button
          className="admin-btn"
          onClick={createMember}
        >
          Add Member
        </button>

      </div>



      <h2>
        Current Members
      </h2>


      {memberList.map((member) => (

        <div
          className="admin-card"
          key={member.id}
        >

          <h3>
            {member.name}
          </h3>

          <p>
            Username: {member.username}
          </p>

          <p>
            Role: {member.role}
          </p>

          <p>
            Team: {member.team}
          </p>


          <button
            className="admin-btn"
            onClick={() => deleteMember(member.id)}
          >
            Remove
          </button>


        </div>

      ))}


    </div>
  );
}


export default ManageMembers;