function StatCard({ title, value, description }) {
  return (
    <div className="card">
      <h2>{value}</h2>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>
    </div>
  );
}

export default StatCard;