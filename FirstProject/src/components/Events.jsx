const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log("ativou o evento")
        console.log(e)
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
                <button>
                    
                </button>
            </div>
        </div>
    );
};

export default Events