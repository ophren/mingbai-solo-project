const BASE_URL = 'http://localhost:3001';


function getDescriptionsForCategory () {
    return fetchRequest ('/query');
}


function newDescription (body) {
    const eventBody = JSON.stringify(body.description);
  
    return fetchRequest ('/new', {
      method: "POST",
      headers : {'Content-Type' : 'application/json',},
      body: eventBody
    })
  }

  function fetchRequest (path, options) {
    return fetch(BASE_URL + path, options)
      .then (res => res.json ())
  }

export default {
    getDescriptionsForCategory,
    newDescription
  }