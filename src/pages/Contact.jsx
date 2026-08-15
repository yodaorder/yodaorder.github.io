function Contact() {
  return (
    <div>
      <h1>Contact Riftline Esports</h1>

      <p>
        Have questions, want to join Riftline, or interested in working with us?
        Reach out through the options below.
      </p>

      <div className="card">
        <h2>Discord</h2>
        <p>
          Join our Discord community to contact our staff and players.
        </p>

        <a className="btn" href="#">
          Join Discord
        </a>
      </div>

      <div className="card">
        <h2>Email</h2>
        <p>
          Business and partnership inquiries:
        </p>

        <a href="mailto:contact@riftlineesports.com">
          contact@riftlineesports.com
        </a>
      </div>

      <div className="card">
        <h2>Social Media</h2>

        <p>
          Follow Riftline Esports for announcements, tournaments, and updates.
        </p>

        <a className="btn" href="#">
          Twitter / X
        </a>

        <a className="btn" href="#">
          YouTube
        </a>

        <a className="btn" href="#">
          TikTok
        </a>
      </div>
    </div>
  );
}

export default Contact;