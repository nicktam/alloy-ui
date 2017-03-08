YUI.add("aui-map",function(e,t){var n=e.Lang,r=e.Array,i=e.Object,s=e.Base.create("map",e.Base,[],{FALSE:e.guid(),NAN:e.guid(),NULL:e.guid(),NUMBER:e.guid(),OBJECT:e.guid(),TRUE:e.guid(),UNDEFINED:e.guid(),_keys:null,_objects:null,_size:0,_values:null,initializer:function(){var e=this;e.publish({clear:{defaultFn:e._defClearFn},put:{defaultFn:e._defPutFn},remove:{defaultFn:e._defRemoveFn}}),e._keys={},e._values={},e._objects=[]},clear:function(){this.fire("clear")},getValue:function(e){var t=this;return t._values[t._getHash(e)]},has:function(e,t){var n=this;return n._values.hasOwnProperty(t||n._getHash(e))},hasValue:function(e){var t=!1;return i.some(this._values,function(n){return t=n===e,t}),t},keys:function(){return i.values(this._keys)},isEmpty:function(){return this._size===0},put:function(e,t,n){this.fire("put",{key:e,value:t,hash:n})},putAll:function(e){var t=this;i.each(e,function(e,n){t.put(n,e)})},remove:function(e,t){var n=this,r=n.getValue(e);return n.fire("remove",{key:e,value:r,hash:t}),r},size:function(){return this._size},values:function(){return i.values(this._values)},_defClearFn:function(){var e=this;r.each(e.keys(),function(t){e.remove(t)}),e._size=0},_defPutFn:function(e){var t=this,r=e.hash;n.isUndefined(r)&&(r=t._getHash(e.key)),t.has(e.key)||t._size++,t._keys[r]=e.key,t._values[r]=e.value},_defRemoveFn:function(e){var t=this,i=e.key,s=t._keys,o=t._values,u=e.hash,a,f,l;t.has(i)&&(n.isUndefined(u)&&(u=t._getHash(i)),f=o[u],delete o[u],delete s[u],t._isObjectWithHashCode(f)||(a=t._objects,l=r.indexOf(a,i),l>-1&&(a[l]=null)),t._size--),e.value=f},_getHash:function(e){var t=this;if(e!==e)e=t.NAN;else if(e===!1)e=t.FALSE;else if(e===null)e=t.NULL;else if(e===!0)e=t.TRUE;else if(e===undefined)e=t.UNDEFINED;else if(n.isObject(e))e=t._getHashForObject(e);else if(n.isNumber(e)||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)e=t.NUMBER+"_"+e;return String(e)},_getHashForObject:function(e){var t=this,n;return t._isObjectWithHashCode(e)?t.OBJECT+"_"+e.hashCode():(n=r.indexOf(t._objects,e),t.OBJECT+"_"+(n>-1?n:t._objects.push(e)-1))},_isObjectWithHashCode:function(e){return n.isObject(e)?n.isFunction(e.hashCode):!1}},{});e.Map=s},"3.0.3-deprecated.47",{requires:["base-build"]});
