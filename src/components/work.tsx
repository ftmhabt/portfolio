import works from './works-data'

export default function Work({name,effect}:{name:string,effect:number}) {
    const work=works.find(item=>item.name===name)
  return (work&&
    <div className={`absolute w-screen top-[300px] left-0 ${effect===work.id&&'animate-top'}`}>
        <div>{work.name}</div>
        <div>{work.description}</div>
        <img src={work.imageUrl} alt={work.name} />
    </div>
  )
}
