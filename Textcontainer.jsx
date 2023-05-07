import React,{useState} from "react";

const Textcontainer=()=>{


  const handleclick1=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }  

  const handleclick2=()=>{
  let newText2=text.toLowerCase();
  setText(newText2)

  }

  const handleclick3=()=>{
    setText("")
  }



const handlechange=(e)=>{
    setText(e.target.value)
}

    const[text,setText]=useState("");
return(

<>
<div className="textform">

<textarea    className="textform1"   value={text}  onChange={handlechange}></textarea>
</div>
<div className="button1">
    
<button className=" btn btn-primary  mx-2"   onClick={handleclick1}  >convert to uppercase</button>

<button className="btn btn-primary   mx-2"   onClick={handleclick2}>convert to lowercase</button>

<button className="btn btn-primary   mx-2"   onClick={handleclick3}>clear text   </button>

</div>
<div className="container" >
    <h5>Your Text Summary</h5>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p> {0.008 * text.split(" ").length} Minutes read {0.42*text.split(" ").length} Seconds read </p>
    
</div>





    </>
)

}
  export default Textcontainer;