export default function WorksList({
  setWorkId,
  setIsAnimating
}: {
  setWorkId: (arg: number | null) => void;
  setIsAnimating: (arg: boolean) => void;
}) {
  const handleClick = (id:number) => {
    setWorkId(id);
    setIsAnimating(false); 
  };
  return (
    <div className="sm:flex-[.75] sm:pt-[2rem]">
      <div className="text-gray-400 py-5">selected projects</div>
      <ul className="flex flex-col justify-center *:pb-2 font-bold">
        <li onClick={() => handleClick(1)}>
          e-commerse shop
        </li>
        <hr />
        <li onClick={() => handleClick(2)}>
          todo app
        </li>
        <hr />
        <li onClick={() => handleClick(3)}>
          calculator
        </li>
        <hr />
      </ul>
    </div>
  );
}
