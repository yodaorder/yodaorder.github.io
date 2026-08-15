function TeamCard({ name, description, members }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        {description}
      </p>

      <h3>Members</h3>

      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamCard;