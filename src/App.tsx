import { useEffect, useRef } from "react";
import { Observable } from "rxjs";

function App() {
  const ref = useRef(null);
  const test = () => {
    // create stream.
    const data$ = new Observable((sub) => {
      sub.next(1);
      sub.next(2);
      sub.complete();
    });

    const obr = {
      next: (v: any) => console.log(v),
      error: (err: any) => console.log(err),
      complete: () => console.log("ok"),
    };
    // subscribe stream.
    data$.subscribe(obr);
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
