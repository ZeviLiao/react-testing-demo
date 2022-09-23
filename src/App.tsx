import { useEffect, useRef } from "react";
// import { range, filter, map } from "rxjs";
import { Subject } from "rxjs";

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const data$ = new Subject(); // TV
  const test = () => {
    data$.subscribe((value) => {
      console.log(value);
    });

    // data$.next(1); // 送節目。
    // range(1, 10)
    //   .pipe(
    //     filter((x) => x % 2 === 1),
    //     map((x) => x + x)
    //   )
    //   .subscribe((x) => console.log(x));
  };

  const btnClick = () => {
    data$.next("hello");
  };

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
