import { add } from "math-helpers";

export default function Page(): JSX.Element {
  return (
    <>
      <h1 className="text-xl">Web</h1>
      <p>1 + 2 = {add(1, 2)}</p>
    </>
  );
}
