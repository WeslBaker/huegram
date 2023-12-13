// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HueObject from './HueModel';

interface Props {
  hue: HueObject;
  toggleLike?: (id?:number) => void;
}

function getTextColor(backgroundColor:string): string
{
  const r_num = Number("0x" + backgroundColor.slice(1, 3));
  const g_num = Number("0x" + backgroundColor.slice(3, 5));
  const b_num = Number("0x" + backgroundColor.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  const text_color = hue_intensity > 186 ? "black" : "white";

  return text_color;
}

const Hue = (props: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-b-2xl rounded-t-xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
      onDoubleClick={() => props.toggleLike && props.toggleLike(props.hue.id)}
    >
      <p className={`hue-color text-${getTextColor(props.hue.color)} text-2xl opacity-80`}>{props.hue.color}</p>

      <div className="bg-slate-800 text-white flex w-full text-center justify-between p-4 rounded-b-xl">
        <p className="text-xl">{props.hue.username}</p>
        <button onClick={() => props.toggleLike && props.toggleLike(props.hue.id)}>
          {!props.hue.isLiked && <img className = "w-8" src="heart-unfilled.svg"></img>}
          {props.hue.isLiked && <img className = "w-8" src="heart-filled.svg"></img>}
        </button>



      </div>
    </div>
  );
};

export default Hue;
