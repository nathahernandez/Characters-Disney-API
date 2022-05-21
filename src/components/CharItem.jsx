export default function CharItem(props){
  return (
    <li>
       <strong>{props.char.name}</strong>
       <p>{props.char.tvShows[0]? props.char.tvShows[0] : props.char.films[0]}</p>
       <img src={props.char.imageUrl} alt="" />
    </li>
  )
}