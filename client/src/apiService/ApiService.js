const BASE_URL = 'http://localhost:3001';

// GET
function getDescriptionsForCategory () {
  return fetchRequest ('/query');
}

// POST
function newDescription (body) {
  const eventBody = JSON.stringify(body.description);
  
  return fetchRequest ('/new', {
    method: "POST",
    headers : {'Content-Type' : 'application/json',},
    body: eventBody
  })
}

// PUT
function updateDescriptionVote (id, dir) {
  return fetchRequest(`/update/${id}/${dir}`, {
  method: 'PUT'
  })
}

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then (res => res.status === 204 ? res : res.json ())
}

export default {
    getDescriptionsForCategory,
    newDescription,
    updateDescriptionVote
  }