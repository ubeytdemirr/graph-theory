import Graph from "../../components/Graph/Graph";
import findComponents from "./connectedComponents";

describe("Finding connected components",()=>{
    const busNetwork = new Graph()
	const mersin = busNetwork.addVertex("Mersin")
	const adana = busNetwork.addVertex("Adana");
	const hatay = busNetwork.addVertex("Hatay");
    const gaziantep = busNetwork.addVertex("Gaziantep");
    const urfa = busNetwork.addVertex("Urfa");
    const maras = busNetwork.addVertex("KahramanMaraş");
    const konya = busNetwork.addVertex("Konya");
    console.log({konya,maras})
	busNetwork.addEdge(adana,gaziantep,223.5);
	busNetwork.addEdge(adana,mersin,85)
	busNetwork.addEdge(adana,hatay,178);
    busNetwork.addEdge(gaziantep,hatay,167)
    busNetwork.addEdge(gaziantep,urfa,150)
    it("should detect connected components",()=>{
        const {count,components} = findComponents(busNetwork); 
        
        expect(count).toBe(7);
        // since these two cities are not connected they should be alone
        expect(components[count-1].length).toBe(1)
        expect(components[count-2].length).toBe(1)
    })
})