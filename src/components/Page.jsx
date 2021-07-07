import React from 'react';
import Nav from './Nav';
import Contents from './Contents';
import Sidenav from './Sidenav';
import View from './react/View';

export default function Page({ children, selectedNavIndex = 0, selectedSection }) {
  const toggleDark = React.useCallback(() => {
    if (document.body.className.indexOf('theme-dark') > -1) {
        document.body.className = 'theme-system';
    } else {
      document.body.className = 'theme-system theme-dark';
    }
  }, [])

  return (
    <View>
      <View as="main" className="d-flex fd-column" style={{ maxHeight: '100vh' }}>
        <Nav handleDarkMode={toggleDark} selectedIndex={selectedNavIndex} />
        <View className="d-flex fl-grow1 fs-body3 mx-auto py24 wmx12 w100">
          <View
            className="
              flex--item
              fl-shrink0
              overflow-y-scroll
              overflow-x-hidden
              bg-white
              mbn24
              mtn24
              z-nav
              py12
              fs-body1
              ws2
              px8
              sm:w100
            "
          >
              <Sidenav selected={selectedSection} />
          </View>
          <View as="main" className="fl-grow1 ps-relative pl48 md:pl24 sm:pl16 sm:pr16">{children}</View>
          <View className="fl-shrink0 ml32 sm:d-none print:d-none">
            <Contents />
          </View>
        </View>
      </View>
    </View>
  )
}
