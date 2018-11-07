import React, {Component} from 'react'
import {View, StyleSheet} from 'react-primitives'
import {
  ColorIcon,
  HomeIcon,
  MusicIcon,
  SearchIcon,
  VideoIcon,
  UserIcon,
} from '@vgm/icons'
import {design} from '@vgm/design-specs'

const {
  size: {unit},
} = design

export class BottomNavigation extends Component {
  static defaultProps = {
    onChange: () => {},
  }

  initialState = {
    activePage: 'home',
  }
  state = this.initialState

  switch = pageName => {
    this.setState(
      () => ({activePage: pageName}),
      this.props.onChange(this.state.activePage),
    )
  }

  renderPages() {
    const {activePage} = this.state
    const pages = [
      {page: HomeIcon, name: 'home'},
      {page: MusicIcon, name: 'music'},
      {page: SearchIcon, name: 'search'},
      {page: VideoIcon, name: 'video'},
      {page: UserIcon, name: 'user'},
    ]
    const Pages = pages.map(page => (
      <ColorIcon
        active={activePage === page.name}
        name={page.name}
        key={page.name}
        Icon={page.page}
        style={styles.segment}
        onSwitch={this.switch}
      />
    ))
    return Pages
  }
  render() {
    return (
      <View {...this.props} style={{width: '100%', ...this.props.style}}>
        <View style={styles.container}>{this.renderPages()}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 2 * unit,
    paddingRight: 2 * unit,
    height: 4.25 * unit,
    borderTopWidth: 0.0625 * unit,
    borderTopColor: 'rgba(255, 128, 0, 0.8)',
    overflow: 'hidden',
  },
  segment: {
    paddingLeft: 2.625 * unit,
    paddingRight: 2.625 * unit,
    marginTop: 0.625 * unit,
  },
})

export default BottomNavigation
