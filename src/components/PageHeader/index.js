import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-primitives'
import {design} from '@a7/vgm-constant'
import {CaretLeftIcon} from '@a7/icons'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 5 * unit,
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: unit,
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: unit,
  },
  name: {
    fontFamily: 'SF Pro Display',
    fontWeight: '200',
    fontSize: 2.75 * unit,
    letterSpacing: 0.1 * unit,
    color: colors.white.base,
  },
})

export class PageHeader extends Component {
  static defaultProps = {
    name: 'default page',
    Icon: CaretLeftIcon,
  }
  render() {
    const {name, Icon} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <Icon size={icon.sm} color={colors.white.base} />
        </View>
        <View style={styles.nameBox}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
        </View>
      </View>
    )
  }
}

export default PageHeader
