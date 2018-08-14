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


        });
 

});