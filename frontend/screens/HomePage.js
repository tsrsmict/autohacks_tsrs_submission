import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


export default function HomePage()  {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.heading}>Home</Text>
            <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      margin: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 35,
        fontWeight: "bold",
    },
    circleContainer: {
       justifyContent: 'center'
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#000', 
        margin: 'auto',
    }
});