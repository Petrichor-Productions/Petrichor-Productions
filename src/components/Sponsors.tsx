import Image from 'next/image'

import { Container } from '@/components/Container'
import MaltaArtsCouncil from '@/images/godcatcher/malta-ac.png'
import CanadaCouncilForTheArts from '@/images/godcatcher/cca.png'

const sponsors = [
  { name: 'Canada Council for the Arts', logo: CanadaCouncilForTheArts, x: 450, y: 250 },
  { name: 'Arts Council Malta', logo: MaltaArtsCouncil, x: 150, y: 150 },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Past and Present Sponsors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-12 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="items-center justify-center"
            >
              <Image width={sponsor.x} height={sponsor.y} src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
