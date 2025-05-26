import { useRoutes } from 'react-router-dom';
import { getRoutesData } from './getRoutesData';

const Router = () => useRoutes(getRoutesData);

export default Router;
