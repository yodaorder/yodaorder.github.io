import { useEffect, useState } from "react";

import {
  getItems,
  addItem,
  removeItem
} from "../services/database";


function ManageTeams() {

  const [teamList, setTeamList] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  async function loadTeams() {

    const data = await getItems("teams");

    setTeamList(data);

  }


  useEffect(() => {

    loadTeams();

  }, []);



  async function createTeam() {

    if (!name || !description) {
      return;
    }


    await addItem(
      "teams",
      {
        name,
        description,
        members: []
      }
    );


    setName("");
    setDescription("");

    loadTeams();

  }



  async function deleteTeam(id) {

    await removeItem(
      "teams",
      id
    );


    loadTeams();

  }



  return (
    <div className="admin-section">

      <h1>
        Manage Teams
      </h1>


      <div className="admin-card">

        <h2>
          Create Team
        </h2>


        <input
          placeholder="Team Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <textarea
          placeholder="Team Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <button
          className="admin-btn"
          onClick={createTeam}
        >
          Create Team
        </button>

      </div>



      <h2>
        Current Teams
      </h2>



      {teamList.map((team) => (

        <div
          className="admin-card"
          key={team.id}
        >

          <h3>
            {team.name}
          </h3>


          <p>
            {team.description}
          </p>


          <h4>
            Members
          </h4>


          {team.members.length > 0 ? (

            <ul>
              {team.members.map((member, index) => (
                <li key={index}>
                  {member}
                </li>
              ))}
            </ul>

          ) : (

            <p>
              No members assigned
            </p>

          )}



          <button
            className="admin-btn"
            onClick={() => deleteTeam(team.id)}
          >
            Delete Team
          </button>


        </div>

      ))}


    </div>
  );
}


export default ManageTeams;