import fs from 'fs';
import path from 'path';

export function saveTodo(todo) {
    const dataPath = path.join(process.cwd(), './data.json');
    const todos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  
    // Tambahkan todo baru ke array todos
    todos.push(todo);
  
    // Tulis kembali ke file data.json
    fs.writeFileSync(dataPath, JSON.stringify(todos, null, 2));
}
export function changeTodo(todo,index) {
    const dataPath = path.join(process.cwd(), './data.json');
    const todos = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    let {act,status} = todo;
    todos[index].act = act
    todos[index].status = status

  
    // Tulis kembali ke file data.json
    fs.writeFileSync(dataPath, JSON.stringify(todos, null, 2));
}