import MemberCard from "../components/MemberCard";
import { members } from "../data/members";

function Members() {
  return (
    <div>
      <h1>Riftline Members</h1>

      <p>
        Meet the players, staff, and teams that make up Riftline Esports.
      </p>

      <div className="members-grid">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            username={member.username}
            role={member.role}
            team={member.team}
          />
        ))}
      </div>
    </div>
  );
}

export default Members;