export declare class Graph {
    private ids;
    private graph;
    addNode<T = any>(node: GraphNode<T>): GraphNode<any>;
    addLink<T = any>(link: GraphLink<T>): GraphLink<T>;
    toJSON(): GraphData<any, any>;
}
export interface GraphNode<T = any> {
    id: string;
    name?: string;
    group?: string;
    value?: T;
}
export interface GraphLink<T = any> {
    source: string;
    target: string;
    name?: string;
    value?: T;
}
export interface GraphData<A = any, B = any> {
    name?: string;
    description?: string;
    nodes: GraphNode<A>[];
    links: GraphLink<B>[];
}
