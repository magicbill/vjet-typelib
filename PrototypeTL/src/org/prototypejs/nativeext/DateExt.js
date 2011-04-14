/**
 * 
 */
vjo.mtype('org.prototypejs.nativeext.DateExt') //< public

.props({
	
})
.protos({
	/**
	   *  Date#toISOString() -> String
	   *
	   *  Produces a string representation of the date in ISO 8601 format.
	   *  The time zone is always UTC, as denoted by the suffix "Z".
	   *
	   *  <h5>Example</h5>
	   *
	   *      var d = new Date(1969, 11, 31, 19);
	   *      d.getTimezoneOffset();
	   *      //-> -180 (time offest is given in minutes.)
	   *      d.toISOString();
	   *      //-> '1969-12-31T16:00:00Z'
	  **/
	//> public String toISOString()
	toISOString: vjo.NEEDS_IMPL,
	
	/**
   *  Date#toJSON() -> String
   *
   *  Internally calls [[Date#toISOString]].
   *
   *  <h5>Example</h5>
   *
   *      var d = new Date(1969, 11, 31, 19);
   *      d.getTimezoneOffset();
   *      //-> -180 (time offest is given in minutes.)
   *      d.toJSON();
   *      //-> '1969-12-31T16:00:00Z'
  **/
	//> public String toJSON()
	toJSON: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();