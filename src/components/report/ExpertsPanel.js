import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { H3 } from 'native-base';
import Sample from './SampleExperts';
export class ExpertsPanel extends Component {
    constructor() {
        super();
        this.state = {

            assessment: {
                physical: {
                    title: 'Anuradha B',
                    remainingTime: '2 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/physical.svg')
                },
                emotional: {
                    title: 'Varsha K',
                    remainingTime: '5 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/emotional.svg')
                },
                
                occupational: {
                    title: 'Chandni H',
                    remainingTime: '83 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/occupational.svg')
                },
                spiritual: {
                    title: 'Apurv Adarsh',
                    remainingTime: '73 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/spiritual.svg')
                },
           
                financial: {
                    title: 'Karthik S M',
                    remainingTime: '25 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/financial.svg')
                },
                environmental: {
                    title: 'Shweta Goyal',
                    remainingTime: '20 days ago',
                    compPercentage: '0%',
                    notification: '',
                    icon: require('../../assests/images/dashboard/environmental.svg')
                }
            }
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1,flexDirection:'row' }}>
                    <Text  style={{ flex: 1,color:'#000000',fontWeight:'bold',fontSize:16 }}>Experts</Text>
                    <Text style={{color:'#28a745',fontSize:16}}>More</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Sample />
                </View>            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 5,
        marginTop: 10
    },
    blocks: {
        flex: 1,
        height: Dimensions.get('window').width / 3,
        padding: 3
    }
});

export default ExpertsPanel