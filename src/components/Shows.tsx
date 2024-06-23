'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

// little weaver
import playbillImage from '@/images/godcatcher/playbill.jpg'
import theatreScotlandImage from '@/images/godcatcher/theatre-scotland.png'
import theScotsmanImage from '@/images/godcatcher/the-scotsman.png'

// hntkap
import edmontonPlaceholder from '@/images/hntkap/festival guide thumb-5 (1).jpg'

const days = [
  {
    name: 'How Not To Kill a Plant',
    date: 'August 2024',
    place: 'Edmonton, Canada',
    dateTime: '2022-04-05',
    shows: [
      {
        name: 'Edmonton Fringe Website',
        subtitle: 'August 15-25 2024',
        image: edmontonPlaceholder,
        link: '/how-not-to-kill-a-plant',
      },
    ],
  },
  { 
    name: 'Little Weaver (God Catcher)',
    date: 'August 2023',
    place: 'Edinburgh, UK',
    dateTime: '2023-08',
    shows: [
      {
        name: 'Playbill Feature',
        subtitle: "This New Edinburgh Festival Fringe Musical Bills Itself as 'Wicked Meets Hadestown' — Leah Putnam",
        image: playbillImage,
        link: 'https://playbill.com/article/this-new-edinburgh-fringe-musical-bills-itself-as-wicked-meets-hadestown',
      },
      {
        stars: 5,
        name: 'Theatre Scotland',
        subtitle: '‘God Catcher’ is one of the best productions not only have I seen at the Fringe, but one of the best productions I have seen in 2023. — Lewis C. Baird',
        image: theatreScotlandImage,
        link: 'https://theatrescotland.co.uk/2023/08/25/god-catcher-ermintrude-underbelly-bristo-square-review-by-lewis-c-baird/',
      },
      {
        stars: 4,
        name: 'The Scotsman',
        subtitle: 'This Arachne for the #MeToo generation challenges how stories are told and by whom, and this is as threatening to those in power today as it was in ancient Greece — Susan Mansfield',
        image: theScotsmanImage,
        link: 'https://www.scotsman.com/arts-and-culture/edinburgh-festivals/edinburgh-festival-fringe-musicals-and-opera-reviews-well-have-nun-of-it-gone-to-the-dogs-god-catcher-4249418',
      },
    ],
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}></svg>
  )
}

export function Shows() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="shows"
      aria-labelledby="shows-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="shows-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Shows
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Upcoming and Previous Shows
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            <i>{day.name}</i>
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                        <span
                          className="mt-1 block text-1xl font-semibold tracking-tight text-blue-900"
                        >
                        {day.place}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.shows.reverse().map((show, showIndex) => (
                  <div key={showIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][showIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${showIndex % 3})` }}
                      >
                        <Link href={show.link}>
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={show.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        </Link>
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {show.name}
                      {show.stars != null && 
                      <br/>
                      }
                      {show.stars != null && '★'.repeat(show.stars)}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      <i>{show.subtitle}</i>
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
