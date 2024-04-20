export default function WorksList({
  setWorkId,
}: {
  setWorkId: (arg: number | null) => void;
}) {
  return (
    <div className="sm:flex-[.75] sm:pt-[2rem]">
      <div className="text-gray-400 py-5">selected projects</div>
      <ul className="flex flex-col justify-center *:pb-2 font-bold">
        <li onClick={() => setWorkId(1)}>
          e-commerse shop
        </li>
        <hr />
        <li onClick={() => setWorkId(2)}>
          todo app
        </li>
        <hr />
        <li onClick={() => setWorkId(3)}>
          calculator
        </li>
        <hr />
      </ul>
    </div>
  );
}
