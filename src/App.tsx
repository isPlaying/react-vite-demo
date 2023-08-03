import { RouteObject, useRoutes } from 'react-router-dom';
import styles from './index.module.less';
import bg from '@/assets/bg.png';
const ROUTER_CONFIG: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <h1 className={styles.title}>Home</h1>
        <input placeholder="请输入" />
        <br />
        <img src={bg} alt="" />
      </>
    ),
  },
  {
    path: '/about',
    element: <h1>About</h1>,
  },
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
];
const App = () => {
  return useRoutes(ROUTER_CONFIG);
};
export default App;
