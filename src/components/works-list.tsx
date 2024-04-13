export default function WorksList({setWork}:{setWork:(arg: string) => void}) {
  return (
    <div className="sm:flex-[.75] sm:pt-[2rem]">
      <div className="text-gray-400 py-5">selected projects</div>
      <ul className="flex flex-col justify-center *:pb-2 font-bold">
        <li onClick={()=>setWork('shop')}>e-commerse shop</li>
        <hr />
        <li onClick={()=>setWork('shop2')}>todo app</li>
        <hr />
        <li onClick={()=>setWork('shop')}>calculator</li>
        <hr />
      </ul>
    </div>
  );
}
