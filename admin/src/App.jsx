import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { authProvider } from './authProvider';
import Settings from './Settings';
import { defaultTheme } from 'react-admin';

const theme = {
    ...defaultTheme,
    palette: {
        mode: 'light',
    },
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
   <Admin theme={theme} authProvider={authProvider} dataProvider={dataProvider}>
     <Resource name="settings" list={UserList}/>
     <Resource name="users" list={UserList} />
   </Admin>
  );

export default App;