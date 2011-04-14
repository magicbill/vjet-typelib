/**
 * $H([obj]) ? Hash
 * Creates a Hash (which is synonymous to "map" or "associative array" for our 
 * purposes). 
 * <p>
 * A convenience wrapper around the Hash constructor, with a safeguard that lets 
 * you pass an existing Hash object and get it back untouched (instead of uselessly 
 * cloning it).
 * <p>
 * The $H function is the shorter way to obtain a hash (prior to 1.5 final, it 
 * was the only proper way of getting one).
 * <p>
 * Example
 * <p>
 * <code>
 * var h = $H({name: 'John', age: 26, country: 'Australia'});
 * // Equivalent to:
 * var h = new Hash({name: 'John', age: 26, country: 'Australia'});
 * // Can then be accessed the classic Hash way
 * h.get('country');
 * // -> 'Australia'
 * </code>
 */
//> public
vjo.ftype('org.prototypejs.$H') 
//> needs(org.prototypejs.Hash)
.props({
	/**
	 * 
	 */
	//> public Hash _invoke_(Object? obj)
	_invoke_: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();