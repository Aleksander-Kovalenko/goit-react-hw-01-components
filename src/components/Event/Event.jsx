import { FaMapMarkerAlt, FaUserAlt, FaClock } from 'react-icons/fa';
import { GiDuration } from 'react-icons/gi';
import css from './Event.module.css';
import { formatEventStart, formatEventDuration, chipClassName } from '../utils';
import { EventInfo } from 'components/EventInfo/EventInfo';

export const Event = ({ name, location, speaker, start, end, type }) => {
  const startDate = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  const chipClass = `${css.chip} ${chipClassName(type)}`;
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <EventInfo text={location}>
        <FaMapMarkerAlt className={css.icon} size="16" />
      </EventInfo>
      <EventInfo text={speaker}>
        <FaUserAlt className={css.icon} size="16" />
      </EventInfo>
      <EventInfo text={startDate}>
        <FaClock className={css.icon} size="16" />
      </EventInfo>
      <EventInfo text={`Розпочнеться через: ${duration}`}>
        <GiDuration className={css.icon} size="16" />
      </EventInfo>
      <span className={chipClass}>{type}</span>
    </div>
  );
};
