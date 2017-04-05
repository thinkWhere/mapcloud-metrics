// Test data from API
var statsCustomer = [
    {
        date: '2017-03-31T10:48:41.161085',
        numberOfWMSRequests: 39
    },
    {
        date: '2017-04-01T10:48:41.161085',
        numberOfWMSRequests: 79
    },
    {
        date: '2017-04-02T10:48:41.161085',
        numberOfWMSRequests: 88
    },
    {
        date: '2017-04-03T10:48:41.161085',
        numberOfWMSRequests: 30
    },
    {
        date: '2017-04-04T10:48:41.161085',
        numberOfWMSRequests: 99
    },
    {
        date: '2017-05-05T10:48:41.161085',
        numberOfWMSRequests: 1
    }
];

// This prints the first day of the stats to the console in your browser
console.log(statsCustomer[0]);

// Test chart from http://www.chartjs.org/docs/
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});