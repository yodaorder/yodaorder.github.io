import { db } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


function Partnerships() {

  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);


  async function handleSubmit(e) {

    e.preventDefault();


    try {

      await addDoc(
        collection(db, "partnerships"),
        {
          organization,
          email,
          discord,
          message,
          status: "pending",
          createdAt: serverTimestamp()
        }
      );


      setOrganization("");
      setEmail("");
      setDiscord("");
      setMessage("");

      setSent(true);


    } catch (error) {

      console.error(
        "Error submitting partnership:",
        error
      );

      alert(
        "Failed to submit partnership request."
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
          Interested in partnering with Riftline?
          Submit a request below.
        </p>


        {sent && (

          <p className="success-message">
            Your partnership request has been submitted!
          </p>

        )}



        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Organization Name"
            value={organization}
            onChange={(e) =>
              setOrganization(e.target.value)
            }
            required
          />


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />


          <input
            type="text"
            placeholder="Discord Username"
            value={discord}
            onChange={(e) =>
              setDiscord(e.target.value)
            }
            required
          />


          <textarea
            placeholder="Partnership Details"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            required
          />


          <button type="submit">
            Submit Request
          </button>


        </form>


      </div>

    </div>

  );

}


export default Partnerships;