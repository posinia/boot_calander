$(function() {
	init();
});

function init() {
	console.log("init");
	// var $startDate = $("#startDate");
	// var $endDate = $("#endDate");
    //
	// //$startDate.val("201806");
	// //$endDate.val();
	// console.log($startDate);
	// console.log($endDate);

	let searchPeriod = 7;
	let date = new NaruDateTimeMultiPicker("#test1", {
		inputSt: "startDate",
		inputEd: "endDate",
		//originPattern: "YYYYMMDD",
		//selectorPattern: "YYYY-MM-DD",
		minRange: 1,//1분 차이
		maxRange: 1*60*24*searchPeriod//최대 searchPeriod일
	});
	console.log(date);

	new NaruDateTimePicker("#test2", {
		inputSt: "startDate2",
		inputEd: "endDate2",
		//originPattern: "YYYYMMDD",
		//selectorPattern: "YYYY-MM-DD",
		minRange: 1,//1분 차이
		maxRange: 1*60*24*searchPeriod//최대 searchPeriod일
	});

}
