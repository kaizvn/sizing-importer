import {withRouter} from 'next/router'
import React from 'react';

import AddProductLayout from '../../components/AddProductLayout';

export default withRouter((props)=> (
  <AddProductLayout title='Import new product' project={props.router.query.project}/>
))
