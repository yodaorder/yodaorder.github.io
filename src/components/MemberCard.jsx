function MemberCard({ name, username, role, team }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        Fortnite IGN: {username}
      </p>

      <p>
        Role: {role}
      </p>

      <p>
        Team: {team}
      </p>
    </div>
  );
}

export default MemberCard;