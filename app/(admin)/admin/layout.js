import React from 'react'
import { notFound } from 'next/navigation';
import { getAdmin } from '@/actions/admin'
import Header from '@/components/header';

const AdminLayout = async () => {

  const admin = await getAdmin();

  if(!admin.authorized){
    return notFound();
  }

  return (
    <div className='h-full'>
      <Header isAdminPage={true} />
    </div>
  )
}

export default AdminLayout