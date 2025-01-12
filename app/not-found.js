import Link from "next/link";

export default function Home() {
    return (
      <div className="container mx-auto border min-h-dvh border-zinc-700 text-zinc-400 bg-zinc-900">
        <h1 className="border-b p-4 text-5xl border-zinc-700 text-zinc-50">404: Not Found</h1>
        <p className="p-4 border-b border-zinc-700">The page you are looking for does not exist. Please check the URL or click this <Link href="/" className="underline">link</Link> to go to the home page.</p>
      </div>
    );
  }
  