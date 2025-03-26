import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-6xl font-display tracking-tight leading-tight animate-variable-text text-senSlate">
          Studio Sen Flow
        </h1>
        <p className="mt-6 text-xl text-senDeepBlue">
          Flow begins where clarity meets code.
        </p>
      </div>
    </main>
  );
}
