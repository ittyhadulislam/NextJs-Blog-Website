import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image
        src="/images/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <p className="text-lg">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">src/app/page.tsx</code>
      </p>
    </div>
  );
}
