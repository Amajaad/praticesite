import { useState, useRef } from "react";
import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CountUpComponent({ end }) {
  const [viewed, setViewed] = useState(false);
  const countUpRef = useRef(null);

  const { start, reset } = useCountUp({
    ref: countUpRef,
    end: end,
    startOnMount: false,
    enableScrollSpy: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible && !viewed) {
      setViewed(true);
      start();
    } else if (!isVisible && viewed) {
      setViewed(false);
      reset();
    }
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
      <span ref={countUpRef} id="counter" />
    </VisibilitySensor>
  );
}

export default CountUpComponent;
