(function(){
	let $verifyButton
	function loadHandler(){
		// $verifyButton = document.getElementById("verify-button")
		// $verifyButton.addEventListener("click",function(){
		// 	verify()
		// })
		window.onload = verify()
	}
	async function verify(){
		try{
			let host
			let url
			chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
			    url = tabs[0].url; 
			    url = url.split("//")
			    url = url[1].split("/")
			    url = url[0].split("www.")
			    host = url.length > 1 ? url[1] : url[0]
			    console.log("host: ", host)
			    request(host)

			});
			async function request(host){
				let res = await(await fetch("http://adchain-registry-api.metax.io/registry/lookup?domain="+host)).json();
				console.log(res)
				if(!res.whitelisted){
					window.document.getElementById("state").innerHTML = "This site is not in the adChain Registry"	
				}else{
					window.document.getElementById("state").innerHTML = 'This site is registered with &nbsp;	<br/> <img style="margin-bottom: -15px;" height="45" src="adChainLogoWhite.png"/>'
				}
				// $verifyButton.className = "hidden"
			}
		}catch(error){
			console.log(error)
		}
	}
	loadHandler()
})()
