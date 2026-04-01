class Encap{
    private emp_id:number=0;
    private emp_name:string="";
    private emp_status:string="";

    setemp_id(emp_id:number){
        this.emp_id=emp_id;
    }

    setemp_name(emp_name:string){
        this.emp_name=emp_name;
    }

    setemp_status(status:string){
        this.emp_status=status;
    }

    getemp_id(){
        return this.emp_id;
    }

    getemp_name(){
        return this.emp_name;
    }

    getemp_status(){
        return this.emp_status;
    }
}

const obj = new Encap();
obj.setemp_id(45);
obj.setemp_name("Badri");
obj.setemp_status("Active");
console.log(obj.getemp_id());
console.log(obj.getemp_name());
console.log(obj.getemp_status());