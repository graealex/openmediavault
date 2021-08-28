/* eslint-disable max-len */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DatatablePageComponent } from '~/app/core/components/intuition/datatable-page/datatable-page.component';
import { FormButtonComponent } from '~/app/core/components/intuition/form/components/form-button/form-button.component';
import { FormCheckboxComponent } from '~/app/core/components/intuition/form/components/form-checkbox/form-checkbox.component';
import { FormDatatableComponent } from '~/app/core/components/intuition/form/components/form-datatable/form-datatable.component';
import { FormDatepickerComponent } from '~/app/core/components/intuition/form/components/form-datepicker/form-datepicker.component';
import { FormDividerComponent } from '~/app/core/components/intuition/form/components/form-divider/form-divider.component';
import { FormFileInputComponent } from '~/app/core/components/intuition/form/components/form-file-input/form-file-input.component';
import { FormFolderbrowserComponent } from '~/app/core/components/intuition/form/components/form-folderbrowser/form-folderbrowser.component';
import { FormIconButtonComponent } from '~/app/core/components/intuition/form/components/form-icon-button/form-icon-button.component';
import { FormNumberInputComponent } from '~/app/core/components/intuition/form/components/form-number-input/form-number-input.component';
import { FormParagraphComponent } from '~/app/core/components/intuition/form/components/form-paragraph/form-paragraph.component';
import { FormPasswordInputComponent } from '~/app/core/components/intuition/form/components/form-password-input/form-password-input.component';
import { FormSelectComponent } from '~/app/core/components/intuition/form/components/form-select/form-select.component';
import { FormSharedfolderSelectComponent } from '~/app/core/components/intuition/form/components/form-sharedfolder-select/form-sharedfolder-select.component';
import { FormSliderComponent } from '~/app/core/components/intuition/form/components/form-slider/form-slider.component';
import { FormSshcertSelectComponent } from '~/app/core/components/intuition/form/components/form-sshcert-select/form-sshcert-select.component';
import { FormSslcertSelectComponent } from '~/app/core/components/intuition/form/components/form-sslcert-select/form-sslcert-select.component';
import { FormTextInputComponent } from '~/app/core/components/intuition/form/components/form-text-input/form-text-input.component';
import { FormTextareaComponent } from '~/app/core/components/intuition/form/components/form-textarea/form-textarea.component';
import { FormComponent } from '~/app/core/components/intuition/form/form.component';
import { FormDialogComponent } from '~/app/core/components/intuition/form-dialog/form-dialog.component';
import { FormPageComponent } from '~/app/core/components/intuition/form-page/form-page.component';
import { RrdPageComponent } from '~/app/core/components/intuition/rrd-page/rrd-page.component';
import { SelectionListPageComponent } from '~/app/core/components/intuition/selection-list-page/selection-list-page.component';
import { TabsPageComponent } from '~/app/core/components/intuition/tabs-page/tabs-page.component';
import { TextPageComponent } from '~/app/core/components/intuition/text-page/text-page.component';
import { MaterialModule } from '~/app/material.module';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  declarations: [
    FormComponent,
    FormDialogComponent,
    FormPageComponent,
    FormCheckboxComponent,
    FormNumberInputComponent,
    FormTextInputComponent,
    FormButtonComponent,
    FormIconButtonComponent,
    FormPasswordInputComponent,
    FormTextareaComponent,
    FormSelectComponent,
    FormSharedfolderSelectComponent,
    FormDividerComponent,
    DatatablePageComponent,
    FormDatepickerComponent,
    FormDatatableComponent,
    FormParagraphComponent,
    FormSliderComponent,
    TextPageComponent,
    FormSshcertSelectComponent,
    FormSslcertSelectComponent,
    TabsPageComponent,
    FormFolderbrowserComponent,
    FormFileInputComponent,
    SelectionListPageComponent,
    RrdPageComponent
  ],
  exports: [
    DatatablePageComponent,
    FormDialogComponent,
    FormPageComponent,
    TabsPageComponent,
    TextPageComponent,
    SelectionListPageComponent,
    RrdPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    RouterModule
  ]
})
export class IntuitionModule {}
