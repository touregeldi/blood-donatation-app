import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlightComponent } from 'react-native'

import * as theme from '../theme'

export default class Typography extends Component {

    
    render() {
        const {
            color, 
            h1,
            h2,
            h3,
            body,
            title,
            caption,
            small,
            size,
            bold,
            semibold,
            light,
            center,
            right,
            style,
            children, 
            ...props 
        } = this.props
        
        const textStyles = [
            styles.text, 
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            body && styles.body,
            title && styles.title,
            caption && styles.caption,
            small && styles.small,
            size && { fontSize: size},
            bold && styles.bold,
            semibold && styles.semibold,
            light && styles.light,
            center && styles.center,
            right && styles.right,
            color && styles[color],
            color && !styles[color] && { color: color },
            style
        ]
        
        
        
        
        return (
            <Text style={textStyles}{...props}>{children}</Text>

        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: theme.sizes.font,
        color: theme.colors.black,
    },
    bold:{
        fontWeight:'bold',
    },
    semibold:{
        fontWeight:"500",
    },
    light:{
        fontWeight:"200",
    },
    center:{textAlign:'center'},
    right:{textAlign:'right'},
    accent: { color:theme.colors.accent},
    primary: { color:theme.colors.primary},
    secondary: { color:theme.colors.secondary},
    tertiary: { color:theme.colors.tertiary},
    black: { color:theme.colors.black},
    white: { color:theme.colors.white},
    gray: { color:theme.colors.gray},
    gray2: { color:theme.colors.gray2},

    h1:theme.fonts.h1,
    h2:theme.fonts.h2,
    h3:theme.fonts.h3,
    body:theme.fonts.body,
    title:theme.fonts.title,
    caption:theme.fonts.caption,
    small:theme.fonts.small,
})
