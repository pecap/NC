var request = require("request");

var getSubVars = function(){
  var options = {
                  method: 'GET',
                  url: 'https://planning-a490304.pbcs.em2.oraclecloud.com/HyperionPlanning/rest/v3/applications/DELPHI/jobdefinitions',
                  headers:
                  {
                    'Cache-Control': 'no-cache',
                    Authorization: 'Basic YTQ5MDMwNC5JWWVoZXprZWxvdjphMDU0Nzc4MDEyMUI='
                  }
                };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var data = body;
    console.log(data);
  }); 
};
