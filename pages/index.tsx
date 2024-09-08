import React from 'react'
import Company from '../pages/company';
import Button from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';

export default function index() {
  return (
    <div>
      {/* Họ và tên: Nguyễn Minh Thuận
      <Company />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Button>Thêm mới</Button>
            <Button>Xóa</Button>
            <Button>Sửa</Button>
        </div>
        <FontAwesomeIcon icon={faCoffee} /> */}
        <Navbar />
        <Home/>
    </div>
  )
}
