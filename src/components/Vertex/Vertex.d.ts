import Vertex from './Vertex';
export default interface IVertex{
    data:any,
    edges:Array<Vertex>
    addEdge:(vertex:Vertex)=>void
}