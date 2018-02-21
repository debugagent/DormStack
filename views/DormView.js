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
    TouchableOpacity
  } from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

import HorizontalPhotoScroll from '../components/HorizontalPhotoScroll';
import Title from '../components/Title';
import Motd from '../components/Motd';

export default class DormView extends Component {
    //Goals for this class
    //1. Verify whether or not the User is a member of this Dorm
    //2. If they are, display the Dorm information in the form of other react components; I.E. Events; PictureSlider; MoTD; Title;
    //3. If they are not display information of the User that is Role 0 (The Resident Advisor);
    //4. The Non Verified page will display a button to join, which will forward them to another View with the Dorm and User Object as a prop.

    state = {
        Dorm: this.props.navigation.state.params.Dorm,
        User: this.props.navigation.state.params.User
    }


    componentWillMount() {
        

    }

    CheckMembership = (User, Dorm) => {
        Dorm.members.forEach(element => {
            if (User.uid == Dorm.dormId) {
                return true
            }
        });
        return false;
    }

    onMembershipValidate = (isValidated) => {
        if (isValidated) {
            this.props.navigation.navigate('Dorm');
        }
        else {
            this.props.navigation.navigate('DormPreview');
        }
    }

    render() {
        //View Design
        //Title
        //ImgScroller
        //MoTD
        //EventsScroller
        //Options
       
        return(
            <View style={styles.container}>
                <Title
                    title={this.state.Dorm.name}
                />
                <HorizontalPhotoScroll
                    Dorm={this.state.Dorm}
                    User={this.state.User}
                />
                <Motd
                   
                    motd={this.state.Dorm.desc}
                />
                <View style={{justifyContent: 'center',
        alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddImage', {Dorm: this.state.Dorm, User: this.state.User})}>
                        <Text style={styles.text}>Add Image</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor: '#ffffff',
        
    },
    motd: {
        borderColor: '#000000',
        borderWidth: 3
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000000',
        padding: 20,
        height: 35,
        width: 200,
    },
    text: {
        color: '#000000',
        textShadowRadius: 2,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'fjallaone',
        width: 150
    }
});