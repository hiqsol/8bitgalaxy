import Layout from "../components/layouts/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <menu className="flex flex-col">
        <Link href="/demo/cards">Cards</Link>
        <Link href="/">New Game</Link>
        <Link href="/">About</Link>
      </menu>
    </Layout>
  );
}
