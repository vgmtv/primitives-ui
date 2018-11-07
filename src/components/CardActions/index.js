import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {design} from '@vgm/design-specs'
import {ShareDesktopIcon, PlaylistAddIcon, MoreIcon} from '@vgm/icons'

const {
  size: {unit, icon},
  colors,
} = design

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: unit,
    width: '100%',
    minHeight: 4 * unit,
    backgroundColor: colors.black.alt,
  },
  leftContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export class CardActions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
            <ShareDesktopIcon size={icon.ms} />
            <PlaylistAddIcon size={icon.ms} />
        </View>
        <View style={styles.rightContainer}>
            <MoreIcon size={icon.ms} />
        </View>
      </View>
    )
  }
}

export default CardActions
