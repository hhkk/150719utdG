(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){

// http://www.netlobo.com/javascript_background_fade.html
/*************************************************************
* NLB Background Color Fader v1.0
* Author: Justin Barlow - www.netlobo.com
*
* Description:
* The Background Color Fader allows you to gradually fade the
* background of any HTML element.
*
* Usage:
* Call the Background Color Fader as follows:
*   NLBfadeBg( elementId, startBgColor, endBgColor, fadeTime );
*
* Description of Parameters
*   elementId - The id of the element you wish to fade the
*             background of.
*   startBgColor - The background color you wish to start the
*             fade from.
*   endBgColor - The background color you want to fade to.
*   fadeTime - The duration of the fade in milliseconds.
*************************************************************/

var nlbFade_hextable = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ]; // used for RGB to Hex and Hex to RGB conversions
var nlbFade_elemTable = new Array( ); // global array to keep track of faded elements
var nlbFade_t = new Array( ); // global array to keep track of fading timers
var NLBfadeBg = function ( elementId, startBgColor, endBgColor, fadeTime )
{
	console.log ('in fadehk id [' + elementId + ']');
	var timeBetweenSteps = Math.round( Math.max( fadeTime / 300, 30 ) );
	var nlbFade_elemTableId = nlbFade_elemTable.indexOf( elementId );
	if( nlbFade_elemTableId > -1 )
	{
		for( var i = 0; i < nlbFade_t[nlbFade_elemTableId].length; i++ )
			clearTimeout( nlbFade_t[nlbFade_elemTableId][i] );
	}
	else
	{
		nlbFade_elemTable.push( elementId );
		nlbFade_elemTableId = nlbFade_elemTable.indexOf( elementId );
	}
	var startBgColorRGB = hexToRGB( startBgColor );
	var endBgColorRGB = hexToRGB( endBgColor );
	var diffRGB = new Array( );
	for( var i = 0; i < 3; i++ )
		diffRGB[i] = endBgColorRGB[i] - startBgColorRGB[i];
	var steps = Math.ceil( fadeTime / timeBetweenSteps );
	var nlbFade_s = new Array( );
	for( var i = 1; i <= steps; i++ )
	{
		var changes = new Array( );
		for( var j = 0; j < diffRGB.length; j++ )
			changes[j] = startBgColorRGB[j] + Math.round( ( diffRGB[j] / steps ) * i );
		if( i == steps )
			nlbFade_s[i - 1] = setTimeout( 'document.getElementById("'+elementId+'").style.backgroundColor = "'+endBgColor+'";', timeBetweenSteps*(i-1) );
		else
			nlbFade_s[i - 1] = setTimeout( 'document.getElementById("'+elementId+'").style.backgroundColor = "'+RGBToHex( changes )+'";', timeBetweenSteps*(i-1) );
	}
	nlbFade_t[nlbFade_elemTableId] = nlbFade_s;
}
function hexToRGB( hexVal )
{
	hexVal = hexVal.toUpperCase( );
	if( hexVal.substring( 0, 1 ) == '#' )
		hexVal = hexVal.substring( 1 );
	var hexArray = new Array( );
	var rgbArray = new Array( );
	hexArray[0] = hexVal.substring( 0, 2 );
	hexArray[1] = hexVal.substring( 2, 4 );
	hexArray[2] = hexVal.substring( 4, 6 );
	for( var k = 0; k < hexArray.length; k++ )
	{
		var num = hexArray[k];
		var res = 0;
		var j = 0;
		for( var i = num.length - 1; i >= 0; i-- )
			res += parseInt( nlbFade_hextable.indexOf( num.charAt( i ) ) ) * Math.pow( 16, j++ );
		rgbArray[k] = res;
	}
	return rgbArray;
}
function RGBToHex( rgbArray )
{
	var retval = new Array( );
	for( var j = 0; j < rgbArray.length; j++ )
	{
		var result = new Array( );
		var val = rgbArray[j];
		var i = 0;
		while( val > 16 )
		{
			result[i++] = val%16;
			val = Math.floor( val/16 );
		}
		result[i++] = val%16;
		var out = '';
		for( var k = result.length - 1; k >= 0; k-- )
			out += nlbFade_hextable[result[k]];
		retval[j] = padLeft( out, '0', 2 );
	}
	out = '#';
	for( var i = 0; i < retval.length; i++ )
		out += retval[i];
	return out;
}
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function( val, fromIndex ) {
		if( typeof( fromIndex ) != 'number' ) fromIndex = 0;
		for( var index = fromIndex, len = this.length; index < len; index++ )
			if( this[index] == val ) return index;
		return -1;
	}
}
function padLeft( string, character, paddedWidth )
{
	if( string.length >= paddedWidth )
		return string;
	else
	{
		while( string.length < paddedWidth )
			string = character + string;
	}
	return string;
}


