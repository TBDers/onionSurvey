$("#getData").on("click", function (event) {
    event.preventDefault();

    console.log("it works!")

    var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: currentURL + "/api/surveys", method: "GET" })
        .then(function(data) {

          console.log("------------------------------------");
          console.log(data);
          console.log("------------------------------------");

          var ans1 = [];
          var ans2 = [];
          var ans3 = [];
          var ans4 = [];
          var ans5 = [];
    
          for (i=0; i<data.length; i++){
            ans1.push(data[i].question1)
            ans2.push(data[i].question2)
            ans3.push(data[i].question3)
            ans4.push(data[i].question4)
            ans5.push(data[i].question5)
            
          }

          console.log("this is answer 1: "+ans1)
          console.log("this is answer 2: "+ans2)
          console.log("this is answer 3: "+ans3)
          console.log("this is answer 4: "+ans4)
          console.log("this is answer 5: "+ans5)
          

/////////////this nested for loop is cleaning and formatting the data and pushing it into the ans2data variable//////////

        var ans1data = [];                          
        

          var ydistinct = [0,0,0,0,0,0,0,0,0,0];        // ydistinct is the actual array we want to use for our bar chart.
          for (b=0; b<10; b++){                         // these two for loops are counting the amount of answers for each distinct y and pushing them into an
              for (d=0; d<ans1.length; d++){     // array that includes the number 0 for answers that were never chosen.
              if (ans1[d] == b){
                ydistinct[b-1] = ydistinct[b-1] +1;
              }

              }
          }
          console.log(ydistinct)

///////////this is the end of the data formating loop////////////////////////

        var plot1data = [];                             //this is the object that will actually be used for the chart

                   // this for loop is filling plot2data with the data for the chart
            var  obj = {};
            obj["x"] = ['1','2','3','4','5','6','7','8','9','10'];
            obj["y"] = ydistinct;
            obj["name"] = "q1"
            obj["type"] = 'bar'
            plot1data.push(obj)
        
        console.log("!!!!!!!!!!!!!")
        console.log(plot1data)

        var layout1 = {
            title: "Will Murph Remember Us?",
            barmode: 'group',
            yaxis: {title: "Total Votes"},
            xaxis: {title: "Chance Murph Will Remember Us"}
        }

        Plotly.newPlot('ans1div', plot1data, layout1); //this is the plot for ans2

// ////////////////////////////////////////////// ANSWER 2 CHART ///////////////////////////////////////////////////////    


        var ans2data = [];                          
        

        var ydistinct2 = [0,0,0,0,0,0,0,0,0,0];        // ydistinct is the actual array we want to use for our bar chart.
        for (b=0; b<10; b++){                         // these two for loops are counting the amount of answers for each distinct y and pushing them into an
            for (d=0; d<ans2.length; d++){     // array that includes the number 0 for answers that were never chosen.
            if (ans1[d] == b){
              ydistinct2[b-1] = ydistinct2[b-1] +1;
            }

            }
        }
        console.log(ydistinct2)

///////////this is the end of the data formating loop////////////////////////

      var plot2data = [];                             //this is the object that will actually be used for the chart

                 // this for loop is filling plot2data with the data for the chart
          var  obj = {};
          obj["labels"] = ['1 Day Missed','2 Days Missed','3 Days Missed','4 Days Missed','5 Days Missed','6 Days Missed','7 Days Missed','8 Days Missed','9 Days Missed','10 Days Missed'];
          obj["values"] = ydistinct2;
          obj["type"] = 'pie'
          obj["hoverinfo"] = 'label+percent'
          obj["textinfo"] = 'percent'
          plot2data.push(obj)
      
      console.log("!!!!!!!!!!!!!")
      console.log(plot2data)

      var layout2 = {
        title: "question 2",
          height: 400,
          width: 500
      }

      Plotly.newPlot('ans2div', plot2data, layout2); //this is the plot for ans2



// ////////////////////////////////////////////// ANSWER 3 CHART ///////////////////////////////////////////////////////  



    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

      var uniqueAnswer3 = ans3.filter( onlyUnique );
      var uniqueAnswer3Count = [];
 
 

      for (q=0; q<uniqueAnswer3.length; q++){
        uniqueAnswer3Count.push(0)
          for (o=0; o<ans3.length; o++){
              if (ans3[o] == uniqueAnswer3[q]){

                uniqueAnswer3Count[q] = uniqueAnswer3Count[q] + 1;
              }
          }
      }

      console.log ('these are unique answers and counts '+uniqueAnswer3+uniqueAnswer3Count)


      var wordDisplay = [{text: ' ', size: 15}]
      console.log(wordDisplay)
  
    for (t= 0; t<uniqueAnswer3.length; t++){
        var obj = {} 
        obj['text'] = uniqueAnswer3[t];
        obj['size'] = uniqueAnswer3Count[t]
        console.log(obj)
        wordDisplay.push(obj)
        console.log(wordDisplay)
    }


         console.log(wordDisplay)
    
d3.wordcloud()
.size([800, 400])
.selector('#wordcloud')
.words(wordDisplay)
.start();

//////////////////////////////////////////////// ANSWER 4 CHART ///////////////////////////////////////////////////////


var level = 180;

// Trig to calc meter point
var degrees = 180 - level,
     radius = .5;
var radians = degrees * Math.PI / 180;
var x = radius * Math.cos(radians);
var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
var path = mainPath.concat(pathX,space,pathY,pathEnd);

var data = [{ type: 'scatter',
   x: [0], y:[0],
    marker: {size: 28, color:'850000'},
    showlegend: false,
    name: 'speed',
    text: level,
    hoverinfo: 'text+name'},
  { values: [50/2, 50/2, 50],
  rotation: 90,
  text: ['The Onion Survey is the Best!', 'The Onion Survey is the Worst!', ''],
  textinfo: 'text',
  textposition:'inside',
  marker: {colors:['rgba(0, 1, 217)', 'rgba(0, 0, 0)', 'rgba(255, 255, 255, 0)']},
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}];

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: 'The Onion Survey Approval Gauge',
  height: 1000,
  width: 1000,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
};

Plotly.newPlot('ans4div', data, layout);



/////////////////////////////////////////////// ANSWER 5 CHART /////////////////////////////////////////////////////// 


var ydistinct5 = [0,0,0,0,0,0,0,0,0,0];        // ydistinct is the actual array we want to use for our bar chart.
for (b=0; b<10; b++){                         // these two for loops are counting the amount of answers for each distinct y and pushing them into an
    for (d=0; d<ans5.length; d++){     // array that includes the number 0 for answers that were never chosen.
    if (ans5[d] == b){
      ydistinct5[b-1] = ydistinct5[b-1] +1;
    }

    }
}
console.log(ydistinct5)

var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: ydistinct5,
    mode: 'lines+markers',
    type: 'scatter'
  };
  

  
  var data = [trace1];

  var layout5 = {
    title: "question 5",
      height: 400,
      width: 500,
      yaxis: {title: "Total Votes"},
      xaxis: {title: "Bootcamp Rating"}
  }
  
  Plotly.newPlot('ans5div', data, layout5);


        });
 

});