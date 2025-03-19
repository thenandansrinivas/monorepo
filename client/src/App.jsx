import {  Flex , Typography} from 'antd'

const {Title} = Typography

const App = () => {
  return <div className='h-screen w-full '>
    <Flex align='center' justify='center'>
      <Title className='font-semibold text-3xl' >Payment Gateway</Title>
    </Flex>
  </div>;
};
export default App;
