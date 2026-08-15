import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section>
        <h1>Welcome to Riftline Esports</h1>

        <p>
          Riftline Esports is a competitive Fortnite organization built around
          teamwork, improvement, and the pursuit of excellence.
        </p>

        <br />

        <Link className="btn" to="/teams">
          View Our Teams
        </Link>
      </section>

      <br />

      <section className="card">
        <h2>About Riftline</h2>

        <p>
          We bring together competitive players, staff members, developers,
          and creators to build a strong Fortnite esports community.
        </p>
      </section>

      <br />

      <section className="card">
        <h2>Our Divisions</h2>

        <p>
          Competitive Team, Administration Team, Moderation Team,
          Development Team, and Content Team.
        </p>
      </section>

      <br />

      <section className="card">
        <h2>Join Riftline</h2>

        <p>
          Interested in competing, creating content, or helping the community?
          Check out our teams and contact us today.
        </p>

        <Link className="btn" to="/contact">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Home;