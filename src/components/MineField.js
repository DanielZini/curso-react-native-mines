import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {

            // map esta transformando os dados do objeto column em componentes com os mesmos parâmetros
            return <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} onSelect={e => props.onSelectField(r, c)} />
        })
        
        // map esta encapsulando cada componente Field em uma View
        return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
    })

    // Encapsula cada linha dentro de uma View
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor: '#EEEEEE'
    }
})