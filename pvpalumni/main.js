// specify the data
function axiosGet() {
	const request = axios.get("http://ec2-13-126-79-110.ap-south-1.compute.amazonaws.com:8080/alumni/true/true/SAN,KHA,WAR,ASF,WNP,kAR,GAD,MED,PED,SID,JAG,NGK,KAM,NIR,JAN,NAL,VIK,PAL,BHA,MAN,KAR,NAR,RAN,NIZ,ADB");
	return request.then((response) => {return response.data});	
	 
}
	
var columnDefs = [
  {headerName: "Region Name", field: "groupShortName"},
  {headerName: "Schools Count", field: "schoolsCount"},
  {headerName: "Students Registered", field: "totalRegistredStudents"}
];

// specify the data
var rowData;
// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    //var gridDiv = document.querySelector('#myGrid');
    axiosGet().then(data=> {
		/*gridOptions.rowData = data.groupChoiceData;
    	console.log("Selection Data: ", gridOptions.rowData);    	    	
    	new agGrid.Grid(gridDiv, gridOptions);*/    	
    console.log("Graph Data: ", data.bartChartData);	
    var graphDiv = Highcharts.chart('container', {
	  chart: {
	    type: 'column'
	  },
	  title: {
	    text: 'SARASWATHI SISHU MANDIR ALUMNI'
	  },
	  subtitle: {
	    text: 'www.vidyabharatialumni.org'
	  },
	  xAxis: {
	    categories: data.bartChartData.categories,
	    crosshair: true
	  },
	  yAxis: {
	    min: 0,
	    title: {
	      text: 'Registrations (count)'
	    }
	  },
	  tooltip: {
	    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	    footerFormat: '</table>',
	    shared: true,
	    useHTML: true
	  },
	  plotOptions: {
	    column: {
	      pointPadding: 0.2,
	      borderWidth: 0
	    }
	  },
	  series: data.bartChartData.series
	});
    	
    });
    
        
});
