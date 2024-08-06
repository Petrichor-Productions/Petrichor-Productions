import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import Image from 'next/image'

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


import imageCassieMuise from '@/images/avatars/cassie-muise.jpg'
import imageTylerMcKinnon from '@/images/avatars/tyler-mckinnon.jpg'
import imageMorganSmith from '@/images/avatars/morgan-smith.jpg'
import imageMarcllaLafreniere from '@/images/avatars/marcella-lafreniere.jpg'
import imageKaelWynn from '@/images/avatars/Kael-Wynn.jpg'
import imageMiloDubon from '@/images/avatars/milo-dubon.jpg'

const lutherCentre = "10012 81 Ave NW, Edmonton, AB";
const lutherCentreGeo = "geo:53.51727,-113.489216";
const lutherCentreMaps = "https://maps.app.goo.gl/nfDWYDvEUxGq14M38";

const showtimes = [
  {
    date: '2024-08-16',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '13:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-17',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '23:30',
    duration: {hours: 1}
  },
  {
    date: '2024-08-18',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '13:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-19',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '17:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-20',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '21:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-21',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '13:45',
    duration: {hours: 1}
  },
  {
    date: '2024-08-22',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
    imageUrl: pic.src,
    start: '16:00',
    duration: {hours: 1}
  },
  {
    date: '2024-08-24',
    name: 'FOH Pro Stage',
    address: lutherCentre,
    geo: lutherCentreGeo,
    maps: lutherCentreMaps,
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




const people = [
  {
    name: 'Cassie Muise',
    pronouns: "she/her",
    role: 'Denise, Writer, Director, Producer',
    image: { src: imageCassieMuise },
    bio: <>Cassie Muise is originally from Nova Scotia and has an array of experience including film, theatre, teaching, directing and writing. Cassie and Tyler have co-written How Not To Kill A Plant and Little Weaver (previously God Catcher), which made its world premiere at the Edinburgh Fringe Festival in 2023. Select credits include: Wednesday in The Addams Family, Tina Denmark in Ruthless, Nickie in Sweet Charity and the short film T Minus. She is currently based in Montréal with her partner Blair and their dogs, Fiyero and Kelso. Her favourite plant is the rubus idaeus, otherwise known as the red raspberry. While the deliciously tart fruit is well known, raspberry leaf makes delicious tea to help with inflammation, digestion, and more. Cassie especially loves the rubus idaeus for the memories of picking them with her grandfather, Vincie.</>,
    linkedinUrl: 'https://ca.linkedin.com/in/cassie-muise-she-her-479462a',
    instaUrl: 'https://www.instagram.com/cassiemuise/',
  },
  {
    name: 'Tyler McKinnon',
    pronouns: "he/him",
    role: 'Tom, Composer, Producer',
    image: { src: imageTylerMcKinnon},
    bio: <>Tyler McKinnon is an actor/composer from Leduc, Alberta, now based in London, UK. Tyler is one half the writing team for ‘How Not To Kill A Plant’ and he is thrilled to be performing in and debuting the show this year at the Edmonton International Fringe Festival. Previous credits include: Co-writer of ‘God Catcher’, a new musical, premiered at the Edinburgh Fringe Festival. A Gentleman’s Guide to Love and Murder (Stage West Calgary), And The World Goes ‘Round (Stage West Calgary), and ‘Fiddler On The Moose’ (Victoria Playhouse). Tyler’s favourite plant is the Spider plant! (Chlorophytum comosum), because it purifies the air, and when it outgrows it’s pot, it sends out offshoots or spiderettes, looking for new soil to conquer! It’s not flashy but not afraid either, a great little reminder to branch out when you outgrow your current space.</>,
     xUrl: 'https://twitter.com/tyler_mckinnon1',
    instaUrl: 'https://www.instagram.com/tmvocalists/',
    spotifyUrl: 'https://open.spotify.com/artist/0jODXf7ls0v8o4ue766ZQZ',
  },
  {
    name: 'Morgan Smith',
    pronouns: "he/him",
    role: 'Howard',
    image: { src: imageMorganSmith },
    bio: <>Morgan has been involved in live theatre since 2009 when he landed a role in the chorus of <i>Joseph&apos;s Technicolor Dreamcoat</i>. Since then, he&apos;s been fortunate enough to play the <i>Man in Chair in The Drowsy Chaperone</i>, Alfie Byrne in <i>A Man of No Importance</i>, and Father in Sara&apos;s Rules&apos; rendition of <i>Eurydice</i>. Morgan is delighted to be involved in a new fringe work that exemplifies the idea that love, respect and humanity will eventually rule the day!</>,
    instaUrl: 'https://www.instagram.com/petrichorproductionscanada/',
  },
    {
      name: 'Milo Dubon',
      pronouns: "he/him",
      role: 'Kai',
      image: { src: imageMiloDubon },
      bio: <>Milo is entering his fourth year at MacEwan University, pursuing a BFA in Music Theatre Performance. He is excited to perform at the Edmonton Fringe Festival for the first time and shares his passion for making space for trans and non-binary performers with this incredible cast. Recent credits include Feste in Twelfth Night and Nate/ensemble in Legally Blonde (MacEwan University). He would like to thank his family and friends in Calgary for their endless support and a special shoutout to Chassidy Andrews for keeping him sane this summer. His favourite plant is the common lilac bush.</>,
     instaUrl: 'https://www.instagram.com/milo.em.dubon/'
    },
    {
      name: 'Kael Wynn',
      pronouns: "he/him",
      role: 'Tom Understudy',
      image: { src: imageKaelWynn },
      bio: <>Kael is an Edmonton based actor and writer as well as an avid boardgamer, Dungeons & Dragons DM, rock climber and is currently three books deep into the Witcher Saga! He is absolutely thrilled to be a part of How Not To Kill A Plant with Petrichor Productions, surrounded by an incredible group of artists from near and far. This is Kael’s first fringe since 2016, before University, COVID and a two year stint in Toronto where he spent way too much money on milk. Kael’s favourite plant is Fireweed! One of the first plants to grow after a fire, their bright purple flowers poking up above the ash. The first in new beginnings.</>,
      instaUrl: 'https://www.instagram.com/baby.greens/'
    },
  {
    name: 'Marcella Lafreniere',
    pronouns: "she/her",
    role: 'Stage Manager',
    image: { src: imageMarcllaLafreniere },
  bio: <>Marcella is a theatre production student going into the third year of her BFA in the fall at MacEwan University. She has a passion for costumes, theatre, and the fine arts in general. Some of her past shows include <i>The Tempest </i>(Freewill Shakespeare Festival), <i>Spring Awakening</i>, <i>Legally Blonde</i>, and <i>Sunday in the Park with George</i> (MacEwan). <i>How Not to Kill a Plant </i> will not only be Marcella\’s first ever Fringe show, but will also be her first show as a stage manager! She is beyond excited and grateful for the opportunity to learn and to be a part of it. Her favourite plant is the amelanchier alnifolia, more commonly known as a saskatoon berry or juneberry shrub.</>,
   instaUrl: 'https://www.instagram.com/petrichorproductionscanada/'
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
    <div className="bg-white py-24 md:py-32 lg:py-40 space-y-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the cast and creative team of How Not To Kill A Plant:
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image 
              alt="" 
              className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
              priority
              {...person.image}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name} ({person.pronouns})</h3>
              <p className="text-base leading-7 text-gray-600"><b>{person.role}</b></p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">

                {person.instaUrl && <li>
                  <a href={person.instaUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </a>
                </li>}


                {person.xUrl && <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>}

                { person.spotifyUrl && <li>
                  <a href={person.spotifyUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Spotify</span>
                    <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                    </svg>
                  </a>
                </li>} 

                {person.linkedinUrl && <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>}

              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Container>
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

      <Container className="mt-16">
     {/*/
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      */}
        <Team />
      </Container>
      {/*/
      

      <Container className="mt-20">
          <h3 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            Statistics You Might Not Know
          </h3>
          <p>
            <b>About the show</b> <i>yo</i>
          </p>
      </Container>
      */}
    </>
  )
}
