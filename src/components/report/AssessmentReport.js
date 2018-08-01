import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import ReportHeader from './ReportHeader';
import AssesmentSummaryLayout from './AssesmentSummaryLayout';
import RecommendationPanel from './RecommendationPanel';
import ExpertsPanel from './ExpertsPanel';
export default class AssessmentReport extends React.Component {


    render() {
        return (

            <View style={styles.container}>
                <ReportHeader />
                <ScrollView style={styles.container}>
                    <AssesmentSummaryLayout />
                    <RecommendationPanel />
                    <ExpertsPanel />

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd52'
    }
})
