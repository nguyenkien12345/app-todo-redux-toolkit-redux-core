import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { searchTodoListSelector } from '../../redux/selectors';
import Todo from '../Todo/index';
import todoListReducer from '../../redux/reducer/todoListReducer'; // Này chính là redux toolkit (nên đặt tên lại là todoListSlice)

export default function TodoList() {

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const dispatch = useDispatch();

  const todoList = useSelector(searchTodoListSelector);

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleChangePriority = (value) => {
    setPriority(value);
  }

  const handleAdd = () => {
    const todo = {
      id: uuidv4(),
      name: name,
      priority: priority,
      completed: false
    };
    // Đối với redux-core
    // dispatch(addTodo(todo));

    // Đối với redux-toolkit
    dispatch(todoListReducer.actions.addTodo(todo));
    setName('');
    setPriority('Medium');
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList?.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} id={todo.id} />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={handleChangeName} />

          <Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
