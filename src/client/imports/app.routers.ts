/**
 * Created by ArunKumar on 04-04-2017.
 */
/**
 * Legal Notice! DB Systel GmbH proprietary License!
 *
 * Copyright (C) 2016 DB Systel GmbH
 * DB Systel GmbH; Juergen-Ponto-Platz 1; D-60329 Frankfurt am Main; Germany;
 * http://www.dbsystel.de/
 *
 * This code is protected by copyright law and is the exclusive property of
 * DB Systel GmbH; Juergen-Ponto-Platz 1; D-60329 Frankfurt am Main; Germany;
 * http://www.dbsystel.de/
 *
 * Consent to use ("licence") shall be granted solely on the basis of a
 * written licence agreement signed by the customer and DB Systel GmbH. Any
 * other use, in particular copying, redistribution, publication or
 * modification of this code without written permission of DB Systel GmbH is
 * expressly prohibited.
 *
 * In the event of any permitted copying, redistribution or publication of
 * this code, no changes in or deletion of author attribution, trademark
 * legend or copyright notice shall be made.
 */

// Angular 2 imports
import { Route } from '@angular/router';

// Quizduell app classes
import { Home } from './home/home';
import { Info } from './info/info';

/* The Router exports an array of routes
 * containing paths, matching components and optional redirect and permission information.
 */
export const Routers: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'info', component: Info}
];