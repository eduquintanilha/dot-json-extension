
async function logTabs(tabs) {
    for (let tab of tabs) {
      // tab.url requires the `tabs` permission or a matching host permission.
      //console.log(tab.url);
      var splited = tab.url.split('/');
      var finalUrl = `${splited[0]}//${splited[2]}`;

      console.log(finalUrl);

      try {
          const response = await fetch(finalUrl+'/package.json', {redirect: "manual", timeout: 10000});
          console.log(response.text)
      } catch (error) {
          console.error(error);
      }
    }
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  let querying = browser.tabs.query({currentWindow: true});
  querying.then(logTabs, onError);