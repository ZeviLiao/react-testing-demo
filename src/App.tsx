import { useEffect, useRef } from "react";
import { fromEvent, Subject } from "rxjs";
import { map, filter } from "rxjs/operators";

function App() {
  const ref = useRef(null);
  const test = () => {
    // create stream.
    const click$ = fromEvent(ref.current as any, "click");

    // from another stream.
    const counter2$ = click$.pipe(map((o: any, i) => i + 1));

    const eventCtr$ = counter2$.pipe(filter((v) => v % 2 === 0));

    // subscribe stream.
    click$.subscribe();
    counter2$.subscribe((v) => console.log(v));
    eventCtr$.subscribe((v) => console.log("---", v));
  };

  useEffect(() => {
    test();

    return () => {};
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <button ref={ref}>+</button>
    </div>
  );
}

export default App;
