import EventItem from "./event-item";
import classes from './event-list.module.css'

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => {
        return (
          <ul className={classes.list}>
            <EventItem
              key={event.id}
              id={event.id}
              title={event.title}
              location={event.location}
              date={event.date}
              image={event.image}
            />
          </ul>
        );
      })}
    </ul>
  );
}

export default EventList;
