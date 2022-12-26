import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

import styles from './index.module.scss';
interface DataType {
  key: string;
  firstname: string;
  lastname: string;
  role: string;
  register_date: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    firstname: 'Andrei',
    lastname: 'Test1',
    role: 'ADMIN',
    register_date: '2021-12-22 18:49:03.579497',
  },
  {
    key: '2',
    firstname: 'Boris',
    lastname: 'Test2',
    role: 'ADMIN',
    register_date: '2022-12-22 18:49:03.579497',
  },
  {
    key: '3',
    firstname: 'Carina',
    lastname: 'Test3',
    role: 'USER',
    register_date: '2023-12-22 18:49:03.579497',
  },
  {
    key: '4',
    firstname: 'Darius',
    lastname: 'Test4',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '5',
    firstname: 'Elena',
    lastname: 'Test5',
    role: 'USER',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '6',
    firstname: 'Flavia',
    lastname: 'Test6',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '7',
    firstname: 'Gabriel',
    lastname: 'Test7',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '8',
    firstname: 'Hanita',
    lastname: 'Test8',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '9',
    firstname: 'Iulia',
    lastname: 'Test9',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '10',
    firstname: 'Julia',
    lastname: 'Test10',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
  {
    key: '11',
    firstname: 'Katarina',
    lastname: 'Test11',
    role: 'SUPERADMIN',
    register_date: '2024-12-22 18:49:03.579497',
  },
];

const UserTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Firstname',
      dataIndex: 'firstname',
      key: 'firstname',
      width: '30%',
      ...getColumnSearchProps('firstname'),
      sorter: (a, b) => a.firstname.length - b.firstname.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key: 'lastname',
      width: '30%',
      ...getColumnSearchProps('lastname'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '20%',
      sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Register Date',
      dataIndex: 'register_date',
      key: 'register_date',
      sorter: (a, b) => a.register_date.length - b.register_date.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return <Table className={styles.tableStyle} size="large" columns={columns} dataSource={data} />;
};

export default UserTable;
