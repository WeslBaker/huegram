import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface HueObject {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
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
      className="flex flex-col h-64 aspect-square rounded-xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
    >
      <p className={`hue-color text-${getTextColor(props.hue.color)} text-2xl opacity-80`}>{props.hue.color}</p>

      <div className="bg-slate-800 text-white flex w-full text-center justify-center p-4 rounded-b-xl">
        <p className="text-xl">{props.hue.username}</p>
        {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}

      </div>
    </div>
  );
};

export default Hue;
