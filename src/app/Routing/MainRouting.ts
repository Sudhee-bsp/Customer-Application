import { HomeComponent } from '../Home/HomeComponent'

export const MainRoutes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Customer', loadChildren: () => import('../Customer/CustomerModule').then(mod => mod.CustoModule)},
    {path: 'Supplier', loadChildren: () => import('../Supplier/SupplierModule').then(mod => mod.SuppModule)},
    {path: '', component: HomeComponent}      //if no url
]; 

