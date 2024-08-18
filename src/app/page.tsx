import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="flex min-h-dvh flex-col">
      <section className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="flex items-center gap-4">
          <h1 className="display">JSON MAP</h1>
          <Image width={80} height={80} src="/logo.png" alt="JSONMap" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="extralarge">
            A rich solution to visualize and edit JSON structures!
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Link href="/app/editor">
            <Button radius="full" color="primary" size="lg" variant="solid">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button radius="full" color="primary" size="lg" variant="bordered">
              About Me
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;

