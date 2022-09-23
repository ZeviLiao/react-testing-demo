import { useEffect, useRef } from "react";
import { Observable } from "rxjs";

function App() {
  const ref = useRef(null);
  const test = () => {
    // subscribe
    const sbb = (sub: any) => { //可訂閱的片子。
      sub.next(1); // 片子
      sub.next(2);
      sub.complete();
    };
    // observable - create a stream -
    const data$ = new Observable(sbb);   // 網飛.

    //

    // observer
    const obr = {
      next: (v: any) => console.log(v),  // 看片子。
      error: (err: any) => console.log(err),
      complete: () => console.log("ok"),
    };
    // subscribe stream.
    data$.subscribe(obr);  // 付錢訂閱
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
