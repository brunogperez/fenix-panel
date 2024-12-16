import{a as et}from"./chunk-6ZEMUI4Q.js";import{a as se}from"./chunk-5YKRZHXE.js";import{a as me}from"./chunk-CHZWZK5J.js";import{a as E,b as le,c as Y,d as nt,e as de,f as ce,g as pe,i as ue,j as ot,l as fe,m as _e,n as Ce}from"./chunk-KWYTEKE5.js";import{a as ae,b as it}from"./chunk-CK25IJLO.js";import{d as U}from"./chunk-A7RA4PBA.js";import{d as Et}from"./chunk-52GIBL2D.js";import{o as B,u as k}from"./chunk-HNE7D7Y7.js";import{A as ee,B as ie,C as ne,D as oe,I as re,a as L,b as $t,c as Bt,d as kt,e as G,f as H,i as Ot,j as Vt,k as jt,l as Pt,m as Lt,n as Gt,o as Ht,p as Ut,q as Yt,r as qt,s as Wt,t as zt,u as Jt,v as Kt,w as Qt,x as Xt,y as Zt,z as te}from"./chunk-IIQQG7MX.js";import{Ba as Tt,Da as V,Fa as Nt,Ga as j,Ia as P,Ja as wt,Ka as Ft,La as Rt,Na as At,ca as vt,da as xt,fa as bt,ga as It,ha as Dt,i as $,k as gt,l as ht,m as tt,ta as T,ua as Mt,wa as O,ya as yt}from"./chunk-4SWAUFVP.js";import{Db as s,Ga as v,Ha as x,Ib as c,L as st,Nb as pt,R as dt,Rb as o,Sb as n,Tb as p,Ub as g,Vb as h,Xb as b,_b as _,a as rt,ac as u,b as at,ca as ct,dc as ut,e as X,fd as _t,gd as R,id as A,kb as m,kc as N,l as mt,lb as f,lc as r,ld as Ct,ma as w,mc as D,md as St,nc as I,oc as ft,wa as y,wc as C,x as M,xa as F,xc as S,y as lt,yc as Z}from"./chunk-PWY5XFB5.js";var he=X(it());var q=class t{constructor(i,e,a){this.matDialogRef=i;this.formBuilder=e;this.data=a;this.studentForm=this.formBuilder.group({firstName:[null,[et]],lastName:[null,[et]],email:[null,[V.required,V.email]],birthdate:[null,[V.required]]}),this.patchForm()}studentForm;get firstNameControl(){return this.studentForm.get("firstName")}get lastNameControl(){return this.studentForm.get("lastName")}get emailControl(){return this.studentForm.get("email")}get isEditing(){return!!this.data?.editStudent}patchForm(){this.data?.editStudent&&this.studentForm.patchValue(this.data.editStudent)}onSave(){this.studentForm.invalid?this.studentForm.markAllAsTouched():(this.matDialogRef.close(at(rt({},this.studentForm.value),{id:this.isEditing?this.data.editStudent.id:ae(25),createdAt:this.isEditing?this.data.editStudent.createdAt:new Date})),he.default.fire("Buen trabajo!",`El alumno ha sido ${this.isEditing?"editado":"creado"} exitosamente.`,"success"))}static \u0275fac=function(e){return new(e||t)(f(Pt),f(Rt),f(Lt))};static \u0275cmp=y({type:t,selectors:[["app-students-dialog"]],decls:33,vars:4,consts:[["picker",""],["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"row"],[1,"col-6"],["matInput","","formControlName","firstName","type","text"],["matInput","","formControlName","lastName","type","text"],[1,"col-12"],["matInput","","type","email","formControlName","email"],["matInput","","formControlName","birthdate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","",3,"click"]],template:function(e,a){if(e&1){let l=b();o(0,"h1",1),r(1),n(),o(2,"div",2)(3,"form",3)(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),r(7,"Nombre"),n(),p(8,"input",6),n(),o(9,"mat-form-field",5)(10,"mat-label"),r(11,"Apellido"),n(),p(12,"input",7),n()(),o(13,"mat-form-field",8)(14,"mat-label"),r(15,"Email"),n(),p(16,"input",9),n(),o(17,"mat-form-field")(18,"mat-label"),r(19,"Choose your birthdate"),n(),p(20,"input",10),o(21,"mat-hint"),r(22,"MM/DD/YYYY"),n(),p(23,"mat-datepicker-toggle",11)(24,"mat-datepicker",null,0),o(26,"mat-error"),r(27,"Este campo es requerido"),n()()(),o(28,"div",12)(29,"button",13),r(30,"Cancelar"),n(),o(31,"button",14),_("click",function(){return v(l),x(a.onSave())}),r(32,"Guardar"),n()()()}if(e&2){let l=N(25);m(),I(" ",(a.data==null?null:a.data.editStudent)==null?"Crear":"Editar",` alumno
`),m(2),c("formGroup",a.studentForm),m(17),c("matDatepicker",l),m(3),c("for",l)}},dependencies:[P,Tt,Nt,j,wt,Ft,T,G,L,Bt,$t,kt,H,Ot,Vt,jt,Ht,Ut,qt,Yt]})};var ve=X(it());function Fe(t,i){t&1&&p(0,"mat-spinner",7)}function Re(t,i){t&1&&(o(0,"th",19),r(1,"ID"),n())}function Ae(t,i){if(t&1&&(o(0,"td",20),r(1),n()),t&2){let e=i.$implicit;m(),D(e.id)}}function $e(t,i){t&1&&(o(0,"th",19),r(1,"Name"),n())}function Be(t,i){if(t&1&&(o(0,"td",20),r(1),C(2,"userFullName"),n()),t&2){let e=i.$implicit;m(),D(S(2,1,e))}}function ke(t,i){t&1&&(o(0,"th",19),r(1,"Email"),n())}function Oe(t,i){if(t&1&&(o(0,"td",20),r(1),n()),t&2){let e=i.$implicit;m(),D(e.email)}}function Ve(t,i){t&1&&(o(0,"th",19),r(1,"Edad"),n())}function je(t,i){if(t&1&&(o(0,"td",20),r(1),C(2,"age"),n()),t&2){let e=i.$implicit;m(),I(" ",S(2,1,e.birthdate)," a\xF1os ")}}function Pe(t,i){t&1&&(o(0,"th",19),r(1,"Created Date"),n())}function Le(t,i){if(t&1&&(o(0,"td",20),r(1),C(2,"date"),n()),t&2){let e=i.$implicit;m(),I(" ",S(2,1,e.createdAt)," ")}}function Ge(t,i){t&1&&(o(0,"th",19),r(1,"Actions"),n())}function He(t,i){if(t&1){let e=b();o(0,"button",21),_("click",function(){v(e);let l=u().$implicit,d=u(2);return x(d.openDialog(l))}),o(1,"mat-icon"),r(2,"edit"),n()()}}function Ue(t,i){if(t&1){let e=b();o(0,"button",21),_("click",function(){v(e);let l=u().$implicit,d=u(2);return x(d.onDelete(l.id))}),o(1,"mat-icon"),r(2,"delete"),n()()}}function Ye(t,i){if(t&1){let e=b();o(0,"td",20)(1,"button",21),_("click",function(){let l=v(e).$implicit,d=u(2);return x(d.goToDetail(l.id))}),o(2,"mat-icon"),r(3,"visibility"),n()(),s(4,He,3,0,"button",22),C(5,"async"),s(6,Ue,3,0,"button",22),C(7,"async"),n()}if(t&2){let e=u(2);m(4),c("ngIf",S(5,2,e.isAdmin$)==!0),m(2),c("ngIf",S(7,4,e.isAdmin$)==!0)}}function qe(t,i){t&1&&p(0,"tr",23)}function We(t,i){t&1&&p(0,"tr",24)}function ze(t,i){if(t&1&&(o(0,"table",8),g(1,9),s(2,Re,2,0,"th",10)(3,Ae,2,1,"td",11),h(),g(4,12),s(5,$e,2,0,"th",10)(6,Be,3,3,"td",11),h(),g(7,13),s(8,ke,2,0,"th",10)(9,Oe,2,1,"td",11),h(),g(10,14),s(11,Ve,2,0,"th",10)(12,je,3,3,"td",11),h(),g(13,15),s(14,Pe,2,0,"th",10)(15,Le,3,3,"td",11),h(),g(16,16),s(17,Ge,2,0,"th",10)(18,Ye,8,6,"td",11),h(),s(19,qe,1,0,"tr",17)(20,We,1,0,"tr",18),n()),t&2){let e=u();c("dataSource",e.students$),m(19),c("matHeaderRowDef",e.displayedColumns),m(),c("matRowDefColumns",e.displayedColumns)}}var z=class t{constructor(i,e,a,l){this.matDialog=i;this.router=e;this.activatedRoute=a;this.store=l;this.user$=this.store.select(Et),this.isAdmin$=this.user$.pipe(M(d=>d?.role==="admin")),this.students$=this.store.select(Y)}displayedColumns=["id","name","email","birthdate","createdAt","actions"];user$;isAdmin$;students$;searchTerm$=new mt;dataSource=[];isLoading=!1;ngOnInit(){this.searchTerm$.pipe(ct(""),st(400),dt()).subscribe(i=>{this.store.dispatch(E.searchStudents({term:i}))})}search(i){let e=i.currentTarget;this.searchTerm$.next(e.value)}goToDetail(i){this.router.navigate([i,"detail"],{relativeTo:this.activatedRoute})}openDialog(i){this.matDialog.open(q,{data:{editStudent:i}}).afterClosed().subscribe({next:e=>{e&&(i?this.store.dispatch(E.updateStudent({id:i.id,update:e})):this.store.dispatch(E.createStudent({student:e})))}})}onDelete(i){ve.default.fire({title:"\xBFEst\xE1s seguro?",text:"No podr\xE1s revertir esta acci\xF3n",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&this.store.dispatch(E.deleteStudent({id:i}))})}static \u0275fac=function(e){return new(e||t)(f(Gt),f(gt),f($),f(B))};static \u0275cmp=y({type:t,selectors:[["app-students"]],decls:15,vars:1,consts:[[1,"container","p-5"],[1,"example-form","text-center"],[1,"col-4"],["matInput","","type","search","name","","id","",3,"input"],[1,"p-2","rounded-4","bg-table"],[1,"demo-button-container","m-2"],["mat-flat-button","",3,"click"],[1,"mx-auto","m-5"],["mat-table","",1,"bg-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","email"],["matColumnDef","birthdate"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",1,"m-1",3,"click"],["mat-icon-button","","class","m-1",3,"click",4,"ngIf"],["mat-header-row",""],["mat-row",""]],template:function(e,a){e&1&&(o(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),r(4,"Buscar alumno..."),n(),o(5,"input",3),_("input",function(d){return a.search(d)}),n()()(),o(6,"div",4)(7,"div",5)(8,"button",6),_("click",function(){return a.openDialog()}),o(9,"mat-icon"),r(10,"add"),n(),r(11," Crear Alumno "),n()(),p(12,"mat-divider"),s(13,Fe,1,0,"mat-spinner",7)(14,ze,21,3,"table",8),n()()),e&2&&(m(13),pt(a.isLoading?13:14))},dependencies:[R,P,j,T,Mt,O,G,L,H,Wt,Jt,Zt,Kt,zt,te,Qt,Xt,ee,ie,ne,yt,A,Ct,me,se],styles:[".bg-table[_ngcontent-%COMP%]{background-color:#2e3b38}"]})};var xe=X(it());function Je(t,i){if(t&1&&(o(0,"div",13)(1,"div",14)(2,"mat-icon",15),r(3,"fingerprint"),n(),o(4,"div")(5,"strong"),r(6,"ID"),n(),o(7,"p"),r(8),n()()(),o(9,"div",14)(10,"mat-icon",15),r(11,"person"),n(),o(12,"div")(13,"strong"),r(14,"Nombre"),n(),o(15,"p"),r(16),n()()(),o(17,"div",14)(18,"mat-icon",15),r(19,"email"),n(),o(20,"div")(21,"strong"),r(22,"Email"),n(),o(23,"p"),r(24),n()()()()),t&2){let e=i.ngIf;m(8),D(e.id),m(8),ft("",e.firstName," ",e==null?null:e.lastName,""),m(8),D(e.email)}}function Ke(t,i){if(t&1){let e=b();o(0,"mat-card",21)(1,"mat-card-header")(2,"mat-card-title"),r(3),n(),o(4,"mat-card-subtitle"),r(5),n()(),o(6,"mat-card-actions",22)(7,"button",23),_("click",function(){let l=v(e).$implicit,d=u(4);return x(d.onDeleteInscription(l.id))}),r(8," DESINSCRIBIR "),n()()()}if(t&2){let e=i.$implicit;m(3),I(" ",e.name," "),m(2),I("ID: ",e.id,"")}}function Qe(t,i){if(t&1&&(g(0),o(1,"mat-card",18)(2,"h3",19),r(3,"Cursos inscriptos"),n(),s(4,Ke,9,2,"mat-card",20),n(),h()),t&2){let e=u().ngIf;m(4),c("ngForOf",e)}}function Xe(t,i){if(t&1&&(o(0,"div",16),s(1,Qe,5,1,"ng-container",17),n()),t&2){let e=i.ngIf;u();let a=N(13);m(),c("ngIf",e.length>0)("ngIfElse",a)}}function Ze(t,i){t&1&&(o(0,"mat-card",18)(1,"div",24)(2,"p",25),r(3,"ESTE ALUMNO NO ESTA INSCRIPTO EN NINGUN CURSO"),n(),o(4,"button",26),r(5," Ir a Inscripciones "),n()()())}function ti(t,i){if(t&1&&(o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"mat-card",7)(5,"div",8),p(6,"img",9),n()()()(),o(7,"mat-card",10),s(8,Je,25,4,"div",11),C(9,"async"),n()(),s(10,Xe,2,2,"div",12),C(11,"async"),s(12,Ze,6,0,"ng-template",null,1,Z),n()),t&2){let e=i.ngIf,a=u();m(6),ut("alt","`Avatar de ",e.firstName," ",e.lastName,"`"),m(2),c("ngIf",S(9,5,a.student$)),m(2),c("ngIf",S(11,7,a.coursesByStudent$))}}function ei(t,i){t&1&&(p(0,"mat-progress-bar",27),o(1,"p",28),r(2,"CARGANDO..."),n())}var J=class t{constructor(i,e){this.activatedRoute=i;this.store=e;this.courseId=this.activatedRoute.snapshot.params.id,this.studentId=this.activatedRoute.snapshot.params.id,this.inscriptions$=this.store.select(ot),this.inscriptionsByStudent$=this.inscriptions$.pipe(M(a=>a.filter(l=>l.studentId===this.studentId))),this.student$=this.store.select(Y).pipe(M(a=>a.find(l=>l.id===this.studentId))),this.courses$=this.store.select(pe),this.coursesByStudent$=lt([this.courses$,this.inscriptionsByStudent$]).pipe(M(([a,l])=>{let d=l.map(Q=>Q.courseId);return a.filter(Q=>d.includes(Q.id))}))}courseId;studentId;courses$;student$;inscriptions$;inscriptionsByStudent$;coursesByStudent$;ngOnInit(){this.store.dispatch(E.loadStudents()),this.store.dispatch(de.loadCourses()),this.store.dispatch(nt.loadInscriptions())}onDeleteInscription(i){this.courseId&&this.store.select(ot).subscribe(a=>{let l=a.filter(d=>d.courseId===i);l.length>0&&xe.default.fire({title:"\xBFEst\xE1s seguro?",text:"No podr\xE1s revertir esta acci\xF3n",icon:"warning",showCancelButton:!0,confirmButtonText:"S\xED, eliminar",cancelButtonText:"Cancelar"}).then(d=>{d.isConfirmed&&this.store.dispatch(nt.deleteInscription({id:l[0].id}))})})}static \u0275fac=function(e){return new(e||t)(f($),f(B))};static \u0275cmp=y({type:t,selectors:[["app-student-detail"]],decls:4,vars:4,consts:[["loading",""],["noStudents",""],["class","my-auto justify-content-center",4,"ngIf","ngIfElse"],[1,"my-auto","justify-content-center"],[1,"align-items-center","d-flex","gap-4","p-5","dCards"],[1,"col-4"],[1,"col-12"],[1,"col-12","p-5","m-auto"],[1,"card-content","m-auto","text-center"],["src","https://picsum.photos/200","srcset","",3,"alt"],[1,"col-6","p-5","bg-table"],["class","card-content d-inline",4,"ngIf"],["class","m-4",4,"ngIf"],[1,"card-content","d-inline"],[1,"info-item"],["matListItemIcon",""],[1,"m-4"],[4,"ngIf","ngIfElse"],[1,"border","rounded","m-5","p-5","border-3"],[1,"text-center","m-2"],["class","border rounded m-3 d-flex",4,"ngFor","ngForOf"],[1,"border","rounded","m-3","d-flex"],["align","end"],["mat-flat-button","",3,"click"],[1,"d-flex","flex-column","align-items-center"],[1,"text-center"],["mat-flat-button","","routerLink","/dashboard/inscriptions",1,"col-2","m-auto"],["mode","indeterminate"],[1,"text-center","my-5"]],template:function(e,a){if(e&1&&(s(0,ti,14,9,"div",2),C(1,"async"),s(2,ei,3,0,"ng-template",null,0,Z)),e&2){let l=N(3);c("ngIf",S(1,2,a.student$))("ngIfElse",l)}},dependencies:[_t,R,ht,T,O,vt,It,Dt,bt,xt,oe,At,A],styles:[".dCards[_ngcontent-%COMP%]{height:20vh}.course-content[_ngcontent-%COMP%]{height:50vh}.info-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:10px}img[_ngcontent-%COMP%]{width:200px;height:200px;color:#fff}.bg-table[_ngcontent-%COMP%]{background-color:#2e3b38}"]})};var ii=[{path:"",component:z},{path:":id/detail",component:J}],K=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=F({type:t});static \u0275inj=w({imports:[tt.forChild(ii),tt]})};var be=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=F({type:t});static \u0275inj=w({imports:[St,K,re,k.forFeature(le),U.forFeature([fe]),k.forFeature(ue),U.forFeature([_e]),k.forFeature(ce),U.forFeature([Ce])]})};export{be as StudentsModule};