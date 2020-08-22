import Vertex from './Vertex'
describe('Testing Vertex class...',()=>{
	const newYork = new Vertex("New York");
	const washington = new Vertex("Washington");
	it('should construct correctly.',()=>{
		expect(newYork.data).toBe("New York");
	})
	newYork.addEdge(washington,200);
	washington.addEdge(newYork,200)
	it('should add edge correctly.',()=>{
		expect(newYork.edges[0].end).toBe(washington);
	})
	it('should add edge weight correctly.',()=>{
		expect(washington.edges[0].weight).toBe(200);
	})
	
})