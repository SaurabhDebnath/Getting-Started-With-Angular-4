
import { RouterModule  }    		  from '@angular/router';

import { UsersComponent }    		  from './users.component';

export const usersRouting = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
]);