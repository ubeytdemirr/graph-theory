# Adjacency Matrix

```js
   A B C D
A [0,2,3,4]
B [2,0,3,4]
C [0,3,0,3]
D [4,4,3,0]

```

| Pros                                           |                    Cons                    |
|------------------------------------------------|:------------------------------------------:|
| Space efficient for  representing dense graphs* |            Requires O(V^2) space           |
| Edge weight lookup is O(1)                     | Iterating over all edges takes O(v^2) time |
| Simplest graph representation                  |                                            |



*A dense graph is a graph in which the number of edges is close to the maximal number of edges. 