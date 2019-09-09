import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../Screen/login';
import TaskList from '../Screen/taskList';
import Detail from '../Screen/detail';


const AppNavigator = createStackNavigator({
    Login:    Login,  
    TaskList : TaskList,
    Detail : Detail
    }
  ,
  {
    initialRouteName: "Login",headerMode:"none"
  });

  export default AppNavigator;