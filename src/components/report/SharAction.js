import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentQuestion: state.Assessment.currentQuestion
})

class ShareAction extends React.Component {
    constructor() {
        super();
        this.state = {
            iconColor: '#ffffff'
        }
    }

    iconClickHandler = () => {
        this.setState({
            iconColor: this.state.iconColor === '#ffffff' ? '#ff0000' : '#ffffff'
        })
    }
    render() {
        return (
                <View style={styles.optionsBody}>
                    <TouchableOpacity onPress={this.iconClickHandler}>
                        <Text>
                            <Icon name="share-alt" size={23} style={{color:'black',marginRight:15}} />
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

export default connect(mapStateToProps)(ShareAction)

const styles = StyleSheet.create({
    optionsBody: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height:30,
        marginRight:10
    },
    likeText: {
        color: '#ffffff',
        fontSize: 20,
        marginRight: 5
    }
})
