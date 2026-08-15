import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query
} from "firebase/firestore";


function PartnershipRequests() {

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);


  async function loadRequests() {

    try {

      setLoading(true);

      const q = query(
        collection(db, "partnerships"),
        orderBy("createdAt", "desc")
      );


      const snapshot = await getDocs(q);


      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data()
      }));


      setRequests(data);


    } catch (error) {

      console.error(
        "Failed to load partnership requests:",
        error
      );

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {
    loadRequests();
  }, []);



  async function changeStatus(id, status) {

    await updateDoc(
      doc(db, "partnerships", id),
      {
        status
      }
    );


    loadRequests();

  }



  async function deleteRequest(id) {

    await deleteDoc(
      doc(db, "partnerships", id)
    );


    loadRequests();

  }



  return (

    <div>

      <h2>
        Partnership Requests
      </h2>


      {loading ? (

        <p>
          Loading requests...
        </p>

      ) : requests.length === 0 ? (

        <p>
          No partnership requests yet.
        </p>

      ) : (

        requests.map((request) => (

          <div
            key={request.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px"
            }}
          >

            <h3>
              {request.organization}
            </h3>


            <p>
              Email: {request.email}
            </p>


            <p>
              Discord: {request.discord}
            </p>


            <p>
              Message: {request.message}
            </p>


            <p>
              Status: {request.status}
            </p>


            <button
              onClick={() =>
                changeStatus(request.id, "approved")
              }
            >
              Approve
            </button>


            <button
              onClick={() =>
                changeStatus(request.id, "denied")
              }
            >
              Deny
            </button>


            <button
              onClick={() =>
                deleteRequest(request.id)
              }
            >
              Delete
            </button>


          </div>

        ))

      )}

    </div>

  );

}


export default PartnershipRequests;