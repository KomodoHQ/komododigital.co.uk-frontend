const shell = require('shelljs');
const http = require('http');
xml2js = require('xml2js')
http.get('http://localhost:9000/sitemap.xml', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
  	xml2js.parseString(data, function (err, result) {
  		const urlArray = {};
  		for (let i = 0; i<result.urlset.url.length; i++) {
  			let urlTemp = result.urlset.url[i].loc[0]
  			let urlSplit = urlTemp.split('/')
  			console.log(urlSplit)
  			urlArray[urlSplit[urlSplit.length-2]] = urlTemp
  		}
  		for  (i in urlArray) {
  			shell.exec('node node_modules/lighthouse/lighthouse-cli/index.js --output-path=./report/'+i+'.html --quiet --chrome-flags="--headless" '+urlArray[i])
  		}
    	console.log(urlArray);
	});
  })

}).on("error", (err) => {
  console.log("Error: " + err.message);
});



