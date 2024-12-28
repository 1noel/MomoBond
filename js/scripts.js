
// View password
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}


// progress
          var options = {
          series: [44, 55, 67],
          chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '12px',
              },
              value: {
                fontSize: '12px',
              },
            }
          }
        },

        labels: ['Apples', 'Oranges', 'Bananas'],
        legend: {
            show: true,
            position: 'left',
            horizontalAlign: 'left',
            fontSize: '13px',
            fontFamily: 'Montserrat, sans-serif',
            markers: {
                width: 15,
                height: 15,
                radius: 2
            },
            itemMargin: {
                vertical: 12,
            },
            formatter: function(seriesName, opts) {
                return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex] + "%"]
            }
        },

        labels: [' Annette Black', 'Marvin McKinney', 'Cody Fisher'],
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();


//   column charts 
      
var options = {
    series: [{
    name: 'Net Profit',
    data: [80, 73, 69, 45, 30, 50, 63, 76, 80]
  }],
    chart: {
    type: 'bar',
    height: 200
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['8/12', '9/12', '10/12', '11/12', '12/12', '13/14', '14/12', '15/12', '16/12'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var colchart = new ApexCharts(document.querySelector("#colchart"), options);
  colchart.render();
