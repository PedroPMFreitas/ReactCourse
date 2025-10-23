const Challange = () => {
   
    const x = 12;
    const y = 3;
    let s = x+y;


    return(
        <div>
            <div>{x} + {y} = </div>
            <button onClick={()=>{console.log({s})}}>
            Clique para receber a soma</button>

        </div>
       
    )
    
}

export default Challange