import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "80px",
        boxShadow: "5px 5px 5px gray",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "25px",
          color: "black",
          fontWeight: "bold",
          margin: "5px",
        }}
      >
        Next-Auth
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "500px",
        }}
      >
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link href="/blog">Blog</Link>
        </div>
        {status !== "authenticated" ? (
          <>
            <div>
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign In
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
