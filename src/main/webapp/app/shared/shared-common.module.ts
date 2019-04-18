import { NgModule } from '@angular/core';

import { CourseApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CourseApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CourseApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CourseApplicationSharedCommonModule {}
