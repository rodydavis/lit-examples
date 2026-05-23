import{g as De}from"./_commonjsHelpers-Cpj98o6Y.js";import{h as Qe}from"./Paired-C4wB-ooD.js";function Re(t){We(t);const e=Ve(t);return t.on=e.on,t.off=e.off,t.fire=e.fire,t}function Ve(t){let e=Object.create(null);return{on:function(n,r,u){if(typeof r!="function")throw new Error("callback is expected to be a function");let d=e[n];return d||(d=e[n]=[]),d.push({callback:r,ctx:u}),t},off:function(n,r){if(typeof n>"u")return e=Object.create(null),t;if(e[n])if(typeof r!="function")delete e[n];else{const v=e[n];for(let p=0;p<v.length;++p)v[p].callback===r&&v.splice(p,1)}return t},fire:function(n){const r=e[n];if(!r)return t;let u;arguments.length>1&&(u=Array.prototype.slice.call(arguments,1));for(let d=0;d<r.length;++d){const v=r[d];v.callback.apply(v.ctx,u)}return t}}}function We(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");const e=["on","fire","off"];for(let n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}function Wt(t){if(t=t||{},"uniqueLinkId"in t&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),t.multigraph=t.uniqueLinkId),t.multigraph===void 0&&(t.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,n=new Map,r={},u=0,d=t.multigraph?A:z,v=[],p=b,i=b,l=b,h=b,B={version:20,addNode:w,addLink:Q,removeLink:D,removeNode:q,getNode:m,getNodeCount:E,getLinkCount:k,getEdgeCount:k,getLinksCount:k,getNodesCount:E,getLinks:R,forEachNode:le,forEachLinkedNode:a,forEachLink:J,beginUpdate:l,endUpdate:h,clear:H,hasLink:M,hasNode:m,getLink:M,getLinkById:I};return Re(B),L(),B;function L(){var s=B.on;B.on=c;function c(){return B.beginUpdate=l=P,B.endUpdate=h=j,p=$,i=y,B.on=s,s.apply(B,arguments)}}function $(s,c){v.push({link:s,changeType:c})}function y(s,c){v.push({node:s,changeType:c})}function w(s,c){if(s===void 0)throw new Error("Invalid node identifier");l();var g=m(s);return g?(g.data=c,i(g,"update")):(g=new Ue(s,c),i(g,"add")),e.set(s,g),h(),g}function m(s){return e.get(s)}function q(s){var c=m(s);if(!c)return!1;l();var g=c.links;return g&&(g.forEach(F),c.links=null),e.delete(s),i(c,"remove"),h(),!0}function Q(s,c,g){l();var x=m(s)||w(s),S=m(c)||w(c),C=d(s,c,g),N=n.has(C.id);return n.set(C.id,C),pe(x,C),s!==c&&pe(S,C),p(C,N?"update":"add"),h(),C}function z(s,c,g){var x=Z(s,c),S=n.get(x);return S?(S.data=g,S):new he(s,c,g,x)}function A(s,c,g){var x=Z(s,c),S=r.hasOwnProperty(x);if(S||M(s,c)){S||(r[x]=0);var C="@"+ ++r[x];x=Z(s+C,c+C)}return new he(s,c,g,x)}function E(){return e.size}function k(){return n.size}function R(s){var c=m(s);return c?c.links:null}function D(s,c){return c!==void 0&&(s=M(s,c)),F(s)}function F(s){if(!s||!n.get(s.id))return!1;l(),n.delete(s.id);var c=m(s.fromId),g=m(s.toId);return c&&c.links.delete(s),g&&g.links.delete(s),p(s,"remove"),h(),!0}function M(s,c){if(!(s===void 0||c===void 0))return n.get(Z(s,c))}function I(s){if(s!==void 0)return n.get(s)}function H(){l(),le(function(s){q(s.id)}),h()}function J(s){if(typeof s=="function")for(var c=n.values(),g=c.next();!g.done;){if(s(g.value))return!0;g=c.next()}}function a(s,c,g){var x=m(s);if(x&&x.links&&typeof c=="function")return g?f(x.links,s,c):o(x.links,s,c)}function o(s,c,g){for(var x,S=s.values(),C=S.next();!C.done;){var N=C.value,Ae=N.fromId===c?N.toId:N.fromId;if(x=g(e.get(Ae),N),x)return!0;C=S.next()}}function f(s,c,g){for(var x,S=s.values(),C=S.next();!C.done;){var N=C.value;if(N.fromId===c&&(x=g(e.get(N.toId),N),x))return!0;C=S.next()}}function b(){}function P(){u+=1}function j(){u-=1,u===0&&v.length>0&&(B.fire("changed",v),v.length=0)}function le(s){if(typeof s!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+s);for(var c=e.values(),g=c.next();!g.done;){if(s(g.value))return!0;g=c.next()}}}function Ue(t,e){this.id=t,this.links=null,this.data=e}function pe(t,e){t.links?t.links.add(e):t.links=new Set([e])}function he(t,e,n,r){this.fromId=t,this.toId=e,this.data=n,this.id=r}function Z(t,e){return t.toString()+"👉 "+e.toString()}var de={exports:{}},Y={exports:{}},xe=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Ge=xe;var G=function(e){return n;function n(r,u){let d=u&&u.indent||0,v=u&&u.join!==void 0?u.join:`
`,p=Array(d+1).join(" "),i=[];for(let l=0;l<e;++l){let h=Ge(l),B=l===0?"":p;i.push(B+r.replace(/{var}/g,h))}return i.join(v)}};const we=G;Y.exports=ze;Y.exports.generateCreateBodyFunctionBody=Be;Y.exports.getVectorCode=Ce;Y.exports.getBodyCode=$e;function ze(t,e){let n=Be(t,e),{Body:r}=new Function(n)();return r}function Be(t,e){return`
${Ce(t,e)}
${$e(t)}
return {Body: Body, Vector: Vector};
`}function $e(t){let e=we(t),n=e("{var}",{join:", "});return`
function Body(${n}) {
  this.isPinned = false;
  this.pos = new Vector(${n});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${n}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Ce(t,e){let n=we(t),r="";return e&&(r=`${n(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${n("{var}",{join:", "})}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${n('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${n("this.{var} = v.{var};",{indent:4})}
    } else {
      ${n('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${n("this.{var} = ",{join:""})}0;
  };`}var He=Y.exports,O={exports:{}};const ue=G,T=xe;O.exports=Je;O.exports.generateQuadTreeFunctionBody=_e;O.exports.getInsertStackCode=Me;O.exports.getQuadNodeCode=Ee;O.exports.isSamePosition=Se;O.exports.getChildBodyCode=Fe;O.exports.setChildBodyCode=ke;function Je(t){let e=_e(t);return new Function(e)()}function _e(t){let e=ue(t),n=Math.pow(2,t);return`
${Me()}
${Ee(t)}
${Se(t)}
${Fe(t)}
${ke(t)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${v("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${T(0)} - node.min_${T(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${d()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${u(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function u(p){let i=[],l=Array(p+1).join(" ");for(let h=0;h<t;++h)i.push(l+`if (${T(h)} > max_${T(h)}) {`),i.push(l+`  quadIdx = quadIdx + ${Math.pow(2,h)};`),i.push(l+`  min_${T(h)} = max_${T(h)};`),i.push(l+`  max_${T(h)} = node.max_${T(h)};`),i.push(l+"}");return i.join(`
`)}function d(){let p=Array(11).join(" "),i=[];for(let l=0;l<n;++l)i.push(p+`if (node.quad${l}) {`),i.push(p+`  queue[pushIdx] = node.quad${l};`),i.push(p+"  queueLength += 1;"),i.push(p+"  pushIdx += 1;"),i.push(p+"}");return i.join(`
`)}function v(p){let i=[];for(let l=0;l<n;++l)i.push(`${p}quad${l} = null;`);return i.join(`
`)}}function Se(t){let e=ue(t);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function ke(t){var e=Math.pow(2,t);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let r=[];for(let u=0;u<e;++u){let d=u===0?"  ":"  else ";r.push(`${d}if (idx === ${u}) node.quad${u} = child;`)}return r.join(`
`)}}function Fe(t){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let n=[],r=Math.pow(2,t);for(let u=0;u<r;++u)n.push(`  if (idx === ${u}) return node.quad${u};`);return n.join(`
`)}}function Ee(t){let e=ue(t),n=Math.pow(2,t);var r=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${u("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return r;function u(d){let v=[];for(let p=0;p<n;++p)v.push(`${d}quad${p} = null;`);return v.join(`
`)}}function Me(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Ke=O.exports,se={exports:{}};se.exports=Ye;se.exports.generateFunctionBody=Pe;const Xe=G;function Ye(t){let e=Pe(t);return new Function("bodies","settings","random",e)}function Pe(t){let e=Xe(t);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Ze=se.exports,fe={exports:{}};const et=G;fe.exports=tt;fe.exports.generateCreateDragForceFunctionBody=Ne;function tt(t){let e=Ne(t);return new Function("options",e)}function Ne(t){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${et(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var nt=fe.exports,ce={exports:{}};const rt=G;ce.exports=ot;ce.exports.generateCreateSpringForceFunctionBody=qe;function ot(t){let e=qe(t);return new Function("options","random",e)}function qe(t){let e=rt(t);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var it=ce.exports,ve={exports:{}};const at=G;ve.exports=dt;ve.exports.generateIntegratorFunctionBody=Le;function dt(t){let e=Le(t);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Le(t){let e=at(t);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var ut=ve.exports,te,ge;function st(){if(ge)return te;ge=1,te=t;function t(e,n,r,u){this.from=e,this.to=n,this.length=r,this.coefficient=u}return te}var ne,ye;function ft(){if(ye)return ne;ye=1,ne=t;function t(e,n){var r;if(e||(e={}),n){for(r in n)if(n.hasOwnProperty(r)){var u=e.hasOwnProperty(r),d=typeof n[r],v=!u||typeof e[r]!==d;v?e[r]=n[r]:d==="object"&&(e[r]=t(e[r],n[r]))}}return e}return ne}function ct(t){lt(t);const e=vt(t);return t.on=e.on,t.off=e.off,t.fire=e.fire,t}function vt(t){let e=Object.create(null);return{on:function(n,r,u){if(typeof r!="function")throw new Error("callback is expected to be a function");let d=e[n];return d||(d=e[n]=[]),d.push({callback:r,ctx:u}),t},off:function(n,r){if(typeof n>"u")return e=Object.create(null),t;if(e[n])if(typeof r!="function")delete e[n];else{const u=e[n];for(let d=0;d<u.length;++d)u[d].callback===r&&u.splice(d,1)}return t},fire:function(n){const r=e[n];if(!r)return t;let u;arguments.length>1&&(u=Array.prototype.slice.call(arguments,1));for(let d=0;d<r.length;++d){const v=r[d];v.callback.apply(v.ctx,u)}return t}}}function lt(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");const e=["on","fire","off"];for(let n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}var Ie=ct,K={exports:{}},be;function pt(){if(be)return K.exports;be=1,K.exports=t,K.exports.random=t,K.exports.randomIterator=p;function t(i){var l=typeof i=="number"?i:+new Date;return new e(l)}function e(i){this.seed=i}e.prototype.next=v,e.prototype.nextDouble=d,e.prototype.uniform=d,e.prototype.gaussian=n,e.prototype.random=d;function n(){var i,l,h;do l=this.nextDouble()*2-1,h=this.nextDouble()*2-1,i=l*l+h*h;while(i>=1||i===0);return l*Math.sqrt(-2*Math.log(i)/i)}e.prototype.levy=r;function r(){var i=1.5,l=Math.pow(u(1+i)*Math.sin(Math.PI*i/2)/(u((1+i)/2)*i*Math.pow(2,(i-1)/2)),1/i);return this.gaussian()*l/Math.pow(Math.abs(this.gaussian()),1/i)}function u(i){return Math.sqrt(2*Math.PI/i)*Math.pow(1/Math.E*(i+1/(12*i-1/(10*i))),i)}function d(){var i=this.seed;return i=i+2127912214+(i<<12)&4294967295,i=(i^3345072700^i>>>19)&4294967295,i=i+374761393+(i<<5)&4294967295,i=(i+3550635116^i<<9)&4294967295,i=i+4251993797+(i<<3)&4294967295,i=(i^3042594569^i>>>16)&4294967295,this.seed=i,(i&268435455)/268435456}function v(i){return Math.floor(this.nextDouble()*i)}function p(i,l){var h=l||t();if(typeof h.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:L,shuffle:B};function B(){var $,y,w;for($=i.length-1;$>0;--$)y=h.next($+1),w=i[y],i[y]=i[$],i[$]=w;return i}function L($){var y,w,m;for(y=i.length-1;y>0;--y)w=h.next(y+1),m=i[w],i[w]=i[y],i[y]=m,$(m);i.length&&$(i[0])}}return K.exports}var je=wt,ht=He,gt=Ke,yt=Ze,bt=nt,mt=it,xt=ut,me={};function wt(t){var e=st(),n=ft(),r=Ie;if(t){if(t.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(t.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}t=n(t,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var u=me[t.dimensions];if(!u){var d=t.dimensions;u={Body:ht(d,t.debug),createQuadTree:gt(d),createBounds:yt(d),createDragForce:bt(d),createSpringForce:mt(d),integrate:xt(d)},me[d]=u}var v=u.Body,p=u.createQuadTree,i=u.createBounds,l=u.createDragForce,h=u.createSpringForce,B=u.integrate,L=o=>new v(o),$=pt().random(42),y=[],w=[],m=p(t,$),q=i(y,t,$),Q=h(t,$),z=l(t),A=0,E=[],k=new Map,R=0;M("nbody",J),M("spring",a);var D={bodies:y,quadTree:m,springs:w,settings:t,addForce:M,removeForce:I,getForces:H,step:function(){for(var o=0;o<E.length;++o)E[o](R);var f=B(y,t.timeStep,t.adaptiveTimeStepWeight);return R+=1,f},addBody:function(o){if(!o)throw new Error("Body is required");return y.push(o),o},addBodyAt:function(o){if(!o)throw new Error("Body position is required");var f=L(o);return y.push(f),f},removeBody:function(o){if(o){var f=y.indexOf(o);if(!(f<0))return y.splice(f,1),y.length===0&&q.reset(),!0}},addSpring:function(o,f,b,P){if(!o||!f)throw new Error("Cannot add null spring to force simulator");typeof b!="number"&&(b=-1);var j=new e(o,f,b,P>=0?P:-1);return w.push(j),j},getTotalMovement:function(){return A},removeSpring:function(o){if(o){var f=w.indexOf(o);if(f>-1)return w.splice(f,1),!0}},getBestNewBodyPosition:function(o){return q.getBestNewPosition(o)},getBBox:F,getBoundingBox:F,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(o){return o!==void 0?(t.gravity=o,m.options({gravity:o}),this):t.gravity},theta:function(o){return o!==void 0?(t.theta=o,m.options({theta:o}),this):t.theta},random:$};return Bt(t,D),r(D),D;function F(){return q.update(),q.box}function M(o,f){if(k.has(o))throw new Error("Force "+o+" is already added");k.set(o,f),E.push(f)}function I(o){var f=E.indexOf(k.get(o));f<0||(E.splice(f,1),k.delete(o))}function H(){return k}function J(){if(y.length!==0){m.insertBodies(y);for(var o=y.length;o--;){var f=y[o];f.isPinned||(f.reset(),m.updateBodyForce(f),z.update(f))}}}function a(){for(var o=w.length;o--;)Q.update(w[o])}}function Bt(t,e){for(var n in t)$t(t,e,n)}function $t(t,e,n){if(t.hasOwnProperty(n)&&typeof e[n]!="function"){var r=Number.isFinite(t[n]);r?e[n]=function(u){if(u!==void 0){if(!Number.isFinite(u))throw new Error("Value of "+n+" should be a valid number.");return t[n]=u,e}return t[n]}:e[n]=function(u){return u!==void 0?(t[n]=u,e):t[n]}}}de.exports=_t;de.exports.simulator=je;var Ct=Ie;function _t(t,e){if(!t)throw new Error("Graph structure cannot be undefined");var n=e&&e.createSimulator||je,r=n(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var u=t.version>19?J:H;e&&typeof e.nodeMass=="function"&&(u=e.nodeMass);var d=new Map,v={},p=0,i=r.settings.springTransform||St;z(),m();var l=!1,h={step:function(){if(p===0)return B(!0),!0;var a=r.step();h.lastMove=a,h.fire("step");var o=a/p,f=o<=.01;return B(f),f},getNodePosition:function(a){return I(a).pos},setNodePosition:function(a){var o=I(a);o.setPosition.apply(o,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(a){var o=v[a];if(o)return{from:o.from.pos,to:o.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:L,pinNode:function(a,o){var f=I(a.id);f.isPinned=!!o},isNodePinned:function(a){return I(a.id).isPinned},dispose:function(){t.off("changed",Q),h.fire("disposed")},getBody:w,getSpring:y,getForceVectorLength:$,simulator:r,graph:t,lastMove:0};return Ct(h),h;function B(a){l!==a&&(l=a,q(a))}function L(a){d.forEach(a)}function $(){var a=0,o=0;return L(function(f){a+=Math.abs(f.force.x),o+=Math.abs(f.force.y)}),Math.sqrt(a*a+o*o)}function y(a,o){var f;if(o===void 0)typeof a!="object"?f=a:f=a.id;else{var b=t.hasLink(a,o);if(!b)return;f=b.id}return v[f]}function w(a){return d.get(a)}function m(){t.on("changed",Q)}function q(a){h.fire("stable",a)}function Q(a){for(var o=0;o<a.length;++o){var f=a[o];f.changeType==="add"?(f.node&&A(f.node.id),f.link&&k(f.link)):f.changeType==="remove"&&(f.node&&E(f.node),f.link&&R(f.link))}p=t.getNodesCount()}function z(){p=0,t.forEachNode(function(a){A(a.id),p+=1}),t.forEachLink(k)}function A(a){var o=d.get(a);if(!o){var f=t.getNode(a);if(!f)throw new Error("initBody() was called with unknown node id");var b=f.position;if(!b){var P=D(f);b=r.getBestNewBodyPosition(P)}o=r.addBodyAt(b),o.id=a,d.set(a,o),F(a),M(f)&&(o.isPinned=!0)}}function E(a){var o=a.id,f=d.get(o);f&&(d.delete(o),r.removeBody(f))}function k(a){F(a.fromId),F(a.toId);var o=d.get(a.fromId),f=d.get(a.toId),b=r.addSpring(o,f,a.length);i(a,b),v[a.id]=b}function R(a){var o=v[a.id];if(o){var f=t.getNode(a.fromId),b=t.getNode(a.toId);f&&F(f.id),b&&F(b.id),delete v[a.id],r.removeSpring(o)}}function D(a){var o=[];if(!a.links)return o;for(var f=Math.min(a.links.length,2),b=0;b<f;++b){var P=a.links[b],j=P.fromId!==a.id?d.get(P.fromId):d.get(P.toId);j&&j.pos&&o.push(j)}return o}function F(a){var o=d.get(a);if(o.mass=u(a),Number.isNaN(o.mass))throw new Error("Node mass should be a number")}function M(a){return a&&(a.isPinned||a.data&&a.data.isPinned)}function I(a){var o=d.get(a);return o||(A(a),o=d.get(a)),o}function H(a){var o=t.getLinks(a);return o?1+o.length/3:1}function J(a){var o=t.getLinks(a);return o?1+o.size/3:1}}function St(){}var kt=de.exports;const Ut=De(kt);function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ft(t){if(Array.isArray(t))return t}function Et(t){if(Array.isArray(t))return ae(t)}function Te(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function Mt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Pt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){return t.get(Te(t,e))}function V(t,e,n){Mt(t,e),e.set(t,n)}function ee(t,e,n){return t.set(Te(t,e),n),n}function Nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Qt(r.key),r)}}function qt(t,e,n){return e&&Nt(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Lt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function It(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,u,d,v,p=[],i=!0,l=!1;try{if(d=(n=n.call(t)).next,e!==0)for(;!(i=(r=d.call(n)).done)&&(p.push(r.value),p.length!==e);i=!0);}catch(h){l=!0,u=h}finally{try{if(!i&&n.return!=null&&(v=n.return(),Object(v)!==v))return}finally{if(l)throw u}}return p}}function jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(t,e){return Ft(t)||It(t,e)||Oe(t,e)||jt()}function At(t){return Et(t)||Lt(t)||Oe(t)||Tt()}function Dt(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Qt(t){var e=Dt(t,"string");return typeof e=="symbol"?e:e+""}function Oe(t,e){if(t){if(typeof t=="string")return ae(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(t,e):void 0}}var W=new WeakMap,X=new WeakMap,U=new WeakMap,re=new WeakMap,oe=new WeakMap,ie=new WeakMap,Gt=function(){function t(){Pt(this,t),V(this,W,new Map),V(this,X,new Map),V(this,U,function(e){return e}),V(this,re,function(){return{}}),V(this,oe,function(){}),V(this,ie,function(){})}return qt(t,[{key:"getObj",value:function(n){return _(W,this).get(_(U,this).call(this,n))}},{key:"getData",value:function(n){return _(X,this).get(n)}},{key:"entries",value:function(){return At(_(X,this).entries()).map(function(n){var r=Ot(n,2),u=r[0],d=r[1];return[d,u]})}},{key:"id",value:function(n){return ee(U,this,Qe(n)),this}},{key:"onCreateObj",value:function(n){return ee(re,this,n),this}},{key:"onUpdateObj",value:function(n){return ee(oe,this,n),this}},{key:"onRemoveObj",value:function(n){return ee(ie,this,n),this}},{key:"digest",value:function(n){var r=this;n.filter(function(d){return!_(W,r).has(_(U,r).call(r,d))}).forEach(function(d){var v=_(re,r).call(r,d);_(W,r).set(_(U,r).call(r,d),v),_(X,r).set(v,d)});var u=new Map(n.map(function(d){return[_(U,r).call(r,d),d]}));return _(W,this).forEach(function(d,v){u.has(v)?_(oe,r).call(r,d,u.get(v)):(_(ie,r).call(r,d,v),_(W,r).delete(v),_(X,r).delete(d))}),this}},{key:"clear",value:function(){return this.digest([]),this}}])}();export{Gt as D,Wt as c,Ut as f};
