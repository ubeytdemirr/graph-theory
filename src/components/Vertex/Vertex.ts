import IVertex from './Vertex';
import Edge from '../Edge/Edge';
class Vertex implements IVertex{
	data:any;
	edges:Array<Edge>;
	constructor(data:any,edges:Array<Edge>=[]){
		this.data=data;
		this.edges=edges;
	}
	addEdge(vertex:Vertex,weight:number):void{
		this.edges.push(new Edge(this,vertex,weight));
	}
	print():void{
		const data = this.data;
		const verticeDatas = this.edges.map((edge)=>edge.end.data);
		console.info(`${data}--->${verticeDatas.join("--->")}`)
	}
}
export default Vertex;