import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page cloudflare page</p>
      <p>
        <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
