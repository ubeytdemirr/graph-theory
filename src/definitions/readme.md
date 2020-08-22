#  Adjacency List


```js

{
    A:[{B:4},{C:1}],
    B:[{C:6}],
    C:[{A:4},{B:1},{D:2}],
    D:[]
}

// Eg : Node C can reach A with cost 4 , B with cost 1 , D with cost 2

```

| Pros                                           |                    Cons                    |
|------------------------------------------------|:------------------------------------------:|
| Space efficient for  representing sparse graphs*|            Less space efficient for denser graphs         |
| Iterating over all edges is efficient                     | Edge weight look up is O(E) |
|     -     |   Slightly more complex graph representation


*Sparse graph is a graph in which the number of edges is close to the minimal number of edges. Sparse graph can be a disconnected graph.



----------------------------------------------------------


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


--------------------------------------



# Edge List
```js

 [
     {start:C,end:A,weight:4},
     {start:A,end:C,weight:1},
     {start:B,end:C,weight:5}
     ...
 ]


```

| Pros                                           |                    Cons                    |
|------------------------------------------------|:------------------------------------------:|
| Space efficient for  representing sparse graphs |            Less space efficient for denser graphs           |
| Iterating over all edges is efficient                  | Edge weight look up is O(E) |
| Very simple structure              |  