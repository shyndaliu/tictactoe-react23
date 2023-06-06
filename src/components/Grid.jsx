
export default function Grid(props) {

    const buttonContent = (element) => {
      return (<img src={props.imgSources[element.img]} />);
    }
    return (
      <div className="grid grid-cols-3 m-auto w-fit">
        {props.grid.map((element) => (
          <div key={element.id} className="relative group">
            <div className="absolute transition duration-500 opacity-75 -inset-1 blur group-hover:opacity-100"></div>
            <button
              onClick={() => props.handlePlay(element.id)}
              className="relative w-24 h-24 transition duration-500 bg-fuchsia-100 border-4 border-pink-200 hover:border-3 hover:bg-pink-50 hover:border-pink-100"
            > 
            {buttonContent(element)} 
            </button>
          </div>
        ))}
      </div>
    );
  }