import { useEffect, useRef } from "react";
// import { range, filter, map } from "rxjs";
import { Subject } from "rxjs";

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const test = () => {
    const data$ = new Subject(); // TV

    data$.subscribe((value) => console.log(value));

    data$.next(1); // 送節目。
    data$.next(2);
    data$.next(3);
    data$.next(4);
    // range(1, 10)
    //   .pipe(
    //     filter((x) => x % 2 === 1),
    //     map((x) => x + x)
    //   )
    //   .subscribe((x) => console.log(x));
  };

  const btnClick = () => console.log("hello");

  useEffect(() => {
    const btn = btnRef.current;
    btn?.addEventListener("click", btnClick);
    test();

    return () => {
      btn?.removeEventListener("click", btnClick);
    };
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <button ref={btnRef}>hello</button>
    </div>
  );
}

export default App;
