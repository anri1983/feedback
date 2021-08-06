export  async function getTodo () {
    const response = await fetch('https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/data.json');
    const data = await response.json();
    return data;
    
}
export async function getAll() {
    const response = await fetch('https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos.json/');
    const object = await response.json();
    const arr = Object.values(object)
    return arr;
}

export async function add(obj) {
    await fetch('https://andrejfirstproject-default-rtdb.europe-west1.firebasedatabase.app/todos.json/', {
        method: 'POST',
        body: JSON.stringify(obj)
    });
}