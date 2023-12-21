import React from 'react';
// ** React Imports
import { Fragment } from "react"


// ** import Route Pages
import routes from './allRoutes';

// ** Layouts
import VerticalLayout from '../../layout/VerticalLayout';
import BlankLayout from '../../layout/BlankLayout/index'

// ** hooks
import { isObjEmpty } from "../../utils"

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />
}

// ** Merge Routes
const Routes = [...routes]

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta }
    } else {
      return {}
    }
  }
}

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = []

  if (Routes) {
    Routes.filter((route, index) => {
      let isBlank = false
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {


        if (route.element) {

          route.element = (
            <Fragment key={index} route={route} {...(isBlank === false ? getRouteMeta(route) : {})}>
              {route.element}
            </Fragment>
          )
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route)
      }
      return LayoutRoutes
    })
  }
  return LayoutRoutes
}

const getRoutes = () => {
  const defaultLayout = "vertical"
  const layouts = ["vertical", "blank"]

  const AllRoutes = []

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes
    })
  })
  return AllRoutes
}

export { Routes, getRoutes }