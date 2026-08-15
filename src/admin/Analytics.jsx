import { useEffect, useState } from "react";

import { getItems } from "../services/database";


function Analytics() {

  const [stats, setStats] = useState({
    members: 0,
    teams: 0,
    news: 0
  });

  const [recentMembers, setRecentMembers] = useState([]);
  const [recentNews, setRecentNews] = useState([]);


  async function loadAnalytics() {

    const members = await getItems("members");
    const teams = await getItems("teams");
    const news = await getItems("news");


    setStats({
      members: members.length,
      teams: teams.length,
      news: news.length
    });


    setRecentMembers(
      members.slice(-5).reverse()
    );


    setRecentNews(
      news.slice(-5).reverse()
    );

  }



  useEffect(() => {

    loadAnalytics();

  }, []);



  return (

    <div className="admin-section">

      <h1>
        Riftline Analytics
      </h1>


      <p>
        Live statistics from your Firestore database.
      </p>



      <div className="dashboard-grid">


        <div className="stat-card">

          <h3>
            Total Members
          </h3>

          <h1>
            {stats.members}
          </h1>

        </div>



        <div className="stat-card">

          <h3>
            Total Teams
          </h3>

          <h1>
            {stats.teams}
          </h1>

        </div>



        <div className="stat-card">

          <h3>
            News Posts
          </h3>

          <h1>
            {stats.news}
          </h1>

        </div>


      </div>




      <div className="admin-card">

        <h2>
          Recent Members
        </h2>


        {recentMembers.length === 0 ? (

          <p>
            No members found.
          </p>

        ) : (

          recentMembers.map((member) => (

            <p key={member.id}>
              {member.name} - {member.role}
            </p>

          ))

        )}

      </div>





      <div className="admin-card">

        <h2>
          Recent News
        </h2>


        {recentNews.length === 0 ? (

          <p>
            No news posts found.
          </p>

        ) : (

          recentNews.map((article) => (

            <p key={article.id}>
              {article.title}
            </p>

          ))

        )}

      </div>



    </div>

  );

}


export default Analytics;