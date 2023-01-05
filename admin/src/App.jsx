import { Admin, Resource, CustomRoutes, Authenticated } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { authProvider } from './authProvider';
import Settings from './settings';
import { defaultTheme } from 'react-admin';
import UserIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const theme = {
    ...defaultTheme,
    palette: {
        mode: 'light',
    },
};

const App = () => (

   <Admin theme={theme} authProvider={authProvider} dataProvider={dataProvider}>
     <Resource name="settings" list={<Authenticated requireAuth><Settings userID="1234" /></Authenticated>} icon={SettingsIcon} options={{ label: 'Настройки' }}/>
     <Resource name="users" list={UserList} icon={UserIcon} options={{ label: 'Пользователи (тест)' }}/>
   </Admin>
);

export default App;