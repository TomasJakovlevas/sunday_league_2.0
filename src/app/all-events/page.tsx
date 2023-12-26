import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import React from 'react';

const page = () => {
  const pageRoutes = [
    {
      title: 'All events',
      route: '/all-events',
    },
    {
      title: 'Upcoming games',
      route: '/upcoming-games',
    },
    {
      title: 'Groups',
      route: '/groups',
    },
    {
      title: 'My games',
      route: '/my-games',
    },
  ];

  return (
    <Template>
      <MainTemplate menuItems={pageRoutes}>All events</MainTemplate>
    </Template>
  );
};

export default page;