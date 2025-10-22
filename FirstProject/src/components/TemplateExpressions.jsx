const TemplateExpressions = () => {

    const name = "pedro"
    const data = {
        age: 22,
        job: "Programmer"
    }
    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce atua como : {data.job}</p>
            <p>{4+4}</p>
        </div>
    )

};

export default TemplateExpressions;