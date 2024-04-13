import works from './works-data'

export default function Work({name}:{name:string}) {
    const work=works.find(item=>item.name===name)
  return (work&&
    <div>
        <div>{work.name}</div>
        <div>{work.description}</div>
        <img src={work.imageUrl} alt={work.name} />
    </div>
  )
}
