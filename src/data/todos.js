export  async function getTodo () {
    const response = await fetch('https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/data.json');
    const data = await response.json();
    return data;
    
}
export async function getAll() {
    const response = await fetch('https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos.json/');
    const object = await response.json();
    const arr = Object.entries(object).map((item) => ({uniqueId: item[0], ...item[1]}))
    return arr;
}

export async function getById({uniqueId}) {
    const response = await fetch(`https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos/${uniqueId}.json/`);
    const object = await response.json();
    //const arr = Object.entries(object).map((item) => ({uniqueId: item[0], ...item[1]}))
    return object;
}

export async function add(obj) {
    await fetch('https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos.json/', {
        method: 'POST',
        body: JSON.stringify(obj)
    });
}


export async function update({uniqueId, title}) {
    return fetch(`https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos/${uniqueId}.json/`, {
          method: 'PATCH',
          body: JSON.stringify({title})
      }); 
  }
  
  export  async function remove ({uniqueId}) {
     return fetch(`https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos/${uniqueId}.json/`, {
      method: 'DELETE'
  });
      
  }
  