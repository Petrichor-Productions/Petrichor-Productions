import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'


import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { BackgroundImage } from '@/components/BackgroundImage'

import pic from '@/images/hntkap/insta-square1.jpg'

import { Cal } from '@/components/Calendar'
import Calendar from 'react-calendar'

const lutherCentre = "10012 81 Ave NW, Edmonton, AB";
const lutherCentreGeo = "geo:37.786971,-122.399677";

const showtimes = [
  {
    date: '2024-08-16',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '13:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-17',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '23:30',
    duration: {hours: 1}
  },
  {
    date: '2024-08-18',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '13:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-19',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '17:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-20',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '21:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-21',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '13:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-22',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '16:00',
    duration: {hours: 1}
  },
  {
    date: '2024-08-24',
    name: 'The Luther Centre',
    address: lutherCentre,
    geo: lutherCentreGeo,
    imageUrl: pic.src,
    start: '21:45',
    duration: {hours: 1}
  },
]


function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$25K – $50K" name="budget" value="25" />
                <RadioInput label="$50K – $100K" name="budget" value="50" />
                <RadioInput label="$100K – $150K" name="budget" value="100" />
                <RadioInput label="More than $150K" name="budget" value="150" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
        <div className="relative mt-10 max-w-2xl space-y-6 text-base">
        <p className='mt-10'>
          Please send us an email if you would like to get in touch! Please keep in mind that we occupy both UK and North American Eastern Time Zones (EST) and will respond accordingly!
        </p>
        </div>
        <dl className="mt-6 grid grid-cols-1 gap-1 text-sm sm:grid-cols-3">
            <div key="mailing">
              <dd>
                <Office name="Mailing Address">
                  4650 Rue Hutchison
                  <br />
                  H2V 3Z9
                  <br />
                  Montréal, QC
                  <br />
                  Canada
                </Office>
              </dd>
            </div>
          {[
            ['Press', 'press@petrichor-productions.ca'],
            ['Bookings', 'booking@petrichor-productions.ca'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
          </dl>

        {/*/
        <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
       </Border>
        */}
    </FadeIn>
  )
}




export const metadata: Metadata = {
  title: 'How Not to Kill a Plant',
  description: 'A New Musical, premiering at the Edmonton Fringe Festival',
}

export default function Contact() {
  return (
    <>
        <BackgroundImage position='right' className="bottom-40 -top-40" />
      <PageIntro eyebrow="Showtimes" title="How Not to Kill a Plant">
        <p>a story of love, grief, and growth</p>
      </PageIntro>

      <Container className="relative">
        <Cal showtimes={showtimes} /> 
      </Container>
    </>
  )
}
