var copperCosts = [{
     month: 1,
     2010: 7341,
     2011: 9585,
     2012: 7501
}, {
     month: 2,
     2010: 7016,
     2011: 10026,
     2012: 8470
}, {
     month: 3,
     2010: 7202,
     2011: 9889,
     2012: 8591
}, {
     month: 4,
     2010: 7851,
     2011: 9460,
     2012: 8459
}, {
     month: 5,
     2010: 7481,
     2011: 9373,
     2012: 8320
}, {
     month: 6,
     2010: 6532,
     2011: 9108,
     2012: 7465
}, {
     month: 7,
     2010: 6498,
     2011: 9295,
     2012: 7475
}, {
     month: 8,
     2010: 7191,
     2011: 9834,
     2012: 7430
}, {
     month: 9,
     2010: 7596,
     2011: 9121,
     2012: 7614
}, {
     month: 10,
     2010: 8057,
     2011: 7125,
     2012: 8245
}, {
     month: 11,
     2010: 8373,
     2011: 7871,
     2012: 7727
}, {
     month: 12,
     2010: 8636,
     2011: 7725,
     2012: 7880
}];

var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.gaugeOptions1 = {
        scale: {
            startValue: 0,
            endValue: 100,
            tickInterval: 0
        },
        geometry: {
           startAngle: 180,
           endAngle: 180
         },
        value: 86,
        title: {
            text: "Product",
            font: { size: 40 }
        }
    },
        $scope.gaugeOptions2 = {
            scale: {
                startValue: 0,
                endValue: 12,
                tickInterval: 1
            },
            geometry: {
               startAngle: 180,
               endAngle: 180
             },
            value: 8,
            title: {
                text: "Runway",
                font: { size: 40 }
            }
        },
        $scope.gaugeOptions3 = {
            scale: {
                startValue: 0,
                endValue: 100,
                tickInterval: 5
            },
            geometry: {
               startAngle: 180,
               endAngle: 180
             },
            value: 19,
            title: {
                text: "Engagement",
                font: { size: 40 }
            }
        },
        $scope.gaugeOptions4 = {
            scale: {
                startValue: 0,
                endValue: 100,
                tickInterval: 5
            },
            geometry: {
               startAngle: 180,
               endAngle: 180
             },
            value: 19,
            title: {
                text: "Conversion",
                font: { size: 40 }
            }
//<button onclick="myFunction()">"Apply for Funding"</button>
        },
         sparklineOptions = {
          type: 'splinearea',
          showMinMax: true,
          dataSource: copperCosts,
        argumentField: "month"
  };
  $scope.area2010 = sparklineOptions;
    $scope.splinearea2010 = sparklineOptions;
    $scope.steparea2010 = sparklineOptions;
});



//
// angular.module('myApp', ['angularjs-gauge']).config(configApp);
//
//   configApp.$inject = ['ngGaugeProvider'];
//   function configApp(ngGaugeProvider) {
//
//     // setting the default parameters for
//     // gauge instances globally.
//     ngGaugeProvider.setOptions({
//         size: 250,
//         cap: 'round',
//         thick: 15,
//         foregroundColor: "#ff8645",   // note the camelCase notation for parameter name
//         backgroundColor: "#e4e4e4"
//     });
//
//   }