if (typeof exports !== 'undefined') {
	exports.NLBfadeBg = NLBfadeBg;
}

},{}],3:[function(require,module,exports){

/**
 * Created by henryms on 3/2/2015.
 */
// var O = require('C:/utd/150719utdG/public/util/O.js');
var UtilDate = require('C:/utd/150719utdG/public/util/UtilDate.js');
var UtilDate = require('C:/utd/150719utdG/public/util/UtilDate.js');

//var filters = ['htmlxxy', 'titlexx'];
//var filters = ['htmlxx', 'title'];
var filters = [];


//alert ('redefine alerthistory');
var alertHistory = [];

/**
 * output only
 * @param s
 */
// one and only console logger
// private
var callcount_o = 0;

var passesFilters = function(s) {

    //  var filters = ['Two'];
    var passes = false;
    if (filters.length > 0) {
        filters.forEach(function (f) {
            if (s.indexOf(f) >= 0) {
                passes = true;
            }
        });
    }
    else
        passes = true;
    return passes;
}


var o = function (s)
{
	//console.log ('in o.o');
	if (passesFilters(s))
	{
		var t = addLineFeedsIfnSeconds() + callcount_o++ + '. ologx:' + s
		console.log(t);
		if (appendFileSync)
			appendFileSync('c:/tmp/t.txt', t);
		//console.log(callcount_o++ + '. olog:' + s + ' alertHistory:' + alertHistory);
	}
}

var oerr = function (s)
{
	//console.log ('in o.o');
	var t = addLineFeedsIfnSeconds() + callcount_o++ + '. ologerr:' + s
	console.error(t);
	if (appendFileSync)
		appendFileSync('c:/tmp/t.txt', 'ERROR: t:' + t);
	//console.log(callcount_o++ + '. olog:' + s + ' alertHistory:' + alertHistory);
}


// http://stackoverflow.com/questions/15313418/javascript-assert
var assert = function (condition, message) {
    if (!condition) {

        if (typeof Error === "undefined") {
            Error = function(message) {
                this.message = message;
            };
            Error.prototype.message = "";
        }

        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
};

// error
var lastOutputTimeStamp = -1;
var callCountaddLineFeedsIfnSeconds = -1;
var addLineFeedsIfnSeconds = function() {
    returnStr = '';
    var newTimeInMillis = UtilDate.getTimeInMillis();
    if (lastOutputTimeStamp < 0){
        lastOutputTimeStamp = newTimeInMillis;
    } else {
        if (newTimeInMillis - lastOutputTimeStamp > 3000) {
            returnStr = '\r\n\r\n\r\nNEWSTR #' + callCountaddLineFeedsIfnSeconds++ +': ' + UtilDate.getDateStringForLogsWithMillis() +'\r\n';
        }
    }
    lastOutputTimeStamp = newTimeInMillis;
    return returnStr;
}



var e = function (s)
{

    if (passesFilters(s)) {
        var t = addLineFeedsIfnSeconds() + callcount_o++ + '. ology:' + s
        console.error(t);
        appendFileSync('c:/tmp/t.txt', t);
        //console.log(callcount_o++ + '. olog:' + s + ' alertHistory:' + alertHistory);
    }
}
/**
 * alert - implies output with alert history log
 * @param s
 */
var a = function (s)
{
    if (passesFilters(s)) {
        //alert ('old len:' + alertHistory.length);
        var s = '[' + alertHistory.length + '.' + s + ';' + ']';
        alertHistory.push(s);
        //alert ('new len:' + alertHistory.length);
        o('a:' + s);
        alert(s + ' hist:' + alertHistory);
    }
}
if (typeof exports !== 'undefined') {
    exports.o = o;
    exports.oerr = oerr;
    exports.assert = assert;
    exports.a = a;
    exports.e = e;
}

var fs = require('fs');
// erases existing content
var writeFileSync = function (filefqname, s) {
    fs.writeFileSync(filefqname, s + '\r\n');
}

// does not erase existing content
var appendFileSync = null;
try {
    appendFileSync = function (filefqname, s) {
        if (fs.appendFileSync)
            fs.appendFileSync(filefqname, s + '\r\n');
    }
} catch (e) {
    console.log ('error:' + e);
}

var test = false;
if (test) {
    writeFileSync('c:/tmp/t.txt', 'time in a bottle\r\n');
    appendFileSync('c:/tmp/t.txt', 'time in a bottle2\r\n');
    appendFileSync('c:/tmp/t.txt', 'time in a bottle3\r\n');
    appendFileSync('c:/tmp/t.txt', 'time in a bottle4\r\n');
    appendFileSync('c:/tmp/t.txt', 'time in a bottle5\r\n');
}



},{"C:/utd/150719utdG/public/util/UtilDate.js":5,"fs":1}],4:[function(require,module,exports){
'use strict';
/**
 * // UtilNodeVsBrowser
 */
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');


var icallcnt_getClassSub = 0;
function getClassSub (desc, obj)
{
    var s = null;

    try {
        ++icallcnt_getClassSub;
        s = '\r\nBEGIN GETCLASS ON DESC [' + desc + '] getclass callcnt:' + icallcnt_getClassSub + '. +++++++++++++++++++++++++++++++++++++++++++++++++++';
        s = s + '\r\n exports.getClassSub:' + desc + ' [' + desc + ']\r\n\r\n';
        if (obj === null)
            s = s + '\r\n  getClassSub a says desc [' + desc + '] obj passed in is null. ';
        if (obj === undefined)
            s = s + '\r\n  getClassSub a says desc [' + desc + '] obj passed in is undefined. ';
        else {
            s = s + '\r\n  getClassSub a says desc [' + desc + ']. ';
            s = s + '\r\n a.0b obj.toString [' + obj.toString() + '], ';

            s = s + '\r\n a.1 typeof obj [' + typeof obj + '], ';

            s = s + '\r\n a.2 Array.isArray(obj) [' + Array.isArray(obj)+ '], ';

            s = s + '\r\n b getClassSub obj.prototype string [' + Object.prototype.toString.call(obj) + ']';

            s = s + '\r\n c obj.prototype parsed [' + Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1] + '] ';

            s = s + '\r\n d obj.constructor parsed [' + obj.constructor + '] ';


            var properties = [];

            var i = 0;
            for (var key in obj) {
                i++;
                var hasOwnPropIndicator = obj.hasOwnProperty(key);
                var obj_key = 'obj_key is really null';
                s = s + '\r\nPROPHK['+i+'] get type of prop key keyname [' + key + '] : typeof obj[key]:'+ typeof obj[key];
                if (obj[key] !== null && obj[key] !== undefined && typeof obj[key] !== 'object')
                    obj_key = obj[key].toString();
                if (typeof obj[key] === 'object')
                    obj_key = 'typeof obj[key] == \'object\'';
                if (obj[key] === undefined)
                    obj_key = 'obj_key is undefined';

                // careful this will print out a function property as a string!!  this is a big one!!!!
                if ((typeof obj[key]).toString() !== 'function') {
                    s = s + '\r\n' + i + '. props desc [' + desc + '] name ['+key + '] value [' + obj_key + '] hasOwnPropIndicator [' + hasOwnPropIndicator + ']';
                } else {
                    s = s + '\r\n' + i + '. not showing existing function definition for key [' + key + '] !';
                }
                //if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
                //if (obj.hasOwnProperty(key) ) {
                if (typeof obj[key] !== 'function')
                    key = 'property_non_function_key:' + key;
                else
                    key = 'property_function_key:' + key;

                properties.push(key);
                if (key === 'srcElement') // object Window
                {
                    s = s + '\r\n' + i + '. found prop srcElement[' + getClassSub('recCall', obj.srcElement) + ']'; // shows ageLetter etc
                    if (obj.srcElement === null) {
                        s = s + '\r\n' + i + '. but its value is null!!!!!!!!!!!!!!!!!!!!';
                    }
                }
                //alert ('found prop[' + key + ']'); shows ageLetter etc
                //}
            }

            s = ' getclass desc [' + desc + '] ' + s + '(\r\n PROPERTIES found [' + properties.length + '] keys in object keys are <<' + properties.join(', ') + '>>, ';
            s = s + '\r\nEND GETCLASS ON DESC [' + desc + '] +++++++++++++++++++++++++++++++++++++++++++++++++++';

        }


        //var cons = ', this.constructor:' + this.constructor
        //oalert ('in getclass: $(this).prototype.toString()))' + ($(this).prototype.toString()));
        //if (typeof obj === 'undefined')
            //s = s + ' UsToDo says this class desc [' + desc + '] is undefined. ' + cons;
    } catch (e) {

        console.log ('error in getClass:e:' + e.message);
        console.log ('error in getClass:estack:' + e.stack);
    }

    return s;

}  // functi
// on getClassSub (desc, obj)



var getClass = function (desc, obj)    {

    var s = '<================== BEGIN exports.UtilClass:' + 'exports.getClass:' + desc + ' [' + desc + ']\r\n\r\n';
    //return s;

    //s = s + 'obj.constructor [' + obj.constructor + '], ';

    if (obj)
    {
        s = s + '\r\n\r\na.(obj) getclass1 obj:' + getClassSub ('['+desc+'].itself:', obj);

        s = s + '\r\n\r\nb.(obj.parent) getclass2 parent:' + getClassSub ('['+desc+'].parent:', obj.parent );
        //return s;
    }
    else
    {
        s = s + '\r\n\r\nskip getclass1 and getclass2 as obj is NOT';
    }

    //careful - this includes this long method output!!
     s = s + '\r\n\r\nc.(this) getclassmain3 this:' + getClassSub ('['+this+'].itself:', this );
    s = s + '\r\n\r\nEND exports.UtilClass ==================>';


    //s = s + 'this.constructor [' + this.constructor + '], ';
    //s = s + 'this.parent.constructor [' + this.parent.constructor + '], ';

    // see http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class
    //        see also Object.getPrototypeOf(a);
    //        Depending on what you need #getClass() for, there are several options in JavaScript:
    //
    //        typeof()
    //                instanceof
    //                func.prototype, proto.isPrototypeOf
    //        obj.constructor

    // TODO CONSIDER THESE:
    //oalert ('$(this).getName():' + $(this).getName());
    //oalert ('getClass($(this).parent())):' + getClass($(this).parent()));
    //oalert ('getClass($(this).parent())):' + $(this).constructor);
    //oalert ('this.class:' + this.class);
    //oalert ('this.class:' + this.class);
    //oalert ('this.constructor:' + this.constructor);
    return s;

}; // function getClass(desc, obj)



var getProperties = function (desc, obj)
{
    var j = 0 ;
    for(var propertyName in obj)
    {
        j++;
        var hasOwnPropIndicator = obj.hasOwnProperty(propertyName);
        console.log (j + '. props desc [' + desc + '] name ['+propertyName + '] value [' + obj[propertyName] + '] hasOwnPropIndicator [' + hasOwnPropIndicator + ']');
        // propertyName is what you want
        // you can get the value like this: myObject[propertyName]
    }
};


if (typeof exports !== 'undefined') {
    exports.getClass = getClass;
    exports.getProperties = getProperties;
}

},{}],5:[function(require,module,exports){
'use strict';



/**
 * // UtilNodeVsBrowser
 */
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// var UtilDate = require('C:/utd/150719utdG/public/modules/ustodo/UtilDate.js');
// var UtilDate = require('C:/utd/150719utdG  150719utdG /public/util/UtilDate.js');

var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');

//console.log (' herehk =========================-----------------=============------------- ');
//console.log (' herehk =====:'+ UtilClass.getClass(UtilClass) );

var browserifyTest = function()
{
    console.log ('in browserifyTest');
};


// convert "2015-02-17T17:45:42.000Z" to date
var dateObjFromMongoString = function(dtStrFull) {

    //console.log ('in dateFromMongoString');
    try {
        return new Date(dtStrFull);
        //return new Date(y, m, d, h, mn, s, ms);

    } catch (e) {
        console.log ('error in UtilDate:e:' + e.message);
        console.log ('error in UtilDate:e.stack:' + e.stack);
    }
};  // function



var padnum = function(n)
{
    if (n.toString().length < 2)
        return '0' + n.toString();
    else
        return n.toString();
};

var getDateStringForLogsWithMillis = function() {
    var d= new Date();
    return ((d.getYear()+2100) + '-' + (d.getMonth()+1) + '-' + d.getDate() + ' ' +
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
        //":" + d.getMilliseconds());

}

var dateStringYYYYetcFromDate = function(dt)
{
    console.log ('in dateStringYYYYetcFromDate');
        var dtstr = 'fff';
            //dt.getFullYear() + '-' +
            //padnum(dt.getMonth()+1) + '-' +
            //padnum(dt.getDate()) + ' ' +
            //padnum(dt.getHours()) + ':' +
            //padnum(dt.getMinutes()) + ':' +
            //padnum(dt.getSeconds());
        //console.log ('converted date [' + dt + '] to [' + dtstr + ']');
        return dtstr;
};


var insertDateToDbAsofNow = function(coll)
{
    coll.insert({d: new Date()});
};

// mongo date insert db.collection.insert({d: new Date()});

var dateFromComponents = function(year, month, day, hours, minutes, seconds, milliseconds) {

    try {
        return new Date(year, month, day, hours, minutes, seconds, milliseconds);
    } catch (e) {
        console.log ('error in UtilDate:e:' + e.message);
        console.log ('error in UtilDate:e.stack:' + e.stack);
    }
};  // function


/**
 * eg convert '2015-02-08 23:43:44' to 3d
 */
var callCount_timeAgo = 0;
var timeAgo =function (dtStrMongoStyle) // date obj
{
    callCount_timeAgo++;
    //console.log('enter callCount_timeAgo:' + callCount_timeAgo + ' dtStrMongoStyle:' + dtStrMongoStyle);

    if (dtStrMongoStyle === '2013-04-09T00:06:09.000Z')
    {
        //console.log('break on 2013-04-09T00:06:09.000Z');
    }
    //O.o('date processing [' + d + '] len ['+ ']');
    var returnStr = 'N/A:';
    try
    {
        var now1 = new Date();
        //console.log ('now1:' + now1);
        var dtObjthen = dateObjFromMongoString(dtStrMongoStyle);
        // NOW
        //var now2 = new Date();


        //// THEN
        //// 012345678901234567890
        //// 2007-12-27 11:40:01
        //var dstr = d.toString();
        //var yyyy23 = dstr.slice(10, 13);
        //var mm23 = dstr.slice(4,5);
        //var dd23 = dstr.slice(6,7);
        //var mn23 = dstr.slice(8,9);
        //var hh23 = dstr.slice(10,11);
        //var ss23 = dstr.slice(12, 13);
        //var then = dateFromComponents

        var nowsec = now1.getTime();
        var thensec = dtObjthen.getTime();
        var agoSecs = (nowsec - thensec)/1000;          //(yyyy23-yyyy) * 365 * 24 * 3600 +
        //(mm23-mm)     * 30.5* 24 * 3600 +
        //(dd23-dd)     *       24 * 3600 +
        //(hh23-hh)     *            3600 +
        //(mn23-mn)                *   60 +
        //(ss23-ss);

        var _yyyy = 365 * 24 * 3600;
        var _mm =   30.5* 24 * 3600;
        var _ww =     7 * 24 * 3600;
        var _dd =         24 * 3600;
        var _hh =              3600;
        var _mn =                60;
        var _ss =                 1;

        if (agoSecs < _ss)
            returnStr = '1sec';
        else if (agoSecs < (60*_ss))
            returnStr = '< 1min';
        else if (agoSecs < (10 * 60*_ss))
            returnStr = '< 10min';
        else if (agoSecs < (10 * 60*_ss))
            returnStr = '< 30min';
        //else if (agoSecs < (60*_ss))
        //    returnStr = '< 1<font size=-3>min</font>';
        //else if (agoSecs < (10 * 60*_ss))
        //    returnStr = '< 10<font size=-3>min</font>';
        //else if (agoSecs < (10 * 60*_ss))
        //    returnStr = '< 30<font size=-3>min</font>';
        else if (agoSecs < _hh)
        {
            var ageInMins = Math.round(agoSecs/_mn);
            if (ageInMins < 50)
                returnStr = '<1h';
            else
                returnStr = '1h';
        }

        else if (agoSecs < _dd)
        {
            var ageInHours = Math.round(agoSecs/_hh);
            returnStr = ageInHours+'h';
        }
        else if (agoSecs < _ww)
        {
            var ageInDays = Math.round(agoSecs/_dd);
            returnStr = ageInDays+'d';
        }
        else if (agoSecs < _mm)
        {
            var ageInWeeks = Math.round(agoSecs/_ww);
            returnStr = ageInWeeks+'w';
        }
        else if (agoSecs < _yyyy)
        {
            var ageInMo = Math.round(agoSecs/(30.5*24*3600));
            returnStr = ageInMo+'m';
        }
        else
        {
            //throw 'should not be here';
            var ageInYr = Math.round(agoSecs/_yyyy);
            returnStr = ageInYr + 'y';
        }



        //				if (agoSecs > _yyyy)
        //				return 'y'
        //			else if (agoSecs > _mm)
        //				return 'm'
        //			else if (agoSecs > _ww)
        //				return 'w'
        //			else if (agoSecs > _dd)
        //				return 'd'
        //			else if (agoSecs > _hh)
        //				return 'h'
        //			else if (agoSecs > _mn)
        //				return 'm'
        //			else if (agoSecs > _ss)
        //				return 's'
        //			else // subsecond
        //				return's'
    } catch (e)
    {
        //System.err.println ('error converting date ['+d+'] ' + e.getMessage());
        //e.printStackTrace();
        console.log ('e:' + e) ;
        //alert ('erra dtStrMongoStyle:'+dtStrMongoStyle);
        returnStr = 'erra 1+y';
    }
    finally {

        //console.log('exit callCount_timeAgo:' + callCount_timeAgo + ' returnStr:' + returnStr);
        return returnStr;

    }


}; // render age as letter











var test = true;
if (test)
{


    //var testStr1 = '2015-02-11T00:16:04.000Z';
    //var testStr2 = '2015-02-11T00:16:04.000Z';
    //var testDate2 = new Date(testStr2);
    //console.log ('timeago1:'+timeAgo(testStr2));

    var testStr1 = '2014-05-19T01:22:06.000Z';
    var testDate1 = new Date(testStr1);
    console.log ('timeago1:'+timeAgo(testStr1));

    //var then = new Date();
    //console.log ('then pre:' + dateStringYYYYetcFromDate(then));
    //then.setMonth(2);
    ////then.setFullYear(2014);
    //console.log ('then post:' + dateStringYYYYetcFromDate(then));
    //var now = new Date();
    //var dtstr = dateStringYYYYetcFromDate(now);
    //
    //var timethen = then.getTime();
    //var timenow = now.getTime();
    //
    //var diff = timenow-timethen;
    //
    //console.log ('dtstr:' + dtstr);
    //console.log ('diff:' + diff);
    //console.log ('timethen:' + timethen);
    //console.log ('then:' + then);
    //console.log ('rendered timeAgo:' + timeAgo (then));
}

// Return the number of milliseconds since 1970/01/01:
var getTimeInMillis = function() {
    var d = new Date();
    return d.getTime();
}

// on getClassSub (desc, obj)

if (typeof exports !== 'undefined') {
    exports.dateFromComponents = dateFromComponents;
    exports.timeAgo = timeAgo;
    exports.dateStringYYYYetcFromDate = dateStringYYYYetcFromDate;
    exports.browserifyTest = browserifyTest;
    exports.padnum = padnum;
    exports.dateObjFromMongoString = dateObjFromMongoString;
    exports.getTimeInMillis = getTimeInMillis;
    exports.getDateStringForLogsWithMillis = getDateStringForLogsWithMillis;
}


},{"C:/utd/150719utdG/public/util/UtilClass.js":4}],6:[function(require,module,exports){
'use strict';
/**
 * // UtilNodeVsBrowser
 */
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// from entry.js UtilErrorEmitter = require('C:/utd/150719utdG/public/util/UtilErrorEmitter.js');


function emitError (desc, err)
{

    try {
		console.error ('ERROR [' + desc + '] in err.message:' + err.message);
		console.error ('ERROR [' + desc + '] in err.stack:' + err.stack);
		//alert ('error [' + desc + '], see log for stacktrace [' + err.message + ']');

    } catch (e) {
        console.error ('ERROR [' + desc + '] in getClass:e:' + e.message);
        console.error ('ERROR [' + desc + '] in getClass:estack:' + e.stack);
    }
}  //


if (typeof exports !== 'undefined') {
    exports.emitError = emitError;
}




},{}],7:[function(require,module,exports){
'use strict';



/**
 * // UtilNodeVsBrowser
 */
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// var UtilDate = require('C:/utd/150719utdG/public/modules/ustodo/UtilDate.js');
// var UtilExceptionStack = require('C:/utd/150719utdG/public/util/UtilExceptionStack.js');

var print_call_stack = function() {
    var stack = new Error().stack;
    console.log("PRINTING CALL STACK");
    console.log( stack );
}

if (typeof exports !== 'undefined') {
    exports.print_call_stack = print_call_stack ;
}


},{}],8:[function(require,module,exports){
'use strict';

/**
 * Created by henryms on 2/11/2015.
 */
// var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');

/**
 *
 * @param s
 * @param onWayOIntoDB
 * @returns {boolean}
 */

var O = require('C:/utd/150719utdG/public/util/O.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
// var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');


function UrlUtd(addressOriUrlUtd, addressWithHttp, title) {
	this.addressOriUrlUtd = addressOriUrlUtd;
	this.addressWithHttp = addressWithHttp;
	if (title)
		this.title = title;
	else
		this.title = 'Not Found';
}







var seeIfConnectedToThisClass = function (s) {
    return ('in seeIfConnectedToThisClass:' + s);
};


// section_find .com .edu etc and add href
var isUrl = function (s)
{
    //console.log ('---------- testing isUrl :' + s);
    if (s.indexOf('http')=== 0)
    {
        return true;
    }

    if (s.indexOf(' ') > 0)
        return false;

    if (s.indexOf('.') < 0)
        return false;

    if (s.indexOf('href') === 0)
        return true;
    //if (!onWayOIntoDB)
      //  return;

    if (s.indexOf('.com') > 0)
        return true;
    if (s.indexOf('.edu') > 0)
        return true;
    if (s.indexOf('.biz') > 0)
        return true;
    if (s.indexOf('.org') > 0)
        return true;
    if (s.indexOf('.info') > 0)
        return true;
    if (s.indexOf('.ly') > 0)
        return true;
    if (s.indexOf('.co') > 0)
        return true;
    if (s.indexOf('.net') > 0)
        return true;

    return false;


};

var buildHrefFromUrlString= function(urlstr)
{
    //return urlstr;
    return '<a href=\'' + urlstr + '\'>' + urlstr + '</a>';
}                  ;

/**
 * Given a full ustodo document, used on outbound side originally, find and process hrefs
 * make sure all urls (e.g., n  on whitespace string tokens ending in .net) strings have http preamble
 * and href tag is inserted
 * @param textToBeHrefed original string with possible urls not yet IDd with http prefix
 * @param textToBeHrefed
 * @returns {string}
 */
var hrefThisText = function(textToBeHrefed, arrUrlUtdsFromHtml)
{
    //textToBeHrefed = '=-=-=-=-=-=-=-=-' + textToBeHrefed;
    var tokens = textToBeHrefed.split(/\s+/);
    //console.log ('y.length:' + y.length);
    var i = 0;
    tokens.forEach(function(token)
	{
		//console.log ('processing token [' + token + ']');   // hbkhbk
        //if (isUrl(token)) {
			////console.log ('is a url:' + token);
			//var replaceWith = null;
			//if (tokens[i].toLowerCase().indexOf('http') !== 0)
			//	tokens[i] = 'http://' + tokens[i];
			//// replace old with new (has http expansion)
			////replaceWith = '<p color=\'red\'>' + buildHrefFromUrlString(tokens[i]) + '</p>';
			//replaceWith = buildHrefFromUrlString(tokens[i]);
			////console.log ('convert url from [' + tokens[i] + '] to [' + replaceWith+']');
			//tokens[i] = replaceWith;
        //}
        //i++;

		if (token.startsWith('$UrlUtd'))
		{
			var index = token.allAfterFirst('d');
			O.o ('index:'+index + ', token:' + token);
			var urlUtd = arrUrlUtdsFromHtml[index];
			//console.log ('is a url:' + token);
			var replaceWith = '[[' + urlUtd.title + ']] ' + buildHrefFromUrlString(urlUtd.addressWithHttp) ;
			//console.log ('convert url from [' + tokens[i] + '] to [' + replaceWith+']');
			tokens[i] = replaceWith;
		}
		i++;

    });
    return tokens.join(' ');

};

/**
 * within a title, remove the period from a url so downstream will not become clickable
 * motivated by tweeter.com which includes tweeter.com in the title and don't want it processed later
 * @param textToBeHrefed original string with possible urls not yet IDd with http prefix
 * @param textToBeHrefed
 * @returns {string}
 */
var unUrlThisText = function(textToBeUnUrld)
{
    //textToBeHrefed = '=-=-=-=-=-=-=-=-' + textToBeHrefed;
    var tokens = textToBeUnUrld.split(/\s+/);
    //console.log ('y.length:' + y.length);
    var i = 0;
    tokens.forEach(function(token)
	{
        if (isUrl(token)) {
            //console.log ('is a url:' + token);
			tokens[i] = tokens[i].replace(/\./,' ');
            console.log ('un url to [' + tokens[i] + ']');
        }
        i++;
    });
    return tokens.join(' ');

};

/**
 * 1 split string on whitespace
 * 2 if a token is a url, prefix each isurl with http://
 * 3
 * create n
 * @param textWithUrls
 * @returns urlsFromTextToGetTitleOf: array of urls {
					'urlOriginal':'http://' + tokens[i],
					'urlWithHttpPrefix':'http://' + tokens[i]
 */

//var url = new UrlUtd ('ibm.com', 'http://ibm.com');
//console.log (url.addressOriUrlUtd);
//console.log (url.addressWithHttp);

//called by line 76 in \UtilUrl4bUsesKrawlerToSupportServerController.js  var urls = UtilHrefThisText.getUrlsFromText(ustodoText);
var getUrlsFromText = function(textWithUrls)
{
    //textWithUrls = '=-=-=-=-=-=-=-=-' + textWithUrls;
    var tokens = textWithUrls.split(/\s+/);
    //console.log ('y.length:' + y.length);
    var i = 0;
    // section_adds http to .coms .edu etc
	var urls = [];
	tokens.forEach(function(token) {
		//UtilHtmlCleaner.utilHtmlCleanerFunctions.cleanHtmlPre('asdasd',['a']);
        if (isUrl(token)) {
            //O.o ('--------> is a url from text:' + token);
			// some URLs will have the http:// prefix already, for others add it
			// hbkk
			urls.push (
					new UrlUtd(token, (token.toLowerCase().indexOf('http') === 0 ? '' : 'http://') + token));

				//{
				//	// todo need a real object here
				//	// https://docs.google.com/document/d/1VXnlrDsBBCmCHNxUHgD6A4qtksaX3Mq7QcgpaqOyMts/edit
				//	'urlOriginal': token,
				//	'urlWithHttpPrefix': (token.toLowerCase().indexOf('http') === 0 ? '' : 'http://') + token
				//}

		}
    });
    return urls;
};


//
//var strHttpEnhancer = function(s, hrefGen)
//{
//    //s = '=-=-=-=-=-=-=-=-' + s;
//    var tokens = s.split(/\s+/);
//    //console.log ('y.length:' + y.length);
//    var i = 0;
//    tokens.forEach(function(token) {
//        if (isUrl(token)) {
//            //console.log ('is a url:' + token);
//            var replaceWith = null;
//            if (tokens[i].toLowerCase().indexOf('http') !== 0)
//                tokens[i] = 'http://' + tokens[i];
//            // replace old with new (has http expansion)
//            if (hrefGen) {
//                replaceWith = '<p color=\'red\'>' + buildHrefFromUrlString(tokens[i]) + '</p>';
//                console.log ('convert url from [' + tokens[i] + '] to [' + replaceWith+']');
//                tokens[i] = 'fgfgfg' + replaceWith;
//            }
//        }
//        i++;
//    });
//    return tokens.join(' ');
//
//};



// converts HTML to text using Javascript
var html2text = function (html) {
    var tag = document.createElement('div');
    tag.innerHTML = html;

    return tag.innerText;
}

// var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');
var addNoContentEditableToHrefs = function (html) {

	var htmlCompare;
	do {
		htmlCompare = html;
		html = html.replace(/(.*)<a href=(.*)>(.*)<\/a>(.*)/, function(ori, a, b, c, d) {
			//console.log ('a:' + a);
			//console.log ('b:' + b);
			//console.log ('c:' + c);
			//console.log ('d:' + d);
			//var rtn = a+'<spanhk xxxcontenteditable=\'false\'><a href=xxx1' + b + '>xxx2' + c + '</a></spanhk>' + d;
			//html = a+'<spanhk xxxcontenteditable=\'false\'><a href=xxx1' + b + '>xxx2' + c + '</a></spanhk>' + d;
			//html = a+'<a><a href=xxx1' + b + '>xxx2' + c + '</a></a>' + d;
			// note: // hrefxx trick for multiple regex replace
			html = a+'<span class=\'makeThisNotContentEditable\'><a hrefxx=' + b + ' target=\'_blank\'>' + c + '</a></span>&nbsp;' + d;
			O.o ('html:' + html);
			return html; // internal return
		})
	} while (htmlCompare !== html);

	html = html.replaceAll('hrefxx', 'href'); // hrefxx trick for multiple regex replace

	// http://stackoverflow.com/questions/3954927/js-regex-how-to-replace-the-captured-groups-only
	//var t = html.replace(/(.*value="\w+)(\d+)(\w+".*)/, "$1!NEW_ID!$3")

	//html
	//O.o ('final addNoContentEditableToHrefs html:' + html);
    return html;
}



if (typeof exports !== 'undefined') {
    exports.getUrlsFromText = getUrlsFromText;
    exports.hrefThisText = hrefThisText;
    exports.html2text = html2text;
    exports.isUrl = isUrl;
    exports.addNoContentEditableToHrefs = addNoContentEditableToHrefs;
    exports.unUrlThisText = unUrlThisText;
}


var test160117 = false;
if (test160117)
{
	//"hello _there_".replace(/_(.*)_/, function(a, b){
	//		console.log ('<div>' + b + '</div>');
	//})

	var s = "prior<a href=\"http://www.ibm.com\">www.ibm.com</a>post";
	console.log ('s:' + addNoContentEditableToHrefs(s));
}

},{"C:/utd/150719utdG/public/util/O.js":3}],9:[function(require,module,exports){
'use strict';

var O = require('C:/utd/150719utdG/public/util/O.js');
var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = UtilHtmlCleaner;
// UtilHtmlCleaner.utilHtmlCleanerFunctions.convertHtmltoText


/**
 * Created by henryms on 10/4/2015.
 */
	// Strips HTML and PHP tags from a string
	// returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
	// example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
	// returns 2: '<p>Kevin van Zonneveld</p>'
	// example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
	// returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
	// example 4: strip_tags('1 < 5 5 > 1');
	// returns 4: '1 < 5 5 > 1'

	// method 1 for objectifying something
	// http://www.frontendjournal.com/most-common-technical-interview-question-for-frontend-developers/
	// public\lib\ustodo-browser-util\tinymce-paste-clean-filter.js
	// tinymceHtmlCleaner.cleanHtml(str, allowed_tags)

	//alert ('defining tinymceHtmlCleaner');

var privateSpace = new function() {
	this.cleanHtmlPrePrivate = function(str, allowed_tags) {
		alert(' in private function')
	}
}


/**
 * strip html tags out of a string
 */
var utilHtmlCleanerFunctions = new function() {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');
	this.cleanHtmlPre = function(str, allowed_tags) {
		//alert ('in tinymcePasteCleanFilter.cleanHtml [' + str+ ']');
		O.o ("in cleanHtmlPre ");
		try {

			// no need to remove trailing or whatever htmlwhitespace
			//var xHtmlPre;
			//do {
			//	xHtmlPre = str;
			//	var xHtml = xHtmlPre;
			//	str = str.trim();
			//	if (xHtml.endsWith('<p>&nbsp;</p>')) {
			//		str = str.replaceLast('<p>&nbsp;</p>','').trim();
			//		O.o ('replaced <p>&nbsp;</p> to get str [' + str + ']');
			//	}
			//}  while (xHtmlPre !== str);

			var key = '', allowed = false;
			var matches = [];    var allowed_array = [];
			var allowed_tag = '';
			var i = 0;
			var k = '';
			var html = '';
			var replacer = function (search, replace, str) {
				return str.split(search).join(replace);
			};
			// Build allowes tags associative array
			if (allowed_tags) {
				allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
			}
			str += '';

			// Match tags
			matches = str.match(/(<\/?[\S][^>]*>)/gi);
			// Go through all HTML tags
			for (key in matches) {
				if (isNaN(key)) {
					// IE7 Hack
					continue;
				}

				// Save HTML tag
				html = matches[key].toString();
				// Is tag not in allowed list? Remove from str!
				allowed = false;

				// Go through all allowed tags
				for (k in allowed_array) {            // Init
					allowed_tag = allowed_array[k];
					i = -1;

					if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
					if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
					if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

					// Determine
					if (i == 0) {                allowed = true;
						break;
					}
				}
				if (!allowed) {
					str = replacer(html, "", str); // Custom replace. No regexing
				}
			}
		} catch (err) {
			//console.log(UtilClass.UtilClass('err', err));
			O.o ('ERROR: in utilHtmlCleanerFunctions.cleanHtmlPre() UtilHtmlCleaner:' + err);
		}

		//return "bracketed << by cleanHtmlPre <<" + str + ">>";
		return str;
	}

	this.convertHtmltoText = function(html)
	{
		//var prestrip = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
		var poststrip = html.replace(/&nbsp;/gm, ' ');
		poststrip = poststrip.replace(/<(?:.|\n)*?>/gm, '');
		poststrip = poststrip.trim();
		//console.log ('prestrip [' + prestrip + ']');
		//console.log ('poststrip [' + poststrip + ']');
		return poststrip;

		//var pre = html;
		//var post = pre;
		//if (confirm('Do you want the HTML cleaned?'))
		//{
		//	var post = this.cleanHtmlPre(html,
		//		// allowed tags list
		//		//''
		//		'<a>' +
		//		'<b>' +
		//		'<br>' +
		//		'<code>' +
		//		'<div>' +
		//		'<h1>' +
		//		'<h2>' +
		//		'<h3>' +
		//		'<h4>' +
		//		'<h5>' +
		//		'<i>' +
		//		'<li>' +
		//		'<p>' +
		//		'<pre>' +
		//		'<span>' +
		//		'<strong>' +
		//		'<table>' +
		//		'<tbody>' +
		//		'<td>' +
		//		'<tr>' +
		//		'<u>' +
		//		'<ul>'
		//	);
		//}
		//if (pre !== post)
		//	alert('changed [' + pre + '] to ['+ post + ']');
		//else
		//	alert('no change from pre to post [' + pre + ']');
        //
		//return post;
	}


	/**
	 * eg remove what mce seems to add - these trailing   <p>&nbsp;</p>
	 * <p><span style="text-decoration: underline;"><strong>jo</strong></span>e5 [IBM - United States] http://ibm.com</p>
	   <p>&nbsp;</p>
	   <p>&nbsp;</p>

	 * @param html
     */

	// ToDo: bear in mind this is an ordered list currently, and the trim is not complete
	// called CRUDE in that sense
	this.arrTrimTokens = ['<p>&nbsp;</p>', '<p>', '</p>']
	this.htmlTrimCrude = function(htmlToTrim)
	{

		//O.o ('in htmlTrimCrude');
		do {
			var savhtmlToTrim = htmlToTrim;
			this.arrTrimTokens.forEach(function (htmlToMatchAndRemove) {
				htmlToTrim = htmlToTrim.allAfterFirst(htmlToMatchAndRemove, true);
			});

			O.o('done htmlTrimCrude [' + htmlToTrim + ']');
			// tail cleaner
			this.arrTrimTokens.forEach(function (htmlToMatchAndRemove) {
				var savepre = htmlToTrim;
				htmlToTrim = htmlToTrim.allBeforeLast(htmlToMatchAndRemove, true);
				O.o('removing tail:' + htmlToMatchAndRemove + ' from [' + savepre + '] to [' + htmlToTrim + ']')
			});
		}  while (savhtmlToTrim !== htmlToTrim);

		if (savhtmlToTrim !== htmlToTrim && savhtmlToTrim.trim() === '') {
			O.o('error? changed from   savhtmlToTrim[' + savhtmlToTrim + ']  to     htmlToTrim[' + htmlToTrim + ']');
		}
		return htmlToTrim;
	}





}



// http://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser
var handlepaste = function (elem, e)
{
	//alert('in scope.pasteHtmlContentEditableCleaner():' + window.clipboardData.getData('Text'));
	var savedcontent = elem.innerHTML;
	if (e && e.clipboardData && e.clipboardData.getData)
	{// Webkit - get data from clipboard, put into editdiv, cleanup, then cancel event
		if (/text\/html/.test(e.clipboardData.types))
		{
			elem.innerHTML = e.clipboardData.getData('text/html');
			alert ('in handlepaste 1 elem.innerHTML [' + elem.innerHTML + ']');
		}
		else if (/text\/plain/.test(e.clipboardData.types))
		{
			elem.innerHTML = e.clipboardData.getData('text/plain');
			alert ('in handlepaste 2 elem.innerHTML [' + elem.innerHTML + ']');
		}
		else
		{
			elem.innerHTML = "";
		}
		waitforpastedata(elem, savedcontent);
		if (e.preventDefault)
		{
			e.stopPropagation();
			e.preventDefault();
		}
		return false;
	}
	else
	{// Everything else - empty editdiv and allow browser to paste content into it, then cleanup
		elem.innerHTML = "";
		waitforpastedata(elem, savedcontent);
		return true;
	}
}

function waitforpastedata (elem, savedcontent) {
	//alert ('in waitforpastedata ');
	if (elem.childNodes && elem.childNodes.length > 0) {
		processpaste(elem, savedcontent);
	}
	else {
		var that = {
			e: elem,
			s: savedcontent
		}
		that.callself = function () {
			waitforpastedata(that.e, that.s)
		}
		setTimeout(that.callself,20);
	}
}


function processpaste (elem, savedcontent) {
	//alert ('in processpaste ');
	var pasteddata = elem.innerHTML;
	//^^Alternatively loop through dom (elem.childNodes or elem.getElementsByTagName) here

	//elem.innerHTML = 'dd:' + savedcontent;
	elem.innerHTML = 'dd:' + pasteddata;

	// Do whatever with gathered data;
	//alert('xx:' + pasteddata);
}




// to decide is user entered html so this should be a hands off record past first text
// trim first

// may only work on browser

function isHTML(str) {
	var a = convertHtmlStringToDocForParse(str);
	for (var c = a.childNodes, i = c.length; i--; ) {
		if (c[i].nodeType == 1) return true;
	}
	return false;
}

// return a parsable doc element given a potentially HTML string
function convertHtmlStringToDocForParse (str) {
	var a = document.createElement('div');
	a.innerHTML = str;
	return a
}


function removeHtmlWhiteSpace(str)
{
	var pt = '';
	['br','div','p'].forEach(function(x)
		{
			pt = pt + '|' + x + '|/' + x
		}
	);
	pt = '(<(' + pt.slice(1) + ')>|&nbsp;)';

	O.o ('pt:' + pt);

	//var pattern = "(<(br|/br|div|/div|p|/p)>";
	var re = new RegExp(pt, "gi");
	str = str.replace(re, ' ');
	O.o ('str:' + str);
	return str;
}

//This searches for empty tags (some predefined) and / terminated XHTML empty tags and validates as HTML because of the empty tag OR will capture the tag name and attempt to find it's closing tag somewhere in the string to validate as HTML.
function isHTML2(str, ignoreHtmlWhiteSpace) {
// /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(htmlStringHere)
// Explained demo: http://regex101.com/r/cX0eP2

	if (ignoreHtmlWhiteSpace)
		str = removeHtmlWhiteSpace(str)

	// is it still html after removing whitespace?  if not then we'll treat it like just text
	//O.o ('str:' + str);
	return /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i.test(str);
}


if (typeof exports !== 'undefined')
{
    exports.utilHtmlCleanerFunctions = utilHtmlCleanerFunctions;
    exports.handlepaste = handlepaste;
    exports.isHTML2 = isHTML2;
	// UtilHtmlCleaner.utilHtmlCleanerFunctions.cleanHtmlPre(strm ...)
}

// TESTS

if (false)
{
	var prestrip = '<p>ibm.com</p>';
	var stripped  = utilHtmlCleanerFunctions.cleanHtmlPre(prestrip, '');
	O.o ('[' + prestrip + '] -> [' + stripped + ']');  // 1. ologx:[<p>ibm.com</p>] -> [ibm.com]
}

if (false)
{
	var prestrip = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	var stripped  = utilHtmlCleanerFunctions.htmlTrimCrude(prestrip);
	O.o ('[' + prestrip + '] -> [' + stripped + ']');  // 1. ologx:[<p>ibm.com</p>] -> [ibm.com]
}

if (false)
{
	var prestrip = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	console.log ('[' + isHTML2(prestrip, true) + ']' + prestrip);
	var prestrip = '<P>&NbSp;</P><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	console.log ('[' + isHTML2(prestrip, true) + ']' + prestrip);
	var prestrip = 'testing';
	console.log ('[' + isHTML2(prestrip) + ']' + prestrip);
}

if (false) // test html to text converter
{
	var html = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	console.log ('html  [' + html + ']');
	console.log ('text [' + utilHtmlCleanerFunctions.convertHtmltoText(html) + ']');

	var html = '<p>&nbsp;</p>cccc <p>&nbsp;</p><a href="ibm.com">hp.com</a><p>&nbsp;</p>';
	console.log ('html  [' + html + ']');
	console.log ('text [' + utilHtmlCleanerFunctions.convertHtmltoText(html) + ']');
}




},{"C:/utd/150719utdG/public/util/O.js":3,"C:/utd/150719utdG/public/util/UtilString.js":13}],10:[function(require,module,exports){
'use strict';

var O = require('C:/utd/150719utdG/public/util/O.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = UtilHtmlCleaner;
// UtilHtmlCleaner.utilHtmlCleanerFunctions.convertHtmltoText



/**
 * strip html tags out of a string
 */
var fns = new function() {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');
	this.convertElementToIframeById = function (elementIdToReplace, newIframeId, contentEditableTF, innerHtml_optional) {
		alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);
		alert("in cleanHtmlPre elementIdToReplace:" + elementIdToReplace);
		var elementHtml = document.getElementById(elementIdToReplace).outerHTML;
		//encodeURIComponent
		alert("elementHtml:" + elementHtml);
		alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);

		try {
			if (!innerHtml_optional)
				innerHtml_optional = document.getElementById(elementIdToReplace).outerHTML;

			$('#' + elementIdToReplace).html('<iframe id=\'' + newIframeId +
				'\'><html><head></head><body></body></html></iframe>');
			if (contentEditableTF) {
				innerHtml_optional = '<div contenteditable=\'true\'>' + innerHtml_optional + '</div>';
			}
			document.getElementById(newIframeId).contentDocument.write(innerHtml_optional);

		} catch (err) {
			//console.log(UtilClass.UtilClass('err', err));
			O.o('ERROR: in UtilHtmlDocumentManipulate:' + err);
		}
	}

}

if (typeof exports !== 'undefined')
{
    exports.fns = fns;
}

// TESTS

if (false)
{
}





},{"C:/utd/150719utdG/public/util/O.js":3}],11:[function(require,module,exports){
'use strict';

/**
 * functions to detect the type of a sec
 */

// var UtilJsTypeDetect = require('C:/utd/150719utdG/public/util/UtilJsTypeDetect.js');

//tokenize raw text, get array of http-urls to get titles.  expand to include title

var isString = function(s) {
        return (typeof s == 'string' || s instanceof String);

}


if (typeof exports !== 'undefined') {
        exports.isString = isString;
}


},{}],12:[function(require,module,exports){
'use strict';
// var UtilPrintObjects = require('C:/utd/150719utdG/public/util/UtilPrintObjects.js');
// in entry.js


function printObjJSONstringify (desc, obj) {
	return 'desc [' + desc + '] JSON.stringify [' + JSON.stringify(obj, null, 2) + '] '
}




//function printObjToDepthNotCompletedSeeAlsoGetClass (desc, obj, depth) {
//	var s = null;
//	if (!depth)
//		depth = 0;
//
//	try {
//		if (obj === null)
//			s = s + '\r\n  printObj a says desc [' + desc + '] obj passed in is null. ';
//		else if (obj === undefined)
//			s = s + '\r\n  printObj a says desc [' + desc + '] obj passed in is undefined. ';
//		else if (Array.isArray(obj))
//		{
//			s = s + '\r\n  printObj a says desc [' + desc + '] obj passed in is array. ';
//		}
//	}
//
//}



if (typeof exports !== 'undefined') {
    exports.printObjJSONstringify = printObjJSONstringify;
}

},{}],13:[function(require,module,exports){
    // var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');

var endsWith = function (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};


String.prototype.endsWith = function (s) {
    return this.length >= s.length && this.substr(this.length - s.length) == s;
}

String.prototype.beginsWith = function (s) {
    return this.indexOf(s) === 0;
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

String.prototype.replaceLast = function (what, replacement) {
	return this.reverse().replace(new RegExp(what.reverse()), replacement.reverse()).reverse();
};

String.prototype.allAfterLast = function (allAfterLastOfThis) {
	return i = this.substring(this.lastIndexOf(allAfterLastOfThis)+1);
};

	/**
	 * remove one or all of a string at head
	 * @param substr
	 * @param moreThanOne
	 * @returns {*}
     */
	String.prototype.allBeforeLast = function (substr, moreThanOne) {
		var rtn = this;
		do {
			rtn = rtn.trim();
			var nextIdx = rtn.lastIndexOf(substr);
			var changed = false;
			if (nextIdx > 0 && rtn.endsWith(substr)) {
				changed = true;
				rtn = rtn.slice(0, nextIdx);
			}
		} while (moreThanOne && changed);
		return rtn;
	};

	String.prototype.allAfterFirst = function (substr, moreThanOne) {
		var rtn = this;
		do
		{
			rtn = rtn.trim();
			var firstIdx = rtn.indexOf(substr);
			var changed = false;
			if (firstIdx >= 0)  {
				changed = true;
				rtn = rtn.slice(firstIdx+1);
			}
		} while (moreThanOne && changed);
		return rtn;
	};

	/**
     *
     * @param s
     * @returns {*}
     */
var convertNonBreakingSpace = function (s) {
    var i = 0;
    //alert ('in asciiTable this.length' + this.length)
    var rtn = s;
    while (i < rtn.length) {
        if (rtn.charCodeAt(i) === 160)
        {
            rtn = rtn.substring(0, i) + ' ' + rtn.substring(i+1);
        }
        i++;
    }
    return rtn;
};

var convertRemoveTrailing10 = function (s) {
    var i = s.length;
    //alert ('in asciiTable this.length' + this.length)
    var rtn = s;
    while (i >= 0) {
        if (rtn.charCodeAt(i) === 10)
        {
            rtn = rtn.substring(0, i) + ' ' + rtn.substring(i+1);
        }
        i--;
    }
    return rtn;
};


String.prototype.asciiTable = function (desc) {
    //alert ('asciiTable this [' + this + ']')
    var i = 0;
    var rtn = '\r\nASCII TABLE [' + desc + ' <';
    //alert ('in asciiTable this.length' + this.length)
    while (i < this.length) {
        rtn = rtn + '\r\n   ' + ( i + '.. char [' + this.charAt(i) + '] ascii dec [' + this.charCodeAt(i) + ']' );
        i++;
    }
    return rtn + "\r\n> END ASCII TABLE";
}


// http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

// http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
// console.log ('111111111111111111111 defining function');
String.prototype.hasUpperCase = function () {
    var str = this;
    var arr = str.split('');
    //console.log ('@@@@@@@@@@@@@@@@@@@@@@@@@@ in fn str [' + str + ']');
    for (var c in arr) {
        //console.log ('testing case of [' + c + ']');
        var cc = arr[c];
        if (cc >= 'A' && cc <= 'Z') {
            //console.log ('mixed case return true');
            return true;
        }
    }
    return false;
};












if (typeof exports !== 'undefined') {
    exports.endsWith = endsWith;
    exports.convertNonBreakingSpace = convertNonBreakingSpace;
    exports.convertRemoveTrailing10 = convertRemoveTrailing10;
}


var test = false;
if (test)
{
}

},{}],14:[function(require,module,exports){
//utd = [];   // ustodo utilities
//utd[Date] = require('C:/utd/150719utdG/public/util/UtilDate.js');
//utd[Class] = require('C:/utd/150719utdG/public/util/UtilClass.js');
//utd[HtmlHref] = require('C:/utd/150719utdG/public/util/UtilHtmlHref.js');

// 1107
UtilDate = require('C:/utd/150719utdG/public/util/UtilDate.js');
UtilClassz = require('C:/utd/150719utdG/public/util/UtilClass.js');
UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
UtilExceptionStack = require('C:/utd/150719utdG/public/util/UtilExceptionStack.js');
UtilJsTypeDetect = require('C:/utd/150719utdG/public/util/UtilJsTypeDetect.js');
UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');
UtilNLB_bgFade = require('C:/utd/150719utdG/public/util/NLB_bgFade.js');
UtilErrorEmitter = require('C:/utd/150719utdG/public/util/UtilErrorEmitter.js');
UtilPrintObjects = require('C:/utd/150719utdG/public/util/UtilPrintObjects.js');
UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
UtilHtmlDocumentManipulate = require('C:/utd/150719utdG/public/util/UtilHtmlDocumentManipulate.js');
//ModuleTinymcePasteCleanFilter = require('C:/utd/150719utdG/public/lib/ustodo-browser-util/ModuleTinymcePasteCleanFilter.js');

O = require('C:/utd/150719utdG/public/util/O.js');


    // browserify C:/utd/150719utdG/public/util/entry.js > C:/utd/150719utdG/public/bundle.js



},{"C:/utd/150719utdG/public/util/NLB_bgFade.js":2,"C:/utd/150719utdG/public/util/O.js":3,"C:/utd/150719utdG/public/util/UtilClass.js":4,"C:/utd/150719utdG/public/util/UtilDate.js":5,"C:/utd/150719utdG/public/util/UtilErrorEmitter.js":6,"C:/utd/150719utdG/public/util/UtilExceptionStack.js":7,"C:/utd/150719utdG/public/util/UtilHrefThisText.js":8,"C:/utd/150719utdG/public/util/UtilHtmlCleaner.js":9,"C:/utd/150719utdG/public/util/UtilHtmlDocumentManipulate.js":10,"C:/utd/150719utdG/public/util/UtilJsTypeDetect.js":11,"C:/utd/150719utdG/public/util/UtilPrintObjects.js":12,"C:/utd/150719utdG/public/util/UtilString.js":13}]},{},[14]);
