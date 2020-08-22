import Edge from "./Edge"
import Vertex from "../Vertex/Vertex"

describe('Testing Edge class...',()=>{
	const edge = new Edge(new Vertex("New York"),new Vertex("Washington"),200)
	it('should construct correctly.',()=>{
		expect(edge.start.data).toBe("New York");
		expect(edge.end.data).toBe("Washington");
		expect(edge.weight).toBe(200)
	})
})