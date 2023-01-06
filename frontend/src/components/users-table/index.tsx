import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

import { RoleDto, UserDto } from '../../generated/api';
import api from '../../utils/api';
import styles from './index.module.scss';

const UserTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [data, setData] = useState<any>([]);
  const searchInput = useRef<InputRef>(null);
  useEffect(() => {
    const fetcher = async () => {
      const response = await api.auth.getDataGet();

      setData(response.data);
    };
    fetcher();
  }, []);

  type DataIndex = keyof UserDto;

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

  const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
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

  const columns: ColumnsType<any> = [
    {
      title: 'Firstname',
      dataIndex: 'firstName',
      key: 'firstName',
      width: '30%',
      ...getColumnSearchProps('firstname'),
      sorter: (a, b) => a.firstname.length - b.firstname.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Lastname',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '30%',
      ...getColumnSearchProps('lastname'),
    },
    {
      title: 'Role',
      dataIndex: 'password',
      key: 'password',
      width: '20%',
      // sorter: (a, b) => a.role.length - b.role.length,
      // sortDirections: ['descend', 'ascend'],
    },
    // {
    //   title: 'Register Date',
    //   dataIndex: 'register_date',
    //   key: 'register_date',
    //   sorter: (a, b) => a.register_date.length - b.register_date.length,
    //   sortDirections: ['descend', 'ascend'],
    // },
  ];

  return <Table className={styles.tableStyle} size="large" columns={columns} dataSource={data} />;
};

export default UserTable;
