import { useEffect } from "react";
import { range, filter, map } from "rxjs";

function App() {
  const test = () => {
    range(1, 10)
      .pipe(
        filter((x) => x % 2 === 1),
        map((x) => x + x)
      )
      .subscribe((x) => console.log(x));
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
