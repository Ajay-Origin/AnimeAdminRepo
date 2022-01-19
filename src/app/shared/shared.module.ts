import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/default/header/header.component';
import { FooterComponent } from 'src/app/shared/default/footer/footer.component';
import { InfowidgetComponent } from 'src/app/shared/widgets/infowidget/infowidget.component';
import { MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CatagoriesComponent } from './components/catagories/catagories.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfowidgetComponent,
    CatagoriesComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InfowidgetComponent,
    CatagoriesComponent,
  ]
})
export class SharedModule { }
