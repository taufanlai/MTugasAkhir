import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../Screen/login';
import TaskList from '../Screen/taskList'


const AppNavigator = createStackNavigator({
    Login:    Login,  
    TaskList : TaskList 
    }
  ,
  {
    initialRouteName: "Login",headerMode:"none"
  });

  export default AppNavigator;