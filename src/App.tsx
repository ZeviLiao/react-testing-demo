import { useEffect, useRef } from "react";
import { fromEvent, Subject } from "rxjs";
import { map } from "rxjs/operators";

function App() {
  const ref = useRef(null);
  const test = () => {
    const click$ = fromEvent(ref.current as any, "click");

    const counter2$ = click$.pipe(
      map((o: any, i) => {
        // console.log(o.x, o.y);
        console.log(i + 1 + "-zevi");
      })
    );

    click$.subscribe();

    counter2$.subscribe();
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
