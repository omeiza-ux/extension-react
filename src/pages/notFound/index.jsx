import React from 'react';
import MainTextArea1 from './components/MainTextArea1';
import AppLayout from '../../components/layout/AppLayout';
import { Link } from 'react-router-dom';

function notFound () {
  return (
    <AppLayout>
      <main style={{ width: '100%' }}>
        <MainTextArea1 />
        <div style={{ marginTop: '1rem' }}>
        <Link to='/'>Home Page</Link>
          </div>
      </main>
    </AppLayout>
  );
}

export default notFound;