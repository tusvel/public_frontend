import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    document.body.className = theme;
    dispatch(userActions.initAuthData());
  }, [theme, dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">{inited && <AppRouter />}</div>
      </div>
    </div>
  );
};

export default App;
