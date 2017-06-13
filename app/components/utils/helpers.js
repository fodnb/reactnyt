var axios = require("axios");

var nytAPI = "35e5548c618555b1a43eb4759d26b260";


var helper = {


    runQuery(query, startDate, endDate) {
        console.log("run query");
       
        var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + query + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=86170d66093b4292a6e888bbeef0c23e"
    
 
        return axios.get(url).then(function(result) {
            var myArray = [];
            if(result.data.response.docs){
                for(var i = 0; i < 10; i++){
                    var myobj ={
                    title: result.data.response.docs[i].headline.main,
                    link: result.data.response.docs[i].web_url,
                    date: result.data.response.docs[i].pub_date
                }
                myArray.push(myobj);
  
                }
                console.log(myArray);
              return (myArray);
                {/*for(var i = 0; i < 10; i++){
                    var title = result.data.response.docs[i].headline.main;
                    var link = result.data.response.docs[i].web_url;
                    var date = result.data.response.docs[i].pub_date;
                    console.log(title);
                }*/}
            }
        });
    },

    getHistory() {
        return axios.get("/api");
    },

    postHistory(title) {
        return axios.post("/api", {title: title});
    }
};


module.exports = helper;
