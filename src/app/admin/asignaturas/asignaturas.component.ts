import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Asingatura } from './inteface-materia';
import { Product } from './Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MateriaService } from './materia.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit,OnDestroy {
  guardarRelacion($event: Event) {
  throw new Error('Method not implemented.');
  }

    subscription : Subscription
    public asignatura: any = [];
    datos!: Asingatura[];
    dato!: Asingatura;
    datosedit !: Asingatura;
    productDialog!: boolean;
    idAsignatura : number
    products!: Product[];
  
    product!: Product;
  
    selectedProducts!: any;
  
    submitted!: boolean;
    relacionDialog! : boolean 
    statuses!: any[];
    prerequisitos: any;
    asignaturaForm!: FormGroup;
    selectedPrerequisitos: any;
    inventoryStatus!: any;
    cols: { field: string; header: string }[];
    selectedDocente:any
    listadocentes:any
    listaHospitales:any
    tituloModal ="Asignatura"
    editar: boolean= false;
    sourceCompetencia!: any[];
  
    targetCompetencia!: any[];
    constructor(
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private materiaService: MateriaService,
      private fb:FormBuilder,

    ) {}
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
      console.log("suscripcion destuida");
    }
  
    ngOnInit(): void {
      this.asignaturaForm = this.initForm();
  
      this.cargarDatos();
      this.cargarDocente()
       this.subscription = this.materiaService.refresh$.subscribe(()=>{
        this.cargarDatos();
       })
       
       this.targetCompetencia = [];
       this.materiaService.getHospitales().subscribe(res=>{
        this.listaHospitales = res;
       })
    }


    initForm(): FormGroup {
      return this.fb.group({
        id: [''],
        nombre:      ['',[Validators.required,Validators.minLength(7)]],
        siglaCodigo: [,[Validators.required,,Validators.minLength(7)]],
        cargaHoraria:[,[Validators.required]],
        hora_entrada:[,[Validators.required]],
        hora_salida:[,[Validators.required]],
        nMeses:      [,[Validators.required]],
        paralelo:    ['',[Validators.required]],
        docente:    ['',[Validators.required]],
        hospital :['1',[Validators.required]]
      });
    }
    cargarDatos() {
      this.materiaService.getMarteria().subscribe((respuesta: Asingatura[]) => {
        this.datos = respuesta;
        console.log("cargando tabla");
      });
    }
    nuevoAsignatura() {
      this.editar = false
      this.asignaturaForm = this.initForm();
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
    }
    cargarDocente(){
      this.materiaService.getDocenteNombre().subscribe(res =>{
        this.listadocentes = res
        console.log("cargando docentes");
        
      })
    }
    deleteSelectedAsignatura() {
      
      // console.log(this.selectedProducts[0].id);
      // for (let i = 0; i < this.selectedProducts.length; i++) {
      //   materiaBorrar.push(this.selectedProducts[i].id);
      //   console.log(materiaBorrar);
      // }
      this.confirmationService.confirm({
        message:
          '¿Está seguro de que desea eliminar las asignatura selecionadas seleccionados?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle text-orange-500',
        accept: () => {
          const materiaBorrar: [] =[]
          
          for (let i = 0; i < this.selectedProducts.length; i++) {
            this.materiaService.deleteMateria(this.selectedProducts[i].id).subscribe(res=>{
              console.log(res);
            })
            
          }
          // this.selectedProducts = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Operacion Realizada',
            detail: 'Eliminado con exito',
            life: 3000,
          });
        },
      });
    }
    hideDialog() {
      this.productDialog = false;
      
    }
    guardarAsignatura() {
      
      const newAsignatura = this.asignaturaForm.value
      delete newAsignatura.id
      this.materiaService.postMateria(newAsignatura).subscribe(res =>{
        console.log(res);
        this.hideDialog()
      })
  
    }
    editMateria(dato:any){
      console.log(dato);
      this.asignatura= this.dato
      this.asignaturaForm.setValue({
        id: dato.id ,
        nombre:      dato.nombre,
        siglaCodigo: dato.siglaCodigo,
        cargaHoraria: dato.cargaHoraria,
        hora_entrada : dato.hora_entrada,
        hora_salida: dato.hora_salida,
        nMeses:     dato.nMeses,
        paralelo:   dato.paralelo,
        docente:   dato.docente.id,
        hospital : dato.hospital.id
      })
      this.editar = true
      this.productDialog = true;
    }
    guardarEditarMateria(asignatura:any ){
      console.log(asignatura);
      const id = asignatura.id
      delete asignatura.id
      console.log(id,"*",asignatura);
      
      this.materiaService.updatedaMateria(id,asignatura).subscribe(res=>{
        this.hideDialog()
        this.messageService.add({
          severity: 'success',
          summary: 'Operacion Realizada',
          detail: 'Eliminado con exito',
          life: 3000,
        });
      })
    }
  }
