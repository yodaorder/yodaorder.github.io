import { useState } from "react";
import { submitPartnership } from "../services/discord";


function Partnership() {

  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);


  async function handleSubmit(e) {

    e.preventDefault();


    if (!organization || !email || !discord || !message) {
      alert("Please fill out all fields.");
      return;
    }


    try {

      await submitPartnershipWebhook({
        organization,
        email,
        discord,
        message
      });


      setSubmitted(true);


      setOrganization("");
      setEmail("");
      setDiscord("");
      setMessage("");


    } catch (error) {

      console.error(
        "Partnership submission failed:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );

    }

  }



  return (

    <div className="page-container">


      <div className="partnership-container">

        <h1>
          Partnership Request
        </h1>


        <p>
          Interested in partnering with Riftline Esports?
          Fill out the form below and our leadership team
          will review your request.
        </p>



        {submitted && (

          <div className="success-message">

            Partnership request submitted successfully!

          </div>

        )}



        <form
          onSubmit={handleSubmit}
          className="partnership-form"
        >


          <label>
            Organization Name
          </label>

          <input
            type="text"
            placeholder="Your organization"
            value={organization}
            onChange={(e) =>
              setOrganization(e.target.value)
            }
          />



          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="contact@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />



          <label>
            Discord Username
          </label>

          <input
            type="text"
            placeholder="username"
            value={discord}
            onChange={(e) =>
              setDiscord(e.target.value)
            }
          />



          <label>
            Partnership Details
          </label>

          <textarea
            placeholder="Tell us about your partnership idea..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          />



          <button
            type="submit"
            className="admin-btn"
          >
            Submit Partnership Request
          </button>


        </form>


      </div>


    </div>

  );

}


export default Partnership;