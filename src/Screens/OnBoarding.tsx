import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './routers';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type OnBoardingProps = NativeStackScreenProps<StackParamList, 'OnBoarding'>;

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <Image
                    source={require('../assets/img/background-page.jpg')}>
                </Image>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 38,
                        textAlign: 'center',
                        marginBottom: 10,
                        fontWeight: '600'
                        // fontFamily: 'Sora-Regular',
                    }}
                >
                    Coffee so good, your taste buds will love it.</Text>
                <Text
                    style={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: 17,
                        textAlign: 'center',
                        fontWeight: '400',
                        marginBottom: 40,
                    }}
                >
                    The best grain, the finest roast, the powerful flavor.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: '500',
                            fontSize: 15,
                        }}
                    >
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'black',
    },

    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#C67C4E',
        padding: 5,
        borderRadius: 5,
        width: 295,
        height: 50,
        top: -20,
        justifyContent: 'center',
        marginBottom: 60,
    }
})