import UseState from "../states/method";

const First = () => {
    const[data,setData] = UseState(0);
    console.log(data);

    return(
        <div>
            <p> my name is aman </p>
            <button onClick={  data} ></button>
        </div>
    )
}
export default First;