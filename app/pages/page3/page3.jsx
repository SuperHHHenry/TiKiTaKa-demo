import { useRoutes, useNavigate } from 'react-router-dom';
import HeaderContainer from '@widgets/header-container-react/HeaderContainer';
import { Button } from 'antd';
import { SettingOutlined, DownOutlined } from 'antd-design-icons';
import { useSchema } from './hooks/useSchema';
import $curl from '@common/curl-react';
import Test from '@widgets-self/test.jsx';

export default function Page3({ routes }) {
  const [testCount, setTestCount] = useState(0);
  let allRoutes = null;

  const {
    api,
    tableSchema,
    tableConfig,
    searchSchema,
  } = useSchema();
  console.log(tableSchema, 'tableSchema');
  if (routes) {
    allRoutes = useRoutes(routes);
  }
  const navigate = useNavigate();
  useEffect(() => {
    $curl({
      url: '/api/project/model_list',
      method: "get",
      errorMessage: "获取项目列表失败",
    });
  }, []);

  return (
    <>
      <HeaderContainer />
      <SettingOutlined />
      2222ww33333333333222
      <Test />
      <Button onClick={() => {
        navigate('/view/page3/test');
      }}>
        test
      </Button>
      <Button onClick={() => {
        setTestCount(testCount + 1);
      }}>
        {testCount}
      </Button>
      <h1>react</h1>
      {routes && allRoutes}
    </>
  );
}