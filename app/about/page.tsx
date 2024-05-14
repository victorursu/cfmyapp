import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        This is the About us page
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
