interface CharItemProps {
  char:{
    name: string,
    tvShows: string,
    imageUrl: string,
    films: string
  }
}

export default function CharItem(props: CharItemProps){
  return (
    <li>
       <strong>{props.char.name}</strong>
       <p>{props.char.tvShows[0]? props.char.tvShows[0] : props.char.films[0]}</p>
       <img src={props.char.imageUrl} alt="" />
    </li>
  )
}