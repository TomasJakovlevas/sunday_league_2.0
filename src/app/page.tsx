import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';

export default function Home() {
  const pageRoutes = [
    {
      title: 'Home',
      route: '/',
    },
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
      <MainTemplate menuItems={pageRoutes}>va</MainTemplate>
    </Template>
  );
}
