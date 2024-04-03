'use client'

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

import cover01 from "../../public/images/projects/cover/project-01.jpg";
import cover02 from "../../public/images/projects/cover/project-02.jpg";
import cover03 from "../../public/images/projects/cover/project-03.jpg";
import cover04 from "../../public/images/projects/cover/project-04.jpg";
import cover05 from "../../public/images/projects/cover/project-05.jpg";
import cover06 from "../../public/images/projects/cover/project-06.jpg";

const data = [
  { img: cover01, name: "ADESTRA" },
  { img: cover02, name: 'DESK CONCEPT'},
  { img: cover03, name: 'TONIC'},
  { img: cover04, name: "ADESTRA" },
  { img: cover05, name: 'DESK CONCEPT'},
  { img: cover06, name: 'TONIC'},
]

export default function Home() {
  return (
    <main className="container mx-auto py-36 px-12">
      <h1 className="text-5xl font-bold leading-tight">Clear thinking at the wrong moment can stifle <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'creativity_',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'imagination_',
        5000,
        'connectedness_',
        5000,
      ]}
      wrapper="span"
      speed={50}
      style={{ backgroundColor: '#000', color: 'white', display: 'inline-block', padding: '0.25rem 1rem'}}
      repeat={Infinity}
    /></h1>
    <article className="py-12">
      <ul className="grid grid-cols-3 gap-x-8 gap-y-10">
       {data.map(project => (
        <li key={project.img}>
          <h2 className="pb-1 text-gray-400">Client {project.name}</h2>
          <p className="pb-4">The project name</p>
          <Image src={project.img} alt={project.name} width="100%" height="auto" />
        </li>
       ))}
      </ul>
    </article>
    </main>
  );
}
