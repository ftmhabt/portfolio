import works from './works-data'

export default function Work({name,effect}:{name:string,effect:boolean}) {
    const work=works.find(item=>item.name===name)
  return (work&&
    <div className={`absolute w-screen top-[300px] left-0 ${effect&&'animate-top'}`}>
        <div>{work.name}</div>
        <div>{work.description}</div>
        <img src={work.imageUrl} alt={work.name} />
    </div>
  )
}
