"use client";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <section className="flex justify-between items-center p-0">
        <div className="flex-1">
          <h1 className={title()}>Bienvenido a </h1>
          <h1 className={title({ color: "cyan" })}>Frey,</h1>
          <br />
          <h1 className={title()}>comunidad de jugadores</h1>
          <br />
          <h1 className={title()}>hispanohablantes</h1>
          <h2 className={subtitle({ class: "mt-2" })}>
            Unete a esta gran comunidad y se parte de esta aventura.
          </h2>
          <Link
            isExternal
            href="https://discord.gg/hijos-de-freyja-818547021777993748"
            className="mt-2"
          >
            <Button color="primary" variant="bordered" size="lg">
              Empezar
            </Button>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <Image
            width={500}
            alt="Frey Icon"
            src="https://i.imgur.com/WJeLfdR.png"
          />
        </div>
      </section>

      <section className="w-full grid grid-rows-1 grid-cols-1 sm:grid-cols-3 sm:gap-9 p-3 mt-5" id="games">
        <Card
          className="mb-5"
          isPressable
          onPress={() =>
            window.open("https://discord.gg/hijos-de-freyja-818547021777993748")
          }
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Hijos de Freyja</p>
            <small className="text-default-500">
              Comunidad Frey Hijos de Freyja
            </small>
            <h4 className="font-bold text-large">Valheim</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="valheim background"
              className="object-cover rounded-x1"
              src="https://i.imgur.com/TUCswF7.jpeg"
              width={350}
            />
          </CardBody>
        </Card>
        <Card
          className="mb-5"
          isPressable
          onPress={() =>
            window.open("https://discord.gg/palia-hispana-950509049898762321")
          }
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Palia Hispana</p>
            <small className="text-default-500">
              Comunidad Frey Palia Hispana
            </small>
            <h4 className="font-bold text-large">Palia</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 items-center">
            <Image
              alt="valheim background"
              className="object-cover rounded-x1"
              src="https://i.imgur.com/co7aYXn.png"
              width={200}
            />
          </CardBody>
        </Card>
        <Card
          className="mb-5"
          isPressable
          onPress={() =>
            window.open("https://discord.gg/hijos-de-freyja-818547021777993748")
          }
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Enshrouded</p>
            <small className="text-default-500">
              Comunidad Frey Enshrouded
            </small>
            <h4 className="font-bold text-large">Enshrouded</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="valheim background"
              className="object-cover rounded-x1"
              src="https://i.imgur.com/cn90swU.jpeg"
              width={350}
            />
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
