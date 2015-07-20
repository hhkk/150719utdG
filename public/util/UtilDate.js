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
// var UtilDate = require('C:/utd/141213UtdV6/public/modules/ustodo/UtilDate.js');
// var UtilDate = require('C:/utd/141213UtdV6/public/util/UtilDate.js');

var UtilClass = require('C:/utd/141213UtdV6/public/util/UtilClass.js');

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

