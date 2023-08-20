import React from "react";

import {Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment)


const events = [
  {
    'title': 'All Day Event very long title',
    'allDay': true,
    'start': new Date(2023, 3, 0),
    'end': new Date(2023, 3, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2023, 3, 7),
    'end': new Date(2023, 3, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2016, 2, 13, 0, 0, 0),
    'end': new Date(2016, 2, 20, 0, 0, 0)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2016, 10, 6, 0, 0, 0),
    'end': new Date(2016, 10, 13, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2023, 3, 9, 0, 0, 0),
    'end': new Date(2023, 3, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2023, 3, 11),
    'end': new Date(2023, 3, 13),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2023, 3, 12, 10, 30, 0, 0),
    'end': new Date(2023, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start': new Date(2023, 3, 12, 12, 0, 0, 0),
    'end': new Date(2023, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start': new Date(2023, 3, 12, 14, 0, 0, 0),
    'end': new Date(2023, 3, 12, 15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start': new Date(2023, 3, 12, 17, 0, 0, 0),
    'end': new Date(2023, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start': new Date(2023, 3, 12, 20, 0, 0, 0),
    'end': new Date(2023, 3, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start': new Date(2023, 3, 13, 7, 0, 0),
    'end': new Date(2023, 3, 13, 10, 30, 0)
  },
  {
    'title': 'Birthday Party 2',
    'start': new Date(2023, 3, 13, 7, 0, 0),
    'end': new Date(2023, 3, 13, 10, 30, 0)
  },
  {
    'title': 'Birthday Party 3',
    'start': new Date(2023, 3, 13, 7, 0, 0),
    'end': new Date(2023, 3, 13, 10, 30, 0)
  },
  {
    'title': 'Late Night Event',
    'start': new Date(2023, 3, 17, 19, 30, 0),
    'end': new Date(2023, 3, 18, 2, 0, 0)
  },
  {
    'title': 'Multi-day Event',
    'start': new Date(2023, 3, 20, 19, 30, 0),
    'end': new Date(2023, 3, 22, 2, 0, 0)
  }
]

const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <h2 className='font-semibold text-3xl self-start max-w-lg leading-normal text-gray-900 mb-1'>Calender</h2>
      <p class="text-gray-500 whitespace-pre-line mb-2">
This is some text. This is some text. This is some text.

</p>
      <div style={{ height: 500 }}>
    <Calendar
      events={events}
      step={60}
      localizer={localizer}
      defaultDate={new Date(2023, 3, 1)}
      popup={false}
      onShowMore={(events, date) => this.setState({ showModal: true, events })}
    />
  </div>
    </div>
  )
}

export default Calender