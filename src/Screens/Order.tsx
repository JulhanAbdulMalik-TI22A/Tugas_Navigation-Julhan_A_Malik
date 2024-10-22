import { useLinkProps } from '@react-navigation/native';
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

type OrderProps = { navigation: NativeStackNavigationProp<StackParamList, 'Order'> };


const Order: React.FC<OrderProps> = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/img/arrow-left.png')}
                            style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#2F2D2C', fontWeight: 600, textAlign: 'center', marginHorizontal: 'auto' }}>Order</Text>
                </View>
                <View style={styles.optionOrder}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#C67C4E',
                            padding: 10,
                            width: 160,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            fontWeight: 500,
                            textAlign: 'center'
                        }}>
                            Deliver
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F2F2F2',
                            padding: 10,
                            width: 160,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                        }}>
                        <Text style={{
                            color: '#2F2D2C',
                            fontSize: 17,
                            fontWeight: 500,
                            textAlign: 'center'
                        }}>
                            Pick Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        color: '#2F2D2C',
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginVertical: 10
                    }}>
                    Delivery Address
                </Text>
                <Text style={{
                    color: '#2F2D2C',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 5
                }}>
                    Jl. Gangnam
                </Text>
                <Text style={{
                    color: '#808080',
                    fontWeight: 400,
                    fontSize: 16,
                    marginBottom: 10
                }}>
                    Kpg. Gangnam No. 620, Seoul, South Korea
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 2,
                            borderColor: '#DEDEDE',
                            borderRadius: 20,
                            padding: 10,
                            flexDirection: 'row',
                            width: 150,
                            justifyContent: 'center',
                            marginEnd: 10
                        }}>
                        <Image source={require('../assets/img/edit.png')}
                            style={{ width: 20, height: 20 }} />
                        <Text style={{
                            color: '#303336',
                            marginHorizontal: 10
                        }}>
                            Edit Address
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 2,
                        borderColor: '#DEDEDE',
                        borderRadius: 20,
                        padding: 10,
                        flexDirection: 'row',
                        width: 150,
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/img/note.png')}
                            style={{ width: 20, height: 20 }} />
                        <Text style={{
                            color: '#303336',
                            marginHorizontal: 10
                        }}>
                            Add Note
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: 'auto',
                    height: 1,
                    marginTop: 20,
                    marginEnd: 10
                }}></View>
                <View style={styles.discount}>
                    <Image source={require('../assets/img/Discount.png')}
                        style={{ width: 24, height: 24 }} />
                    <Text style={{
                        fontWeight: 600,
                        fontSize: 15,
                        marginStart: -70,
                        textAlign: 'center',
                        color: '#2F2D2C'
                    }}>
                        1 Discount is Applied
                    </Text>
                    <Image source={require('../assets/img/arrow-right.png')}
                        style={{ width: 24, height: 24 }} />
                </View>
                <Text style={{
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#2F2D2C',
                    marginBottom: 10
                }}>
                    Payment Summary
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 5
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#2F2D2C'
                    }}>
                        Price
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#2F2D2C'
                    }}>
                        $ 4.53
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 5
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#2F2D2C'
                    }}>
                        Delivery Free
                    </Text>
                    <View><Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#2F2D2C',
                        textDecorationLine: 'line-through',
                        marginStart: 160
                    }}>
                        $ 2.0</Text></View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#2F2D2C'
                    }}>
                        $ 1.0</Text>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: 'auto',
                    height: 1,
                    marginTop: 20,
                    marginEnd: 10
                }}></View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 5,
                    marginVertical: 10
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#2F2D2C'
                    }}>
                        Total Payment
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#2F2D2C',
                        textDecorationLine: 'line-through',
                        marginStart: 160
                    }}>
                        $ 5.53</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    justifyContent: 'space-between'
                }}>
                    <Image source={require('../assets/img/moneys.png')}
                        style={{ width: 24, height: 24 }} />
                    <View style={{ backgroundColor: '#F6F6F6', borderRadius: 15, width: 150, flexDirection: 'row', alignItems: 'center', marginEnd: 80 }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#C67C4E',
                                padding: 2,
                                borderRadius: 5,
                                width: 75,
                                height: 25
                            }}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 14
                            }}>
                                Cash
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#F2F2F2',
                                padding: 2,
                                borderRadius: 5,
                                width: 75,
                                height: 25,
                                marginStart: 10,
                            }}>
                            <Text style={{
                                color: '#2F2D2C',
                                textAlign: 'center',
                                fontSize: 14
                            }}>
                                $ 5.53
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../assets/img/dots.png')}
                        style={{ width: 24, height: 24 }} />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#C67C4E',
                        borderRadius: 10,
                        width: 'auto',
                        height: 50,
                        marginVertical: 10,
                        padding: 5,
                        justifyContent: 'center',
                        marginBottom: 60,
                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 15,
                    }}>
                        Order
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Order;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 'auto',
        marginBottom: 15,
    },
    optionOrder: {
        width: 'auto',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    discount: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#EAEAEA',
        padding: 15,
        marginVertical: 15,
        borderRadius: 20,
        width: 320,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
})