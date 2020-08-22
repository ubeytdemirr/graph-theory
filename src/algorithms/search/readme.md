# Depth First Search 

The Depth First Search (DFS) is the most fundamental search algorithm used to explore nodes and edges of a graph. It runs with a time complexity O(V+E) and is often used as a building block in other algorithms. 


By itself DFS is not all that useful , but **when augmented** to perform other tasks such as  count connected components, determine, connectivity, or find bridges/articulation points then **DFS really shines**.


As the name suggests, a DFS plunges depth first into a graph without regard for which edge it takes until it cannot go any further at which point it backtracks and continues.