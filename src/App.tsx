import { useEffect, useRef } from "react";
import { fromEvent, Subject } from "rxjs";

function App() {
  const ref = useRef(null);

  let cnter = 0;
  const counter$ = new Subject();

  const test = () => {
    const btnEvent$ = fromEvent(ref.current as any, "click");
    btnEvent$.subscribe((v) => {
      ++cnter;
      counter$.next(cnter);
      // console.log("click")
    });
    counter$.subscribe((v) => console.log(v));
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
