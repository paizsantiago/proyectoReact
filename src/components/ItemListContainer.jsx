import ItemList from "./ItemList";

export default function ItemListContainer({generarTitulo}) {
  
  return (
    <div>
      <h1>{generarTitulo()}</h1>
      <ItemList/>
    </div>

  )
}
