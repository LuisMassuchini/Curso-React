import Button from "./Button"

function Evento (){

    function meuEvento(){
        console.log(`Opa, fui ativado!`)
    }

    function segundoEvento () {
        console.log(`Ativando o segundo Evento`)
    }

    return (
        <div>
            <p>Clique para dispara um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            
        </div>
    )
}
export default Evento