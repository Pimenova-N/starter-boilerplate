import React, { lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './product-list'

const Ecommerce = props => {
	const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/product-list`} />
			<Route path={`${match.url}/product-list`} component={ProductList} />
			<Route path={`${match.url}/categories`} component={lazy(() => import(`./categories`))} />
			<Route path={`${match.url}/collections`} component={lazy(() => import(`./collections`))} />
			<Route path={`${match.url}/combo`} component={lazy(() => import(`./combo`))} />
		</Switch>
	)
}

export default Ecommerce

