import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import * as theme from '../theme';
export default class Block extends Component {

    render() {
        const {
            color,
            flex,
            row,
            column,
            center,
            middle,
            space,
            card,
            shadow,
            style,
            children, 
            ...props
         } = this.props;

        const blockStyles=[
            styles.block, 
            flex && { flex },
            flex === false && {flex: 0},
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            card && styles.card,
            space && {justifyContent:`space-${space}`},
            shadow && styles.shadow,
            color && styles[color],
            color && !styles[color] && { backgroundColor: color },
            style
        ];    

        return (
            <View style={blockStyles} {...props} >
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    block:{
        flex:1,
    },
    row:{
        flexDirection: 'row',
    },
    card:{
        borderRadius: theme.sizes.border,
    },
    column:{
        flexDirection: 'column',
    },
    center:{
        alignItems: 'center',
    },
    middle:{
        justifyContent:'center'
    },
    shadow:{
        shadowColor: theme.colors.black,
        shadowOffset:{width:0, height:4},
        shadowOpacity: 0.1,
        shadowRadius:10,
    },
    accent: { backgroundColor:theme.colors.accent},
    primary: { backgroundColor:theme.colors.primary},
    secondary: { backgroundColor:theme.colors.secondary},
    tertiary: { backgroundColor:theme.colors.tertiary},
    black: { backgroundColor:theme.colors.black},
    white: { backgroundColor:theme.colors.white},
    gray: { backgroundColor:theme.colors.gray},
    gray2: { backgroundColor:theme.colors.gray2},

})
