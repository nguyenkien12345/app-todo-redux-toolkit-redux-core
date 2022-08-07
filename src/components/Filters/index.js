import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';
import filtersReducer from '../../redux/reducer/filtersReducer'; // Này chính là redux toolkit (nên đặt tên lại là filtersSlice)

const { Search } = Input;

export default function Filters() {

  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState([]);

  const dispatch = useDispatch();

  const handleChangeSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    // Đối với redux-core
    // dispatch(searchFilterChange(e.target.value));

    // Đối với redux-toolkit
    dispatch(filtersReducer.actions.searchFilterChange(e.target.value));
  }

  const handleChangeStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
    // Đối với redux-core
    // dispatch(statusFilterChange(e.target.value));

    // Đối với redux-toolkit
    dispatch(filtersReducer.actions.statusFilterChange(e.target.value));
  }

  const handleChangePriority = (value) => {
    setPriority(value);
    // Đối với redux-core
    // dispatch(priorityFilterChange(value));

    // Đối với redux-toolkit
    dispatch(filtersReducer.actions.priorityFilterChange(value));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleChangeSearchText} />
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priority}
          onChange={handleChangePriority}
        >
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
      </Col>
    </Row>
  );
}
