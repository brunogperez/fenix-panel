import{a as Ft}from"./chunk-L7IEYTCS.js";import{a as Xt,b as Yt,c as Zt,d as w,e as h,f as te,g as ee,h as ie,i as oe,j as q,l as ne,m as re,n as ae}from"./chunk-KWYTEKE5.js";import{a as Wt,b as et}from"./chunk-CK25IJLO.js";import{d as G}from"./chunk-A7RA4PBA.js";import{d as ft}from"./chunk-52GIBL2D.js";import{o as k,u as j}from"./chunk-HNE7D7Y7.js";import{A as zt,B as Ut,C as L,G as Jt,H as Kt,I as Qt,a as Dt,b as Et,e as Mt,f as yt,g as Tt,l as wt,m as $t,n as Rt,o as At,p as Bt,q as Ot,r as Nt,s as kt,t as jt,u as Vt,v as Pt,w as Lt,x as Gt,y as qt,z as Ht}from"./chunk-IIQQG7MX.js";import{Ba as _t,Da as T,Fa as gt,Ga as vt,Ia as xt,Ja as ht,Ka as bt,La as It,Na as St,_ as mt,ca as lt,da as ct,fa as dt,ga as pt,ha as ut,i as N,k as st,m as tt,ta as y,ua as Ct,wa as V,ya as P}from"./chunk-4SWAUFVP.js";import{Db as m,Ga as I,Ha as S,Ib as c,Nb as rt,Rb as o,Sb as n,Tb as f,Ub as C,Vb as _,Xb as D,_b as g,a as it,ac as p,b as ot,e as W,fd as A,gd as B,id as O,kb as s,kc as X,lb as u,lc as r,ma as $,mc as x,md as at,nc as v,oc as Y,wa as b,wc as E,x as F,xa as R,xc as M,y as nt,yc as Z}from"./chunk-PWY5XFB5.js";var ce=W(et());function Ce(t,i){if(t&1&&(o(0,"mat-option",14),r(1),n()),t&2){let e=i.$implicit;c("value",e),s(),v(" ",e," ")}}function _e(t,i){if(t&1&&(o(0,"mat-option",14),r(1),n()),t&2){let e=i.$implicit;c("value",e),s(),v(" ",e," ")}}var H=class t{constructor(i,e,a){this.matDialogRef=i;this.formBuilder=e;this.data=a;this.courseForm=this.formBuilder.group({name:[null,[T.required]],duration:[null,[T.required]],level:[null,[T.required]],description:[null,[T.required]]}),this.patchForm()}courseForm;durations=["2 months","3 months","4 months","5 months"];levels=["Beginner","Intermediate","Advanced"];patchForm(){this.data?.editCourse&&this.courseForm.patchValue(this.data.editCourse)}get isEditing(){return!!this.data?.editCourse}onSave(){this.courseForm.invalid?this.courseForm.markAllAsTouched():(this.matDialogRef.close(ot(it({},this.courseForm.value),{id:this.isEditing?this.data.editCourse.id:Wt(8)})),ce.default.fire("Buen trabajo!",`El curso ha sido ${this.isEditing?"editado":"creado"} exitosamente.`,"success"))}static \u0275fac=function(e){return new(e||t)(u(wt),u(It),u($t))};static \u0275cmp=b({type:t,selectors:[["app-courses-dialog"]],decls:35,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"col-12"],["matInput","","formControlName","name","type","text"],["appFontSize","","fontSize","10px"],["formControlName","duration"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill",1,"col-12"],["formControlName","level"],["matInput","","type","text","formControlName","description"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","",3,"click"],[3,"value"]],template:function(e,a){e&1&&(o(0,"h1",0),r(1),n(),o(2,"div",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),r(6,"Nombre del curso"),n(),f(7,"input",4),o(8,"mat-error",5),r(9,"Este campo es requerido"),n()(),o(10,"mat-form-field",3)(11,"mat-label"),r(12,"Duraci\xF3n"),n(),o(13,"mat-select",6),m(14,Ce,2,2,"mat-option",7),n(),o(15,"mat-error",5),r(16,"Este campo es requerido"),n()(),o(17,"mat-form-field",8)(18,"mat-label"),r(19,"Dificultad"),n(),o(20,"mat-select",9),m(21,_e,2,2,"mat-option",7),n(),o(22,"mat-error",5),r(23,"Este campo es requerido"),n()(),o(24,"mat-form-field",3)(25,"mat-label"),r(26,"Descripci\xF3n"),n(),f(27,"input",10),o(28,"mat-error",5),r(29,"Este campo es requerido"),n()()(),o(30,"div",11)(31,"button",12),r(32,"Cancelar"),n(),o(33,"button",13),g("click",function(){return a.onSave()}),r(34,"Guardar"),n()()()),e&2&&(s(),v(" ",(a.data==null?null:a.data.editCourse)==null?"Crear":"Editar",` curso
`),s(2),c("formGroup",a.courseForm),s(11),c("ngForOf",a.durations),s(7),c("ngForOf",a.levels))},dependencies:[A,xt,_t,gt,vt,ht,bt,y,Mt,Dt,Et,yt,Tt,mt,At,Bt,Nt,Ot,Ft]})};var de=W(et());function Ie(t,i){t&1&&f(0,"mat-spinner",4)}function Se(t,i){t&1&&(o(0,"th",15),r(1,"ID"),n())}function De(t,i){if(t&1&&(o(0,"td",16),r(1),n()),t&2){let e=i.$implicit;s(),x(e.id)}}function Ee(t,i){t&1&&(o(0,"th",15),r(1,"Name"),n())}function Me(t,i){if(t&1&&(o(0,"td",16),r(1),n()),t&2){let e=i.$implicit;s(),x(e.name)}}function ye(t,i){t&1&&(o(0,"th",15),r(1,"Duraci\xF3n"),n())}function Fe(t,i){if(t&1&&(o(0,"td",16),r(1),n()),t&2){let e=i.$implicit;s(),x(e.duration)}}function Te(t,i){t&1&&(o(0,"th",15),r(1,"Dificultad"),n())}function we(t,i){if(t&1&&(o(0,"td",16),r(1),n()),t&2){let e=i.$implicit;s(),v(" ",e.level," ")}}function $e(t,i){t&1&&(o(0,"th",15),r(1,"Actions"),n())}function Re(t,i){if(t&1){let e=D();o(0,"button",17),g("click",function(){I(e);let l=p().$implicit,d=p(2);return S(d.openModal(l))}),o(1,"mat-icon"),r(2,"edit"),n()()}}function Ae(t,i){if(t&1){let e=D();o(0,"button",17),g("click",function(){I(e);let l=p().$implicit,d=p(2);return S(d.onDeleteCourse(l.id))}),o(1,"mat-icon"),r(2,"delete"),n()()}}function Be(t,i){if(t&1){let e=D();o(0,"td",16)(1,"button",17),g("click",function(){let l=I(e).$implicit,d=p(2);return S(d.goToDetail(l.id))}),o(2,"mat-icon"),r(3,"visibility"),n()(),m(4,Re,3,0,"button",18),E(5,"async"),m(6,Ae,3,0,"button",18),E(7,"async"),n()}if(t&2){let e=p(2);s(4),c("ngIf",M(5,2,e.isAdmin$)==!0),s(2),c("ngIf",M(7,4,e.isAdmin$)==!0)}}function Oe(t,i){t&1&&f(0,"tr",19)}function Ne(t,i){t&1&&f(0,"tr",20)}function ke(t,i){if(t&1&&(o(0,"table",5),C(1,6),m(2,Se,2,0,"th",7)(3,De,2,1,"td",8),_(),C(4,9),m(5,Ee,2,0,"th",7)(6,Me,2,1,"td",8),_(),C(7,10),m(8,ye,2,0,"th",7)(9,Fe,2,1,"td",8),_(),C(10,11),m(11,Te,2,0,"th",7)(12,we,2,1,"td",8),_(),C(13,12),m(14,$e,2,0,"th",7)(15,Be,8,6,"td",8),_(),m(16,Oe,1,0,"tr",13)(17,Ne,1,0,"tr",14),n()),t&2){let e=p();c("dataSource",e.courses$),s(16),c("matHeaderRowDef",e.displayedColumns),s(),c("matRowDefColumns",e.displayedColumns)}}var U=class t{constructor(i,e,a,l){this.store=i;this.matDialog=e;this.router=a;this.activatedRoute=l;this.user$=this.store.select(ft),this.isAdmin$=this.user$.pipe(F(d=>d?.role==="admin")),this.inscriptions$=this.store.select(q),this.courses$=this.store.select(ee)}displayedColumns=["id","name","duration","level","actions"];isLoading=!1;user$;isAdmin$;inscriptions$;courses$;ngOnInit(){this.store.dispatch(h.loadCourses()),this.store.dispatch(w.loadInscriptions())}goToDetail(i){this.router.navigate([i,"detail"],{relativeTo:this.activatedRoute})}openModal(i){this.matDialog.open(H,{data:{editCourse:i}}).afterClosed().subscribe({next:e=>{e&&(i?this.store.dispatch(h.updateCourse({id:i.id,update:e})):this.store.dispatch(h.createCourse({course:e})))}})}onDeleteCourse(i){de.default.fire({title:"\xBFEst\xE1s seguro?",text:"No podr\xE1s revertir esta acci\xF3n",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&this.store.dispatch(h.deleteCourse({id:i}))})}static \u0275fac=function(e){return new(e||t)(u(k),u(Rt),u(st),u(N))};static \u0275cmp=b({type:t,selectors:[["app-courses"]],decls:10,vars:1,consts:[[1,"container","p-5"],[1,"p-2","rounded-4","bg-table"],[1,"demo-button-container","m-2"],["mat-flat-button","",3,"click"],[1,"mx-auto","m-5"],["mat-table","",1,"bg-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","duration"],["matColumnDef","level"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",1,"m-1",3,"click"],["mat-icon-button","","class","m-1",3,"click",4,"ngIf"],["mat-header-row",""],["mat-row",""]],template:function(e,a){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),g("click",function(){return a.openModal()}),o(4,"mat-icon"),r(5,"add"),n(),r(6," Crear Curso "),n()(),f(7,"mat-divider"),m(8,Ie,1,0,"mat-spinner",4)(9,ke,18,3,"table",5),n()()),e&2&&(s(8),rt(a.isLoading?8:9))},dependencies:[B,y,Ct,V,kt,Vt,qt,Pt,jt,Ht,Lt,Gt,zt,Ut,L,P,O],styles:[".bg-table[_ngcontent-%COMP%]{background-color:#2e3b38}"]})};var pe=W(et());function je(t,i){if(t&1&&(C(0,14),o(1,"mat-card",15)(2,"div",16)(3,"mat-icon",17),r(4,"radio_button_checked"),n(),o(5,"p",18),r(6),n()()(),_()),t&2){let e=i.$implicit;s(6),Y(" Clase ",e.id," - ",e.name," ")}}function Ve(t,i){if(t&1){let e=D();o(0,"mat-card",22)(1,"mat-card-header")(2,"mat-card-title"),r(3),n(),o(4,"mat-card-subtitle"),r(5),n()(),o(6,"mat-card-actions",8)(7,"button",23),g("click",function(){let l=I(e).$implicit,d=p(4);return S(d.onDeleteInscription(l.id))}),r(8," DESINSCRIBIR "),n()()()}if(t&2){let e=i.$implicit;s(3),Y(" ",e.firstName," ",e.lastName,""),s(2),v("ID: ",e.id,"")}}function Pe(t,i){if(t&1&&(C(0),m(1,Ve,9,3,"mat-card",21),_()),t&2){let e=p().ngIf;s(),c("ngForOf",e)}}function Le(t,i){if(t&1&&(o(0,"div",19),m(1,Pe,2,1,"ng-container",20),n()),t&2){let e=i.ngIf;p();let a=X(21);s(),c("ngIf",e.length>0)("ngIfElse",a)}}function Ge(t,i){t&1&&(o(0,"p"),r(1,"No hay estudiantes inscritos en este curso."),n())}function qe(t,i){if(t&1&&(o(0,"div",3)(1,"mat-card",4)(2,"div",5)(3,"div")(4,"h1",6),r(5),n(),f(6,"mat-divider"),o(7,"h4",7),r(8),n()(),o(9,"mat-card-actions",8)(10,"button",9)(11,"mat-icon"),r(12,"folder_open"),n(),r(13," Material del Curso "),n()()(),o(14,"mat-tab-group")(15,"mat-tab",10),m(16,je,7,2,"ng-container",11),n(),o(17,"mat-tab",12),m(18,Le,2,2,"div",13),E(19,"async"),m(20,Ge,2,0,"ng-template",null,1,Z),n()()()()),t&2){let e=i.ngIf,a=p();s(5),x(e.name),s(3),x(e.description),s(8),c("ngForOf",e.classes),s(2),c("ngIf",M(19,4,a.studentsByCourse$))}}function He(t,i){t&1&&f(0,"mat-spinner",24)}var J=class t{constructor(i,e){this.activatedRoute=i;this.store=e;this.courseId=this.activatedRoute.snapshot.params.id,this.students$=this.store.select(Zt),this.course$=this.store.select(ie),this.inscriptions$=this.store.select(q),this.inscriptionsByCourse$=this.inscriptions$.pipe(F(a=>a.filter(l=>l.courseId===this.courseId))),this.studentsByCourse$=nt([this.students$,this.inscriptionsByCourse$]).pipe(F(([a,l])=>{let d=l.map(Q=>Q.studentId);return a.filter(Q=>d.includes(Q.id))}))}courseId;course$;classList=[];inscriptions$;inscriptionsByCourse$;studentsByCourse$;students$;ngOnInit(){this.store.dispatch(w.loadInscriptions()),this.store.dispatch(Xt.loadStudents()),this.store.dispatch(h.loadCourseById({id:this.courseId}))}onDeleteInscription(i){this.courseId&&this.inscriptions$.subscribe(a=>{let l=a.filter(d=>d.studentId===i);l.length>0&&pe.default.fire({title:"\xBFEst\xE1s seguro?",text:"No podr\xE1s revertir esta acci\xF3n",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar"}).then(d=>{d.isConfirmed&&this.store.dispatch(w.deleteInscription({id:l[0].id}))})})}static \u0275fac=function(e){return new(e||t)(u(N),u(k))};static \u0275cmp=b({type:t,selectors:[["app-course-detail"]],decls:4,vars:4,consts:[["loading",""],["noStudents",""],["class","container",4,"ngIf","ngIfElse"],[1,"container"],[1,"course-status"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"text-center","my-5"],[1,"text-center","my-4"],["align","end"],["mat-raised-button","","color","primary"],["label","Programa"],["class","my-4",4,"ngFor","ngForOf"],["label","Alumnos"],["class","m-4",4,"ngIf"],[1,"my-4"],["appearance","outlined",1,"p-3","col-12","my-3","d-flex","justify-content-between","flex-row"],[1,"d-flex","gap-4"],["matListItemIcon",""],[1,"my-auto"],[1,"m-4"],[4,"ngIf","ngIfElse"],["class","border rounded m-5 d-flex",4,"ngFor","ngForOf"],[1,"border","rounded","m-5","d-flex"],["mat-flat-button","",3,"click"],[1,"mx-auto","m-5"]],template:function(e,a){if(e&1&&(m(0,qe,22,6,"div",2),E(1,"async"),m(2,He,1,0,"ng-template",null,0,Z)),e&2){let l=X(3);c("ngIf",M(1,2,a.course$))("ngIfElse",l)}},dependencies:[A,B,y,V,lt,pt,ut,dt,ct,L,P,St,Jt,Kt,O],styles:['@charset "UTF-8";.mat-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}.custom-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.custom-card[_ngcontent-%COMP%]{width:100%;display:block;box-sizing:border-box}']})};var ze=[{path:"",component:U},{path:":id/detail",component:J}],K=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=R({type:t});static \u0275inj=$({imports:[tt.forChild(ze),tt]})};var ue=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=R({type:t});static \u0275inj=$({imports:[at,K,Qt,j.forFeature(Yt),j.forFeature(oe),j.forFeature(te),G.forFeature([ae]),G.forFeature([re]),G.forFeature([ne])]})};export{ue as CoursesModule};
