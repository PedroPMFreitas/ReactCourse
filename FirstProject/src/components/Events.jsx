const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log("ativou o evento")
        console.log(e)
    }

    const renderSomething = (x) => {

        if(x){
            return <h1>renderizando isso</h1>
        }else{
            return <h1>tambem posso renderizar isso</h1>
        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick = {() => console.log("clicou")}>
                    Clique aqui tambem
                </button>
                <button onClick={() => {
                    if(true)console.log ("isso nao deveria existir =)")

                }}>Clique aqui por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events