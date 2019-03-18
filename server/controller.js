// Controller here

const todoList = ['one', 'two', 'three'];

const controller = {
    get: (req, res) => {
        res.status(200).send(todoList);
    },
    post: (req, res) => {
        // res.send('hello from post');
        const { todo } = req.body; // const todo = req.body.todo
        todoList.push(todo);
        res.status(201).send(todoList);
    },
    delete: (req, res) => {
        // res.send('hello from delete');
        const { index } = req.query; // const index = req.query.index
        todoList.splice(index, 1);
        res.status(202).send(todoList);
    }
}

module.exports = controller;