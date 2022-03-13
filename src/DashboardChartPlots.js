export const series = [
    {
       name: "Net Profit",
       data: [44, 55, 57, 56, 61, 58],
     },
     {
       name: "Net Revenue",
       data: [40, 65, 58, 51, 40, 42],
     }
   
   ]
   export const options = {
     chart: {
       sparkline: {
         enabled: true, // make this true
       },
     },
     plotOptions: {
       bar: {
         horizontal: false,
         columnWidth: "50%",
         endingShape: "rounded",
       },
     },
     dataLabels: {
       enabled: false,
     },
     stroke: {
       show: true,
       width: 2,
       colors: ["transparent"],
     },
     xaxis: {
       categories: [
         "Dec-40%",
         "Jan-63%",
         "Feb-41%",
         "Mar-5%",
         "Apr17%",
         "May-81%",

       ],
     },
     yaxis: {
       title: {
         text: "$ (thousands)",
       },
     },
     fill: {
       opacity: 1,
     },
     tooltip: {
       y: {
         formatter: function (val) {
           return "$ " + val + " thousands";
         },
       },
     },
   };