import { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";

function App() {
  const ref = useRef(null);
  const test = () => {
    const data$ = fromEvent(ref.current as any, "click");
    data$.subscribe((v) => console.log("click"));
  };

  useEffect(() => {
    test();

    return () => {};
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <button ref={ref}>hello</button>
    </div>
  );
}

export default App;
