import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from '../customer/landingPage';
import LoginPage from '../customer/loginPage';
import HomePage from '../customer/HomePage';
import GasesPage from '../customer/GasesPage';
import GasDetailsPage from '../customer/GasDetailsPage';
import CartPage from "../customer/CartPage";
import CheckoutPage from "../customer/CheckoutPage";
import OrderSuccessPage from "../customer/OrderSuccessPage";

const Stack = createNativeStackNavigator();

export default function RootNavigator(){
    return(
<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LandingPage" component={LandingPage}/>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name ="HomePage" component= {HomePage} />
        <Stack.Screen name="GasesPage" component={GasesPage}/>
        <Stack.Screen name='GasDetails' component={GasDetailsPage} />
        <Stack.Screen name="CartPage" component=
        {CartPage} />
        <Stack.Screen name="CheckoutPage"component={CheckoutPage} />
        <Stack.Screen
            name="OrderSuccess"
            component={OrderSuccessPage}
            />
    </Stack.Navigator>
</NavigationContainer>)
}