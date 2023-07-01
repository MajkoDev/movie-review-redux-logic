import { useDispatch } from "react-redux";
import { addMovieToPersonal } from "../redux/personalStore";

export default function MovieCart({ name }) {
  const dispatch = useDispatch();

  

  return (
    <div className="movie-cart">
      <h3>{name}</h3>
      <p className="small-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint odit
        reiciendis beatae sunt, placeat assumenda perferendis, expedita
        cupiditate voluptatibus nobis! In, asperiores!
      </p>
      <button >Watched</button>
      <button>Wished</button>
    </div>
  );
}
