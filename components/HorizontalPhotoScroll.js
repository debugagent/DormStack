import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';


const { width } = Dimensions.get('window');

export default class HorizontalPhotoScroll extends Component {

    state = {images: []}

    //props array of image URLS
    componentDidMount() {
        //Sets Initial State of ScrollView
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1);
        //Firebase Storage Object
        var Dorm = this.props.Dorm;
        var User = this.props.User;
        var storage = firebase.storage();
        var database = firebase.database();
        database.ref('school/' + User.school + '/' + Dorm.key + '/images').once('value').then(snapshot => {
          snapshot.forEach(child => {
              storage.ref(child.val().url).getDownloadURL().then(url => {
                var arrImages = this.state.images.slice();
                arrImages.push(url);
                this.setState({images: arrImages});
              });
          });
      });
    }

    render() {
        return (
          <ScrollView 
            ref={(scrollView) => { this.scrollView = scrollView; }}
            style={styles.container}
            //pagingEnabled={true}
            horizontal= {true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={"center"}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}>
           {this.state.images.map(url => {
               return <Image style={styles.image} source={{uri: url}}/>
           })}

          </ScrollView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        borderTopColor: '#000000',
        borderTopWidth: 3,
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
      },
      image: {
        width: width - 300,  
        height: width - 300,
       
        
        //paddingHorizontal : 30
      },
    });
