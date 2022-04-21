import styled from 'styled-components'

const Contenedor = styled.div`
width: 30vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
border: 1px solid #000;
`

const Button = styled.button`
border: none;
border-radius: 5px;
padding: 5px 10px;
margin: 5px;
font-size: 16px;
background: ${props => props.state ? "rgb(255,50,50)" : "rgb(109,238,63)"}
`

export default function Hour () {
  
  const Array =[
    {hour: 10, isOcupate: true},
    {hour: 11, isOcupate: false},
    {hour: 12, isOcupate: false},
    {hour: 13, isOcupate: true},
    {hour: 14, isOcupate: false},
    {hour: 15, isOcupate: false},
    {hour: 16, isOcupate: false},
    {hour: 17, isOcupate: false},
    {hour: 18, isOcupate: false},
    {hour: 19, isOcupate: false},
    {hour: 20, isOcupate: false},
    {hour: 21, isOcupate: false},
    {hour: 22, isOcupate: false}]


  return (
    <Contenedor>
      {
        Array.map(x => 
          {return (
            <Button state={x.isOcupate}>{x.hour}</Button>
          )}
          )
      }
    </Contenedor>
  )
}

