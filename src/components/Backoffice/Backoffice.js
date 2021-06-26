// imports from react.
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

// imports screens files.
import ScreenEditOrganization from '../../screens/ScreenBackoffice/ScreenEditOrganization/ScreenEditOrganization';
import ContactsScreenBackoffice from '../../screens/ScreenBackoffice/ContactsScreen/ContactsScreen';
import TestimoniesScreen from "../../screens/ScreenBackoffice/ScreenTestimonies/TestimoniesScreen";
import ScreenCategories from '../../screens/ScreenBackoffice/ScreenCategories/ScreenCategories';
import ActivitiesListScreen from '../../screens/ScreenBackoffice/ScreenActivities/ActivitiesScreen';
import ScreenNewsBackoffice from '../../screens/ScreenBackoffice/ScreenNewsBackoffice';
import AdminMenuBackoffice from './MenuBackoffice/AdminMenuBackoffice';
import UsersScreen from '../../screens/ScreenBackoffice/UsersScreen/UsersScreen';
/* import BackofficeUserEdit from './BackofficeUserList/BackofficeUserEdit'; */
import HomeEditForm from '../FormHomeEdit/HomeEditForm';

// imports services.
import { CardAlertService } from '../../services/AlertService/AlertService';

//import consts.
import { ROLE_ADMIN, ALERT_ERROR, ALERT_TITLE_WRONG_USER } from '../../consts/const';

const Backoffice = () => {
  const { role } = useSelector(state => state.user);
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

/*   if (role === ROLE_ADMIN) {
 */    return (
      <BrowserRouter>
        <AdminMenuBackoffice  onClick={handleClick}/>
        <Switch>
          <Route exact path="/backoffice" component={HomeEditForm} />
          <Route exact path="/backoffice/testimonials" component={TestimoniesScreen} />
          <Route exact path="/backoffice/edit-organization" component={ScreenEditOrganization} />
          <Route exact path='/backoffice/contacts' component={ContactsScreenBackoffice} />
          <Route exact path="/backoffice/activities" component={ActivitiesListScreen} />
          <Route exact path="/backoffice/news" component={ScreenNewsBackoffice} />
          <Route exact path="/backoffice/users" component={UsersScreen} />
          {/* <Route exact path="/backoffice/users/:id" component={BackofficeUserEdit} /> */}
          <Route exact path="/backoffice/categories" component={ScreenCategories} />
        </Switch>
      </BrowserRouter>
    );
/*   } else {
    //en 5 segundos te lleva a la home luego de mostrar el alert
    history.push("/");
    return (
      CardAlertService({
        icon: ALERT_ERROR,
        title: ALERT_TITLE_WRONG_USER
      })
    );
  } */
}

export default Backoffice;
