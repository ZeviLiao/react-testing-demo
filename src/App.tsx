import { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";

function App() {
  const buttonHandler = (buttonRef: any) => {
    const data$ = fromEvent(buttonRef, "click");
    data$.subscribe((v) => console.log("click"));
  };
  const test = () => {};

  useEffect(() => {
    // test();

    return () => {};
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <button ref={buttonHandler}>hello</button>
    </div>
  );
}

export default App;
