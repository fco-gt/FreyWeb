import { Button, ButtonGroup } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex justify-between items-center p-0">
      <div className="flex-1">
        <h1 className={title()}>Bienvenido a </h1>
        <h1 className={title({ color: "cyan" })}>Frey,</h1>
        <br />
        <h1 className={title()}>la comunidad de jugadores</h1>
		<br />
        <h1 className={title()}>hispanohablantes</h1>
		<br />
		<h1 className={title()}>mas grande.</h1>
        <h2 className={subtitle({ class: "mt-2" })}>
          Unete a esta gran comunidad y se parte de esta aventura.
        </h2>
		<Link isExternal href="https://discord.gg/hijos-de-freyja-818547021777993748" className="mt-2">
		<Button color="primary" variant="bordered">
          Empezar
        </Button>
		</Link>
      </div>

	  <div className="flex md:hidden">
		<Image width={500} alt="Frey Icon" src="https://i.imgur.com/WJeLfdR.png"/>
	  </div>
    </section>
  );
}
