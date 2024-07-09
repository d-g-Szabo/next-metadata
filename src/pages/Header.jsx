import Link from "next/link";
export default function Header() {
  return (
    <>
      <h1>This is the header!</h1>
      <nav>
        <Link href="/">Home</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/eggs-cream">Eggs & Cream</Link>
        <br />
        <Link href="/posts">Posts</Link>
      </nav>
    </>
  );
}
