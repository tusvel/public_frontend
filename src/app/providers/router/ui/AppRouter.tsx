import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/RouteConfig';

export const AppRouter = () => (
  <Suspense fallback={'...Loading'}>
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => (
        <Route key={path} path={path} element={element}/>
      ))}
    </Routes>
  </Suspense>
);
