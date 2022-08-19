import { ticketInterface } from "data/tickets";
import { FC, useRef, useState, TouchEvent } from "react";
import { StyledTicketsContainer } from "./styles";
import { Ticket } from "./Ticket";

export const TicketContainer: FC<{ data: ticketInterface[] }> = ({ data }) => {
  const ref = useRef(null);

  const [xDown, setXDown] = useState<any>(null);
  const [yDown, setYDown] = useState<any>(null);

  const [state, setState] = useState<JSX.Element[]>(
    data.map((t, id) => <Ticket {...t} key={id} />),
  );

  const pushUpList = () => {
    setState((prev) => {
      const array = prev;
      if (array.length > 1) {
        const firstElement: JSX.Element = array[0];
        const remainedElements = array.slice(1);
        remainedElements.push(firstElement);
        return remainedElements;
      }
      return prev;
    });
  };

  const pushDownList = () => {
    setState((prev) => {
      const array = prev;
      if (array.length > 1) {
        const lastElement: JSX.Element = array[array.length - 1];
        const remainedElements = array.slice(0, -1);
        remainedElements.unshift(lastElement);
        return remainedElements;
      }
      return prev;
    });
  };

  function handleTouchStart(evt: TouchEvent<HTMLDivElement>) {
    evt.preventDefault();
    const firstTouch = evt.touches[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  }

  function handleTouchMove(evt: TouchEvent<HTMLDivElement>) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
      } else {
        /* left swipe */
      }
    } else {
      if (yDiff > 0) {
        pushUpList();
      } else {
        pushDownList();
      }
    }
    /* reset values */
    setXDown(null);
    setYDown(null);
  }

  return (
    <StyledTicketsContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={ref}
    >
      {state.slice(0, 3)}
    </StyledTicketsContainer>
  );
};
