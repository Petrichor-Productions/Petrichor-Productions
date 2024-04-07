import { Hero } from '@/components/Hero'
// import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Shows } from '@/components/Shows'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Shows />
      {/* <Schedule /> */}
      <Sponsors />
    </>
  )
}
