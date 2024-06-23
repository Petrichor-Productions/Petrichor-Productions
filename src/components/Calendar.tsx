'use client'

import { Calendar } from 'react-calendar'

import { useState } from 'react';

import { isAfter, isBefore, isPast, format, isEqual, parse, parseISO, min, add, formatISO } from "date-fns";

import { Menu } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

import { isMacOs, isIOS } from 'react-device-detect';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function geoURI(uri): string | undefined {
  const u = uri.replace("geo:", "");
  // const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  if (isMacOs || isIOS) {
    return `maps:0,0?q=${u}`
  }
    
  return `geo:0,0?q=${u}`
}

function starttime(date, time) {
  return {
    string: date + "T" + time,
    date: parseISO(date + "T" + time)
  };
}

function endtime(date, time, duration) {
  return {
    string: formatISO(add(parseISO(date + "T" + time), duration)),
    date: add(parseISO(date + "T" + time), duration)
  }
}

export function Cal(props) {

  const mindate = parse(props.showtimes.reduce(function(prev, curr) {
    return prev.date < curr.date ? prev : curr;
  }).date, "yyyy-MM-dd", new Date());

  const maxdate = parse(props.showtimes.reduce(function(prev, curr) {
    return prev.date > curr.date ? prev : curr;
  }).date, "yyyy-MM-dd", new Date());

  var defaultDate = new Date();
  if (isBefore(defaultDate, mindate)) {
    defaultDate = mindate;
  } 

    const [date, setDate] = useState<Value>(defaultDate);
  
    function handleClick(value, event) {
      setDate(value);
    }

    function tileDisabled({ date, view }) {
      // Disable tiles in month view only
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is on the list of disabled dates
        // return isPast(date);

        return props.showtimes.filter( (showtime) => showtime.date == format(date, 'yyyy-MM-dd') ).length == 0 ;
      }
  
      return true;
    }


    return (
      <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
        <div>
            <Calendar 
                onChange={handleClick} 
                value={date} 
                defaultValue={defaultDate} 
                minDate={mindate} 
                maxDate={maxdate} 
                maxDetail="month" 
                minDetail="month" 
                showNavigation={true}
                prevLabel={<ChevronLeftIcon className="w-8 ml-4" aria-hidden="true"/>}
                nextLabel={<ChevronRightIcon className="w-8 mr-4" aria-hidden="true"/>}
                prev2Label={null}
                next2Label={null}
                tileDisabled={tileDisabled}
                />
        </div>
        <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Schedule for <time dateTime={format(date, "yyyy-MM-dd")}>{format(date, "PPP")}</time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {props.showtimes.filter((showtime) => showtime.date == format(date, 'yyyy-MM-dd')).map((showtime) => (
            <li
              key={starttime(showtime.date, showtime.start).string}
              className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img src={showtime.imageUrl} alt="" className="h-10 w-10 flex-none rounded-full" />
              <div className="flex-auto">
                <p className="text-gray-900">{showtime.name}</p>
                <p className="text-indigo-500"><a href={geoURI(showtime.geo)}>{showtime.address}</a></p>
                <p className="mt-0.5">
                  <time dateTime={starttime(showtime.date, showtime.start).string}>{format(starttime(showtime.date, showtime.start).date, "p")}</time> -{' '}
                  <time dateTime={endtime(showtime.date, showtime.start, showtime.duration).string}>{format(endtime(showtime.date, showtime.start, showtime.duration).date, "p")}</time>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      </div>
    );
  }