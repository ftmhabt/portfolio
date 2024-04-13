import works from './works-data'

export default function Work({name}:{name:string}) {
    const work=works.find(item=>item.name===name)
  return (work&&
    <div className='absolute w-screen top-[1000px] left-0'>
        <div>{work.name}</div>
        <div>{work.description}</div>
        <img src={work.imageUrl} alt={work.name} />
    </div>
  )
}
