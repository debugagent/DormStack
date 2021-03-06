// * DormStack *
//Created by Joel Austin
//2018 Pitt Mobile App Challenge
//https://github.com/Jta26/DormStack

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import { StackNavigator} from 'react-navigation';
import firebase from 'firebase';
import QRCodeScanner from 'react-native-qrcode-scanner';


//Custom Views
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import CreateDormView from './views/CreateDormView';
import DormStackView from './views/DormStackView';
import DormView from './views/DormView';
import DormStackSettingsView from './views/DormStackSettingsView';
import AddDormImageView from './views/AddDormImageView'
import CreateEventView from './views/CreateEventView';
import EditMoTDView from './views/EditMoTDView';
import ImageView from './views/ImageView';
import MemberListView from './views/MemberListView';
import QRScanView from './views/QRScanView';
import QRCodeView from './views/QRCodeView';



firebase.initializeApp({
  apiKey: "AIzaSyAbVD9D_R1y1MVwuvXDETRAQs7VucmiCiA",
  authDomain: "club-stack.firebaseapp.com",
  databaseURL: "https://club-stack.firebaseio.com",
  projectId: "club-stack",
  storageBucket: "club-stack.appspot.com",
  messagingSenderId: "294725688831"
});
console.disableYellowBox = true;

const App = StackNavigator({
  Login: { 
    screen: LoginView,
    navigationOptions: {
      header: null
    } 
  },
  Register: { 
    screen: RegisterView,
  },
  CreateDorm: {
    screen: CreateDormView,
  },
  DormStack: {
    screen: DormStackView,
    navigationOptions: {
       header: null
    }
  },
  Dorm: {
    screen: DormView,
  },
  QRScan: {
    screen: QRScanView,
  },
  Image: {
    screen: ImageView,
  },
  AddImage: {
    screen: AddDormImageView,
  },
  CreateEvent: {
    screen: CreateEventView,
  },
  MemberList: {
    screen: MemberListView,
  },
  EditMotD: {
    screen: EditMoTDView
  },
  DormStackSettings: {
    screen: DormStackSettingsView,
  },
  QRCode: {
    screen: QRCodeView
  }

});

export default App
