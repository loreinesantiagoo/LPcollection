import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';

const Material = [ MatToolbarModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule ,
            MatButtonModule,
            MatCardModule,
            MatSliderModule,
            MatListModule
            ];

@NgModule({
imports: [ Material ],
    exports: [ Material ]
})

export class MaterialModule {

}
