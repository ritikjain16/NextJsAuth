import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userdata, setuserdata] = useState(null);
  const { data: session, status } = useSession();
  const getuser = async () => {
    if (session) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_QUERY_URL}/users`,
        { data: session.user }
      );
      setuserdata(res.data);
      // console.log(res.data);
    }
  };

  useEffect(() => {
    getuser();
  }, [session]);

  return (
    <div>
      {userdata !== null ? (
        <>
          <h1>{userdata.email}</h1>
          <h1>{userdata.name}</h1>
          <img src={userdata.image} alt="" width={200} height={200} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
