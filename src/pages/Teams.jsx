import TeamCard from "../components/TeamCard";
import { teams } from "../data/teams";

function Teams() {
  return (
    <div>
      <h1>Riftline Esports Teams</h1>

      <p>
        Explore the different divisions that make up Riftline Esports.
      </p>

      <div>
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            description={team.description}
            members={team.members}
          />
        ))}
      </div>
    </div>
  );
}

export default Teams;